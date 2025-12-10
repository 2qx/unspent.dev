import{f as d,a as p}from"../chunks/XvlwOJnc.js";import{au as y,p as k,a as v,c as h,s as g,r as f,t as b}from"../chunks/DxC-DXyg.js";import{i as O}from"../chunks/BHgS7gba.js";import{s as _}from"../chunks/pRBOUext.js";import"../chunks/BlpsyBqK.js";import{B as T,D as E}from"../chunks/BVHnuvE_.js";import{k as x,F as I,m as l,u as S,p as P,q as B,C as R,E as U,b as N,G as A}from"../chunks/CtpAz0-D.js";import{c as C}from"../chunks/TY_4cQK7.js";const w=!0,re=Object.freeze(Object.defineProperty({__proto__:null,prerender:w},Symbol.toStringTag,{value:"Module"}));var L=d('<h3>About SmallIndex</h3> <p>Small Index is a key-value database protocol for storage small entries (40-bytes or less) at a rate of 1 satoshi per block for up to a year.</p> <p>More information about <a href="https://bitcoincashresearch.org/t/a-small-key-value-index-contract/1471" rel="nofollow">the contract</a></p>',1);function D(r){var e=L();y(4),p(r,e)}const q="https://libauth.org/schemas/wallet-template-v0.schema.json",H="Small Index: A distributed key-value database system.",V="SmallIndex",F={small_index_covenant:{description:`Store data records in NFT commitments. 

Each "key" corresponds to a different contract address, where the token balance stores the values for that key. Each record exists in the data commitment of a non-fungible token of any category (currently 40 bytes in length). Each record pays a flat storage fee of one satoshi per block. Expired records can be burned by anyone to benefit the party mining the next block.

 The Small Index covenant defines a storage mechanism, but the schema for data within the records is left to application designers. Since anyone may write to any record, applications must verify all claims, or use an authorization scheme to validate data.`,name:"Small Index Covenant",scripts:["unlock"],variables:{key:{description:"Bytes representing the key of the index. Each new key results in a new covenant address. ",name:"Key",type:"WalletData"}}}},M={drop:{data:{bytecode:{key:""}},description:"Drop a expired record value from the dataset. This spending pathway 'burns' token data as an return operation (OP_RETURN) output, and releases the satoshi value to be claimed by the party mining the next block.",name:"Record drop",transaction:{locktime:0,inputs:[{outpointTransactionHash:"0e09765ada34fa0bd94ef9df8497173e8aefc560f3eb7c9e0e88b345c4cccb36",outpointIndex:0,unlockingBytecode:["slot"],sequenceNumber:500}],outputs:[{lockingBytecode:{script:"op_return"}}],version:2},sourceOutputs:[{lockingBytecode:["slot"],valueSatoshis:500,token:{nft:{commitment:"0x6a<TST><'Hello World'>"}}}]}},j={unlock:{passes:["drop"],name:"Drop Record",script:`// Dropping a record is authorized 
// using only introspection from properties of 
// the expired record unspent output.`,timeLockType:"height",unlocks:"lock"},op_return:{lockingType:"standard",name:"Return Operation",script:"OP_RETURN"},lock:{lockingType:"p2sh32",name:"Small Index Locking Script",script:`// pragma cashscript 0.10.0;

// Small Index 
// 
// A subscription based key-value index 
//

// Including the key here creates a different covenant for each key-value
<key> OP_DROP
// contract SmallIndex(bytes key) {
    
    // Secure outputs with data in token commitments for a given key.
    // 
    // All entries pay a fixed storage fee of 1 satoshi per block. 
    //
    // If an entry has expired, miners may drop it.
    //
    // Miners can drop many expired entires at once.
    //

// function drop() {

// Require each input age be higher than the utxo value
    OP_INPUTINDEX OP_UTXOVALUE OP_CHECKSEQUENCEVERIFY OP_DROP
// require(tx.age >= tx.inputs[this.activeInputIndex].value);

// See TokenBurner - Dagur Valberg Johannsson
//
// Require a single output
   OP_TXOUTPUTCOUNT OP_1 OP_NUMEQUALVERIFY 
// require(tx.outputs.length == 1);

// Without BCH
   OP_0 OP_OUTPUTVALUE OP_0 OP_NUMEQUALVERIFY
// require(tx.outputs[0].value == 0);

// Without tokens
   OP_0 OP_OUTPUTTOKENCATEGORY OP_0 OP_EQUALVERIFY
// require(tx.outputs[0].tokenCategory == 0x);

// As an empty OP_RETURN
   OP_0 OP_OUTPUTBYTECODE <0x6a> OP_EQUAL
// require(tx.outputs[0].lockingBytecode == 0x6a);

//    }
// }`}},Y=["BCH_2023_05","BCH_SPEC"],Q=0,W={$schema:q,description:H,name:V,entities:F,scenarios:M,scripts:j,supported:Y,version:Q},$="@unspent/small",z={name:$};class G{static USER_AGENT=z.name;static PROTOCOL_IDENTIFIER="U3R";static VERSION="1.0.0";static tokenAware=!0;static template=W;static compiler=x(this.template);static vm=C();static getLockingBytecode(e){typeof e=="string"&&(I(e)?e=l(e):e=S(e));const t=this.compiler.generateBytecode({data:{bytecode:{key:e}},scriptId:"lock"});if(!t.success)throw new Error("Failed to generate bytecode, script: , "+JSON.stringify(t,null,"  "));return t.bytecode}static getScriptHash(e,t=!0){return P(this.getLockingBytecode(e),t)}static getAddress(e,t="bitcoincash"){return B(this.getLockingBytecode(e),t,this.tokenAware)}static getSourceOutput(e,t){return{lockingBytecode:this.getLockingBytecode(e),valueSatoshis:BigInt(t.value)}}static getInput(e,t){return{outpointIndex:t.tx_pos,outpointTransactionHash:l(t.tx_hash),sequenceNumber:t.value,unlockingBytecode:{data:{bytecode:{key:l(e)}},compiler:this.compiler,script:"unlock",valueSatoshis:BigInt(t.value)}}}static getOutput(){return{lockingBytecode:{data:{},compiler:this.compiler,script:"op_return"},valueSatoshis:BigInt(0)}}static drop(e,t){let a={locktime:0,version:2,inputs:[],outputs:[]};a.inputs.push(this.getInput(e,t)),a.outputs.push(this.getOutput());let o=R(a);if(!o.success)throw new Error("generate transaction failed!, errors: "+JSON.stringify(o.errors,null,"  "));const c=[this.getSourceOutput(e,t)],n=o.transaction,s=U(n,c,{maximumTokenCommitmentLength:40});if(s!==!0)throw s;let m=this.vm.verify({sourceOutputs:c,transaction:n});if(typeof m=="string")throw m;return N(A(n))}}var J=d('<img alt="Disconnected"/>'),X=d('<section><div class="status svelte-1jejjaq"><!> <!></div> <!></section>');function ie(r,e){k(e,!0);var t=X(),i=h(t),u=h(i);T(u,{get template(){return G.template}});var a=g(u,2);{var o=n=>{var s=J();b(()=>_(s,"src",E)),p(n,s)};O(a,n=>{n(o,!1)})}f(i);var c=g(i,2);D(c),f(t),p(r,t),v()}export{ie as component,re as universal};
//# sourceMappingURL=7.Cono0d30.js.map
