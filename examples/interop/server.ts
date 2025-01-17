import express from "express";
import { RTCPeerConnection } from "../../packages/webrtc/src";
import * as yargs from "yargs";
import https from "https";
import { readFileSync } from "fs";

(async () => {
  const args = await yargs
    .option("host", {
      description: "Host for HTTP server (default: 0.0.0.0)",
      default: "0.0.0.0",
    })
    .option("port", {
      description: "Port for HTTP server (default: 8080)",
      default: 8080,
    })
    .option("cert-file", { description: "SSL certificate file (for HTTPS)" })
    .option("key-file", { description: "SSL key file (for HTTPS)" })
    .option("static", {})
    .help().argv;

  console.log(args);

  const app = express();
  app.use(express.json());
  if (args["cert-file"] && args["key-file"]) {
    https
      .createServer(
        {
          cert: readFileSync(args["cert-file"] as string),
          key: readFileSync(args["key-file"] as string),
        },
        app
      )
      .listen(args.port, args.host);
  } else {
    app.listen(args.port, args.host);
  }
  app.use(express.static((args.static as string) || "./index.html"));

  app.post("/offer", async (req, res) => {
    const offer = req.body;

    const pc = new RTCPeerConnection({
      iceServers: [{ urls: "stun:stun.l.google.com:19302" }],
    });
    pc.onRemoteTransceiverAdded.subscribe(async (transceiver) => {
      const [track] = await transceiver.onTrack.asPromise();
      pc.addTrack(track);
    });
    pc.onDataChannel.subscribe((dc) => {
      dc.message.subscribe((msg) => dc.send(msg));
    });

    await pc.setRemoteDescription(offer);
    const answer = await pc.setLocalDescription(await pc.createAnswer());
    res.send(answer);
  });
})();
