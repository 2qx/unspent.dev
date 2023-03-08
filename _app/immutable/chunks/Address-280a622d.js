import{g as h,i as E}from"./main-6af143be.js";import{S as C,i as q,s as B,e as k,b as _,f as u,g as O,t as p,d as S,h as d,k as T,w as f,l as L,m as P,x as $,y as m,ab as I,N,J as z,z as y,O as A,a as w,c as x,q as g,r as b,u as D}from"./index-ce7c59fc.js";import{W as R,B as U,T as W,C as G,d as J}from"./AddressBlockie-20e04ee4.js";import{t as V}from"./SvelteToast.svelte_svelte_type_style_lang-eaef27a2.js";async function re(r,e,t,a=25,n=0,o="6a0401010102010717",s=0){e=e||"6a04"+E,t=t||"mainnet",s=isNaN(s)?0:s;let i=await h({url:r,method:"post",data:{query:`query SearchOutputsByLockingBytecodePrefix(
        $prefix: String!
        $node: String!
        $exclude_pattern: String!
        $limit: Int
        $offset: Int
        $after: bigint
      ) {
              search_output_prefix(
                args: { locking_bytecode_prefix_hex: $prefix }
                distinct_on: locking_bytecode,
                limit: $limit,
                offset: $offset,
                where: {
                  _and: [
                    { locking_bytecode_pattern: {  _nlike: $exclude_pattern } }
                    {
                      transaction: {
                        block_inclusions: { block: { height: { _gt: $after } } }
                      }
                    }
                    {
                      _or: [
                        {
                          transaction: {
                            block_inclusions: {
                              block: { accepted_by: { node: { name: { _regex: $node } } } }
                            }
                          }
                        }
                        {
                          transaction: {
                            node_validations: { node: { name: { _regex: $node } } }
                          }
                        }
                      ]
                    }
                  ]
                }
              ) {
                locking_bytecode_pattern,
                locking_bytecode
              }
            }`,variables:{prefix:e,exclude_pattern:o,node:t,limit:a,offset:n,after:s}}}).catch(l=>{throw l});if(i.data.error||i.data.errors)throw i.data.error?Error(i.data.error):Error(i.data.errors[0].message);let c=i.data.data.search_output_prefix;return c=c.map(l=>l.locking_bytecode),c=c.map(l=>l.replace("\\x","")),c}async function ne(r,e){let t=await h({url:r,method:"post",data:{query:`query GetTransactionDetails($txid: bytea!) {
        transaction(where: { hash: { _eq:
          $txid
        } } ) {
          block_inclusions {
            transaction_index
            block {
              height # etc.
            }
          }
          data_carrier_outputs {
            locking_bytecode # etc.
          }
          encoded_hex
          fee_satoshis
          hash
          identity_output {
            spent_by {
              input_index # etc.
              transaction {
                hash
              }
            }
          }
          input_count
          input_value_satoshis
          inputs {
            input_index
            outpoint_index
            outpoint_transaction_hash
            redeem_bytecode_pattern
            sequence_number
            unlocking_bytecode
            unlocking_bytecode_pattern
            value_satoshis
          }
          is_coinbase
          locktime
          node_validations {
            validated_at
            node {
              name
            }
          }
          output_count
          output_value_satoshis
          outputs {
            locking_bytecode
            locking_bytecode_pattern
            output_index
            spent_by {
              input_index
              transaction {
                hash
              }
            }
          }
          signing_output {
            spent_by {
              input_index # etc.
              transaction {
                hash
              }
            }
          }
          size_bytes
          version
        }
      }`,variables:{txid:`\\x${e}`}}}).catch(a=>{throw a});if(t.data.error||t.data.errors)throw t.data.error?Error(t.data.error):Error(t.data.errors[0].message);return t.data.data}async function se(r,e){let t=await h({url:r,method:"post",data:{query:`query SearchUnspentOutputsByLockingBytecode($lockingBytecode_literal: _text!) {
        search_output(
          args: { locking_bytecode_hex: $lockingBytecode_literal},
          where: {_not:{spent_by:{value_satoshis:{_gt:0}}}}
        ) {
          output_index
          transaction_hash
          value_satoshis
        }
      }`,variables:{lockingBytecode_literal:`{${e}}`}}}).catch(a=>{throw a});if(t.data.error||t.data.errors)throw t.data.error?Error(t.data.error):Error(t.data.errors[0].message);return t.data.data}const j=async r=>{if("clipboard"in navigator)await navigator.clipboard.writeText(r);else{const e=document.createElement("input");e.type="text",e.disabled=!0,e.style.setProperty("position","fixed"),e.style.setProperty("z-index","-100"),e.style.setProperty("pointer-events","none"),e.style.setProperty("opacity","0"),e.value=r,document.body.appendChild(e),e.click(),e.select(),document.execCommand("copy"),document.body.removeChild(e)}},F=(r,e)=>{async function t(){if(e)try{await j(e),r.dispatchEvent(new CustomEvent("svelte-copy",{detail:e}))}catch(a){r.dispatchEvent(new CustomEvent("svelte-copy:error",{detail:a}))}}return r.addEventListener("click",t,!0),{update:a=>e=a,destroy:()=>r.removeEventListener("click",t,!0)}};function v(r){let e,t,a,n,o,s;return t=new R({props:{$$slots:{default:[X]},$$scope:{ctx:r}}}),{c(){e=T("div"),f(t.$$.fragment)},l(i){e=L(i,"DIV",{});var c=P(e);$(t.$$.fragment,c),c.forEach(d)},m(i,c){_(i,e,c),m(t,e,null),n=!0,o||(s=[I(a=F.call(null,e,r[0])),N(e,"svelte-copy",r[1])],o=!0)},p(i,c){const l={};c&5&&(l.$$scope={dirty:c,ctx:i}),t.$set(l),a&&z(a.update)&&c&1&&a.update.call(null,i[0])},i(i){n||(u(t.$$.fragment,i),n=!0)},o(i){p(t.$$.fragment,i),n=!1},d(i){i&&d(e),y(t),o=!1,A(s)}}}function H(r){let e;return{c(){e=g(r[0])},l(t){e=b(t,r[0])},m(t,a){_(t,e,a)},p(t,a){a&1&&D(e,t[0])},d(t){t&&d(e)}}}function K(r){let e;return{c(){e=g("content_copy")},l(t){e=b(t,"content_copy")},m(t,a){_(t,e,a)},d(t){t&&d(e)}}}function M(r){let e,t,a,n;return e=new G({props:{$$slots:{default:[H]},$$scope:{ctx:r}}}),a=new J({props:{class:"material-icons",$$slots:{default:[K]},$$scope:{ctx:r}}}),{c(){f(e.$$.fragment),t=w(),f(a.$$.fragment)},l(o){$(e.$$.fragment,o),t=x(o),$(a.$$.fragment,o)},m(o,s){m(e,o,s),_(o,t,s),m(a,o,s),n=!0},p(o,s){const i={};s&5&&(i.$$scope={dirty:s,ctx:o}),e.$set(i);const c={};s&4&&(c.$$scope={dirty:s,ctx:o}),a.$set(c)},i(o){n||(u(e.$$.fragment,o),u(a.$$.fragment,o),n=!0)},o(o){p(e.$$.fragment,o),p(a.$$.fragment,o),n=!1},d(o){y(e,o),o&&d(t),y(a,o)}}}function Q(r){let e;return{c(){e=g("Copy address to clipboard")},l(t){e=b(t,"Copy address to clipboard")},m(t,a){_(t,e,a)},d(t){t&&d(e)}}}function X(r){let e,t,a,n;return e=new U({props:{style:"height:fit-content;",color:"secondary",variant:"outlined",$$slots:{default:[M]},$$scope:{ctx:r}}}),a=new W({props:{$$slots:{default:[Q]},$$scope:{ctx:r}}}),{c(){f(e.$$.fragment),t=w(),f(a.$$.fragment)},l(o){$(e.$$.fragment,o),t=x(o),$(a.$$.fragment,o)},m(o,s){m(e,o,s),_(o,t,s),m(a,o,s),n=!0},p(o,s){const i={};s&5&&(i.$$scope={dirty:s,ctx:o}),e.$set(i);const c={};s&4&&(c.$$scope={dirty:s,ctx:o}),a.$set(c)},i(o){n||(u(e.$$.fragment,o),u(a.$$.fragment,o),n=!0)},o(o){p(e.$$.fragment,o),p(a.$$.fragment,o),n=!1},d(o){y(e,o),o&&d(t),y(a,o)}}}function Y(r){let e,t,a=r[0]&&v(r);return{c(){a&&a.c(),e=k()},l(n){a&&a.l(n),e=k()},m(n,o){a&&a.m(n,o),_(n,e,o),t=!0},p(n,[o]){n[0]?a?(a.p(n,o),o&1&&u(a,1)):(a=v(n),a.c(),u(a,1),a.m(e.parentNode,e)):a&&(O(),p(a,1,1,()=>{a=null}),S())},i(n){t||(u(a),t=!0)},o(n){p(a),t=!1},d(n){a&&a.d(n),n&&d(e)}}}function Z(r,e,t){let{address:a}=e;const n=()=>V.push("Address copied to clipboard");return r.$$set=o=>{"address"in o&&t(0,a=o.address)},[a,n]}class ie extends C{constructor(e){super(),q(this,e,Z,Y,B,{address:0})}}export{ie as A,se as a,ne as b,F as c,re as g};
//# sourceMappingURL=Address-280a622d.js.map
