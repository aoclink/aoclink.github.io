(function(e){function t(t){for(var n,i,p=t[0],s=t[1],r=t[2],l=0,u=[];l<p.length;l++)i=p[l],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&u.push(o[i][0]),o[i]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);d&&d(t);while(u.length)u.shift()();return c.push.apply(c,r||[]),a()}function a(){for(var e,t=0;t<c.length;t++){for(var a=c[t],n=!0,p=1;p<a.length;p++){var s=a[p];0!==o[s]&&(n=!1)}n&&(c.splice(t--,1),e=i(i.s=a[0]))}return e}var n={},o={app:0},c=[];function i(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=n,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(a,n,function(t){return e[t]}.bind(null,n));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var p=window["webpackJsonp"]=window["webpackJsonp"]||[],s=p.push.bind(p);p.push=t,p=p.slice();for(var r=0;r<p.length;r++)t(p[r]);var d=s;c.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("7a23"),o={class:"main-wrap"},c=Object(n["e"])("div",{class:"left"},null,-1),i={class:"main"},p=Object(n["e"])("div",{class:"right"},null,-1);function s(e,t,a,s,r,d){var l=Object(n["u"])("router-view");return Object(n["n"])(),Object(n["d"])("div",o,[c,Object(n["e"])("div",i,[Object(n["e"])(l)]),p])}var r={name:"app"};a("d66c");r.render=s;var d=r,l=a("6c02"),u=Object(n["B"])("data-v-8af9b782");Object(n["q"])("data-v-8af9b782");var b={class:"chatroom-wrap"},f={class:"chatroom"},m=Object(n["e"])("div",{class:"ad"},null,-1),g={class:"content"},h={class:"text-wrapper"},w={class:"text"},k={class:"posttime-wrapper"},I={class:"posttime"},j={class:"sent"},D={class:"match"},y=Object(n["e"])("span",null,"Content :",-1),O={class:"post-wrap"},S={class:"post-refresh"};Object(n["o"])();var v=u((function(e,t,a,o,c,i){var p=Object(n["u"])("TheHeader");return Object(n["n"])(),Object(n["d"])("div",b,[Object(n["e"])(p,{class:"theheader"}),Object(n["e"])("div",f,[m,Object(n["e"])("div",g,[(Object(n["n"])(!0),Object(n["d"])(n["a"],null,Object(n["t"])(c.matchList,(function(e){return Object(n["n"])(),Object(n["d"])("div",{class:"item",key:e},[Object(n["e"])("button",{ref:e.ipAddress,onClick:function(t){return i.ipState(e.ipAddress)},class:[{copy:e.ipAddress==c.btnip},"ip-wrapper"]},Object(n["w"])(e.ipAddress),11,["onClick"]),Object(n["e"])("div",h,[Object(n["e"])("div",w,Object(n["w"])(e.content),1)]),Object(n["e"])("div",k,[Object(n["e"])("div",I,[Object(n["e"])("span",null,Object(n["w"])(e.time.year)+"/",1),Object(n["e"])("span",null,Object(n["w"])(e.time.month)+"/",1),Object(n["e"])("span",null,Object(n["w"])(e.time.day)+" ",1),Object(n["e"])("span",null,Object(n["w"])(e.time.hour)+":",1),Object(n["e"])("span",null,Object(n["w"])(e.time.minute)+":",1),Object(n["e"])("span",null,Object(n["w"])(e.time.second),1)])])])})),128))])]),Object(n["e"])("div",j,[Object(n["e"])("div",D,[y,Object(n["A"])(Object(n["e"])("input",{class:"input","onUpdate:modelValue":t[1]||(t[1]=function(e){return c.matchInfo=e}),placeholder:"",type:"text"},null,512),[[n["y"],c.matchInfo]]),Object(n["e"])("div",O,[Object(n["e"])("button",{ref:"post",class:"post",onClick:t[2]||(t[2]=function(){return i.post&&i.post.apply(i,arguments)})},"Post",512)]),Object(n["e"])("div",S,[Object(n["e"])("button",{class:"refresh",onClick:t[3]||(t[3]=function(){return i.toHome&&i.toHome.apply(i,arguments)})},"Refresh")])])])])})),A=(a("159b"),a("99af"),a("d3b7"),Object(n["B"])("data-v-f78d7a96"));Object(n["q"])("data-v-f78d7a96");var B={class:"head"},z=Object(n["e"])("h1",null,"AOEIP",-1);Object(n["o"])();var K=A((function(e,t,a,o,c,i){return Object(n["n"])(),Object(n["d"])("header",B,[z])})),H={};a("6a5f");H.render=K,H.__scopeId="data-v-f78d7a96";var x,C,M=H,P=a("260b"),L=(a("e71f"),{apiKey:"AIzaSyBUnbQSF1pEELZygVnrb_bKpgTrtWldPQc",authDomain:"link0-1.firebaseapp.com",projectId:"link0-1",storageBucket:"link0-1.appspot.com",messagingSenderId:"815155422154",appId:"1:815155422154:web:3be5185f39626537696533"}),_={apiKey:"AIzaSyDQcEPxdrv5DOdhDgmZyg_mbg-Mpf_Tf1o",authDomain:"link1-2-aeb72.firebaseapp.com",projectId:"link1-2-aeb72",storageBucket:"link1-2-aeb72.appspot.com",messagingSenderId:"878016535018",appId:"1:878016535018:web:e9981ca24304b24974ba93"},T={apiKey:"AIzaSyCU3Bo3gLxJx1mfq0G0T2cTAAaEZUBifcw",authDomain:"link2-3-83c97.firebaseapp.com",projectId:"link2-3-83c97",storageBucket:"link2-3-83c97.appspot.com",messagingSenderId:"556194608521",appId:"1:556194608521:web:3cf9bd479b960650695d58"},E={apiKey:"AIzaSyAG2zx_HZY_uaiX8KyDQ9dhAHnBfGHWwoU",authDomain:"link3-4-e146d.firebaseapp.com",projectId:"link3-4-e146d",storageBucket:"link3-4-e146d.appspot.com",messagingSenderId:"1004463909633",appId:"1:1004463909633:web:9bf4037b23a0113a17c900"},U={apiKey:"AIzaSyBNUvtpWw9716G4a0wGtLy2Z9phYhY3GHk",authDomain:"link4-5.firebaseapp.com",projectId:"link4-5",storageBucket:"link4-5.appspot.com",messagingSenderId:"528918810035",appId:"1:528918810035:web:cfec7481cc5e410ee20fc6"},G={apiKey:"AIzaSyDUQubgX9iSdHC1Rx0x7NDNNUUoHb_qNGk",authDomain:"link5-6.firebaseapp.com",projectId:"link5-6",storageBucket:"link5-6.appspot.com",messagingSenderId:"357106960401",appId:"1:357106960401:web:180a936b9d9cc6409089b0"},W={apiKey:"AIzaSyDa3QB_fP1Jfvr8CIeH_hGXqJ2TcvG7Qz8",authDomain:"link6-7.firebaseapp.com",projectId:"link6-7",storageBucket:"link6-7.appspot.com",messagingSenderId:"926148393809",appId:"1:926148393809:web:6ab9cee254144f9455b170"},N={apiKey:"AIzaSyDPl0vjGA8kErbIOahOZFsh4QwKCbveWWU",authDomain:"link7-8-7b265.firebaseapp.com",projectId:"link7-8-7b265",storageBucket:"link7-8-7b265.appspot.com",messagingSenderId:"449397155724",appId:"1:449397155724:web:2679058811ca3a8fc298a9"},F={apiKey:"AIzaSyAEE72jE2H0Wvw3aOSFHNQdpSTBgl4CiRo",authDomain:"link8-9.firebaseapp.com",projectId:"link8-9",storageBucket:"link8-9.appspot.com",messagingSenderId:"1028679593972",appId:"1:1028679593972:web:c941553114d263f110d3a1"},R={apiKey:"AIzaSyAp4mRcBbxlCkQZkzb_doHPqALspKgXJsc",authDomain:"link9-10.firebaseapp.com",projectId:"link9-10",storageBucket:"link9-10.appspot.com",messagingSenderId:"352299998676",appId:"1:352299998676:web:a96173d994493dcfdf8a41"},Q={apiKey:"AIzaSyD5PsdCwmtt8y1arWA60ommOl2Bw-9wke0",authDomain:"link10-11.firebaseapp.com",projectId:"link10-11",storageBucket:"link10-11.appspot.com",messagingSenderId:"676751823932",appId:"1:676751823932:web:c875c0cdf149d8248e5f39"},V={apiKey:"AIzaSyBfBlXUPv8PYhHbg5HUgM0TdFSV08Wusyw",authDomain:"link11-12-9df64.firebaseapp.com",projectId:"link11-12-9df64",storageBucket:"link11-12-9df64.appspot.com",messagingSenderId:"863535670177",appId:"1:863535670177:web:d90df822c2f16991a2a1e0"},X={apiKey:"AIzaSyDKlT1pH0F4WWpkRJ6s78H-6e36MrFsHAQ",authDomain:"link12-13-6cf31.firebaseapp.com",projectId:"link12-13-6cf31",storageBucket:"link12-13-6cf31.appspot.com",messagingSenderId:"539913238910",appId:"1:539913238910:web:2f4743ff6a09086a849b2f"},q={apiKey:"AIzaSyBt4z0xclK92aH9H4WkR6LA7itESCpb8gg",authDomain:"link13-14-d48d0.firebaseapp.com",projectId:"link13-14-d48d0",storageBucket:"link13-14-d48d0.appspot.com",messagingSenderId:"942597930031",appId:"1:942597930031:web:03729c6e4677a782d69ada"},Y={apiKey:"AIzaSyCmAajLUDNPvmRcAjjVhzhLNMjhqzGPbVA",authDomain:"link14-15.firebaseapp.com",projectId:"link14-15",storageBucket:"link14-15.appspot.com",messagingSenderId:"950903975394",appId:"1:950903975394:web:784575882e507c34b79dbb"},J={apiKey:"AIzaSyBxgSS0NMy0U1ramW8KDpRx2LxgpnOHkaU",authDomain:"link15-16.firebaseapp.com",projectId:"link15-16",storageBucket:"link15-16.appspot.com",messagingSenderId:"66392251635",appId:"1:66392251635:web:b9be66f67f7d662f56ab86"},Z={apiKey:"AIzaSyBKwb0ynMa7XcOOldNmEC5u9t2pGFISKFY",authDomain:"link16-17.firebaseapp.com",projectId:"link16-17",storageBucket:"link16-17.appspot.com",messagingSenderId:"846258962114",appId:"1:846258962114:web:0cfac44d9e7a8b7b18c55b"},$={apiKey:"AIzaSyCdpbefDnlLIbcdOpo3rSD7jxK_OPX7I-g",authDomain:"link17-18.firebaseapp.com",projectId:"link17-18",storageBucket:"link17-18.appspot.com",messagingSenderId:"162485930007",appId:"1:162485930007:web:22dda95f1c64e46eeab452"},ee={apiKey:"AIzaSyDFmzXsEFJsCd33gy2NXvxcjuNCn1dVuV4",authDomain:"link18-19.firebaseapp.com",projectId:"link18-19",storageBucket:"link18-19.appspot.com",messagingSenderId:"224428615955",appId:"1:224428615955:web:e5309a5f152dd41aaf52e6"},te={apiKey:"AIzaSyAUPwoVb2VFP0HxMIgBSdVziSNWrabWUBY",authDomain:"link19-20.firebaseapp.com",projectId:"link19-20",storageBucket:"link19-20.appspot.com",messagingSenderId:"253145519191",appId:"1:253145519191:web:0cb614a7bd7104a4303f12"},ae={apiKey:"AIzaSyCQBw3dLmsdXamiIE88xMeyROMdDDR9xGA",authDomain:"link20-21.firebaseapp.com",projectId:"link20-21",storageBucket:"link20-21.appspot.com",messagingSenderId:"13699178152",appId:"1:13699178152:web:de16541bb197dbd9326c9d"},ne={apiKey:"AIzaSyB-91MVcX9UNiILz6Ah6cFwkqmwcIWAV78",authDomain:"link21-22.firebaseapp.com",projectId:"link21-22",storageBucket:"link21-22.appspot.com",messagingSenderId:"698410840638",appId:"1:698410840638:web:a43fcbbabeac53dd01976f"},oe={apiKey:"AIzaSyD7YjyIGZGl2uNLLxKCDB94cCP4DC-xW0E",authDomain:"link22-23-6c25c.firebaseapp.com",projectId:"link22-23-6c25c",storageBucket:"link22-23-6c25c.appspot.com",messagingSenderId:"537317207784",appId:"1:537317207784:web:550399118079512f98e35d"},ce={apiKey:"AIzaSyByhz-sHGsqrKsK8T0XL1GxV7QsOt1_9Wo",authDomain:"link23-24-96497.firebaseapp.com",projectId:"link23-24-96497",storageBucket:"link23-24-96497.appspot.com",messagingSenderId:"305527376388",appId:"1:305527376388:web:a2b7502dfcde0fd9544351"},ie=(new Date).getHours(Date.now()),pe=(new Date).getMinutes(Date.now()),se=(new Date).getSeconds(Date.now()),re=3600*ie+60*pe+se;re>0&&re<3600?(C=ce,x=L):re>3600&&re<7200?(C=L,x=_):re>7200&&re<10800?(C=_,x=T):re>10800&&re<14400?(C=T,x=E):re>14400&&re<18e3?(C=E,x=U):re>18e3&&re<21600?(C=U,x=G):re>21600&&re<25200?(C=G,x=W):re>25200&&re<28800?(C=W,x=N):re>28800&&re<32400?(C=N,x=F):re>32400&&re<36e3?(C=F,x=R):re>36e3&&re<39600?(C=R,x=Q):re>39600&&re<43200?(C=Q,x=V):re>43200&&re<46800?(C=V,x=X):re>46800&&re<50400?(C=X,x=q):re>50400&&re<54e3?(C=q,x=Y):re>54e3&&re<57600?(C=Y,x=J):re>57600&&re<61200?(C=J,x=Z):re>61200&&re<64800?(C=Z,x=$):re>64800&&re<68400?(C=$,x=ee):re>68400&&re<72e3?(C=ee,x=te):re>72e3&&re<75600?(C=te,x=ae):re>75600&&re<79200?(C=ae,x=ne):re>79200&&re<82800?(C=ne,x=oe):re>82800&&re<86400&&(C=oe,x=ce);var de={firebaseConfig:x,firebaseConfigBefore:C},le=P["a"].initializeApp(de.firebaseConfig),ue=P["a"].initializeApp(de.firebaseConfigBefore,"beforeApp"),be=P["a"].firestore(le),fe=(P["a"].firestore(ue),{name:"Home",data:function(){return{ip:null,matchInfo:null,postTime:null,postTimeSecond:null,matchList:[],copy:!1,btnip:null}},computed:{zzz:function(){return this.matchList.forEach((function(e){var t=e;t.time={year:new Date(t.time).getFullYear(),hour:new Date(t.time).getMonth()<10?"0".concat(new Date(t.time).getMonth()):new Date(t.time).getMonth()}})),this.matchList}},methods:{post:function(){var e=this,t=new Date(Date.now()).getHours(Date.now()),a=new Date(Date.now()).getMinutes(Date.now()),n=(new Date).getSeconds(Date.now());this.postTime="".concat(t,":").concat(a,":").concat(n),this.postTimeSecond=3600*t+60*a+n,be.collection("person").doc(this.ip).set({ipAddress:this.ip,content:this.matchInfo,created:this.postTimeSecond,time:{time:Date.now(),year:new Date(Date.now()).getFullYear(),month:new Date(Date.now()).getMonth()+1<10?"0".concat(new Date(Date.now()).getMonth()+1):new Date(Date.now()).getMonth()+1,day:new Date(Date.now()).getDate()<10?"0".concat(new Date(Date.now()).getDate()):new Date(Date.now()).getDate(),hour:new Date(Date.now()).getHours()<10?"0".concat(new Date(Date.now()).getHours()):new Date(Date.now()).getHours(),minute:new Date(Date.now()).getMinutes()<10?"0".concat(new Date(Date.now()).getMinutes()):new Date(Date.now()).getMinutes(),second:new Date(Date.now()).getSeconds()<10?"0".concat(new Date(Date.now()).getSeconds()):new Date(Date.now()).getSeconds()}}).then((function(){be.collection("person").orderBy("created","desc").get().then((function(t){console.log("add list"),e.matchList=[],t.forEach((function(t){var a=t.data();e.matchList.push(a)}))}))})),this.$refs.post.disabled=!0,new Promise((function(e){setTimeout((function(){e("ok")}),3e3)})).then((function(){e.$refs.post.disabled=!1}))},toHome:function(){window.location.reload()},ipState:function(e){var t=document.createRange();t.selectNode(this.$refs[e]);var a=window.getSelection();a.removeAllRanges(),a.addRange(t),document.execCommand("copy"),a.removeAllRanges(),this.btnip=this.$refs[e].textContent}},updated:function(){},created:function(){var e=this;fetch("https://api.ipify.org/?format=json").then((function(e){return e.json()})).then((function(t){e.ip=t.ip}));var t=be.collection("person");be.collection("person").get().then((function(e){e.forEach((function(e){var a=Date.now(),n=e.data().time.time,o=(a-n)/1e3/3600;console.log(a,n,o),o>1&&t.doc(e.id).delete()}))})).catch((function(){console.log("111")})),be.collection("person").orderBy("created","desc").get().then((function(t){t.forEach((function(t){var a=t.data();e.matchList.push(a)}))})).catch((function(){console.log("111")}))},components:{TheHeader:M}});a("6bbd");fe.render=v,fe.__scopeId="data-v-8af9b782";var me=fe,ge=[{path:"/",name:"Home",component:me}],he=Object(l["a"])({history:Object(l["b"])("/"),routes:ge}),we=he,ke=a("5502"),Ie=Object(ke["a"])({state:{},mutations:{},actions:{},modules:{}});Object(n["c"])(d).use(Ie).use(we).mount("#app")},6560:function(e,t,a){},6920:function(e,t,a){},"6a5f":function(e,t,a){"use strict";a("6560")},"6bbd":function(e,t,a){"use strict";a("6920")},9138:function(e,t,a){},d66c:function(e,t,a){"use strict";a("9138")}});