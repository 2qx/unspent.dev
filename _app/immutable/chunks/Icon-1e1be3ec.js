import{S as X,i as Y,s as Z,K as x,k as O,l as S,m as w,h as A,aa as L,b as J,ab as D,g as R,t as H,d as V,f as F,T,J as E,O as N,ac as U,ad as $,am as ee,H as te,o as ne,af as ie,a2 as ae,q as re,r as le,u as se,B as P,a4 as oe,a6 as ue,a7 as de,a8 as ce}from"./index-ce7c59fc.js";import{c as j,u as fe,f as be}from"./main-9bfc3400.js";import{_ as _e,a as C,b as q,M as ge,i as M}from"./AddressBlockie-f9d3c208.js";/**
 * @license
 * Copyright 2016 Google Inc.
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
 */var B={ICON_EVENT:"MDCTextField:icon",ICON_ROLE:"button"},me={ROOT:"mdc-text-field__icon"};/**
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
 */var K=["click","keydown"],he=function(l){_e(t,l);function t(e){var n=l.call(this,C(C({},t.defaultAdapter),e))||this;return n.savedTabIndex=null,n.interactionHandler=function(r){n.handleInteraction(r)},n}return Object.defineProperty(t,"strings",{get:function(){return B},enumerable:!1,configurable:!0}),Object.defineProperty(t,"cssClasses",{get:function(){return me},enumerable:!1,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{getAttr:function(){return null},setAttr:function(){},removeAttr:function(){},setContent:function(){},registerInteractionHandler:function(){},deregisterInteractionHandler:function(){},notifyIconAction:function(){}}},enumerable:!1,configurable:!0}),t.prototype.init=function(){var e,n;this.savedTabIndex=this.adapter.getAttr("tabindex");try{for(var r=q(K),s=r.next();!s.done;s=r.next()){var f=s.value;this.adapter.registerInteractionHandler(f,this.interactionHandler)}}catch(u){e={error:u}}finally{try{s&&!s.done&&(n=r.return)&&n.call(r)}finally{if(e)throw e.error}}},t.prototype.destroy=function(){var e,n;try{for(var r=q(K),s=r.next();!s.done;s=r.next()){var f=s.value;this.adapter.deregisterInteractionHandler(f,this.interactionHandler)}}catch(u){e={error:u}}finally{try{s&&!s.done&&(n=r.return)&&n.call(r)}finally{if(e)throw e.error}}},t.prototype.setDisabled=function(e){!this.savedTabIndex||(e?(this.adapter.setAttr("tabindex","-1"),this.adapter.removeAttr("role")):(this.adapter.setAttr("tabindex",this.savedTabIndex),this.adapter.setAttr("role",B.ICON_ROLE)))},t.prototype.setAriaLabel=function(e){this.adapter.setAttr("aria-label",e)},t.prototype.setContent=function(e){this.adapter.setContent(e)},t.prototype.handleInteraction=function(e){var n=e.key==="Enter"||e.keyCode===13;(e.type==="click"||n)&&(e.preventDefault(),this.adapter.notifyIconAction())},t}(ge);function pe(l){let t;return{c(){t=re(l[7])},l(e){t=le(e,l[7])},m(e,n){J(e,t,n)},p(e,n){n&128&&se(t,e[7])},i:P,o:P,d(e){e&&A(t)}}}function ye(l){let t;const e=l[14].default,n=oe(e,l,l[13],null);return{c(){n&&n.c()},l(r){n&&n.l(r)},m(r,s){n&&n.m(r,s),t=!0},p(r,s){n&&n.p&&(!t||s&8192)&&ue(n,e,r,r[13],t?ce(e,r[13],s,null):de(r[13]),null)},i(r){t||(F(n,r),t=!0)},o(r){H(n,r),t=!1},d(r){n&&n.d(r)}}}function ve(l){let t,e,n,r,s,f,u,d,p,v;const y=[ye,pe],c=[];function k(i,o){return i[7]==null?0:1}e=k(l),n=c[e]=y[e](l);let g=[{class:r=j({[l[1]]:!0,"mdc-text-field__icon":!0,"mdc-text-field__icon--leading":l[10],"mdc-text-field__icon--trailing":!l[10]})},{tabindex:l[3]},{"aria-hidden":s=l[3]===-1?"true":"false"},{"aria-disabled":f=l[2]==="button"?l[4]?"true":"false":void 0},{role:l[2]},l[6],l[11]],b={};for(let i=0;i<g.length;i+=1)b=x(b,g[i]);return{c(){t=O("i"),n.c(),this.h()},l(i){t=S(i,"I",{class:!0,tabindex:!0,"aria-hidden":!0,"aria-disabled":!0,role:!0});var o=w(t);n.l(o),o.forEach(A),this.h()},h(){L(t,b)},m(i,o){J(i,t,o),c[e].m(t,null),l[15](t),d=!0,p||(v=[D(u=fe.call(null,t,l[0])),D(l[8].call(null,t))],p=!0)},p(i,[o]){let m=e;e=k(i),e===m?c[e].p(i,o):(R(),H(c[m],1,1,()=>{c[m]=null}),V(),n=c[e],n?n.p(i,o):(n=c[e]=y[e](i),n.c()),F(n,1),n.m(t,null)),L(t,b=T(g,[(!d||o&2&&r!==(r=j({[i[1]]:!0,"mdc-text-field__icon":!0,"mdc-text-field__icon--leading":i[10],"mdc-text-field__icon--trailing":!i[10]})))&&{class:r},(!d||o&8)&&{tabindex:i[3]},(!d||o&8&&s!==(s=i[3]===-1?"true":"false"))&&{"aria-hidden":s},(!d||o&20&&f!==(f=i[2]==="button"?i[4]?"true":"false":void 0))&&{"aria-disabled":f},(!d||o&4)&&{role:i[2]},o&64&&i[6],o&2048&&i[11]])),u&&E(u.update)&&o&1&&u.update.call(null,i[0])},i(i){d||(F(n),d=!0)},o(i){H(n),d=!1},d(i){i&&A(t),c[e].d(),l[15](null),p=!1,N(v)}}}function ke(l,t,e){const n=["use","class","role","tabindex","disabled","getElement"];let r=U(t,n),s,{$$slots:f={},$$scope:u}=t;const d=be($());let{use:p=[]}=t,{class:v=""}=t,{role:y=void 0}=t,{tabindex:c=y==="button"?0:-1}=t,{disabled:k=!1}=t,g,b,i={};const o=ee("SMUI:textfield:icon:leading");te(l,o,a=>e(17,s=a));const m=s;let I;ne(()=>(b=new he({getAttr:z,setAttr:G,removeAttr:Q,setContent:a=>{e(7,I=a)},registerInteractionHandler:(a,_)=>h().addEventListener(a,_),deregisterInteractionHandler:(a,_)=>h().removeEventListener(a,_),notifyIconAction:()=>M(h(),"SMUITextField:icon",void 0,void 0,!0)}),M(h(),m?"SMUITextfieldLeadingIcon:mount":"SMUITextfieldTrailingIcon:mount",b),b.init(),()=>{M(h(),m?"SMUITextfieldLeadingIcon:unmount":"SMUITextfieldTrailingIcon:unmount",b),b.destroy()}));function z(a){var _;return a in i?(_=i[a])!==null&&_!==void 0?_:null:h().getAttribute(a)}function G(a,_){i[a]!==_&&e(6,i[a]=_,i)}function Q(a){(!(a in i)||i[a]!=null)&&e(6,i[a]=void 0,i)}function h(){return g}function W(a){ae[a?"unshift":"push"](()=>{g=a,e(5,g)})}return l.$$set=a=>{t=x(x({},t),ie(a)),e(11,r=U(t,n)),"use"in a&&e(0,p=a.use),"class"in a&&e(1,v=a.class),"role"in a&&e(2,y=a.role),"tabindex"in a&&e(3,c=a.tabindex),"disabled"in a&&e(4,k=a.disabled),"$$scope"in a&&e(13,u=a.$$scope)},[p,v,y,c,k,g,i,I,d,o,m,r,h,u,f,W]}class He extends X{constructor(t){super(),Y(this,t,ke,ve,Z,{use:0,class:1,role:2,tabindex:3,disabled:4,getElement:12})}get getElement(){return this.$$.ctx[12]}}export{He as I};
//# sourceMappingURL=Icon-1e1be3ec.js.map
