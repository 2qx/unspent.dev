import{f as m,a as p}from"../chunks/he3immRh.js";import{o as x,a as M}from"../chunks/DQDK4gBi.js";import{aI as L,p as H,a as K,m as V,c as A,s as b,aG as X,w as v,a_ as q,r as C,ap as Y,t as S}from"../chunks/Brfiz_bE.js";import{i as F}from"../chunks/D4zZsfmr.js";import{h as G}from"../chunks/B-VzXoZa.js";import{a as E}from"../chunks/DyLqUHww.js";import{p as Q}from"../chunks/IoidNgdy.js";import{h as r,g as z,k as W,l as j,n as B,I as $,J,K as Z,L as ee,M as te,N as ne,p as w,m as ae,O as oe,P as ie,B as se,v as re,s as D,r as N}from"../chunks/DV8mz8xb.js";import{c as de}from"../chunks/1xildkOo.js";import{e as ce,C as ue}from"../chunks/hh7Yrpmc.js";import"../chunks/DECx5bil.js";import{B as Oe}from"../chunks/DISC1ZpF.js";import{C as le}from"../chunks/B7hCbxZp.js";import{D as Pe}from"../chunks/DMvn4Q5j.js";const _e=!0,Fe=Object.freeze(Object.defineProperty({__proto__:null,prerender:_e},Symbol.toStringTag,{value:"Module"})),he="https://libauth.org/schemas/wallet-template-v0.schema.json",fe="Photons: A minable CashToken and decentralized energy oracle",pe="Photons",me={covenant:{description:"Emit tokens if a transaction hash is low enough. Or, alternatively, allow anyone to use the vault thread as an oracle for a fee.",name:"Photon Vault",scripts:["lock","unlock"],variables:{age:{description:"The input age (as a number of blocks) claimed to withdraw tokens. The maximum age that can be used to claim tokens is the lessor of covenant thread age or user coins age being used to release tokens.",name:"Age",type:"WalletData"}}},miner:{description:"",name:"Mining Entity",scripts:["unlock","lock"],variables:{miner_key:{description:"The private key that controls this wallet.",name:"Key",type:"HdKey"}}},wallet:{description:"",name:"Funding Entity",scripts:["wallet_unlock","wallet_lock"],variables:{key:{description:"The private key that controls this wallet.",name:"Key",type:"HdKey"}}}},Te={release:{data:{bytecode:{age:"0"}},description:"",name:"Release Tokens",transaction:{inputs:[{outpointTransactionHash:"ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",outpointIndex:0,unlockingBytecode:["slot"],sequenceNumber:0}],outputs:[{lockingBytecode:{script:"lock"},valueSatoshis:1200,token:{amount:"2099995000000001",category:"deaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddead",nft:{capability:"mutable",commitment:"123456781f815ab0fb6d8064933edfa60e48ccccc2df9c2b055ba6182b0f3ee989811b7fdeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeadad"}}},{lockingBytecode:{script:"wallet_lock"},valueSatoshis:675,token:{amount:"4999999999",category:"deaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddead"}}],locktime:0,version:2},sourceOutputs:[{lockingBytecode:["slot"],valueSatoshis:2375,token:{amount:"2100000000000000",category:"deaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddead",nft:{capability:"mutable",commitment:"040000009863bfb8140e6a63bfb8140e6a63bfb8140e6a63bfb8140e6a63bfb8140effffdeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddead0000000012341234ffffffff"}}}]}},ge={unlock:{passes:["release"],name:"Unlock Tokens",script:`<miner_key.public_key> <age> //
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
  //}`},wallet_lock:{lockingType:"standard",name:"Wallet Lock",script:"OP_DUP OP_HASH160 <$(<key.public_key> OP_HASH160)> OP_EQUALVERIFY OP_CHECKSIG"},message_packet:{name:"Nonce & Target",script:"0xabcdef"}},Ie=["BCH_2026_05"],Ee={$schema:he,description:fe,name:pe,entities:me,scenarios:Te,scripts:ge,supported:Ie},Ne="@unspent/photon",Ue={name:Ne},R=r("7fe0cd5197494e47ade81eb164dcdbd51859ffbe581fe4a818085d56b2f3062c");r("ffc9d3b3488e890ef113b1c74f40e1f5eb1147a7d4191cecac89fd515721a271");class U{static USER_AGENT=Ue.name;static tokenAware=!0;static template=Ee;static compiler=z(this.template);static vm=de();static getLockingBytecode(e={}){const t=this.compiler.generateBytecode({data:e,scriptId:"lock"});if(!t.success)throw new Error("Failed to generate bytecode, script: , "+JSON.stringify(t,null,"  "));return t.bytecode}static getScriptHash(e=!0){return W(this.getLockingBytecode(),e)}static getAddress(e="bitcoincash"){return j(this.getLockingBytecode(),e,this.tokenAware)}static getSourceOutput(e){return{lockingBytecode:this.getLockingBytecode(),valueSatoshis:BigInt(e.value),token:e.token_data?{category:r(e.token_data.category),amount:BigInt(e.token_data.amount),nft:e.token_data.nft?{commitment:r(e.token_data.nft.commitment),capability:e.token_data.nft.capability}:void 0}:void 0}}static getInput(e,t,o){return{outpointIndex:e.tx_pos,outpointTransactionHash:r(e.tx_hash),sequenceNumber:t,unlockingBytecode:{data:{bytecode:{age:B(BigInt(t))},hdKeys:{addressIndex:2,hdPrivateKeys:{miner:o}}},compiler:this.compiler,script:"unlock",valueSatoshis:BigInt(e.value),token:e.token_data?{category:r(e.token_data.category),amount:BigInt(e.token_data.amount),nft:e.token_data.nft?{commitment:r(e.token_data.nft.commitment),capability:e.token_data.nft.capability}:void 0}:void 0}}}static getOutput(e,t,o,n){let d=$(r(e.token_data?.nft?.commitment).slice(4,36));if(typeof d=="string")throw d;let h=d*(BigInt(o)+143000n)/144000n,P=Uint8Array.from([...r("00000000"),...J(h)]),_=Z.hash(P),c=ee(n);if(typeof c=="string")throw c;let l=te(c.node,2),i=ne.signMessageHashSchnorr(l.privateKey,_);if(typeof i=="string")throw i;return{lockingBytecode:{data:{bytecode:{age:B(BigInt(o))},hdKeys:{addressIndex:2,hdPublicKeys:{miner:w(n).hdPublicKey}}},compiler:this.compiler,script:"lock"},valueSatoshis:BigInt(e.value-1200),token:{category:r(e.token_data.category),amount:BigInt(e.token_data?.amount)-BigInt(t),nft:{capability:"mutable",commitment:Uint8Array.from([...P,...i])}}}}static getRewardOutput(e,t,o=0,n=R){return{lockingBytecode:t?{compiler:this.compiler,data:{hdKeys:{addressIndex:o,hdPublicKeys:{wallet:w(t).hdPublicKey}}},script:"wallet_lock"}:Uint8Array.from(Array(33)),valueSatoshis:800n,token:{category:n,amount:BigInt(e)}}}static claim(e,t,o,n,d=1){const h=[],P=[];let _=n?r(n):R,c=t.height<=0?0:e-t.height;const l=Math.floor(Number(BigInt(t.token_data.amount)/420000n))-1;let i={locktime:0,version:2,inputs:h,outputs:P};i.inputs.push(this.getInput(t,c,o)),i.outputs.push(this.getOutput(t,l,c,o)),i.outputs.push(this.getRewardOutput(l,o,0,_));let f=ae(i);if(!f.success)throw new Error("generate transaction failed!, errors: "+JSON.stringify(f.errors,null,"  "));const u=[this.getSourceOutput(t)],O=f.transaction;let g=this.vm.debug({inputIndex:0,sourceOutputs:u,transaction:O}),a=oe(ie(g.slice(-9)));console.log(a),se(O);const s=re(O,u,{maximumTokenCommitmentLength:128});if(s!==!0&&d>0)throw s;let I=this.vm.verify({sourceOutputs:u,transaction:O}),k=D(u)-D(O.outputs);k>5e3&&(I=`Excessive fees ${k}`),N(u,n)==0n&&(I="Error checking token input");let y=N(u,n)-N(O.outputs,n);if(y!==0n)throw Error(`Claiming should not create or destroy tokens, token difference: ${y}`);return{sourceOutputs:u,transaction:O,verify:I}}}var ke=m('<h1>About Photons</h1> <p>Photon tokens are solar punk themed fairly distributed minable (sha256) CashToken creating a decentralized energy oracle.</p> <p>Anyone can utilize excess electricity hash to emit Photons (PHOTON). Photons are released from the vault when someone finds the hash of the transaction is below a certain difficulty threshold.</p> <h2>Begin mining without sats</h2> <p>The Photon Vault hold an output with a small amount of satoshis to facilitate payments to miners. Each payout has an allowance of 1200 sats, for the dust accompanying a miner’s payout and the network fees for the transaction itself.</p> <h2>What is the PoW?</h2> <p>The PoW algorithm for Photons Hash256(Schnorr(Sha256)). The double SHA-256 hash of a transaction (as calculated by the unlocking script). Additionally, the unlocking script requires a <a href="https://upgradespecs.bitcoincashnode.org/op_checkdatasig/" rel="nofollow">Schnorr message signed (OP_CHECKDATASIG)</a> of the single SHA-256 has of a four-byte random nonce and the current difficulty target.</p> <h2>A decentralized energy oracle</h2> <p>Each miner taking tokens from the vault must update a dynamically changing difficulty value. The current <em>difficulty</em>, combined with the free market price of photos, creates a decentralized price oracle all miners contribute toward maintaining.</p> <p>The vault contract also allows anyone to use the price baton for a fee (8000 sats).</p>',1);function ye(T){var e=ke();L(18),p(T,e)}var Ae=m('<meta name="description" content="Emit Photons Tokens"/>'),be=m("<img/>"),ve=m('<img alt="Disconnected"/>'),Ce=m('<section><div class="status svelte-1400jt5"><!> <!></div> <h1>Emit photons</h1> <!></section>');function Ge(T,e){H(e,!0);let t="",o=q(""),n,d="";d=U.getScriptHash();let h=Q.url.hostname=="vox.cash"?"bch.imaginary.cash":"chipnet.bch.ninja";const P=function(a){a.method==="blockchain.scripthash.subscribe"?a.params[1]!==t&&(t=a.params[1],Y(o,ue[n.status],!0),_()):console.log(a)},_=async function(){let a=await n.request("blockchain.scripthash.listunspent",d,"exclude_tokens");if(a instanceof Error)throw a};x(async()=>{n=new ce(U.USER_AGENT,"1.4.1",h),await n.connect(),n.on("notification",P),await n.subscribe("blockchain.scripthash.subscribe",d),_()}),M(async()=>{await n.disconnect()});var c=Ce();G("1400jt5",a=>{var s=Ae();V(()=>{X.title="☀️ ⇒ γ Photons"}),p(a,s)});var l=A(c),i=A(l);Oe(i,{get template(){return U.template}});var f=b(i,2);{var u=a=>{var s=be();S(()=>{E(s,"src",le),E(s,"alt",v(o))}),p(a,s)},O=a=>{var s=ve();S(()=>E(s,"src",Pe)),p(a,s)};F(f,a=>{v(o)=="CONNECTED"?a(u):a(O,-1)})}C(l);var g=b(l,4);ye(g),C(c),p(T,c),K()}export{Ge as component,Fe as universal};
//# sourceMappingURL=11.DSf2DH3o.js.map
