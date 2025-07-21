import{f as _,a as u,c as j}from"../chunks/hv3pLNBw.js";import"../chunks/Du1w6rGp.js";import{o as Et,a as xt}from"../chunks/mA7CAUPd.js";import{an as Tt,p as It,t as P,a as wt,al as kt,s as g,c as r,k as q,j as i,A as G,r as c,ac as k,f as Z}from"../chunks/CM0-IBWl.js";import{d as Ut,h as Dt,s as V}from"../chunks/CQLnGWjQ.js";import{i as L}from"../chunks/DkuLCVQT.js";import{e as K,i as J}from"../chunks/B0_aCvX0.js";import{a as E,s as b}from"../chunks/CLNM82cf.js";import{s as Nt,$ as W,a as tt,b as et}from"../chunks/BWNLlxWL.js";import{i as Bt}from"../chunks/BlGYJ9FU.js";import{p as nt}from"../chunks/CbvLJEJV.js";import{b as D,g as At,h as st,k as Ct,e as at,i as Mt,m as St}from"../chunks/CxTk_hdF.js";import{g as Rt,a as qt,c as Vt,B as Lt,D as Xt}from"../chunks/CYlzDiYj.js";const Ft=!0,Ie=Object.freeze(Object.defineProperty({__proto__:null,prerender:Ft},Symbol.toStringTag,{value:"Module"})),Ht=2,it=(O,s=Ht)=>JSON.stringify(O,(n,a)=>{const d=typeof a=="object"&&a!==null?a.constructor.name:typeof a;switch(d){case"Uint8Array":return`<Uint8Array: 0x${D(a)}>`;case"bigint":return`<bigint: ${a.toString()}n>`;case"function":case"symbol":return`<${d}: ${a.toString()}>`;default:return a}},s);var $t=_("<h3>About Drip Mine</h3> <p>Drip mine is a contract demonstrating the potential of Miner Extractable Value (MEV). Each output of the contract can be spent by anyone, each transaction generates fees that benefit miner that includes the transaction in a block.</p> <p>Bitcoin has always had builtin MEV, in the form of a block subsidy. The block subsidy, or block reward, is a way to create newly minted coins in the first transaction of a block (the coinbase transaction).</p> <p>As the idea of bitcoin continues to develop, on the Bitcoin Cash (BCH) fork, the built-in block subsidy will become less and less important and revenue from including transactions will come to dominate miner revenue.</p> <p>Anyone-can-spend outputs held by the drip-mine covenant by clicking the colorful icons above.</p> <p>When the value of an unspent transaction output locked by the covenant falls below 740 satoshis, all the value is claimed in the next transaction and the output is ‘burned’.</p> <p>Anyone may contribute to the MEV fund by sending outputs to the address below:</p>",1);function Yt(O){var s=$t();Tt(12),u(O,s)}const zt="https://libauth.org/schemas/wallet-template-v0.schema.json",Qt=`Drip Mine: An MEV faucet
 Contributed by Bitcoin Cash Autist - 2025 
 https://gitlab.com/0353F40E/drip-mine`,jt="DripMine",Gt={covenant:{description:"Emit MEV as fees to miners.",name:"Drip Mine",scripts:["unlock_return","unlock_burn"]}},Zt={base:{description:"A set of working parameters with a half-life of decay of roughly four years",name:"Base Scenario",transaction:{inputs:[{outpointIndex:0,unlockingBytecode:["slot"],sequenceNumber:1}],outputs:[{lockingBytecode:{script:"lock"}}],locktime:0,version:2},sourceOutputs:[{lockingBytecode:["slot"]}]},return:{description:"Drip value as fee, returning balance to thread.",extends:"base",name:"Drip",transaction:{outputs:[{valueSatoshis:4536}]},sourceOutputs:[{lockingBytecode:["slot"],valueSatoshis:4700}]},burn:{description:"Burn value below threshold as OP_RETURN.",extends:"base",name:"Drip Burn",transaction:{outputs:[{lockingBytecode:{script:"op_return"}}]},sourceOutputs:[{lockingBytecode:["slot"],valueSatoshis:500}]}},Kt={unlock_return:{passes:["return"],name:"Drip MEV",script:"// empty",unlocks:"lock"},unlock_burn:{passes:["burn"],name:"Final MEV Burn",script:"// empty",unlocks:"lock"},op_return:{lockingType:"standard",name:"OP_RETURN",script:"OP_RETURN"},lock:{lockingType:"p2sh32",name:"Drip Mine Covenant",script:`// Drip Mine: An MEV faucet
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
`}},Jt=["BCH_2023_05"],Wt=0,te={$schema:zt,description:Qt,name:jt,entities:Gt,scenarios:Zt,scripts:Kt,supported:Jt,version:Wt},ot=576,U=164,ee=4392,ne=1333036486;class T{static template=te;static compiler=At(this.template);static getLockingBytecode(s={}){const n=this.compiler.generateBytecode({data:s,scriptId:"lock"});if(!n.success)throw new Error("Failed to generate bytecode, script: , "+it(n));return n.bytecode}static getScriptHash(s=!0){return Rt(this.getLockingBytecode(),s)}static getAddress(s="bitcoincash"){return qt(this.getLockingBytecode(),s)}static getOutput(s){let n=Math.round(s.value*ee/ne);n=n<U?U:n;let a=s.value-n;return s.value>BigInt(ot+U)?{lockingBytecode:{compiler:this.compiler,script:"lock"},valueSatoshis:BigInt(a)}:{lockingBytecode:st("6a"),valueSatoshis:BigInt(0)}}static getInput(s){let n=s.value>BigInt(ot+U)?"unlock_return":"unlock_burn";return{outpointIndex:s.tx_pos,outpointTransactionHash:st(s.tx_hash),sequenceNumber:1,unlockingBytecode:{compiler:this.compiler,script:n,valueSatoshis:BigInt(s.value)}}}static processOutpoint(s){const n=[],a=[];a.push(this.getOutput(s)),n.push(this.getInput(s));const d=Vt({locktime:0,version:2,inputs:n,outputs:a});if(!d.success)throw new Error("generate transaction failed!, errors: "+it(d.errors));return D(Ct(d.transaction))}}const se="data:image/svg+xml,%3csvg%20style='height:400px;width:400px'%20version='1.1'%20viewBox='0%200%2016%2016'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3cradialGradient%20id='a'%20cx='7.24'%20cy='7.07'%20r='3.73'%20gradientTransform='matrix(-.551%201.72%20-1.8%20-.576%2022.2%20-.713)'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23b7ffff'%20stop-opacity='.839'%20offset='.05'/%3e%3cstop%20stop-color='%230052ef'%20offset='.95'/%3e%3c/radialGradient%3e%3c/defs%3e%3cpath%20d='m8.28%203.09c0.21-0.784%203.87%202.13%203.87%205.16%200%201.99-1.34%203.52-3.57%203.51-2.44%200-3.9-1.33-3.9-3.23%200-2.05%202.88-2.74%203.6-5.44z'%20fill='url(%23a)'/%3e%3c/svg%3e",ae="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20height='24px'%20viewBox='0%20-960%20960%20960'%20width='24px'%20fill='%23e3e3e3'%3e%3cpath%20d='M260-160q-91%200-155.5-63T40-377q0-78%2047-139t123-78q25-92%20100-149t170-57q117%200%20198.5%2081.5T760-520q69%208%20114.5%2059.5T920-340q0%2075-52.5%20127.5T740-160H260Zm0-80h480q42%200%2071-29t29-71q0-42-29-71t-71-29h-60v-80q0-83-58.5-141.5T480-720q-83%200-141.5%2058.5T280-520h-20q-58%200-99%2041t-41%2099q0%2058%2041%2099t99%2041Zm220-240Z'/%3e%3c/svg%3e";var ie=_('<meta name="description" content="Release miner extractable value (MEV) on Bitcoin Cash (BCH) from your browser!"/>'),oe=_("<img/>"),re=_('<img alt="Disconnected"/>'),ce=_('<div class="row svelte-1dhiv7e"><button class="svelte-1dhiv7e"><img/> <p class="svelte-1dhiv7e"> </p></button></div>'),le=_("<p>No spendable outputs, check back in 10 minutes.</p>"),ue=_('<div class="row svelte-1dhiv7e"><button disabled class="svelte-1dhiv7e"><img/> <p class="svelte-1dhiv7e"> </p></button></div>'),pe=_("<p>No pending transactions</p>"),he=_('<section class="svelte-1dhiv7e"><div class="status svelte-1dhiv7e"><!> <!></div> <p>Release miner extractable value (MEV) on Bitcoin Cash (BCH) from your browser!</p> <h3>Unspent Transaction Outputs (utxos)</h3> <div class="grid svelte-1dhiv7e"><!></div> <h3>Mempool Transactions</h3> <div class="grid svelte-1dhiv7e"><!></div> <!> <qr-code><img slot="icon"/></qr-code> <pre id="deposit"> </pre></section>',2);function we(O,s){It(s,!1);let n=G([]),a,x="";x=T.getScriptHash();let d="",I=G(""),N=new Set,X,F=nt.url.hostname=="vox.cash"?"bitcoincash":"bchtest",H=nt.url.hostname=="vox.cash"?"bch.imaginary.cash":"chipnet.bch.ninja";const rt=()=>{clearTimeout(X),X=setTimeout(()=>{N=new Set},1e4)},ct=function(t){t.method==="blockchain.scripthash.subscribe"?t.params[1]!==d&&(d=t.params[1],k(I,tt[a.status]),$()):console.log(t)},lt=async function(t){let e=await a.request("blockchain.transaction.broadcast",t);if(e instanceof Error)throw k(I,tt[a.status]),e},ut=async function(t,e){let h=T.processOutpoint(t);N.add(`${t.tx_hash}":"${t.tx_pos}`),rt();let m=D(at(h)),l=Mt(D(St(at(h)))),v=Number(h.outputs[0].valueSatoshis);i(n).splice(e,1);let f=i(n).filter(o=>o.height>0||o.value<v?!0:o.value==v&&o.tx_hash<l).length;i(n).splice(f,0,{height:0,tx_hash:l,value:v}),k(n,i(n)),await lt(m)},$=async function(){let t=await a.request("blockchain.scripthash.listunspent",x,"exclude_tokens");if(t instanceof Error)throw t;let e=new Set(t.map(h=>`${h.tx_hash}":"${h.tx_pos}`));(i(n).length==0||N.intersection(e).size==0)&&k(n,t)};Et(async()=>{a=new W("unspent/drip","1.4.1",H),await a.connect(),a.on("notification",ct),await a.subscribe("blockchain.scripthash.subscribe",x),$()}),xt(async()=>{await new W("unspent/drip","1.4.1",H).disconnect()}),Bt();var B=he();Dt(t=>{var e=ie();kt.title="Drip Mine",u(t,e)});var A=r(B),Y=r(A);{var pt=t=>{var e=oe();P(()=>{b(e,"src",ae),b(e,"alt",i(I))}),u(t,e)},ht=t=>{var e=re();P(()=>b(e,"src",Xt)),u(t,e)};L(Y,t=>{i(I)=="CONNECTED"?t(pt):t(ht,!1)})}var dt=g(Y,2);Lt(dt,{get template(){return T.template}}),c(A);var C=g(A,6),mt=r(C);{var vt=t=>{var e=j(),h=Z(e);K(h,1,()=>i(n).filter(m=>m.height>0),J,(m,l,v)=>{var f=ce(),o=r(f);o.__click=()=>ut(i(l),v);var y=r(o),w=g(y,2),S=r(w,!0);c(w),c(o),c(f),P((R,Pt)=>{b(y,"src",R),b(y,"alt",i(l).tx_hash),V(S,Pt)},[()=>et(`0x${i(l).tx_hash}`),()=>Number(i(l).value).toLocaleString()],q),u(m,f)}),u(t,e)},_t=t=>{var e=le();u(t,e)};L(mt,t=>{i(n).filter(e=>e.height>0).length>0?t(vt):t(_t,!1)})}c(C);var M=g(C,4),ft=r(M);{var gt=t=>{var e=j(),h=Z(e);K(h,1,()=>i(n).filter(m=>m.height<=0),J,(m,l)=>{var v=ue(),f=r(v),o=r(f),y=g(o,2),w=r(y,!0);c(y),c(f),c(v),P((S,R)=>{b(o,"src",S),b(o,"alt",i(l).tx_hash),V(w,R)},[()=>et(`0x${i(l).tx_hash}`),()=>Number(i(l).value).toLocaleString()],q),u(m,v)}),u(t,e)},bt=t=>{var e=pe();u(t,e)};L(ft,t=>{i(n).filter(e=>e.height<=0).length>0?t(gt):t(bt,!1)})}c(M);var z=g(M,2);Yt(z);var p=g(z,2);E(p,"id","qr1"),P(()=>E(p,"contents",T.getAddress(F))),E(p,"module-color","#000"),E(p,"position-ring-color","#0052ef"),E(p,"position-center-color","#b7ffff"),E(p,"mask-x-to-y-ratio","1.2"),Nt(p,`width: 150px;
									height: 150px;
									margin: 0.5em auto;
									background-color: #fff;`);var Ot=r(p);c(p);var Q=g(p,2),yt=r(Q,!0);c(Q),c(B),P(t=>{b(Ot,"src",se),V(yt,t)},[()=>T.getAddress(F)],q),u(O,B),wt()}Ut(["click"]);export{we as component,Ie as universal};
//# sourceMappingURL=4.ZXrKZYsD.js.map
