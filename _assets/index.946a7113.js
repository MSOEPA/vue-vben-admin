import{u as e,q as t,a as o,r as n,s,ae as r,O as a,dh as l,W as i,ad as c,f as u,aP as d,dd as p,t as f,cU as w,F as b,cA as g,B as v,bG as m,bF as h,b as x,cn as D,cO as k,df as y,cr as P,y as B}from"./index.a952a825.js";import{D as C}from"./index.e76aa5fb.js";import{L as O}from"./LeftOutlined.c91acac2.js";import{g as F}from"./tsxHelper.50b89473.js";import{B as T}from"./index.53160084.js";const{t:j}=e(),_={confirmLoading:t.bool,showCancelBtn:t.bool.def(!0),cancelButtonProps:Object,cancelText:t.string.def(j("component.drawer.cancelText")),showOkBtn:t.bool.def(!0),okButtonProps:t.any,okText:t.string.def(j("component.drawer.okText")),okType:t.string.def("primary"),showFooter:t.bool,footerHeight:{type:[String,Number],default:60}},L={isDetail:t.bool,title:t.string.def(""),showDetailBack:t.bool.def(!0),visible:t.bool,loading:t.bool,maskClosable:t.bool.def(!0),getContainer:{type:[Object,String]},scrollOptions:{type:Object,default:null},closeFunc:{type:[Function,Object],default:null},triggerWindowResize:t.bool,destroyOnClose:t.bool,..._};var $=o({inheritAttrs:!1,props:L,emits:["visible-change","ok","close","register"],setup(t,{slots:o,emit:x,attrs:D}){const k=n(null),y=n(!1),P=n(null),{t:B}=e(),j=s((()=>p(f(t),u(P)))),_=s((()=>{const e={placement:"right",...D,...u(j),visible:u(y)};e.title=void 0;const{isDetail:t,width:o,wrapClassName:n,getContainer:s}=e;if(t){o||(e.width="100%");const t="basic-drawer__detail";e.wrapClassName=n?`${n} ${t}`:t,s||(e.getContainer=".layout-content")}return e})),L=s((()=>({...D,...u(_)}))),$=s((()=>{const{footerHeight:e,showFooter:t}=u(_);return t&&e?w(e)?`${e}px`:`${e.replace("px","")}px`:"0px"})),E=s((()=>({position:"relative",height:`calc(100% - ${u($)})`,overflow:"auto",padding:"16px",paddingBottom:"30px"}))),H=s((()=>{var e;return!!(null==(e=u(_))?void 0:e.loading)}));async function N(e){const{closeFunc:t}=u(_);if(x("close",e),t&&g(t)){const e=await t();y.value=!e}else y.value=!1}r((()=>{y.value=t.visible})),a((()=>y.value),(e=>{b((()=>{x("visible-change",e)}))}),{immediate:!1});const z={setDrawerProps:function(e){P.value=p(u(P)||{},e),Reflect.has(e,"visible")&&(y.value=!!e.visible)}};return l((e=>{x("register",z,e.uid)})),()=>i(C,{class:"basic-drawer",onClose:N,...u(L)},{title:()=>function(){if(null==o?void 0:o.title)return F(o,"title");const{title:e}=u(j);return t.isDetail?i(h,{type:"flex",align:"middle",class:"basic-drawer__detail-header"},(()=>i(c,null,t.showDetailBack&&i(v,{size:"small",type:"link",onClick:N},(()=>i(O,null))),e&&i(m,{style:"flex:1",class:["basic-drawer__detail-title","ellipsis","px-2"]},(()=>e)),F(o,"titleToolbar")))):i(T,null,(()=>e||F(o,"title")))}(),default:()=>i(c,null,i("div",{ref:k,style:u(E)},i(d,{absolute:!0,tip:B("component.drawer.loadingText"),loading:u(H)}),F(o)),function(){if(null==o?void 0:o.footer)return F(o,"footer");const{showCancelBtn:e,cancelButtonProps:t,cancelText:n,showOkBtn:s,okType:r,okText:a,okButtonProps:l,confirmLoading:c,showFooter:d}=u(_);return d?i("div",{class:"basic-drawer__footer"},F(o,"insertFooter"),e&&i(v,{...t,onClick:N,class:"mr-2"},(()=>n)),F(o,"centerFooter"),s&&i(v,{type:r,onClick:()=>{x("ok")},...l,loading:c},(()=>a)),F(o,"appendFooter")):null}())})}});const E=x({});function H(){if(!D())throw new Error("Please put useDrawer function in the setup function!");const e=n(null),t=n(!1),o=n("");const s=()=>{const t=u(e);if(!t)throw new Error("instance is undefined!");return t};return[function(n,s){k((()=>{e.value=null,t.value=null,E[u(o)]=null})),u(t)&&y()&&n===u(e)||(o.value=s,e.value=n,t.value=!0)},{setDrawerProps:e=>{s().setDrawerProps(e)},openDrawer:(e=!0,t,n=!0)=>{if(s().setDrawerProps({visible:e}),!t)return;if(n)return E[u(o)]=null,void(E[u(o)]=t);P(f(E[u(o)]),t)||(E[u(o)]=t)}}]}const N=e=>{const t=n(null),o=D(),s=n("");if(!o)throw new Error("useDrawerInner instance is undefined!");const a=()=>{const e=u(t);if(!e)throw new Error("useDrawerInner instance is undefined!");return e};return r((()=>{const t=E[u(s)];t&&e&&g(e)&&b((()=>{e(t)}))})),[(e,n)=>{k((()=>{t.value=null})),s.value=n,t.value=e,o.emit("register",e,n)},{changeLoading:(e=!0)=>{a().setDrawerProps({loading:e})},changeOkLoading:(e=!0)=>{a().setDrawerProps({confirmLoading:e})},closeDrawer:()=>{a().setDrawerProps({visible:!1})},setDrawerProps:e=>{a().setDrawerProps(e)}}]};B($);export{$ as B,N as a,H as u};