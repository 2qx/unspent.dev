import{f as N,a as v}from"../chunks/DTc5U4eY.js";import{o as Z,a as tt}from"../chunks/_R59KZhj.js";import{aA as et,p as nt,aB as g,ao as R,a as it,c as D,s as F,ak as l,I as s,r as L,t as q}from"../chunks/CQU5mOuk.js";import{i as at}from"../chunks/CZ0rTjPC.js";import{s as S}from"../chunks/-rOGAMhN.js";import{p as ot}from"../chunks/DTgAlA_j.js";import"../chunks/CuzQ0eOn.js";import{B as st,t as rt}from"../chunks/BJU95o3T.js";import{B as ct}from"../chunks/wizixRDq.js";import{C as ut}from"../chunks/B7hCbxZp.js";import{D as lt}from"../chunks/DMvn4Q5j.js";import{e as pt,M as dt,g as ht,m as X,h as k,D as mt,E as gt,b as U,j as K,k as ft,N as T,r as H,a as A,l as M,p as Ot,v as bt,t as kt}from"../chunks/7pzU5MXi.js";import{d as yt}from"../chunks/D0fu8l11.js";import{$ as V,a as _t}from"../chunks/BDt1pbpk.js";import{I as Pt,B as Tt,W as It,T as Et,g as vt}from"../chunks/DIv74_lv.js";const Ut=(y=!0)=>pt(dt(y)),Nt=!0,oe=Object.freeze(Object.defineProperty({__proto__:null,prerender:Nt},Symbol.toStringTag,{value:"Module"}));var xt=N('<h3>About Subscriptions</h3> <p>Setup subscriptions paying in CashTokens for regular payments to a pre-defined address.</p> <p>Subscribers can cancel at any time and withdraw the balance of the pre-paid fund using an NFT “key card”.</p> <p>More about the <a href="https://bitcoincashresearch.org/t/unspent-phi-v3-timelocking-token-aware-contracts/1501#subscriptions-share-vesting-revocable-token-annuities-3" rel="nofollow">contract here</a></p> <h3>See Also:</h3> <p><a href="https://github.com/KarolTrzeszczkowski/Mecenas-recurring-payment-EC-plugin" rel="nofollow">Mecenas</a> by Karol Trzeszczkowski (Licho#14431)</p>',1);function wt(y){var e=xt();et(10),v(y,e)}const Bt="https://libauth.org/schemas/wallet-template-v0.schema.json",St="Subscription: a CashToken contract for recurring automatic payments.",At="Subscription",Ct={covenant:{description:`Hold asset in escrow for a subscription. 

Regular installments will be made automatically at regular intervals. The balance can be administered with authorizing NFT baton.`,name:"Subscription Vault",scripts:["lock","execute","administer"],variables:{auth:{description:"CashToken Category of the NFT series administering the subscription.",name:"Authentication Token Category",type:"WalletData"},period:{description:"The time period between installment payments.",name:"Period",type:"WalletData"},recipient:{description:"The entity the subscription will pay.",name:"Recipient",type:"WalletData"},installment:{description:"The installment value, denominated in CashTokens.",name:"Installment",type:"WalletData"}}},wallet:{description:"Standard p2pkh wallet controlling the exchange minting NFT baton",name:"Exchange Owner",scripts:["wallet_unlock","wallet_lock"],variables:{key:{description:"The private key that controls this wallet.",name:"Key",type:"HdKey"}}}},Rt={base:{data:{bytecode:{installment:"1000",auth:"0xefbe00000000000000000000000000000000000000000000000000000000adde",period:"144",recipient:"0xa914e78564d75c446f8c00c757a2bd783d30c4f0819a87"}},description:"",name:"Base Scenario"},release:{data:{bytecode:{locktime:"144",recipient:"0xa914e78564d75c446f8c00c757a2bd783d30c4f0819a87",installment:"1000",auth:"0xefbe00000000000000000000000000000000000000000000000000000000adde"}},description:"",extends:"base",name:"Release Assets",transaction:{inputs:[{unlockingBytecode:["slot"],sequenceNumber:144}],outputs:[{lockingBytecode:"a914e78564d75c446f8c00c757a2bd783d30c4f0819a87",valueSatoshis:800,token:{amount:"1000",category:"242f6ecedb404c743477e35b09733a56cacae34f3109d5cee1cbc1d5630affd7"}},{lockingBytecode:{script:"lock"},valueSatoshis:5e3,token:{amount:"99000",category:"242f6ecedb404c743477e35b09733a56cacae34f3109d5cee1cbc1d5630affd7"}}],locktime:11,version:2},sourceOutputs:[{lockingBytecode:["slot"],valueSatoshis:1e4,token:{amount:"100000",category:"242f6ecedb404c743477e35b09733a56cacae34f3109d5cee1cbc1d5630affd7"}}]},withdraw:{data:{bytecode:{locktime:"144",recipient:"0xa914e78564d75c446f8c00c757a2bd783d30c4f0819a87",installment:"1000",auth:"0xefbe00000000000000000000000000000000000000000000000000000000adde"}},description:"",extends:"base",name:"Cancel Subscription",transaction:{inputs:[{unlockingBytecode:{script:"wallet_unlock"},sequenceNumber:144},{unlockingBytecode:["slot"],sequenceNumber:144}],outputs:[{valueSatoshis:800,token:{category:"dead00000000000000000000000000000000000000000000000000000000beef",nft:{capability:"minting"}}},{lockingBytecode:{script:"lock"},valueSatoshis:1e4,token:{amount:"99000",category:"242f6ecedb404c743477e35b09733a56cacae34f3109d5cee1cbc1d5630affd7"}}],locktime:11,version:2},sourceOutputs:[{lockingBytecode:{script:"wallet_lock"},valueSatoshis:800,token:{category:"dead00000000000000000000000000000000000000000000000000000000beef",nft:{capability:"minting"}}},{lockingBytecode:["slot"],valueSatoshis:10800,token:{amount:"100000",category:"242f6ecedb404c743477e35b09733a56cacae34f3109d5cee1cbc1d5630affd7"}}]}},Dt={execute:{passes:["release"],name:"Process Installment",script:"",unlocks:"lock"},administer:{passes:["withdraw"],name:"Administer",script:"",unlocks:"lock"},wallet_unlock:{name:"Unlock",script:`<key.schnorr_signature.all_outputs>
<key.public_key>`,unlocks:"wallet_lock"},wallet_lock:{lockingType:"standard",name:"P2PKH Lock",script:`OP_DUP
OP_HASH160 <$(<key.public_key> OP_HASH160
)> OP_EQUALVERIFY
OP_CHECKSIG`},lock:{lockingType:"p2sh32",name:"Subscription Covenant",script:` <installment> <recipient> <period> <auth> 
    
// Unspent Phi
//
// Subscription v3 
//
// Subscription: Schedule regular token payments
//
// A contract for anyone-can-spend MEV-powered token payments, managed by NFT baton.
// 
// - Vestment of shares at regular intervals.
// - Monthly or weekly "stable" coin denominated subscriptions.
// - Revocable bitcoin annuities via wrapped bitcoin tokens.
//
// The commitment for NFT serialization is:
//
// <"U3S"><\${installment}><0x\${recipient}><\${period}>
// 
// ...

// contract Subscription(

  
// Category of the authenticating baton
  // The auth baton is managed by the wallet of the user, 
  // The contract is agnostic of the token paid to the receipt.
  // bytes32 authCat,

  // payment interval (blocks)
  // int period,

  // LockingBytecode of the beneficiary, the address receiving payments
  // bytes recipientLockingBytecode,

  // Amount of tokens being vested each period 
  // int installment,
    
// ) {
  // 
  // function execute() {

    OP_0 OP_UTXOTOKENCATEGORY OP_SWAP OP_2 OP_CAT OP_EQUAL OP_IF 
    // if(tx.inputs[0].tokenCategory == authCat + 0x02){
         // threads are unencumbered if the minting baton is in the first input
    // }
    OP_ELSE 
    // else{

      // Require version 2 for BIP68 support 
      // OP_TXVERSION OP_2 OP_NUMEQUALVERIFY 
      // require(tx.version == 2);
      
      // Require a rolling timelock is satisfied
      // OP_DUP OP_CHECKSEQUENCEVERIFY OP_DROP
      // require(tx.age >= period);

      // Require payment in the same token
      // OP_INPUTINDEX OP_OUTPUTTOKENCATEGORY OP_INPUTINDEX OP_UTXOTOKENCATEGORY OP_EQUALVERIFY 
      // require(tx.outputs[this.activeInputIndex].tokenCategory == tx.inputs[this.activeInputIndex].tokenCategory);

      // Require that each output sends to the intended recipient
      // OP_INPUTINDEX OP_OUTPUTBYTECODE OP_2 OP_PICK OP_EQUALVERIFY 
      // require(tx.outputs[this.activeInputIndex].lockingBytecode == recipientLockingBytecode);

      // Require minimum token dust  
      // OP_INPUTINDEX OP_OUTPUTVALUE <800> OP_NUMEQUALVERIFY 
      // require(tx.outputs[this.activeInputIndex].value == 800);

      // If not enough tokens remain to fulfill an installment,
      OP_INPUTINDEX OP_UTXOTOKENAMOUNT OP_3 OP_PICK OP_LESSTHANOREQUAL OP_IF 
      // if(tx.inputs[this.activeInputIndex].tokenAmount <= installment){

          // require token liquidation
          // OP_INPUTINDEX OP_OUTPUTTOKENAMOUNT OP_INPUTINDEX OP_UTXOTOKENAMOUNT OP_NUMEQUALVERIFY 
          // require(tx.outputs[this.activeInputIndex].tokenAmount == tx.inputs[this.activeInputIndex].tokenAmount);

      // } 
      OP_ELSE
      // else{
          // Require that installment paid
          // OP_INPUTINDEX OP_OUTPUTTOKENAMOUNT OP_3 OP_PICK OP_NUMEQUALVERIFY 
          // require(tx.outputs[this.activeInputIndex].tokenAmount == installment);

          // Push the index of the output
          OP_INPUTINDEX OP_TXINPUTCOUNT OP_ADD 
          // int outIndex = this.activeInputIndex + tx.inputs.length;

          // Require the executor fee is not excessive 
          // OP_DUP OP_OUTPUTVALUE OP_INPUTINDEX OP_UTXOVALUE <5000> OP_SUB OP_NUMEQUALVERIFY
          // require(tx.outputs[outIndex].value == tx.inputs[this.activeInputIndex].value - 5000);
              
          // Require that the token remainder after installment is returned
          // OP_DUP OP_OUTPUTTOKENAMOUNT OP_INPUTINDEX OP_UTXOTOKENAMOUNT OP_5 OP_PICK OP_SUB OP_NUMEQUALVERIFY 
          // require(tx.outputs[outIndex].tokenAmount == tx.inputs[this.activeInputIndex].tokenAmount - installment);

          // Require the token category is identical
          // OP_DUP OP_OUTPUTTOKENCATEGORY OP_INPUTINDEX OP_UTXOTOKENCATEGORY OP_EQUALVERIFY 
          // require(tx.outputs[outIndex].tokenCategory == tx.inputs[this.activeInputIndex].tokenCategory);

          // Require the second output match the active bytecode
          // OP_DUP OP_OUTPUTBYTECODE OP_INPUTINDEX OP_UTXOBYTECODE OP_EQUALVERIFY 
          // require(tx.outputs[outIndex].lockingBytecode == tx.inputs[this.activeInputIndex].lockingBytecode);
      // } 
      OP_DROP

    // } 
    OP_ENDIF

  // } 
  OP_ENDIF OP_2DROP OP_DROP OP_1

// }
//`}},Ft=["BCH_2023_05","BCH_2025_05","BCH_2026_05","BCH_SPEC"],Lt={$schema:Bt,description:St,name:At,entities:Ct,scenarios:Rt,scripts:Dt,supported:Ft},qt="@unspent/subscription",Xt={name:qt};class E{static USER_AGENT=Xt.name;static PROTOCOL_IDENTIFIER="U3S";static EXECUTOR_FEE=5e3;static tokenAware=!0;static template=Lt;static compiler=ht(this.template);static vm=Ut();static dataToBytecode(e){return{installment:X(e.installment),recipient:e.recipient,period:X(BigInt(e.period)),auth:new Uint8Array(e.auth).reverse()}}static parseNFT(e){if(e.token_data?.nft?.commitment){let t=yt(k(e.token_data?.nft?.commitment));if(mt(t[0])!==this.PROTOCOL_IDENTIFIER)throw Error("Non-subscription record NFT passed as subscription");return{installment:t[1],recipient:t[2],period:t[3],auth:k(e.token_data.category)}}else throw Error("Could not parse subscription NFT")}static encodeCommitment(e){let t=gt(`<"${this.PROTOCOL_IDENTIFIER}"><${e.installment}><0x${U(e.recipient)}><${e.period}>`);if(typeof t=="string")throw t;return U(t)}static getLockingBytecode(e){const t=this.compiler.generateBytecode({data:{bytecode:e},scriptId:"lock"});if(!t.success)throw new Error("Failed to generate bytecode, script: , "+JSON.stringify(t,null,"  "));return t.bytecode}static getUnlockingBytecode(e){const t=this.compiler.generateBytecode({data:{bytecode:e},scriptId:"execute"});if(!t.success)throw new Error("Failed to generate bytecode, script: , "+JSON.stringify(t,null,"  "));return t.bytecode}static getScriptHash(e,t=!0){let o=this.dataToBytecode(e);return K(this.getLockingBytecode(o),t)}static getAddress(e,t="bitcoincash"){let o=this.dataToBytecode(e);return ft(this.getLockingBytecode(o),t,this.tokenAware)}static getSourceOutput(e,t){return{lockingBytecode:this.getLockingBytecode(e),valueSatoshis:BigInt(t.value),token:t.token_data?{category:k(t.token_data.category),amount:BigInt(t.token_data.amount)}:void 0}}static getInput(e,t,o){return{outpointIndex:t.tx_pos,outpointTransactionHash:k(t.tx_hash),sequenceNumber:o,unlockingBytecode:{data:{bytecode:e},compiler:this.compiler,script:"execute",valueSatoshis:BigInt(t.value),token:t.token_data?{category:k(t.token_data.category),amount:BigInt(t.token_data.amount)}:void 0}}}static getInstallmentOutput(e,t){let o=T(e.installment);if(typeof o=="string")throw o;return BigInt(t.token_data?.amount)<o&&(o=BigInt(t.token_data?.amount)),{lockingBytecode:e.recipient,valueSatoshis:800n,token:t.token_data?{category:k(t.token_data.category),amount:o}:void 0}}static getReturnOutput(e,t){let o=T(e.installment);if(typeof o=="string")throw o;return{lockingBytecode:{data:{bytecode:e},compiler:this.compiler,script:"lock"},valueSatoshis:BigInt(t.value-this.EXECUTOR_FEE),token:t.token_data?{category:k(t.token_data.category),amount:BigInt(t.token_data.amount)-o}:void 0}}static getExecutorOutput(e,t){let o=H(e);if(typeof o=="string")throw o;return{lockingBytecode:o.bytecode,valueSatoshis:BigInt(t)}}static execute(e,t,o,x=1){const P=[],I=[];let b=[],r={locktime:0,version:2,inputs:P,outputs:I};for(let n of e){let i=this.parseNFT(n.record);if(n.utxo.height>0&&n.utxo.value>5800){const d=t-n.utxo.height,m=A(i.period),u=T(i.installment);if(typeof u=="string")throw u;d>=m&&BigInt(n.utxo.token_data?.amount)>=u&&(r.inputs.push(this.getInput(i,n.utxo,d)),r.outputs.push(this.getInstallmentOutput(i,n.utxo)),b.push(this.getSourceOutput(i,n.utxo)))}}for(let n of e){let i=this.parseNFT(n.record);if(n.utxo.height>0&&n.utxo.value>5800){const d=t-n.utxo.height,m=A(i.period),u=T(i.installment);if(typeof u=="string")throw u;d>=m&&BigInt(n.utxo.token_data?.amount)>=u&&r.outputs.push(this.getReturnOutput(i,n.utxo))}}for(let n of e){let i=this.parseNFT(n.record);if(n.utxo.height>0&&n.utxo.value>5800){const d=t-n.utxo.height,m=A(i.period),u=T(i.installment);if(typeof u=="string")throw u;d>=m&&BigInt(n.utxo.token_data?.amount)<u&&(r.inputs.push(this.getInput(i,n.utxo,d)),r.outputs.push(this.getInstallmentOutput(i,n.utxo)),b.push(this.getSourceOutput(i,n.utxo)))}}o&&r.inputs.length>0&&r.outputs.push(this.getExecutorOutput(o,r.inputs.length*(this.EXECUTOR_FEE-800)));let p=M(r);if(!p.success)throw new Error("generate transaction failed!, errors: "+JSON.stringify(p.errors,null,"  "));if(o&&r.inputs.length>0){const n=Ot(p.transaction,x)+1n,i=r.outputs.length-1;r.outputs[i].valueSatoshis=r.outputs[i].valueSatoshis-n}if(p=M(r),!p.success)throw new Error("generate transaction failed!, errors: "+JSON.stringify(p.errors,null,"  "));const h=p.transaction,f=bt(h,b,{maximumTokenCommitmentLength:40});if(f!==!0)throw f;let O=this.vm.verify({sourceOutputs:b,transaction:h});if(typeof O=="string")throw O;return{sourceOutputs:b,transaction:h,verify:O}}}var Mt=N("<img/>"),Vt=N('<img alt="Disconnected"/>'),Kt=N('<section><div class="status svelte-1jejjaq"><!> <!></div> <!></section>');function se(y,e){nt(e,!0);const t=ot.url.hostname=="vox.cash";t?U(st):U(rt);const o=t?"bch.imaginary.cash":"chipnet.bch.ninja";let x=g(0),P=g(""),I=g(""),b=g(0),r=new Set,p=0,h,f=g(R([])),O=g(R([])),n=g(""),i=g(void 0),d="",m=g("");const u=async function(a){if(a.method==="blockchain.headers.subscribe"){let c=a.params[0];l(x,c.height,!0)}else a.method==="blockchain.scripthash.subscribe"?a.params[1]!==s(I)&&(l(I,a.params[1],!0),l(P,_t[s(i).status],!0),Y()):console.log(a)},Y=()=>{clearTimeout(p),p=setTimeout(()=>{$(),Q()},1500)},$=async function(){let a=await s(i).request("blockchain.scripthash.listunspent",s(m),"include_tokens");if(a instanceof Error)throw a;l(O,a,!0),l(b,kt(s(O),!0),!0),l(O,s(O).filter(c=>!c.token_data).filter(c=>c.height>0),!0)},Q=async function(){let a=await s(i).request("blockchain.scripthash.listunspent",d,"include_tokens");if(a instanceof Error)throw a;let c=new Set(a.map(_=>`${_.tx_hash}":"${_.tx_pos}`));(s(f).length==0||r.intersection(c).size==0)&&l(f,a,!0),l(f,s(f).filter(_=>_.height>0),!0),s(f).sort((_,J)=>_.height-J.height)};Z(async()=>{Tt.StorageProvider=Pt,h=t?await It.named("vox"):await Et.named("vox"),l(n,vt(h.mnemonic,h.derivationPath.slice(0,-2),h.isTestnet),!0);let a=H(h.getDepositAddress());if(typeof a=="string")throw a;l(m,K(a.bytecode),!0);let c={installment:100n,period:0,recipient:a.bytecode,auth:Uint8Array.from([])};E.getAddress(c),l(i,new V(E.USER_AGENT,"1.4.1",o),!0),await s(i).connect(),s(i).on("notification",u),await s(i).subscribe("blockchain.scripthash.subscribe",d),await s(i).subscribe("blockchain.scripthash.subscribe",s(m)),await s(i).subscribe("blockchain.headers.subscribe")}),tt(async()=>{await new V(E.USER_AGENT,"1.4.1",o).disconnect()});var w=Kt(),B=D(w),C=D(B);ct(C,{get template(){return E.template}});var W=F(C,2);{var z=a=>{var c=Mt();q(()=>{S(c,"src",ut),S(c,"alt",s(P))}),v(a,c)},j=a=>{var c=Vt();q(()=>S(c,"src",lt)),v(a,c)};at(W,a=>{s(P)=="CONNECTED"?a(z):a(j,!1)})}L(B);var G=F(B,2);wt(G),L(w),v(y,w),it()}export{se as component,oe as universal};
//# sourceMappingURL=14.Hw0wmNS0.js.map
