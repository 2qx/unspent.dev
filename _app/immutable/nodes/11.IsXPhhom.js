import{f as m,a as h}from"../chunks/he3immRh.js";import{o as M,a as w}from"../chunks/DQDK4gBi.js";import{aI as L,p as K,a as H,m as V,c as A,s as b,aG as X,w as v,a_ as q,r as C,ap as Y,t as B}from"../chunks/Brfiz_bE.js";import{i as F}from"../chunks/D4zZsfmr.js";import{h as G}from"../chunks/B-VzXoZa.js";import{a as E}from"../chunks/DyLqUHww.js";import{p as Q}from"../chunks/D6rUH6uo.js";import{h as r,g as W,k as j,l as z,n as R,I as $,J,K as Z,L as ee,M as te,N as ne,p as D,m as ae,O as oe,P as se,B as ie,v as re,s as S,r as N}from"../chunks/DV8mz8xb.js";import{c as de}from"../chunks/1xildkOo.js";import{e as ce,C as Oe}from"../chunks/hh7Yrpmc.js";import"../chunks/DECx5bil.js";import{B as Pe}from"../chunks/DISC1ZpF.js";import{C as ue}from"../chunks/B7hCbxZp.js";import{D as le}from"../chunks/DMvn4Q5j.js";const _e=!0,Fe=Object.freeze(Object.defineProperty({__proto__:null,prerender:_e},Symbol.toStringTag,{value:"Module"})),Te="https://libauth.org/schemas/wallet-template-v0.schema.json",fe="Photons: A minable CashToken and decentralized energy oracle",he="Photons",me={covenant:{description:"Emit tokens if a transaction hash is low enough. Or, alternatively, allow anyone to use the vault thread as an oracle for a fee.",name:"Photon Vault",scripts:["lock","unlock"],variables:{age:{description:"The input age (as a number of blocks) claimed to withdraw tokens. The maximum age that can be used to claim tokens is the lessor of covenant thread age or user coins age being used to release tokens.",name:"Age",type:"WalletData"}}},miner:{description:"",name:"Mining Entity",scripts:["unlock","lock"],variables:{miner_key:{description:"The private key that controls this wallet.",name:"Key",type:"HdKey"}}},wallet:{description:"",name:"Funding Entity",scripts:["wallet_unlock","wallet_lock"],variables:{key:{description:"The private key that controls this wallet.",name:"Key",type:"HdKey"}}}},pe={release:{data:{bytecode:{age:"0"}},description:"",name:"Release Tokens",transaction:{inputs:[{outpointTransactionHash:"ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",outpointIndex:0,unlockingBytecode:["slot"],sequenceNumber:0}],outputs:[{lockingBytecode:{script:"lock"},valueSatoshis:1200,token:{amount:"2099995000000001",category:"deaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddead",nft:{capability:"mutable",commitment:"123456781f815ab0fb6d8064933edfa60e48ccccc2df9c2b055ba6182b0f3ee989811b7fdeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeadad"}}},{lockingBytecode:{script:"wallet_lock"},valueSatoshis:675,token:{amount:"4999999999",category:"deaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddead"}}],locktime:0,version:2},sourceOutputs:[{lockingBytecode:["slot"],valueSatoshis:2375,token:{amount:"2100000000000000",category:"deaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddead",nft:{capability:"mutable",commitment:"040000009863bfb8140e6a63bfb8140e6a63bfb8140e6a63bfb8140e6a63bfb8140effffdeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddead0000000012341234ffffffff"}}}]}},Ie={unlock:{passes:["release"],name:"Unlock Tokens",script:`<miner_key.public_key> <age> //
`,unlocks:"lock"},wallet_unlock:{name:"Wallet Unlock",script:"<key.schnorr_signature.all_outputs> <key.public_key>",unlocks:"wallet_lock"},lock:{lockingType:"p2sh32",name:"Photon Covenant",script:`  // pragma cashscript >= 0.10.0;

  // v2026072130

  // A token faucet with proof of work.
  // contract Photon() {

    // function emit(int age) {
        
        // Force a version two transaction
        OP_TXVERSION OP_2 OP_NUMEQUALVERIFY 
        // require(tx.version == 2);
        
        // Check the purported time has passed and that time locks are enabled
        OP_DUP OP_CHECKSEQUENCEVERIFY OP_DROP 
        // require(this.age >= age);

        // require the age passed be block based
        OP_DUP <65535> OP_LESSTHAN OP_VERIFY
        // require(age < 65535);
        
        // Require the thread lives on
        OP_INPUTINDEX OP_OUTPUTBYTECODE 
        OP_INPUTINDEX OP_UTXOBYTECODE OP_EQUALVERIFY 
        // require(tx.outputs[this.activeInputIndex].lockingBytecode == tx.inputs[this.activeInputIndex].lockingBytecode);

        // Require the same token lives on
        OP_INPUTINDEX OP_OUTPUTTOKENCATEGORY 
        OP_INPUTINDEX OP_UTXOTOKENCATEGORY OP_EQUALVERIFY 
        // require(tx.outputs[this.activeInputIndex].tokenCategory == tx.inputs[this.activeInputIndex].tokenCategory);

        // If the baton is being used as an oracle ...
        OP_TXINPUTCOUNT OP_1 OP_GREATERTHAN OP_IF 
        // if(tx.inputs.length > 1){
           
            // Require the oracle user pays an 8000 sat fee 
            OP_INPUTINDEX OP_OUTPUTVALUE <8000> OP_ADD 
            OP_INPUTINDEX OP_UTXOVALUE OP_GREATERTHANOREQUAL OP_VERIFY 
            // require(tx.outputs[this.activeInputIndex].value + 8000 >= tx.inputs[this.activeInputIndex].value);

            // The NFT commitment (difficulty+nonce) must not change
            OP_INPUTINDEX OP_OUTPUTTOKENCOMMITMENT 
            OP_INPUTINDEX OP_UTXOTOKENCOMMITMENT OP_EQUALVERIFY 
            // require(tx.outputs[this.activeInputIndex].nftCommitment == tx.inputs[this.activeInputIndex].nftCommitment);

            // The number of fungible tokens must not changed
            OP_INPUTINDEX OP_OUTPUTTOKENAMOUNT 
            OP_INPUTINDEX OP_UTXOTOKENAMOUNT OP_NUMEQUALVERIFY 
            // require(tx.outputs[this.activeInputIndex].tokenAmount == tx.inputs[this.activeInputIndex].tokenAmount);

        // }

        // else (tx.inputs.length == 1)
        OP_ELSE 
        // else{

            // require exactly two outputs
            OP_TXOUTPUTCOUNT OP_2 OP_NUMEQUALVERIFY 
            // require(tx.outputs.length == 2);

            // Allow miner to take 1200 token dust, plus 400 network fee allowance 
            OP_INPUTINDEX OP_OUTPUTVALUE 
            OP_INPUTINDEX OP_UTXOVALUE <1500> OP_SUB OP_GREATERTHANOREQUAL OP_VERIFY 
            // require(tx.outputs[this.activeInputIndex].value >= tx.inputs[this.activeInputIndex].value - 1500);

            // The value on the miner output is enforced by the network 
            // OP_1 OP_OUTPUTVALUE <800> OP_EQUALVERIFY
            // ~~require(tx.outputs[1].value == 800);~~

            // Emission schedule
            // Allow a fraction of running token balance (plus one) to be withdrawn.
            // Target a four year half life.
            OP_INPUTINDEX OP_OUTPUTTOKENAMOUNT 
            OP_INPUTINDEX OP_UTXOTOKENAMOUNT 
            OP_INPUTINDEX OP_UTXOTOKENAMOUNT <420000> OP_DIV OP_SUB 
            OP_GREATERTHANOREQUAL OP_VERIFY
            // require(
            //     tx.outputs[this.activeInputIndex].tokenAmount >= 
            //     (tx.inputs[this.activeInputIndex].tokenAmount - 
            //     (tx.inputs[this.activeInputIndex].tokenAmount/420000))
            // );
        
            // Commitment length must be 4+32+65
            OP_INPUTINDEX OP_OUTPUTTOKENCOMMITMENT OP_SIZE OP_NIP <100> OP_NUMEQUALVERIFY 
            
            //require(tx.outputs[this.activeInputIndex].nftCommitment.length == 100);

            // Require the output carries the next target.
            // The nonce and nonce length is unrestricted.
            OP_INPUTINDEX OP_OUTPUTTOKENCOMMITMENT <36> OP_SPLIT 
            // bytes message, bytes signature = tx.outputs[this.activeInputIndex].nftCommitment.split(36);

            // Get the next target
            OP_OVER OP_4 OP_SPLIT OP_NIP 
            // bytes nextTargetBytes = message.split(4)[1];

            // Check the nonce and target are signed
            OP_OVER OP_3 OP_PICK OP_6 OP_PICK OP_CHECKDATASIGVERIFY 
            
            // require(checkDataSig(datasig(signature), message, pk));
            
            // Require the output carries the next target.
            OP_DUP OP_BIN2NUM OP_ABS 
            // int nextTarget = abs(int(nextTargetBytes));
                       
            // Pop the previous difficulty
            OP_INPUTINDEX OP_UTXOTOKENCOMMITMENT OP_4 OP_SPLIT OP_NIP <32> OP_SPLIT OP_DROP OP_BIN2NUM OP_ABS
            // int prevTarget = abs(int(tx.inputs[this.activeInputIndex].nftCommitment.split(4)[1].split(32)[0]));

            // The set the next target as a function of the previous target and age.
            // Target a once per block emission schedule
            // If the age is 0, lower the difficulty threshold ~0.7%
            // If the age is 1, keep the present difficulty
            // else, decrease difficulty in a linear manner  
            // Equality prevents setting next target to zero.
            // require(nextTarget == prevTarget * ((age + 143) /144));
            OP_2DUP OP_7  OP_PICK  <143000> OP_ADD OP_MUL <144000> OP_DIV OP_NUMEQUALVERIFY
          
            // Convert the token payout to a compact number
            OP_1 OP_OUTPUTTOKENAMOUNT OP_SIZE OP_NIP OP_4 OP_GREATERTHAN OP_IF 
            <0xff> OP_1 OP_OUTPUTTOKENAMOUNT OP_8 OP_NUM2BIN OP_CAT OP_NIP OP_ELSE 
            <0xfe> OP_1 OP_OUTPUTTOKENAMOUNT OP_4 OP_NUM2BIN OP_CAT OP_NIP OP_ENDIF
            // if(bytes(tx.outputs[1].tokenAmount).length > 8){
            //     rewardAmount = 0xff + bytes8(tx.outputs[1].tokenAmount);
            // } else{
            //     rewardAmount = 0xfe + bytes4(tx.outputs[1].tokenAmount);
            // }


            OP_TXVERSION OP_4 OP_NUM2BIN 
            OP_TXINPUTCOUNT OP_CAT 
            OP_0 OP_OUTPOINTTXHASH OP_CAT 
            OP_0 OP_OUTPOINTINDEX OP_4 OP_NUM2BIN OP_CAT 
            <0xfd> OP_CAT
            OP_0 OP_INPUTBYTECODE OP_SIZE OP_NIP OP_2 OP_SPLIT OP_DROP OP_CAT 
            OP_0 OP_INPUTBYTECODE OP_CAT 
            OP_0 OP_INPUTSEQUENCENUMBER OP_4 OP_NUM2BIN OP_CAT  
            OP_TXOUTPUTCOUNT OP_CAT 
            OP_0 OP_OUTPUTVALUE OP_8 OP_NUM2BIN OP_CAT 
            <0x9fef> OP_CAT
            OP_0 OP_OUTPUTTOKENCATEGORY <32> OP_SPLIT OP_DROP OP_CAT 
            // Return Baton HAS_COMMITMENT_LENGTH, HAS_NFT, HAS_AMOUNT, is MUTABLE
            <0b01110001> OP_CAT
            // Return commitment is always 80-bytes long
            <80> OP_CAT
            OP_0 OP_OUTPUTTOKENCOMMITMENT OP_CAT 
            // Assume vault has > 4-bytes of token value
            // Will break ctor gimmic eventually
            <0xff> OP_CAT
            OP_0 OP_OUTPUTTOKENAMOUNT OP_8 OP_NUM2BIN OP_CAT 
            OP_0 OP_OUTPUTBYTECODE OP_CAT
            OP_1 OP_OUTPUTVALUE OP_8 OP_NUM2BIN OP_CAT 
            <0x44ef> OP_CAT
            OP_1 OP_OUTPUTTOKENCATEGORY OP_CAT
            // Transaction token reward HAS_AMOUNT
            <0b00010000> OP_CAT 
            // get the token amoumnt
            OP_OVER OP_CAT 
            OP_1 OP_OUTPUTBYTECODE OP_CAT 
            OP_0 OP_4 OP_NUM2BIN OP_CAT 
            

            // Get this transaction hash
            OP_DUP OP_HASH256 <32> OP_SPLIT OP_DROP OP_BIN2NUM OP_ABS 
            // int nextHash = abs(int(hash256(preimage).split(32)[0]));
            // Drop the transaction 
            OP_NIP 
            // Drop reward amount
            OP_NIP
          
            // Assure this hash is below target
            OP_OVER OP_LESSTHAN OP_VERIFY
            // require(nextHash < nextTarget>);

        //}   
    //}
    OP_ENDIF OP_2DROP OP_2DROP OP_2DROP OP_1
  //}`},wallet_lock:{lockingType:"standard",name:"Wallet Lock",script:"OP_DUP OP_HASH160 <$(<key.public_key> OP_HASH160)> OP_EQUALVERIFY OP_CHECKSIG"},message_packet:{name:"Nonce & Target",script:"0xabcdef"}},ge=["BCH_2026_05"],Ee={$schema:Te,description:fe,name:he,entities:me,scenarios:pe,scripts:Ie,supported:ge},Ne="@unspent/photon",Ue={name:Ne},x=r("7fe0cd5197494e47ade81eb164dcdbd51859ffbe581fe4a818085d56b2f3062c");r("ffc9d3b3488e890ef113b1c74f40e1f5eb1147a7d4191cecac89fd515721a271");class U{static USER_AGENT=Ue.name;static tokenAware=!0;static template=Ee;static compiler=W(this.template);static vm=de();static getLockingBytecode(e={}){const t=this.compiler.generateBytecode({data:e,scriptId:"lock"});if(!t.success)throw new Error("Failed to generate bytecode, script: , "+JSON.stringify(t,null,"  "));return t.bytecode}static getScriptHash(e=!0){return j(this.getLockingBytecode(),e)}static getAddress(e="bitcoincash"){return z(this.getLockingBytecode(),e,this.tokenAware)}static getSourceOutput(e){return{lockingBytecode:this.getLockingBytecode(),valueSatoshis:BigInt(e.value),token:e.token_data?{category:r(e.token_data.category),amount:BigInt(e.token_data.amount),nft:e.token_data.nft?{commitment:r(e.token_data.nft.commitment),capability:e.token_data.nft.capability}:void 0}:void 0}}static getInput(e,t,o){return{outpointIndex:e.tx_pos,outpointTransactionHash:r(e.tx_hash),sequenceNumber:t,unlockingBytecode:{data:{bytecode:{age:R(BigInt(t))},hdKeys:{addressIndex:2,hdPrivateKeys:{miner:o}}},compiler:this.compiler,script:"unlock",valueSatoshis:BigInt(e.value),token:e.token_data?{category:r(e.token_data.category),amount:BigInt(e.token_data.amount),nft:e.token_data.nft?{commitment:r(e.token_data.nft.commitment),capability:e.token_data.nft.capability}:void 0}:void 0}}}static getOutput(e,t,o,n){let d=$(r(e.token_data?.nft?.commitment).slice(4,36));if(typeof d=="string")throw d;let T=d*(BigInt(o)+143000n)/144000n,l=Uint8Array.from([...r("00000000"),...J(T)]),_=Z.hash(l),c=ee(n);if(typeof c=="string")throw c;let u=te(c.node,2),s=ne.signMessageHashSchnorr(u.privateKey,_);if(typeof s=="string")throw s;return{lockingBytecode:{data:{bytecode:{age:R(BigInt(o))},hdKeys:{addressIndex:2,hdPublicKeys:{miner:D(n).hdPublicKey}}},compiler:this.compiler,script:"lock"},valueSatoshis:BigInt(e.value-1200),token:{category:r(e.token_data.category),amount:BigInt(e.token_data?.amount)-BigInt(t),nft:{capability:"mutable",commitment:Uint8Array.from([...l,...s])}}}}static getRewardOutput(e,t,o=0,n=x){return{lockingBytecode:t?{compiler:this.compiler,data:{hdKeys:{addressIndex:o,hdPublicKeys:{wallet:D(t).hdPublicKey}}},script:"wallet_lock"}:Uint8Array.from(Array(33)),valueSatoshis:800n,token:{category:n,amount:BigInt(e)}}}static claim(e,t,o,n,d=1){const T=[],l=[];let _=n?r(n):x,c=t.height<=0?0:e-t.height;const u=Math.floor(Number(BigInt(t.token_data.amount)/420000n))-1;let s={locktime:0,version:2,inputs:T,outputs:l};s.inputs.push(this.getInput(t,c,o)),s.outputs.push(this.getOutput(t,u,c,o)),s.outputs.push(this.getRewardOutput(u,o,0,_));let f=ae(s);if(!f.success)throw new Error("generate transaction failed!, errors: "+JSON.stringify(f.errors,null,"  "));const O=[this.getSourceOutput(t)],P=f.transaction;let I=this.vm.debug({inputIndex:0,sourceOutputs:O,transaction:P}),a=oe(se(I.slice(-9)));console.log(a),ie(P);const i=re(P,O,{maximumTokenCommitmentLength:128});if(i!==!0&&d>0)throw i;let g=this.vm.verify({sourceOutputs:O,transaction:P}),k=S(O)-S(P.outputs);k>5e3&&(g=`Excessive fees ${k}`),N(O,n)==0n&&(g="Error checking token input");let y=N(O,n)-N(P.outputs,n);if(y!==0n)throw Error(`Claiming should not create or destroy tokens, token difference: ${y}`);return{sourceOutputs:O,transaction:P,verify:g}}}var ke=m("<h1>About Photons</h1> <p>Photon tokens are a fairly distributed minable (sha256) CashToken creating a decentralized energy oracle.</p> <p>Anyone can utilize excess electricity to work to emit Photons (PHOTON) from the vault contract. Photons are released from the vault when someone finds the hash of the transaction is below a certain difficulty threshold. The vault contract also allows anyone to use the price baton for a fee (8000 sats).</p> <h2>What is the PoW?</h2> <p>The PoW algorithm for Photons is double sha256</p>",1);function ye(p){var e=ke();L(8),h(p,e)}var Ae=m('<meta name="description" content="Emit Photons Tokens"/>'),be=m("<img/>"),ve=m('<img alt="Disconnected"/>'),Ce=m('<section><div class="status svelte-1400jt5"><!> <!></div> <h1>Emit photons</h1> <!></section>');function Ge(p,e){K(e,!0);let t="",o=q(""),n,d="";d=U.getScriptHash();let T=Q.url.hostname=="vox.cash"?"bch.imaginary.cash":"chipnet.bch.ninja";const l=function(a){a.method==="blockchain.scripthash.subscribe"?a.params[1]!==t&&(t=a.params[1],Y(o,Oe[n.status],!0),_()):console.log(a)},_=async function(){let a=await n.request("blockchain.scripthash.listunspent",d,"exclude_tokens");if(a instanceof Error)throw a};M(async()=>{n=new ce(U.USER_AGENT,"1.4.1",T),await n.connect(),n.on("notification",l),await n.subscribe("blockchain.scripthash.subscribe",d),_()}),w(async()=>{await n.disconnect()});var c=Ce();G("1400jt5",a=>{var i=Ae();V(()=>{X.title="☀️ ⇒ γ Photons"}),h(a,i)});var u=A(c),s=A(u);Pe(s,{get template(){return U.template}});var f=b(s,2);{var O=a=>{var i=be();B(()=>{E(i,"src",ue),E(i,"alt",v(o))}),h(a,i)},P=a=>{var i=ve();B(()=>E(i,"src",le)),h(a,i)};F(f,a=>{v(o)=="CONNECTED"?a(O):a(P,-1)})}C(u);var I=b(u,4);ye(I),C(c),h(p,c),H()}export{Ge as component,Fe as universal};
//# sourceMappingURL=11.IsXPhhom.js.map
