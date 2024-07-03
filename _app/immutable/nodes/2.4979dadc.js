import{i as ce,f as ue,h as O,j as ge,s as _e,n as D,e as we,o as fe,k as Y}from"../chunks/scheduler.8746962a.js";import{p as me,t as pe,b as ve,d as ye,S as be,i as ke,g as b,s as A,y as B,h as k,j as v,f,c as F,z as H,k as m,a as S,x as p,A as K,e as Z,m as L,n as T,o as P,B as $e,l as x}from"../chunks/index.820f26de.js";import{n as Ee,p as De}from"../chunks/stores.4d3e883a.js";import{e as ie}from"../chunks/singletons.fa53c619.js";function ee(t,e){const l=e.token={};function o(n,r,d,s){if(e.token!==l)return;e.resolved=s;let a=e.ctx;d!==void 0&&(a=a.slice(),a[d]=s);const u=n&&(e.current=n)(a);let i=!1;e.block&&(e.blocks?e.blocks.forEach((h,c)=>{c!==r&&h&&(me(),pe(h,1,1,()=>{e.blocks[c]===h&&(e.blocks[c]=null)}),ve())}):e.block.d(1),u.c(),ye(u,1),u.m(e.mount(),e.anchor),i=!0),e.block=u,e.blocks&&(e.blocks[r]=u),i&&ge()}if(ce(t)){const n=ue();if(t.then(r=>{O(n),o(e.then,1,e.value,r),O(null)},r=>{if(O(n),o(e.catch,2,e.error,r),O(null),!e.hasCatch)throw r}),e.current!==e.pending)return o(e.pending,0),!0}else{if(e.current!==e.then)return o(e.then,1,e.value,t),!0;e.resolved=t}}function Se(t,e,l){const o=e.slice(),{resolved:n}=t;t.current===t.then&&(o[t.value]=n),t.current===t.catch&&(o[t.error]=n),t.block.p(o,l)}function V(t){return(t==null?void 0:t.length)!==void 0?t:Array.from(t)}const U={"#kunigiskes":{name:"Kunigiškės",coords:"55.961,21.067"},"#svencele":{name:"Svencelė",coords:"55.495,21.228"},"#plateliai":{name:"Plateliai",coords:"56.049,21.859"},"#sventoji":{name:"Šventoji",coords:"56.031,21.066"},"#smiltyne":{name:"Smiltynė",coords:"55.719,21.090"},"#pavilosta":{name:"Pavilosta",coords:"56.889,21.188"}},te=async t=>{if(!(t in U))return t&&console.log("invalid spot",t),[];const l=U[t].coords,n=await(await fetch(`https://www.yr.no/api/v0/locations/${l}/forecast`)).json(),r=new Map,d=await fetch(`https://yrno-y7nkc3uq7q-ey.a.run.app/yrno/api/v0/locations/${l}/forecast/currenthour`);if(d.ok){const s=await d.json(),a=new Date(s.created),u=de[s.symbolCode.next1Hour],i={time:"dabar",temperature:s.temperature.value,wind:s.wind.speed,direction:s.wind.direction,gusts:s.wind.gust,symbolUrl:`https://yrno-y7nkc3uq7q-ey.a.run.app/yrno/assets/images/weather-symbols/light-mode/default/svg/${u}.svg`,all:JSON.stringify(s)};r.set(a.getDate(),{dateStr:a.toLocaleDateString("lt-LT",{weekday:"long",day:"numeric",month:"long"}),items:[i]})}else console.log("Failed to get curren hour forecast. Response status: "+d.status);return n.shortIntervals.forEach(s=>{const a=new Date(s.start),u=r.get(a.getDate());u?u.items.push(se(s)):r.set(a.getDate(),{dateStr:a.toLocaleDateString("lt-LT",{weekday:"long",day:"numeric",month:"long"}),items:[se(s)]})}),{created:new Date(n.created).toLocaleTimeString("lt-LT",{hour:"2-digit",minute:"2-digit"}),nowLink:`https://www.yr.no/api/v0/locations/${l}/forecast/currenthour`,days:r.values()}},se=t=>{const l=new Date(t.start).getHours().toString().padStart(2,"0")+":00",o=de[t.symbolCode.next1Hour];return{time:l,temperature:t.temperature.value,wind:t.wind.speed,direction:t.wind.direction,gusts:t.wind.gust,symbolUrl:`https://yrno-y7nkc3uq7q-ey.a.run.app/yrno/assets/images/weather-symbols/light-mode/default/svg/${o}.svg`,all:JSON.stringify(t)}},de={clearsky_day:"01d",clearsky_night:"01n",clearsky_polartwilight:"01m",fair_day:"02d",fair_night:"02n",fair_polartwilight:"02m",partlycloudy_day:"03d",partlycloudy_night:"03n",partlycloudy_polartwilight:"03m",cloudy:"04",rainshowers_day:"05d",rainshowers_night:"05n",rainshowers_polartwilight:"05m",rainshowersandthunder_day:"06d",rainshowersandthunder_night:"06n",rainshowersandthunder_polartwilight:"06m",sleetshowers_day:"07d",sleetshowers_night:"07n",sleetshowers_polartwilight:"07m",snowshowers_day:"08d",snowshowers_night:"08n",snowshowers_polartwilight:"08m",rain:"09",heavyrain:"10",heavyrainandthunder:"11",sleet:"12",snow:"13",snowandthunder:"14",fog:"15",sleetshowersandthunder_day:"20d",sleetshowersandthunder_night:"20n",sleetshowersandthunder_polartwilight:"20m",snowshowersandthunder_day:"21d",snowshowersandthunder_night:"21n",snowshowersandthunder_polartwilight:"21m",rainandthunder:"22",sleetandthunder:"23",lightrainshowersandthunder_day:"24d",lightrainshowersandthunder_night:"24n",lightrainshowersandthunder_polartwilight:"24m",heavyrainshowersandthunder_day:"25d",heavyrainshowersandthunder_night:"25n",heavyrainshowersandthunder_polartwilight:"25m",lightssleetshowersandthunder_day:"26d",lightssleetshowersandthunder_night:"26n",lightssleetshowersandthunder_polartwilight:"26m",heavysleetshowersandthunder_day:"27d",heavysleetshowersandthunder_night:"27n",heavysleetshowersandthunder_polartwilight:"27m",lightssnowshowersandthunder_day:"28d",lightssnowshowersandthunder_night:"28n",lightssnowshowersandthunder_polartwilight:"28m",heavysnowshowersandthunder_day:"29d",heavysnowshowersandthunder_night:"29n",heavysnowshowersandthunder_polartwilight:"29m",lightrainandthunder:"30",lightsleetandthunder:"31",heavysleetandthunder:"32",lightsnowandthunder:"33",heavysnowandthunder:"34",lightrainshowers_day:"40d",lightrainshowers_night:"40n",lightrainshowers_polartwilight:"40m",heavyrainshowers_day:"41d",heavyrainshowers_night:"41n",heavyrainshowers_polartwilight:"41m",lightsleetshowers_day:"42d",lightsleetshowers_night:"42n",lightsleetshowers_polartwilight:"42m",heavysleetshowers_day:"43d",heavysleetshowers_night:"43n",heavysleetshowers_polartwilight:"43m",lightsnowshowers_day:"44d",lightsnowshowers_night:"44n",lightsnowshowers_polartwilight:"44m",heavysnowshowers_day:"45d",heavysnowshowers_night:"45n",heavysnowshowers_polartwilight:"45m",lightrain:"46",lightsleet:"47",heavysleet:"48",lightsnow:"49",heavysnow:"50"};function re(t,e,l){const o=t.slice();return o[5]=e[l],o}function ne(t,e,l){const o=t.slice();return o[8]=e[l],o}function le(t,e,l){const o=t.slice();return o[11]=e[l][0],o[12]=e[l][1].name,o}function je(t){let e,l,o=t[12]+"",n;return{c(){e=b("div"),l=b("a"),n=L(o),this.h()},l(r){e=k(r,"DIV",{});var d=v(e);l=k(d,"A",{href:!0});var s=v(l);n=T(s,o),s.forEach(f),d.forEach(f),this.h()},h(){m(l,"href",ie+"/"+t[11])},m(r,d){S(r,e,d),p(e,l),p(l,n)},p:D,d(r){r&&f(e)}}}function Le(t){let e,l,o=t[12]+"",n;return{c(){e=b("div"),l=b("a"),n=L(o),this.h()},l(r){e=k(r,"DIV",{class:!0});var d=v(e);l=k(d,"A",{href:!0});var s=v(l);n=T(s,o),s.forEach(f),d.forEach(f),this.h()},h(){m(l,"href",ie+"/"+t[11]),m(e,"class","active svelte-hkjim5")},m(r,d){S(r,e,d),p(e,l),p(l,n)},p:D,d(r){r&&f(e)}}}function ae(t){let e;function l(r,d){return r[11]==r[0]?Le:je}let o=l(t),n=o(t);return{c(){n.c(),e=Z()},l(r){n.l(r),e=Z()},m(r,d){n.m(r,d),S(r,e,d)},p(r,d){o===(o=l(r))&&n?n.p(r,d):(n.d(1),n=o(r),n&&(n.c(),n.m(e.parentNode,e)))},d(r){r&&f(e),n.d(r)}}}function Te(t){return{c:D,l:D,m:D,p:D,d:D}}function Ce(t){let e,l,o=t[4].created+"",n,r,d,s,a,u,i=V(t[4].days),h=[];for(let c=0;c<i.length;c+=1)h[c]=he(re(t,i,c));return{c(){e=b("center"),l=L("Atnaujinta "),n=L(o),r=A();for(let c=0;c<h.length;c+=1)h[c].c();d=A(),s=b("a"),a=L("Sąlygos dabar (json)"),this.h()},l(c){e=k(c,"CENTER",{});var g=v(e);l=T(g,"Atnaujinta "),n=T(g,o),g.forEach(f),r=F(c);for(let _=0;_<h.length;_+=1)h[_].l(c);d=F(c),s=k(c,"A",{href:!0});var w=v(s);a=T(w,"Sąlygos dabar (json)"),w.forEach(f),this.h()},h(){m(s,"href",u=t[4].nowLink)},m(c,g){S(c,e,g),p(e,l),p(e,n),S(c,r,g);for(let w=0;w<h.length;w+=1)h[w]&&h[w].m(c,g);S(c,d,g),S(c,s,g),p(s,a)},p(c,g){if(g&2&&o!==(o=c[4].created+"")&&P(n,o),g&6){i=V(c[4].days);let w;for(w=0;w<i.length;w+=1){const _=re(c,i,w);h[w]?h[w].p(_,g):(h[w]=he(_),h[w].c(),h[w].m(d.parentNode,d))}for(;w<h.length;w+=1)h[w].d(1);h.length=i.length}g&2&&u!==(u=c[4].nowLink)&&m(s,"href",u)},d(c){c&&(f(e),f(r),f(d),f(s)),K(h,c)}}}function oe(t){let e,l,o=t[8].time+"",n,r,d,s,a,u,i,h=t[8].temperature.toFixed(0)+"",c,g,w,_,j=t[8].wind.toFixed(1)+"",I,R,C=t[8].gusts.toFixed(0)+"",J,z,$,q,M;return{c(){e=b("tr"),l=b("td"),n=L(o),r=A(),d=b("td"),s=b("img"),u=A(),i=b("td"),c=L(h),g=L("º"),w=A(),_=b("td"),I=L(j),R=L(" ("),J=L(C),z=L(`) m/s
							
							`),$=B("svg"),q=B("use"),this.h()},l(E){e=k(E,"TR",{style:!0});var y=v(e);l=k(y,"TD",{});var Q=v(l);n=T(Q,o),Q.forEach(f),r=F(y),d=k(y,"TD",{});var W=v(d);s=k(W,"IMG",{src:!0,alt:!0,width:!0,height:!0}),W.forEach(f),u=F(y),i=k(y,"TD",{});var G=v(i);c=T(G,h),g=T(G,"º"),G.forEach(f),w=F(y),_=k(y,"TD",{});var N=v(_);I=T(N,j),R=T(N," ("),J=T(N,C),z=T(N,`) m/s
							
							`),$=H(N,"svg",{style:!0,x:!0,y:!0,width:!0,height:!0,viewBox:!0,focusable:!0,"aria-hidden":!0});var X=v($);q=H(X,"use",{"xlink:href":!0,x:!0,y:!0,width:!0,height:!0}),v(q).forEach(f),X.forEach(f),N.forEach(f),y.forEach(f),this.h()},h(){Y(s.src,a=t[8].symbolUrl)||m(s,"src",a),m(s,"alt","weather symbol"),m(s,"width","40"),m(s,"height","40"),$e(q,"xlink:href","#icon-arrow"),m(q,"x","0"),m(q,"y","0"),m(q,"width","24"),m(q,"height","24"),x($,"transform","rotate("+t[8].direction+"deg)"),m($,"x","0"),m($,"y","0"),m($,"width","24"),m($,"height","24"),m($,"viewBox","0 0 24 24"),m($,"focusable","false"),m($,"aria-hidden","true"),m(e,"style",M=t[2](t[8].wind))},m(E,y){S(E,e,y),p(e,l),p(l,n),p(e,r),p(e,d),p(d,s),p(e,u),p(e,i),p(i,c),p(i,g),p(e,w),p(e,_),p(_,I),p(_,R),p(_,J),p(_,z),p(_,$),p($,q)},p(E,y){y&2&&o!==(o=E[8].time+"")&&P(n,o),y&2&&!Y(s.src,a=E[8].symbolUrl)&&m(s,"src",a),y&2&&h!==(h=E[8].temperature.toFixed(0)+"")&&P(c,h),y&2&&j!==(j=E[8].wind.toFixed(1)+"")&&P(I,j),y&2&&C!==(C=E[8].gusts.toFixed(0)+"")&&P(J,C),y&2&&x($,"transform","rotate("+E[8].direction+"deg)"),y&2&&M!==(M=E[2](E[8].wind))&&m(e,"style",M)},d(E){E&&f(e)}}}function he(t){let e,l=t[5].dateStr+"",o,n,r,d=V(t[5].items),s=[];for(let a=0;a<d.length;a+=1)s[a]=oe(ne(t,d,a));return{c(){e=b("h2"),o=L(l),n=A(),r=b("table");for(let a=0;a<s.length;a+=1)s[a].c()},l(a){e=k(a,"H2",{});var u=v(e);o=T(u,l),u.forEach(f),n=F(a),r=k(a,"TABLE",{});var i=v(r);for(let h=0;h<s.length;h+=1)s[h].l(i);i.forEach(f)},m(a,u){S(a,e,u),p(e,o),S(a,n,u),S(a,r,u);for(let i=0;i<s.length;i+=1)s[i]&&s[i].m(r,null)},p(a,u){if(u&2&&l!==(l=a[5].dateStr+"")&&P(o,l),u&6){d=V(a[5].items);let i;for(i=0;i<d.length;i+=1){const h=ne(a,d,i);s[i]?s[i].p(h,u):(s[i]=oe(h),s[i].c(),s[i].m(r,null))}for(;i<s.length;i+=1)s[i].d(1);s.length=d.length}},d(a){a&&(f(e),f(n),f(r)),K(s,a)}}}function qe(t){return{c:D,l:D,m:D,p:D,d:D}}function Ae(t){let e,l,o,n,r,d,s,a,u,i=V(Object.entries(U)),h=[];for(let g=0;g<i.length;g+=1)h[g]=ae(le(t,i,g));let c={ctx:t,current:null,token:null,hasCatch:!1,pending:qe,then:Ce,catch:Te,value:4};return ee(u=t[1],c),{c(){e=b("div"),l=b("div");for(let g=0;g<h.length;g+=1)h[g].c();o=A(),n=b("div"),r=B("svg"),d=B("symbol"),s=B("path"),a=A(),c.block.c(),this.h()},l(g){e=k(g,"DIV",{class:!0});var w=v(e);l=k(w,"DIV",{class:!0});var _=v(l);for(let C=0;C<h.length;C+=1)h[C].l(_);_.forEach(f),w.forEach(f),o=F(g),n=k(g,"DIV",{class:!0});var j=v(n);r=H(j,"svg",{height:!0,width:!0,"aria-hidden":!0});var I=v(r);d=H(I,"symbol",{id:!0});var R=v(d);s=H(R,"path",{fill:!0,"fill-rule":!0,d:!0,"clip-rule":!0}),v(s).forEach(f),R.forEach(f),I.forEach(f),a=F(j),c.block.l(j),j.forEach(f),this.h()},h(){m(l,"class","grid svelte-hkjim5"),m(e,"class","container"),m(s,"fill","currentColor"),m(s,"fill-rule","evenodd"),m(s,"d","M11.53 3l-.941 12.857L7 15l5.001 6L17 15l-3.587.857L12.471 3h-.941z"),m(s,"clip-rule","evenodd"),m(d,"id","icon-arrow"),m(r,"height","0"),m(r,"width","0"),m(r,"aria-hidden","true"),m(n,"class","container")},m(g,w){S(g,e,w),p(e,l);for(let _=0;_<h.length;_+=1)h[_]&&h[_].m(l,null);S(g,o,w),S(g,n,w),p(n,r),p(r,d),p(d,s),p(n,a),c.block.m(n,c.anchor=null),c.mount=()=>n,c.anchor=null},p(g,[w]){if(t=g,w&1){i=V(Object.entries(U));let _;for(_=0;_<i.length;_+=1){const j=le(t,i,_);h[_]?h[_].p(j,w):(h[_]=ae(j),h[_].c(),h[_].m(l,null))}for(;_<h.length;_+=1)h[_].d(1);h.length=i.length}c.ctx=t,w&2&&u!==(u=t[1])&&ee(u,c)||Se(c,t,w)},i:D,o:D,d(g){g&&(f(e),f(o),f(n)),K(h,g),c.block.d(),c.token=null,c=null}}}function Fe(t,e,l){let o;we(t,De,s=>l(3,o=s));let n=o.url.hash,r=Promise.resolve({});fe(()=>{l(1,r=te(n))});const d=s=>{let a=0,u=0,i=0,h="15%";if(s<4.5)return a=0,u=255,i=255,h=`${s/4.5*15}%`,`background-color: rgba(${a}, ${u}, ${i}, ${h})`;if(s<6.7)return a=0,u=255,i=255-(s-4.5)/2.2*255,`background-color: rgba(${a}, ${u}, ${i}, ${h})`;if(s<9.35)return a=(s-6.7)/2.65*255,u=255,i=0,`background-color: rgba(${a}, ${u}, ${i}, ${h})`;if(s<12.3)return a=255,u=255-(s-9.35)/2.95*255,i=0,`background-color: rgba(${a}, ${u}, ${i}, ${h})`;if(s<15.5)return a=255,u=0,i=(s-12.3)/3.2*255,`background-color: rgba(${a}, ${u}, ${i}, ${h})`;if(s>=15.5)return a=255,u=0,i=255,`background-color: rgba(${a}, ${u}, ${i}, ${h})`};return t.$$.update=()=>{t.$$.dirty&9&&Ee&&o.url.hash!=n&&(l(0,n=o.url.hash),l(1,r=te(n)))},[n,r,d,o]}class Ve extends be{constructor(e){super(),ke(this,e,Fe,Ae,_e,{})}}export{Ve as component};
