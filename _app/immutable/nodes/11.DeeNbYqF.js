import{_ as nt}from"../chunks/Ct5FWWRu.js";import{f as I,a as T,t as it}from"../chunks/he3immRh.js";import{o as st,a as ot}from"../chunks/DQDK4gBi.js";import{aI as rt,p as ct,a_ as h,as as Oe,t as A,a as dt,m as lt,s,c as l,w as n,ap as o,aG as ut,r as u,f as ft}from"../chunks/Brfiz_bE.js";import{s as f}from"../chunks/am97Sg-8.js";import{i as H}from"../chunks/D4zZsfmr.js";import{h as ht}from"../chunks/B-VzXoZa.js";import{a as b}from"../chunks/DyLqUHww.js";import{d as pt,a as _e}from"../chunks/jacpTfDd.js";import{p as Ot}from"../chunks/Di4LtyYd.js";import{h as v,i as _t,k as ye,l as mt,n as me,Z as Pt,_ as gt,$ as Tt,a0 as vt,a1 as bt,a2 as kt,a3 as It,p as yt,w as Ne,m as Nt,b as L,B as Et,z as Ut,K as Pe,A as ge,E as Te}from"../chunks/COcAbNCw.js";import{c as At}from"../chunks/DY_Due9m.js";import{e as wt,C as ve}from"../chunks/hh7Yrpmc.js";import"../chunks/DECx5bil.js";import{B as xt}from"../chunks/C-XzXAmY.js";import{C as Ct}from"../chunks/B7hCbxZp.js";import{D as Bt}from"../chunks/DMvn4Q5j.js";import{I as St,B as Dt,W as be,T as ke}from"../chunks/DfDkPMZJ.js";import{B as Rt}from"../chunks/DHD6zs4M.js";import{t as Mt}from"../chunks/CUR0D9Jq.js";const Ht=!0,Na=Object.freeze(Object.defineProperty({__proto__:null,prerender:Ht},Symbol.toStringTag,{value:"Module"})),Lt="https://libauth.org/schemas/wallet-template-v0.schema.json",Vt="Photons: A minable CashToken and decentralized energy oracle",Kt="Photons",Xt={covenant:{description:"Emit tokens if a transaction hash is low enough. Or, alternatively, allow anyone to use the vault thread as an oracle for a fee.",name:"Photon Vault",scripts:["lock","unlock"],variables:{age:{description:"The input age (as a number of blocks) claimed to withdraw tokens. The maximum age that can be used to claim tokens is the lessor of covenant thread age or user coins age being used to release tokens.",name:"Age",type:"WalletData"}}},miner:{description:"",name:"Mining Entity",scripts:["unlock","lock"],variables:{miner_key:{description:"The private key that controls this wallet.",name:"Key",type:"HdKey"}}},wallet:{description:"",name:"Funding Entity",scripts:["wallet_unlock","wallet_lock"],variables:{key:{description:"The private key that controls this wallet.",name:"Key",type:"HdKey"}}}},qt={release:{data:{bytecode:{age:"0"}},description:"",name:"Release Tokens",transaction:{inputs:[{outpointTransactionHash:"ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",outpointIndex:0,unlockingBytecode:["slot"],sequenceNumber:0}],outputs:[{lockingBytecode:{script:"lock"},valueSatoshis:1200,token:{amount:"2099995000000001",category:"deaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddead",nft:{capability:"mutable",commitment:"123456781f815ab0fb6d8064933edfa60e48ccccc2df9c2b055ba6182b0f3ee989811b7fdeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeadad"}}},{lockingBytecode:{script:"wallet_lock"},valueSatoshis:675,token:{amount:"4999999999",category:"deaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddead"}}],locktime:0,version:2},sourceOutputs:[{lockingBytecode:["slot"],valueSatoshis:2375,token:{amount:"2100000000000000",category:"deaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddead",nft:{capability:"mutable",commitment:"040000009863bfb8140e6a63bfb8140e6a63bfb8140e6a63bfb8140e6a63bfb8140effffdeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddead0000000012341234ffffffff"}}}]}},Gt={unlock:{passes:["release"],name:"Unlock Tokens",script:`<miner_key.public_key> <age> //
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
            OP_DUP OP_BIN2NUM 
            // int nextTarget = int(nextTargetBytes);
                       
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
  //}`},wallet_lock:{lockingType:"standard",name:"Wallet Lock",script:"OP_DUP OP_HASH160 <$(<key.public_key> OP_HASH160)>  OP_EQUALVERIFY OP_CHECKSIG"},message_packet:{name:"Nonce & Target",script:"0xabcdef"}},Ft=["BCH_2026_05"],Yt={$schema:Lt,description:Vt,name:Kt,entities:Xt,scenarios:qt,scripts:Gt,supported:Ft},Wt="@unspent/photon",$t={name:Wt},z=v("ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"),jt=v("8bc4c5974bb98a01d08ef9ba1b7208212b66678732519c4881d2fa924c2a159f");class C{static USER_AGENT=$t.name;static tokenAware=!0;static template=Yt;static compiler=_t(this.template);static vm=At();static getLockingBytecode(a={}){const i=this.compiler.generateBytecode({data:a,scriptId:"lock"});if(!i.success)throw new Error("Failed to generate bytecode, script: , "+JSON.stringify(i,null,"  "));return i.bytecode}static getScriptHash(a=!0){return ye(this.getLockingBytecode(),a)}static getAddress(a="bitcoincash"){return mt(this.getLockingBytecode(),a,this.tokenAware)}static getSourceOutput(a){return{lockingBytecode:this.getLockingBytecode(),valueSatoshis:BigInt(a.value),token:a.token_data?{category:v(a.token_data.category),amount:BigInt(a.token_data.amount),nft:a.token_data.nft?{commitment:v(a.token_data.nft.commitment),capability:a.token_data.nft.capability}:void 0}:void 0}}static getInput(a,i,r){return{outpointIndex:a.tx_pos,outpointTransactionHash:v(a.tx_hash),sequenceNumber:i,unlockingBytecode:{data:{bytecode:{age:me(BigInt(i))},hdKeys:{addressIndex:0,hdPrivateKeys:{miner:r}}},compiler:this.compiler,script:"unlock",valueSatoshis:BigInt(a.value),token:a.token_data?{category:v(a.token_data.category),amount:BigInt(a.token_data.amount),nft:a.token_data.nft?{commitment:v(a.token_data.nft.commitment),capability:a.token_data.nft.capability}:void 0}:void 0}}}static getNextTarget(a,i){let r=a.height<=0?0:i-a.height,c=Pt(v(a.token_data?.nft?.commitment).slice(4,36));return gt(c*(BigInt(r)+143n)/144n)}static getOutput(a,i,r,c,d){let w=a.height<=0?0:r-a.height;const x=this.getNextTarget(a,r);let y=Uint8Array.from([...Tt(d),...x]),k=vt.hash(y),m=bt(c);if(typeof m=="string")throw m;let P=kt(m.node,0),p=It.signMessageHashSchnorr(P.privateKey,k);if(typeof p=="string")throw p;return{lockingBytecode:{data:{bytecode:{age:me(BigInt(w))},hdKeys:{addressIndex:0,hdPublicKeys:{miner:yt(c).hdPublicKey}}},compiler:this.compiler,script:"lock"},valueSatoshis:BigInt(a.value-1500),token:{category:v(a.token_data.category),amount:BigInt(a.token_data?.amount)-BigInt(i),nft:{capability:"mutable",commitment:Uint8Array.from([...y,...p])}}}}static getRewardOutput(a,i,r=z){let c=Ne(i);if(typeof c=="string")throw c;return{lockingBytecode:c.bytecode,valueSatoshis:700n,token:{category:r,amount:BigInt(a)}}}static generateTemplate(a,i,r,c,d,w=0){const x=[],y=[];let k=d?v(d):z,m=i.height<=0?0:a-i.height;const P=Math.floor(Number(BigInt(i.token_data.amount)/420000n))-1;let p={locktime:0,version:2,inputs:x,outputs:y};p.inputs.push(this.getInput(i,m,r)),p.outputs=[this.getOutput(i,P,a,r,w)],p.outputs.push(this.getRewardOutput(P,c,k));let N=Nt(p);if(!N.success)throw new Error("generate transaction failed!, errors: "+JSON.stringify(N.errors,null,"  "));let E=N.transaction;const S=[this.getSourceOutput(i)];return this.vm.debug({inputIndex:0,sourceOutputs:S,transaction:E}),L(Et(E))}}var Qt=I('<h1>About Photons</h1> <p>Photon (PHOTON) is a solar punk meme token powering a decentralized energy oracle on Bitcoin Cash (BCH). It is a fairly distributed minable CashToken calculating its own transaction hash in BitcoinScript.</p> <p>Anyone can monetize their excess electricity by hashing for photons. Photons are released from the vault when someone finds the hash of the transaction is below a certain difficulty threshold. Each release of tokens must also update the hashing difficulty threshold. The difficulty <em>may</em> become correlated with the availability of excess free energy being absorbed by individuals globally.</p> <h2>Begin mining without sats</h2> <p>The Photon Vault keeps a cash balance to facilitate payments to miners. Each payout has an allowance of 1500 sats, for the dust accompanying a miner’s payout and the network fees for the transaction itself.</p> <h2>What is the PoW?</h2> <p>The PoW algorithm for Photons is Hash256(Secp256k1(Sha256)). Specifically, each transaction taking photons from the vault must return the mutable NFT baton with the following data updated:</p> <table><thead><tr><th align="left">Data</th><th align="left">Size</th></tr></thead><tbody><tr><td align="left">nonce</td><td align="left">4-bytes</td></tr><tr><td align="left">next target</td><td align="left">32-bytes (Little Endian)</td></tr><tr><td align="left">Schnorr signature of sha256(nonce + next target)</td><td align="left">64-bytes</td></tr></tbody></table> <p>When included in a transaction, satisfying a number of other requirements, if the double sha256 hash of the resulting transaction is less than the next target, the unlocking script for the photon vault can release a reward.</p> <h2>A decentralized energy oracle</h2> <p>Each miner taking tokens from the vault must update a dynamically changing difficulty value. The current <em>difficulty</em>, combined with the free market price of photons, creates a decentralized price oracle all miners contribute toward maintaining.</p> <p>If someone has already found a payout in this block, the difficulty gets one percent harder. If people stop taking tokens, the difficulty get easier each block.</p> <p>The vault contract also allows anyone to use the price baton for a fee (8000 sats). The price is intended to discourage resetting the oracle baton.</p> <h2>A simple Difficulty Adjustment Algorithm (DAA)</h2> <p>The target frequency for the price oracle is one update per block.</p> <p>The price oracle can be updated multiple times per block, but this makes mining 0.7% harder. If no reward is found in a block it gets 0.7% easier with each block. Mining becomes roughly 100% easier per day the oracle is not updated.</p> <p>The equation is a function of the baton transaction age (in block) and the previous difficulty target.</p> <p>NextTarget = ( PrevTarget * (143 + age) ) / 144</p> <p>The NextTarget MUST match the exact value given by the DAA, it may not be arbitrarily lowered by any miner.</p>',1);function zt(B){var a=Qt();rt(36),T(B,a)}const Zt="data:image/svg+xml,%3csvg%20width='400'%20height='400'%20version='1.1'%20viewBox='0%200%20106%20106'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3cradialGradient%20id='a'%20cx='61'%20cy='5'%20r='53'%20gradientTransform='matrix(-.02%202%20-2%20-.02%2063%20-119)'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23753e0a'%20stop-opacity='.8'%20offset='0'/%3e%3cstop%20stop-color='%2316124d'%20offset='1'/%3e%3c/radialGradient%3e%3clinearGradient%20id='b'%20x1='53'%20x2='13'%20y1='61'%20y2='51'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23f6f4ca'%20offset='0'/%3e%3cstop%20stop-color='%23fff'%20stop-opacity='0'%20offset='1'/%3e%3c/linearGradient%3e%3cpattern%20id='bar'%20viewBox='0,0,10,10'%20width='10%25'%20height='10%25'%3e%3cpolygon%20style='opacity:0.2;fill:%23fff;'%20points='0,5%200,6%2010,6%2010,5'/%3e%3c/pattern%3e%3c/defs%3e%3cpath%20d='m10%203-8%208v86l8%208h86l8-8v-86l-8-8z'%20fill='url(%23a)'/%3e%3cpath%20d='m10%203-8%208v86l8%208h86l8-8v-86l-8-8z'%20fill='url(%23bar)'/%3e%3cpath%20d='m24%2022c26-0.8%2037%2072%2028%2072-10%200.2%200.1-59%2026-85'%20fill='none'%20stroke='url(%23b)'%20stroke-linecap='round'%20stroke-width='5'/%3e%3c/svg%3e",Jt="data:image/svg+xml,%3csvg%20width='400'%20height='400'%20version='1.1'%20viewBox='0%200%20106%20106'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3cradialGradient%20id='a'%20cx='61'%20cy='5'%20r='53'%20gradientTransform='matrix(-.02%202%20-2%20-.02%2063%20-119)'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%230d0a75'%20stop-opacity='.8'%20offset='0'/%3e%3cstop%20stop-color='%2316124d'%20offset='1'/%3e%3c/radialGradient%3e%3clinearGradient%20id='b'%20x1='53'%20x2='13'%20y1='61'%20y2='51'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23f6f4ca'%20offset='0'/%3e%3cstop%20stop-color='%23fff'%20stop-opacity='0'%20offset='1'/%3e%3c/linearGradient%3e%3cpattern%20id='bar'%20viewBox='0,0,10,10'%20width='10%25'%20height='10%25'%3e%3crect%20style='opacity:0.2;fill:%23ffffff;'%20height='1'%20width='10'/%3e%3c/pattern%3e%3c/defs%3e%3cpath%20d='m10%203-8%208v86l8%208h86l8-8v-86l-8-8z'%20fill='url(%23a)'/%3e%3cpath%20d='m10%203-8%208v86l8%208h86l8-8v-86l-8-8z'%20fill='url(%23bar)'/%3e%3cpath%20d='m24%2022c26-0.8%2037%2072%2028%2072-10%200.2%200.1-59%2026-85'%20fill='none'%20stroke='url(%23b)'%20stroke-linecap='round'%20stroke-width='5'/%3e%3c/svg%3e";var ea=I('<meta name="description" content="Emit Photons Tokens"/>'),ta=I("<img/>"),aa=I('<img alt="Disconnected"/>'),Ie=I('<button class="button"> </button>'),na=I("<p> </p>"),ia=I('<h3>Vault Status</h3> <div class="swap svelte-1400jt5"><div class="svelte-1400jt5"><img width="50"/> <br/> <br/> <img width="18px"/></div></div> <h4>Current Difficulty</h4> <p>Current Target</p> <pre class="svelte-1400jt5"> </pre> <p>Previous Target</p> <pre class="svelte-1400jt5"> </pre> <br/> <br/> <br/> <p> </p> <pre class="svelte-1400jt5"> </pre>',1),sa=I('<section><div class="status svelte-1400jt5"> <sub>■</sub> <!> <!></div> <h1>Emit Photons</h1> <div class="swap svelte-1400jt5"><div class="svelte-1400jt5"><img width="50"/> <br/> </div></div> <div class="mining svelte-1400jt5"><!> <!></div> <!> <!></section>');function Ea(B,a){ct(a,!0);let i,r,c=h(0),d=h(void 0),w="",x=h(void 0),y=h(""),k,m,P=h(Oe([])),p=h(Oe([])),N=h(""),E=h(0),S=h(0n),Ee=h(0),Z=h(0n),J=h(0),D=h(""),O,V="";V=C.getScriptHash();const g=Ot.url.hostname=="vox.cash";let Ue=g?"bch.imaginary.cash":"chipnet.bch.ninja";const ee=g?Jt:Zt,R=g?L(z):L(jt),M=g?"BCH":"tBCH",U=g?"PHOTON":"tPHOTON",Ae=g?"bitcoincash":"bchtest",we=g?Rt:Mt,xe=function(e){if(e.method==="blockchain.headers.subscribe"){let t=e.params[0];o(c,t.height,!0)}else e.method==="blockchain.scripthash.subscribe"?e.params[1]!==w&&(w=e.params[1],o(D,ve[O.status],!0),ae(),te()):console.log(e)},Ce=async function(){let e=C.generateTemplate(n(c),n(p)[0],n(N),k.getTokenDepositAddress(),R);i.postMessage({task:"START",template:e,key:n(N)})},Be=async function(e){let t=await O.request("blockchain.transaction.broadcast",e);if(t instanceof Error)throw o(D,ve[O.status],!0),t},Se=async function(){k.tokenGenesis({cashaddr:C.getAddress(Ae),amount:BigInt(21e14),value:50000000n,nft:{capability:"mutable",commitment:"00000000000000000000000000000000000000000000000000000000000000000000ff78"}})},te=async function(){let e=await O.request("blockchain.scripthash.listunspent",n(y),"include_tokens");if(e instanceof Error)throw e;o(P,e,!0),o(Ee,ge(n(P),!0),!0),o(S,Te(n(P),R),!0),o(P,n(P).filter(t=>!t.token_data).filter(t=>t.height>0),!0)},ae=async function(){let e=await O.request("blockchain.scripthash.listunspent",V,"include_tokens");if(e instanceof Error)throw e;e=e.filter(t=>t.token_data?.category==R),e.length==1&&(o(d,e[0],!0),o(x,Pe(n(d).token_data?.nft?.commitment.slice(8,72)),!0)),o(p,e,!0),o(J,ge(e,!0),!0),o(Z,Te(e,R),!0)};async function De(){if(window.Worker){r=void 0;const e=await nt(()=>import("../chunks/DNscYHnO.js"),[],import.meta.url);i=new e.default,i.onmessage=function(t){const{status:_,message:Y}=t.data;switch(_){case"STATUS_FINISHED":r=t.data.result,o(E,t.data.hashRate,!0),Be(r);break;case"STATUS_MINING":o(E,t.data.hashRate,!0);break}}}else console.error("no worker")}st(async()=>{Dt.StorageProvider=St,k=g?await be.named("vox"):await ke.named("vox"),m=g?await be.named("miner"):await ke.named("miner"),o(N,Ut(m.mnemonic,m.derivationPath.slice(0,-2),m.isTestnet),!0);let e=Ne(k.getDepositAddress());if(typeof e=="string")throw e;o(y,ye(e.bytecode),!0),O=new wt(C.USER_AGENT,"1.4.1",Ue),await O.connect(),O.on("notification",xe),await O.subscribe("blockchain.scripthash.subscribe",V),await O.subscribe("blockchain.headers.subscribe"),ae(),te(),De()}),ot(async()=>{await O.disconnect()});var K=sa();ht("1400jt5",e=>{var t=ea();lt(()=>{ut.title="γ Photons"}),T(e,t)});var X=l(K),ne=l(X,!0),ie=s(ne,3);xt(ie,{get template(){return C.template}});var Re=s(ie,2);{var Me=e=>{var t=ta();A(()=>{b(t,"src",Ct),b(t,"alt",n(D))}),T(e,t)},He=e=>{var t=aa();A(()=>b(t,"src",Bt)),T(e,t)};H(Re,e=>{n(D)=="CONNECTED"?e(Me):e(He,-1)})}u(X);var q=s(X,4),se=l(q),G=l(se),Le=s(G,3);u(se),u(q);var F=s(q,2),oe=l(F);{var Ve=e=>{var t=Ie(),_=l(t);u(t),A(()=>f(_,`mine ${U}`)),_e("click",t,()=>Ce()),T(e,t)};H(oe,e=>{n(d)&&e(Ve)})}var Ke=s(oe,2);{var Xe=e=>{var t=na(),_=l(t);u(t),A(()=>f(_,`${n(E)??""} Hash/s`)),T(e,t)};H(Ke,e=>{n(E)>0&&e(Xe)})}u(F);var re=s(F,2);{var qe=e=>{var t=ia(),_=s(ft(t),2),Y=l(_),W=l(Y),ce=s(W,3),de=s(ce,2),le=s(de);u(Y),u(_);var $=s(_,6),We=l($,!0);u($);var j=s($,4),$e=l(j,!0);u(j);var ue=s(j),fe=s(ue,2),he=s(fe,2),Q=s(he,3),je=l(Q);u(Q);var pe=s(Q,2),Qe=l(pe,!0);u(pe),A((ze,Ze,Je,et,tt,at)=>{b(W,"src",ee),b(W,"alt",U),f(ce,` ${ze??""}
				${U}`),f(de,` ${Ze??""}
				${M} `),b(le,"src",we),b(le,"alt",M),f(We,Je),f($e,et),f(ue,` Height: ${n(d).height??""} `),f(fe,` Next Payout: ${tt??""}
		${U}`),f(he,` Cash: ${at??""} sats ${M}`),f(je,`${U} category:`),f(Qe,n(d).token_data?.category)},[()=>(n(Z)/100000000n).toLocaleString(),()=>(n(J)/1e8).toLocaleString(),()=>L(C.getNextTarget(n(d),n(c))),()=>Pe(n(x)),()=>(Number(BigInt(n(d).token_data?.amount)/420000n)/1e8).toLocaleString(void 0,{maximumFractionDigits:5}),()=>n(d).value.toLocaleString()]),T(e,t)},Ge=e=>{var t=Ie(),_=l(t);u(t),A(()=>f(_,`Mint Genesis Tx (0.5 ${M})`)),_e("click",t,()=>Se()),T(e,t)},Fe=e=>{var t=it("No tokens in vault");T(e,t)};H(re,e=>{n(d)&&n(d).value>0?e(qe):g?e(Fe,-1):e(Ge,1)})}var Ye=s(re,2);zt(Ye),u(K),A((e,t)=>{f(ne,e),b(G,"src",ee),b(G,"alt",U),f(Le,` ${t??""}
			${U}`)},[()=>n(c).toLocaleString(),()=>(n(S)/100000000n).toLocaleString(void 0,{maximumFractionDigits:5})]),T(B,K),dt()}pt(["click"]);export{Ea as component,Na as universal};
//# sourceMappingURL=11.DeeNbYqF.js.map
