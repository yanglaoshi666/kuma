import{u as g,j as D,T as q}from"./kongponents.es-c2461f07.js";import{d as B,r as v,k as A,a1 as L,o as s,j as o,i as a,g as y,w as k,e as S,b as d,h as p,J as _,t as R,f as F,Y as w,c as E,F as $,q as C,$ as I,an as N}from"./index-8aa6b41f.js";import{_ as T}from"./_plugin-vue_export-helper-c27b6911.js";import{Q as x}from"./QueryParameter-70743f73.js";const P={class:"scanner"},V={class:"scanner-content"},j={class:"mb-2"},ce=B({__name:"EntityScanner",props:{interval:{type:Number,required:!1,default:1e3},retries:{type:Number,required:!1,default:3600},hasError:{type:Boolean,default:!1},loaderFunction:{type:Function,required:!0},canComplete:{type:Boolean,default:!1}},emits:["hide-siblings"],setup(n,{emit:l}){const e=n,t=v(0),r=v(!1),b=v(!1),m=v(null);A(function(){z()}),L(function(){h()});function z(){r.value=!0,b.value=!1,h(),m.value=window.setInterval(()=>{t.value++,e.loaderFunction(),(t.value===e.retries||e.canComplete===!0)&&(h(),r.value=!1,b.value=!0,l("hide-siblings",!0))},e.interval)}function h(){m.value!==null&&window.clearInterval(m.value)}return(u,i)=>(s(),o("div",P,[a("div",V,[y(d(D),{"cta-is-hidden":""},{title:k(()=>[a("div",j,[r.value?(s(),S(d(g),{key:0,icon:"spinner",color:"var(--grey-300)",size:"42"})):n.hasError?(s(),S(d(g),{key:1,icon:"errorFilled",color:"var(--red-500)",size:"42"})):(s(),S(d(g),{key:2,icon:"circleCheck",color:"var(--green-500)",size:"42"}))]),p(),r.value?_(u.$slots,"loading-title",{key:0}):n.hasError?_(u.$slots,"error-title",{key:1}):_(u.$slots,"complete-title",{key:2})]),message:k(()=>[r.value?_(u.$slots,"loading-content",{key:0}):n.hasError?_(u.$slots,"error-content",{key:1}):_(u.$slots,"complete-content",{key:2})]),_:3})])]))}}),Q={class:"form-line-wrapper"},J={key:0,class:"form-line__col"},M=["for"],O=B({__name:"FormFragment",props:{title:{type:String,required:!1,default:null},forAttr:{type:String,required:!1,default:null},allInline:{type:Boolean,default:!1},hideLabelCol:{type:Boolean,default:!1},equalCols:{type:Boolean,default:!1},shiftRight:{type:Boolean,default:!1}},setup(n){const l=n;return(e,t)=>(s(),o("div",Q,[a("div",{class:w(["form-line",{"has-equal-cols":l.equalCols}])},[l.hideLabelCol?F("",!0):(s(),o("div",J,[a("label",{for:l.forAttr,class:"k-input-label"},R(l.title)+`:
        `,9,M)])),p(),a("div",{class:w(["form-line__col",{"is-inline":l.allInline,"is-shifted-right":l.shiftRight}])},[_(e.$slots,"default")],2)],2)]))}});const de=T(O,[["__scopeId","data-v-aa1ca9d8"]]),U={class:"wizard-steps"},Y={class:"wizard-steps__content-wrapper"},G={class:"wizard-steps__indicator"},H={class:"wizard-steps__indicator__controls",role:"tablist","aria-label":"steptabs"},K=["aria-selected","aria-controls"],W={class:"wizard-steps__content"},X={ref:"wizardForm",autocomplete:"off"},Z=["id","aria-labelledby"],ee={key:0,class:"wizard-steps__footer"},te={class:"wizard-steps__sidebar"},se={class:"wizard-steps__sidebar__content"},ae=B({__name:"StepSkeleton",props:{steps:{type:Array,required:!0},sidebarContent:{type:Array,required:!0},footerEnabled:{type:Boolean,default:!0},nextDisabled:{type:Boolean,default:!0}},emits:["go-to-step"],setup(n,{emit:l}){const e=n,t=v(0),r=v(null),b=E(()=>t.value>=e.steps.length-1),m=E(()=>t.value<=0);A(function(){const i=x.get("step");t.value=i?parseInt(i):0,t.value in e.steps&&(r.value=e.steps[t.value].slug)});function z(){t.value++,u(t.value)}function h(){t.value--,u(t.value)}function u(i){r.value=e.steps[i].slug,x.set("step",i),l("go-to-step",i)}return(i,oe)=>(s(),o("div",U,[a("div",Y,[a("header",G,[a("ul",H,[(s(!0),o($,null,C(n.steps,(c,f)=>(s(),o("li",{key:c.slug,"aria-selected":r.value===c.slug?"true":"false","aria-controls":`wizard-steps__content__item--${f}`,class:w([{"is-complete":f<=t.value},"wizard-steps__indicator__item"])},[a("span",null,R(c.label),1)],10,K))),128))])]),p(),a("div",W,[a("form",X,[(s(!0),o($,null,C(n.steps,(c,f)=>(s(),o("div",{id:`wizard-steps__content__item--${f}`,key:c.slug,"aria-labelledby":`wizard-steps__content__item--${f}`,role:"tabpanel",tabindex:"0",class:"wizard-steps__content__item"},[r.value===c.slug?_(i.$slots,c.slug,{key:0},void 0,!0):F("",!0)],8,Z))),128))],512)]),p(),e.footerEnabled?(s(),o("footer",ee,[I(y(d(q),{appearance:"outline","data-testid":"next-previous-button",onClick:h},{default:k(()=>[y(d(g),{icon:"chevronLeft",color:"currentColor",size:"16","hide-title":""}),p(`

          Previous
        `)]),_:1},512),[[N,!d(m)]]),p(),I(y(d(q),{disabled:e.nextDisabled,appearance:"primary","data-testid":"next-step-button",onClick:z},{default:k(()=>[p(`
          Next

          `),y(d(g),{icon:"chevronRight",color:"currentColor",size:"16","hide-title":""})]),_:1},8,["disabled"]),[[N,!d(b)]])])):F("",!0)]),p(),a("aside",te,[a("div",se,[(s(!0),o($,null,C(e.sidebarContent,(c,f)=>(s(),o("div",{key:c.name,class:w(["wizard-steps__sidebar__item",`wizard-steps__sidebar__item--${f}`])},[_(i.$slots,c.name,{},void 0,!0)],2))),128))])])]))}});const ue=T(ae,[["__scopeId","data-v-4d0f6a65"]]);export{de as F,ue as S,ce as _};
