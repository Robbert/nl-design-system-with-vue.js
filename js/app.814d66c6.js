(function(e){function t(t){for(var r,u,c=t[0],l=t[1],i=t[2],s=0,p=[];s<c.length;s++)u=c[s],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&p.push(o[u][0]),o[u]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);b&&b(t);while(p.length)p.shift()();return a.push.apply(a,i||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,u=1;u<n.length;u++){var l=n[u];0!==o[l]&&(r=!1)}r&&(a.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={app:0},a=[];function u(e){return c.p+"js/"+({about:"about",contact:"contact",login:"login"}[e]||e)+"."+{about:"d7b41174","chunk-2d2080c7":"15efb1ab",contact:"85bfbaf0",login:"d24521ac"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=r);var a,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=u(e);var i=new Error;a=function(t){l.onerror=l.onload=null,clearTimeout(s);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;i.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",i.name="ChunkLoadError",i.type=r,i.request=a,n[1](i)}o[e]=void 0}};var s=setTimeout((function(){a({type:"timeout",target:l})}),12e4);l.onerror=l.onload=a,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],i=l.push.bind(l);l.push=t,l=l.slice();for(var s=0;s<l.length;s++)t(l[s]);var b=i;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),o={class:"utrecht-document utrecht-theme"},a={class:"topnav"},u={class:"utrecht-topnav__list"},c={class:"utrecht-topnav__item"},l=Object(r["g"])("Home"),i={class:"utrecht-topnav__item"},s=Object(r["g"])("About"),b={class:"utrecht-topnav__item"},p=Object(r["g"])("Login"),h={class:"utrecht-topnav__item"},f=Object(r["g"])("Contact"),v=Object(r["g"])("© 2021 Robbert Broersma");function d(e,t,n,d,g,j){var m=Object(r["u"])("utrecht-logo"),O=Object(r["u"])("router-link"),_=Object(r["u"])("router-view"),k=Object(r["u"])("utrecht-page-footer");return Object(r["q"])(),Object(r["d"])("div",o,[Object(r["e"])("header",null,[Object(r["h"])(m)]),Object(r["e"])("nav",a,[Object(r["e"])("ul",u,[Object(r["e"])("li",c,[Object(r["h"])(O,{class:"utrecht-topnav__link",to:"/"},{default:Object(r["A"])((function(){return[l]})),_:1})]),Object(r["e"])("li",i,[Object(r["h"])(O,{class:"utrecht-topnav__link",to:"/about"},{default:Object(r["A"])((function(){return[s]})),_:1})]),Object(r["e"])("li",b,[Object(r["h"])(O,{class:"utrecht-topnav__link",to:"/login"},{default:Object(r["A"])((function(){return[p]})),_:1})]),Object(r["e"])("li",h,[Object(r["h"])(O,{class:"utrecht-topnav__link",to:"/contact"},{default:Object(r["A"])((function(){return[f]})),_:1})])])]),Object(r["e"])("main",null,[Object(r["h"])(_)]),Object(r["h"])(k,null,{default:Object(r["A"])((function(){return[v]})),_:1})])}var g=n("9e06"),j={components:{"utrecht-logo":g["e"],"utrecht-page-footer":g["f"]}};j.render=d;var m=j,O=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),_={class:"home"};function k(e,t,n,o,a,u){var c=Object(r["u"])("HelloWorld");return Object(r["q"])(),Object(r["d"])("div",_,[Object(r["h"])(c,{msg:"Welcome to Your Vue.js App"})])}var y={class:"hello utrecht-html"},w=Object(r["f"])('<p> For a guide and recipes on how to configure / customize this project,<br> check out the <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>. </p><h3>Installed CLI Plugins</h3><ul><li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li><li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">eslint</a></li></ul><h3>Essential Links</h3><ul><li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li><li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li><li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li><li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li><li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li></ul><h3>Ecosystem</h3><ul><li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li><li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li><li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li><li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li><li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li></ul>',7);function P(e,t,n,o,a,u){return Object(r["q"])(),Object(r["d"])("div",y,[Object(r["e"])("h1",null,Object(r["w"])(n.msg),1),w])}var x={name:"HelloWorld",props:{msg:String}};x.render=P;var A=x,C={name:"Home",components:{HelloWorld:A}};C.render=k;var E=C,L=[{path:"/",name:"Home",component:E},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/login",name:"Login",component:function(){return n.e("login").then(n.bind(null,"a55b"))}},{path:"/contact",name:"Contact",component:function(){return n.e("contact").then(n.bind(null,"b8fa"))}}],H=Object(O["a"])({history:Object(O["b"])(),routes:L}),S=H,T=(n("367b"),n("e1b6"),n("6a20"),n("0be1"));Object(r["c"])(m).use(S).mount("#app"),Object(T["a"])()},bc66:function(e,t){function n(e){return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}))}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id="bc66"}});
//# sourceMappingURL=app.814d66c6.js.map