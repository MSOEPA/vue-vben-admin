import{a as e,i,o as s,j as t,w as o,k as r,x as n}from"./index.e84487d5.js";import"./xlsx.a48e520c.js";import"./index.e0e9ea26.js";import"./omit.3896c07b.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.f28ab15c.js";import"./CheckOutlined.252282ed.js";import{s as a}from"./index.c5b45e58.js";import"./index.11699fd0.js";import"./colors.ff6d95b7.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.398fc43a.js";import"./index.bab9ff09.js";import"./UpOutlined.0ffab499.js";import"./DownOutlined.1102056e.js";import"./index.af91f443.js";import"./index.6dad0c9e.js";import"./index.d556317e.js";import{B as p,a as m}from"./index.48f7ee02.js";import"./CloseOutlined.0f7fb5e4.js";import"./index.c7a54259.js";import"./index.5c04e818.js";import"./LeftOutlined.7832c85b.js";import"./functional.1555bd27.js";import"./RightOutlined.9c709ff3.js";import"./useTimeout.a6f3b2be.js";import"./useDebounce.94ac03e4.js";import"./useEventListener.8c177df1.js";import"./useBreakpoint.593bdcb4.js";import"./resizeEvent.f9055435.js";import"./index.9fd3b762.js";import"./useWindowSizeFn.ffa6ba78.js";import"./uuid.40269c00.js";import"./download.c30c39aa.js";import{u as d}from"./useForm.c435b577.js";const c=[{field:"field1",component:"Input",label:"字段1",colProps:{span:12},defaultValue:"111"},{field:"field2",component:"Input",label:"字段2",colProps:{span:12}}];var f=e({components:{BasicDrawer:p,BasicForm:a},setup(){const[e,{setFieldsValue:i}]=d({labelWidth:120,schemas:c,showActionButtonGroup:!1,actionColOptions:{span:24}}),[s]=m((e=>{i({field2:e.data,field1:e.info})}));return{register:s,schemas:c,registerForm:e}}});f.render=function(e,a,p,m,d,c){const f=i("BasicForm"),l=i("BasicDrawer");return s(),t(l,n(e.$attrs,{onRegister:e.register,title:"Drawer Title",width:"50%"}),{default:o((()=>[r("div",null,[r(f,{onRegister:e.registerForm},null,8,["onRegister"])])])),_:1},16,["onRegister"])};export default f;