import{f,a as u,c as G}from"../chunks/8oBGRZVN.js";import"../chunks/CVEFSApn.js";import{o as Pt,a as yt}from"../chunks/DMW4kfRv.js";import{ar as Et,p as xt,c,t as P,a as Tt,g as o,b as I,ap as wt,s as O,J as C,P as z,r as l,f as Q}from"../chunks/lteOEiVP.js";import{d as It,h as kt,s as Ut}from"../chunks/tYMoxcZx.js";import{i as S}from"../chunks/DrKszRYN.js";import{e as J,i as K}from"../chunks/DgylJ1ue.js";import{b as y,s as g}from"../chunks/Cp4mrthu.js";import{s as Nt}from"../chunks/8Bq62MGM.js";import{i as Dt}from"../chunks/BWV7w5QU.js";import{p as W}from"../chunks/-AIRfaNI.js";import{b as Z}from"../chunks/BtgC42a0.js";import{l as V,o as Bt,j as At,v as Mt,r as U,B as Rt,N as Ct,H as St,F as Vt,G as Lt,k as tt,$ as et}from"../chunks/D-gsE0Ye.js";import{B as Xt,C as jt}from"../chunks/DHBrbuRk.js";import{D as qt}from"../chunks/DMvn4Q5j.js";const Ft=2,nt=(b,s=Ft)=>JSON.stringify(b,(n,a)=>{const d=typeof a=="object"&&a!==null?a.constructor.name:typeof a;switch(d){case"Uint8Array":return`<Uint8Array: 0x${V(a)}>`;case"bigint":return`<bigint: ${a.toString()}n>`;case"function":case"symbol":return`<${d}: ${a.toString()}>`;default:return a}},s),$t=!0,De=Object.freeze(Object.defineProperty({__proto__:null,prerender:$t},Symbol.toStringTag,{value:"Module"}));var Ht=f("<h3>About Drip Mine</h3> <p>Drip mine is a contract demonstrating the potential of Miner Extractable Value (MEV). Each output of the contract can be spent by anyone, each transaction generates fees that benefit miner that includes the transaction in a block.</p> <p>Bitcoin has always had builtin MEV, in the form of a block subsidy. The block subsidy, or block reward, is a way to create newly minted coins in the first transaction of a block (the coinbase transaction).</p> <p>As the idea of bitcoin continues to develop, on the Bitcoin Cash (BCH) fork, the built-in block subsidy will become less and less important and revenue from including transactions will come to dominate miner revenue.</p> <p>Anyone-can-spend outputs held by the drip-mine covenant by clicking the colorful icons above.</p> <p>When the value of an unspent transaction output locked by the covenant falls below 740 satoshis, all the value is claimed in the next transaction and the output is ‘burned’.</p> <p>Anyone may contribute to the MEV fund by sending outputs to the address below:</p>",1);function Yt(b){var s=Ht();Et(12),u(b,s)}const Gt="https://libauth.org/schemas/wallet-template-v0.schema.json",zt=`Drip Mine: An MEV faucet
 Contributed by Bitcoin Cash Autist - 2025 
 https://gitlab.com/0353F40E/drip-mine`,Qt="DripMine",Jt={covenant:{description:"Emit MEV as fees to miners.",name:"Drip Mine",scripts:["unlock_return","unlock_burn"]}},Kt={base:{description:"A set of working parameters with a half-life of decay of roughly four years",name:"Base Scenario",transaction:{inputs:[{outpointIndex:0,unlockingBytecode:["slot"],sequenceNumber:1}],outputs:[{lockingBytecode:{script:"lock"}}],locktime:0,version:2},sourceOutputs:[{lockingBytecode:["slot"]}]},return:{description:"Drip value as fee, returning balance to thread.",extends:"base",name:"Drip",transaction:{outputs:[{valueSatoshis:4536}]},sourceOutputs:[{lockingBytecode:["slot"],valueSatoshis:4700}]},burn:{description:"Burn value below threshold as OP_RETURN.",extends:"base",name:"Drip Burn",transaction:{outputs:[{lockingBytecode:{script:"op_return"}}]},sourceOutputs:[{lockingBytecode:["slot"],valueSatoshis:500}]}},Wt={unlock_return:{passes:["return"],name:"Drip MEV",script:"// empty",unlocks:"lock"},unlock_burn:{passes:["burn"],name:"Final MEV Burn",script:"// empty",unlocks:"lock"},op_return:{lockingType:"standard",name:"OP_RETURN",script:"OP_RETURN"},lock:{lockingType:"p2sh32",name:"Drip Mine Covenant",script:`// Drip Mine: An MEV faucet
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
`}},Zt=["BCH_2023_05"],te=0,ee={$schema:Gt,description:zt,name:Qt,entities:Jt,scenarios:Kt,scripts:Wt,supported:Zt,version:te},ne="@unspent/drip",se={name:ne},st=576,k=164,ae=4392,oe=1333036486;class E{static USER_AGENT=se.name;static template=ee;static compiler=Bt(this.template);static getLockingBytecode(s={}){const n=this.compiler.generateBytecode({data:s,scriptId:"lock"});if(!n.success)throw new Error("Failed to generate bytecode, script: , "+nt(n));return n.bytecode}static getScriptHash(s=!0){return At(this.getLockingBytecode(),s)}static getAddress(s="bitcoincash"){return Mt(this.getLockingBytecode(),s)}static getOutput(s){let n=Math.round(s.value*ae/oe)-1;n=n<k?k:n;let a=s.value-n;return s.value>BigInt(st+k)?{lockingBytecode:{compiler:this.compiler,script:"lock"},valueSatoshis:BigInt(a)}:{lockingBytecode:U("6a"),valueSatoshis:BigInt(0)}}static getInput(s){let n=s.value>BigInt(st+k)?"unlock_return":"unlock_burn";return{outpointIndex:s.tx_pos,outpointTransactionHash:U(s.tx_hash),sequenceNumber:1,unlockingBytecode:{compiler:this.compiler,script:n,valueSatoshis:BigInt(s.value)}}}static processOutpoint(s){const n=[],a=[];a.push(this.getOutput(s)),n.push(this.getInput(s));const d=Rt({locktime:0,version:2,inputs:n,outputs:a});if(!d.success)throw new Error("generate transaction failed!, errors: "+nt(d.errors));return V(Ct(d.transaction))}}const ie="data:image/svg+xml,%3csvg%20style='height:400px;width:400px'%20version='1.1'%20viewBox='0%200%2016%2016'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3cradialGradient%20id='a'%20cx='7.24'%20cy='7.07'%20r='3.73'%20gradientTransform='matrix(-.551%201.72%20-1.8%20-.576%2022.2%20-.713)'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23b7ffff'%20stop-opacity='.839'%20offset='.05'/%3e%3cstop%20stop-color='%230052ef'%20offset='.95'/%3e%3c/radialGradient%3e%3c/defs%3e%3cpath%20d='m8.28%203.09c0.21-0.784%203.87%202.13%203.87%205.16%200%201.99-1.34%203.52-3.57%203.51-2.44%200-3.9-1.33-3.9-3.23%200-2.05%202.88-2.74%203.6-5.44z'%20fill='url(%23a)'/%3e%3c/svg%3e";var re=f('<meta name="description" content="Release the miner extractable value (MEV)!"/>'),ce=f("<img/>"),le=f('<img alt="Disconnected"/>'),ue=(b,s)=>s(),pe=f('<div class="row svelte-1w1ojhb"><button class="svelte-1w1ojhb"><img/></button></div>'),he=f("<p>No spendable outputs, check back in 10 minutes.</p>"),de=f('<div class="row svelte-1w1ojhb"><button disabled class="svelte-1w1ojhb"><img/></button></div>'),me=f("<p>No pending transactions</p>"),_e=f('<section class="svelte-1w1ojhb"><div class="status svelte-1w1ojhb"><!> <!></div> <h1>Release the miner extractable value (MEV)!</h1> <div class="header svelte-1w1ojhb"><button class="svelte-1w1ojhb">Release all Miner Extractable Value (MEV)</button></div> <h3>Unspent Transaction Outputs (utxos)</h3> <div class="grid svelte-1w1ojhb"><!></div> <h3>Mempool Transactions</h3> <div class="grid svelte-1w1ojhb"><!></div> <!> <qr-code><img slot="icon"/></qr-code> <pre id="deposit"> </pre></section>',2);function Be(b,s){xt(s,!1);let n=z([]),a,x="";x=E.getScriptHash();let d="",T=z(""),N=new Set,L,X=W.url.hostname=="vox.cash"?"bitcoincash":"bchtest",j=W.url.hostname=="vox.cash"?"bch.imaginary.cash":"chipnet.bch.ninja";const at=()=>{clearTimeout(L),L=setTimeout(()=>{N=new Set},1e4)},ot=function(t){t.method==="blockchain.scripthash.subscribe"?t.params[1]!==d&&(d=t.params[1],I(T,tt[a.status]),F()):console.log(t)},it=async function(t){let e=await a.request("blockchain.transaction.broadcast",t);if(e instanceof Error)throw I(T,tt[a.status]),e},rt=function(){o(n).filter(t=>t.height>0).map((t,e)=>{q(t,e)})},q=async function(t,e){let h=E.processOutpoint(t),i=St(U(h));if(typeof i=="string")throw i;N.add(`${t.tx_hash}":"${t.tx_pos}`),at();let m=Vt(V(Lt(U(h)))),_=Number(i.outputs[0].valueSatoshis);o(n).splice(e,1);let v=o(n).filter(r=>r.height>0||r.value<_?!0:r.value==_&&r.tx_hash<m).length;o(n).splice(v,0,{height:0,tx_hash:m,value:_}),I(n,o(n)),await it(h)},F=async function(){let t=await a.request("blockchain.scripthash.listunspent",x,"exclude_tokens");if(t instanceof Error)throw t;let e=new Set(t.map(h=>`${h.tx_hash}":"${h.tx_pos}`));(o(n).length==0||N.intersection(e).size==0)&&I(n,t)};Pt(async()=>{a=new et(E.USER_AGENT,"1.4.1",j),await a.connect(),a.on("notification",ot),await a.subscribe("blockchain.scripthash.subscribe",x),F()}),yt(async()=>{await new et("unspent/drip","1.4.1",j).disconnect()}),Dt();var D=_e();kt(t=>{var e=re();wt.title="Drip Mine",u(t,e)});var B=c(D),$=c(B);Xt($,{get template(){return E.template}});var ct=O($,2);{var lt=t=>{var e=ce();P(()=>{g(e,"src",jt),g(e,"alt",o(T))}),u(t,e)},ut=t=>{var e=le();P(()=>g(e,"src",qt)),u(t,e)};S(ct,t=>{o(T)=="CONNECTED"?t(lt):t(ut,!1)})}l(B);var A=O(B,4),pt=c(A);pt.__click=[ue,rt],l(A);var M=O(A,4),ht=c(M);{var dt=t=>{var e=G(),h=Q(e);J(h,1,()=>o(n).filter(i=>i.height>0),K,(i,m,_)=>{var v=pe(),r=c(v);r.__click=()=>q(o(m),_);var w=c(r);l(r),l(v),P(Ot=>{g(w,"src",Ot),g(w,"alt",o(m).tx_hash)},[()=>Z(`0x${o(m).tx_hash}`,32)],C),u(i,v)}),u(t,e)},mt=t=>{var e=he();u(t,e)};S(ht,t=>{o(n).filter(e=>e.height>0).length>0?t(dt):t(mt,!1)})}l(M);var R=O(M,4),_t=c(R);{var ft=t=>{var e=G(),h=Q(e);J(h,1,()=>o(n).filter(i=>i.height<=0),K,(i,m)=>{var _=de(),v=c(_),r=c(v);l(v),l(_),P(w=>{g(r,"src",w),g(r,"alt",o(m).tx_hash)},[()=>Z(`0x${o(m).tx_hash}`,32)],C),u(i,_)}),u(t,e)},vt=t=>{var e=me();u(t,e)};S(_t,t=>{o(n).filter(e=>e.height<=0).length>0?t(ft):t(vt,!1)})}l(R);var H=O(R,2);Yt(H);var p=O(H,2);y(p,"id","qr1"),P(()=>y(p,"contents",E.getAddress(X))),y(p,"module-color","#000"),y(p,"position-ring-color","#0052ef"),y(p,"position-center-color","#b7ffff"),y(p,"mask-x-to-y-ratio","1.2"),Nt(p,`width: 150px;
									height: 150px;
									margin: 0.5em auto;
									background-color: #fff;`);var gt=c(p);l(p);var Y=O(p,2),bt=c(Y,!0);l(Y),l(D),P(t=>{g(gt,"src",ie),Ut(bt,t)},[()=>E.getAddress(X)],C),u(b,D),Tt()}It(["click"]);export{Be as component,De as universal};
//# sourceMappingURL=5.BLoZ_H9M.js.map
