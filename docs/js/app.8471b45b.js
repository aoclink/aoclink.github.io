(function(e){function a(a){for(var n,i,p=a[0],s=a[1],r=a[2],l=0,b=[];l<p.length;l++)i=p[l],Object.prototype.hasOwnProperty.call(c,i)&&c[i]&&b.push(c[i][0]),c[i]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);d&&d(a);while(b.length)b.shift()();return o.push.apply(o,r||[]),t()}function t(){for(var e,a=0;a<o.length;a++){for(var t=o[a],n=!0,p=1;p<t.length;p++){var s=t[p];0!==c[s]&&(n=!1)}n&&(o.splice(a--,1),e=i(i.s=t[0]))}return e}var n={},c={app:0},o=[];function i(a){if(n[a])return n[a].exports;var t=n[a]={i:a,l:!1,exports:{}};return e[a].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=e,i.c=n,i.d=function(e,a,t){i.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,a){if(1&a&&(e=i(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var n in e)i.d(t,n,function(a){return e[a]}.bind(null,n));return t},i.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(a,"a",a),a},i.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},i.p="/";var p=window["webpackJsonp"]=window["webpackJsonp"]||[],s=p.push.bind(p);p.push=a,p=p.slice();for(var r=0;r<p.length;r++)a(p[r]);var d=s;o.push([0,"chunk-vendors"]),t()})({0:function(e,a,t){e.exports=t("56d7")},"56d7":function(e,a,t){"use strict";t.r(a);t("e260"),t("e6cf"),t("cca6"),t("a79d");var n=t("7a23"),c={class:"main-wrap"},o=Object(n["e"])("div",{class:"left"},null,-1),i={class:"main"},p=Object(n["e"])("div",{class:"right"},null,-1);function s(e,a,t,s,r,d){var l=Object(n["u"])("router-view");return Object(n["n"])(),Object(n["d"])("div",c,[o,Object(n["e"])("div",i,[Object(n["e"])(l)]),p])}var r={name:"app"};t("83b2");r.render=s;var d=r,l=t("6c02"),b=Object(n["B"])("data-v-16dea1a7");Object(n["q"])("data-v-16dea1a7");var u={class:"chatroom-wrap"},f={class:"chatroom"},m=Object(n["e"])("div",{class:"ad"},null,-1),g={class:"content"},I={class:"text-wrap"},k={class:"text"},h={class:"pp"},j={class:"sent"},y={class:"match"},w=Object(n["e"])("span",null,"Content :",-1),S={class:"post-wrap"},O={class:"post-refresh"};Object(n["o"])();var v=b((function(e,a,t,c,o,i){var p=Object(n["u"])("TheHeader");return Object(n["n"])(),Object(n["d"])("div",u,[Object(n["e"])(p,{class:"theheader"}),Object(n["e"])("div",f,[m,Object(n["e"])("div",g,[(Object(n["n"])(!0),Object(n["d"])(n["a"],null,Object(n["t"])(o.list,(function(e){return Object(n["n"])(),Object(n["d"])("div",{class:"item",key:e},[Object(n["e"])("button",{ref:e.ipAddress,onClick:function(a){return i.ipState(e.ipAddress)},class:[{copy:o.copy},"ip-wrap"]},Object(n["w"])(e.ipAddress),11,["onClick"]),Object(n["e"])("div",I,[Object(n["e"])("div",k,Object(n["w"])(e.content),1),Object(n["e"])("div",h,Object(n["w"])(new Date(1e3*e.created).toISOString().substr(11,2))+": "+Object(n["w"])(new Date(1e3*e.created).toISOString().substr(14,2))+": "+Object(n["w"])(new Date(1e3*e.created).toISOString().substr(17,2)),1)])])})),128))])]),Object(n["e"])("div",j,[Object(n["e"])("div",y,[w,Object(n["A"])(Object(n["e"])("input",{class:"input","onUpdate:modelValue":a[1]||(a[1]=function(e){return o.matchInfo=e}),placeholder:"",type:"text"},null,512),[[n["y"],o.matchInfo]]),Object(n["e"])("div",S,[Object(n["e"])("button",{ref:"post",class:"post",onClick:a[2]||(a[2]=function(){return i.post&&i.post.apply(i,arguments)})},"Post",512)]),Object(n["e"])("div",O,[Object(n["e"])("button",{class:"refresh",onClick:a[3]||(a[3]=function(){return i.toHome&&i.toHome.apply(i,arguments)})},"Refresh")])])])])})),D=(t("99af"),t("159b"),t("d3b7"),Object(n["B"])("data-v-c1c97c80"));Object(n["q"])("data-v-c1c97c80");var A={class:"head"},B=Object(n["e"])("h1",null,"AOEIP",-1);Object(n["o"])();var K=D((function(e,a,t,c,o,i){return Object(n["n"])(),Object(n["d"])("div",A,[B])})),z={};t("57b8");z.render=K,z.__scopeId="data-v-c1c97c80";var x,H,C=z,P=t("260b"),_=(t("e71f"),{apiKey:"AIzaSyBUnbQSF1pEELZygVnrb_bKpgTrtWldPQc",authDomain:"link0-1.firebaseapp.com",projectId:"link0-1",storageBucket:"link0-1.appspot.com",messagingSenderId:"815155422154",appId:"1:815155422154:web:3be5185f39626537696533"}),T={apiKey:"AIzaSyDQcEPxdrv5DOdhDgmZyg_mbg-Mpf_Tf1o",authDomain:"link1-2-aeb72.firebaseapp.com",projectId:"link1-2-aeb72",storageBucket:"link1-2-aeb72.appspot.com",messagingSenderId:"878016535018",appId:"1:878016535018:web:e9981ca24304b24974ba93"},U={apiKey:"AIzaSyCU3Bo3gLxJx1mfq0G0T2cTAAaEZUBifcw",authDomain:"link2-3-83c97.firebaseapp.com",projectId:"link2-3-83c97",storageBucket:"link2-3-83c97.appspot.com",messagingSenderId:"556194608521",appId:"1:556194608521:web:3cf9bd479b960650695d58"},E={apiKey:"AIzaSyAG2zx_HZY_uaiX8KyDQ9dhAHnBfGHWwoU",authDomain:"link3-4-e146d.firebaseapp.com",projectId:"link3-4-e146d",storageBucket:"link3-4-e146d.appspot.com",messagingSenderId:"1004463909633",appId:"1:1004463909633:web:9bf4037b23a0113a17c900"},G={apiKey:"AIzaSyBNUvtpWw9716G4a0wGtLy2Z9phYhY3GHk",authDomain:"link4-5.firebaseapp.com",projectId:"link4-5",storageBucket:"link4-5.appspot.com",messagingSenderId:"528918810035",appId:"1:528918810035:web:cfec7481cc5e410ee20fc6"},W={apiKey:"AIzaSyDUQubgX9iSdHC1Rx0x7NDNNUUoHb_qNGk",authDomain:"link5-6.firebaseapp.com",projectId:"link5-6",storageBucket:"link5-6.appspot.com",messagingSenderId:"357106960401",appId:"1:357106960401:web:180a936b9d9cc6409089b0"},M={apiKey:"AIzaSyDa3QB_fP1Jfvr8CIeH_hGXqJ2TcvG7Qz8",authDomain:"link6-7.firebaseapp.com",projectId:"link6-7",storageBucket:"link6-7.appspot.com",messagingSenderId:"926148393809",appId:"1:926148393809:web:6ab9cee254144f9455b170"},N={apiKey:"AIzaSyDPl0vjGA8kErbIOahOZFsh4QwKCbveWWU",authDomain:"link7-8-7b265.firebaseapp.com",projectId:"link7-8-7b265",storageBucket:"link7-8-7b265.appspot.com",messagingSenderId:"449397155724",appId:"1:449397155724:web:2679058811ca3a8fc298a9"},L={apiKey:"AIzaSyAEE72jE2H0Wvw3aOSFHNQdpSTBgl4CiRo",authDomain:"link8-9.firebaseapp.com",projectId:"link8-9",storageBucket:"link8-9.appspot.com",messagingSenderId:"1028679593972",appId:"1:1028679593972:web:c941553114d263f110d3a1"},R={apiKey:"AIzaSyAp4mRcBbxlCkQZkzb_doHPqALspKgXJsc",authDomain:"link9-10.firebaseapp.com",projectId:"link9-10",storageBucket:"link9-10.appspot.com",messagingSenderId:"352299998676",appId:"1:352299998676:web:a96173d994493dcfdf8a41"},Q={apiKey:"AIzaSyD5PsdCwmtt8y1arWA60ommOl2Bw-9wke0",authDomain:"link10-11.firebaseapp.com",projectId:"link10-11",storageBucket:"link10-11.appspot.com",messagingSenderId:"676751823932",appId:"1:676751823932:web:c875c0cdf149d8248e5f39"},V={apiKey:"AIzaSyBfBlXUPv8PYhHbg5HUgM0TdFSV08Wusyw",authDomain:"link11-12-9df64.firebaseapp.com",projectId:"link11-12-9df64",storageBucket:"link11-12-9df64.appspot.com",messagingSenderId:"863535670177",appId:"1:863535670177:web:d90df822c2f16991a2a1e0"},F={apiKey:"AIzaSyDKlT1pH0F4WWpkRJ6s78H-6e36MrFsHAQ",authDomain:"link12-13-6cf31.firebaseapp.com",projectId:"link12-13-6cf31",storageBucket:"link12-13-6cf31.appspot.com",messagingSenderId:"539913238910",appId:"1:539913238910:web:2f4743ff6a09086a849b2f"},X={apiKey:"AIzaSyBt4z0xclK92aH9H4WkR6LA7itESCpb8gg",authDomain:"link13-14-d48d0.firebaseapp.com",projectId:"link13-14-d48d0",storageBucket:"link13-14-d48d0.appspot.com",messagingSenderId:"942597930031",appId:"1:942597930031:web:03729c6e4677a782d69ada"},q={apiKey:"AIzaSyCmAajLUDNPvmRcAjjVhzhLNMjhqzGPbVA",authDomain:"link14-15.firebaseapp.com",projectId:"link14-15",storageBucket:"link14-15.appspot.com",messagingSenderId:"950903975394",appId:"1:950903975394:web:784575882e507c34b79dbb"},J={apiKey:"AIzaSyBxgSS0NMy0U1ramW8KDpRx2LxgpnOHkaU",authDomain:"link15-16.firebaseapp.com",projectId:"link15-16",storageBucket:"link15-16.appspot.com",messagingSenderId:"66392251635",appId:"1:66392251635:web:b9be66f67f7d662f56ab86"},Z={apiKey:"AIzaSyBKwb0ynMa7XcOOldNmEC5u9t2pGFISKFY",authDomain:"link16-17.firebaseapp.com",projectId:"link16-17",storageBucket:"link16-17.appspot.com",messagingSenderId:"846258962114",appId:"1:846258962114:web:0cfac44d9e7a8b7b18c55b"},Y={apiKey:"AIzaSyCdpbefDnlLIbcdOpo3rSD7jxK_OPX7I-g",authDomain:"link17-18.firebaseapp.com",projectId:"link17-18",storageBucket:"link17-18.appspot.com",messagingSenderId:"162485930007",appId:"1:162485930007:web:22dda95f1c64e46eeab452"},$={apiKey:"AIzaSyDFmzXsEFJsCd33gy2NXvxcjuNCn1dVuV4",authDomain:"link18-19.firebaseapp.com",projectId:"link18-19",storageBucket:"link18-19.appspot.com",messagingSenderId:"224428615955",appId:"1:224428615955:web:e5309a5f152dd41aaf52e6"},ee={apiKey:"AIzaSyAUPwoVb2VFP0HxMIgBSdVziSNWrabWUBY",authDomain:"link19-20.firebaseapp.com",projectId:"link19-20",storageBucket:"link19-20.appspot.com",messagingSenderId:"253145519191",appId:"1:253145519191:web:0cb614a7bd7104a4303f12"},ae={apiKey:"AIzaSyCQBw3dLmsdXamiIE88xMeyROMdDDR9xGA",authDomain:"link20-21.firebaseapp.com",projectId:"link20-21",storageBucket:"link20-21.appspot.com",messagingSenderId:"13699178152",appId:"1:13699178152:web:de16541bb197dbd9326c9d"},te={apiKey:"AIzaSyB-91MVcX9UNiILz6Ah6cFwkqmwcIWAV78",authDomain:"link21-22.firebaseapp.com",projectId:"link21-22",storageBucket:"link21-22.appspot.com",messagingSenderId:"698410840638",appId:"1:698410840638:web:a43fcbbabeac53dd01976f"},ne={apiKey:"AIzaSyD7YjyIGZGl2uNLLxKCDB94cCP4DC-xW0E",authDomain:"link22-23-6c25c.firebaseapp.com",projectId:"link22-23-6c25c",storageBucket:"link22-23-6c25c.appspot.com",messagingSenderId:"537317207784",appId:"1:537317207784:web:550399118079512f98e35d"},ce={apiKey:"AIzaSyByhz-sHGsqrKsK8T0XL1GxV7QsOt1_9Wo",authDomain:"link23-24-96497.firebaseapp.com",projectId:"link23-24-96497",storageBucket:"link23-24-96497.appspot.com",messagingSenderId:"305527376388",appId:"1:305527376388:web:a2b7502dfcde0fd9544351"},oe=(new Date).getHours(Date.now()),ie=(new Date).getMinutes(Date.now()),pe=(new Date).getSeconds(Date.now()),se=3600*oe+60*ie+pe;se>0&&se<3600?(H=ce,x=_):se>3600&&se<7200?(H=_,x=T):se>7200&&se<10800?(H=T,x=U):se>10800&&se<14400?(H=U,x=E):se>14400&&se<18e3?(H=E,x=G):se>18e3&&se<18e3?(H=G,x=W):se>21600&&se<25200?(H=W,x=M):se>25200&&se<28800?(H=M,x=N):se>28800&&se<32400?(H=N,x=L):se>32400&&se<36e3?(H=L,x=R):se>36e3&&se<39600?(H=R,x=Q):se>39600&&se<43200?(H=Q,x=V):se>43200&&se<46800?(H=V,x=F):se>46800&&se<50400?(H=F,x=X):se>50400&&se<54e3?(H=X,x=q):se>54e3&&se<57600?(H=q,x=J):se>57600&&se<61200?(H=J,x=Z):se>61200&&se<64800?(H=Z,x=Y):se>64800&&se<68400?(H=Y,x=$):se>68400&&se<72e3?(H=$,x=ee):se>72e3&&se<75600?(H=ee,x=ae):se>75600&&se<79200?(H=ae,x=te):se>79200&&se<82800?(H=te,x=ne):se>82800&&se<86400&&(H=ne,x=ce);var re={firebaseConfig:x,firebaseConfigBefore:H},de=P["a"].initializeApp(re.firebaseConfig),le=P["a"].initializeApp(re.firebaseConfigBefore,"beforeApp"),be=P["a"].firestore(de),ue=P["a"].firestore(le),fe={name:"Home",data:function(){return{ip:null,matchInfo:null,postTime:null,postTimeSecond:null,list:[],copy:!1}},computed:{},methods:{post:function(){var e=this,a=(new Date).getHours(Date.now()),t=(new Date).getMinutes(Date.now()),n=(new Date).getSeconds(Date.now());this.postTime="".concat(a,":").concat(t,":").concat(n),this.postTimeSecond=3600*a+60*t+n,be.collection("person").doc(this.ip).set({ipAddress:this.ip,content:this.matchInfo,created:this.postTimeSecond}),be.collection("person").orderBy("created","desc").get().then((function(a){e.list=[],a.forEach((function(a){var t=a.data();e.list.push(t)}))})),this.$refs.post.disabled=!0,new Promise((function(e){setTimeout((function(){e("ok")}),3e3)})).then((function(){e.$refs.post.disabled=!1}))},toHome:function(){window.location.reload()},ipState:function(e){var a=document.createRange();a.selectNode(this.$refs[e]);var t=window.getSelection();t.removeAllRanges(),t.addRange(a),document.execCommand("copy"),t.removeAllRanges()}},created:function(){var e=this;fetch("https://api.ipify.org/?format=json").then((function(e){return e.json()})).then((function(a){e.ip=a.ip})),be.collection("person").orderBy("created","desc").get().then((function(a){a.forEach((function(a){var t=a.data();e.list.push(t)}))})),ue.collection("state").doc("del").get().then((function(e){var a=e.get("action");if(!a){var t=ue.collection("person");ue.collection("person").get().then((function(e){console.log(e),e.forEach((function(e){t.doc(e.id).delete()}))})),be.collection("state").doc("del").set({action:!1}),ue.collection("state").doc("del").set({action:!0})}}))},components:{TheHeader:C}};t("dd82");fe.render=v,fe.__scopeId="data-v-16dea1a7";var me=fe,ge=[{path:"/",name:"Home",component:me}],Ie=Object(l["a"])({history:Object(l["b"])("/"),routes:ge}),ke=Ie,he=t("5502"),je=Object(he["a"])({state:{},mutations:{},actions:{},modules:{}});Object(n["c"])(d).use(je).use(ke).mount("#app")},"57b8":function(e,a,t){"use strict";t("8af8")},"83b2":function(e,a,t){"use strict";t("a8ce")},"8af8":function(e,a,t){},a8ce:function(e,a,t){},dd82:function(e,a,t){"use strict";t("de9c")},de9c:function(e,a,t){}});
//# sourceMappingURL=app.8471b45b.js.map