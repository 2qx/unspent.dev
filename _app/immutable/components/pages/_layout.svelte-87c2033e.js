import{S as ne,i as le,s as re,a as B,k as m,C as ce,q as S,c as V,l as g,m as E,h as u,D as fe,r as O,n as c,E as q,F as se,b as L,G as d,B as P,H as pe,e as te,I as ve,J as Ze,K as de,L as Je,M as Qe,N as ue,g as me,t as F,d as ge,f as K,O as Re,o as Xe,P as Ye,Q as xe,R as et,v as Pe,w as Y,x as ae,y as x,T as tt,U as st,z as ee,V as at,W as Se,X as nt,Y as lt,Z as rt,_ as it,$ as ot,a0 as ct,a1 as ft,a2 as Oe,a3 as je,a4 as ut,a5 as Ge,a6 as dt,a7 as _t,a8 as ht}from"../../chunks/index-af810871.js";import{p as pt}from"../../chunks/stores-10baa199.js";import{b as W,a as J,w as vt}from"../../chunks/paths-08d8b2c5.js";import{t as _e}from"../../chunks/SvelteToast.svelte_svelte_type_style_lang-db179561.js";function mt(l){let e,s,a,t;return{c(){e=m("div"),s=S(`This app is in development! Keep value small and create a backup of any information used to
		create contracts that hold value. To support Unspent Phi: `),a=m("a"),t=S("click here"),this.h()},l(n){e=g(n,"DIV",{class:!0});var o=E(e);s=O(o,`This app is in development! Keep value small and create a backup of any information used to
		create contracts that hold value. To support Unspent Phi: `),a=g(o,"A",{href:!0,class:!0});var i=E(a);t=O(i,"click here"),i.forEach(u),o.forEach(u),this.h()},h(){c(a,"href",W+"/202212_fundraiser"),c(a,"class","svelte-670tva"),c(e,"class","alpha svelte-670tva")},m(n,o){L(n,e,o),d(e,s),d(e,a),d(a,t)},p:P,d(n){n&&u(e)}}}function gt(l){let e,s,a,t,n,o,i,r,f,p;return{c(){e=m("div"),s=S("This is an "),a=m("b"),t=S("unstable"),n=S(` development version of the unspent app. Funds may be lost using new
		features. Please go to `),o=m("a"),i=S("unspent.app"),r=S(` instead.
    To support Unspent Phi: `),f=m("a"),p=S("click here"),this.h()},l(_){e=g(_,"DIV",{class:!0});var h=E(e);s=O(h,"This is an "),a=g(h,"B",{});var $=E(a);t=O($,"unstable"),$.forEach(u),n=O(h,` development version of the unspent app. Funds may be lost using new
		features. Please go to `),o=g(h,"A",{href:!0,class:!0});var b=E(o);i=O(b,"unspent.app"),b.forEach(u),r=O(h,` instead.
    To support Unspent Phi: `),f=g(h,"A",{href:!0,class:!0});var v=E(f);p=O(v,"click here"),v.forEach(u),h.forEach(u),this.h()},h(){c(o,"href","https://unspent.app"),c(o,"class","svelte-670tva"),c(f,"href",W+"/202212_fundraiser"),c(f,"class","svelte-670tva"),c(e,"class","dev svelte-670tva")},m(_,h){L(_,e,h),d(e,s),d(e,a),d(a,t),d(e,n),d(e,o),d(o,i),d(e,r),d(e,f),d(f,p)},p:P,d(_){_&&u(e)}}}function bt(l){let e,s,a,t;return{c(){e=m("div"),s=S("This is a local development instance,  "),a=m("a"),t=S("\u{1F920} \u{1F34A}"),this.h()},l(n){e=g(n,"DIV",{class:!0});var o=E(e);s=O(o,"This is a local development instance,  "),a=g(o,"A",{href:!0,class:!0});var i=E(a);t=O(i,"\u{1F920} \u{1F34A}"),i.forEach(u),o.forEach(u),this.h()},h(){c(a,"href",W+"/202212_fundraiser"),c(a,"class","svelte-670tva"),c(e,"class","local svelte-670tva")},m(n,o){L(n,e,o),d(e,s),d(e,a),d(a,t)},p:P,d(n){n&&u(e)}}}function yt(l){let e,s;return{c(){e=m("img"),this.h()},l(a){e=g(a,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){se(e.src,s=J+"/images/favicon-32x32.png")||c(e,"src",s),c(e,"alt","Logo"),c(e,"class","svelte-670tva")},m(a,t){L(a,e,t)},p:P,d(a){a&&u(e)}}}function kt(l){let e,s;return{c(){e=m("img"),this.h()},l(a){e=g(a,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){se(e.src,s=J+"/dev/favicon-32x32.png")||c(e,"src",s),c(e,"alt","Dev Logo"),c(e,"class","svelte-670tva")},m(a,t){L(a,e,t)},p:P,d(a){a&&u(e)}}}function Et(l){let e,s,a,t,n,o,i,r,f,p,_,h,$,b,v,k,C,A,w,j,T,R,H,y,D,G,U,Z,be;function ye(I,M){return I[0]&&I[0].isLocal?bt:I[0]&&I[0].isDevelopment?gt:mt}let ie=ye(l),N=ie(l);function ke(I,M){return I[0]&&(I[0].isLocal||I[0].isDevelopment)?kt:yt}let oe=ke(l),z=oe(l);return{c(){N.c(),e=B(),s=m("header"),a=m("div"),t=m("a"),z.c(),n=B(),o=m("nav"),i=ce("svg"),r=ce("path"),f=B(),p=m("ul"),_=m("li"),h=m("a"),$=S("Create"),b=B(),v=m("li"),k=m("a"),C=S("Earn"),A=B(),w=m("li"),j=m("a"),T=S("Settings"),R=B(),H=ce("svg"),y=ce("path"),D=B(),G=m("div"),U=m("a"),Z=m("img"),this.h()},l(I){N.l(I),e=V(I),s=g(I,"HEADER",{class:!0});var M=E(s);a=g(M,"DIV",{class:!0});var Ee=E(a);t=g(Ee,"A",{href:!0,class:!0});var $e=E(t);z.l($e),$e.forEach(u),Ee.forEach(u),n=V(M),o=g(M,"NAV",{class:!0});var Q=E(o);i=fe(Q,"svg",{viewBox:!0,"aria-hidden":!0,class:!0});var we=E(i);r=fe(we,"path",{d:!0,class:!0}),E(r).forEach(u),we.forEach(u),f=V(Q),p=g(Q,"UL",{class:!0});var X=E(p);_=g(X,"LI",{class:!0});var Ie=E(_);h=g(Ie,"A",{href:!0,class:!0});var De=E(h);$=O(De,"Create"),De.forEach(u),Ie.forEach(u),b=V(X),v=g(X,"LI",{class:!0});var Le=E(v);k=g(Le,"A",{href:!0,class:!0});var Ae=E(k);C=O(Ae,"Earn"),Ae.forEach(u),Le.forEach(u),A=V(X),w=g(X,"LI",{class:!0});var Ce=E(w);j=g(Ce,"A",{href:!0,class:!0});var Te=E(j);T=O(Te,"Settings"),Te.forEach(u),Ce.forEach(u),X.forEach(u),R=V(Q),H=fe(Q,"svg",{viewBox:!0,"aria-hidden":!0,class:!0});var Me=E(H);y=fe(Me,"path",{d:!0,class:!0}),E(y).forEach(u),Me.forEach(u),Q.forEach(u),D=V(M),G=g(M,"DIV",{class:!0});var Be=E(G);U=g(Be,"A",{href:!0,class:!0});var Ve=E(U);Z=g(Ve,"IMG",{src:!0,alt:!0,class:!0}),Ve.forEach(u),Be.forEach(u),M.forEach(u),this.h()},h(){c(t,"href",W+"/"),c(t,"class","svelte-670tva"),c(a,"class","corner svelte-670tva"),c(r,"d","M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z"),c(r,"class","svelte-670tva"),c(i,"viewBox","0 0 2 3"),c(i,"aria-hidden","true"),c(i,"class","svelte-670tva"),c(h,"href",W+"/create"),c(h,"class","svelte-670tva"),c(_,"class","svelte-670tva"),q(_,"active",l[1].url.pathname.startsWith("/create")),c(k,"href",W+"/earn"),c(k,"class","svelte-670tva"),c(v,"class","svelte-670tva"),q(v,"active",l[1].url.pathname==="/earn"),c(j,"href",W+"/settings"),c(j,"class","svelte-670tva"),c(w,"class","svelte-670tva"),q(w,"active",l[1].url.pathname==="/settings"),c(p,"class","svelte-670tva"),c(y,"d","M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z"),c(y,"class","svelte-670tva"),c(H,"viewBox","0 0 2 3"),c(H,"aria-hidden","true"),c(H,"class","svelte-670tva"),c(o,"class","svelte-670tva"),se(Z.src,be=W+"/images/github.svg")||c(Z,"src",be),c(Z,"alt","GitHub"),c(Z,"class","svelte-670tva"),c(U,"href","https://github.com/2qx/unspent"),c(U,"class","svelte-670tva"),c(G,"class","corner svelte-670tva"),c(s,"class","svelte-670tva")},m(I,M){N.m(I,M),L(I,e,M),L(I,s,M),d(s,a),d(a,t),z.m(t,null),d(s,n),d(s,o),d(o,i),d(i,r),d(o,f),d(o,p),d(p,_),d(_,h),d(h,$),d(p,b),d(p,v),d(v,k),d(k,C),d(p,A),d(p,w),d(w,j),d(j,T),d(o,R),d(o,H),d(H,y),d(s,D),d(s,G),d(G,U),d(U,Z)},p(I,[M]){ie===(ie=ye(I))&&N?N.p(I,M):(N.d(1),N=ie(I),N&&(N.c(),N.m(e.parentNode,e))),oe===(oe=ke(I))&&z?z.p(I,M):(z.d(1),z=oe(I),z&&(z.c(),z.m(t,null))),M&2&&q(_,"active",I[1].url.pathname.startsWith("/create")),M&2&&q(v,"active",I[1].url.pathname==="/earn"),M&2&&q(w,"active",I[1].url.pathname==="/settings")},i:P,o:P,d(I){N.d(I),I&&u(e),I&&u(s),z.d()}}}function $t(l,e,s){let a;pe(l,pt,n=>s(1,a=n));let{data:t}=e;return l.$$set=n=>{"data"in n&&s(0,t=n.data)},[t,a]}class wt extends ne{constructor(e){super(),le(this,e,$t,Et,re,{data:0})}}function He(l){let e,s,a;return{c(){e=m("div"),s=m("img"),this.h()},l(t){e=g(t,"DIV",{class:!0});var n=E(e);s=g(n,"IMG",{src:!0,alt:!0}),n.forEach(u),this.h()},h(){se(s.src,a=J+"/dev/under_construction.gif")||c(s,"src",a),c(s,"alt","Whao!"),c(e,"class","uc-image svelte-176z9vr")},m(t,n){L(t,e,n),d(e,s)},p:P,d(t){t&&u(e)}}}function Ne(l){let e,s,a;return{c(){e=m("div"),s=m("img"),this.h()},l(t){e=g(t,"DIV",{class:!0});var n=E(e);s=g(n,"IMG",{src:!0,alt:!0}),n.forEach(u),this.h()},h(){se(s.src,a=J+"/dev/localhost.png")||c(s,"src",a),c(s,"alt","local"),c(e,"class","uc-local svelte-176z9vr")},m(t,n){L(t,e,n),d(e,s)},p:P,d(t){t&&u(e)}}}function It(l){let e,s,a=l[0]&&l[0].isDevelopment&&He(),t=l[0]&&l[0].isLocal&&Ne();return{c(){a&&a.c(),e=B(),t&&t.c(),s=te()},l(n){a&&a.l(n),e=V(n),t&&t.l(n),s=te()},m(n,o){a&&a.m(n,o),L(n,e,o),t&&t.m(n,o),L(n,s,o)},p(n,[o]){n[0]&&n[0].isDevelopment?a?a.p(n,o):(a=He(),a.c(),a.m(e.parentNode,e)):a&&(a.d(1),a=null),n[0]&&n[0].isLocal?t?t.p(n,o):(t=Ne(),t.c(),t.m(s.parentNode,s)):t&&(t.d(1),t=null)},i:P,o:P,d(n){a&&a.d(n),n&&u(e),t&&t.d(n),n&&u(s)}}}function Dt(l,e,s){let{data:a}=e;return l.$$set=t=>{"data"in t&&s(0,a=t.data)},[a]}class Lt extends ne{constructor(e){super(),le(this,e,Dt,It,re,{data:0})}}function We(l){const e=l-1;return e*e*e+1}function At(l,{delay:e=0,duration:s=400,easing:a=ve}={}){const t=+getComputedStyle(l).opacity;return{delay:e,duration:s,easing:a,css:n=>`opacity: ${n*t}`}}function Ct(l,{delay:e=0,duration:s=400,easing:a=We,x:t=0,y:n=0,opacity:o=0}={}){const i=getComputedStyle(l),r=+i.opacity,f=i.transform==="none"?"":i.transform,p=r*(1-o);return{delay:e,duration:s,easing:a,css:(_,h)=>`
			transform: ${f} translate(${(1-_)*t}px, ${(1-_)*n}px);
			opacity: ${r-p*h}`}}function Tt(l,{from:e,to:s},a={}){const t=getComputedStyle(l),n=t.transform==="none"?"":t.transform,[o,i]=t.transformOrigin.split(" ").map(parseFloat),r=e.left+e.width*o/s.width-(s.left+o),f=e.top+e.height*i/s.height-(s.top+i),{delay:p=0,duration:_=$=>Math.sqrt($)*120,easing:h=We}=a;return{delay:p,duration:Ze(_)?_(Math.sqrt(r*r+f*f)):_,easing:h,css:($,b)=>{const v=b*r,k=b*f,C=$+b*e.width/s.width,A=$+b*e.height/s.height;return`transform: ${n} translate(${v}px, ${k}px) scale(${C}, ${A});`}}}function ze(l){return Object.prototype.toString.call(l)==="[object Date]"}function he(l,e){if(l===e||l!==l)return()=>l;const s=typeof l;if(s!==typeof e||Array.isArray(l)!==Array.isArray(e))throw new Error("Cannot interpolate values of different type");if(Array.isArray(l)){const a=e.map((t,n)=>he(l[n],t));return t=>a.map(n=>n(t))}if(s==="object"){if(!l||!e)throw new Error("Object cannot be null");if(ze(l)&&ze(e)){l=l.getTime(),e=e.getTime();const n=e-l;return o=>new Date(l+o*n)}const a=Object.keys(e),t={};return a.forEach(n=>{t[n]=he(l[n],e[n])}),n=>{const o={};return a.forEach(i=>{o[i]=t[i](n)}),o}}if(s==="number"){const a=e-l;return t=>l+t*a}throw new Error(`Cannot interpolate ${s} values`)}function Mt(l,e={}){const s=vt(l);let a,t=l;function n(o,i){if(l==null)return s.set(l=o),Promise.resolve();t=o;let r=a,f=!1,{delay:p=0,duration:_=400,easing:h=ve,interpolate:$=he}=de(de({},e),i);if(_===0)return r&&(r.abort(),r=null),s.set(l=t),Promise.resolve();const b=Je()+p;let v;return a=Qe(k=>{if(k<b)return!0;f||(v=$(l,o),typeof _=="function"&&(_=_(l,o)),f=!0),r&&(r.abort(),r=null);const C=k-b;return C>_?(s.set(l=o),!1):(s.set(l=v(h(C/_))),!0)}),a.promise}return{set:n,update:(o,i)=>n(o(t,l),i),subscribe:s.subscribe}}function Bt(l){let e,s=l[0].msg+"",a;return{c(){e=new xe(!1),a=te(),this.h()},l(t){e=et(t,!1),a=te(),this.h()},h(){e.a=a},m(t,n){e.m(s,t,n),L(t,a,n)},p(t,n){n&1&&s!==(s=t[0].msg+"")&&e.p(s)},i:P,o:P,d(t){t&&u(a),t&&e.d()}}}function Vt(l){let e,s,a;const t=[l[2]];var n=l[0].component.src;function o(i){let r={};for(let f=0;f<t.length;f+=1)r=de(r,t[f]);return{props:r}}return n&&(e=Pe(n,o())),{c(){e&&Y(e.$$.fragment),s=te()},l(i){e&&ae(e.$$.fragment,i),s=te()},m(i,r){e&&x(e,i,r),L(i,s,r),a=!0},p(i,r){const f=r&4?tt(t,[st(i[2])]):{};if(n!==(n=i[0].component.src)){if(e){me();const p=e;F(p.$$.fragment,1,0,()=>{ee(p,1)}),ge()}n?(e=Pe(n,o()),Y(e.$$.fragment),K(e.$$.fragment,1),x(e,s.parentNode,s)):e=null}else n&&e.$set(f)},i(i){a||(e&&K(e.$$.fragment,i),a=!0)},o(i){e&&F(e.$$.fragment,i),a=!1},d(i){i&&u(s),e&&ee(e,i)}}}function Ue(l){let e,s,a;return{c(){e=m("div"),this.h()},l(t){e=g(t,"DIV",{class:!0,role:!0,tabindex:!0}),E(e).forEach(u),this.h()},h(){c(e,"class","_toastBtn pe svelte-10l0ogd"),c(e,"role","button"),c(e,"tabindex","0")},m(t,n){L(t,e,n),s||(a=[ue(e,"click",l[4]),ue(e,"keydown",l[8])],s=!0)},p:P,d(t){t&&u(e),s=!1,Re(a)}}}function Pt(l){let e,s,a,t,n,o,i,r,f,p;const _=[Vt,Bt],h=[];function $(v,k){return v[0].component?0:1}a=$(l),t=h[a]=_[a](l);let b=l[0].dismissable&&Ue(l);return{c(){e=m("div"),s=m("div"),t.c(),n=B(),b&&b.c(),o=B(),i=m("progress"),this.h()},l(v){e=g(v,"DIV",{class:!0});var k=E(e);s=g(k,"DIV",{role:!0,class:!0});var C=E(s);t.l(C),C.forEach(u),n=V(k),b&&b.l(k),o=V(k),i=g(k,"PROGRESS",{class:!0}),E(i).forEach(u),k.forEach(u),this.h()},h(){c(s,"role","status"),c(s,"class","_toastMsg svelte-10l0ogd"),q(s,"pe",l[0].component),c(i,"class","_toastBar svelte-10l0ogd"),i.value=l[1],c(e,"class","_toastItem svelte-10l0ogd"),q(e,"pe",l[0].pausable)},m(v,k){L(v,e,k),d(e,s),h[a].m(s,null),d(e,n),b&&b.m(e,null),d(e,o),d(e,i),r=!0,f||(p=[ue(e,"mouseenter",l[9]),ue(e,"mouseleave",l[6])],f=!0)},p(v,[k]){let C=a;a=$(v),a===C?h[a].p(v,k):(me(),F(h[C],1,1,()=>{h[C]=null}),ge(),t=h[a],t?t.p(v,k):(t=h[a]=_[a](v),t.c()),K(t,1),t.m(s,null)),(!r||k&1)&&q(s,"pe",v[0].component),v[0].dismissable?b?b.p(v,k):(b=Ue(v),b.c(),b.m(e,o)):b&&(b.d(1),b=null),(!r||k&2)&&(i.value=v[1]),(!r||k&1)&&q(e,"pe",v[0].pausable)},i(v){r||(K(t),r=!0)},o(v){F(t),r=!1},d(v){v&&u(e),h[a].d(),b&&b.d(),f=!1,Re(p)}}}function St(l,e,s){let a,{item:t}=e;const n=Mt(t.initial,{duration:t.duration,easing:ve});pe(l,n,A=>s(1,a=A));const o=()=>_e.pop(t.id),i=()=>{(a===1||a===0)&&o()};let r=t.initial,f=r,p=!1;const _=()=>{!p&&a!==r&&(n.set(a,{duration:0}),p=!0)},h=()=>{if(p){const A=t.duration,w=A-A*((a-f)/(r-f));n.set(r,{duration:w}).then(i),p=!1}};let $={};const b=()=>document.hidden?_():h(),v=A=>{const{hidden:w,addEventListener:j,removeEventListener:T}=document;if(typeof w>"u")return;const R="visibilitychange";return A?j(R,b):T(R,b),!0};Xe(()=>v(!0)&&b()),Ye(()=>{typeof t.onpop=="function"&&t.onpop(t.id),v(!1)});const k=A=>{A instanceof KeyboardEvent&&["Enter"," "].includes(A.key)&&o()},C=()=>{t.pausable&&_()};return l.$$set=A=>{"item"in A&&s(0,t=A.item)},l.$$.update=()=>{if(l.$$.dirty&1&&typeof t.progress<"u"&&s(0,t.next=t.progress,t),l.$$.dirty&131&&r!==t.next&&(s(7,r=t.next),f=a,p=!1,n.set(r).then(i)),l.$$.dirty&1&&t.component){const{props:A={},sendIdTo:w}=t.component;s(2,$={...A,...w&&{[w]:t.id}})}},[t,a,$,n,o,_,h,r,k,C]}class Ot extends ne{constructor(e){super(),le(this,e,St,Pt,re,{item:0})}}function qe(l,e,s){const a=l.slice();return a[5]=e[s],a}function Fe(l,e){let s,a,t,n,o,i,r,f,p=P,_;return a=new Ot({props:{item:e[5]}}),{key:l,first:null,c(){s=m("li"),Y(a.$$.fragment),t=B(),this.h()},l(h){s=g(h,"LI",{class:!0,style:!0});var $=E(s);ae(a.$$.fragment,$),t=V($),$.forEach(u),this.h()},h(){c(s,"class",n=Se(e[5].classes.join(" "))+" svelte-yh90az"),c(s,"style",o=e[1](e[5].theme)),this.first=s},m(h,$){L(h,s,$),x(a,s,null),d(s,t),_=!0},p(h,$){e=h;const b={};$&1&&(b.item=e[5]),a.$set(b),(!_||$&1&&n!==(n=Se(e[5].classes.join(" "))+" svelte-yh90az"))&&c(s,"class",n),(!_||$&1&&o!==(o=e[1](e[5].theme)))&&c(s,"style",o)},r(){f=s.getBoundingClientRect()},f(){nt(s),p(),lt(s,f)},a(){p(),p=rt(s,f,Tt,{duration:200})},i(h){_||(K(a.$$.fragment,h),it(()=>{r&&r.end(1),i=ot(s,Ct,e[5].intro),i.start()}),_=!0)},o(h){F(a.$$.fragment,h),i&&i.invalidate(),r=ct(s,At,{}),_=!1},d(h){h&&u(s),ee(a),h&&r&&r.end()}}}function jt(l){let e,s=[],a=new Map,t,n=l[0];const o=i=>i[5].id;for(let i=0;i<n.length;i+=1){let r=qe(l,n,i),f=o(r);a.set(f,s[i]=Fe(f,r))}return{c(){e=m("ul");for(let i=0;i<s.length;i+=1)s[i].c();this.h()},l(i){e=g(i,"UL",{class:!0});var r=E(e);for(let f=0;f<s.length;f+=1)s[f].l(r);r.forEach(u),this.h()},h(){c(e,"class","_toastContainer svelte-yh90az")},m(i,r){L(i,e,r);for(let f=0;f<s.length;f+=1)s[f].m(e,null);t=!0},p(i,[r]){if(r&3){n=i[0],me();for(let f=0;f<s.length;f+=1)s[f].r();s=at(s,r,o,1,i,n,a,e,ft,Fe,null,qe);for(let f=0;f<s.length;f+=1)s[f].a();ge()}},i(i){if(!t){for(let r=0;r<n.length;r+=1)K(s[r]);t=!0}},o(i){for(let r=0;r<s.length;r+=1)F(s[r]);t=!1},d(i){i&&u(e);for(let r=0;r<s.length;r+=1)s[r].d()}}}function Gt(l,e,s){let a;pe(l,_e,r=>s(4,a=r));let{options:t={}}=e,{target:n="default"}=e,o;const i=r=>Object.keys(r).reduce((f,p)=>`${f}${p}:${r[p]};`,"");return l.$$set=r=>{"options"in r&&s(2,t=r.options),"target"in r&&s(3,n=r.target)},l.$$.update=()=>{l.$$.dirty&12&&_e._init(n,t),l.$$.dirty&24&&s(0,o=a.filter(r=>r.target===n))},[o,i,t,n,a]}class Ht extends ne{constructor(e){super(),le(this,e,Gt,jt,re,{options:2,target:3})}}function Nt(l){let e,s,a;return{c(){e=m("link"),s=B(),a=m("link"),this.h()},l(t){e=g(t,"LINK",{rel:!0,href:!0}),s=V(t),a=g(t,"LINK",{rel:!0,href:!0}),this.h()},h(){c(e,"rel","stylesheet"),c(e,"href",J+"/smui.css"),c(a,"rel","stylesheet"),c(a,"href",J+"/site.css")},m(t,n){L(t,e,n),L(t,s,n),L(t,a,n)},p:P,d(t){t&&u(e),t&&u(s),t&&u(a)}}}function Ke(l){let e,s,a,t,n,o;return{c(){e=m("img"),a=B(),t=m("div"),n=m("b"),o=S("Decentralized finance using unspent transaction unlocking script. Open source, on-chain, running nativiely & directly on Bitcoin Cash (BCH)."),this.h()},l(i){e=g(i,"IMG",{id:!0,src:!0,alt:!0,class:!0}),a=V(i),t=g(i,"DIV",{id:!0,class:!0});var r=E(t);n=g(r,"B",{});var f=E(n);o=O(f,"Decentralized finance using unspent transaction unlocking script. Open source, on-chain, running nativiely & directly on Bitcoin Cash (BCH)."),f.forEach(u),r.forEach(u),this.h()},h(){c(e,"id","banner"),se(e.src,s=J+"/images/banner.svg")||c(e,"src",s),c(e,"alt","Unspent"),c(e,"class","svelte-1wf7f8"),c(t,"id","description"),c(t,"class","svelte-1wf7f8")},m(i,r){L(i,e,r),L(i,a,r),L(i,t,r),d(t,n),d(n,o)},p:P,d(i){i&&u(e),i&&u(a),i&&u(t)}}}function zt(l){let e,s,a,t,n,o,i,r,f,p,_,h,$;function b(y,D){return Nt}let k=b()(l);function C(y){l[3](y)}let A={};l[0]!==void 0&&(A.data=l[0]),a=new wt({props:A}),Oe.push(()=>je(a,"data",C)),o=new Ht({});let w=l[0]&&l[0].splash&&Ke();const j=l[2].default,T=ut(j,l,l[1],null);function R(y){l[4](y)}let H={};return l[0]!==void 0&&(H.data=l[0]),_=new Lt({props:H}),Oe.push(()=>je(_,"data",R)),{c(){e=m("div"),k.c(),s=B(),Y(a.$$.fragment),n=B(),Y(o.$$.fragment),i=B(),w&&w.c(),r=B(),f=m("main"),T&&T.c(),p=B(),Y(_.$$.fragment),this.h()},l(y){e=g(y,"DIV",{class:!0});var D=E(e);k.l(D),s=V(D),ae(a.$$.fragment,D),n=V(D),ae(o.$$.fragment,D),i=V(D),w&&w.l(D),r=V(D),f=g(D,"MAIN",{class:!0});var G=E(f);T&&T.l(G),G.forEach(u),p=V(D),ae(_.$$.fragment,D),D.forEach(u),this.h()},h(){c(f,"class","svelte-1wf7f8"),c(e,"class","app svelte-1wf7f8")},m(y,D){L(y,e,D),k.m(e,null),d(e,s),x(a,e,null),d(e,n),x(o,e,null),d(e,i),w&&w.m(e,null),d(e,r),d(e,f),T&&T.m(f,null),d(e,p),x(_,e,null),$=!0},p(y,[D]){k.p(y,D);const G={};!t&&D&1&&(t=!0,G.data=y[0],Ge(()=>t=!1)),a.$set(G),y[0]&&y[0].splash?w?w.p(y,D):(w=Ke(),w.c(),w.m(e,r)):w&&(w.d(1),w=null),T&&T.p&&(!$||D&2)&&dt(T,j,y,y[1],$?ht(j,y[1],D,null):_t(y[1]),null);const U={};!h&&D&1&&(h=!0,U.data=y[0],Ge(()=>h=!1)),_.$set(U)},i(y){$||(K(a.$$.fragment,y),K(o.$$.fragment,y),K(T,y),K(_.$$.fragment,y),$=!0)},o(y){F(a.$$.fragment,y),F(o.$$.fragment,y),F(T,y),F(_.$$.fragment,y),$=!1},d(y){y&&u(e),k.d(),ee(a),ee(o),w&&w.d(),T&&T.d(y),ee(_)}}}function Ut(l,e,s){let{$$slots:a={},$$scope:t}=e,{data:n}=e;function o(r){n=r,s(0,n)}function i(r){n=r,s(0,n)}return l.$$set=r=>{"data"in r&&s(0,n=r.data),"$$scope"in r&&s(1,t=r.$$scope)},[n,t,a,o,i]}class Wt extends ne{constructor(e){super(),le(this,e,Ut,zt,re,{data:0})}}export{Wt as default};
//# sourceMappingURL=_layout.svelte-87c2033e.js.map
