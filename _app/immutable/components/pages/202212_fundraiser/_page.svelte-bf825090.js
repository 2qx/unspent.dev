import{S as Oe,i as Ne,s as Me,K as pe,k as y,a as D,l as A,m as E,h,c as R,n as b,aa as Be,b as P,G as d,ab as De,N as Dt,T as yt,J as At,B as x,O as Et,ac as Re,ad as St,ae as lt,H as Rt,o as wt,af as Ct,ag as kt,a2 as It,a4 as Tt,a6 as Ot,a7 as Nt,a8 as Mt,f as B,t as O,ah as qt,e as se,g as me,d as _e,q as S,w as re,r as w,x as ae,y as ne,u as oe,z as le,ai as Ft,p as X,a9 as jt,aj as Ut,F as Vt}from"../../../chunks/index-af810871.js";import{a as Ht}from"../../../chunks/paths-08d8b2c5.js";import{l as Lt,g as Yt,A as Wt}from"../../../chunks/Address-55d2e675.js";import{_ as zt,a as it,b as Xt,M as Qt,c as ke,u as Pt,f as Bt,d as qe,e as Gt,i as Jt,l as Kt,h as ot,g as Zt,j as xt,E as $t}from"../../../chunks/store-4259f027.js";import{g as es}from"../../../chunks/util-99a30deb.js";import{C as ts,A as ss}from"../../../chunks/AddressQrCode-9f78f03b.js";import{C as rs}from"../../../chunks/Confetti-cfe86a4c.js";/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Y={CLOSED_CLASS:"mdc-linear-progress--closed",CLOSED_ANIMATION_OFF_CLASS:"mdc-linear-progress--closed-animation-off",INDETERMINATE_CLASS:"mdc-linear-progress--indeterminate",REVERSED_CLASS:"mdc-linear-progress--reversed",ANIMATION_READY_CLASS:"mdc-linear-progress--animation-ready"},G={ARIA_HIDDEN:"aria-hidden",ARIA_VALUEMAX:"aria-valuemax",ARIA_VALUEMIN:"aria-valuemin",ARIA_VALUENOW:"aria-valuenow",BUFFER_BAR_SELECTOR:".mdc-linear-progress__buffer-bar",FLEX_BASIS:"flex-basis",PRIMARY_BAR_SELECTOR:".mdc-linear-progress__primary-bar"},ye={PRIMARY_HALF:.8367142,PRIMARY_FULL:2.00611057,SECONDARY_QUARTER:.37651913,SECONDARY_HALF:.84386165,SECONDARY_FULL:1.60277782};/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var as=function(i){zt(e,i);function e(t){var a=i.call(this,it(it({},e.defaultAdapter),t))||this;return a.observer=null,a}return Object.defineProperty(e,"cssClasses",{get:function(){return Y},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return G},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},attachResizeObserver:function(){return null},forceLayout:function(){},getWidth:function(){return 0},hasClass:function(){return!1},setBufferBarStyle:function(){return null},setPrimaryBarStyle:function(){return null},setStyle:function(){},removeAttribute:function(){},removeClass:function(){},setAttribute:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){var t=this;this.determinate=!this.adapter.hasClass(Y.INDETERMINATE_CLASS),this.adapter.addClass(Y.ANIMATION_READY_CLASS),this.progress=0,this.buffer=1,this.observer=this.adapter.attachResizeObserver(function(a){var l,o;if(!t.determinate)try{for(var r=Xt(a),n=r.next();!n.done;n=r.next()){var s=n.value;s.contentRect&&t.calculateAndSetDimensions(s.contentRect.width)}}catch(m){l={error:m}}finally{try{n&&!n.done&&(o=r.return)&&o.call(r)}finally{if(l)throw l.error}}}),!this.determinate&&this.observer&&this.calculateAndSetDimensions(this.adapter.getWidth())},e.prototype.setDeterminate=function(t){if(this.determinate=t,this.determinate){this.adapter.removeClass(Y.INDETERMINATE_CLASS),this.adapter.setAttribute(G.ARIA_VALUENOW,this.progress.toString()),this.adapter.setAttribute(G.ARIA_VALUEMAX,"1"),this.adapter.setAttribute(G.ARIA_VALUEMIN,"0"),this.setPrimaryBarProgress(this.progress),this.setBufferBarProgress(this.buffer);return}this.observer&&this.calculateAndSetDimensions(this.adapter.getWidth()),this.adapter.addClass(Y.INDETERMINATE_CLASS),this.adapter.removeAttribute(G.ARIA_VALUENOW),this.adapter.removeAttribute(G.ARIA_VALUEMAX),this.adapter.removeAttribute(G.ARIA_VALUEMIN),this.setPrimaryBarProgress(1),this.setBufferBarProgress(1)},e.prototype.isDeterminate=function(){return this.determinate},e.prototype.setProgress=function(t){this.progress=t,this.determinate&&(this.setPrimaryBarProgress(t),this.adapter.setAttribute(G.ARIA_VALUENOW,t.toString()))},e.prototype.getProgress=function(){return this.progress},e.prototype.setBuffer=function(t){this.buffer=t,this.determinate&&this.setBufferBarProgress(t)},e.prototype.getBuffer=function(){return this.buffer},e.prototype.open=function(){this.adapter.removeClass(Y.CLOSED_CLASS),this.adapter.removeClass(Y.CLOSED_ANIMATION_OFF_CLASS),this.adapter.removeAttribute(G.ARIA_HIDDEN)},e.prototype.close=function(){this.adapter.addClass(Y.CLOSED_CLASS),this.adapter.setAttribute(G.ARIA_HIDDEN,"true")},e.prototype.isClosed=function(){return this.adapter.hasClass(Y.CLOSED_CLASS)},e.prototype.handleTransitionEnd=function(){this.adapter.hasClass(Y.CLOSED_CLASS)&&this.adapter.addClass(Y.CLOSED_ANIMATION_OFF_CLASS)},e.prototype.destroy=function(){i.prototype.destroy.call(this),this.observer&&this.observer.disconnect()},e.prototype.restartAnimation=function(){this.adapter.removeClass(Y.ANIMATION_READY_CLASS),this.adapter.forceLayout(),this.adapter.addClass(Y.ANIMATION_READY_CLASS)},e.prototype.setPrimaryBarProgress=function(t){var a="scaleX("+t+")",l=typeof window<"u"?es(window,"transform"):"transform";this.adapter.setPrimaryBarStyle(l,a)},e.prototype.setBufferBarProgress=function(t){var a=t*100+"%";this.adapter.setBufferBarStyle(G.FLEX_BASIS,a)},e.prototype.calculateAndSetDimensions=function(t){var a=t*ye.PRIMARY_HALF,l=t*ye.PRIMARY_FULL,o=t*ye.SECONDARY_QUARTER,r=t*ye.SECONDARY_HALF,n=t*ye.SECONDARY_FULL;this.adapter.setStyle("--mdc-linear-progress-primary-half",a+"px"),this.adapter.setStyle("--mdc-linear-progress-primary-half-neg",-a+"px"),this.adapter.setStyle("--mdc-linear-progress-primary-full",l+"px"),this.adapter.setStyle("--mdc-linear-progress-primary-full-neg",-l+"px"),this.adapter.setStyle("--mdc-linear-progress-secondary-quarter",o+"px"),this.adapter.setStyle("--mdc-linear-progress-secondary-quarter-neg",-o+"px"),this.adapter.setStyle("--mdc-linear-progress-secondary-half",r+"px"),this.adapter.setStyle("--mdc-linear-progress-secondary-half-neg",-r+"px"),this.adapter.setStyle("--mdc-linear-progress-secondary-full",n+"px"),this.adapter.setStyle("--mdc-linear-progress-secondary-full-neg",-n+"px"),this.restartAnimation()},e}(Qt);function ns(i){let e,t,a,l,o,r,n,s,m,v,c,u,f,g,p,T,N,j,U,V,H,W=[{class:g=ke({[i[1]]:!0,"mdc-linear-progress":!0,"mdc-linear-progress--indeterminate":i[3],"mdc-linear-progress--closed":i[4],"mdc-data-table__linear-progress":i[14]==="data-table",...i[8]})},{style:p=Object.entries(i[10]).map(ft).concat([i[2]]).join(" ")},{role:"progressbar"},{"aria-valuemin":T=0},{"aria-valuemax":N=1},{"aria-valuenow":j=i[3]?void 0:i[5]},i[9],i[16]],J={};for(let C=0;C<W.length;C+=1)J=pe(J,W[C]);return{c(){e=y("div"),t=y("div"),a=y("div"),o=D(),r=y("div"),n=D(),s=y("div"),m=y("span"),c=D(),u=y("div"),f=y("span"),this.h()},l(C){e=A(C,"DIV",{class:!0,style:!0,role:!0,"aria-valuemin":!0,"aria-valuemax":!0,"aria-valuenow":!0});var k=E(e);t=A(k,"DIV",{class:!0});var M=E(t);a=A(M,"DIV",{class:!0,style:!0}),E(a).forEach(h),o=R(M),r=A(M,"DIV",{class:!0}),E(r).forEach(h),M.forEach(h),n=R(k),s=A(k,"DIV",{class:!0,style:!0});var q=E(s);m=A(q,"SPAN",{class:!0}),E(m).forEach(h),q.forEach(h),c=R(k),u=A(k,"DIV",{class:!0});var Z=E(u);f=A(Z,"SPAN",{class:!0}),E(f).forEach(h),Z.forEach(h),k.forEach(h),this.h()},h(){b(a,"class","mdc-linear-progress__buffer-bar"),b(a,"style",l=Object.entries(i[11]).map(ct).join(" ")),b(r,"class","mdc-linear-progress__buffer-dots"),b(t,"class","mdc-linear-progress__buffer"),b(m,"class","mdc-linear-progress__bar-inner"),b(s,"class","mdc-linear-progress__bar mdc-linear-progress__primary-bar"),b(s,"style",v=Object.entries(i[12]).map(ut).join(" ")),b(f,"class","mdc-linear-progress__bar-inner"),b(u,"class","mdc-linear-progress__bar mdc-linear-progress__secondary-bar"),Be(e,J)},m(C,k){P(C,e,k),d(e,t),d(t,a),d(t,o),d(t,r),d(e,n),d(e,s),d(s,m),d(e,c),d(e,u),d(u,f),i[19](e),V||(H=[De(U=Pt.call(null,e,i[0])),De(i[13].call(null,e)),Dt(e,"transitionend",i[20])],V=!0)},p(C,[k]){k&2048&&l!==(l=Object.entries(C[11]).map(ct).join(" "))&&b(a,"style",l),k&4096&&v!==(v=Object.entries(C[12]).map(ut).join(" "))&&b(s,"style",v),Be(e,J=yt(W,[k&282&&g!==(g=ke({[C[1]]:!0,"mdc-linear-progress":!0,"mdc-linear-progress--indeterminate":C[3],"mdc-linear-progress--closed":C[4],"mdc-data-table__linear-progress":C[14]==="data-table",...C[8]}))&&{class:g},k&1028&&p!==(p=Object.entries(C[10]).map(ft).concat([C[2]]).join(" "))&&{style:p},{role:"progressbar"},{"aria-valuemin":T},{"aria-valuemax":N},k&40&&j!==(j=C[3]?void 0:C[5])&&{"aria-valuenow":j},k&512&&C[9],k&65536&&C[16]])),U&&At(U.update)&&k&1&&U.update.call(null,C[0])},i:x,o:x,d(C){C&&h(e),i[19](null),V=!1,Et(H)}}}const ct=([i,e])=>`${i}: ${e};`,ut=([i,e])=>`${i}: ${e};`,ft=([i,e])=>`${i}: ${e};`;function ls(i,e,t){const a=["use","class","style","indeterminate","closed","progress","buffer","getElement"];let l=Re(e,a),o;const r=Bt(St());let{use:n=[]}=e,{class:s=""}=e,{style:m=""}=e,{indeterminate:v=!1}=e,{closed:c=!1}=e,{progress:u=0}=e,{buffer:f=void 0}=e,g,p,T={},N={},j={},U={},V={},H=lt("SMUI:linear-progress:context"),W=lt("SMUI:linear-progress:closed");Rt(i,W,_=>t(21,o=_)),wt(()=>(t(6,p=new as({addClass:C,forceLayout:()=>{z().getBoundingClientRect()},setBufferBarStyle:K,setPrimaryBarStyle:ge,hasClass:J,removeAttribute:q,removeClass:k,setAttribute:M,setStyle:Z,attachResizeObserver:_=>{const I=window.ResizeObserver;if(I){const ce=new I(_);return ce.observe(z()),ce}return null},getWidth:()=>z().offsetWidth})),p.init(),()=>{p.destroy()}));function J(_){return _ in T?T[_]:z().classList.contains(_)}function C(_){T[_]||t(8,T[_]=!0,T)}function k(_){(!(_ in T)||T[_])&&t(8,T[_]=!1,T)}function M(_,I){N[_]!==I&&t(9,N[_]=I,N)}function q(_){(!(_ in N)||N[_]!=null)&&t(9,N[_]=void 0,N)}function Z(_,I){j[_]!=I&&(I===""||I==null?(delete j[_],t(10,j)):t(10,j[_]=I,j))}function K(_,I){U[_]!=I&&(I===""||I==null?(delete U[_],t(11,U)):t(11,U[_]=I,U))}function ge(_,I){V[_]!=I&&(I===""||I==null?(delete V[_],t(12,V)):t(12,V[_]=I,V))}function z(){return g}function ve(_){It[_?"unshift":"push"](()=>{g=_,t(7,g)})}const be=()=>p&&p.handleTransitionEnd();return i.$$set=_=>{e=pe(pe({},e),Ct(_)),t(16,l=Re(e,a)),"use"in _&&t(0,n=_.use),"class"in _&&t(1,s=_.class),"style"in _&&t(2,m=_.style),"indeterminate"in _&&t(3,v=_.indeterminate),"closed"in _&&t(4,c=_.closed),"progress"in _&&t(5,u=_.progress),"buffer"in _&&t(17,f=_.buffer)},i.$$.update=()=>{i.$$.dirty&16&&W&&kt(W,o=c,o),i.$$.dirty&72&&p&&p.isDeterminate()!==!v&&p.setDeterminate(!v),i.$$.dirty&96&&p&&p.getProgress()!==u&&p.setProgress(u),i.$$.dirty&131136&&p&&(f==null?p.setBuffer(1):p.setBuffer(f)),i.$$.dirty&80&&p&&(c?p.close():p.open())},[n,s,m,v,c,u,p,g,T,N,j,U,V,r,H,W,l,f,z,ve,be]}class is extends Oe{constructor(e){super(),Ne(this,e,ls,ns,Me,{use:0,class:1,style:2,indeterminate:3,closed:4,progress:5,buffer:17,getElement:18})}get getElement(){return this.$$.ctx[18]}}function os(i){let e,t,a,l,o,r;const n=i[9].default,s=Tt(n,i,i[8],null);let m=[{class:t=ke({[i[1]]:!0,"mdc-image-list":!0,"mdc-image-list--masonry":i[2],"mdc-image-list--with-text-protection":i[3]})},i[6]],v={};for(let c=0;c<m.length;c+=1)v=pe(v,m[c]);return{c(){e=y("ul"),s&&s.c(),this.h()},l(c){e=A(c,"UL",{class:!0});var u=E(e);s&&s.l(u),u.forEach(h),this.h()},h(){Be(e,v)},m(c,u){P(c,e,u),s&&s.m(e,null),i[10](e),l=!0,o||(r=[De(a=Pt.call(null,e,i[0])),De(i[5].call(null,e))],o=!0)},p(c,[u]){s&&s.p&&(!l||u&256)&&Ot(s,n,c,c[8],l?Mt(n,c[8],u,null):Nt(c[8]),null),Be(e,v=yt(m,[(!l||u&14&&t!==(t=ke({[c[1]]:!0,"mdc-image-list":!0,"mdc-image-list--masonry":c[2],"mdc-image-list--with-text-protection":c[3]})))&&{class:t},u&64&&c[6]])),a&&At(a.update)&&u&1&&a.update.call(null,c[0])},i(c){l||(B(s,c),l=!0)},o(c){O(s,c),l=!1},d(c){c&&h(e),s&&s.d(c),i[10](null),o=!1,Et(r)}}}function cs(i,e,t){const a=["use","class","masonry","withTextProtection","getElement"];let l=Re(e,a),{$$slots:o={},$$scope:r}=e;const n=Bt(St());let{use:s=[]}=e,{class:m=""}=e,{masonry:v=!1}=e,{withTextProtection:c=!1}=e,u;qt("SMUI:label:context","image-list");function f(){return u}function g(p){It[p?"unshift":"push"](()=>{u=p,t(4,u)})}return i.$$set=p=>{e=pe(pe({},e),Ct(p)),t(6,l=Re(e,a)),"use"in p&&t(0,s=p.use),"class"in p&&t(1,m=p.class),"masonry"in p&&t(2,v=p.masonry),"withTextProtection"in p&&t(3,c=p.withTextProtection),"$$scope"in p&&t(8,r=p.$$scope)},[s,m,v,c,u,n,l,f,r,o,g]}class us extends Oe{constructor(e){super(),Ne(this,e,cs,os,Me,{use:0,class:1,masonry:2,withTextProtection:3,getElement:7})}get getElement(){return this.$$.ctx[7]}}const fs=qe({class:"mdc-image-list__item",tag:"li"});qe({class:"mdc-image-list__image-aspect-container",tag:"div"});qe({class:"mdc-image-list__image",tag:"img"});qe({class:"mdc-image-list__supporting",tag:"div"});function dt(i,e,t){const a=i.slice();return a[7]=e[t],a}function ht(i){let e,t,a,l,o,r,n,s,m,v;return a=new Wt({props:{address:i[2]}}),{c(){e=y("p"),t=S("Cashaddress: "),re(a.$$.fragment),l=D(),o=y("p"),r=S("If you have a privacy-centric browser, you may copy the cash address manually:"),n=D(),s=y("pre"),m=S(i[2])},l(c){e=A(c,"P",{});var u=E(e);t=w(u,"Cashaddress: "),ae(a.$$.fragment,u),u.forEach(h),l=R(c),o=A(c,"P",{});var f=E(o);r=w(f,"If you have a privacy-centric browser, you may copy the cash address manually:"),f.forEach(h),n=R(c),s=A(c,"PRE",{});var g=E(s);m=w(g,i[2]),g.forEach(h)},m(c,u){P(c,e,u),d(e,t),ne(a,e,null),P(c,l,u),P(c,o,u),d(o,r),P(c,n,u),P(c,s,u),d(s,m),v=!0},p(c,u){const f={};u&4&&(f.address=c[2]),a.$set(f),(!v||u&4)&&oe(m,c[2])},i(c){v||(B(a.$$.fragment,c),v=!0)},o(c){O(a.$$.fragment,c),v=!1},d(c){c&&h(e),le(a),c&&h(l),c&&h(o),c&&h(n),c&&h(s)}}}function pt(i){let e,t,a,l,o;return{c(){e=y("p"),t=S("Legacy Address:"),a=D(),l=y("pre"),o=S(i[3])},l(r){e=A(r,"P",{});var n=E(e);t=w(n,"Legacy Address:"),n.forEach(h),a=R(r),l=A(r,"PRE",{});var s=E(l);o=w(s,i[3]),s.forEach(h)},m(r,n){P(r,e,n),d(e,t),P(r,a,n),P(r,l,n),d(l,o)},p(r,n){n&8&&oe(o,r[3])},d(r){r&&h(e),r&&h(a),r&&h(l)}}}function mt(i){let e,t,a,l,o,r=i[1]&&_t(i);return{c(){e=y("h3"),t=S("Donations so far..."),a=D(),r&&r.c(),l=se()},l(n){e=A(n,"H3",{});var s=E(e);t=w(s,"Donations so far..."),s.forEach(h),a=R(n),r&&r.l(n),l=se()},m(n,s){P(n,e,s),d(e,t),P(n,a,s),r&&r.m(n,s),P(n,l,s),o=!0},p(n,s){n[1]?r?(r.p(n,s),s&2&&B(r,1)):(r=_t(n),r.c(),B(r,1),r.m(l.parentNode,l)):r&&(me(),O(r,1,1,()=>{r=null}),_e())},i(n){o||(B(r),o=!0)},o(n){O(r),o=!1},d(n){n&&h(e),n&&h(a),r&&r.d(n),n&&h(l)}}}function _t(i){let e,t;return e=new us({props:{class:"my-image-list-masonry",style:"min-height:1000px;",masonry:!0,$$slots:{default:[hs]},$$scope:{ctx:i}}}),{c(){re(e.$$.fragment)},l(a){ae(e.$$.fragment,a)},m(a,l){ne(e,a,l),t=!0},p(a,l){const o={};l&1026&&(o.$$scope={dirty:l,ctx:a}),e.$set(o)},i(a){t||(B(e.$$.fragment,a),t=!0)},o(a){O(e.$$.fragment,a),t=!1},d(a){le(e,a)}}}function ds(i){let e,t,a,l=i[7].satoshis.toLocaleString()+"",o,r,n,s,m,v;return{c(){e=y("div"),t=y("h2"),a=S("\u{1F34A} "),o=S(l),r=D(),n=y("a"),s=S("Transaction"),v=D(),this.h()},l(c){e=A(c,"DIV",{class:!0,style:!0});var u=E(e);t=A(u,"H2",{class:!0});var f=E(t);a=w(f,"\u{1F34A} "),o=w(f,l),f.forEach(h),r=R(u),n=A(u,"A",{target:!0,href:!0,class:!0});var g=E(n);s=w(g,"Transaction"),g.forEach(h),u.forEach(h),v=R(c),this.h()},h(){b(t,"class","svelte-m1135s"),b(n,"target","_blank"),b(n,"href",m="https://explorer.bitcoinunlimited.info/tx/"+i[7].txid),b(n,"class","svelte-m1135s"),b(e,"class","tract svelte-m1135s"),X(e,"height",vt(i[7].satoshis,80,120,Math.abs)+"px")},m(c,u){P(c,e,u),d(e,t),d(t,a),d(t,o),d(e,r),d(e,n),d(n,s),P(c,v,u)},p(c,u){u&2&&l!==(l=c[7].satoshis.toLocaleString()+"")&&oe(o,l),u&2&&m!==(m="https://explorer.bitcoinunlimited.info/tx/"+c[7].txid)&&b(n,"href",m),u&2&&X(e,"height",vt(c[7].satoshis,80,120,Math.abs)+"px")},d(c){c&&h(e),c&&h(v)}}}function gt(i){let e,t;return e=new fs({props:{$$slots:{default:[ds]},$$scope:{ctx:i}}}),{c(){re(e.$$.fragment)},l(a){ae(e.$$.fragment,a)},m(a,l){ne(e,a,l),t=!0},p(a,l){const o={};l&1026&&(o.$$scope={dirty:l,ctx:a}),e.$set(o)},i(a){t||(B(e.$$.fragment,a),t=!0)},o(a){O(e.$$.fragment,a),t=!1},d(a){le(e,a)}}}function hs(i){let e,t,a=i[1],l=[];for(let r=0;r<a.length;r+=1)l[r]=gt(dt(i,a,r));const o=r=>O(l[r],1,1,()=>{l[r]=null});return{c(){for(let r=0;r<l.length;r+=1)l[r].c();e=se()},l(r){for(let n=0;n<l.length;n+=1)l[n].l(r);e=se()},m(r,n){for(let s=0;s<l.length;s+=1)l[s].m(r,n);P(r,e,n),t=!0},p(r,n){if(n&2){a=r[1];let s;for(s=0;s<a.length;s+=1){const m=dt(r,a,s);l[s]?(l[s].p(m,n),B(l[s],1)):(l[s]=gt(m),l[s].c(),B(l[s],1),l[s].m(e.parentNode,e))}for(me(),s=a.length;s<l.length;s+=1)o(s);_e()}},i(r){if(!t){for(let n=0;n<a.length;n+=1)B(l[n]);t=!0}},o(r){l=l.filter(Boolean);for(let n=0;n<l.length;n+=1)O(l[n]);t=!1},d(r){Ft(l,r),r&&h(e)}}}function ps(i){let e,t,a,l,o=i[2]&&ht(i),r=i[3]&&pt(i),n=i[0]&&mt(i);return{c(){o&&o.c(),e=D(),r&&r.c(),t=D(),n&&n.c(),a=se()},l(s){o&&o.l(s),e=R(s),r&&r.l(s),t=R(s),n&&n.l(s),a=se()},m(s,m){o&&o.m(s,m),P(s,e,m),r&&r.m(s,m),P(s,t,m),n&&n.m(s,m),P(s,a,m),l=!0},p(s,[m]){s[2]?o?(o.p(s,m),m&4&&B(o,1)):(o=ht(s),o.c(),B(o,1),o.m(e.parentNode,e)):o&&(me(),O(o,1,1,()=>{o=null}),_e()),s[3]?r?r.p(s,m):(r=pt(s),r.c(),r.m(t.parentNode,t)):r&&(r.d(1),r=null),s[0]?n?(n.p(s,m),m&1&&B(n,1)):(n=mt(s),n.c(),B(n,1),n.m(a.parentNode,a)):n&&(me(),O(n,1,1,()=>{n=null}),_e())},i(s){l||(B(o),B(n),l=!0)},o(s){O(o),O(n),l=!1},d(s){o&&o.d(s),s&&h(e),r&&r.d(s),s&&h(t),n&&n.d(s),s&&h(a)}}}function vt(i,e,t,a=l=>l){const l=(i%2?Math.cos:Math.sin)(i)*t;return e+Math.floor(a(l))}function ms(i,e,t){let{lockingBytecode:a}=e,l,o="",r="",n="";Gt.subscribe(m=>{n=m}),wt(async()=>{n.length>0&&s()});const s=async()=>{await Lt({load:async()=>{const m=Jt();t(1,l=(await Yt(n,a)).search_output),t(1,l=l.map(f=>({txid:f.transaction_hash.slice(2),vout:f.output_index,satoshis:f.value_satoshis})).reverse());let v=Kt(ot(a),"bitcoincash");typeof v=="string"&&t(2,o=v);const c=await m;let u=Zt(c,ot(a),"mainnet");typeof u=="string"&&t(3,r=u)}})};return i.$$set=m=>{"lockingBytecode"in m&&t(0,a=m.lockingBytecode)},[a,l,o,r]}class _s extends Oe{constructor(e){super(),Ne(this,e,ms,ps,Me,{lockingBytecode:0})}}function gs(i){return{c(){this.h()},l(e){this.h()},h(){document.title="\u{1F49A} \u20BF\u2219\u03D5 ..."},m:x,d:x}}function vs(i){return{c(){this.h()},l(e){this.h()},h(){document.title="\u{1F49A} \u20BF\u2219\u03D5 \u{1F389} \u{1F973}"},m:x,d:x}}function bt(i){let e,t,a;return t=new rs({props:{x:[-5,5],y:[0,.1],delay:[500,2e3],colorArray:["#0F0","#F0F"],duration:"5000",amount:"400",fallDistance:"100vh"}}),{c(){e=y("div"),re(t.$$.fragment),this.h()},l(l){e=A(l,"DIV",{style:!0,class:!0});var o=E(e);ae(t.$$.fragment,o),o.forEach(h),this.h()},h(){X(e,"position","fixed"),X(e,"top","-50px"),X(e,"left","0"),X(e,"height","100vh"),X(e,"width","100vw"),X(e,"display","flex"),X(e,"justify-content","center"),X(e,"overflow","hidden"),X(e,"pointer-events","none"),b(e,"class","svelte-tr2nq1")},m(l,o){P(l,e,o),ne(t,e,null),a=!0},i(l){a||(B(t.$$.fragment,l),a=!0)},o(l){O(t.$$.fragment,l),a=!1},d(l){l&&h(e),le(t)}}}function bs(i){let e,t;return e=new ss({props:{size:200,codeValue:Je}}),{c(){re(e.$$.fragment)},l(a){ae(e.$$.fragment,a)},m(a,l){ne(e,a,l),t=!0},p:x,i(a){t||(B(e.$$.fragment,a),t=!0)},o(a){O(e.$$.fragment,a),t=!1},d(a){le(e,a)}}}function ys(i){let e,t,a,l,o,r,n,s,m,v,c,u;return l=new is({props:{progress:i[0]/Te}}),{c(){e=y("h3"),t=S("Progress:"),a=D(),re(l.$$.fragment),o=D(),r=y("p"),n=S("So far, "),s=S(i[1]),m=S(" satoshis have been raised. About "),v=S(i[2]),c=S(" % of the way there."),this.h()},l(f){e=A(f,"H3",{class:!0});var g=E(e);t=w(g,"Progress:"),g.forEach(h),a=R(f),ae(l.$$.fragment,f),o=R(f),r=A(f,"P",{class:!0});var p=E(r);n=w(p,"So far, "),s=w(p,i[1]),m=w(p," satoshis have been raised. About "),v=w(p,i[2]),c=w(p," % of the way there."),p.forEach(h),this.h()},h(){b(e,"class","svelte-tr2nq1"),b(r,"class","svelte-tr2nq1")},m(f,g){P(f,e,g),d(e,t),P(f,a,g),ne(l,f,g),P(f,o,g),P(f,r,g),d(r,n),d(r,s),d(r,m),d(r,v),d(r,c),u=!0},p(f,g){const p={};g&1&&(p.progress=f[0]/Te),l.$set(p),(!u||g&2)&&oe(s,f[1]),(!u||g&4)&&oe(v,f[2])},i(f){u||(B(l.$$.fragment,f),u=!0)},o(f){O(l.$$.fragment,f),u=!1},d(f){f&&h(e),f&&h(a),le(l,f),f&&h(o),f&&h(r)}}}function As(i){let e,t,a,l,o,r;return{c(){e=y("b"),t=S("We've exceeded the initial goal, and now are up to "),a=S(i[1]),l=S(" satoshis! So about "),o=S(i[2]),r=S(`
							% of the initial goal.`),this.h()},l(n){e=A(n,"B",{class:!0});var s=E(e);t=w(s,"We've exceeded the initial goal, and now are up to "),a=w(s,i[1]),l=w(s," satoshis! So about "),o=w(s,i[2]),r=w(s,`
							% of the initial goal.`),s.forEach(h),this.h()},h(){b(e,"class","svelte-tr2nq1")},m(n,s){P(n,e,s),d(e,t),d(e,a),d(e,l),d(e,o),d(e,r)},p(n,s){s&2&&oe(a,n[1]),s&4&&oe(o,n[2])},i:x,o:x,d(n){n&&h(e)}}}function Es(i){let e,t,a,l,o,r,n,s,m,v,c,u,f,g,p,T,N,j,U,V,H,W,J,C,k,M,q,Z,K,ge,z,ve,be,_,I,ce,ue,Fe,je,Ue,$,Ve,fe,He,Ye,We,ee,ze,de,Xe,Qe,Ge,ie,Ae,Q=bs();const Ke=[As,ys],te=[];function Ze(F,L){return F[3]?0:1}return M=Ze(i),q=te[M]=Ke[M](i),ie=new _s({props:{lockingBytecode:i[4]}}),{c(){e=y("div"),t=y("h1"),a=S("Welcome to the Unspent Phi Inaugural Fundraising Campaign."),l=D(),o=y("table"),r=y("tr"),n=y("td"),s=y("img"),v=D(),c=y("caption"),u=S("Howdy Do, Partner?! This here's a tangerine n' cowboy themed fundraiser. \u{1F920} \u{1F34A}"),f=D(),Q&&Q.c(),g=D(),p=y("p"),T=S(`This fundraiser is to support the further development of an open-source ecosystem around
						anyone-can-spend utxo contracts. A fraction of money donated will `),N=y("i"),j=S("also"),U=S(` be forwarded
						to support the software and tools this app depends on. At present, the app uses generic backend
						infrastructure (fulcrum/chaingraph), but some of the budget will be set aside to run dedicated
						deployments of those generic services.`),V=D(),H=y("p"),W=S("The goal is to raise at least "),J=S(i[5]),C=S(` satoshis (64 BCH) by the end of 2022. However, given
						the nature of the markets Bitcoin Cash is traded on, +/- a "0" on the end would also be fine.
						The fundraiser may also end at any time, if sufficient funds have been raised.`),k=D(),q.c(),Z=D(),K=y("p"),ge=S(`The donation address is a plain pay-to public key hash. If the goal is not met or is
						exceeded, your support will still go towards the project. This is `),z=y("b"),ve=S("not"),be=S(` a flipstarter,
						(Flipstarter is awesome \u{1F49A}, it's just not the approach for this app).`),_=D(),I=y("p"),ce=S("Funding is being sought "),ue=y("i"),Fe=S("after"),je=S(` the initial app release for three reasons: 1) a lack
						of funding provided invaluable motivation to finish a minimal viable app; 2) it allowed the
						project to be developed in "stealth mode", and, finally, 3) there was zero possibility the
						developer (2qx) could just abscond with all the donations without ever building an app.`),Ue=D(),$=y("p"),Ve=S(`All donations will be treated as pseudonymous in origin from the previous respective
						unspent outputs. A donation will `),fe=y("b"),He=S("not"),Ye=S(` confer any stake, interest, privilege or authority
						over the direction of this software. Everything built is free to fork, but is not otherwise
						owned or encumbered.`),We=D(),ee=y("p"),ze=S("But, as a return on your investment, each donation "),de=y("b"),Xe=S("will receive"),Qe=S(` its own tract in the
						table below, bulleted with tangerine emojis. All donations will be shown until the end campaign,
						at which point all the UTXOs and orange tracts will be rugged.`),Ge=D(),re(ie.$$.fragment),this.h()},l(F){e=A(F,"DIV",{class:!0});var L=E(e);t=A(L,"H1",{class:!0});var he=E(t);a=w(he,"Welcome to the Unspent Phi Inaugural Fundraising Campaign."),he.forEach(h),l=R(L),o=A(L,"TABLE",{class:!0});var Ee=E(o);r=A(Ee,"TR",{class:!0});var xe=E(r);n=A(xe,"TD",{class:!0});var $e=E(n);s=A($e,"IMG",{src:!0,alt:!0,class:!0}),$e.forEach(h),xe.forEach(h),v=R(Ee),c=A(Ee,"CAPTION",{style:!0,class:!0});var et=E(c);u=w(et,"Howdy Do, Partner?! This here's a tangerine n' cowboy themed fundraiser. \u{1F920} \u{1F34A}"),et.forEach(h),Ee.forEach(h),f=R(L),Q&&Q.l(L),g=R(L),p=A(L,"P",{class:!0});var Se=E(p);T=w(Se,`This fundraiser is to support the further development of an open-source ecosystem around
						anyone-can-spend utxo contracts. A fraction of money donated will `),N=A(Se,"I",{class:!0});var tt=E(N);j=w(tt,"also"),tt.forEach(h),U=w(Se,` be forwarded
						to support the software and tools this app depends on. At present, the app uses generic backend
						infrastructure (fulcrum/chaingraph), but some of the budget will be set aside to run dedicated
						deployments of those generic services.`),Se.forEach(h),V=R(L),H=A(L,"P",{class:!0});var we=E(H);W=w(we,"The goal is to raise at least "),J=w(we,i[5]),C=w(we,` satoshis (64 BCH) by the end of 2022. However, given
						the nature of the markets Bitcoin Cash is traded on, +/- a "0" on the end would also be fine.
						The fundraiser may also end at any time, if sufficient funds have been raised.`),we.forEach(h),k=R(L),q.l(L),Z=R(L),K=A(L,"P",{class:!0});var Ce=E(K);ge=w(Ce,`The donation address is a plain pay-to public key hash. If the goal is not met or is
						exceeded, your support will still go towards the project. This is `),z=A(Ce,"B",{class:!0});var st=E(z);ve=w(st,"not"),st.forEach(h),be=w(Ce,` a flipstarter,
						(Flipstarter is awesome \u{1F49A}, it's just not the approach for this app).`),Ce.forEach(h),_=R(L),I=A(L,"P",{class:!0});var Ie=E(I);ce=w(Ie,"Funding is being sought "),ue=A(Ie,"I",{class:!0});var rt=E(ue);Fe=w(rt,"after"),rt.forEach(h),je=w(Ie,` the initial app release for three reasons: 1) a lack
						of funding provided invaluable motivation to finish a minimal viable app; 2) it allowed the
						project to be developed in "stealth mode", and, finally, 3) there was zero possibility the
						developer (2qx) could just abscond with all the donations without ever building an app.`),Ie.forEach(h),Ue=R(L),$=A(L,"P",{class:!0});var Le=E($);Ve=w(Le,`All donations will be treated as pseudonymous in origin from the previous respective
						unspent outputs. A donation will `),fe=A(Le,"B",{class:!0});var at=E(fe);He=w(at,"not"),at.forEach(h),Ye=w(Le,` confer any stake, interest, privilege or authority
						over the direction of this software. Everything built is free to fork, but is not otherwise
						owned or encumbered.`),Le.forEach(h),We=R(L),ee=A(L,"P",{class:!0});var Pe=E(ee);ze=w(Pe,"But, as a return on your investment, each donation "),de=A(Pe,"B",{class:!0});var nt=E(de);Xe=w(nt,"will receive"),nt.forEach(h),Qe=w(Pe,` its own tract in the
						table below, bulleted with tangerine emojis. All donations will be shown until the end campaign,
						at which point all the UTXOs and orange tracts will be rugged.`),Pe.forEach(h),Ge=R(L),ae(ie.$$.fragment,L),L.forEach(h),this.h()},h(){b(t,"class","svelte-tr2nq1"),Vt(s.src,m=Ht+"/dev/stereoscopic.png")||b(s,"src",m),b(s,"alt","Orange Grove"),b(s,"class","svelte-tr2nq1"),b(n,"class","svelte-tr2nq1"),b(r,"class","svelte-tr2nq1"),X(c,"caption-side","bottom"),b(c,"class","svelte-tr2nq1"),b(o,"class","svelte-tr2nq1"),b(N,"class","svelte-tr2nq1"),b(p,"class","svelte-tr2nq1"),b(H,"class","svelte-tr2nq1"),b(z,"class","svelte-tr2nq1"),b(K,"class","svelte-tr2nq1"),b(ue,"class","svelte-tr2nq1"),b(I,"class","svelte-tr2nq1"),b(fe,"class","svelte-tr2nq1"),b($,"class","svelte-tr2nq1"),b(de,"class","svelte-tr2nq1"),b(ee,"class","svelte-tr2nq1"),b(e,"class","margins svelte-tr2nq1")},m(F,L){P(F,e,L),d(e,t),d(t,a),d(e,l),d(e,o),d(o,r),d(r,n),d(n,s),d(o,v),d(o,c),d(c,u),d(e,f),Q&&Q.m(e,null),d(e,g),d(e,p),d(p,T),d(p,N),d(N,j),d(p,U),d(e,V),d(e,H),d(H,W),d(H,J),d(H,C),d(e,k),te[M].m(e,null),d(e,Z),d(e,K),d(K,ge),d(K,z),d(z,ve),d(K,be),d(e,_),d(e,I),d(I,ce),d(I,ue),d(ue,Fe),d(I,je),d(e,Ue),d(e,$),d($,Ve),d($,fe),d(fe,He),d($,Ye),d(e,We),d(e,ee),d(ee,ze),d(ee,de),d(de,Xe),d(ee,Qe),d(e,Ge),ne(ie,e,null),Ae=!0},p(F,L){Q.p(F,L);let he=M;M=Ze(F),M===he?te[M].p(F,L):(me(),O(te[he],1,1,()=>{te[he]=null}),_e(),q=te[M],q?q.p(F,L):(q=te[M]=Ke[M](F),q.c()),B(q,1),q.m(e,Z))},i(F){Ae||(B(Q),B(q),B(ie.$$.fragment,F),Ae=!0)},o(F){O(Q),O(q),O(ie.$$.fragment,F),Ae=!1},d(F){F&&h(e),Q&&Q.d(),te[M].d(),le(ie)}}}function Ss(i){let e,t,a,l,o,r,n,s;function m(f,g){return f[3]?vs:gs}let v=m(i),c=v(i),u=i[3]&&bt();return n=new ts({props:{class:"demo-spaced",$$slots:{default:[Es]},$$scope:{ctx:i}}}),{c(){c.c(),e=se(),t=D(),u&&u.c(),a=D(),l=y("section"),o=y("div"),r=y("div"),re(n.$$.fragment),this.h()},l(f){const g=jt("svelte-uvgu0p",document.head);c.l(g),e=se(),g.forEach(h),t=R(f),u&&u.l(f),a=R(f),l=A(f,"SECTION",{class:!0});var p=E(l);o=A(p,"DIV",{class:!0});var T=E(o);r=A(T,"DIV",{class:!0});var N=E(r);ae(n.$$.fragment,N),N.forEach(h),T.forEach(h),p.forEach(h),this.h()},h(){b(r,"class","card-container svelte-tr2nq1"),b(o,"class","card-display svelte-tr2nq1"),b(l,"class","svelte-tr2nq1")},m(f,g){c.m(document.head,null),d(document.head,e),P(f,t,g),u&&u.m(f,g),P(f,a,g),P(f,l,g),d(l,o),d(o,r),ne(n,r,null),s=!0},p(f,[g]){v!==(v=m(f))&&(c.d(1),c=v(f),c&&(c.c(),c.m(e.parentNode,e))),f[3]?u?g&8&&B(u,1):(u=bt(),u.c(),B(u,1),u.m(a.parentNode,a)):u&&(me(),O(u,1,1,()=>{u=null}),_e());const p={};g&271&&(p.$$scope={dirty:g,ctx:f}),n.$set(p)},i(f){s||(B(u),B(n.$$.fragment,f),s=!0)},o(f){O(u),O(n.$$.fragment,f),s=!1},d(f){c.d(f),h(e),f&&h(t),u&&u.d(f),f&&h(a),f&&h(l),le(n)}}}const Je="bitcoincash:qz7xjt4xcpdu2gl75vrvkpwzfpjhy9hnm55gwzyvj4";let Te=64e8;function ws(i,e,t){let a=xt(Je),l=Te.toLocaleString(),o=0,r="",n="",s=!1;Ut(async()=>{o||await m()});const m=async()=>{await Lt({load:async()=>{t(0,o=await v(Je)),t(1,r=o.toLocaleString()),t(2,n=(o/Te*100).toFixed(4)),t(3,s=o>64e8)}})},v=async c=>(await new $t().getUtxos(c)).map(p=>p.satoshis).reduce((p,T)=>p+T,0);return[o,r,n,s,a,l]}class ks extends Oe{constructor(e){super(),Ne(this,e,ws,Ss,Me,{})}}export{ks as default};
//# sourceMappingURL=_page.svelte-bf825090.js.map
