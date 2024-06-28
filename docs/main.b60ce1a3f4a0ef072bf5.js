!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["micro-app-weather-main"]=t():e["micro-app-weather-main"]=t()}(self,(()=>(()=>{var e,t,n,r={7447:(e,t,n)=>{"use strict";n.r(t),n.d(t,{bootstrap:()=>fe,mount:()=>me,unmount:()=>be,update:()=>ge}),n(7941),n(2526),n(7327),n(1539),n(5003),n(9554),n(4747),n(9337),n(3321),n(9070);var r=n(4942),a=n(5861),o=n(4687),i=n.n(o),c=n(7294),s=n(3935),l=n(9439),u=(n(3710),n(2564),n(6535),n(9244),n(1249),n(2222),n(3967)),d=n.n(u),p=n(7557),f=n(894),h=n(913);var m=n(5893);const v=function(e){var t=e.main,n=e.mini,r=e.backdrop;return(0,m.jsxs)("div",{className:"micro-app-weather-layout-HBoKko",children:[(0,m.jsx)("div",{className:"micro-app-weather-backdropContainer-iHutfH",children:r}),(0,m.jsx)("div",{className:"micro-app-weather-miniContainer-kY3XGV",children:n}),(0,m.jsx)("div",{className:"micro-app-weather-mainContainer-BFt30f",children:t})]})},b=function(){var e=(new Date).getFullYear(),t=2024!==e?"".concat(2024,"-").concat(e):e;return(0,m.jsxs)("div",{className:"micro-app-weather-copyright-_5zZL8",children:[(0,m.jsx)("div",{children:"「基于和风天气提供地区的天气预报」"}),(0,m.jsx)("div",{children:"©".concat(t," Yves")}),(0,m.jsx)("div",{children:"Version: ".concat("24.06.28.173458")})]})},x={mainContainer:"micro-app-weather-mainContainer-VsQE1N",panel:"micro-app-weather-panel-iQtYYx",bgCover:"micro-app-weather-bgCover-T4qSoI",miniContainer:"micro-app-weather-miniContainer-Tkd0vI",header:"micro-app-weather-header-dDKpTz",floor:"micro-app-weather-floor-zhYbV2",nowTmp:"micro-app-weather-nowTmp-RGGHsZ",info:"micro-app-weather-info-ngzC9E",weatherInfo:"micro-app-weather-weatherInfo-l7f7KC",mask:"micro-app-weather-mask-cbLwap",backdrop:"micro-app-weather-backdrop-brTMWg",bgPanel:"micro-app-weather-bgPanel-B6Wke4",image:"micro-app-weather-image-KnFzaJ",video:"micro-app-weather-video-M6IIFW",hoursPanel:"micro-app-weather-hoursPanel-gDNCVj",listPanel:"micro-app-weather-listPanel-bSoFz5",linePanel:"micro-app-weather-linePanel-Mj2SGw",weekPanel:"micro-app-weather-weekPanel-Bw6Cg0",text:"micro-app-weather-text-bWuF6f"};var g=n(270),y=function(e){return{city:"杭州",weatherInfo:null,setWeatherInfo:function(t){return e({weatherInfo:t})}}};function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var j=(0,g.Ue)((function(){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},y.apply(void 0,arguments))})),O=(n(4916),n(7601),n(4723),n(9653),n(5306),n(3843),n(4603),n(8386),n(9714),function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"yyyy-MM-dd hh:mm:ss TT";if(e||(e=new Date),"string"==typeof e&&/^\d+$/.test(e)&&(e=new Date(+e)),"number"==typeof e&&(e=new Date(e)),"number"!=typeof e&&!(e instanceof Date)){var n=((e.match(/\+\d+:\d+/)||[])[0]||"").split(":").map(Number);e=e.replace(/年|月/g,"-").replace(/日/g,"");var r=new Date(e).getTime()+6e4*(n[0]||0)+1e3*(n[1]||0);e=new Date(r)}if("timestamp"===t)return"".concat(e.getTime());var a=Date.now()-e.getTime(),o=6e4,i=36e5,c=864e5;if("default"===t){if(a<o)return"刚刚";if(a>=o&&a<i)return"".concat(Math.round(a/o),"分钟前");if(a>=i&&a<c)return"".concat(Math.round(a/i),"小时前");a>=c&&a<1728e5&&(t="昨天 hh:mm");var s=(new Date).getFullYear();t=new Date("".concat(s,"-01-01")).getTime()<=e.getTime()?"MM月dd日 hh:mm":"yyyy年MM月dd日 hh:mm"}var l={"M+":e.getMonth()+1,"d+":e.getDate(),"h+":e.getHours(),"m+":e.getMinutes(),"s+":e.getSeconds(),"q+":Math.floor((e.getMonth()+3)/3),S:e.getMilliseconds(),"T+":e.getHours()<12?"AM":"PM","H+":e.getHours()%12==0?12:e.getHours()%12};return/(y+)/.test(t)&&(t=t.replace(RegExp.$1,String(e.getFullYear()).substr(4-RegExp.$1.length))),Object.keys(l).forEach((function(e){new RegExp("(".concat(e,")")).test(t)&&(t=t.replace(RegExp.$1,1===RegExp.$1.length?l[e]:"00".concat(l[e]).substr(String(l[e]).length)))})),t}),N=n(2185);const P=function(e){var t=(0,c.useRef)(null),n=(0,c.useRef)(null),r=(0,c.useState)(0),a=(0,l.Z)(r,2),o=a[0],i=a[1];return(0,c.useEffect)((function(){return t.current&&(n.current=new N.kL({container:t.current,autoFit:!0,margin:0,paddingTop:40,paddingBottom:20})),function(){n.current&&n.current.destroy()}}),[]),(0,c.useEffect)((function(){n.current&&e.data&&e.data.length&&o!==(null==e?void 0:e.updateTime)&&(n.current.clear(),n.current.data(e.data).encode("x","time").encode("y","value").encode("color","type").scale("x",{range:[0,1]}).scale("y",{nice:!0}).axis("x",{tick:!1,label:!1,title:!1}).axis("y",{tick:!1,label:!1,title:!1}).legend("color",!1),n.current.line().label({text:"value",style:{dy:-20,textBaseline:"top",textAlign:"center",fill:"#fff"},formatter:function(e){return e+"°"}}).style("stroke","white").tooltip(!1),n.current.point().encode("shape","point").style("fill","white").tooltip(!1),n.current.render(),i(e.updateTime||0))}),[null==e?void 0:e.updateTime,null==e?void 0:e.data]),(0,m.jsx)("div",{className:e.className,ref:t})};var k={200:"",204:"请求成功，但你查询的地区暂时没有你需要的数据。",400:"请求错误，可能包含错误的请求参数或缺少必选的请求参数。",401:"认证失败，可能使用了错误的KEY、数字签名错误、KEY的类型错误。",402:"超过访问次数或余额不足以支持继续访问服务，需充值、升级访问量或等待访问量重置。",403:"无访问权限。",404:"查询的数据或地区不存在。",429:"超过限定的QPM",500:"无响应或超时，接口服务异常"},D={xiayu:{color:"rgba(67,106,102,1)",image:"https://search-operate.cdn.bcebos.com/9669cac22a5833622982ecfdf38f4694.png",video:"https://search-operate.cdn.bcebos.com/5b8fa41e5c92ea8793a99c5081a7a9d8.mp4"},yin:{color:"rgba(109,125,150,1)",image:"https://search-operate.cdn.bcebos.com/1e53eb7bbd8fe233d4deae60abf5ce01.png",video:"https://search-operate.cdn.bcebos.com/98883df887a55c54f90befe517b0f6b8.mp4"},qing:{color:"rgba(92,162,221,1)",image:"https://search-operate.cdn.bcebos.com/cd614b12ef78f515e478c2494086b370.png",video:"https://search-operate.cdn.bcebos.com/3ad889fd821bc79439b29e7600dad777.mp4"},qingwan:{color:"rgba(74,82,130,1)",image:"https://search-operate.cdn.bcebos.com/bee86a441480c0aa9c0adff674f8f715.png",video:"https://search-operate.cdn.bcebos.com/1de63c2303ac334218c0ad19494f6f12.mp4"},duoyun:{color:"rgba(94,165,224,1)",image:"https://search-operate.cdn.bcebos.com/cf23aa483c94da0335d7a42b2682f373.png",video:"https://search-operate.cdn.bcebos.com/23ef1fc7fbd5829ac08f5656a4bfc9ba.mp4"},duoyunwan:{color:"rgba(74,82,130,1)",image:"https://search-operate.cdn.bcebos.com/dcb9d0d77671f3b2e2738cc394f9ee55.png",video:"https://search-operate.cdn.bcebos.com/763f9ffc102867da586d93ac171adb01.mp4"}},S={100:"qing",101:"duoyun",102:"duoyun",103:"duoyun",104:"yin",150:"qingwan",151:"duoyunwan",152:"duoyunwan",153:"duoyunwan",300:"xiayu",301:"xiayu",302:"xiayu",303:"xiayu",304:"xiayu",305:"xiayu",306:"xiayu",307:"xiayu",308:"xiayu",309:"xiayu",310:"xiayu",311:"xiayu",312:"xiayu",313:"xiayu",314:"xiayu",315:"xiayu",316:"xiayu",317:"xiayu",318:"xiayu",350:"xiayu",351:"xiayu",399:"xiayu"};const T=function(){var e=j((function(e){return e.city})),t=j((function(e){return e.weatherInfo})),n=(0,c.useState)([]),r=(0,l.Z)(n,2),a=r[0],o=r[1],i=(0,c.useState)([]),s=(0,l.Z)(i,2),u=s[0],g=s[1],y=(0,c.useState)({}),w=(0,l.Z)(y,2),N=w[0],k=w[1],T=(0,c.useState)({}),E=(0,l.Z)(T,2),C=E[0],M=E[1],_=(0,c.useState)(null),Z=(0,l.Z)(_,2),I=Z[0],B=Z[1];(0,c.useEffect)((function(){var e,n,r,a,i,c,s;null!=t&&t.data&&(g(((null==t||null===(e=t.data)||void 0===e?void 0:e.daily)||[]).flatMap((function(e){return[{time:e.fxDate,value:+e.tempMin,type:"tempMin"},{time:e.fxDate,value:+e.tempMax,type:"tempMax"}]}))),o(((null==t||null===(n=t.data)||void 0===n?void 0:n.hourly)||[]).map((function(e){return{time:e.fxTime,value:+e.temp}}))),k(null==t||null===(r=t.data)||void 0===r?void 0:r.daily[0]),M(null==t||null===(a=t.data)||void 0===a?void 0:a.now),B((s=null==t||null===(i=t.data)||void 0===i||null===(c=i.now)||void 0===c?void 0:c.icon,console.log("code>>>",s),D[S[+s]||"yin"])))}),[null==t?void 0:t.data]);var R=function(e){var t=e.needVideo,n=void 0!==t&&t;return(0,m.jsxs)("div",{className:x.bgPanel,style:{backgroundColor:null==I?void 0:I.color},children:[(0,m.jsx)("div",{className:x.image,style:{backgroundImage:"url(".concat(null==I?void 0:I.image,")")}}),n&&(0,m.jsx)("video",{className:x.video,src:null==I?void 0:I.video,poster:null==I?void 0:I.image,muted:!0,autoPlay:!0,"auto-rotate":"false",playsInline:!0,crossOrigin:"anonymous",loop:!0})]})},z=function(){return(0,m.jsx)("div",{className:x.nowTmp,children:"".concat((null==C?void 0:C.temp)||0,"°")})},F=function(){var n;return(0,m.jsxs)("div",{className:x.info,children:[(0,m.jsxs)("div",{children:[(0,m.jsx)(p.Z,{}),(0,m.jsxs)("span",{children:[e," 发布于: ",O(null==t||null===(n=t.data)||void 0===n?void 0:n.updateTime,"MM-dd hh:mm")||"-"]})]}),(0,m.jsxs)("div",{children:[(0,m.jsx)(f.Z,{}),(0,m.jsx)("span",{children:"".concat((null==C?void 0:C.category)||"-"," / ").concat((null==C?void 0:C.aqi)||0)})]}),(0,m.jsxs)("div",{children:[(0,m.jsx)(h.Z,{}),(0,m.jsx)("span",{children:"".concat((null==C?void 0:C.text)||""," ").concat((null==C?void 0:C.windDir)||""," ").concat((null==C?void 0:C.windScale)||0,"级")})]})]})},Y=function(){return(0,m.jsxs)("div",{className:x.weatherInfo,children:[(0,m.jsxs)("div",{children:[(0,m.jsx)("h5",{children:"温度"}),(0,m.jsx)("span",{children:"".concat((null==N?void 0:N.tempMin)||0,"°~").concat((null==N?void 0:N.tempMax)||0,"°")})]}),(0,m.jsxs)("div",{children:[(0,m.jsx)("h5",{children:"湿度"}),(0,m.jsx)("span",{children:"".concat((null==N?void 0:N.humidity)||0,"%")})]}),(0,m.jsxs)("div",{children:[(0,m.jsx)("h5",{children:"降水"}),(0,m.jsx)("span",{children:"".concat((null==N?void 0:N.precip)||0,"mm")})]}),(0,m.jsxs)("div",{children:[(0,m.jsx)("h5",{children:"气压"}),(0,m.jsx)("span",{children:"".concat((null==N?void 0:N.pressure)||0,"hPa")})]}),(0,m.jsxs)("div",{children:[(0,m.jsx)("h5",{children:"日出"}),(0,m.jsx)("span",{children:(null==N?void 0:N.sunrise)||"-"})]}),(0,m.jsxs)("div",{children:[(0,m.jsx)("h5",{children:"日落"}),(0,m.jsx)("span",{children:(null==N?void 0:N.sunset)||"-"})]})]})},A=function(){var e,n;return(0,m.jsxs)("div",{className:d()(x.listPanel,x.hoursPanel),children:[(0,m.jsx)("h3",{children:"24小时趋势图"}),(0,m.jsxs)("ul",{children:[((null==t||null===(e=t.data)||void 0===e?void 0:e.hourly)||[]).map((function(e,t){return(0,m.jsxs)("li",{children:[(0,m.jsx)("div",{}),(0,m.jsxs)("div",{children:[(0,m.jsx)("div",{className:x.text,children:"".concat(O(e.fxTime,"h")||0,"时")}),(0,m.jsx)("div",{className:x.text,children:e.text||"-"})]})]},"".concat(t))})),(0,m.jsx)("div",{className:x.linePanel,children:(0,m.jsx)(P,{updateTime:null==t||null===(n=t.data)||void 0===n?void 0:n.updateTime,data:a})})]})]})},W=function(){var e,n;return(0,m.jsxs)("div",{className:d()(x.listPanel,x.weekPanel),children:[(0,m.jsx)("h3",{children:"7日趋势图"}),(0,m.jsxs)("ul",{children:[((null==t||null===(e=t.data)||void 0===e?void 0:e.daily)||[]).map((function(e,t){return(0,m.jsxs)("li",{children:[(0,m.jsxs)("div",{children:[(0,m.jsx)("div",{className:x.text,children:O(e.fxDate,"MM-dd")||"-"}),(0,m.jsx)("div",{className:x.text,children:e.textDay||"-"})]}),(0,m.jsx)("div",{className:x.flex1}),(0,m.jsx)("div",{className:x.text,children:"".concat(e.windScaleDay||0,"级")})]},"".concat(t))})),(0,m.jsx)("div",{className:x.linePanel,children:(0,m.jsx)(P,{updateTime:null==t||null===(n=t.data)||void 0===n?void 0:n.updateTime,data:u})})]})]})};return(0,m.jsx)(v,{main:(0,m.jsx)("div",{className:x.mainContainer,children:(0,m.jsxs)("div",{className:x.panel,children:[(0,m.jsx)(A,{}),(0,m.jsx)(W,{})]})}),mini:(0,m.jsxs)("div",{className:x.miniContainer,children:[(0,m.jsx)("div",{className:x.header}),(0,m.jsxs)("div",{className:x.floor,children:[(0,m.jsx)(z,{}),(0,m.jsx)(F,{}),(0,m.jsx)(Y,{})]}),(0,m.jsx)("div",{className:x.copyright,children:(0,m.jsx)(b,{})})]}),backdrop:(0,m.jsx)("div",{className:x.backdrop,children:I&&(0,m.jsx)(R,{needVideo:!0})})})},E=function(){var e=j((function(e){return e.city})),t=j((function(e){return e.weatherInfo})),n=(0,c.useState)({}),r=(0,l.Z)(n,2),a=r[0],o=r[1];return(0,c.useEffect)((function(){var e;null!=t&&t.data&&o(null==t||null===(e=t.data)||void 0===e?void 0:e.now)}),[null==t?void 0:t.data]),null!=a&&a.temp?(0,m.jsx)("div",{className:"micro-app-weather-container-z89bJg",children:(0,m.jsxs)("div",{className:"micro-app-weather-panel-uMPymK",children:[(0,m.jsx)("div",{className:"micro-app-weather-left-mka9kQ",children:(0,m.jsx)("div",{className:"micro-app-weather-icon-Zb6hre",children:(0,m.jsx)("i",{className:"qi-".concat(null==a?void 0:a.icon,"-fill")})})}),(0,m.jsxs)("div",{className:"micro-app-weather-right-xKCtNz",children:[(0,m.jsx)("div",{className:"micro-app-weather-title-Y2kg2X",children:"".concat(null==a?void 0:a.text," ").concat(null==a?void 0:a.temp,"°")}),(0,m.jsx)("div",{className:"micro-app-weather-info-GsnaXt",children:"".concat(e,"天气")})]})]})}):null};var C=n(2982);n(9254),n(5069);const M="micro-app-weather-popupModel-cWVFnE",_="micro-app-weather-maxWindow-UpclWO",Z="micro-app-weather-dialogPanel-Au4QlG",I="micro-app-weather-dialogTool-fpSxBw",B="micro-app-weather-reverse-mfhna1",R="micro-app-weather-btn-tFT8ie",z="micro-app-weather-yellow-JfXiQe",F="micro-app-weather-green-Vro13N",Y="micro-app-weather-red-N7z5Z_",A="micro-app-weather-blue-TpOa3T",W="micro-app-weather-iconClose-iNcfCu",q="micro-app-weather-iconExpandOut-woy2jA",K="micro-app-weather-iconCompressOut-f6AXod",H="micro-app-weather-iconRetract-dDsSpr",V="micro-app-weather-iconLink-UNTZLC",Q="micro-app-weather-viewResizeContainer-VNWzPL",J="micro-app-weather-viewResizePanel-tRBWMw";function U(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function L(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?U(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):U(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function G(e){var t=e.panel,n=e.children,r=e.width,a=void 0===r?1024:r,o=e.height,i=void 0===o?640:o,s=e.visible,u=e.onCancel,p=e.needMaximize,f=void 0!==p&&p,h=e.needRetract,v=void 0===h?null:h,b=e.onRetract,x=e.bgCoverStyles,g=e.link,y=(e.needTrack,e.reverse);if(!t)return n;var w=(0,c.useState)(s||!1),j=(0,l.Z)(w,2),O=j[0],N=j[1],P=(0,c.useState)(s||!1),k=(0,l.Z)(P,2),D=k[0],S=k[1],T=(0,c.useState)(s||f),E=(0,l.Z)(T,2),U=E[0],G=E[1];(0,c.useEffect)((function(){void 0!==s&&(N(s),s&&S(!0))}),[s]);var X=function(){N(!1),u&&u()};return(0,m.jsxs)(m.Fragment,{children:[function(){if(n)return c.cloneElement(n,{onClick:function(){S(!0),N(!0)}})}(),D&&(0,m.jsx)(C.Z,{open:void 0!==s?s:O,onCancel:X,afterClose:function(){return S(!1)},destroyOnClose:!0,centered:!0,wrapClassName:d()(M,U&&_),width:a,title:null,footer:null,closable:!1,maskClosable:!1,styles:{mask:{backdropFilter:"blur(2px)"}},children:(0,m.jsx)("div",{className:Q,style:{paddingBottom:U?0:"".concat(i/a*100,"%"),height:U?"100%":"0%"},children:(0,m.jsxs)("div",{className:J,style:L({backgroundColor:"#fff"},x),children:[(0,m.jsx)("div",{className:d()(Z),children:t&&t({onClose:X})}),(0,m.jsxs)("div",{className:d()(I,y&&B),children:[null!==f&&(0,m.jsx)("div",{className:d()(R,F),onClick:function(){G("maximize"==(U?"reduction":"maximize"))},children:U?(0,m.jsx)("i",{className:K}):(0,m.jsx)("i",{className:q})}),null!==v&&(0,m.jsx)("div",{className:d()(R,z),onClick:b||X,children:(0,m.jsx)("i",{className:H})}),g&&(0,m.jsx)("div",{className:d()(R,A),onClick:function(){window.open(g)},children:(0,m.jsx)("i",{className:V})}),(0,m.jsx)("div",{className:d()(R,Y),onClick:X,children:(0,m.jsx)("i",{className:W})})]})]})})})]})}function X(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function $(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?X(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):X(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}n(8674),n(8309),n(6992),n(8783),n(3948),n(8862);var ee={set:function(e,t){if(!this.disabled)return void 0===t?this.remove(e):(this.storage.setItem(e,function(e){return JSON.stringify(e)}(t)),t)},get:function(e,t){if(this.disabled)return t;var n=function(e){if("string"==typeof e)try{return JSON.parse(e)}catch(t){return e||void 0}}(this.storage.getItem(e));return void 0===n?t:n},has:function(e){return void 0!==this.get(e)},remove:function(e){this.disabled||this.storage.removeItem(e)},clear:function(){this.disabled||this.storage.clear()},getAll:function(){if(this.disabled)return null;var e={};return this.forEach((function(t,n){e[t]=n})),e},forEach:function(e){if(!this.disabled)for(var t=0;t<this.storage.length;t++){var n=this.storage.key(t);e(n,this.get(n))}}};const te=$({storage:window.localStorage,session:$({storage:window.sessionStorage},ee)},ee);function ne(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function re(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ne(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ne(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ae="e87a-76a7-c419-432d-8175-73ef-8997-ca1e".replace(/-/gim,""),oe="https://devapi.qweather.com",ie="location=".concat(101210101,"&key=").concat(ae),ce={getNow:"".concat(oe,"/v7/weather/now?").concat(ie),get24h:"".concat(oe,"/v7/weather/24h?").concat(ie),get7d:"".concat(oe,"/v7/weather/7d?").concat(ie),getAir:"".concat(oe,"/v7/air/now?").concat(ie)},se=function(e){return fetch(e).then((function(e){return e.text()})).then((function(e){return JSON.parse(e)})).then((function(e){return{success:"200"===e.code,data:e,message:k[e.code]||""}})).catch((function(e){return{success:!1,data:null,message:(null==e?void 0:e.message)||"Failed to fetch"}}))},le=function(){var e=(0,a.Z)((function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return i().mark((function t(){var r,a,o,c,s,u,d,p,f,h;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(o=n(4147).u2,c=te.get(o),!(e||c&&null!==(r=c)&&void 0!==r&&r.updateTimestamp&&Date.now()-c.updateTimestamp<=36e5)){t.next=4;break}return t.abrupt("return",{success:!0,message:"",data:c});case 4:return t.next=6,Promise.all([se(ce.getNow),se(ce.get24h),se(ce.get7d),se(ce.getAir)]);case 6:return s=t.sent,u=(0,l.Z)(s,4),d=u[0],p=u[1],f=u[2],h=u[3],c=re(re(re(re(re({},d.data),p.data),f.data),h.data),{},{now:re(re({},d.data.now),h.data.now),updateTimestamp:+O(null==d||null===(a=d.data)||void 0===a?void 0:a.updateTime,"timestamp")}),d.success&&p.success&&f.success&&h.success&&te.set(o,c),t.abrupt("return",{success:d.success&&p.success&&f.success&&h.success,message:d.message||p.message||f.message||h.message,data:c});case 15:case"end":return t.stop()}}),t)}))()}));return function(){return e.apply(this,arguments)}}();const ue=function(e){var t=e.view,n=e.entryUrl,r=j((function(e){return e.setWeatherInfo})),o=function(){var e=(0,a.Z)(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,le();case 2:t=e.sent,r(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();(0,c.useEffect)((function(){o()}),[]);var s=(0,c.useState)(new Date),u=(0,l.Z)(s,2),d=u[0],p=u[1];return(0,c.useEffect)((function(){var e=setTimeout((function(){p(new Date),o()}),9e5);return function(){return clearTimeout(e)}}),[d]),"showroom"===t?(0,m.jsx)(G,{width:1024,panel:function(){return(0,m.jsx)(T,{})},link:n,needTrack:!0,children:(0,m.jsx)("div",{className:"micro-app-weather-main-TIEcrk",children:(0,m.jsx)(E,{})})}):(0,m.jsx)(T,{})};function de(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function pe(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?de(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):de(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function fe(){return he.apply(this,arguments)}function he(){return(he=(0,a.Z)(i().mark((function e(){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("react app bootstraped");case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function me(e){return ve.apply(this,arguments)}function ve(){return(ve=(0,a.Z)(i().mark((function e(t){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("mount",t),s.render((0,m.jsx)(ue,pe({},null==t?void 0:t.props)),t.container?t.container.querySelector("#root"):document.getElementById("root"));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function be(e){return xe.apply(this,arguments)}function xe(){return(xe=(0,a.Z)(i().mark((function e(t){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s.unmountComponentAtNode(t.container?t.container.querySelector("#root"):document.getElementById("root"));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ge(e){return ye.apply(this,arguments)}function ye(){return(ye=(0,a.Z)(i().mark((function e(t){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("update props",t);case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}n(4150),window.__POWERED_BY_QIANKUN__||s.render((0,m.jsx)(ue,{}),document.getElementById("root"))},4150:(e,t,n)=>{window.__POWERED_BY_QIANKUN__&&(n.p=window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__)},4147:e=>{"use strict";e.exports=JSON.parse('{"u2":"micro-app-weather"}')}},a={};function o(e){var t=a[e];if(void 0!==t)return t.exports;var n=a[e]={exports:{}};return r[e].call(n.exports,n,n.exports,o),n.exports}o.m=r,e=[],o.O=(t,n,r,a)=>{if(!n){var i=1/0;for(u=0;u<e.length;u++){for(var[n,r,a]=e[u],c=!0,s=0;s<n.length;s++)(!1&a||i>=a)&&Object.keys(o.O).every((e=>o.O[e](n[s])))?n.splice(s--,1):(c=!1,a<i&&(i=a));if(c){e.splice(u--,1);var l=r();void 0!==l&&(t=l)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[n,r,a]},o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},n=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,o.t=function(e,r){if(1&r&&(e=this(e)),8&r)return e;if("object"==typeof e&&e){if(4&r&&e.__esModule)return e;if(16&r&&"function"==typeof e.then)return e}var a=Object.create(null);o.r(a);var i={};t=t||[null,n({}),n([]),n(n)];for(var c=2&r&&e;"object"==typeof c&&!~t.indexOf(c);c=n(c))Object.getOwnPropertyNames(c).forEach((t=>i[t]=()=>e[t]));return i.default=()=>e,o.d(a,i),a},o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.p="/micro-app-weather/",(()=>{var e={179:0};o.O.j=t=>0===e[t];var t=(t,n)=>{var r,a,[i,c,s]=n,l=0;if(i.some((t=>0!==e[t]))){for(r in c)o.o(c,r)&&(o.m[r]=c[r]);if(s)var u=s(o)}for(t&&t(n);l<i.length;l++)a=i[l],o.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return o.O(u)},n=self.webpackChunkmicro_app_weather_=self.webpackChunkmicro_app_weather_||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var i=o.O(void 0,[776],(()=>o(7447)));return o.O(i)})()));