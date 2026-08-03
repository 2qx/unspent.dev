import{_ as ct}from"../chunks/Ct5FWWRu.js";import{f as y,a as T,t as lt}from"../chunks/he3immRh.js";import{o as dt,a as ut}from"../chunks/DQDK4gBi.js";import{aI as ft,p as ht,a_ as f,as as ke,t as N,a as pt,m as Ot,s,c as h,w as n,ap as r,aG as mt,r as p,f as ye}from"../chunks/Brfiz_bE.js";import{s as O}from"../chunks/am97Sg-8.js";import{i as K}from"../chunks/D4zZsfmr.js";import{h as _t}from"../chunks/B-VzXoZa.js";import{a as k}from"../chunks/DyLqUHww.js";import{d as Pt,a as J}from"../chunks/jacpTfDd.js";import{p as gt}from"../chunks/BeIlfBlr.js";import{h as m,i as Tt,k as Ce,l as bt,n as Ie,Z as vt,_ as kt,$ as yt,a0 as It,a1 as Nt,a2 as Et,a3 as Ut,p as At,w as Se,m as wt,b as U,B as xt,K as Z,L as Ct,J as St,z as Bt,A as Ne,E as Ee,C as Ue}from"../chunks/COcAbNCw.js";import{c as Dt}from"../chunks/DY_Due9m.js";import{e as Rt,C as Ae}from"../chunks/hh7Yrpmc.js";import"../chunks/DECx5bil.js";import{B as Mt}from"../chunks/C-XzXAmY.js";import{C as Lt}from"../chunks/B7hCbxZp.js";import{D as Ht}from"../chunks/DMvn4Q5j.js";import{I as Vt,B as Kt,W as we,T as xe}from"../chunks/DfDkPMZJ.js";import{B as Xt}from"../chunks/DHD6zs4M.js";import{t as qt}from"../chunks/CUR0D9Jq.js";const Gt=!0,Ba=Object.freeze(Object.defineProperty({__proto__:null,prerender:Gt},Symbol.toStringTag,{value:"Module"})),Ft="https://libauth.org/schemas/wallet-template-v0.schema.json",Yt="Photons: A minable CashToken and decentralized energy oracle",Wt="Photons",jt={covenant:{description:"Emit tokens if a transaction hash is low enough. Or, alternatively, allow anyone to use the vault thread as an oracle for a fee.",name:"Photon Vault",scripts:["lock","unlock"],variables:{age:{description:"The input age (as a number of blocks) claimed to withdraw tokens. The maximum age that can be used to claim tokens is the lessor of covenant thread age or user coins age being used to release tokens.",name:"Age",type:"WalletData"}}},miner:{description:"",name:"Mining Entity",scripts:["unlock","lock"],variables:{miner_key:{description:"The private key that controls this wallet.",name:"Key",type:"HdKey"}}},wallet:{description:"",name:"Funding Entity",scripts:["wallet_unlock","wallet_lock"],variables:{key:{description:"The private key that controls this wallet.",name:"Key",type:"HdKey"}}}},$t={release:{data:{bytecode:{age:"0"}},description:"",name:"Release Tokens",transaction:{inputs:[{outpointTransactionHash:"ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",outpointIndex:0,unlockingBytecode:["slot"],sequenceNumber:0}],outputs:[{lockingBytecode:{script:"lock"},valueSatoshis:1200,token:{amount:"2099995000000001",category:"deaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddead",nft:{capability:"mutable",commitment:"123456781f815ab0fb6d8064933edfa60e48ccccc2df9c2b055ba6182b0f3ee989811b7fdeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeadad"}}},{lockingBytecode:{script:"wallet_lock"},valueSatoshis:675,token:{amount:"4999999999",category:"deaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddead"}}],locktime:0,version:2},sourceOutputs:[{lockingBytecode:["slot"],valueSatoshis:2375,token:{amount:"2100000000000000",category:"deaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddead",nft:{capability:"mutable",commitment:"040000009863bfb8140e6a63bfb8140e6a63bfb8140e6a63bfb8140e6a63bfb8140effffdeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddead0000000012341234ffffffff"}}}]}},Qt={unlock:{passes:["release"],name:"Unlock Tokens",script:`<miner_key.public_key> <age> //
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
  //}`},wallet_lock:{lockingType:"standard",name:"Wallet Lock",script:"OP_DUP OP_HASH160 <$(<key.public_key> OP_HASH160)>  OP_EQUALVERIFY OP_CHECKSIG"},message_packet:{name:"Nonce & Target",script:"0xabcdef"}},zt=["BCH_2026_05"],Jt={$schema:Ft,description:Yt,name:Wt,entities:jt,scenarios:$t,scripts:Qt,supported:zt},Zt="@unspent/photon",ea={name:Zt},ee=m("ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"),ta=m("8bc4c5974bb98a01d08ef9ba1b7208212b66678732519c4881d2fa924c2a159f");class E{static USER_AGENT=ea.name;static tokenAware=!0;static template=Jt;static compiler=Tt(this.template);static vm=Dt();static getLockingBytecode(t={}){const i=this.compiler.generateBytecode({data:t,scriptId:"lock"});if(!i.success)throw new Error("Failed to generate bytecode, script: , "+JSON.stringify(i,null,"  "));return i.bytecode}static getScriptHash(t=!0){return Ce(this.getLockingBytecode(),t)}static getAddress(t="bitcoincash"){return bt(this.getLockingBytecode(),t,this.tokenAware)}static getSourceOutput(t){return{lockingBytecode:this.getLockingBytecode(),valueSatoshis:BigInt(t.value),token:t.token_data?{category:m(t.token_data.category),amount:BigInt(t.token_data.amount),nft:t.token_data.nft?{commitment:m(t.token_data.nft.commitment),capability:t.token_data.nft.capability}:void 0}:void 0}}static getInput(t,i,o){return{outpointIndex:t.tx_pos,outpointTransactionHash:m(t.tx_hash),sequenceNumber:i,unlockingBytecode:{data:{bytecode:{age:Ie(BigInt(i))},hdKeys:{addressIndex:0,hdPrivateKeys:{miner:o}}},compiler:this.compiler,script:"unlock",valueSatoshis:BigInt(t.value),token:t.token_data?{category:m(t.token_data.category),amount:BigInt(t.token_data.amount),nft:t.token_data.nft?{commitment:m(t.token_data.nft.commitment),capability:t.token_data.nft.capability}:void 0}:void 0}}}static getNextTarget(t,i){let o=t.height<=0?0:i-t.height,c=vt(m(t.token_data?.nft?.commitment).slice(4,36));return kt(c*(BigInt(o)+143n)/144n)}static getOutput(t,i,o,c,b){let l=t.height<=0?0:o-t.height;const A=this.getNextTarget(t,o);let I=Uint8Array.from([...yt(b),...A]),w=It.hash(I),P=Nt(c);if(typeof P=="string")throw P;let v=Et(P.node,0),u=Ut.signMessageHashSchnorr(v.privateKey,w);if(typeof u=="string")throw u;return{lockingBytecode:{data:{bytecode:{age:Ie(BigInt(l))},hdKeys:{addressIndex:0,hdPublicKeys:{miner:At(c).hdPublicKey}}},compiler:this.compiler,script:"lock"},valueSatoshis:BigInt(t.value-1500),token:{category:m(t.token_data.category),amount:BigInt(t.token_data?.amount)-BigInt(i),nft:{capability:"mutable",commitment:Uint8Array.from([...I,...u])}}}}static getRewardOutput(t,i,o=ee){let c=Se(i);if(typeof c=="string")throw c;return{lockingBytecode:c.bytecode,valueSatoshis:700n,token:{category:o,amount:BigInt(t)}}}static generateTemplate(t,i,o,c,b,l=0){const A=[],I=[];let w=b?m(b):ee,P=i.height<=0?0:t-i.height;const v=Math.floor(Number(BigInt(i.token_data.amount)/420000n))-1;let u={locktime:0,version:2,inputs:A,outputs:I};u.inputs.push(this.getInput(i,P,o)),u.outputs=[this.getOutput(i,v,t,o,l)],u.outputs.push(this.getRewardOutput(v,c,w));let B=wt(u);if(!B.success)throw new Error("generate transaction failed!, errors: "+JSON.stringify(B.errors,null,"  "));let x=B.transaction;const D=[this.getSourceOutput(i)];return this.vm.debug({inputIndex:0,sourceOutputs:D,transaction:x}),U(xt(x))}static getNextBatonUtxo(t){let i=Z(U(Ct(m(t)))),o=St(m(t));if(typeof o=="string")throw o;return{tx_pos:0,tx_hash:i,height:-1,value:Number(o.outputs[0].valueSatoshis),token_data:{nft:{commitment:U(o.outputs[0]?.token?.nft?.commitment),capability:"mutable"},amount:String(o.outputs[0]?.token?.amount),category:U(o.outputs[0]?.token?.category)}}}}var aa=y('<h1>About Photons</h1> <p>Photon (PHOTON) is a solar punk meme token powering a decentralized energy oracle on Bitcoin Cash (BCH). It is a fairly distributed minable CashToken calculating its own transaction hash in BitcoinScript.</p> <p>Anyone can monetize their excess electricity by hashing for photons. Photons are released from the vault when someone finds the hash of the transaction is below a certain difficulty threshold. Each release of tokens must also update the hashing difficulty threshold. The difficulty <em>may</em> become correlated with the availability of excess free energy being absorbed by individuals globally.</p> <h2>Begin mining without sats</h2> <p>The Photon Vault keeps a cash balance to facilitate payments to miners. Each payout has an allowance of 1500 sats, for the dust accompanying a miner’s payout and the network fees for the transaction itself.</p> <h2>What is the PoW?</h2> <p>The PoW algorithm for Photons is Hash256(Secp256k1(Sha256)). Specifically, each transaction taking photons from the vault must return the mutable NFT baton with the following data updated:</p> <table><thead><tr><th align="left">Data</th><th align="left">Size</th></tr></thead><tbody><tr><td align="left">nonce</td><td align="left">4-bytes</td></tr><tr><td align="left">next target</td><td align="left">32-bytes (Little Endian)</td></tr><tr><td align="left">Schnorr signature of sha256(nonce + next target)</td><td align="left">64-bytes</td></tr></tbody></table> <p>When included in a transaction, satisfying a number of other requirements, if the double sha256 hash of the resulting transaction is less than the next target, the unlocking script for the photon vault can release a reward.</p> <h2>A decentralized energy oracle</h2> <p>Each miner taking tokens from the vault must update a dynamically changing difficulty value. The current <em>difficulty</em>, combined with the free market price of photons, creates a decentralized price oracle all miners contribute toward maintaining.</p> <p>If someone has already found a payout in this block, the difficulty gets one percent harder. If people stop taking tokens, the difficulty get easier each block.</p> <p>The vault contract also allows anyone to use the price baton for a fee (8000 sats). The price is intended to discourage resetting the oracle baton.</p> <h2>A simple Difficulty Adjustment Algorithm (DAA)</h2> <p>The target frequency for the price oracle is one update per block.</p> <p>The price oracle can be updated multiple times per block, but this makes mining 0.7% harder. If no reward is found in a block it gets 0.7% easier with each block. Mining becomes roughly 100% easier per day the oracle is not updated.</p> <p>The equation is a function of the baton transaction age (in block) and the previous difficulty target.</p> <p>NextTarget = ( PrevTarget * (143 + age) ) / 144</p> <p>The NextTarget MUST match the exact value given by the DAA, it may not be arbitrarily lowered by any miner.</p> <h2>Thanks</h2> <p>bitcoincashautist’s research provided valuable guidance on this idea & Adaptive Blocksize Limit .</p> <h2>See Also</h2> <ul><li>bitcoincashautist’s <a href="https://bitcoincashresearch.org/t/research-block-difficulty-as-a-price-oracle/1426" rel="nofollow">Research: Block difficulty as a price oracle</a></li> <li><a href="https://bitcoincashresearch.org/t/block-tops-btop-a-minable-cashtoken/" rel="nofollow">An early description</a> of this project (formerly BlockTops) Nov ‘25.</li> <li><a href="https://web.archive.org/web/20210128134553/https://mistcoin.org/" rel="nofollow">MIST: Mineable SLP Token - July 24, 2020</a></li> <li>SAFAs [forthcoming], which is a more sha256 ASIC friendly version of this contract.</li></ul>',1);function na(M){var t=aa();ft(44),T(M,t)}const ia="data:image/svg+xml,%3csvg%20width='400'%20height='400'%20version='1.1'%20viewBox='0%200%20106%20106'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3cradialGradient%20id='a'%20cx='61'%20cy='5'%20r='53'%20gradientTransform='matrix(-.02%202%20-2%20-.02%2063%20-119)'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23753e0a'%20stop-opacity='.8'%20offset='0'/%3e%3cstop%20stop-color='%2316124d'%20offset='1'/%3e%3c/radialGradient%3e%3clinearGradient%20id='b'%20x1='53'%20x2='13'%20y1='61'%20y2='51'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23f6f4ca'%20offset='0'/%3e%3cstop%20stop-color='%23fff'%20stop-opacity='0'%20offset='1'/%3e%3c/linearGradient%3e%3cpattern%20id='bar'%20viewBox='0,0,10,10'%20width='10%25'%20height='10%25'%3e%3cpolygon%20style='opacity:0.2;fill:%23fff;'%20points='0,5%200,6%2010,6%2010,5'/%3e%3c/pattern%3e%3c/defs%3e%3cpath%20d='m10%203-8%208v86l8%208h86l8-8v-86l-8-8z'%20fill='url(%23a)'/%3e%3cpath%20d='m10%203-8%208v86l8%208h86l8-8v-86l-8-8z'%20fill='url(%23bar)'/%3e%3cpath%20d='m24%2022c26-0.8%2037%2072%2028%2072-10%200.2%200.1-59%2026-85'%20fill='none'%20stroke='url(%23b)'%20stroke-linecap='round'%20stroke-width='5'/%3e%3c/svg%3e",oa="data:image/svg+xml,%3csvg%20width='400'%20height='400'%20version='1.1'%20viewBox='0%200%20106%20106'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3cradialGradient%20id='a'%20cx='61'%20cy='5'%20r='53'%20gradientTransform='matrix(-.02%202%20-2%20-.02%2063%20-119)'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%230d0a75'%20stop-opacity='.8'%20offset='0'/%3e%3cstop%20stop-color='%2316124d'%20offset='1'/%3e%3c/radialGradient%3e%3clinearGradient%20id='b'%20x1='53'%20x2='13'%20y1='61'%20y2='51'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23f6f4ca'%20offset='0'/%3e%3cstop%20stop-color='%23fff'%20stop-opacity='0'%20offset='1'/%3e%3c/linearGradient%3e%3cpattern%20id='bar'%20viewBox='0,0,10,10'%20width='10%25'%20height='10%25'%3e%3crect%20style='opacity:0.2;fill:%23ffffff;'%20height='1'%20width='10'/%3e%3c/pattern%3e%3c/defs%3e%3cpath%20d='m10%203-8%208v86l8%208h86l8-8v-86l-8-8z'%20fill='url(%23a)'/%3e%3cpath%20d='m10%203-8%208v86l8%208h86l8-8v-86l-8-8z'%20fill='url(%23bar)'/%3e%3cpath%20d='m24%2022c26-0.8%2037%2072%2028%2072-10%200.2%200.1-59%2026-85'%20fill='none'%20stroke='url(%23b)'%20stroke-linecap='round'%20stroke-width='5'/%3e%3c/svg%3e";var sa=y('<meta name="description" content="Emit Photons Tokens"/>'),ra=y("<img/>"),ca=y('<img alt="Disconnected"/>'),la=y('<button class="button svelte-1400jt5">go</button> <button class="button svelte-1400jt5">stop</button>',1),da=y("<p> </p>"),ua=y('<h3>Vault Status</h3> <div class="swap svelte-1400jt5"><div class="svelte-1400jt5"><img width="50"/> <br/> <br/> <img width="18px"/></div></div> <h4>Current Difficulty</h4> <p>Current Target</p> <pre class="svelte-1400jt5"> </pre> <p>Previous Target</p> <pre class="svelte-1400jt5"> </pre> <br/> <br/> <br/> <p> </p> <pre class="svelte-1400jt5"> </pre>',1),fa=y('<button class="button svelte-1400jt5"> </button>'),ha=y('<section><div class="status svelte-1400jt5"> <sub>■</sub> <!> <!></div> <h1>Capture Photons</h1> <div class="swap svelte-1400jt5"><div class="svelte-1400jt5"><img width="50"/> <br/> </div></div> <div class="mining svelte-1400jt5"><!> <!> <p> </p></div> <!> <!></section>');function Da(M,t){ht(t,!0);let i,o,c=f("STATUS_IDLE"),b=f(0),l=f(void 0),A="",I=f(void 0),w=f(""),P,v,u=f(ke([])),B=f(ke([])),x=f(""),D=f(0),te=f(0n),Be=f(0),ae=f(0n),ne=f(0),L=f(""),_,X="";X=E.getScriptHash();const g=gt.url.hostname=="vox.cash";let De=g?"bch.imaginary.cash":"chipnet.bch.ninja";const ie=g?oa:ia,H=g?U(ee):U(ta),V=g?"BCH":"tBCH",C=g?"PHOTON":"tPHOTON",Re=g?"bitcoincash":"bchtest",Me=g?Xt:qt,Le=function(e){if(e.method==="blockchain.headers.subscribe"){let a=e.params[0];r(b,a.height,!0)}else e.method==="blockchain.scripthash.subscribe"?e.params[1]!==A&&(A=e.params[1],r(L,Ae[_.status],!0),re(),se()):console.log(e)},oe=async function(){r(c,"STATUS_HALTED"),i.terminate(),await Ue(100),await ce(),await Ue(100)},q=async function(){let e=E.generateTemplate(n(b),n(l),n(x),P.getTokenDepositAddress(),H);window.Worker?i.postMessage({task:"START",template:e,key:n(x)}):console.log("Start mining called before worker init.")},He=async function(e){let a=await _.request("blockchain.transaction.broadcast",e);if(a instanceof Error)throw r(L,Ae[_.status],!0),a},Ve=async function(){P.tokenGenesis({cashaddr:E.getAddress(Re),amount:BigInt(21e14),value:50000000n,nft:{capability:"mutable",commitment:"00000000000000000000000000000000000000000000000000000000000000000000ff78"}})},se=async function(){let e=await _.request("blockchain.scripthash.listunspent",n(w),"include_tokens");if(e instanceof Error)throw e;r(u,e,!0),r(Be,Ne(n(u),!0),!0),r(te,Ee(n(u),H),!0),r(u,n(u).filter(a=>!a.token_data).filter(a=>a.height>0),!0)},re=async function(){let e=await _.request("blockchain.scripthash.listunspent",X,"include_tokens");if(e instanceof Error)throw e;e=e.filter(a=>a.token_data?.category==H),e.length==1&&(r(l,e[0],!0),r(I,Z(n(l).token_data?.nft?.commitment.slice(8,72)),!0),n(c)=="STATUS_MINING"&&(await oe(),await q())),r(B,e,!0),r(ne,Ne(e,!0),!0),r(ae,Ee(e,H),!0)};async function ce(){if(window.Worker){r(c,"STATUS_IDLE"),o=void 0;const e=await ct(()=>import("../chunks/CoFtogga.js"),[],import.meta.url);i=new e.default,i.onmessage=function(a){const{status:d,message:S}=a.data;switch(d&&r(c,d,!0),d){case"STATUS_BROADCAST":o=a.data.result,r(D,a.data.hashRate,!0);try{He(o)}catch(R){console.error(R)}r(l,E.getNextBatonUtxo(o),!0),q();break}}}else console.error("no worker")}dt(async()=>{Kt.StorageProvider=Vt,P=g?await we.named("vox"):await xe.named("vox"),v=g?await we.named("miner"):await xe.named("miner"),r(x,Bt(v.mnemonic,v.derivationPath.slice(0,-2),v.isTestnet),!0);let e=Se(P.getDepositAddress());if(typeof e=="string")throw e;r(w,Ce(e.bytecode),!0),_=new Rt(E.USER_AGENT,"1.4.1",De),await _.connect(),_.on("notification",Le),await _.subscribe("blockchain.scripthash.subscribe",X),await _.subscribe("blockchain.headers.subscribe"),re(),se(),ce()}),ut(async()=>{i.terminate(),await _.disconnect()});var G=ha();_t("1400jt5",e=>{var a=sa();Ot(()=>{mt.title="γ Photons"}),T(e,a)});var F=h(G),le=h(F,!0),de=s(le,3);Mt(de,{get template(){return E.template}});var Ke=s(de,2);{var Xe=e=>{var a=ra();N(()=>{k(a,"src",Lt),k(a,"alt",n(L))}),T(e,a)},qe=e=>{var a=ca();N(()=>k(a,"src",Ht)),T(e,a)};K(Ke,e=>{n(L)=="CONNECTED"?e(Xe):e(qe,-1)})}p(F);var Y=s(F,4),ue=h(Y),W=h(ue),Ge=s(W,3);p(ue),p(Y);var j=s(Y,2),fe=h(j);{var Fe=e=>{var a=la(),d=ye(a),S=s(d,2);N(()=>{d.disabled=n(c)=="STATUS_MINING",S.disabled=n(c)=="STATUS_IDLE"}),J("click",d,()=>q()),J("click",S,()=>oe()),T(e,a)};K(fe,e=>{n(l)&&e(Fe)})}var he=s(fe,2);{var Ye=e=>{var a=da(),d=h(a);p(a),N(()=>O(d,`${n(D)??""} Hash/s`)),T(e,a)};K(he,e=>{n(D)>0&&e(Ye)})}var pe=s(he,2),We=h(pe,!0);p(pe),p(j);var Oe=s(j,2);{var je=e=>{var a=ua(),d=s(ye(a),2),S=h(d),R=h(S),me=s(R,3),_e=s(me,2),Pe=s(_e);p(S),p(d);var $=s(d,6),Je=h($,!0);p($);var Q=s($,4),Ze=h(Q,!0);p(Q);var ge=s(Q),Te=s(ge,2),be=s(Te,2),z=s(be,3),et=h(z);p(z);var ve=s(z,2),tt=h(ve,!0);p(ve),N((at,nt,it,ot,st,rt)=>{k(R,"src",ie),k(R,"alt",C),O(me,` ${at??""}
				${C}`),O(_e,` ${nt??""}
				${V} `),k(Pe,"src",Me),k(Pe,"alt",V),O(Je,it),O(Ze,ot),O(ge,` Height: ${n(l).height??""} `),O(Te,` Next Payout: ${st??""}
		${C}`),O(be,` Cash: ${rt??""} sats ${V}`),O(et,`${C} category:`),O(tt,n(l).token_data?.category)},[()=>(n(ae)/100000000n).toLocaleString(),()=>(n(ne)/1e8).toLocaleString(),()=>U(E.getNextTarget(n(l),n(b))),()=>Z(n(I)),()=>(Number(BigInt(n(l).token_data?.amount)/420000n)/1e8).toLocaleString(void 0,{maximumFractionDigits:5}),()=>n(l).value.toLocaleString()]),T(e,a)},$e=e=>{var a=fa(),d=h(a);p(a),N(()=>O(d,`Mint Genesis Tx (0.5 ${V})`)),J("click",a,()=>Ve()),T(e,a)},Qe=e=>{var a=lt("No tokens in vault");T(e,a)};K(Oe,e=>{n(l)&&n(l).value>0?e(je):g?e(Qe,-1):e($e,1)})}var ze=s(Oe,2);na(ze),p(G),N((e,a)=>{O(le,e),k(W,"src",ie),k(W,"alt",C),O(Ge,` ${a??""}
			${C}`),O(We,n(c))},[()=>n(b).toLocaleString(),()=>(n(te)/100000000n).toLocaleString(void 0,{maximumFractionDigits:5})]),T(M,G),pt()}Pt(["click"]);export{Da as component,Ba as universal};
//# sourceMappingURL=11.DLczg6Ut.js.map
