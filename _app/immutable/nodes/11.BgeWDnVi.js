import{f as w,a as E,t as at}from"../chunks/he3immRh.js";import{o as it,a as st}from"../chunks/DQDK4gBi.js";import{aI as ot,p as rt,a_ as p,as as Pe,t as D,a as ct,m as dt,s as o,c as u,w as i,ap as d,aG as lt,r as f,f as ut}from"../chunks/Brfiz_bE.js";import{s as h}from"../chunks/am97Sg-8.js";import{i as Z}from"../chunks/D4zZsfmr.js";import{h as ft}from"../chunks/B-VzXoZa.js";import{a as b}from"../chunks/DyLqUHww.js";import{d as ht,a as _e}from"../chunks/jacpTfDd.js";import{p as Ot}from"../chunks/DbGbc4aB.js";import{h as g,i as pt,k as Ue,l as Pt,n as me,Z as J,_ as _t,$ as mt,a0 as gt,a1 as Tt,a2 as vt,a3 as kt,p as It,w as Ae,m as bt,L as ge,B as X,b as V,v as Et,s as Te,r as ee,z as yt,K as ve,A as ke,E as Ie}from"../chunks/BlyKLz5K.js";import{c as Nt}from"../chunks/CnAjX6o8.js";import{e as Ut,C as be}from"../chunks/hh7Yrpmc.js";import"../chunks/DECx5bil.js";import{B as At}from"../chunks/CWBA9Foa.js";import{C as wt}from"../chunks/B7hCbxZp.js";import{D as xt}from"../chunks/DMvn4Q5j.js";import{I as Ct,B as Bt,W as Ee,T as ye}from"../chunks/b9JR-AL8.js";import{B as St}from"../chunks/DHD6zs4M.js";import{t as Rt}from"../chunks/CUR0D9Jq.js";const Dt=!0,In=Object.freeze(Object.defineProperty({__proto__:null,prerender:Dt},Symbol.toStringTag,{value:"Module"})),Mt="https://libauth.org/schemas/wallet-template-v0.schema.json",Ht="Photons: A minable CashToken and decentralized energy oracle",Lt="Photons",Vt={covenant:{description:"Emit tokens if a transaction hash is low enough. Or, alternatively, allow anyone to use the vault thread as an oracle for a fee.",name:"Photon Vault",scripts:["lock","unlock"],variables:{age:{description:"The input age (as a number of blocks) claimed to withdraw tokens. The maximum age that can be used to claim tokens is the lessor of covenant thread age or user coins age being used to release tokens.",name:"Age",type:"WalletData"}}},miner:{description:"",name:"Mining Entity",scripts:["unlock","lock"],variables:{miner_key:{description:"The private key that controls this wallet.",name:"Key",type:"HdKey"}}},wallet:{description:"",name:"Funding Entity",scripts:["wallet_unlock","wallet_lock"],variables:{key:{description:"The private key that controls this wallet.",name:"Key",type:"HdKey"}}}},Kt={release:{data:{bytecode:{age:"0"}},description:"",name:"Release Tokens",transaction:{inputs:[{outpointTransactionHash:"ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",outpointIndex:0,unlockingBytecode:["slot"],sequenceNumber:0}],outputs:[{lockingBytecode:{script:"lock"},valueSatoshis:1200,token:{amount:"2099995000000001",category:"deaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddead",nft:{capability:"mutable",commitment:"123456781f815ab0fb6d8064933edfa60e48ccccc2df9c2b055ba6182b0f3ee989811b7fdeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeadad"}}},{lockingBytecode:{script:"wallet_lock"},valueSatoshis:675,token:{amount:"4999999999",category:"deaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddead"}}],locktime:0,version:2},sourceOutputs:[{lockingBytecode:["slot"],valueSatoshis:2375,token:{amount:"2100000000000000",category:"deaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddead",nft:{capability:"mutable",commitment:"040000009863bfb8140e6a63bfb8140e6a63bfb8140e6a63bfb8140e6a63bfb8140effffdeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddead0000000012341234ffffffff"}}}]}},Xt={unlock:{passes:["release"],name:"Unlock Tokens",script:`<miner_key.public_key> <age> //
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
  //}`},wallet_lock:{lockingType:"standard",name:"Wallet Lock",script:"OP_DUP OP_HASH160 <$(<key.public_key> OP_HASH160)>  OP_EQUALVERIFY OP_CHECKSIG"},message_packet:{name:"Nonce & Target",script:"0xabcdef"}},qt=["BCH_2026_05"],Gt={$schema:Mt,description:Ht,name:Lt,entities:Vt,scenarios:Kt,scripts:Xt,supported:qt},Yt="@unspent/photon",Ft={name:Yt},te=g("ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"),$t=g("8bc4c5974bb98a01d08ef9ba1b7208212b66678732519c4881d2fa924c2a159f");class M{static USER_AGENT=Ft.name;static tokenAware=!0;static template=Gt;static compiler=pt(this.template);static vm=Nt();static getLockingBytecode(t={}){const a=this.compiler.generateBytecode({data:t,scriptId:"lock"});if(!a.success)throw new Error("Failed to generate bytecode, script: , "+JSON.stringify(a,null,"  "));return a.bytecode}static getScriptHash(t=!0){return Ue(this.getLockingBytecode(),t)}static getAddress(t="bitcoincash"){return Pt(this.getLockingBytecode(),t,this.tokenAware)}static getSourceOutput(t){return{lockingBytecode:this.getLockingBytecode(),valueSatoshis:BigInt(t.value),token:t.token_data?{category:g(t.token_data.category),amount:BigInt(t.token_data.amount),nft:t.token_data.nft?{commitment:g(t.token_data.nft.commitment),capability:t.token_data.nft.capability}:void 0}:void 0}}static getInput(t,a,s){return{outpointIndex:t.tx_pos,outpointTransactionHash:g(t.tx_hash),sequenceNumber:a,unlockingBytecode:{data:{bytecode:{age:me(BigInt(a))},hdKeys:{addressIndex:0,hdPrivateKeys:{miner:s}}},compiler:this.compiler,script:"unlock",valueSatoshis:BigInt(t.value),token:t.token_data?{category:g(t.token_data.category),amount:BigInt(t.token_data.amount),nft:t.token_data.nft?{commitment:g(t.token_data.nft.commitment),capability:t.token_data.nft.capability}:void 0}:void 0}}}static getNextTarget(t,a){let s=t.height<=0?0:a-t.height,l=J(g(t.token_data?.nft?.commitment).slice(4,36));return _t(l*(BigInt(s)+143n)/144n)}static getOutput(t,a,s,l,_){let x=t.height<=0?0:s-t.height;const T=this.getNextTarget(t,s);let v=Uint8Array.from([...mt(_),...T]),k=gt.hash(v),y=Tt(l);if(typeof y=="string")throw y;let C=vt(y.node,0),I=kt.signMessageHashSchnorr(C.privateKey,k);if(typeof I=="string")throw I;return{lockingBytecode:{data:{bytecode:{age:me(BigInt(x))},hdKeys:{addressIndex:0,hdPublicKeys:{miner:It(l).hdPublicKey}}},compiler:this.compiler,script:"lock"},valueSatoshis:BigInt(t.value-1500),token:{category:g(t.token_data.category),amount:BigInt(t.token_data?.amount)-BigInt(a),nft:{capability:"mutable",commitment:Uint8Array.from([...v,...I])}}}}static getRewardOutput(t,a,s=te){let l=Ae(a);if(typeof l=="string")throw l;return{lockingBytecode:l.bytecode,valueSatoshis:800n,token:{category:s,amount:BigInt(t)}}}static slowMine(t,a,s,l,_,x=1,T=500){const v=[],k=[];let y=_?g(_):te,C=a.height<=0?0:t-a.height;const I=Math.floor(Number(BigInt(a.token_data.amount)/420000n))-1;let B={locktime:0,version:2,inputs:v,outputs:k};B.inputs.push(this.getInput(a,C,s));let O,S=!1;const R=J(this.getNextTarget(a,t));for(var r=0;r<T&&!S;r++){B.outputs=[this.getOutput(a,I,t,s,r)],B.outputs.push(this.getRewardOutput(I,l,y));let m=bt(B);if(!m.success)throw new Error("generate transaction failed!, errors: "+JSON.stringify(m.errors,null,"  "));J(ge(X(m.transaction)))<R&&(console.log("SUCCESS! after ",r," tries"),console.log(V(ge(X(m.transaction)))),S=!0,O=m.transaction)}const P=[this.getSourceOutput(a)];if(!S||!O)throw`failed to find a nonce in ${T}`;this.vm.debug({inputIndex:0,sourceOutputs:P,transaction:O}),X(O);const c=Et(O,P,{maximumTokenCommitmentLength:128});if(c!==!0&&x>0)throw c;let H=this.vm.verify({sourceOutputs:P,transaction:O}),L=Te(P)-Te(O.outputs);L>5e3&&(H=`Excessive fees ${L}`),ee(P,_)==0n&&(H="Error checking token input");let N=ee(P,_)-ee(O.outputs,_);if(N!==0n)throw Error(`Claiming should not create or destroy tokens, token difference: ${N}`);return{sourceOutputs:P,transaction:O,verify:H}}}var Qt=w('<h1>About Photons</h1> <p>Photon (PHOTON) is a solar punk meme token powering a decentralized energy oracle on Bitcoin Cash (BCH). It is a fairly distributed minable CashToken calculating its own transaction hash in BitcoinScript.</p> <p>Anyone can monetize their excess electricity by hashing for photons. Photons are released from the vault when someone finds the hash of the transaction is below a certain difficulty threshold. Each release of tokens must also update the hashing difficulty threshold. The difficulty <em>may</em> become correlated with the availability of excess free energy being absorbed by individuals globally.</p> <h2>Begin mining without sats</h2> <p>The Photon Vault keeps cash balance to facilitate payments to miners. Each payout has an allowance of 1500 sats, for the dust accompanying a miner’s payout and the network fees for the transaction itself.</p> <h2>What is the PoW?</h2> <p>The PoW algorithm for Photons Hash256(Schnorr(Sha256)). Specifically, each transaction taking photons from the vault must return the mutable NFT baton with the following data updated:</p> <table><thead><tr><th align="left">Data</th><th align="left">Size</th></tr></thead><tbody><tr><td align="left">nonce</td><td align="left">4-bytes</td></tr><tr><td align="left">next target</td><td align="left">32-bytes (Little Endian)</td></tr><tr><td align="left">Schnorr signature of sha256(nonce + next target)</td><td align="left">64-bytes</td></tr></tbody></table> <p>When included in a transaction, satisfying a number of other requirements, if the double sha256 hash of the resulting transaction is less than the next target, the unlocking script for the photon vault can release a reward.</p> <h2>A decentralized energy oracle</h2> <p>Each miner taking tokens from the vault must update a dynamically changing difficulty value. The current <em>difficulty</em>, combined with the free market price of photons, creates a decentralized price oracle all miners contribute toward maintaining.</p> <p>If someone has already found a payout in this block, the difficulty gets one percent harder. If people stop taking tokens, the difficulty get easier each block.</p> <p>The vault contract also allows anyone to use the price baton for a fee (8000 sats). The price is intended to discourage resetting the oracle baton.</p>',1);function Wt(K){var t=Qt();ot(24),E(K,t)}const jt="data:image/svg+xml,%3csvg%20width='400'%20height='400'%20version='1.1'%20viewBox='0%200%20106%20106'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3cradialGradient%20id='a'%20cx='61'%20cy='5'%20r='53'%20gradientTransform='matrix(-.02%202%20-2%20-.02%2063%20-119)'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23753e0a'%20stop-opacity='.8'%20offset='0'/%3e%3cstop%20stop-color='%2316124d'%20offset='1'/%3e%3c/radialGradient%3e%3clinearGradient%20id='b'%20x1='53'%20x2='13'%20y1='61'%20y2='51'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23f6f4ca'%20offset='0'/%3e%3cstop%20stop-color='%23fff'%20stop-opacity='0'%20offset='1'/%3e%3c/linearGradient%3e%3cpattern%20id='bar'%20viewBox='0,0,10,10'%20width='10%25'%20height='10%25'%3e%3cpolygon%20style='opacity:0.2;fill:%23fff;'%20points='0,5%200,6%2010,6%2010,5'/%3e%3c/pattern%3e%3c/defs%3e%3cpath%20d='m10%203-8%208v86l8%208h86l8-8v-86l-8-8z'%20fill='url(%23a)'/%3e%3cpath%20d='m10%203-8%208v86l8%208h86l8-8v-86l-8-8z'%20fill='url(%23bar)'/%3e%3cpath%20d='m24%2022c26-0.8%2037%2072%2028%2072-10%200.2%200.1-59%2026-85'%20fill='none'%20stroke='url(%23b)'%20stroke-linecap='round'%20stroke-width='5'/%3e%3c/svg%3e",zt="data:image/svg+xml,%3csvg%20width='400'%20height='400'%20version='1.1'%20viewBox='0%200%20106%20106'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3cradialGradient%20id='a'%20cx='61'%20cy='5'%20r='53'%20gradientTransform='matrix(-.02%202%20-2%20-.02%2063%20-119)'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%230d0a75'%20stop-opacity='.8'%20offset='0'/%3e%3cstop%20stop-color='%2316124d'%20offset='1'/%3e%3c/radialGradient%3e%3clinearGradient%20id='b'%20x1='53'%20x2='13'%20y1='61'%20y2='51'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23f6f4ca'%20offset='0'/%3e%3cstop%20stop-color='%23fff'%20stop-opacity='0'%20offset='1'/%3e%3c/linearGradient%3e%3cpattern%20id='bar'%20viewBox='0,0,10,10'%20width='10%25'%20height='10%25'%3e%3crect%20style='opacity:0.2;fill:%23ffffff;'%20height='1'%20width='10'/%3e%3c/pattern%3e%3c/defs%3e%3cpath%20d='m10%203-8%208v86l8%208h86l8-8v-86l-8-8z'%20fill='url(%23a)'/%3e%3cpath%20d='m10%203-8%208v86l8%208h86l8-8v-86l-8-8z'%20fill='url(%23bar)'/%3e%3cpath%20d='m24%2022c26-0.8%2037%2072%2028%2072-10%200.2%200.1-59%2026-85'%20fill='none'%20stroke='url(%23b)'%20stroke-linecap='round'%20stroke-width='5'/%3e%3c/svg%3e";var Zt=w('<meta name="description" content="Emit Photons Tokens"/>'),Jt=w("<img/>"),en=w('<img alt="Disconnected"/>'),Ne=w('<button class="button"> </button>'),tn=w('<h3>Vault Status</h3> <div class="swap svelte-1400jt5"><div class="svelte-1400jt5"><img width="50"/> <br/> <br/> <img width="18px"/></div></div> <h4>Current Difficulty</h4> <p>Current Target</p> <pre class="svelte-1400jt5"> </pre> <p>Previous Target</p> <pre class="svelte-1400jt5"> </pre> <br/> <br/> <br/> <p> </p> <pre class="svelte-1400jt5"> </pre>',1),nn=w('<section><div class="status svelte-1400jt5"> <sub>■</sub> <!> <!></div> <h1>Emit Photons</h1> <div class="swap svelte-1400jt5"><div class="svelte-1400jt5"><img width="50"/> <br/> </div></div> <div class="mining svelte-1400jt5"><!></div> <!> <!></section>');function bn(K,t){rt(t,!0);let a=p(0),s=p(void 0),l="",_=p(void 0),x=p(""),T,v,k=p(Pe([])),y=p(Pe([])),C=p(""),I=p(0n),B=p(0),O=p(0n),S=p(0),R=p(""),r,P="";P=M.getScriptHash();const c=Ot.url.hostname=="vox.cash";let H=c?"bch.imaginary.cash":"chipnet.bch.ninja";const L=c?zt:jt,N=c?V(te):V($t),m=c?"BCH":"tBCH",U=c?"PHOTON":"tPHOTON",we=c?"bitcoincash":"bchtest",xe=c?St:Rt,Ce=c?1:50,Be=function(e){if(e.method==="blockchain.headers.subscribe"){let n=e.params[0];d(a,n.height,!0)}else e.method==="blockchain.scripthash.subscribe"?e.params[1]!==l&&(l=e.params[1],d(R,be[r.status],!0),ae(),ne()):console.log(e)},Se=async function(){let e=M.slowMine(i(a),i(y)[0],i(C),T.getTokenDepositAddress(),N,Ce,5e3),n=V(X(e.transaction));console.log(n),await Re(n)},Re=async function(e){let n=await r.request("blockchain.transaction.broadcast",e);if(n instanceof Error)throw d(R,be[r.status],!0),n},De=async function(){T.tokenGenesis({cashaddr:M.getAddress(we),amount:BigInt(21e14),value:50000000n,nft:{capability:"mutable",commitment:"00000000000000000000000000000000000000000000000000000000000000000000ff78"}})},ne=async function(){let e=await r.request("blockchain.scripthash.listunspent",i(x),"include_tokens");if(e instanceof Error)throw e;d(k,e,!0),d(B,ke(i(k),!0),!0),d(I,Ie(i(k),N),!0),d(k,i(k).filter(n=>!n.token_data).filter(n=>n.height>0),!0)},ae=async function(){let e=await r.request("blockchain.scripthash.listunspent",P,"include_tokens");if(e instanceof Error)throw e;console.log(e),e=e.filter(n=>n.token_data?.category==N),e.length==1&&(d(s,e[0],!0),d(_,ve(i(s).token_data?.nft?.commitment.slice(8,74)),!0)),d(y,e,!0),d(S,ke(e,!0),!0),d(O,Ie(e,N),!0)};it(async()=>{Bt.StorageProvider=Ct,T=c?await Ee.named("vox"):await ye.named("vox"),v=c?await Ee.named("miner"):await ye.named("miner"),d(C,yt(v.mnemonic,v.derivationPath.slice(0,-2),v.isTestnet),!0);let e=Ae(T.getDepositAddress());if(typeof e=="string")throw e;d(x,Ue(e.bytecode),!0),r=new Ut(M.USER_AGENT,"1.4.1",H),await r.connect(),r.on("notification",Be),await r.subscribe("blockchain.scripthash.subscribe",P),await r.subscribe("blockchain.headers.subscribe"),ae(),ne()}),st(async()=>{await r.disconnect()});var q=nn();ft("1400jt5",e=>{var n=Zt();dt(()=>{lt.title="γ Photons"}),E(e,n)});var G=u(q),ie=u(G,!0),se=o(ie,3);At(se,{get template(){return M.template}});var Me=o(se,2);{var He=e=>{var n=Jt();D(()=>{b(n,"src",wt),b(n,"alt",i(R))}),E(e,n)},Le=e=>{var n=en();D(()=>b(n,"src",xt)),E(e,n)};Z(Me,e=>{i(R)=="CONNECTED"?e(He):e(Le,-1)})}f(G);var Y=o(G,4),oe=u(Y),F=u(oe),Ve=o(F,3);f(oe),f(Y);var $=o(Y,2),Ke=u($);{var Xe=e=>{var n=Ne(),A=u(n);f(n),D(()=>h(A,`mine ${U}`)),_e("click",n,()=>Se()),E(e,n)};Z(Ke,e=>{i(s)&&e(Xe)})}f($);var re=o($,2);{var qe=e=>{var n=tn(),A=o(ut(n),2),ce=u(A),Q=u(ce),de=o(Q,3),le=o(de,2),ue=o(le);f(ce),f(A);var W=o(A,6),$e=u(W,!0);f(W);var j=o(W,4),Qe=u(j,!0);f(j);var fe=o(j),he=o(fe,2),Oe=o(he,2),z=o(Oe,3),We=u(z);f(z);var pe=o(z,2),je=u(pe,!0);f(pe),D((ze,Ze,Je,et,tt,nt)=>{b(Q,"src",L),b(Q,"alt",U),h(de,` ${ze??""}
				${U}`),h(le,` ${Ze??""} ${m} `),b(ue,"src",xe),b(ue,"alt",m),h($e,Je),h(Qe,et),h(fe,` Height: ${i(s).height??""} `),h(he,` Next Payout: ${tt??""}
		${U}`),h(Oe,` Cash: ${nt??""} sats ${m}`),h(We,`${U} category:`),h(je,i(s).token_data?.category)},[()=>(i(O)/100000000n).toLocaleString(),()=>(i(S)/1e8).toLocaleString(),()=>V(M.getNextTarget(i(s),i(a))),()=>ve(i(_)),()=>(BigInt(i(s).token_data?.amount)/420000n/100000000n).toLocaleString(),()=>i(s).value.toLocaleString()]),E(e,n)},Ge=e=>{var n=Ne(),A=u(n);f(n),D(()=>h(A,`Mint Genesis Tx (0.5 ${m})`)),_e("click",n,()=>De()),E(e,n)},Ye=e=>{var n=at("No tokens in vault");E(e,n)};Z(re,e=>{i(s)&&i(s).value>0?e(qe):c?e(Ye,-1):e(Ge,1)})}var Fe=o(re,2);Wt(Fe),f(q),D((e,n)=>{h(ie,e),b(F,"src",L),b(F,"alt",U),h(Ve,` ${n??""}
			${U}`)},[()=>i(a).toLocaleString(),()=>(i(I)/100000000n).toLocaleString(void 0,{maximumFractionDigits:5})]),E(K,q),ct()}ht(["click"]);export{bn as component,In as universal};
//# sourceMappingURL=11.BgeWDnVi.js.map
