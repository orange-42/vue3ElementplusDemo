var e=Object.defineProperty,t=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,o=(t,l,a)=>l in t?e(t,l,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[l]=a;import{r as n,o as s,d as i,a as r,b as d,c as u,e as c,t as p,f as m,w as f,g,u as h,h as b,F as y,i as v,n as _,j as C,E as V,k as w,l as k,m as x,p as E,q as L,s as S,v as z,x as D,y as O,z as A,A as P,B as U,C as $,D as j,G as H,H as N}from"./vendor.52eeb014.js";var W=(e,t)=>{for(const[l,a]of t)e[l]=a;return e};function R(){const e=n(17);return s((()=>{console.log("testFn1")})),{age:e}}const I=i({name:"getHooks1",setup(){const{age:e}=R();return s((()=>{console.log("index mounted!!")})),{age:e,ageAdd:function(){console.log(e,"age"),e.value++}}}}),T=g("年龄+1");var B=W(I,[["render",function(e,t,l,a,o,n){const s=r("el-button");return d(),u("div",null,[c("h1",null,"第三个mixins 使用vue3 Hooks 年龄为:"+p(e.age),1),m(s,{onClick:e.ageAdd,type:"primary"},{default:f((()=>[T])),_:1},8,["onClick"])])}]]);const F=i({setup(e,t){const l=n(!1);const a=h(),o=b();console.log(a,o);const s=o.options.routes;return{isCollapse:l,handleOpen:(e,t)=>{console.log(e,t)},handleClose:(e,t)=>{console.log(e,t)},routerList:s,expand:function(){l.value=!l.value}}}}),G=[c("img",{src:"./assets/logo.03d6d6da.png"},null,-1),c("span",null,"Vue3新系统模版",-1)],q=c("i",{class:"el-icon-setting"},null,-1);var M=W(F,[["render",function(e,t,l,a,o,n){const s=r("el-menu-item"),i=r("el-menu");return d(),u("div",null,[m(i,{"default-active":e.$route.path,router:!0,collapse:e.isCollapse,onOpen:e.handleOpen,onClose:e.handleClose,style:_({height:e.$store.state.screenHeight-9+"px"}),class:"nav-side"},{default:f((()=>[c("div",{onClick:t[0]||(t[0]=(...t)=>e.expand&&e.expand(...t)),class:"logo"},G),(d(!0),u(y,null,v(e.routerList[0].children,((e,t)=>(d(),C(s,{class:"align-left",key:t,index:e.name},{title:f((()=>[g(p(e.meta.title),1)])),default:f((()=>[q])),_:2},1032,["index"])))),128))])),_:1},8,["default-active","collapse","onOpen","onClose","style"])])}]]);function J(e,t,l){V.confirm(e,"删除",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((()=>{w(l)?(console.log("进入单个删除",l,"ids"),t.splice(l,1)):K(t,l),k({type:"success",message:"删除成功！"})})).catch((()=>{k({type:"info",message:"已取消删除"})}))}function K(e,t){e.forEach(((l,a)=>{for(let o=0;o<=t.length;o++)t[o]===l.id&&(e.splice(a,1),K(e,t))}))}const Q=i({inheritAttrs:!0,props:{actionName:{type:String,default:function(){return"add"}}},setup(e,t){console.log(t,"ctx11111"),x();const l=n(!1),a=E({confirmLabels:"",titles:"",present:""});s((()=>{L((()=>{const e={confirmLabels:t.attrs.confirmLabel,titles:t.attrs.titles,present:t.attrs.present};Object.assign(a,e)}))}));return{dialogVisible:l,dialogConfig:a,handleClose:e=>{V.confirm("Are you sure to close this dialog?").then((()=>{e()})).catch((()=>{}))},submit:function(){l.value=!1,"add"==e.actionName?t.attrs.onAddRow():t.attrs.onEditRow()}}}}),X={class:"dialog-footer"},Y=g("取消");const Z={inheritAttrs:!0,props:{tableList:{type:Array},tableData:{type:Array},btnList:{type:Array},pageSize:{type:Array,default:function(){return[10,20,30,40]}},pagesize:{type:Number,default:function(){return 10}},currentPage:{type:Number,default:function(){return 1}},totals:{type:Number,default:function(){return 40}}},components:{Dialogs:W(Q,[["render",function(e,t,l,a,o,n){const s=r("el-button"),i=r("el-dialog");return d(),C(i,{modelValue:e.dialogVisible,"onUpdate:modelValue":t[1]||(t[1]=t=>e.dialogVisible=t),title:e.dialogConfig.titles,width:e.dialogConfig.present,"before-close":e.handleClose},{footer:f((()=>[c("span",X,[m(s,{onClick:t[0]||(t[0]=t=>e.dialogVisible=!1)},{default:f((()=>[Y])),_:1}),m(s,{onClick:e.submit,type:"primary"},{default:f((()=>[g(p(e.dialogConfig.confirmLabels),1)])),_:1},8,["onClick"])])])),default:f((()=>[S(e.$slots,"default")])),_:3},8,["modelValue","title","width","before-close"])}]])},setup(e,t){const l=n("add"),a=n([]),o=n(4),s=x();function i(){s.refs.dialogs.dialogVisible=!0}return{currentPage4:o,actionName:l,tableRowClassName:function({row:e,rowIndex:t}){return 1===t?"warning-row":3===t?"success-row":""},handleSizeChange:function(t){e.pagesize=t},add:function(){l.value="add",i(),console.log(s,t,e,"ctxsssprops"),t.emit("resetForm")},selDel:function(){let t=[];e.tableData.forEach(((e,l)=>{console.log(e.id),a.value.forEach((l=>{console.log(l.id),l.id==e.id&&t.push(l.id)}))})),console.log(t,"selArr"),t.length==a.value.length&&J("是否对选中项进行批量删除？",e.tableData,t)},handleCurrentChange:function(t){e.currentPage=t},btnEvent:function(a,o,n){switch(console.log(o,"btnEvent"),a){case"编辑":return l.value="edit",t.emit("edit",n,o),i();case"删除":return J("是否删除该条数据？",e.tableData,o)}},dialogOpen:i,handleSelectionChange:function(e){a.value=e},multipleSelection:a}}},ee={class:"tables"},te={class:"btn-menu"},le={class:"left-btnGroup"},ae=g("新增"),oe=g("批量删除"),ne=c("div",{class:"right-btnGroup"},null,-1);var se=W(Z,[["render",function(e,t,l,a,o,n){const s=r("el-button"),i=r("el-table-column"),h=r("el-table"),b=r("el-pagination"),_=r("Dialogs");return d(),u("div",ee,[c("div",te,[c("div",null,[c("div",le,[m(s,{onClick:a.add,type:"primary",size:"small"},{default:f((()=>[ae])),_:1},8,["onClick"]),m(s,{disabled:0==a.multipleSelection.length,onClick:a.selDel,type:"danger",size:"small"},{default:f((()=>[oe])),_:1},8,["disabled","onClick"])]),ne])]),m(h,{data:l.tableData,style:{width:"100%"},onSelectionChange:a.handleSelectionChange,"row-class-name":a.tableRowClassName},{default:f((()=>[m(i,{type:"selection",width:"55"}),(d(!0),u(y,null,v(l.tableList,((t,l)=>(d(),C(i,{key:l,label:t.label,width:t.width},{default:f((l=>[S(e.$slots,t.fields,{scope:l.row},(()=>[g(p(l.row[t.fields]),1)]))])),_:2},1032,["label","width"])))),128)),m(i,{label:l.btnList[0].label,width:l.btnList[0].width},{default:f((e=>[(d(!0),u(y,null,v(l.btnList[0].options,((t,l)=>(d(),C(s,D({onClick:l=>a.btnEvent(t.title,e.$index,e.row),title:t.title,key:l,type:t.type,[t.property||""]:!0,loading:t.loading,icon:t.icon}),{default:f((()=>[g(p(t.label),1)])),_:2},1040,["onClick","title","type","loading","icon"])))),128))])),_:1},8,["label","width"])])),_:3},8,["data","onSelectionChange","row-class-name"]),m(b,{class:"pagiation",modelValue:l.currentPage,"onUpdate:modelValue":t[0]||(t[0]=e=>l.currentPage=e),"page-sizes":l.pageSize,"page-size":l.pagesize,layout:"total, sizes, prev, pager, next, jumper",total:l.totals,onSizeChange:a.handleSizeChange,onCurrentChange:a.handleCurrentChange},null,8,["modelValue","page-sizes","page-size","total","onSizeChange","onCurrentChange"]),m(_,z({actionName:a.actionName},e.$attrs,{ref:"dialogs"}),{default:f((()=>[c("div",null,[S(e.$slots,"dialog")])])),_:3},16,["actionName"])])}]]);const ie=i({props:{direction:{type:String},popWidth:{type:Number,default:function(){return 150}},triggerWay:{type:String,default:function(){return"hover"}}},setup(e,{emit:n}){const s=E({});return((e,n)=>{for(var s in n||(n={}))l.call(n,s)&&o(e,s,n[s]);if(t)for(var s of t(n))a.call(n,s)&&o(e,s,n[s]);return e})({},O(s))}});const re=i({components:{popOver:W(ie,[["render",function(e,t,l,a,o,n){const s=r("el-popover");return d(),u("div",null,[m(s,{placement:e.direction,width:e.popWidth,trigger:e.triggerWay},{reference:f((()=>[c("div",null,[S(e.$slots,"user")])])),default:f((()=>[c("div",null,[S(e.$slots,"popSlotContet")])])),_:3},8,["placement","width","trigger"])])}]])},setup(e){console.log(e)}}),de={class:"nav-top"},ue=g("homepage"),ce=c("a",{href:"/"},"首页",-1),pe={class:"user-options"},me=c("label",{class:"strong"},[g("用户名称: "),c("span",null,"Marco")],-1),fe=c("div",{class:"slot-content"},[c("ul",null,[c("li",null,"个人信息"),c("li",null,"退出登录")])],-1);const ge={class:"box"},he={class:"navgitor"},be={class:"content-view"},ye={class:"router-view"};var ve=W({name:"index",components:{navs:M,bread:W(re,[["render",function(e,t,l,a,o,n){const s=r("el-breadcrumb-item"),i=r("el-breadcrumb"),h=r("popOver");return d(),u("div",de,[c("div",null,[m(i,{separator:"/"},{default:f((()=>[m(s,{to:{path:"/"}},{default:f((()=>[ue])),_:1}),m(s,null,{default:f((()=>[ce])),_:1}),"首页"!==this.$route.meta.title?(d(),C(s,{key:0},{default:f((()=>[g(p(this.$route.meta.title),1)])),_:1})):A("",!0)])),_:1})]),c("div",pe,[m(h,{direction:"bottom",popWidth:"150"},{user:f((()=>[me])),popSlotContet:f((()=>[fe])),_:1})])])}]]),tables:se},setup(e,t){}},[["render",function(e,t,l,a,o,n){const s=r("navs"),i=r("bread"),p=r("router-view");return d(),u("div",ge,[c("div",he,[m(s)]),c("div",{class:"content",style:_({height:e.$store.state.screenHeight-17+"px"})},[m(i),c("div",be,[c("div",ye,[m(p)])])],4)])}]]);const _e=i({props:{form:{type:Object},titleList:{type:Array},labelWidth:{type:String}},setup:e=>(x(),{btnClick:function(e,t){this.$emit("btnclick",e,t)},getVal:function(e){}})}),Ce={class:"grid-content bg-purple"},Ve={key:6,style:{display:"flex"}};var we=W(_e,[["render",function(e,t,l,a,o,n){const s=r("el-input"),i=r("el-switch"),h=r("el-date-picker"),b=r("el-cascader"),_=r("el-option"),V=r("el-select"),w=r("el-button"),k=r("el-form-item"),x=r("el-col"),E=r("el-row"),L=r("el-form");return d(),u("div",null,[m(L,{ref:"form",model:e.form,"label-width":e.labelWidth},{default:f((()=>[m(E,{gutter:20},{default:f((()=>[(d(!0),u(y,null,v(e.titleList,((t,l)=>(d(),C(x,{key:l,xs:24,xl:t.span,span:t.span},{default:f((()=>[c("div",Ce,[m(k,{label:t.name},{default:f((()=>[1==t.isNum?(d(),C(s,{key:0,size:"small",modelValue:e.form[t.fields],"onUpdate:modelValue":l=>e.form[t.fields]=l,modelModifiers:{number:!0},placeholder:"请输入"+t.name,clearable:""},null,8,["modelValue","onUpdate:modelValue","placeholder"])):1==t.isSwitch?(d(),C(i,{key:1,modelValue:e.form[t.fields],"onUpdate:modelValue":l=>e.form[t.fields]=l,"active-color":"#13ce66","inactive-color":"#ff4949"},null,8,["modelValue","onUpdate:modelValue"])):1==t.isDate?(d(),C(h,{key:2,modelValue:e.form[t.fields],"onUpdate:modelValue":l=>e.form[t.fields]=l,type:t.type,size:"small","value-format":t.format,style:{width:"100% !important"},placeholder:"请输入"+t.name,clearable:""},null,8,["modelValue","onUpdate:modelValue","type","value-format","placeholder"])):1==t.isCascader?(d(),C(b,{key:3,options:t.options,size:"small",style:{width:"100% !important"},modelValue:e.form[t.fields],"onUpdate:modelValue":l=>e.form[t.fields]=l,disabled:t.dis,placeholder:"请输入"+t.name,props:t.props,onChange:l=>e.getVal(e.form[t.fields]),clearable:""},null,8,["options","modelValue","onUpdate:modelValue","disabled","placeholder","props","onChange"])):1==t.textarea?(d(),C(s,{key:4,type:"textarea",rows:2,placeholder:"请输入"+t.name,modelValue:e.form[t.fields],"onUpdate:modelValue":l=>e.form[t.fields]=l},null,8,["placeholder","modelValue","onUpdate:modelValue"])):1==t.isSelect?(d(),C(V,{key:5,size:"small",style:{width:"100% !important"},modelValue:e.form[t.fields],"onUpdate:modelValue":l=>e.form[t.fields]=l,placeholder:"请输入"+t.name,filterable:"",disabled:t.disabled,clearable:""},{default:f((()=>[(d(!0),u(y,null,v(t.selectList,(e=>(d(),C(_,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:2},1032,["modelValue","onUpdate:modelValue","placeholder","disabled"])):1==t.isBtn?(d(),u("div",Ve,[(d(!0),u(y,null,v(t.btnList,((t,l)=>(d(),C(w,{icon:t.icon,size:"mini",onClick:a=>e.btnClick(t,l),type:t.type,key:l},{default:f((()=>[g(p(t.name),1)])),_:2},1032,["icon","onClick","type"])))),128))])):(d(),C(s,{key:7,disabled:t.disabled,clearable:"",size:"small",modelValue:e.form[t.fields],"onUpdate:modelValue":l=>e.form[t.fields]=l,placeholder:"请输入"+t.name},null,8,["disabled","modelValue","onUpdate:modelValue","placeholder"]))])),_:2},1032,["label"])])])),_:2},1032,["xl","span"])))),128))])),_:1})])),_:1},8,["model","label-width"])])}]]);let ke;const xe={},Ee=function(e,t){if(!t)return e();if(void 0===ke){const e=document.createElement("link").relList;ke=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(t.map((e=>{if(e in xe)return;xe[e]=!0;const t=e.endsWith(".css"),l=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${l}`))return;const a=document.createElement("link");return a.rel=t?"stylesheet":ke,t||(a.as="script",a.crossOrigin=""),a.href=e,document.head.appendChild(a),t?new Promise(((e,t)=>{a.addEventListener("load",e),a.addEventListener("error",t)})):void 0}))).then((()=>e()))},Le=[{path:"/",name:"index",meta:{title:"首页"},component:ve,redirect:"/index",children:[...[{name:"index",path:"/index",meta:{title:"首页"},component:()=>Ee((()=>import("./index.1d8379f0.js")),["./assets/index.1d8379f0.js","./assets/index.429fe585.css","./assets/vendor.52eeb014.js"])}],...[{name:"formDemo",path:"/formDemo",meta:{title:"form表单"},component:()=>Ee((()=>import("./index.65db5d61.js")),["./assets/index.65db5d61.js","./assets/vendor.52eeb014.js"])}],...[{name:"HelloWorld",path:"/HelloWorld",meta:{title:"mixins组件"},component:()=>Ee((()=>import("./HelloWorld.ac5d7043.js")),["./assets/HelloWorld.ac5d7043.js","./assets/vendor.52eeb014.js"])}],...[{name:"setupScript",path:"/setupScript",meta:{title:"setupScript例子"},component:()=>Ee((()=>import("./index.8e2f45d2.js")),["./assets/index.8e2f45d2.js","./assets/vendor.52eeb014.js"])}],...[{name:"tableDemo",path:"/tableDemo",meta:{title:"表格组件"},component:()=>Ee((()=>import("./index.06c06294.js")),["./assets/index.06c06294.js","./assets/vendor.52eeb014.js"])}],...[{name:"attrsDemo",path:"/attrsDemo",meta:{title:"attrs示例"},component:()=>Ee((()=>import("./father.dddf7dc6.js")),["./assets/father.dddf7dc6.js","./assets/father.55dec61b.css","./assets/vendor.52eeb014.js"])}]]}],Se=P({history:U(),routes:Le});var ze=W({name:"App",setup(e){const t=n(0),{proxy:l}=x();return $((()=>{var e=document.documentElement.clientHeight||document.body.clientHeight;console.log(e,"hhh"),t.value=e-32,l.$store.state.screenHeight=t})),{screenHeight:t}}},[["render",function(e,t,l,a,o,n){const s=r("router-view");return d(),u("div",null,[m(s)])}]]),De=j({state:{count:1,screenHeight:0},mutations:{inc(e){e.count++}},actions:{},modules:{}});H(ze).use(Se).use(De).use(N).mount("#app");export{W as _,we as f,B as g,J as m,se as t};
