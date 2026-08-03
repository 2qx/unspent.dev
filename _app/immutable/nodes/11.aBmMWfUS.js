import{_ as re}from"../chunks/Ct5FWWRu.js";import{f as I,a as T,t as ce}from"../chunks/he3immRh.js";import{o as de,a as le}from"../chunks/DQDK4gBi.js";import{aI as ue,p as fe,a_ as f,as as kt,t as N,a as he,m as pe,s,c as h,w as n,ap as r,aG as Oe,r as p,f as It}from"../chunks/Brfiz_bE.js";import{s as O}from"../chunks/am97Sg-8.js";import{i as K}from"../chunks/D4zZsfmr.js";import{h as _e}from"../chunks/B-VzXoZa.js";import{a as k}from"../chunks/DyLqUHww.js";import{d as me,a as Z}from"../chunks/jacpTfDd.js";import{p as Pe}from"../chunks/Cl9QR4SW.js";import{h as _,i as ge,k as xt,l as Te,n as yt,Z as ve,_ as be,$ as ke,a0 as Ie,a1 as ye,a2 as Ne,a3 as Ee,p as Ue,w as Ct,m as Ae,b as U,B as we,K as J,L as xe,J as Ce,z as Se,A as Nt,E as Et,C as Be}from"../chunks/COcAbNCw.js";import{c as De}from"../chunks/DY_Due9m.js";import{e as Re,C as Ut}from"../chunks/hh7Yrpmc.js";import"../chunks/DECx5bil.js";import{B as Me}from"../chunks/C-XzXAmY.js";import{C as Le}from"../chunks/B7hCbxZp.js";import{D as He}from"../chunks/DMvn4Q5j.js";import{I as Ve,B as Ke,W as At,T as wt}from"../chunks/DfDkPMZJ.js";import{B as Xe}from"../chunks/DHD6zs4M.js";import{t as qe}from"../chunks/CUR0D9Jq.js";const Ge=!0,Ba=Object.freeze(Object.defineProperty({__proto__:null,prerender:Ge},Symbol.toStringTag,{value:"Module"})),Ye="https://libauth.org/schemas/wallet-template-v0.schema.json",Fe="Photons: A minable CashToken and decentralized energy oracle",We="Photons",$e={covenant:{description:"Emit tokens if a transaction hash is low enough. Or, alternatively, allow anyone to use the vault thread as an oracle for a fee.",name:"Photon Vault",scripts:["lock","unlock"],variables:{age:{description:"The input age (as a number of blocks) claimed to withdraw tokens. The maximum age that can be used to claim tokens is the lessor of covenant thread age or user coins age being used to release tokens.",name:"Age",type:"WalletData"}}},miner:{description:"",name:"Mining Entity",scripts:["unlock","lock"],variables:{miner_key:{description:"The private key that controls this wallet.",name:"Key",type:"HdKey"}}},wallet:{description:"",name:"Funding Entity",scripts:["wallet_unlock","wallet_lock"],variables:{key:{description:"The private key that controls this wallet.",name:"Key",type:"HdKey"}}}},je={release:{data:{bytecode:{age:"0"}},description:"",name:"Release Tokens",transaction:{inputs:[{outpointTransactionHash:"ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",outpointIndex:0,unlockingBytecode:["slot"],sequenceNumber:0}],outputs:[{lockingBytecode:{script:"lock"},valueSatoshis:1200,token:{amount:"2099995000000001",category:"deaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddead",nft:{capability:"mutable",commitment:"123456781f815ab0fb6d8064933edfa60e48ccccc2df9c2b055ba6182b0f3ee989811b7fdeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeadad"}}},{lockingBytecode:{script:"wallet_lock"},valueSatoshis:675,token:{amount:"4999999999",category:"deaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddead"}}],locktime:0,version:2},sourceOutputs:[{lockingBytecode:["slot"],valueSatoshis:2375,token:{amount:"2100000000000000",category:"deaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddead",nft:{capability:"mutable",commitment:"040000009863bfb8140e6a63bfb8140e6a63bfb8140e6a63bfb8140e6a63bfb8140effffdeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddeaddead0000000012341234ffffffff"}}}]}},Qe={unlock:{passes:["release"],name:"Unlock Tokens",script:`<miner_key.public_key> <age> //
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
  //}`},wallet_lock:{lockingType:"standard",name:"Wallet Lock",script:"OP_DUP OP_HASH160 <$(<key.public_key> OP_HASH160)>  OP_EQUALVERIFY OP_CHECKSIG"},message_packet:{name:"Nonce & Target",script:"0xabcdef"}},ze=["BCH_2026_05"],Ze={$schema:Ye,description:Fe,name:We,entities:$e,scenarios:je,scripts:Qe,supported:ze},Je="@unspent/photon",ta={name:Je},tt=_("ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"),ea=_("8bc4c5974bb98a01d08ef9ba1b7208212b66678732519c4881d2fa924c2a159f");class E{static USER_AGENT=ta.name;static tokenAware=!0;static template=Ze;static compiler=ge(this.template);static vm=De();static getLockingBytecode(e={}){const i=this.compiler.generateBytecode({data:e,scriptId:"lock"});if(!i.success)throw new Error("Failed to generate bytecode, script: , "+JSON.stringify(i,null,"  "));return i.bytecode}static getScriptHash(e=!0){return xt(this.getLockingBytecode(),e)}static getAddress(e="bitcoincash"){return Te(this.getLockingBytecode(),e,this.tokenAware)}static getSourceOutput(e){return{lockingBytecode:this.getLockingBytecode(),valueSatoshis:BigInt(e.value),token:e.token_data?{category:_(e.token_data.category),amount:BigInt(e.token_data.amount),nft:e.token_data.nft?{commitment:_(e.token_data.nft.commitment),capability:e.token_data.nft.capability}:void 0}:void 0}}static getInput(e,i,o){return{outpointIndex:e.tx_pos,outpointTransactionHash:_(e.tx_hash),sequenceNumber:i,unlockingBytecode:{data:{bytecode:{age:yt(BigInt(i))},hdKeys:{addressIndex:0,hdPrivateKeys:{miner:o}}},compiler:this.compiler,script:"unlock",valueSatoshis:BigInt(e.value),token:e.token_data?{category:_(e.token_data.category),amount:BigInt(e.token_data.amount),nft:e.token_data.nft?{commitment:_(e.token_data.nft.commitment),capability:e.token_data.nft.capability}:void 0}:void 0}}}static getNextTarget(e,i){let o=e.height<=0?0:i-e.height,c=ve(_(e.token_data?.nft?.commitment).slice(4,36));return be(c*(BigInt(o)+143n)/144n)}static getOutput(e,i,o,c,v){let d=e.height<=0?0:o-e.height;const A=this.getNextTarget(e,o);let y=Uint8Array.from([...ke(v),...A]),w=Ie.hash(y),P=ye(c);if(typeof P=="string")throw P;let b=Ne(P.node,0),u=Ee.signMessageHashSchnorr(b.privateKey,w);if(typeof u=="string")throw u;return{lockingBytecode:{data:{bytecode:{age:yt(BigInt(d))},hdKeys:{addressIndex:0,hdPublicKeys:{miner:Ue(c).hdPublicKey}}},compiler:this.compiler,script:"lock"},valueSatoshis:BigInt(e.value-1500),token:{category:_(e.token_data.category),amount:BigInt(e.token_data?.amount)-BigInt(i),nft:{capability:"mutable",commitment:Uint8Array.from([...y,...u])}}}}static getRewardOutput(e,i,o=tt){let c=Ct(i);if(typeof c=="string")throw c;return{lockingBytecode:c.bytecode,valueSatoshis:700n,token:{category:o,amount:BigInt(e)}}}static generateTemplate(e,i,o,c,v,d=0){const A=[],y=[];let w=v?_(v):tt,P=i.height<=0?0:e-i.height;const b=Math.floor(Number(BigInt(i.token_data.amount)/420000n))-1;let u={locktime:0,version:2,inputs:A,outputs:y};u.inputs.push(this.getInput(i,P,o)),u.outputs=[this.getOutput(i,b,e,o,d)],u.outputs.push(this.getRewardOutput(b,c,w));let B=Ae(u);if(!B.success)throw new Error("generate transaction failed!, errors: "+JSON.stringify(B.errors,null,"  "));let x=B.transaction;const D=[this.getSourceOutput(i)];return this.vm.debug({inputIndex:0,sourceOutputs:D,transaction:x}),U(we(x))}static getNextBatonUtxo(e){let i=J(U(xe(_(e)))),o=Ce(_(e));if(typeof o=="string")throw o;return{tx_pos:0,tx_hash:i,height:-1,value:Number(o.outputs[0].valueSatoshis),token_data:{nft:{commitment:U(o.outputs[0]?.token?.nft?.commitment),capability:"mutable"},amount:String(o.outputs[0]?.token?.amount),category:U(o.outputs[0]?.token?.category)}}}}var aa=I('<h1>About Photons</h1> <p>Photon (PHOTON) is a solar punk meme token powering a decentralized energy oracle on Bitcoin Cash (BCH). It is a fairly distributed minable CashToken calculating its own transaction hash in BitcoinScript.</p> <p>Anyone can monetize their excess electricity by hashing for photons. Photons are released from the vault when someone finds the hash of the transaction is below a certain difficulty threshold. Each release of tokens must also update the hashing difficulty threshold. The difficulty <em>may</em> become correlated with the availability of excess free energy being absorbed by individuals globally.</p> <h2>Begin mining without sats</h2> <p>The Photon Vault keeps a cash balance to facilitate payments to miners. Each payout has an allowance of 1500 sats, for the dust accompanying a miner’s payout and the network fees for the transaction itself.</p> <h2>What is the PoW?</h2> <p>The PoW algorithm for Photons is Hash256(Secp256k1(Sha256)). Specifically, each transaction taking photons from the vault must return the mutable NFT baton with the following data updated:</p> <table><thead><tr><th align="left">Data</th><th align="left">Size</th></tr></thead><tbody><tr><td align="left">nonce</td><td align="left">4-bytes</td></tr><tr><td align="left">next target</td><td align="left">32-bytes (Little Endian)</td></tr><tr><td align="left">Schnorr signature of sha256(nonce + next target)</td><td align="left">64-bytes</td></tr></tbody></table> <p>When included in a transaction, satisfying a number of other requirements, if the double sha256 hash of the resulting transaction is less than the next target, the unlocking script for the photon vault can release a reward.</p> <h2>A decentralized energy oracle</h2> <p>Each miner taking tokens from the vault must update a dynamically changing difficulty value. The current <em>difficulty</em>, combined with the free market price of photons, creates a decentralized price oracle all miners contribute toward maintaining.</p> <p>If someone has already found a payout in this block, the difficulty gets one percent harder. If people stop taking tokens, the difficulty get easier each block.</p> <p>The vault contract also allows anyone to use the price baton for a fee (8000 sats). The price is intended to discourage resetting the oracle baton.</p> <h2>A simple Difficulty Adjustment Algorithm (DAA)</h2> <p>The target frequency for the price oracle is one update per block.</p> <p>The price oracle can be updated multiple times per block, but this makes mining 0.7% harder. If no reward is found in a block it gets 0.7% easier with each block. Mining becomes roughly 100% easier per day the oracle is not updated.</p> <p>The equation is a function of the baton transaction age (in block) and the previous difficulty target.</p> <p>NextTarget = ( PrevTarget * (143 + age) ) / 144</p> <p>The NextTarget MUST match the exact value given by the DAA, it may not be arbitrarily lowered by any miner.</p>',1);function na(M){var e=aa();ue(36),T(M,e)}const ia="data:image/svg+xml,%3csvg%20width='400'%20height='400'%20version='1.1'%20viewBox='0%200%20106%20106'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3cradialGradient%20id='a'%20cx='61'%20cy='5'%20r='53'%20gradientTransform='matrix(-.02%202%20-2%20-.02%2063%20-119)'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23753e0a'%20stop-opacity='.8'%20offset='0'/%3e%3cstop%20stop-color='%2316124d'%20offset='1'/%3e%3c/radialGradient%3e%3clinearGradient%20id='b'%20x1='53'%20x2='13'%20y1='61'%20y2='51'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23f6f4ca'%20offset='0'/%3e%3cstop%20stop-color='%23fff'%20stop-opacity='0'%20offset='1'/%3e%3c/linearGradient%3e%3cpattern%20id='bar'%20viewBox='0,0,10,10'%20width='10%25'%20height='10%25'%3e%3cpolygon%20style='opacity:0.2;fill:%23fff;'%20points='0,5%200,6%2010,6%2010,5'/%3e%3c/pattern%3e%3c/defs%3e%3cpath%20d='m10%203-8%208v86l8%208h86l8-8v-86l-8-8z'%20fill='url(%23a)'/%3e%3cpath%20d='m10%203-8%208v86l8%208h86l8-8v-86l-8-8z'%20fill='url(%23bar)'/%3e%3cpath%20d='m24%2022c26-0.8%2037%2072%2028%2072-10%200.2%200.1-59%2026-85'%20fill='none'%20stroke='url(%23b)'%20stroke-linecap='round'%20stroke-width='5'/%3e%3c/svg%3e",oa="data:image/svg+xml,%3csvg%20width='400'%20height='400'%20version='1.1'%20viewBox='0%200%20106%20106'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3cradialGradient%20id='a'%20cx='61'%20cy='5'%20r='53'%20gradientTransform='matrix(-.02%202%20-2%20-.02%2063%20-119)'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%230d0a75'%20stop-opacity='.8'%20offset='0'/%3e%3cstop%20stop-color='%2316124d'%20offset='1'/%3e%3c/radialGradient%3e%3clinearGradient%20id='b'%20x1='53'%20x2='13'%20y1='61'%20y2='51'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23f6f4ca'%20offset='0'/%3e%3cstop%20stop-color='%23fff'%20stop-opacity='0'%20offset='1'/%3e%3c/linearGradient%3e%3cpattern%20id='bar'%20viewBox='0,0,10,10'%20width='10%25'%20height='10%25'%3e%3crect%20style='opacity:0.2;fill:%23ffffff;'%20height='1'%20width='10'/%3e%3c/pattern%3e%3c/defs%3e%3cpath%20d='m10%203-8%208v86l8%208h86l8-8v-86l-8-8z'%20fill='url(%23a)'/%3e%3cpath%20d='m10%203-8%208v86l8%208h86l8-8v-86l-8-8z'%20fill='url(%23bar)'/%3e%3cpath%20d='m24%2022c26-0.8%2037%2072%2028%2072-10%200.2%200.1-59%2026-85'%20fill='none'%20stroke='url(%23b)'%20stroke-linecap='round'%20stroke-width='5'/%3e%3c/svg%3e";var sa=I('<meta name="description" content="Emit Photons Tokens"/>'),ra=I("<img/>"),ca=I('<img alt="Disconnected"/>'),da=I('<button class="button">mine</button> <button class="button">stop</button>',1),la=I("<p> </p>"),ua=I('<h3>Vault Status</h3> <div class="swap svelte-1400jt5"><div class="svelte-1400jt5"><img width="50"/> <br/> <br/> <img width="18px"/></div></div> <h4>Current Difficulty</h4> <p>Current Target</p> <pre class="svelte-1400jt5"> </pre> <p>Previous Target</p> <pre class="svelte-1400jt5"> </pre> <br/> <br/> <br/> <p> </p> <pre class="svelte-1400jt5"> </pre>',1),fa=I('<button class="button"> </button>'),ha=I('<section><div class="status svelte-1400jt5"> <sub>■</sub> <!> <!></div> <h1>Emit Photons</h1> <div class="swap svelte-1400jt5"><div class="svelte-1400jt5"><img width="50"/> <br/> </div></div> <div class="mining svelte-1400jt5"><!> <!> <p> </p></div> <!> <!></section>');function Da(M,e){fe(e,!0);let i,o,c=f("STATUS_IDLE"),v=f(0),d=f(void 0),A="",y=f(void 0),w=f(""),P,b,u=f(kt([])),B=f(kt([])),x=f(""),D=f(0),et=f(0n),St=f(0),at=f(0n),nt=f(0),L=f(""),m,X="";X=E.getScriptHash();const g=Pe.url.hostname=="vox.cash";let Bt=g?"bch.imaginary.cash":"chipnet.bch.ninja";const it=g?oa:ia,H=g?U(tt):U(ea),V=g?"BCH":"tBCH",C=g?"PHOTON":"tPHOTON",Dt=g?"bitcoincash":"bchtest",Rt=g?Xe:qe,Mt=function(t){if(t.method==="blockchain.headers.subscribe"){let a=t.params[0];r(v,a.height,!0)}else t.method==="blockchain.scripthash.subscribe"?t.params[1]!==A&&(A=t.params[1],r(L,Ut[m.status],!0),rt(),st()):console.log(t)},ot=async function(){r(c,"STATUS_HALTED"),i.terminate(),await ct(),await Be(1e3)},q=async function(){let t=E.generateTemplate(n(v),n(d),n(x),P.getTokenDepositAddress(),H);window.Worker?i.postMessage({task:"START",template:t,key:n(x)}):console.log("Start mining called before worker init.")},Lt=async function(t){let a=await m.request("blockchain.transaction.broadcast",t);if(a instanceof Error)throw r(L,Ut[m.status],!0),a},Ht=async function(){P.tokenGenesis({cashaddr:E.getAddress(Dt),amount:BigInt(21e14),value:50000000n,nft:{capability:"mutable",commitment:"00000000000000000000000000000000000000000000000000000000000000000000ff78"}})},st=async function(){let t=await m.request("blockchain.scripthash.listunspent",n(w),"include_tokens");if(t instanceof Error)throw t;r(u,t,!0),r(St,Nt(n(u),!0),!0),r(et,Et(n(u),H),!0),r(u,n(u).filter(a=>!a.token_data).filter(a=>a.height>0),!0)},rt=async function(){let t=await m.request("blockchain.scripthash.listunspent",X,"include_tokens");if(t instanceof Error)throw t;t=t.filter(a=>a.token_data?.category==H),t.length==1&&(r(d,t[0],!0),r(y,J(n(d).token_data?.nft?.commitment.slice(8,72)),!0),n(c)=="STATUS_MINING"&&(await ot(),await q())),r(B,t,!0),r(nt,Nt(t,!0),!0),r(at,Et(t,H),!0)};async function ct(){if(window.Worker){r(c,"STATUS_IDLE"),o=void 0;const t=await re(()=>import("../chunks/UiJGCxPY.js"),[],import.meta.url);i=new t.default,i.onmessage=function(a){const{status:l,message:S}=a.data;switch(l&&r(c,l,!0),l){case"STATUS_BROADCAST":o=a.data.result,r(D,a.data.hashRate,!0);try{Lt(o)}catch(R){console.error(R)}r(d,E.getNextBatonUtxo(o),!0),q();break}}}else console.error("no worker")}de(async()=>{Ke.StorageProvider=Ve,P=g?await At.named("vox"):await wt.named("vox"),b=g?await At.named("miner"):await wt.named("miner"),r(x,Se(b.mnemonic,b.derivationPath.slice(0,-2),b.isTestnet),!0);let t=Ct(P.getDepositAddress());if(typeof t=="string")throw t;r(w,xt(t.bytecode),!0),m=new Re(E.USER_AGENT,"1.4.1",Bt),await m.connect(),m.on("notification",Mt),await m.subscribe("blockchain.scripthash.subscribe",X),await m.subscribe("blockchain.headers.subscribe"),rt(),st(),ct()}),le(async()=>{i.terminate(),await m.disconnect()});var G=ha();_e("1400jt5",t=>{var a=sa();pe(()=>{Oe.title="γ Photons"}),T(t,a)});var Y=h(G),dt=h(Y,!0),lt=s(dt,3);Me(lt,{get template(){return E.template}});var Vt=s(lt,2);{var Kt=t=>{var a=ra();N(()=>{k(a,"src",Le),k(a,"alt",n(L))}),T(t,a)},Xt=t=>{var a=ca();N(()=>k(a,"src",He)),T(t,a)};K(Vt,t=>{n(L)=="CONNECTED"?t(Kt):t(Xt,-1)})}p(Y);var F=s(Y,4),ut=h(F),W=h(ut),qt=s(W,3);p(ut),p(F);var $=s(F,2),ft=h($);{var Gt=t=>{var a=da(),l=It(a),S=s(l,2);N(()=>{l.disabled=n(c)=="STATUS_MINING",S.disabled=n(c)=="STATUS_IDLE"}),Z("click",l,()=>q()),Z("click",S,()=>ot()),T(t,a)};K(ft,t=>{n(d)&&t(Gt)})}var ht=s(ft,2);{var Yt=t=>{var a=la(),l=h(a);p(a),N(()=>O(l,`${n(D)??""} Hash/s`)),T(t,a)};K(ht,t=>{n(D)>0&&t(Yt)})}var pt=s(ht,2),Ft=h(pt,!0);p(pt),p($);var Ot=s($,2);{var Wt=t=>{var a=ua(),l=s(It(a),2),S=h(l),R=h(S),_t=s(R,3),mt=s(_t,2),Pt=s(mt);p(S),p(l);var j=s(l,6),zt=h(j,!0);p(j);var Q=s(j,4),Zt=h(Q,!0);p(Q);var gt=s(Q),Tt=s(gt,2),vt=s(Tt,2),z=s(vt,3),Jt=h(z);p(z);var bt=s(z,2),te=h(bt,!0);p(bt),N((ee,ae,ne,ie,oe,se)=>{k(R,"src",it),k(R,"alt",C),O(_t,` ${ee??""}
				${C}`),O(mt,` ${ae??""}
				${V} `),k(Pt,"src",Rt),k(Pt,"alt",V),O(zt,ne),O(Zt,ie),O(gt,` Height: ${n(d).height??""} `),O(Tt,` Next Payout: ${oe??""}
		${C}`),O(vt,` Cash: ${se??""} sats ${V}`),O(Jt,`${C} category:`),O(te,n(d).token_data?.category)},[()=>(n(at)/100000000n).toLocaleString(),()=>(n(nt)/1e8).toLocaleString(),()=>U(E.getNextTarget(n(d),n(v))),()=>J(n(y)),()=>(Number(BigInt(n(d).token_data?.amount)/420000n)/1e8).toLocaleString(void 0,{maximumFractionDigits:5}),()=>n(d).value.toLocaleString()]),T(t,a)},$t=t=>{var a=fa(),l=h(a);p(a),N(()=>O(l,`Mint Genesis Tx (0.5 ${V})`)),Z("click",a,()=>Ht()),T(t,a)},jt=t=>{var a=ce("No tokens in vault");T(t,a)};K(Ot,t=>{n(d)&&n(d).value>0?t(Wt):g?t(jt,-1):t($t,1)})}var Qt=s(Ot,2);na(Qt),p(G),N((t,a)=>{O(dt,t),k(W,"src",it),k(W,"alt",C),O(qt,` ${a??""}
			${C}`),O(Ft,n(c))},[()=>n(v).toLocaleString(),()=>(n(et)/100000000n).toLocaleString(void 0,{maximumFractionDigits:5})]),T(M,G),he()}me(["click"]);export{Da as component,Ba as universal};
//# sourceMappingURL=11.aBmMWfUS.js.map
