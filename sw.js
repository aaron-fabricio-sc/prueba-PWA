if(!self.define){let e,i={};const s=(s,r)=>(s=new URL(s+".js",r).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(r,n)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let t={};const c=e=>s(e,o),d={module:{uri:o},exports:t,require:c};i[o]=Promise.all(r.map((e=>d[e]||c(e)))).then((e=>(n(...e),t)))}}define(["./workbox-a5f32c57"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"css/style.css",revision:"96bd485bcda786e534003d7aef6ab041"},{url:"img/1667648864034.jpeg",revision:"a0bfe15fea67d8bf002fed87d8aa845e"},{url:"img/logo.png",revision:"6fa6df202c5e87967c14a5cc2cd93918"},{url:"index.html",revision:"d31ed76e854db49e284404219127b051"},{url:"manifest.json",revision:"c3227f090469367057f012f2d773c125"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map