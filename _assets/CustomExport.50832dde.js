import{a as e,i as o,o as t,j as i,k as s,w as r,p as a}from"./index.e84487d5.js";import"./xlsx.a48e520c.js";import"./SettingOutlined.01fc9e75.js";import"./index.e0e9ea26.js";import"./omit.3896c07b.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.f28ab15c.js";import"./CheckOutlined.252282ed.js";import"./index.c5b45e58.js";import"./index.11699fd0.js";import"./colors.ff6d95b7.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.398fc43a.js";import"./index.bab9ff09.js";import"./UpOutlined.0ffab499.js";import"./LeftOutlined.3325f905.js";import"./DownOutlined.1102056e.js";import"./index.af91f443.js";import"./index.7c47310e.js";import"./index.936684d7.js";import"./zh_CN.0242bd16.js";import"./index.6dad0c9e.js";import"./index.d556317e.js";import"./CaretDownFilled.18c980ea.js";import"./CheckOutlined.6461e204.js";import"./CloseOutlined.0f7fb5e4.js";import{s as n}from"./EditTableHeaderIcon.987ce90c.js";import{u as d}from"./index.c7a54259.js";import"./index.5c04e818.js";import"./LeftOutlined.7832c85b.js";import"./functional.1555bd27.js";import"./RightOutlined.9c709ff3.js";import"./useTimeout.a6f3b2be.js";import"./useDebounce.94ac03e4.js";import"./useEventListener.8c177df1.js";import"./useBreakpoint.593bdcb4.js";import"./resizeEvent.f9055435.js";import"./domUtils.55f014ea.js";import"./useExpose.71ee03b4.js";import"./index.9fd3b762.js";import"./useWindowSizeFn.ffa6ba78.js";import"./uuid.40269c00.js";import"./download.c30c39aa.js";import"./useForm.c435b577.js";import"./useFullScreen.fac207f0.js";import"./index.70e30f17.js";import{s as m}from"./index.f162600f.js";import{c as p,d as c,j}from"./data.7596f14f.js";var l=e({components:{BasicTable:n,ExportExcelModel:m},setup(){const[e,{openModal:o}]=d();return{defaultHeader:function({filename:e,bookType:o}){j({data:c,filename:e,write2excelOpts:{bookType:o}})},columns:p,data:c,register:e,openModal:o}}});const f={class:"m-4"},u=a("导出");l.render=function(e,a,n,d,m,p){const c=o("a-button"),j=o("BasicTable"),l=o("ExportExcelModel");return t(),i("div",f,[s(j,{title:"基础表格",columns:e.columns,dataSource:e.data},{toolbar:r((()=>[s(c,{onClick:e.openModal},{default:r((()=>[u])),_:1},8,["onClick"])])),_:1},8,["columns","dataSource"]),s(l,{onRegister:e.register,onSuccess:e.defaultHeader},null,8,["onRegister","onSuccess"])])};export default l;