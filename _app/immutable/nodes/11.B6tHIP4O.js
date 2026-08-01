import{f as w,a as y,t as at}from"../chunks/he3immRh.js";import{o as st,a as ot}from"../chunks/DQDK4gBi.js";import{aI as it,p as rt,a_ as p,as as me,t as M,a as ct,m as dt,s as i,c as f,w as s,ap as c,aG as lt,r as O,f as Te}from"../chunks/Brfiz_bE.js";import{s as d}from"../chunks/am97Sg-8.js";import{i as ee}from"../chunks/D4zZsfmr.js";import{h as ut}from"../chunks/B-VzXoZa.js";import{a as b}from"../chunks/DyLqUHww.js";import{d as ft,a as ge}from"../chunks/jacpTfDd.js";import{p as Ot}from"../chunks/CWv8X84z.js";import{h as g,g as ht,k as Ae,l as pt,n as ve,Z as te,_ as Pt,$ as _t,a0 as mt,a1 as Tt,a2 as gt,a3 as vt,p as It,w as we,m as kt,L as ne,B as X,b as L,a4 as Et,a5 as Nt,v as bt,s as Ie,r as ae,z as yt,K as ke,A as Ee,E as Ne}from"../chunks/DBht0nYO.js";import{c as Ut}from"../chunks/BLgKPsWc.js";import{e as At,C as be}from"../chunks/hh7Yrpmc.js";import"../chunks/DECx5bil.js";import{B as wt}from"../chunks/Cy67vamP.js";import{C as xt}from"../chunks/B7hCbxZp.js";import{D as Ct}from"../chunks/DMvn4Q5j.js";import{I as St,B as Bt,W as ye,T as Ue}from"../chunks/BIb-3ZuS.js";import{B as Rt}from"../chunks/DHD6zs4M.js";import{t as Dt}from"../chunks/CUR0D9Jq.js";const Mt=!0,bn=Object.freeze(Object.defineProperty({__proto__:null,prerender:Mt},Symbol.toStringTag,{value:"Module"})),Ht="https://libauth.org/schemas/wallet-template-v0.schema.json",Lt="Photons: A minable CashToken and decentralized energy oracle",Vt="Photons",Kt={covenant:{description:"Emit tokens if a transaction hash is low enough. Or, alternatively, allow anyone to use the vault thread as an oracle for a fee.",name:"Photon Vault",scripts:["lock","unlock"],variables:{age:{description:"The input age (as a number of blocks) claimed to withdraw tokens. The maximum age that can be used to claim tokens is the lessor of covenant thread age or user coins age being used to release tokens.",name:"Age",type:"WalletData"}}},miner:{description:"",name:"Mining Entity",scripts:["unlock","lock"],variables:{miner_key:{description:"The private key that controls this wallet.",name:"Key",type:"HdKey"}}},wallet:{description:"",name:"Funding Entity",scripts:["wallet_unlock","wallet_lock"],variables:{key:{description:"The private key that controls this wallet.",name:"Key",type:"HdKey"}}}},Xt={release:{data:{bytecode:{age:"0"}},description:"",name:"Release Tokens",transaction:{inputs:[{outpointTransactionHash:"ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",outpointIndex:0,unlockingBytecode:["slot"],sequenceNumber:0}],outputs:[{lockingBytecode:{script:"lock"},valueSatoshis:1200,token:{amount:"2099995000000001",category:"deaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddead",nft:{capability:"mutable",commitment:"123456781f815ab0fb6d8064933edfa60e48ccccc2df9c2b055ba6182b0f3ee989811b7fdeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeadad"}}},{lockingBytecode:{script:"wallet_lock"},valueSatoshis:675,token:{amount:"4999999999",category:"deaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddead"}}],locktime:0,version:2},sourceOutputs:[{lockingBytecode:["slot"],valueSatoshis:2375,token:{amount:"2100000000000000",category:"deaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddead",nft:{capability:"mutable",commitment:"040000009863bfb8140e6a63bfb8140e6a63bfb8140e6a63bfb8140e6a63bfb8140effffdeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddead0000000012341234ffffffff"}}}]}},Gt={unlock:{passes:["release"],name:"Unlock Tokens",script:`<miner_key.public_key> <age> //
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
            OP_2DUP OP_7  OP_PICK  <143> OP_ADD OP_MUL <144> OP_DIV OP_NUMEQUALVERIFY
          
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
            <0xb3ef> OP_CAT
            OP_0 OP_OUTPUTTOKENCATEGORY <32> OP_SPLIT OP_DROP OP_CAT 
            // Return Baton HAS_COMMITMENT_LENGTH, HAS_NFT, HAS_AMOUNT, is MUTABLE
            <0b01110001> OP_CAT
            // Return commitment is always 80-bytes long
            <100> OP_CAT
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
  //}`},wallet_lock:{lockingType:"standard",name:"Wallet Lock",script:"OP_DUP OP_HASH160 <$(<key.public_key> OP_HASH160)>  OP_EQUALVERIFY OP_CHECKSIG"},message_packet:{name:"Nonce & Target",script:"0xabcdef"}},qt=["BCH_2026_05"],Yt={$schema:Ht,description:Lt,name:Vt,entities:Kt,scenarios:Xt,scripts:Gt,supported:qt},Ft="@unspent/photon",$t={name:Ft},se=g("ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"),Qt=g("8cfcf13f00e8843dc4787844a1ebe85e6c97807ef40fa8adf672e6149bbf64bb");class H{static USER_AGENT=$t.name;static tokenAware=!0;static template=Yt;static compiler=ht(this.template);static vm=Ut();static getLockingBytecode(t={}){const a=this.compiler.generateBytecode({data:t,scriptId:"lock"});if(!a.success)throw new Error("Failed to generate bytecode, script: , "+JSON.stringify(a,null,"  "));return a.bytecode}static getScriptHash(t=!0){return Ae(this.getLockingBytecode(),t)}static getAddress(t="bitcoincash"){return pt(this.getLockingBytecode(),t,this.tokenAware)}static getSourceOutput(t){return{lockingBytecode:this.getLockingBytecode(),valueSatoshis:BigInt(t.value),token:t.token_data?{category:g(t.token_data.category),amount:BigInt(t.token_data.amount),nft:t.token_data.nft?{commitment:g(t.token_data.nft.commitment),capability:t.token_data.nft.capability}:void 0}:void 0}}static getInput(t,a,o){return{outpointIndex:t.tx_pos,outpointTransactionHash:g(t.tx_hash),sequenceNumber:a,unlockingBytecode:{data:{bytecode:{age:ve(BigInt(a))},hdKeys:{addressIndex:0,hdPrivateKeys:{miner:o}}},compiler:this.compiler,script:"unlock",valueSatoshis:BigInt(t.value),token:t.token_data?{category:g(t.token_data.category),amount:BigInt(t.token_data.amount),nft:t.token_data.nft?{commitment:g(t.token_data.nft.commitment),capability:t.token_data.nft.capability}:void 0}:void 0}}}static getNextTarget(t,a){let o=t.height<=0?0:a-t.height,l=te(g(t.token_data?.nft?.commitment).slice(4,36));return Pt(l*(BigInt(o)+143n)/144n)}static getOutput(t,a,o,l,_){let S=t.height<=0?0:o-t.height;const v=this.getNextTarget(t,o);let I=Uint8Array.from([..._t(_),...v]),k=mt.hash(I),U=Tt(l);if(typeof U=="string")throw U;let B=gt(U.node,0),E=vt.signMessageHashSchnorr(B.privateKey,k);if(typeof E=="string")throw E;return{lockingBytecode:{data:{bytecode:{age:ve(BigInt(S))},hdKeys:{addressIndex:0,hdPublicKeys:{miner:It(l).hdPublicKey}}},compiler:this.compiler,script:"lock"},valueSatoshis:BigInt(t.value-1500),token:{category:g(t.token_data.category),amount:BigInt(t.token_data?.amount)-BigInt(a),nft:{capability:"mutable",commitment:Uint8Array.from([...I,...E])}}}}static getRewardOutput(t,a,o=se){let l=we(a);if(typeof l=="string")throw l;return{lockingBytecode:l.bytecode,valueSatoshis:800n,token:{category:o,amount:BigInt(t)}}}static slowMine(t,a,o,l,_,S=1,v=500){const I=[],k=[];let U=_?g(_):se,B=a.height<=0?0:t-a.height;const E=Math.floor(Number(BigInt(a.token_data.amount)/420000n))-1;let R={locktime:0,version:2,inputs:I,outputs:k};R.inputs.push(this.getInput(a,B,o));let h,D=!1;const x=te(this.getNextTarget(a,t));console.log("Next Target:",x);for(var r=0;r<v&&!D;r++){R.outputs=[this.getOutput(a,E,t,o,r)],R.outputs.push(this.getRewardOutput(E,l,U));let N=kt(R);if(!N.success)throw new Error("generate transaction failed!, errors: "+JSON.stringify(N.errors,null,"  "));te(ne(X(N.transaction)))<x&&(console.log("SUCCESS! ",r),console.log(L(ne(X(N.transaction)))),D=!0,h=N.transaction),r%500==0&&console.log(r,L(ne(X(N.transaction))))}const P=[this.getSourceOutput(a)];if(!D||!h)throw`failed to find a nonce in ${v}`;let u=this.vm.debug({inputIndex:0,sourceOutputs:P,transaction:h}),Y=Et(Nt(u.slice(-9)));console.log(Y),X(h);const V=bt(h,P,{maximumTokenCommitmentLength:128});if(V!==!0&&S>0)throw V;let A=this.vm.verify({sourceOutputs:P,transaction:h}),C=Ie(P)-Ie(h.outputs);C>5e3&&(A=`Excessive fees ${C}`),ae(P,_)==0n&&(A="Error checking token input");let m=ae(P,_)-ae(h.outputs,_);if(m!==0n)throw Error(`Claiming should not create or destroy tokens, token difference: ${m}`);return{sourceOutputs:P,transaction:h,verify:A}}}var jt=w('<h1>About Photons</h1> <p>Photon tokens are solar punk themed fairly distributed minable CashToken creating a decentralized energy oracle.</p> <p>Anyone can utilize excess electricity hash to emit Photons (PHOTON). Photons are released from the vault when someone finds the hash of the transaction is below a certain difficulty threshold.</p> <h2>Begin mining without sats</h2> <p>The Photon Vault hold an output with a small amount of satoshis to facilitate payments to miners. Each payout has an allowance of 1200 sats, for the dust accompanying a miner’s payout and the network fees for the transaction itself.</p> <h2>What is the PoW?</h2> <p>The PoW algorithm for Photons Hash256(Schnorr(Sha256)). The double SHA-256 hash of a transaction (as calculated by the unlocking script). Additionally, the unlocking script requires a <a href="https://upgradespecs.bitcoincashnode.org/op_checkdatasig/" rel="nofollow">Schnorr message signed (with OP_CHECKDATASIGV)</a> of the single SHA-256 has of a four-byte random nonce and the current difficulty target.</p> <h2>A decentralized energy oracle</h2> <p>Each miner taking tokens from the vault must update a dynamically changing difficulty value. The current <em>difficulty</em>, combined with the free market price of photos, creates a decentralized price oracle all miners contribute toward maintaining.</p> <p>The vault contract also allows anyone to use the price baton for a fee (8000 sats).</p>',1);function Wt(G){var t=jt();it(18),y(G,t)}const zt="data:image/svg+xml,%3csvg%20width='400'%20height='400'%20version='1.1'%20viewBox='0%200%20106%20106'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3cradialGradient%20id='a'%20cx='61'%20cy='5'%20r='53'%20gradientTransform='matrix(-.02%202%20-2%20-.02%2063%20-119)'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23753e0a'%20stop-opacity='.8'%20offset='0'/%3e%3cstop%20stop-color='%2316124d'%20offset='1'/%3e%3c/radialGradient%3e%3clinearGradient%20id='b'%20x1='53'%20x2='13'%20y1='61'%20y2='51'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23f6f4ca'%20offset='0'/%3e%3cstop%20stop-color='%23fff'%20stop-opacity='0'%20offset='1'/%3e%3c/linearGradient%3e%3cpattern%20id='bar'%20viewBox='0,0,10,10'%20width='10%25'%20height='10%25'%3e%3cpolygon%20style='opacity:0.2;fill:%23fff;'%20points='0,5%200,6%2010,6%2010,5'/%3e%3c/pattern%3e%3c/defs%3e%3cpath%20d='m10%203-8%208v86l8%208h86l8-8v-86l-8-8z'%20fill='url(%23a)'/%3e%3cpath%20d='m10%203-8%208v86l8%208h86l8-8v-86l-8-8z'%20fill='url(%23bar)'/%3e%3cpath%20d='m24%2022c26-0.8%2037%2072%2028%2072-10%200.2%200.1-59%2026-85'%20fill='none'%20stroke='url(%23b)'%20stroke-linecap='round'%20stroke-width='5'/%3e%3c/svg%3e",Zt="data:image/svg+xml,%3csvg%20width='400'%20height='400'%20version='1.1'%20viewBox='0%200%20106%20106'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3cradialGradient%20id='a'%20cx='61'%20cy='5'%20r='53'%20gradientTransform='matrix(-.02%202%20-2%20-.02%2063%20-119)'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%230d0a75'%20stop-opacity='.8'%20offset='0'/%3e%3cstop%20stop-color='%2316124d'%20offset='1'/%3e%3c/radialGradient%3e%3clinearGradient%20id='b'%20x1='53'%20x2='13'%20y1='61'%20y2='51'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23f6f4ca'%20offset='0'/%3e%3cstop%20stop-color='%23fff'%20stop-opacity='0'%20offset='1'/%3e%3c/linearGradient%3e%3cpattern%20id='bar'%20viewBox='0,0,10,10'%20width='10%25'%20height='10%25'%3e%3crect%20style='opacity:0.2;fill:%23ffffff;'%20height='1'%20width='10'/%3e%3c/pattern%3e%3c/defs%3e%3cpath%20d='m10%203-8%208v86l8%208h86l8-8v-86l-8-8z'%20fill='url(%23a)'/%3e%3cpath%20d='m10%203-8%208v86l8%208h86l8-8v-86l-8-8z'%20fill='url(%23bar)'/%3e%3cpath%20d='m24%2022c26-0.8%2037%2072%2028%2072-10%200.2%200.1-59%2026-85'%20fill='none'%20stroke='url(%23b)'%20stroke-linecap='round'%20stroke-width='5'/%3e%3c/svg%3e";var Jt=w('<meta name="description" content="Emit Photons Tokens"/>'),en=w("<img/>"),tn=w('<img alt="Disconnected"/>'),nn=w('<button class="button"> </button> ',1),an=w('<h3>Vault Status</h3> <div class="swap svelte-1400jt5"><div class="svelte-1400jt5"><img width="50"/> <br/> <br/> <img width="18px"/></div></div> <h4>Current Difficulty</h4> <p>Current Target</p> <pre class="svelte-1400jt5"> </pre> <p>Previous Target</p> <pre class="svelte-1400jt5"> </pre> <br/> <br/> <br/> <p> </p> <pre class="svelte-1400jt5"> </pre>',1),sn=w('<button class="button"> </button>'),on=w('<section><div class="status svelte-1400jt5"> <sub>■</sub> <!> <!></div> <h1>Emit Photons</h1> <div class="swap svelte-1400jt5"><div class="svelte-1400jt5"><img width="50"/> <br/> </div></div> <div class="mining svelte-1400jt5"><!></div> <!> <!></section>');function yn(G,t){rt(t,!0);let a=p(0),o=p(void 0),l="",_=p(void 0),S=p(""),v,I,k=p(me([])),U=p(me([])),B=p(""),E=p(0n),R=p(0),h=p(0n),D=p(0),x=p(""),r,P="";P=H.getScriptHash();const u=Ot.url.hostname=="vox.cash";let Y=u?"bch.imaginary.cash":"chipnet.bch.ninja";const V=u?Zt:zt,A=u?L(se):L(Qt),C=u?"BCH":"tBCH",m=u?"PHOTON":"tPHOTON",N=u?"bitcoincash":"bchtest",xe=u?Rt:Dt,Ce=u?1:50,Se=function(e){if(e.method==="blockchain.headers.subscribe"){let n=e.params[0];c(a,n.height,!0)}else e.method==="blockchain.scripthash.subscribe"?e.params[1]!==l&&(l=e.params[1],c(x,be[r.status],!0),ie(),oe()):console.log(e)},Be=async function(){let e=H.slowMine(s(a),s(U)[0],s(B),v.getTokenDepositAddress(),A,Ce,5e3),n=L(X(e.transaction));console.log(n),await Re(n)},Re=async function(e){let n=await r.request("blockchain.transaction.broadcast",e);if(n instanceof Error)throw c(x,be[r.status],!0),n},De=async function(){v.tokenGenesis({cashaddr:H.getAddress(N),amount:BigInt(21e14),value:50000000n,nft:{capability:"mutable",commitment:"00000000000000000000000000000000000000000000000000000000000000000000ff78"}})},oe=async function(){let e=await r.request("blockchain.scripthash.listunspent",s(S),"include_tokens");if(e instanceof Error)throw e;c(k,e,!0),c(R,Ee(s(k),!0),!0),c(E,Ne(s(k),A),!0),c(k,s(k).filter(n=>!n.token_data).filter(n=>n.height>0),!0)},ie=async function(){let e=await r.request("blockchain.scripthash.listunspent",P,"include_tokens");if(e instanceof Error)throw e;console.log(e),e=e.filter(n=>n.token_data?.category==A),e.length==1&&(c(o,e[0],!0),c(_,ke(s(o).token_data?.nft?.commitment.slice(8,74)),!0)),c(U,e,!0),c(D,Ee(e,!0),!0),c(h,Ne(e,A),!0)};st(async()=>{Bt.StorageProvider=St,v=u?await ye.named("vox"):await Ue.named("vox"),I=u?await ye.named("miner"):await Ue.named("miner"),c(B,yt(I.mnemonic,I.derivationPath.slice(0,-2),I.isTestnet),!0);let e=we(v.getDepositAddress());if(typeof e=="string")throw e;c(S,Ae(e.bytecode),!0),r=new At(H.USER_AGENT,"1.4.1",Y),await r.connect(),r.on("notification",Se),await r.subscribe("blockchain.scripthash.subscribe",P),await r.subscribe("blockchain.headers.subscribe"),ie(),oe()}),ot(async()=>{await r.disconnect()});var F=on();ut("1400jt5",e=>{var n=Jt();dt(()=>{lt.title="γ Photons"}),y(e,n)});var $=f(F),re=f($,!0),ce=i(re,3);wt(ce,{get template(){return H.template}});var Me=i(ce,2);{var He=e=>{var n=en();M(()=>{b(n,"src",xt),b(n,"alt",s(x))}),y(e,n)},Le=e=>{var n=tn();M(()=>b(n,"src",Ct)),y(e,n)};ee(Me,e=>{s(x)=="CONNECTED"?e(He):e(Le,-1)})}O($);var Q=i($,4),de=f(Q),j=f(de),Ve=i(j,3);O(de),O(Q);var W=i(Q,2),Ke=f(W);{var Xe=e=>{var n=nn(),T=Te(n),q=f(T);O(T);var K=i(T);M(()=>{d(q,`mine ${m}`),d(K,` ${N}`)}),ge("click",T,()=>Be()),y(e,n)};ee(Ke,e=>{s(o)&&e(Xe)})}O(W);var le=i(W,2);{var Ge=e=>{var n=an(),T=i(Te(n),2),q=f(T),K=f(q),ue=i(K,3),fe=i(ue,2),Oe=i(fe);O(q),O(T);var z=i(T,6),$e=f(z,!0);O(z);var Z=i(z,4),Qe=f(Z,!0);O(Z);var he=i(Z),pe=i(he,2),Pe=i(pe,2),J=i(Pe,3),je=f(J);O(J);var _e=i(J,2),We=f(_e,!0);O(_e),M((ze,Ze,Je,et,tt,nt)=>{b(K,"src",V),b(K,"alt",m),d(ue,` ${ze??""}
				${m}`),d(fe,` ${Ze??""} sats ${C} `),b(Oe,"src",xe),b(Oe,"alt",C),d($e,Je),d(Qe,et),d(he,` Height: ${s(o).height??""} `),d(pe,` Next Payout: ${tt??""}
		${m}`),d(Pe,` Cash: ${nt??""} sats ${C}`),d(je,`${m} category:`),d(We,s(o).token_data?.category)},[()=>s(h).toLocaleString(),()=>s(D).toLocaleString(),()=>L(H.getNextTarget(s(o),s(a))),()=>ke(s(_)),()=>(BigInt(s(o).token_data?.amount)/420000n).toLocaleString(),()=>s(o).value.toLocaleString()]),y(e,n)},qe=e=>{var n=sn(),T=f(n);O(n),M(()=>d(T,`Mint Genesis Tx (0.5 ${C})`)),ge("click",n,()=>De()),y(e,n)},Ye=e=>{var n=at("No tokens in vault");y(e,n)};ee(le,e=>{s(o)&&s(o).value>0?e(Ge):u?e(Ye,-1):e(qe,1)})}var Fe=i(le,2);Wt(Fe),O(F),M((e,n)=>{d(re,e),b(j,"src",V),b(j,"alt",m),d(Ve,` ${n??""}
			${m}`)},[()=>s(a).toLocaleString(),()=>s(E).toLocaleString()]),y(G,F),ct()}ft(["click"]);export{yn as component,bn as universal};
//# sourceMappingURL=11.B6tHIP4O.js.map
