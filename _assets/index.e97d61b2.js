import{a as e,i as t,o as s,j as r,k as i,w as a}from"./index.29609d4f.js";import"./xlsx.a48e520c.js";import"./Trigger.37c59d90.js";import"./omit.2ffcf325.js";import"./_baseSlice.1123a25b.js";import"./index.69ce03f6.js";import"./types.18a8271d.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.b8f23ccf.js";import"./index.1cc941bc.js";import"./DownOutlined.cb72a579.js";import"./index.c42cd4b3.js";import"./CaretDownFilled.b6191c23.js";import"./index.d01b984e.js";import{s as o}from"./index.3f1351f0.js";import"./useTimeout.972bc5d4.js";import"./resizeEvent.f7059d8c.js";import"./domUtils.f6eff73e.js";import"./tsxHelper.9170d194.js";import"./useExpose.4dbece1c.js";import"./animation.32a3eb92.js";import"./useScrollTo.f3126214.js";import"./index.1afd22ef.js";import"./index.9d72a4f6.js";import"./propTypes.8c664f5d.js";import"./index.c2092c4e.js";import"./useContextMenu.621650e0.js";import{B as p,t as c}from"./data.78fbf394.js";var m=e({components:{BasicTree:p,CollapseContainer:o},setup:()=>({treeData:c})});const d={class:"flex p-4"};m.render=function(e,o,p,c,m,l){const n=t("BasicTree"),f=t("CollapseContainer");return s(),r("div",d,[i(f,{title:"基础示例",style:{width:"33%"},class:"mr-4"},{default:a((()=>[i(n,{treeData:e.treeData},null,8,["treeData"])])),_:1}),i(f,{title:"可勾选",class:"mr-4",style:{width:"33%"}},{default:a((()=>[i(n,{treeData:e.treeData,checkable:!0},null,8,["treeData"])])),_:1}),i(f,{title:"默认展开/勾选示例",style:{width:"33%"}},{default:a((()=>[i(n,{treeData:e.treeData,checkable:!0,expandedKeys:["0-0"],checkedKeys:["0-0"]},null,8,["treeData"])])),_:1})])};export default m;