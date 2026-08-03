import{_ as et}from"../chunks/Ct5FWWRu.js";import{f as N,a as b,t as tt}from"../chunks/he3immRh.js";import{o as at,a as nt}from"../chunks/DQDK4gBi.js";import{aI as it,p as ot,a_ as p,as as he,t as w,a as st,m as rt,s as o,c as l,w as n,ap as d,aG as ct,r as u,f as dt}from"../chunks/Brfiz_bE.js";import{s as f}from"../chunks/am97Sg-8.js";import{i as j}from"../chunks/D4zZsfmr.js";import{h as lt}from"../chunks/B-VzXoZa.js";import{a as v}from"../chunks/DyLqUHww.js";import{d as ut,a as pe}from"../chunks/jacpTfDd.js";import{p as ft}from"../chunks/C3yIrMkc.js";import{h as g,i as ht,k as ke,l as pt,n as Oe,Z as Ot,_ as mt,$ as Pt,a0 as _t,a1 as gt,a2 as Tt,a3 as vt,p as bt,w as Ie,m as kt,b as M,B as It,z as yt,K as me,A as Pe,E as _e}from"../chunks/COcAbNCw.js";import{c as Nt}from"../chunks/DY_Due9m.js";import{e as Et,C as ge}from"../chunks/hh7Yrpmc.js";import"../chunks/DECx5bil.js";import{B as Ut}from"../chunks/C-XzXAmY.js";import{C as At}from"../chunks/B7hCbxZp.js";import{D as wt}from"../chunks/DMvn4Q5j.js";import{I as xt,B as Ct,W as Te,T as ve}from"../chunks/DfDkPMZJ.js";import{B as Bt}from"../chunks/DHD6zs4M.js";import{t as St}from"../chunks/CUR0D9Jq.js";const Dt=!0,ba=Object.freeze(Object.defineProperty({__proto__:null,prerender:Dt},Symbol.toStringTag,{value:"Module"})),Rt="https://libauth.org/schemas/wallet-template-v0.schema.json",Mt="Photons: A minable CashToken and decentralized energy oracle",Ht="Photons",Lt={covenant:{description:"Emit tokens if a transaction hash is low enough. Or, alternatively, allow anyone to use the vault thread as an oracle for a fee.",name:"Photon Vault",scripts:["lock","unlock"],variables:{age:{description:"The input age (as a number of blocks) claimed to withdraw tokens. The maximum age that can be used to claim tokens is the lessor of covenant thread age or user coins age being used to release tokens.",name:"Age",type:"WalletData"}}},miner:{description:"",name:"Mining Entity",scripts:["unlock","lock"],variables:{miner_key:{description:"The private key that controls this wallet.",name:"Key",type:"HdKey"}}},wallet:{description:"",name:"Funding Entity",scripts:["wallet_unlock","wallet_lock"],variables:{key:{description:"The private key that controls this wallet.",name:"Key",type:"HdKey"}}}},Vt={release:{data:{bytecode:{age:"0"}},description:"",name:"Release Tokens",transaction:{inputs:[{outpointTransactionHash:"ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",outpointIndex:0,unlockingBytecode:["slot"],sequenceNumber:0}],outputs:[{lockingBytecode:{script:"lock"},valueSatoshis:1200,token:{amount:"2099995000000001",category:"deaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddead",nft:{capability:"mutable",commitment:"123456781f815ab0fb6d8064933edfa60e48ccccc2df9c2b055ba6182b0f3ee989811b7fdeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeadad"}}},{lockingBytecode:{script:"wallet_lock"},valueSatoshis:675,token:{amount:"4999999999",category:"deaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddead"}}],locktime:0,version:2},sourceOutputs:[{lockingBytecode:["slot"],valueSatoshis:2375,token:{amount:"2100000000000000",category:"deaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddead",nft:{capability:"mutable",commitment:"040000009863bfb8140e6a63bfb8140e6a63bfb8140e6a63bfb8140e6a63bfb8140effffdeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddead0000000012341234ffffffff"}}}]}},Kt={unlock:{passes:["release"],name:"Unlock Tokens",script:`<miner_key.public_key> <age> //
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
  //}`},wallet_lock:{lockingType:"standard",name:"Wallet Lock",script:"OP_DUP OP_HASH160 <$(<key.public_key> OP_HASH160)>  OP_EQUALVERIFY OP_CHECKSIG"},message_packet:{name:"Nonce & Target",script:"0xabcdef"}},Xt=["BCH_2026_05"],qt={$schema:Rt,description:Mt,name:Ht,entities:Lt,scenarios:Vt,scripts:Kt,supported:Xt},Ft="@unspent/photon",Gt={name:Ft},Q=g("ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"),Yt=g("8bc4c5974bb98a01d08ef9ba1b7208212b66678732519c4881d2fa924c2a159f");class x{static USER_AGENT=Gt.name;static tokenAware=!0;static template=qt;static compiler=ht(this.template);static vm=Nt();static getLockingBytecode(t={}){const i=this.compiler.generateBytecode({data:t,scriptId:"lock"});if(!i.success)throw new Error("Failed to generate bytecode, script: , "+JSON.stringify(i,null,"  "));return i.bytecode}static getScriptHash(t=!0){return ke(this.getLockingBytecode(),t)}static getAddress(t="bitcoincash"){return pt(this.getLockingBytecode(),t,this.tokenAware)}static getSourceOutput(t){return{lockingBytecode:this.getLockingBytecode(),valueSatoshis:BigInt(t.value),token:t.token_data?{category:g(t.token_data.category),amount:BigInt(t.token_data.amount),nft:t.token_data.nft?{commitment:g(t.token_data.nft.commitment),capability:t.token_data.nft.capability}:void 0}:void 0}}static getInput(t,i,s){return{outpointIndex:t.tx_pos,outpointTransactionHash:g(t.tx_hash),sequenceNumber:i,unlockingBytecode:{data:{bytecode:{age:Oe(BigInt(i))},hdKeys:{addressIndex:0,hdPrivateKeys:{miner:s}}},compiler:this.compiler,script:"unlock",valueSatoshis:BigInt(t.value),token:t.token_data?{category:g(t.token_data.category),amount:BigInt(t.token_data.amount),nft:t.token_data.nft?{commitment:g(t.token_data.nft.commitment),capability:t.token_data.nft.capability}:void 0}:void 0}}}static getNextTarget(t,i){let s=t.height<=0?0:i-t.height,r=Ot(g(t.token_data?.nft?.commitment).slice(4,36));return mt(r*(BigInt(s)+143n)/144n)}static getOutput(t,i,s,r,c){let E=t.height<=0?0:s-t.height;const U=this.getNextTarget(t,s);let I=Uint8Array.from([...Pt(c),...U]),k=_t.hash(I),O=gt(r);if(typeof O=="string")throw O;let h=Tt(O.node,0),P=vt.signMessageHashSchnorr(h.privateKey,k);if(typeof P=="string")throw P;return{lockingBytecode:{data:{bytecode:{age:Oe(BigInt(E))},hdKeys:{addressIndex:0,hdPublicKeys:{miner:bt(r).hdPublicKey}}},compiler:this.compiler,script:"lock"},valueSatoshis:BigInt(t.value-1500),token:{category:g(t.token_data.category),amount:BigInt(t.token_data?.amount)-BigInt(i),nft:{capability:"mutable",commitment:Uint8Array.from([...I,...P])}}}}static getRewardOutput(t,i,s=Q){let r=Ie(i);if(typeof r=="string")throw r;return{lockingBytecode:r.bytecode,valueSatoshis:800n,token:{category:s,amount:BigInt(t)}}}static generateTemplate(t,i,s,r,c){const E=[],U=[];let I=c?g(c):Q,k=i.height<=0?0:t-i.height;const O=Math.floor(Number(BigInt(i.token_data.amount)/420000n))-1;let h={locktime:0,version:2,inputs:E,outputs:U};h.inputs.push(this.getInput(i,k,s)),h.outputs=[this.getOutput(i,O,t,s,0)],h.outputs.push(this.getRewardOutput(O,r,I));let P=kt(h);if(!P.success)throw new Error("generate transaction failed!, errors: "+JSON.stringify(P.errors,null,"  "));let A=P.transaction;const B=[this.getSourceOutput(i)];return this.vm.debug({inputIndex:0,sourceOutputs:B,transaction:A}),M(It(A))}}var Wt=N('<h1>About Photons</h1> <p>Photon (PHOTON) is a solar punk meme token powering a decentralized energy oracle on Bitcoin Cash (BCH). It is a fairly distributed minable CashToken calculating its own transaction hash in BitcoinScript.</p> <p>Anyone can monetize their excess electricity by hashing for photons. Photons are released from the vault when someone finds the hash of the transaction is below a certain difficulty threshold. Each release of tokens must also update the hashing difficulty threshold. The difficulty <em>may</em> become correlated with the availability of excess free energy being absorbed by individuals globally.</p> <h2>Begin mining without sats</h2> <p>The Photon Vault keeps a cash balance to facilitate payments to miners. Each payout has an allowance of 1500 sats, for the dust accompanying a miner’s payout and the network fees for the transaction itself.</p> <h2>What is the PoW?</h2> <p>The PoW algorithm for Photons is Hash256(Secp256k1(Sha256)). Specifically, each transaction taking photons from the vault must return the mutable NFT baton with the following data updated:</p> <table><thead><tr><th align="left">Data</th><th align="left">Size</th></tr></thead><tbody><tr><td align="left">nonce</td><td align="left">4-bytes</td></tr><tr><td align="left">next target</td><td align="left">32-bytes (Little Endian)</td></tr><tr><td align="left">Schnorr signature of sha256(nonce + next target)</td><td align="left">64-bytes</td></tr></tbody></table> <p>When included in a transaction, satisfying a number of other requirements, if the double sha256 hash of the resulting transaction is less than the next target, the unlocking script for the photon vault can release a reward.</p> <h2>A decentralized energy oracle</h2> <p>Each miner taking tokens from the vault must update a dynamically changing difficulty value. The current <em>difficulty</em>, combined with the free market price of photons, creates a decentralized price oracle all miners contribute toward maintaining.</p> <p>If someone has already found a payout in this block, the difficulty gets one percent harder. If people stop taking tokens, the difficulty get easier each block.</p> <p>The vault contract also allows anyone to use the price baton for a fee (8000 sats). The price is intended to discourage resetting the oracle baton.</p> <h2>A simple Difficulty Adjustment Algorithm (DAA)</h2> <p>The target frequency for the price oracle is one update per block.</p> <p>The price oracle can be updated multiple times per block, but this makes mining 0.7% harder. If no reward is found in a block it gets 0.7% easier with each block. Mining becomes roughly 100% easier per day the oracle is not updated.</p> <p>The equation is a function of the baton transaction age (in block) and the previous difficulty target.</p> <p>NextTarget = ( PrevTarget * (143 + age) ) / 144</p> <p>The NextTarget MUST match the exact value given by the DAA, it may not be arbitrarily lowered by any miner.</p>',1);function $t(C){var t=Wt();it(36),b(C,t)}const jt="data:image/svg+xml,%3csvg%20width='400'%20height='400'%20version='1.1'%20viewBox='0%200%20106%20106'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3cradialGradient%20id='a'%20cx='61'%20cy='5'%20r='53'%20gradientTransform='matrix(-.02%202%20-2%20-.02%2063%20-119)'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23753e0a'%20stop-opacity='.8'%20offset='0'/%3e%3cstop%20stop-color='%2316124d'%20offset='1'/%3e%3c/radialGradient%3e%3clinearGradient%20id='b'%20x1='53'%20x2='13'%20y1='61'%20y2='51'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23f6f4ca'%20offset='0'/%3e%3cstop%20stop-color='%23fff'%20stop-opacity='0'%20offset='1'/%3e%3c/linearGradient%3e%3cpattern%20id='bar'%20viewBox='0,0,10,10'%20width='10%25'%20height='10%25'%3e%3cpolygon%20style='opacity:0.2;fill:%23fff;'%20points='0,5%200,6%2010,6%2010,5'/%3e%3c/pattern%3e%3c/defs%3e%3cpath%20d='m10%203-8%208v86l8%208h86l8-8v-86l-8-8z'%20fill='url(%23a)'/%3e%3cpath%20d='m10%203-8%208v86l8%208h86l8-8v-86l-8-8z'%20fill='url(%23bar)'/%3e%3cpath%20d='m24%2022c26-0.8%2037%2072%2028%2072-10%200.2%200.1-59%2026-85'%20fill='none'%20stroke='url(%23b)'%20stroke-linecap='round'%20stroke-width='5'/%3e%3c/svg%3e",Qt="data:image/svg+xml,%3csvg%20width='400'%20height='400'%20version='1.1'%20viewBox='0%200%20106%20106'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3cradialGradient%20id='a'%20cx='61'%20cy='5'%20r='53'%20gradientTransform='matrix(-.02%202%20-2%20-.02%2063%20-119)'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%230d0a75'%20stop-opacity='.8'%20offset='0'/%3e%3cstop%20stop-color='%2316124d'%20offset='1'/%3e%3c/radialGradient%3e%3clinearGradient%20id='b'%20x1='53'%20x2='13'%20y1='61'%20y2='51'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23f6f4ca'%20offset='0'/%3e%3cstop%20stop-color='%23fff'%20stop-opacity='0'%20offset='1'/%3e%3c/linearGradient%3e%3cpattern%20id='bar'%20viewBox='0,0,10,10'%20width='10%25'%20height='10%25'%3e%3crect%20style='opacity:0.2;fill:%23ffffff;'%20height='1'%20width='10'/%3e%3c/pattern%3e%3c/defs%3e%3cpath%20d='m10%203-8%208v86l8%208h86l8-8v-86l-8-8z'%20fill='url(%23a)'/%3e%3cpath%20d='m10%203-8%208v86l8%208h86l8-8v-86l-8-8z'%20fill='url(%23bar)'/%3e%3cpath%20d='m24%2022c26-0.8%2037%2072%2028%2072-10%200.2%200.1-59%2026-85'%20fill='none'%20stroke='url(%23b)'%20stroke-linecap='round'%20stroke-width='5'/%3e%3c/svg%3e";var zt=N('<meta name="description" content="Emit Photons Tokens"/>'),Zt=N("<img/>"),Jt=N('<img alt="Disconnected"/>'),be=N('<button class="button"> </button>'),ea=N('<h3>Vault Status</h3> <div class="swap svelte-1400jt5"><div class="svelte-1400jt5"><img width="50"/> <br/> <br/> <img width="18px"/></div></div> <h4>Current Difficulty</h4> <p>Current Target</p> <pre class="svelte-1400jt5"> </pre> <p>Previous Target</p> <pre class="svelte-1400jt5"> </pre> <br/> <br/> <br/> <p> </p> <pre class="svelte-1400jt5"> </pre>',1),ta=N('<section><div class="status svelte-1400jt5"> <sub>■</sub> <!> <!></div> <h1>Emit Photons</h1> <div class="swap svelte-1400jt5"><div class="svelte-1400jt5"><img width="50"/> <br/> </div></div> <div class="mining svelte-1400jt5"><!></div> <!> <!></section>');function ka(C,t){ot(t,!0);let i,s,r=p(0),c=p(void 0),E="",U=p(void 0),I=p(""),k,O,h=p(he([])),P=p(he([])),A=p(""),B=p(0n),ye=p(0),z=p(0n),Z=p(0),S=p(""),m,H="";H=x.getScriptHash();const _=ft.url.hostname=="vox.cash";let Ne=_?"bch.imaginary.cash":"chipnet.bch.ninja";const J=_?Qt:jt,D=_?M(Q):M(Yt),R=_?"BCH":"tBCH",y=_?"PHOTON":"tPHOTON",Ee=_?"bitcoincash":"bchtest",Ue=_?Bt:St,Ae=function(e){if(e.method==="blockchain.headers.subscribe"){let a=e.params[0];d(r,a.height,!0)}else e.method==="blockchain.scripthash.subscribe"?e.params[1]!==E&&(E=e.params[1],d(S,ge[m.status],!0),te(),ee()):console.log(e)},we=async function(){let e=x.generateTemplate(n(r),n(P)[0],n(A),k.getTokenDepositAddress(),D);i.postMessage({task:"START",template:e,key:n(A)})},xe=async function(e){let a=await m.request("blockchain.transaction.broadcast",e);if(a instanceof Error)throw d(S,ge[m.status],!0),a},Ce=async function(){k.tokenGenesis({cashaddr:x.getAddress(Ee),amount:BigInt(21e14),value:50000000n,nft:{capability:"mutable",commitment:"00000000000000000000000000000000000000000000000000000000000000000000ff78"}})},ee=async function(){let e=await m.request("blockchain.scripthash.listunspent",n(I),"include_tokens");if(e instanceof Error)throw e;d(h,e,!0),d(ye,Pe(n(h),!0),!0),d(B,_e(n(h),D),!0),d(h,n(h).filter(a=>!a.token_data).filter(a=>a.height>0),!0)},te=async function(){let e=await m.request("blockchain.scripthash.listunspent",H,"include_tokens");if(e instanceof Error)throw e;e=e.filter(a=>a.token_data?.category==D),e.length==1&&(d(c,e[0],!0),d(U,me(n(c).token_data?.nft?.commitment.slice(8,72)),!0)),d(P,e,!0),d(Z,Pe(e,!0),!0),d(z,_e(e,D),!0)};async function Be(){if(window.Worker){s=void 0;const e=await et(()=>import("../chunks/CrHKrrVO.js"),[],import.meta.url);i=new e.default,i.onmessage=function(a){const{status:T,message:F}=a.data;switch(T){case"STATUS_FINISHED":s=a.data.result,xe(s);break}}}else console.error("no worker")}at(async()=>{Ct.StorageProvider=xt,k=_?await Te.named("vox"):await ve.named("vox"),O=_?await Te.named("miner"):await ve.named("miner"),d(A,yt(O.mnemonic,O.derivationPath.slice(0,-2),O.isTestnet),!0);let e=Ie(k.getDepositAddress());if(typeof e=="string")throw e;d(I,ke(e.bytecode),!0),m=new Et(x.USER_AGENT,"1.4.1",Ne),await m.connect(),m.on("notification",Ae),await m.subscribe("blockchain.scripthash.subscribe",H),await m.subscribe("blockchain.headers.subscribe"),te(),ee(),Be()}),nt(async()=>{await m.disconnect()});var L=ta();lt("1400jt5",e=>{var a=zt();rt(()=>{ct.title="γ Photons"}),b(e,a)});var V=l(L),ae=l(V,!0),ne=o(ae,3);Ut(ne,{get template(){return x.template}});var Se=o(ne,2);{var De=e=>{var a=Zt();w(()=>{v(a,"src",At),v(a,"alt",n(S))}),b(e,a)},Re=e=>{var a=Jt();w(()=>v(a,"src",wt)),b(e,a)};j(Se,e=>{n(S)=="CONNECTED"?e(De):e(Re,-1)})}u(V);var K=o(V,4),ie=l(K),X=l(ie),Me=o(X,3);u(ie),u(K);var q=o(K,2),He=l(q);{var Le=e=>{var a=be(),T=l(a);u(a),w(()=>f(T,`mine ${y}`)),pe("click",a,()=>we()),b(e,a)};j(He,e=>{n(c)&&e(Le)})}u(q);var oe=o(q,2);{var Ve=e=>{var a=ea(),T=o(dt(a),2),F=l(T),G=l(F),se=o(G,3),re=o(se,2),ce=o(re);u(F),u(T);var Y=o(T,6),Fe=l(Y,!0);u(Y);var W=o(Y,4),Ge=l(W,!0);u(W);var de=o(W),le=o(de,2),ue=o(le,2),$=o(ue,3),Ye=l($);u($);var fe=o($,2),We=l(fe,!0);u(fe),w(($e,je,Qe,ze,Ze,Je)=>{v(G,"src",J),v(G,"alt",y),f(se,` ${$e??""}
				${y}`),f(re,` ${je??""}
				${R} `),v(ce,"src",Ue),v(ce,"alt",R),f(Fe,Qe),f(Ge,ze),f(de,` Height: ${n(c).height??""} `),f(le,` Next Payout: ${Ze??""}
		${y}`),f(ue,` Cash: ${Je??""} sats ${R}`),f(Ye,`${y} category:`),f(We,n(c).token_data?.category)},[()=>(n(z)/100000000n).toLocaleString(),()=>(n(Z)/1e8).toLocaleString(),()=>M(x.getNextTarget(n(c),n(r))),()=>me(n(U)),()=>(Number(BigInt(n(c).token_data?.amount)/420000n)/1e8).toLocaleString(void 0,{maximumFractionDigits:5}),()=>n(c).value.toLocaleString()]),b(e,a)},Ke=e=>{var a=be(),T=l(a);u(a),w(()=>f(T,`Mint Genesis Tx (0.5 ${R})`)),pe("click",a,()=>Ce()),b(e,a)},Xe=e=>{var a=tt("No tokens in vault");b(e,a)};j(oe,e=>{n(c)&&n(c).value>0?e(Ve):_?e(Xe,-1):e(Ke,1)})}var qe=o(oe,2);$t(qe),u(L),w((e,a)=>{f(ae,e),v(X,"src",J),v(X,"alt",y),f(Me,` ${a??""}
			${y}`)},[()=>n(r).toLocaleString(),()=>(n(B)/100000000n).toLocaleString(void 0,{maximumFractionDigits:5})]),b(C,L),st()}ut(["click"]);export{ka as component,ba as universal};
//# sourceMappingURL=11.BXAuBHwN.js.map
