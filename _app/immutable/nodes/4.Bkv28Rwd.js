import{f as v,a as u,c as Q}from"../chunks/hv3pLNBw.js";import"../chunks/Du1w6rGp.js";import{o as Et,a as yt}from"../chunks/mA7CAUPd.js";import{an as xt,p as Tt,t as P,a as It,al as kt,s as f,c as r,k as R,j as a,A as j,r as c,ac as k,f as G}from"../chunks/CM0-IBWl.js";import{d as wt,h as Ut,s as S}from"../chunks/CQLnGWjQ.js";import{i as q}from"../chunks/DkuLCVQT.js";import{e as Z,i as J}from"../chunks/B0_aCvX0.js";import{a as E,s as g}from"../chunks/CLNM82cf.js";import{s as Nt,$ as K,a as W,b as tt}from"../chunks/BpqGmHYY.js";import{i as Dt}from"../chunks/BlGYJ9FU.js";import{p as et}from"../chunks/BEg99vxq.js";import{g as Bt}from"../chunks/CZxOkrUv.js";import{g as At,a as Ct,B as Mt,D as Rt}from"../chunks/wVV78YZ-.js";import{h as nt,g as St,b as st,f as at,e as qt,k as Vt}from"../chunks/B6v_0sos.js";const Lt=!0,xe=Object.freeze(Object.defineProperty({__proto__:null,prerender:Lt},Symbol.toStringTag,{value:"Module"}));var Xt=v("<h3>About Drip Mine</h3> <p>Drip mine is a contract demonstrating the potential of Miner Extractable Value (MEV). Each output of the contract can be spent by anyone, each transaction generates fees that benefit miner that includes the transaction in a block.</p> <p>Bitcoin has always had builtin MEV, in the form of a block subsidy. The block subsidy, or block reward, is a way to create newly minted coins in the first transaction of a block (the coinbase transaction).</p> <p>As the idea of bitcoin continues to develop, on the Bitcoin Cash (BCH) fork, the built-in block subsidy will become less and less important and revenue from including transactions will come to dominate miner revenue.</p> <p>Anyone-can-spend outputs held by the drip-mine covenant by clicking the colorful icons above.</p> <p>When the value of an unspent transaction output locked by the covenant falls below 740 satoshis, all the value is claimed in the next transaction and the output is ‘burned’.</p> <p>Anyone may contribute to the MEV fund by sending outputs to the address below:</p>",1);function Ft(x){var s=Xt();xt(12),u(x,s)}const Ht="https://libauth.org/schemas/wallet-template-v0.schema.json",Yt=`Drip Mine: An MEV faucet
 Contributed by Bitcoin Cash Autist - 2025 
 https://gitlab.com/0353F40E/drip-mine`,$t="DripMine",zt={covenant:{description:"Emit MEV as fees to miners.",name:"Drip Mine",scripts:["unlock_return","unlock_burn"]}},Qt={base:{description:"A set of working parameters with a half-life of decay of roughly four years",name:"Base Scenario",transaction:{inputs:[{outpointIndex:0,unlockingBytecode:["slot"],sequenceNumber:1}],outputs:[{lockingBytecode:{script:"lock"}}],locktime:0,version:2},sourceOutputs:[{lockingBytecode:["slot"]}]},return:{description:"Drip value as fee, returning balance to thread.",extends:"base",name:"Drip",transaction:{outputs:[{valueSatoshis:4536}]},sourceOutputs:[{lockingBytecode:["slot"],valueSatoshis:4700}]},burn:{description:"Burn value below threshold as OP_RETURN.",extends:"base",name:"Drip Burn",transaction:{outputs:[{lockingBytecode:{script:"op_return"}}]},sourceOutputs:[{lockingBytecode:["slot"],valueSatoshis:500}]}},jt={unlock_return:{passes:["return"],name:"Drip MEV",script:"// empty",unlocks:"lock"},unlock_burn:{passes:["burn"],name:"Final MEV Burn",script:"// empty",unlocks:"lock"},op_return:{lockingType:"standard",name:"OP_RETURN",script:"OP_RETURN"},lock:{lockingType:"p2sh32",name:"Drip Mine Covenant",script:`// Drip Mine: An MEV faucet
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
`}},Gt=["BCH_2023_05"],Zt=0,Jt={$schema:Ht,description:Yt,name:$t,entities:zt,scenarios:Qt,scripts:jt,supported:Gt,version:Zt},it=576,w=164,Kt=4392,Wt=1333036486;class y{static template=Jt;static compiler=Bt(this.template);static getLockingBytecode(s={}){const n=this.compiler.generateBytecode({data:s,scriptId:"lock"});if(!n.success)throw new Error("Failed to generate bytecode, script: , "+JSON.stringify(n,null,"  "));return n.bytecode}static getScriptHash(s=!0){return At(this.getLockingBytecode(),s)}static getAddress(s="bitcoincash"){return Ct(this.getLockingBytecode(),s)}static getOutput(s){let n=Math.round(s.value*Kt/Wt);n=n<w?w:n;let i=s.value-n;return s.value>BigInt(it+w)?{lockingBytecode:{compiler:this.compiler,script:"lock"},valueSatoshis:BigInt(i)}:{lockingBytecode:nt("6a"),valueSatoshis:BigInt(0)}}static getInput(s){let n=s.value>BigInt(it+w)?"unlock_return":"unlock_burn";return{outpointIndex:s.tx_pos,outpointTransactionHash:nt(s.tx_hash),sequenceNumber:1,unlockingBytecode:{compiler:this.compiler,script:n,valueSatoshis:BigInt(s.value)}}}static processOutpoint(s){const n=[],i=[];i.push(this.getOutput(s)),n.push(this.getInput(s));const b=St({locktime:0,version:2,inputs:n,outputs:i});if(!b.success)throw new Error("generate transaction failed!, errors: "+JSON.stringify(b.errors,null,"  "));return b.transaction}}const te="data:image/svg+xml,%3csvg%20style='height:400px;width:400px'%20version='1.1'%20viewBox='0%200%2016%2016'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3cradialGradient%20id='a'%20cx='7.24'%20cy='7.07'%20r='3.73'%20gradientTransform='matrix(-.551%201.72%20-1.8%20-.576%2022.2%20-.713)'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23b7ffff'%20stop-opacity='.839'%20offset='.05'/%3e%3cstop%20stop-color='%230052ef'%20offset='.95'/%3e%3c/radialGradient%3e%3c/defs%3e%3cpath%20d='m8.28%203.09c0.21-0.784%203.87%202.13%203.87%205.16%200%201.99-1.34%203.52-3.57%203.51-2.44%200-3.9-1.33-3.9-3.23%200-2.05%202.88-2.74%203.6-5.44z'%20fill='url(%23a)'/%3e%3c/svg%3e",ee="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20height='24px'%20viewBox='0%20-960%20960%20960'%20width='24px'%20fill='%23e3e3e3'%3e%3cpath%20d='M260-160q-91%200-155.5-63T40-377q0-78%2047-139t123-78q25-92%20100-149t170-57q117%200%20198.5%2081.5T760-520q69%208%20114.5%2059.5T920-340q0%2075-52.5%20127.5T740-160H260Zm0-80h480q42%200%2071-29t29-71q0-42-29-71t-71-29h-60v-80q0-83-58.5-141.5T480-720q-83%200-141.5%2058.5T280-520h-20q-58%200-99%2041t-41%2099q0%2058%2041%2099t99%2041Zm220-240Z'/%3e%3c/svg%3e";var ne=v('<meta name="description" content="Release miner extractable value (MEV) on Bitcoin Cash (BCH) from your browser!"/>'),se=v("<img/>"),ae=v('<img alt="Disconnected"/>'),ie=v('<div class="row svelte-1dhiv7e"><button class="svelte-1dhiv7e"><img/> <p class="svelte-1dhiv7e"> </p></button></div>'),oe=v("<p>No spendable outputs, check back in 10 minutes.</p>"),re=v('<div class="row svelte-1dhiv7e"><button disabled class="svelte-1dhiv7e"><img/> <p class="svelte-1dhiv7e"> </p></button></div>'),ce=v("<p>No pending transactions</p>"),le=v('<section class="svelte-1dhiv7e"><div class="status svelte-1dhiv7e"><!> <!></div> <p>Release miner extractable value (MEV) on Bitcoin Cash (BCH) from your browser!</p> <h3>Unspent Transaction Outputs (utxos)</h3> <div class="grid svelte-1dhiv7e"><!></div> <h3>Mempool Transactions</h3> <div class="grid svelte-1dhiv7e"><!></div> <!> <qr-code><img slot="icon"/></qr-code> <pre id="deposit"> </pre></section>',2);function Te(x,s){Tt(s,!1);let n=j([]),i,b="";b=y.getScriptHash();let V="",T=j(""),U=new Set,L,X=et.url.hostname=="vox.cash"?"bitcoincash":"bchtest",F=et.url.hostname=="vox.cash"?"bch.imaginary.cash":"chipnet.bch.ninja";const ot=()=>{clearTimeout(L),L=setTimeout(()=>{U=new Set},1e4)},rt=function(t){t.method==="blockchain.scripthash.subscribe"?t.params[1]!==V&&(V=t.params[1],k(T,W[i.status]),H()):console.log(t)},ct=async function(t){let e=await i.request("blockchain.transaction.broadcast",t);if(e instanceof Error)throw k(T,W[i.status]),e},lt=async function(t,e){let h=y.processOutpoint(t);U.add(`${t.tx_hash}":"${t.tx_pos}`),ot();let d=st(at(h)),l=qt(st(Vt(at(h)))),m=Number(h.outputs[0].valueSatoshis);a(n).splice(e,1);let _=a(n).filter(o=>o.height>0||o.value<m?!0:o.value==m&&o.tx_hash<l).length;a(n).splice(_,0,{height:0,tx_hash:l,value:m}),k(n,a(n)),await ct(d)},H=async function(){let t=await i.request("blockchain.scripthash.listunspent",b,"exclude_tokens");if(t instanceof Error)throw t;let e=new Set(t.map(h=>`${h.tx_hash}":"${h.tx_pos}`));(a(n).length==0||U.intersection(e).size==0)&&k(n,t)};Et(async()=>{i=new K("unspent/drip","1.4.1",F),await i.connect(),i.on("notification",rt),await i.subscribe("blockchain.scripthash.subscribe",b),H()}),yt(async()=>{await new K("unspent/drip","1.4.1",F).disconnect()}),Dt();var N=le();Ut(t=>{var e=ne();kt.title="Drip Mine",u(t,e)});var D=r(N),Y=r(D);{var ut=t=>{var e=se();P(()=>{g(e,"src",ee),g(e,"alt",a(T))}),u(t,e)},pt=t=>{var e=ae();P(()=>g(e,"src",Rt)),u(t,e)};q(Y,t=>{a(T)=="CONNECTED"?t(ut):t(pt,!1)})}var ht=f(Y,2);Mt(ht,{get template(){return y.template}}),c(D);var B=f(D,6),dt=r(B);{var mt=t=>{var e=Q(),h=G(e);Z(h,1,()=>a(n).filter(d=>d.height>0),J,(d,l,m)=>{var _=ie(),o=r(_);o.__click=()=>lt(a(l),m);var O=r(o),I=f(O,2),C=r(I,!0);c(I),c(o),c(_),P((M,Pt)=>{g(O,"src",M),g(O,"alt",a(l).tx_hash),S(C,Pt)},[()=>tt(`0x${a(l).tx_hash}`),()=>Number(a(l).value).toLocaleString()],R),u(d,_)}),u(t,e)},vt=t=>{var e=oe();u(t,e)};q(dt,t=>{a(n).filter(e=>e.height>0).length>0?t(mt):t(vt,!1)})}c(B);var A=f(B,4),_t=r(A);{var ft=t=>{var e=Q(),h=G(e);Z(h,1,()=>a(n).filter(d=>d.height<=0),J,(d,l)=>{var m=re(),_=r(m),o=r(_),O=f(o,2),I=r(O,!0);c(O),c(_),c(m),P((C,M)=>{g(o,"src",C),g(o,"alt",a(l).tx_hash),S(I,M)},[()=>tt(`0x${a(l).tx_hash}`),()=>Number(a(l).value).toLocaleString()],R),u(d,m)}),u(t,e)},gt=t=>{var e=ce();u(t,e)};q(_t,t=>{a(n).filter(e=>e.height<=0).length>0?t(ft):t(gt,!1)})}c(A);var $=f(A,2);Ft($);var p=f($,2);E(p,"id","qr1"),P(()=>E(p,"contents",y.getAddress(X))),E(p,"module-color","#000"),E(p,"position-ring-color","#0052ef"),E(p,"position-center-color","#b7ffff"),E(p,"mask-x-to-y-ratio","1.2"),Nt(p,`width: 150px;
									height: 150px;
									margin: 0.5em auto;
									background-color: #fff;`);var bt=r(p);c(p);var z=f(p,2),Ot=r(z,!0);c(z),c(N),P(t=>{g(bt,"src",te),S(Ot,t)},[()=>y.getAddress(X)],R),u(x,N),It()}wt(["click"]);export{Te as component,xe as universal};
//# sourceMappingURL=4.Bkv28Rwd.js.map
