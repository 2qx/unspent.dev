import{g as y,i as E}from"./main-80bf142e.js";import{S as C,i as q,s as B,e as k,b as p,f as l,g as O,t as d,d as S,h as u,k as T,w as f,l as L,m as P,x as $,y as m,ab as I,N,J as z,z as h,O as A,a as w,c as x,q as g,r as b,u as D}from"./index-ce7c59fc.js";import{W as R,B as U,T as W,C as G,d as J}from"./AddressBlockie-69e8f8c8.js";import{t as V}from"./SvelteToast.svelte_svelte_type_style_lang-1bc84498.js";async function re(n,e,t,a=25,r=0,o="6a0401010102010717",s=0){let c=(await j(n,e,t,a,r,o,s)).data.search_output_prefix;return c=c.map(_=>_.locking_bytecode),c=c.map(_=>_.replace("\\x","")),c}async function j(n,e,t,a=25,r=0,o="6a0401010102010717",s=0){e=e||"6a04"+E,t=t||"mainnet",s=isNaN(s)?0:s;let i=await y({url:n,method:"post",data:{query:`query SearchOutputsByLockingBytecodePrefix(
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
              locking_bytecode,
              transaction{
                block_inclusions{
                  block{
                    height
                  }
                }
              }
            }
          }`,variables:{prefix:e,exclude_pattern:o,node:t,limit:a,offset:r,after:s}}}).catch(c=>{throw c});if(i.data.error||i.data.errors)throw i.data.error?Error(i.data.error):Error(i.data.errors[0].message);return i.data}async function se(n,e){let t=await y({url:n,method:"post",data:{query:`query GetTransactionDetails($txid: bytea!) {
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
      }`,variables:{txid:`\\x${e}`}}}).catch(a=>{throw a});if(t.data.error||t.data.errors)throw t.data.error?Error(t.data.error):Error(t.data.errors[0].message);return t.data.data}async function ie(n,e){let t=await y({url:n,method:"post",data:{query:`query SearchUnspentOutputsByLockingBytecode($lockingBytecode_literal: _text!) {
        search_output(
          args: { locking_bytecode_hex: $lockingBytecode_literal},
          where: {_not:{spent_by:{value_satoshis:{_gt:0}}}}
        ) {
          output_index
          transaction_hash
          value_satoshis
        }
      }`,variables:{lockingBytecode_literal:`{${e}}`}}}).catch(a=>{throw a});if(t.data.error||t.data.errors)throw t.data.error?Error(t.data.error):Error(t.data.errors[0].message);return t.data.data}const F=async n=>{if("clipboard"in navigator)await navigator.clipboard.writeText(n);else{const e=document.createElement("input");e.type="text",e.disabled=!0,e.style.setProperty("position","fixed"),e.style.setProperty("z-index","-100"),e.style.setProperty("pointer-events","none"),e.style.setProperty("opacity","0"),e.value=n,document.body.appendChild(e),e.click(),e.select(),document.execCommand("copy"),document.body.removeChild(e)}},H=(n,e)=>{async function t(){if(e)try{await F(e),n.dispatchEvent(new CustomEvent("svelte-copy",{detail:e}))}catch(a){n.dispatchEvent(new CustomEvent("svelte-copy:error",{detail:a}))}}return n.addEventListener("click",t,!0),{update:a=>e=a,destroy:()=>n.removeEventListener("click",t,!0)}};function v(n){let e,t,a,r,o,s;return t=new R({props:{$$slots:{default:[Y]},$$scope:{ctx:n}}}),{c(){e=T("div"),f(t.$$.fragment)},l(i){e=L(i,"DIV",{});var c=P(e);$(t.$$.fragment,c),c.forEach(u)},m(i,c){p(i,e,c),m(t,e,null),r=!0,o||(s=[I(a=H.call(null,e,n[0])),N(e,"svelte-copy",n[1])],o=!0)},p(i,c){const _={};c&5&&(_.$$scope={dirty:c,ctx:i}),t.$set(_),a&&z(a.update)&&c&1&&a.update.call(null,i[0])},i(i){r||(l(t.$$.fragment,i),r=!0)},o(i){d(t.$$.fragment,i),r=!1},d(i){i&&u(e),h(t),o=!1,A(s)}}}function K(n){let e;return{c(){e=g(n[0])},l(t){e=b(t,n[0])},m(t,a){p(t,e,a)},p(t,a){a&1&&D(e,t[0])},d(t){t&&u(e)}}}function M(n){let e;return{c(){e=g("content_copy")},l(t){e=b(t,"content_copy")},m(t,a){p(t,e,a)},d(t){t&&u(e)}}}function Q(n){let e,t,a,r;return e=new G({props:{$$slots:{default:[K]},$$scope:{ctx:n}}}),a=new J({props:{class:"material-icons",$$slots:{default:[M]},$$scope:{ctx:n}}}),{c(){f(e.$$.fragment),t=w(),f(a.$$.fragment)},l(o){$(e.$$.fragment,o),t=x(o),$(a.$$.fragment,o)},m(o,s){m(e,o,s),p(o,t,s),m(a,o,s),r=!0},p(o,s){const i={};s&5&&(i.$$scope={dirty:s,ctx:o}),e.$set(i);const c={};s&4&&(c.$$scope={dirty:s,ctx:o}),a.$set(c)},i(o){r||(l(e.$$.fragment,o),l(a.$$.fragment,o),r=!0)},o(o){d(e.$$.fragment,o),d(a.$$.fragment,o),r=!1},d(o){h(e,o),o&&u(t),h(a,o)}}}function X(n){let e;return{c(){e=g("Copy address to clipboard")},l(t){e=b(t,"Copy address to clipboard")},m(t,a){p(t,e,a)},d(t){t&&u(e)}}}function Y(n){let e,t,a,r;return e=new U({props:{style:"height:fit-content;",color:"secondary",variant:"outlined",$$slots:{default:[Q]},$$scope:{ctx:n}}}),a=new W({props:{$$slots:{default:[X]},$$scope:{ctx:n}}}),{c(){f(e.$$.fragment),t=w(),f(a.$$.fragment)},l(o){$(e.$$.fragment,o),t=x(o),$(a.$$.fragment,o)},m(o,s){m(e,o,s),p(o,t,s),m(a,o,s),r=!0},p(o,s){const i={};s&5&&(i.$$scope={dirty:s,ctx:o}),e.$set(i);const c={};s&4&&(c.$$scope={dirty:s,ctx:o}),a.$set(c)},i(o){r||(l(e.$$.fragment,o),l(a.$$.fragment,o),r=!0)},o(o){d(e.$$.fragment,o),d(a.$$.fragment,o),r=!1},d(o){h(e,o),o&&u(t),h(a,o)}}}function Z(n){let e,t,a=n[0]&&v(n);return{c(){a&&a.c(),e=k()},l(r){a&&a.l(r),e=k()},m(r,o){a&&a.m(r,o),p(r,e,o),t=!0},p(r,[o]){r[0]?a?(a.p(r,o),o&1&&l(a,1)):(a=v(r),a.c(),l(a,1),a.m(e.parentNode,e)):a&&(O(),d(a,1,1,()=>{a=null}),S())},i(r){t||(l(a),t=!0)},o(r){d(a),t=!1},d(r){a&&a.d(r),r&&u(e)}}}function ee(n,e,t){let{address:a}=e;const r=()=>V.push("Address copied to clipboard");return n.$$set=o=>{"address"in o&&t(0,a=o.address)},[a,r]}class ce extends C{constructor(e){super(),q(this,e,ee,Z,B,{address:0})}}export{ce as A,j as a,ie as b,H as c,se as d,re as g};
//# sourceMappingURL=Address-4233ba13.js.map
