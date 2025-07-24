import{f as _,a as p,c as G}from"../chunks/CRvmiqBR.js";import"../chunks/WrbeZ9Yk.js";import{o as Pt,a as Et}from"../chunks/Ccv3-5x3.js";import{ak as xt,p as It,t as P,a as Tt,ai as kt,s as g,c as r,k as V,j as i,A as K,r as c,Z as w,f as J}from"../chunks/DJ0traIv.js";import{d as wt,h as Ut,s as L}from"../chunks/nWFjZOym.js";import{i as X}from"../chunks/Bfl_lDgj.js";import{e as W,i as Z}from"../chunks/Yl1bpYLi.js";import{a as E,s as b}from"../chunks/BOncMXre.js";import{s as Dt,b as tt}from"../chunks/uEqdUdcU.js";import{p as et,i as Nt}from"../chunks/D4ZT310-.js";import{b as q,g as Bt,h as D,e as At,$ as nt,a as st,d as Ct,s as Mt,c as St}from"../chunks/CfnifqL9.js";import{g as Rt,a as Vt,b as Lt,B as Xt,C as qt,D as Ft}from"../chunks/ERvQ5ub5.js";const $t=!0,Ie=Object.freeze(Object.defineProperty({__proto__:null,prerender:$t},Symbol.toStringTag,{value:"Module"})),Ht=2,at=(O,s=Ht)=>JSON.stringify(O,(n,a)=>{const m=typeof a=="object"&&a!==null?a.constructor.name:typeof a;switch(m){case"Uint8Array":return`<Uint8Array: 0x${q(a)}>`;case"bigint":return`<bigint: ${a.toString()}n>`;case"function":case"symbol":return`<${m}: ${a.toString()}>`;default:return a}},s);var Yt=_("<h3>About Drip Mine</h3> <p>Drip mine is a contract demonstrating the potential of Miner Extractable Value (MEV). Each output of the contract can be spent by anyone, each transaction generates fees that benefit miner that includes the transaction in a block.</p> <p>Bitcoin has always had builtin MEV, in the form of a block subsidy. The block subsidy, or block reward, is a way to create newly minted coins in the first transaction of a block (the coinbase transaction).</p> <p>As the idea of bitcoin continues to develop, on the Bitcoin Cash (BCH) fork, the built-in block subsidy will become less and less important and revenue from including transactions will come to dominate miner revenue.</p> <p>Anyone-can-spend outputs held by the drip-mine covenant by clicking the colorful icons above.</p> <p>When the value of an unspent transaction output locked by the covenant falls below 740 satoshis, all the value is claimed in the next transaction and the output is ‘burned’.</p> <p>Anyone may contribute to the MEV fund by sending outputs to the address below:</p>",1);function zt(O){var s=Yt();xt(12),p(O,s)}const Qt="https://libauth.org/schemas/wallet-template-v0.schema.json",jt=`Drip Mine: An MEV faucet
 Contributed by Bitcoin Cash Autist - 2025 
 https://gitlab.com/0353F40E/drip-mine`,Gt="DripMine",Kt={covenant:{description:"Emit MEV as fees to miners.",name:"Drip Mine",scripts:["unlock_return","unlock_burn"]}},Jt={base:{description:"A set of working parameters with a half-life of decay of roughly four years",name:"Base Scenario",transaction:{inputs:[{outpointIndex:0,unlockingBytecode:["slot"],sequenceNumber:1}],outputs:[{lockingBytecode:{script:"lock"}}],locktime:0,version:2},sourceOutputs:[{lockingBytecode:["slot"]}]},return:{description:"Drip value as fee, returning balance to thread.",extends:"base",name:"Drip",transaction:{outputs:[{valueSatoshis:4536}]},sourceOutputs:[{lockingBytecode:["slot"],valueSatoshis:4700}]},burn:{description:"Burn value below threshold as OP_RETURN.",extends:"base",name:"Drip Burn",transaction:{outputs:[{lockingBytecode:{script:"op_return"}}]},sourceOutputs:[{lockingBytecode:["slot"],valueSatoshis:500}]}},Wt={unlock_return:{passes:["return"],name:"Drip MEV",script:"// empty",unlocks:"lock"},unlock_burn:{passes:["burn"],name:"Final MEV Burn",script:"// empty",unlocks:"lock"},op_return:{lockingType:"standard",name:"OP_RETURN",script:"OP_RETURN"},lock:{lockingType:"p2sh32",name:"Drip Mine Covenant",script:`// Drip Mine: An MEV faucet
// Contributed by Bitcoin Cash Autist - 2025
// https://gitlab.com/0353F40E/drip-mine
// 
// contract DripMine() {

    // function drip() {
        // Drip once per block
        OP_1 OP_CHECKSEQUENCEVERIFY OP_DROP
        // require(tx.age >= 1);

        // Drip will be released as TX fee
        OP_TXINPUTCOUNT OP_1 OP_NUMEQUALVERIFY
        OP_TXOUTPUTCOUNT OP_1 OP_NUMEQUALVERIFY
        // require(tx.inputs.length == 1);
        // require(tx.outputs.length == 1);

        // dustLimit = 444 + output_size * 3; // p2sh32 output size is 44
        <576> 
        // int dustLimit = 576;

        // minPayout = this_tx_size * min_fee_rate; 
        // this TX size will be 164, double check when compiling
        <164>
        // int minPayout = 164;

        // if we have enough to pay out the minimum and stay above dust limit
        // then we drip from the contract
        OP_INPUTINDEX OP_UTXOVALUE OP_ROT OP_2 OP_PICK OP_ADD OP_GREATERTHAN OP_IF
        // if (tx.inputs[this.activeInputIndex].value > dustLimit + minPayout) {

            // DripMine contract must be passed on
            OP_INPUTINDEX OP_UTXOBYTECODE OP_INPUTINDEX OP_OUTPUTBYTECODE OP_EQUALVERIFY
            // require(tx.inputs[this.activeInputIndex].lockingBytecode ==
            //         tx.outputs[this.activeInputIndex].lockingBytecode);

            // Calculate maxPayout
            // Decay half-life of 4 years
            OP_INPUTINDEX OP_UTXOVALUE <4392> OP_MUL <1333036486> OP_DIV
            // int maxPayout = (tx.inputs[this.activeInputIndex].value * 4392) / 1333036486;

            // If calculated payout would be too low, switch to flat minPayout
            OP_2DUP OP_GREATERTHAN OP_IF
            // if (maxPayout < minPayout) {
                OP_OVER OP_NIP
                // maxPayout = minPayout;
            // } 
            OP_ENDIF

            // TX fee is the payout to miners
            OP_INPUTINDEX OP_UTXOVALUE OP_INPUTINDEX OP_OUTPUTVALUE OP_SUB
            // int payout = tx.inputs[this.activeInputIndex].value -
            //              tx.outputs[this.activeInputIndex].value;
            OP_2DUP OP_GREATERTHANOREQUAL OP_VERIFY
            // require(payout <= maxPayout);

        // else we sweep everything as fee and terminate the contract
        OP_2DROP OP_ELSE
        // } else {
            // Burn the output with remaining value to miners' fees
            OP_INPUTINDEX OP_OUTPUTVALUE OP_0 OP_NUMEQUALVERIFY
            // require(tx.outputs[this.activeInputIndex].value == 0);
            OP_INPUTINDEX OP_OUTPUTBYTECODE <0x6a> OP_EQUALVERIFY
            // require(tx.outputs[this.activeInputIndex].lockingBytecode == 0x6a);
        // } 
        OP_ENDIF 
    // } 
    OP_DROP OP_1
// }
`}},Zt=["BCH_2023_05"],te=0,ee={$schema:Qt,description:jt,name:Gt,entities:Kt,scenarios:Jt,scripts:Wt,supported:Zt,version:te},it=576,U=164,ne=4392,se=1333036486;class I{static template=ee;static compiler=Bt(this.template);static getLockingBytecode(s={}){const n=this.compiler.generateBytecode({data:s,scriptId:"lock"});if(!n.success)throw new Error("Failed to generate bytecode, script: , "+at(n));return n.bytecode}static getScriptHash(s=!0){return Rt(this.getLockingBytecode(),s)}static getAddress(s="bitcoincash"){return Vt(this.getLockingBytecode(),s)}static getOutput(s){let n=Math.round(s.value*ne/se);n=n<U?U:n;let a=s.value-n;return s.value>BigInt(it+U)?{lockingBytecode:{compiler:this.compiler,script:"lock"},valueSatoshis:BigInt(a)}:{lockingBytecode:D("6a"),valueSatoshis:BigInt(0)}}static getInput(s){let n=s.value>BigInt(it+U)?"unlock_return":"unlock_burn";return{outpointIndex:s.tx_pos,outpointTransactionHash:D(s.tx_hash),sequenceNumber:1,unlockingBytecode:{compiler:this.compiler,script:n,valueSatoshis:BigInt(s.value)}}}static processOutpoint(s){const n=[],a=[];a.push(this.getOutput(s)),n.push(this.getInput(s));const m=Lt({locktime:0,version:2,inputs:n,outputs:a});if(!m.success)throw new Error("generate transaction failed!, errors: "+at(m.errors));return q(At(m.transaction))}}const ae="data:image/svg+xml,%3csvg%20style='height:400px;width:400px'%20version='1.1'%20viewBox='0%200%2016%2016'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3cradialGradient%20id='a'%20cx='7.24'%20cy='7.07'%20r='3.73'%20gradientTransform='matrix(-.551%201.72%20-1.8%20-.576%2022.2%20-.713)'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23b7ffff'%20stop-opacity='.839'%20offset='.05'/%3e%3cstop%20stop-color='%230052ef'%20offset='.95'/%3e%3c/radialGradient%3e%3c/defs%3e%3cpath%20d='m8.28%203.09c0.21-0.784%203.87%202.13%203.87%205.16%200%201.99-1.34%203.52-3.57%203.51-2.44%200-3.9-1.33-3.9-3.23%200-2.05%202.88-2.74%203.6-5.44z'%20fill='url(%23a)'/%3e%3c/svg%3e";var ie=_('<meta name="description" content="Release miner extractable value (MEV) on Bitcoin Cash (BCH) from your browser!"/>'),oe=_("<img/>"),re=_('<img alt="Disconnected"/>'),ce=_('<div class="row svelte-1dhiv7e"><button class="svelte-1dhiv7e"><img/> <p class="svelte-1dhiv7e"> </p></button></div>'),le=_("<p>No spendable outputs, check back in 10 minutes.</p>"),ue=_('<div class="row svelte-1dhiv7e"><button disabled class="svelte-1dhiv7e"><img/> <p class="svelte-1dhiv7e"> </p></button></div>'),pe=_("<p>No pending transactions</p>"),he=_('<section class="svelte-1dhiv7e"><div class="status svelte-1dhiv7e"><!> <!></div> <p>Release miner extractable value (MEV) on Bitcoin Cash (BCH) from your browser!</p> <h3>Unspent Transaction Outputs (utxos)</h3> <div class="grid svelte-1dhiv7e"><!></div> <h3>Mempool Transactions</h3> <div class="grid svelte-1dhiv7e"><!></div> <!> <qr-code><img slot="icon"/></qr-code> <pre id="deposit"> </pre></section>',2);function Te(O,s){It(s,!1);let n=K([]),a,x="";x=I.getScriptHash();let m="",T=K(""),N=new Set,F,$=et.url.hostname=="vox.cash"?"bitcoincash":"bchtest",H=et.url.hostname=="vox.cash"?"bch.imaginary.cash":"chipnet.bch.ninja";const ot=()=>{clearTimeout(F),F=setTimeout(()=>{N=new Set},1e4)},rt=function(t){t.method==="blockchain.scripthash.subscribe"?t.params[1]!==m&&(m=t.params[1],w(T,st[a.status]),Y()):console.log(t)},ct=async function(t){let e=await a.request("blockchain.transaction.broadcast",t);if(e instanceof Error)throw w(T,st[a.status]),e},lt=async function(t,e){let d=I.processOutpoint(t),l=Ct(D(d));if(typeof l=="string")throw l;N.add(`${t.tx_hash}":"${t.tx_pos}`),ot();let u=Mt(q(St(D(d)))),v=Number(l.outputs[0].valueSatoshis);i(n).splice(e,1);let f=i(n).filter(o=>o.height>0||o.value<v?!0:o.value==v&&o.tx_hash<u).length;i(n).splice(f,0,{height:0,tx_hash:u,value:v}),w(n,i(n)),await ct(d)},Y=async function(){let t=await a.request("blockchain.scripthash.listunspent",x,"exclude_tokens");if(t instanceof Error)throw t;let e=new Set(t.map(d=>`${d.tx_hash}":"${d.tx_pos}`));(i(n).length==0||N.intersection(e).size==0)&&w(n,t)};Pt(async()=>{a=new nt("unspent/drip","1.4.1",H),await a.connect(),a.on("notification",rt),await a.subscribe("blockchain.scripthash.subscribe",x),Y()}),Et(async()=>{await new nt("unspent/drip","1.4.1",H).disconnect()}),Nt();var B=he();Ut(t=>{var e=ie();kt.title="Drip Mine",p(t,e)});var A=r(B),z=r(A);{var ut=t=>{var e=oe();P(()=>{b(e,"src",qt),b(e,"alt",i(T))}),p(t,e)},pt=t=>{var e=re();P(()=>b(e,"src",Ft)),p(t,e)};X(z,t=>{i(T)=="CONNECTED"?t(ut):t(pt,!1)})}var ht=g(z,2);Xt(ht,{get template(){return I.template}}),c(A);var C=g(A,6),dt=r(C);{var mt=t=>{var e=G(),d=J(e);W(d,1,()=>i(n).filter(l=>l.height>0),Z,(l,u,v)=>{var f=ce(),o=r(f);o.__click=()=>lt(i(u),v);var y=r(o),k=g(y,2),S=r(k,!0);c(k),c(o),c(f),P((R,yt)=>{b(y,"src",R),b(y,"alt",i(u).tx_hash),L(S,yt)},[()=>tt(`0x${i(u).tx_hash}`),()=>Number(i(u).value).toLocaleString()],V),p(l,f)}),p(t,e)},vt=t=>{var e=le();p(t,e)};X(dt,t=>{i(n).filter(e=>e.height>0).length>0?t(mt):t(vt,!1)})}c(C);var M=g(C,4),_t=r(M);{var ft=t=>{var e=G(),d=J(e);W(d,1,()=>i(n).filter(l=>l.height<=0),Z,(l,u)=>{var v=ue(),f=r(v),o=r(f),y=g(o,2),k=r(y,!0);c(y),c(f),c(v),P((S,R)=>{b(o,"src",S),b(o,"alt",i(u).tx_hash),L(k,R)},[()=>tt(`0x${i(u).tx_hash}`),()=>Number(i(u).value).toLocaleString()],V),p(l,v)}),p(t,e)},gt=t=>{var e=pe();p(t,e)};X(_t,t=>{i(n).filter(e=>e.height<=0).length>0?t(ft):t(gt,!1)})}c(M);var Q=g(M,2);zt(Q);var h=g(Q,2);E(h,"id","qr1"),P(()=>E(h,"contents",I.getAddress($))),E(h,"module-color","#000"),E(h,"position-ring-color","#0052ef"),E(h,"position-center-color","#b7ffff"),E(h,"mask-x-to-y-ratio","1.2"),Dt(h,`width: 150px;
									height: 150px;
									margin: 0.5em auto;
									background-color: #fff;`);var bt=r(h);c(h);var j=g(h,2),Ot=r(j,!0);c(j),c(B),P(t=>{b(bt,"src",ae),L(Ot,t)},[()=>I.getAddress($)],V),p(O,B),Tt()}wt(["click"]);export{Te as component,Ie as universal};
//# sourceMappingURL=4.DGeWkSQx.js.map
