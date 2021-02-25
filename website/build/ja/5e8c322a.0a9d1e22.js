(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{128:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return u}));var c=a(0),i=a.n(c);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,c)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,c,i=function(e,t){if(null==e)return{};var a,c,i={},l=Object.keys(e);for(c=0;c<l.length;c++)a=l[c],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(c=0;c<l.length;c++)a=l[c],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var r=i.a.createContext({}),p=function(e){var t=i.a.useContext(r),a=t;return e&&(a="function"==typeof e?e(t):b(b({},t),e)),a},m=function(e){var t=p(e.components);return i.a.createElement(r.Provider,{value:t},e.children)},o={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var a=e.components,c=e.mdxType,l=e.originalType,n=e.parentName,r=s(e,["components","mdxType","originalType","parentName"]),m=p(a),d=c,u=m["".concat(n,".").concat(d)]||m[d]||o[d]||l;return a?i.a.createElement(u,b(b({ref:t},r),{},{components:a})):i.a.createElement(u,b({ref:t},r))}));function u(e,t){var a=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var l=a.length,n=new Array(l);n[0]=d;var b={};for(var s in t)hasOwnProperty.call(t,s)&&(b[s]=t[s]);b.originalType=e,b.mdxType="string"==typeof e?e:c,n[1]=b;for(var r=2;r<l;r++)n[r]=a[r];return i.a.createElement.apply(null,n)}return i.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},88:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return n})),a.d(t,"metadata",(function(){return b})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return p}));var c=a(3),i=a(7),l=(a(0),a(128)),n={id:"index",title:"werift",slug:"/api",sidebar_label:"Overview",custom_edit_url:null,hide_title:!0},b={unversionedId:"api/index",id:"api/index",isDocsHomePage:!1,title:"werift",description:"werift",source:"@site/docs/api/index.md",slug:"/api",permalink:"/website/build/ja/docs/api",editUrl:null,version:"current",sidebar_label:"Overview",sidebar:"someSidebar",previous:{title:"How to use",permalink:"/website/build/ja/docs/"},next:{title:"werift",permalink:"/website/build/ja/docs/api/modules"}},s=[{value:"SFU",id:"sfu",children:[]},{value:"MediaChannel",id:"mediachannel",children:[]},{value:"DataChannel",id:"datachannel",children:[]},{value:"Work in Progress Towards 1.0",id:"work-in-progress-towards-10",children:[]},{value:"Road Map Towards 2.0",id:"road-map-towards-20",children:[]}],r={toc:s};function p(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(l.b)("wrapper",Object(c.a)({},r,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"werift"},"werift"),Object(l.b)("p",null,"werift (",Object(l.b)("strong",{parentName:"p"},"We"),"b",Object(l.b)("strong",{parentName:"p"},"r"),"tc ",Object(l.b)("strong",{parentName:"p"},"I"),"mplementation ",Object(l.b)("strong",{parentName:"p"},"f"),"or ",Object(l.b)("strong",{parentName:"p"},"T"),"ypeScript)"),Object(l.b)("p",null,"werift is a WebRTC Implementation for TypeScript (Node.js)"),Object(l.b)("h1",{id:"install"},"install"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"npm install werift")),Object(l.b)("h1",{id:"examples"},"examples"),Object(l.b)("p",null,Object(l.b)("a",{parentName:"p",href:"https://github.com/shinyoshiaki/werift-webrtc/tree/master/examples"},"https://github.com/shinyoshiaki/werift-webrtc/tree/master/examples")),Object(l.b)("h3",{id:"sfu"},"SFU"),Object(l.b)("p",null,Object(l.b)("a",{parentName:"p",href:"https://github.com/shinyoshiaki/node-sfu"},"https://github.com/shinyoshiaki/node-sfu")),Object(l.b)("h1",{id:"demo"},"demo"),Object(l.b)("h2",{id:"mediachannel"},"MediaChannel"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-sh"},"yarn media\n")),Object(l.b)("p",null,"open\n",Object(l.b)("a",{parentName:"p",href:"https://shinyoshiaki.github.io/werift-webrtc/examples/mediachannel/pubsub/answer"},"https://shinyoshiaki.github.io/werift-webrtc/examples/mediachannel/pubsub/answer")),Object(l.b)("p",null,"see console & chrome://webrtc-internals/"),Object(l.b)("h2",{id:"datachannel"},"DataChannel"),Object(l.b)("p",null,"run"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-sh"},"yarn datachannel\n")),Object(l.b)("p",null,"open\n",Object(l.b)("a",{parentName:"p",href:"https://shinyoshiaki.github.io/werift-webrtc/examples/datachannel/answer"},"https://shinyoshiaki.github.io/werift-webrtc/examples/datachannel/answer")),Object(l.b)("p",null,"see console & chrome://webrtc-internals/"),Object(l.b)("h1",{id:"roadmap"},"RoadMap"),Object(l.b)("h2",{id:"work-in-progress-towards-10"},"Work in Progress Towards 1.0"),Object(l.b)("ul",{className:"contains-task-list"},Object(l.b)("li",{parentName:"ul",className:"task-list-item"},Object(l.b)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","STUN"),Object(l.b)("li",{parentName:"ul",className:"task-list-item"},Object(l.b)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","TURN",Object(l.b)("ul",{parentName:"li",className:"contains-task-list"},Object(l.b)("li",{parentName:"ul",className:"task-list-item"},Object(l.b)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","UDP"))),Object(l.b)("li",{parentName:"ul",className:"task-list-item"},Object(l.b)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","ICE",Object(l.b)("ul",{parentName:"li",className:"contains-task-list"},Object(l.b)("li",{parentName:"ul",className:"task-list-item"},Object(l.b)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Vanilla ICE"),Object(l.b)("li",{parentName:"ul",className:"task-list-item"},Object(l.b)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Trickle ICE"))),Object(l.b)("li",{parentName:"ul",className:"task-list-item"},Object(l.b)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","DTLS",Object(l.b)("ul",{parentName:"li",className:"contains-task-list"},Object(l.b)("li",{parentName:"ul",className:"task-list-item"},Object(l.b)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","DTLS-SRTP"),Object(l.b)("li",{parentName:"ul",className:"task-list-item"},Object(l.b)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Curve25519"),Object(l.b)("li",{parentName:"ul",className:"task-list-item"},Object(l.b)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","P-256"))),Object(l.b)("li",{parentName:"ul",className:"task-list-item"},Object(l.b)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","DataChannel"),Object(l.b)("li",{parentName:"ul",className:"task-list-item"},Object(l.b)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","MediaChannel",Object(l.b)("ul",{parentName:"li",className:"contains-task-list"},Object(l.b)("li",{parentName:"ul",className:"task-list-item"},Object(l.b)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","sendonly"),Object(l.b)("li",{parentName:"ul",className:"task-list-item"},Object(l.b)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","recvonly"),Object(l.b)("li",{parentName:"ul",className:"task-list-item"},Object(l.b)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","sendrecv"),Object(l.b)("li",{parentName:"ul",className:"task-list-item"},Object(l.b)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","multi track"))),Object(l.b)("li",{parentName:"ul",className:"task-list-item"},Object(l.b)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","RTP"),Object(l.b)("li",{parentName:"ul",className:"task-list-item"},Object(l.b)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","RTCP",Object(l.b)("ul",{parentName:"li",className:"contains-task-list"},Object(l.b)("li",{parentName:"ul",className:"task-list-item"},Object(l.b)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","SR/RR"),Object(l.b)("li",{parentName:"ul",className:"task-list-item"},Object(l.b)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Picture Loss Indication"),Object(l.b)("li",{parentName:"ul",className:"task-list-item"},Object(l.b)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","ReceiverEstimatedMaxBitrate"),Object(l.b)("li",{parentName:"ul",className:"task-list-item"},Object(l.b)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","GenericNack"),Object(l.b)("li",{parentName:"ul",className:"task-list-item"},Object(l.b)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","TransportWideCC"))),Object(l.b)("li",{parentName:"ul",className:"task-list-item"},Object(l.b)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","SRTP"),Object(l.b)("li",{parentName:"ul",className:"task-list-item"},Object(l.b)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","SRTCP"),Object(l.b)("li",{parentName:"ul",className:"task-list-item"},Object(l.b)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","SDP"),Object(l.b)("li",{parentName:"ul",className:"task-list-item"},Object(l.b)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","PeerConnection"),Object(l.b)("li",{parentName:"ul",className:"task-list-item"},Object(l.b)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Simulcast",Object(l.b)("ul",{parentName:"li",className:"contains-task-list"},Object(l.b)("li",{parentName:"ul",className:"task-list-item"},Object(l.b)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","recv"))),Object(l.b)("li",{parentName:"ul",className:"task-list-item"},Object(l.b)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","BWE",Object(l.b)("ul",{parentName:"li",className:"contains-task-list"},Object(l.b)("li",{parentName:"ul",className:"task-list-item"},Object(l.b)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","sender side BWE"))),Object(l.b)("li",{parentName:"ul",className:"task-list-item"},Object(l.b)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Documentation"),Object(l.b)("li",{parentName:"ul",className:"task-list-item"},Object(l.b)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Compatibility",Object(l.b)("ul",{parentName:"li",className:"contains-task-list"},Object(l.b)("li",{parentName:"ul",className:"task-list-item"},Object(l.b)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Chrome"),Object(l.b)("li",{parentName:"ul",className:"task-list-item"},Object(l.b)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","FireFox"),Object(l.b)("li",{parentName:"ul",className:"task-list-item"},Object(l.b)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Pion"),Object(l.b)("li",{parentName:"ul",className:"task-list-item"},Object(l.b)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","aiortc"),Object(l.b)("li",{parentName:"ul",className:"task-list-item"},Object(l.b)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","sipsorcery"))),Object(l.b)("li",{parentName:"ul",className:"task-list-item"},Object(l.b)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Interop E2E test",Object(l.b)("ul",{parentName:"li",className:"contains-task-list"},Object(l.b)("li",{parentName:"ul",className:"task-list-item"},Object(l.b)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Chrome"),Object(l.b)("li",{parentName:"ul"},"\u2193\u2193\u2193 ",Object(l.b)("a",{parentName:"li",href:"https://github.com/sipsorcery/webrtc-echoes"},"https://github.com/sipsorcery/webrtc-echoes")),Object(l.b)("li",{parentName:"ul",className:"task-list-item"},Object(l.b)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Pion"),Object(l.b)("li",{parentName:"ul",className:"task-list-item"},Object(l.b)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","aiortc"),Object(l.b)("li",{parentName:"ul",className:"task-list-item"},Object(l.b)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","sipsorcery")))),Object(l.b)("h2",{id:"road-map-towards-20"},"Road Map Towards 2.0"),Object(l.b)("ul",{className:"contains-task-list"},Object(l.b)("li",{parentName:"ul",className:"task-list-item"},Object(l.b)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","API compatible with browser RTCPeerConnection"),Object(l.b)("li",{parentName:"ul",className:"task-list-item"},Object(l.b)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","SDP",Object(l.b)("ul",{parentName:"li",className:"contains-task-list"},Object(l.b)("li",{parentName:"ul",className:"task-list-item"},Object(l.b)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","reuse inactive m-line"))),Object(l.b)("li",{parentName:"ul",className:"task-list-item"},Object(l.b)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Simulcast",Object(l.b)("ul",{parentName:"li",className:"contains-task-list"},Object(l.b)("li",{parentName:"ul",className:"task-list-item"},Object(l.b)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","send"))),Object(l.b)("li",{parentName:"ul",className:"task-list-item"},Object(l.b)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","support more cipher suites")),Object(l.b)("h1",{id:"reference"},"reference"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"aiortc ",Object(l.b)("a",{parentName:"li",href:"https://github.com/aiortc/aiortc"},"https://github.com/aiortc/aiortc")),Object(l.b)("li",{parentName:"ul"},"pion/webrtc ",Object(l.b)("a",{parentName:"li",href:"https://github.com/pion/webrtc"},"https://github.com/pion/webrtc")),Object(l.b)("li",{parentName:"ul"},"etc ....")))}p.isMDXComponent=!0}}]);