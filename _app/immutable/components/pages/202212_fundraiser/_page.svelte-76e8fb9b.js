import{S as gt,i as xt,s as yt,a4 as Gt,K as vt,k as _,l as p,m as v,h as u,aa as Bt,b as I,ab as Dt,a6 as Jt,a7 as Kt,a8 as Rt,T as Qt,J as Wt,f as P,t as D,O as Xt,ac as Ct,ad as Yt,ae as Zt,af as te,a2 as ee,q as x,a as k,e as Z,r as y,c as q,G as c,w as N,x as V,y as O,z as G,g as Ut,d as zt,ag as ae,n as h,p as B,B as Nt,a9 as se,ah as ne,F as oe}from"../../../chunks/index-f7ae3298.js";import{a as ie}from"../../../chunks/paths-f4cc45d5.js";import{l as le}from"../../../chunks/loader-store-c42dab68.js";import{C as ce}from"../../../chunks/AddressQrCode.svelte_svelte_type_style_lang-0596db11.js";import{C as Vt}from"../../../chunks/Confetti-b6399d1f.js";import{c as Ft,u as re,f as de,a as tt}from"../../../chunks/index-5ffe2e47.js";function fe(d){let t,n,s,e,l,o;const i=d[9].default,a=Gt(i,d,d[8],null);let r=[{class:n=Ft({[d[1]]:!0,"mdc-image-list":!0,"mdc-image-list--masonry":d[2],"mdc-image-list--with-text-protection":d[3]})},d[6]],m={};for(let f=0;f<r.length;f+=1)m=vt(m,r[f]);return{c(){t=_("ul"),a&&a.c(),this.h()},l(f){t=p(f,"UL",{class:!0});var b=v(t);a&&a.l(b),b.forEach(u),this.h()},h(){Bt(t,m)},m(f,b){I(f,t,b),a&&a.m(t,null),d[10](t),e=!0,l||(o=[Dt(s=re.call(null,t,d[0])),Dt(d[5].call(null,t))],l=!0)},p(f,[b]){a&&a.p&&(!e||b&256)&&Jt(a,i,f,f[8],e?Rt(i,f[8],b,null):Kt(f[8]),null),Bt(t,m=Qt(r,[(!e||b&14&&n!==(n=Ft({[f[1]]:!0,"mdc-image-list":!0,"mdc-image-list--masonry":f[2],"mdc-image-list--with-text-protection":f[3]})))&&{class:n},b&64&&f[6]])),s&&Wt(s.update)&&b&1&&s.update.call(null,f[0])},i(f){e||(P(a,f),e=!0)},o(f){D(a,f),e=!1},d(f){f&&u(t),a&&a.d(f),d[10](null),l=!1,Xt(o)}}}function ue(d,t,n){const s=["use","class","masonry","withTextProtection","getElement"];let e=Ct(t,s),{$$slots:l={},$$scope:o}=t;const i=de(Yt());let{use:a=[]}=t,{class:r=""}=t,{masonry:m=!1}=t,{withTextProtection:f=!1}=t,b;Zt("SMUI:label:context","image-list");function $(){return b}function E(g){ee[g?"unshift":"push"](()=>{b=g,n(4,b)})}return d.$$set=g=>{t=vt(vt({},t),te(g)),n(6,e=Ct(t,s)),"use"in g&&n(0,a=g.use),"class"in g&&n(1,r=g.class),"masonry"in g&&n(2,m=g.masonry),"withTextProtection"in g&&n(3,f=g.withTextProtection),"$$scope"in g&&n(8,o=g.$$scope)},[a,r,m,f,b,i,e,$,o,l,E]}class he extends gt{constructor(t){super(),xt(this,t,ue,fe,yt,{use:0,class:1,masonry:2,withTextProtection:3,getElement:7})}get getElement(){return this.$$.ctx[7]}}const be=tt({class:"mdc-image-list__item",tag:"li"});tt({class:"mdc-image-list__image-aspect-container",tag:"div"});tt({class:"mdc-image-list__image",tag:"img"});tt({class:"mdc-image-list__supporting",tag:"div"});function Mt(d,t,n){const s=d.slice();return s[2]=t[n],s}function _e(d){let t,n;return t=new he({props:{class:"my-image-list-masonry",style:"min-height:1000px;",masonry:!0,$$slots:{default:[me]},$$scope:{ctx:d}}}),{c(){N(t.$$.fragment)},l(s){V(t.$$.fragment,s)},m(s,e){O(t,s,e),n=!0},p(s,e){const l={};e&32&&(l.$$scope={dirty:e,ctx:s}),t.$set(l)},i(s){n||(P(t.$$.fragment,s),n=!0)},o(s){D(t.$$.fragment,s),n=!1},d(s){G(t,s)}}}function pe(d){let t,n,s,e=d[2].satoshis.toLocaleString()+"",l,o,i,a,r,m,f,b;return i=new Vt({props:{x:[-Math.random()*1,Math.random()*1],y:[-Math.random()*1,Math.random()*1],delay:[5e3,Math.random()*5e3+5e3],colorArray:["#0F0","#F0F"],amount:"100"}}),{c(){t=_("div"),n=_("h2"),s=x("\u{1F34A} "),l=x(e),o=k(),N(i.$$.fragment),a=k(),r=_("a"),m=x("Transaction"),f=k(),this.h()},l($){t=p($,"DIV",{class:!0,style:!0});var E=v(t);n=p(E,"H2",{class:!0});var g=v(n);s=y(g,"\u{1F34A} "),l=y(g,e),o=q(g),V(i.$$.fragment,g),g.forEach(u),a=q(E),r=p(E,"A",{target:!0,href:!0,class:!0});var C=v(r);m=y(C,"Transaction"),C.forEach(u),E.forEach(u),f=q($),this.h()},h(){h(n,"class","svelte-amb90h"),h(r,"target","_blank"),h(r,"href","https://explorer.bitcoinunlimited.info/tx/"+d[2].txid),h(r,"class","svelte-amb90h"),h(t,"class","tract svelte-amb90h"),B(t,"height",ge(d[2].satoshis,80,120,Math.abs)+"px")},m($,E){I($,t,E),c(t,n),c(n,s),c(n,l),c(n,o),O(i,n,null),c(t,a),c(t,r),c(r,m),I($,f,E),b=!0},p:Nt,i($){b||(P(i.$$.fragment,$),b=!0)},o($){D(i.$$.fragment,$),b=!1},d($){$&&u(t),G(i),$&&u(f)}}}function St(d){let t,n;return t=new be({props:{$$slots:{default:[pe]},$$scope:{ctx:d}}}),{c(){N(t.$$.fragment)},l(s){V(t.$$.fragment,s)},m(s,e){O(t,s,e),n=!0},p(s,e){const l={};e&32&&(l.$$scope={dirty:e,ctx:s}),t.$set(l)},i(s){n||(P(t.$$.fragment,s),n=!0)},o(s){D(t.$$.fragment,s),n=!1},d(s){G(t,s)}}}function me(d){let t,n,s=d[0],e=[];for(let o=0;o<s.length;o+=1)e[o]=St(Mt(d,s,o));const l=o=>D(e[o],1,1,()=>{e[o]=null});return{c(){for(let o=0;o<e.length;o+=1)e[o].c();t=Z()},l(o){for(let i=0;i<e.length;i+=1)e[i].l(o);t=Z()},m(o,i){for(let a=0;a<e.length;a+=1)e[a].m(o,i);I(o,t,i),n=!0},p(o,i){if(i&1){s=o[0];let a;for(a=0;a<s.length;a+=1){const r=Mt(o,s,a);e[a]?(e[a].p(r,i),P(e[a],1)):(e[a]=St(r),e[a].c(),P(e[a],1),e[a].m(t.parentNode,t))}for(Ut(),a=s.length;a<e.length;a+=1)l(a);zt()}},i(o){if(!n){for(let i=0;i<s.length;i+=1)P(e[i]);n=!0}},o(o){e=e.filter(Boolean);for(let i=0;i<e.length;i+=1)D(e[i]);n=!1},d(o){ae(e,o),o&&u(t)}}}function ve(d){let t,n,s,e,l,o=d[0]&&_e(d);return{c(){t=_("h3"),n=x("Donations:"),s=k(),o&&o.c(),e=Z()},l(i){t=p(i,"H3",{});var a=v(t);n=y(a,"Donations:"),a.forEach(u),s=q(i),o&&o.l(i),e=Z()},m(i,a){I(i,t,a),c(t,n),I(i,s,a),o&&o.m(i,a),I(i,e,a),l=!0},p(i,[a]){i[0]&&o.p(i,a)},i(i){l||(P(o),l=!0)},o(i){D(o),l=!1},d(i){i&&u(t),i&&u(s),o&&o.d(i),i&&u(e)}}}function ge(d,t,n,s=e=>e){const e=(d%2?Math.cos:Math.sin)(d)*n;return t+Math.floor(s(e))}function xe(d,t,n){let{response:s}=t,e=s.map(l=>({txid:l.transaction_hash.slice(2),vout:l.output_index,satoshis:l.value_satoshis})).reverse();return d.$$set=l=>{"response"in l&&n(1,s=l.response)},[e,s]}class ye extends gt{constructor(t){super(),xt(this,t,xe,ve,yt,{response:1})}}function Ht(d){let t,n,s;return n=new Vt({props:{x:[-5,5],y:[0,.1],delay:[500,5e3],colorArray:["#0F0","#F0F"],duration:"10000",amount:"800",fallDistance:"140vh"}}),{c(){t=_("div"),N(n.$$.fragment),this.h()},l(e){t=p(e,"DIV",{style:!0,class:!0});var l=v(t);V(n.$$.fragment,l),l.forEach(u),this.h()},h(){B(t,"position","fixed"),B(t,"top","-50px"),B(t,"left","0"),B(t,"height","100vh"),B(t,"width","100vw"),B(t,"display","flex"),B(t,"justify-content","center"),B(t,"overflow","hidden"),B(t,"z-index","289"),B(t,"pointer-events","none"),h(t,"class","svelte-tr2nq1")},m(e,l){I(e,t,l),O(n,t,null),s=!0},i(e){s||(P(n.$$.fragment,e),s=!0)},o(e){D(n.$$.fragment,e),s=!1},d(e){e&&u(t),G(n)}}}function jt(d){let t,n,s,e,l=Ot.toLocaleString()+"",o,i;return{c(){t=_("p"),n=x("The goal was to raise at least "),s=x(d[1]),e=x(` satoshis (64 BCH) by the end of 2022. However,
							`),o=x(l),i=x(" is plenty."),this.h()},l(a){t=p(a,"P",{class:!0});var r=v(t);n=y(r,"The goal was to raise at least "),s=y(r,d[1]),e=y(r,` satoshis (64 BCH) by the end of 2022. However,
							`),o=y(r,l),i=y(r," is plenty."),r.forEach(u),this.h()},h(){h(t,"class","svelte-tr2nq1")},m(a,r){I(a,t,r),c(t,n),c(t,s),c(t,e),c(t,o),c(t,i)},p:Nt,d(a){a&&u(t)}}}function we(d){let t,n,s,e,l,o,i,a,r,m,f,b,$,E,g,C,et,at,st,J,j,nt,ot,F,it,L,lt,ct,rt,M,dt,U,ft,ut,ht,S,bt,z,_t,pt,mt,H,K,T=d[0]&&jt(d);return H=new ye({props:{response:d[2]}}),{c(){t=_("div"),n=_("h1"),s=x("The Unspent Phi Inaugural Fundraising Campaign has concluded!"),e=k(),l=_("table"),o=_("tr"),i=_("td"),a=_("img"),m=k(),f=_("caption"),b=x("Howdy Do, Partner?! This here was a tangerine n' cowboy themed fundraiser. \u{1F920} \u{1F34A}"),$=k(),E=_("p"),g=x(`This fundraiser was to support the further development of an open-source ecosystem
						around anyone-can-spend utxo contracts. A fraction of money donated was `),C=_("i"),et=x("also"),at=x(` forwarded
						to support the software and tools this app depends on. At present, the app uses generic backend
						infrastructure (fulcrum/chaingraph), but some of the budget was be set aside to run dedicated
						deployments of those generic services.`),st=k(),T&&T.c(),J=k(),j=_("p"),nt=x("The donation address was a plain pay-to public key hash."),ot=k(),F=_("p"),it=x("Funding was sought "),L=_("i"),lt=x("after"),ct=x(` the initial app release for three reasons: 1) a lack of funding
						provided invaluable motivation to finish a minimal viable app; 2) it allowed the project
						to be developed in "stealth mode", and, finally, 3) there was zero possibility the developer
						(2qx) could just abscond with all the donations without ever building an app.`),rt=k(),M=_("p"),dt=x(`All donations were treated as pseudonymous in origin from the previous respective
						unspent outputs. A donation did `),U=_("b"),ft=x("not"),ut=x(` confer any stake, interest, privilege or authority
						over the direction of this software. Everything built is free to fork, but is not otherwise
						owned or encumbered.`),ht=k(),S=_("p"),bt=x("But, as a return on the investment, each donation "),z=_("b"),_t=x("received"),pt=x(` its own tract in the table
						below, bulleted with tangerine emojis. The actual unspent utxos have moved on to bigger and
						better endeavors. The tracts are like their own non fungible tokens, except the unspent output
						is then spent and repurposed.`),mt=k(),N(H.$$.fragment),this.h()},l(A){t=p(A,"DIV",{class:!0});var w=v(t);n=p(w,"H1",{class:!0});var wt=v(n);s=y(wt,"The Unspent Phi Inaugural Fundraising Campaign has concluded!"),wt.forEach(u),e=q(w),l=p(w,"TABLE",{class:!0});var R=v(l);o=p(R,"TR",{class:!0});var $t=v(o);i=p($t,"TD",{class:!0});var Et=v(i);a=p(Et,"IMG",{src:!0,alt:!0,class:!0}),Et.forEach(u),$t.forEach(u),m=q(R),f=p(R,"CAPTION",{style:!0,class:!0});var Tt=v(f);b=y(Tt,"Howdy Do, Partner?! This here was a tangerine n' cowboy themed fundraiser. \u{1F920} \u{1F34A}"),Tt.forEach(u),R.forEach(u),$=q(w),E=p(w,"P",{class:!0});var Q=v(E);g=y(Q,`This fundraiser was to support the further development of an open-source ecosystem
						around anyone-can-spend utxo contracts. A fraction of money donated was `),C=p(Q,"I",{class:!0});var kt=v(C);et=y(kt,"also"),kt.forEach(u),at=y(Q,` forwarded
						to support the software and tools this app depends on. At present, the app uses generic backend
						infrastructure (fulcrum/chaingraph), but some of the budget was be set aside to run dedicated
						deployments of those generic services.`),Q.forEach(u),st=q(w),T&&T.l(w),J=q(w),j=p(w,"P",{class:!0});var qt=v(j);nt=y(qt,"The donation address was a plain pay-to public key hash."),qt.forEach(u),ot=q(w),F=p(w,"P",{class:!0});var W=v(F);it=y(W,"Funding was sought "),L=p(W,"I",{class:!0});var Pt=v(L);lt=y(Pt,"after"),Pt.forEach(u),ct=y(W,` the initial app release for three reasons: 1) a lack of funding
						provided invaluable motivation to finish a minimal viable app; 2) it allowed the project
						to be developed in "stealth mode", and, finally, 3) there was zero possibility the developer
						(2qx) could just abscond with all the donations without ever building an app.`),W.forEach(u),rt=q(w),M=p(w,"P",{class:!0});var X=v(M);dt=y(X,`All donations were treated as pseudonymous in origin from the previous respective
						unspent outputs. A donation did `),U=p(X,"B",{class:!0});var At=v(U);ft=y(At,"not"),At.forEach(u),ut=y(X,` confer any stake, interest, privilege or authority
						over the direction of this software. Everything built is free to fork, but is not otherwise
						owned or encumbered.`),X.forEach(u),ht=q(w),S=p(w,"P",{class:!0});var Y=v(S);bt=y(Y,"But, as a return on the investment, each donation "),z=p(Y,"B",{class:!0});var It=v(z);_t=y(It,"received"),It.forEach(u),pt=y(Y,` its own tract in the table
						below, bulleted with tangerine emojis. The actual unspent utxos have moved on to bigger and
						better endeavors. The tracts are like their own non fungible tokens, except the unspent output
						is then spent and repurposed.`),Y.forEach(u),mt=q(w),V(H.$$.fragment,w),w.forEach(u),this.h()},h(){h(n,"class","svelte-tr2nq1"),oe(a.src,r=ie+"/dev/stereoscopic.png")||h(a,"src",r),h(a,"alt","Orange Grove"),h(a,"class","svelte-tr2nq1"),h(i,"class","svelte-tr2nq1"),h(o,"class","svelte-tr2nq1"),B(f,"caption-side","bottom"),h(f,"class","svelte-tr2nq1"),h(l,"class","svelte-tr2nq1"),h(C,"class","svelte-tr2nq1"),h(E,"class","svelte-tr2nq1"),h(j,"class","svelte-tr2nq1"),h(L,"class","svelte-tr2nq1"),h(F,"class","svelte-tr2nq1"),h(U,"class","svelte-tr2nq1"),h(M,"class","svelte-tr2nq1"),h(z,"class","svelte-tr2nq1"),h(S,"class","svelte-tr2nq1"),h(t,"class","margins svelte-tr2nq1")},m(A,w){I(A,t,w),c(t,n),c(n,s),c(t,e),c(t,l),c(l,o),c(o,i),c(i,a),c(l,m),c(l,f),c(f,b),c(t,$),c(t,E),c(E,g),c(E,C),c(C,et),c(E,at),c(t,st),T&&T.m(t,null),c(t,J),c(t,j),c(j,nt),c(t,ot),c(t,F),c(F,it),c(F,L),c(L,lt),c(F,ct),c(t,rt),c(t,M),c(M,dt),c(M,U),c(U,ft),c(M,ut),c(t,ht),c(t,S),c(S,bt),c(S,z),c(z,_t),c(S,pt),c(t,mt),O(H,t,null),K=!0},p(A,w){A[0]?T?T.p(A,w):(T=jt(A),T.c(),T.m(t,J)):T&&(T.d(1),T=null)},i(A){K||(P(H.$$.fragment,A),K=!0)},o(A){D(H.$$.fragment,A),K=!1},d(A){A&&u(t),T&&T.d(),G(H)}}}function $e(d){let t,n,s,e,l,o,i,a=d[0]&&Ht();return o=new ce({props:{class:"demo-spaced",$$slots:{default:[we]},$$scope:{ctx:d}}}),{c(){t=k(),a&&a.c(),n=k(),s=_("section"),e=_("div"),l=_("div"),N(o.$$.fragment),this.h()},l(r){se("svelte-1b5cey",document.head).forEach(u),t=q(r),a&&a.l(r),n=q(r),s=p(r,"SECTION",{class:!0});var f=v(s);e=p(f,"DIV",{class:!0});var b=v(e);l=p(b,"DIV",{class:!0});var $=v(l);V(o.$$.fragment,$),$.forEach(u),b.forEach(u),f.forEach(u),this.h()},h(){document.title="\u{1F49A} \u20BF\u2219\u03D5 \u{1F389} \u{1F973}",h(l,"class","card-container svelte-tr2nq1"),h(e,"class","card-display svelte-tr2nq1"),h(s,"class","svelte-tr2nq1")},m(r,m){I(r,t,m),a&&a.m(r,m),I(r,n,m),I(r,s,m),c(s,e),c(e,l),O(o,l,null),i=!0},p(r,[m]){r[0]?a?m&1&&P(a,1):(a=Ht(),a.c(),P(a,1),a.m(n.parentNode,n)):a&&(Ut(),D(a,1,1,()=>{a=null}),zt());const f={};m&257&&(f.$$scope={dirty:m,ctx:r}),o.$set(f)},i(r){i||(P(a),P(o.$$.fragment,r),i=!0)},o(r){D(a),D(o.$$.fragment,r),i=!1},d(r){r&&u(t),a&&a.d(r),r&&u(n),r&&u(s),G(o)}}}let Lt=64e8,Ot=5673386488;function Ee(d,t,n){let s=Lt.toLocaleString(),e=0,l=!1,o=[{output_index:2,transaction_hash:"\\x9f1493365fb90cbb6c75f209fc2a4745e5b5a191b76050d650ba95b0fd26dff7",value_satoshis:651},{output_index:4,transaction_hash:"\\x4c85386d7e9f1b66444ab90b954ba08f8027e0a7b726694f1673afeae7c50727",value_satoshis:638},{output_index:4,transaction_hash:"\\x5e645872debca4803de10114c47b73d3d48cef4bf35088dea3b493b0d14a1831",value_satoshis:825},{output_index:0,transaction_hash:"\\xb4e07159b409954a1c2439511c3c6e4c96516ebf3e2700ebab8a5138b0779a12",value_satoshis:4910968},{output_index:2,transaction_hash:"\\xfbb97fef496e81529e2112e59fec5f5096b221b0b6c3756a98f4aaab18d2c249",value_satoshis:651},{output_index:4,transaction_hash:"\\xf8d7c29454856dc1f3f80149162d6f45ad8abd1b2fe83eee5ded77ab89073482",value_satoshis:825},{output_index:4,transaction_hash:"\\x99ed4fea7241feb878e067883f917f364f9699f454258794b77255035bbd5e27",value_satoshis:825},{output_index:4,transaction_hash:"\\x73955c9ca14e2fccc880ca34fcf30a50adee140c7f8b7518fbfd5f315772c7ce",value_satoshis:825},{output_index:2,transaction_hash:"\\x0682cc656eb5a759037107a10f07d405aae7de735c4c96d84d9af5c1066b8c62",value_satoshis:975},{output_index:4,transaction_hash:"\\x63834eb8baa0cf23e50d3b7b2d46a75ec6518030764d9d1165edc2e48f05fa53",value_satoshis:825},{output_index:4,transaction_hash:"\\xf33523d05edb25222817519244db799cf24c78070c5c3065804e8f9cc46c3918",value_satoshis:825},{output_index:4,transaction_hash:"\\xa3c69b24a2dd2633422d823ad45d35e394f9c64e3021d4a4d9a35c5fc370f2fd",value_satoshis:825},{output_index:4,transaction_hash:"\\x593d677b1658dea9311f36265a3d35f3fdafff17a59887e4f6d75046292f6d23",value_satoshis:825},{output_index:1,transaction_hash:"\\xb903923dcadf05a9b5bc87e691d421ebb25e6ce8ff4e6bf923b25cffac0ccfb4",value_satoshis:1e7},{output_index:0,transaction_hash:"\\x89fc9f028a3bd143123a808a25c1148ea9cbc111decf72b443f9ebba12a44f5f",value_satoshis:1e5},{output_index:1,transaction_hash:"\\x54801394e33ab3a96c26f49b28592c27a1489b02b6f096fbfa131f6a2360ba99",value_satoshis:1e9},{output_index:0,transaction_hash:"\\xdd92df8c8a9108097776e4f9adabaff4ad40e03c4347709dca0ff9ad0d91c08e",value_satoshis:12484433},{output_index:0,transaction_hash:"\\x53dd199c887dc8b1b96cbeb2bda3f481414452427712fee16c3637707672ff3e",value_satoshis:90539586},{output_index:1,transaction_hash:"\\xc13c48b6df672dbf86cf7b39926884c5f8c4d536502d43d96c9e99636fe80004",value_satoshis:2208724461},{output_index:0,transaction_hash:"\\x4c1d82207af33f1b597f4d553831f46cf77660582bca41e8a03a6564b3c0b8f7",value_satoshis:1814300},{output_index:4,transaction_hash:"\\x2d977ba5f16e4a0eec3177617f9d7e06a2fc14da10f028e0093f5a00ac0726b9",value_satoshis:825},{output_index:0,transaction_hash:"\\x8a1809d5f7386d83877132397e208504045b0e56f133554d1b2141ae2e255102",value_satoshis:44873233},{output_index:1,transaction_hash:"\\x2cbd6481a9e2e8d5f62c53ad94842be1f955d90bd8f4cb2e1242762ca20a5fbe",value_satoshis:5e7},{output_index:0,transaction_hash:"\\xd9eb0d73a34732669a76f500a8f39fb4b2caf843e5de5d910c3d977ce09fe0ab",value_satoshis:6e4},{output_index:0,transaction_hash:"\\x553297e591186c249da343cd5ede711103c65b3ae51ae23dfbd3adab2cf20963",value_satoshis:45350},{output_index:0,transaction_hash:"\\x1a68ff835db7bc1f8da869e129e9b27e65212c58019a9137007f91a98726b02a",value_satoshis:101234},{output_index:1,transaction_hash:"\\x7c963cc6e05ec3637df3582b576d2be13ca698378998e39c3ee148683fde996b",value_satoshis:1e8},{output_index:1,transaction_hash:"\\x8949fb7b1bcca8dccc59ed59a0f38be0a4cc167123af528d14a20e90eebe05f7",value_satoshis:1e9},{output_index:0,transaction_hash:"\\x30dcafde7a9eaa6302c01696a1cd39a5b35b936d3bf41d725477f7af952866eb",value_satoshis:15714698},{output_index:1,transaction_hash:"\\xe7d7af54b5bf0721d99df0dfb3bd0b9d9d6ce53331a5d48c4a8f40af77794136",value_satoshis:1e9},{output_index:1,transaction_hash:"\\x18750c2bb451e7d7db5e81dc25e81531ecad93eacf95fbe89e06760bcf5a2dcf",value_satoshis:1337e5},{output_index:0,transaction_hash:"\\xdec0fc668287fe1d0ee5c651b8884e1fa130df5a30a2257f566cdcbbce3bd3be",value_satoshis:274032},{output_index:1,transaction_hash:"\\xb2b6574f56dc787c0996630d6d64c17e6c56a6c560a1377ce109a4ec4f7223ef",value_satoshis:11831},{output_index:2,transaction_hash:"\\xb6e39769c600ec0e87f7a2128eadc8037adb58aa887d7de52101042f1ef3f2cf",value_satoshis:759},{output_index:1,transaction_hash:"\\xa22d47b366988f163d60fcea75d8bed5ed509385c04ff367bbd5ed8814d22758",value_satoshis:668},{output_index:2,transaction_hash:"\\xa282e50f425b4e8b2e3036bb85c02da8de8c8db431f7bfb96f6ed9631f5b1ecd",value_satoshis:975},{output_index:1,transaction_hash:"\\x30726ead0b3ff5aeaf4a92fb12489c54297bd4e8470f8806ed29609e45f9d60a",value_satoshis:668},{output_index:1,transaction_hash:"\\xc472b2b23916bcbb091d318d03a15c11bd97ca8c5355a5bf65747ca303c73d7f",value_satoshis:586},{output_index:1,transaction_hash:"\\x0b0b30a2b52476b9145e188ba87db8e599033b9b8b4b0572cbf806ea1356b36a",value_satoshis:832},{output_index:1,transaction_hash:"\\x3be50168f6b7c5909e8d4414d191d469858111cd309045ddb252080a94f10a57",value_satoshis:668},{output_index:1,transaction_hash:"\\x57ec536abc6451d52b3eea7b29fad9d0fc44920788e3a5385ef47b6d6da77a0e",value_satoshis:586},{output_index:1,transaction_hash:"\\xefe55b67b66cbca7460c6622593994d92a3db2df8646d49273f757de5326bcb4",value_satoshis:586},{output_index:1,transaction_hash:"\\x9c7284884fcfef238dbbbe4554dd730d8d640934169ddb3b95429626c9167ba2",value_satoshis:586},{output_index:1,transaction_hash:"\\xf2c363036830bc6e1af2d19af6672de65bda983058a3a5dc6662144a1d28e6ad",value_satoshis:586},{output_index:1,transaction_hash:"\\xc04f489466342b26a517e6a7e1e41094e1266edb7b1d47ecb9962978bea113d3",value_satoshis:668},{output_index:1,transaction_hash:"\\xecda058efec50bf5ec760f6ee03edc1e282b41da37203abcb5f22a2f531c7589",value_satoshis:668},{output_index:2,transaction_hash:"\\x6e2c9e3d045608503aa447674e0362ff54a0236c306b951b023dc54004432a3d",value_satoshis:11775},{output_index:4,transaction_hash:"\\x438eef56a488adfaf39998ff17ebb15a044179a59fc338081f841263c973c658",value_satoshis:825},{output_index:1,transaction_hash:"\\x51f335a5647a62ccd521fd3657132a212be4d0f0ef1c6601d336872bd43919df",value_satoshis:586}];ne(async()=>{e||await i()});const i=async()=>{await le({load:async()=>{e=a(),e.toLocaleString(),(e/Lt*100).toFixed(4),n(0,l=e>5673386487)}})},a=()=>Ot;return[l,s,o]}class Be extends gt{constructor(t){super(),xt(this,t,Ee,$e,yt,{})}}export{Be as default};
//# sourceMappingURL=_page.svelte-76e8fb9b.js.map
