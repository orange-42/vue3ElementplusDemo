var e=Object.defineProperty,l=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,a=(l,t,o)=>t in l?e(l,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):l[t]=o;import{r as n,o as r,d as s,a as i,b as d,c as u,e as c,t as p,f as m,w as f,g as h,u as b,h as g,F as y,i as v,n as V,j as _,k as w,l as C,m as k,p as x,q as L,s as O,v as D,x as H,y as U,z,A as E,B as W}from"./vendor.31faceb1.js";let $;const S={},j=function(e,l){if(!l)return e();if(void 0===$){const e=document.createElement("link").relList;$=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(l.map((e=>{if(e in S)return;S[e]=!0;const l=e.endsWith(".css"),t=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${t}`))return;const o=document.createElement("link");return o.rel=l?"stylesheet":$,l||(o.as="script",o.crossOrigin=""),o.href=e,document.head.appendChild(o),l?new Promise(((e,l)=>{o.addEventListener("load",e),o.addEventListener("error",l)})):void 0}))).then((()=>e()))};var A=(e,l)=>{for(const[t,o]of l)e[t]=o;return e};function P(){const e=n(17);return r((()=>{console.log("testFn1")})),{age:e}}const I=s({name:"getHooks1",setup(){const{age:e}=P();return r((()=>{console.log("index mounted!!")})),{age:e,ageAdd:function(){console.log(e,"age"),e.value++}}}}),R=h("年龄+1");var N=A(I,[["render",function(e,l,t,o,a,n){const r=i("el-button");return d(),u("div",null,[c("h1",null,"第三个mixins 使用vue3 Hooks 年龄为:"+p(e.age),1),m(r,{onClick:e.ageAdd,type:"primary"},{default:f((()=>[R])),_:1},8,["onClick"])])}]]);const T=s({setup(e,l){const t=n(!0);const o=b(),a=g();console.log(o,a);const r=a.options.routes;return{isCollapse:t,handleOpen:(e,l)=>{console.log(e,l)},handleClose:(e,l)=>{console.log(e,l)},routerList:r,expand:function(){t.value=!t.value}}}}),q=[c("img",{src:"/assets/logo.03d6d6da.png"},null,-1),c("span",null,"Vue3新系统模版",-1)],B=c("i",{class:"el-icon-setting"},null,-1);var F=A(T,[["render",function(e,l,t,o,a,n){const r=i("el-menu-item"),s=i("el-menu");return d(),u("div",null,[m(s,{"default-active":this.$route.path,router:"",collapse:e.isCollapse,onOpen:e.handleOpen,onClose:e.handleClose,style:V({height:e.$store.state.screenHeight-9+"px"}),class:"nav-side"},{default:f((()=>[c("div",{onClick:l[0]||(l[0]=(...l)=>e.expand&&e.expand(...l)),class:"logo"},q),(d(!0),u(y,null,v(e.routerList,((e,l)=>(d(),_(r,{class:"align-left",key:l,index:e.name},{title:f((()=>[h(p(e.meta.title),1)])),default:f((()=>[B])),_:2},1032,["index"])))),128))])),_:1},8,["default-active","collapse","onOpen","onClose","style"])])}]]);const M={class:"tables"};var G=A({props:{tableList:{type:Array},tableData:{type:Array},btnList:{type:Array}},data:()=>({currentPage4:n(4)}),methods:{tableRowClassName:({row:e,rowIndex:l})=>1===l?"warning-row":3===l?"success-row":"",handleSizeChange(e){console.log(`${e} items per page`)},handleCurrentChange(e){console.log(`current page: ${e}`)}}},[["render",function(e,l,t,o,a,n){const r=i("el-table-column"),s=i("el-button"),c=i("el-table"),b=i("el-pagination");return d(),u("div",M,[m(c,{data:t.tableData,style:{width:"100%"},"row-class-name":n.tableRowClassName},{default:f((()=>[(d(!0),u(y,null,v(t.tableList,((l,t)=>(d(),_(r,{key:t,label:l.label,width:l.width},{default:f((t=>[w(e.$slots,l.fields,{scope:t.row},(()=>[h(p(t.row[l.fields]),1)]))])),_:2},1032,["label","width"])))),128)),m(r,{label:t.btnList[0].label,width:t.btnList[0].width},{default:f((()=>[(d(!0),u(y,null,v(t.btnList[0].options,((e,l)=>(d(),_(s,C({key:l,type:e.type,[e.property||""]:!0,loading:e.loading,icon:e.icon}),{default:f((()=>[h(p(e.label),1)])),_:2},1040,["type","loading","icon"])))),128))])),_:1},8,["label","width"])])),_:3},8,["data","row-class-name"]),m(b,{class:"pagiation",modelValue:e.currentPage,"onUpdate:modelValue":l[0]||(l[0]=l=>e.currentPage=l),"page-sizes":[100,200,300,400],"page-size":100,layout:"total, sizes, prev, pager, next, jumper",total:400,onSizeChange:n.handleSizeChange,onCurrentChange:n.handleCurrentChange},null,8,["modelValue","onSizeChange","onCurrentChange"])])}]]);const J=s({props:{direction:{type:String},popWidth:{type:Number,default:function(){return 150}},triggerWay:{type:String,default:function(){return"hover"}}},setup(e,{emit:n}){const r=k({});return((e,n)=>{for(var r in n||(n={}))t.call(n,r)&&a(e,r,n[r]);if(l)for(var r of l(n))o.call(n,r)&&a(e,r,n[r]);return e})({},x(r))}});const K=s({components:{popOver:A(J,[["render",function(e,l,t,o,a,n){const r=i("el-popover");return d(),u("div",null,[m(r,{placement:e.direction,width:e.popWidth,trigger:e.triggerWay},{reference:f((()=>[c("div",null,[w(e.$slots,"user")])])),default:f((()=>[c("div",null,[w(e.$slots,"popSlotContet")])])),_:3},8,["placement","width","trigger"])])}]])},setup(e){console.log(e)}}),Q={class:"nav-top"},X=h("homepage"),Y=c("a",{href:"/"},"首页",-1),Z={class:"user-options"},ee=c("label",{class:"strong"},[h("用户名称: "),c("span",null,"Marco")],-1),le=c("div",{class:"slot-content"},[c("ul",null,[c("li",null,"个人信息"),c("li",null,"退出登录")])],-1);const te={class:"box"},oe={class:"navgitor"},ae={class:"content-view"};var ne=A({name:"index",components:{navs:F,bread:A(K,[["render",function(e,l,t,o,a,n){const r=i("el-breadcrumb-item"),s=i("el-breadcrumb"),b=i("popOver");return d(),u("div",Q,[c("div",null,[m(s,{separator:"/"},{default:f((()=>[m(r,{to:{path:"/"}},{default:f((()=>[X])),_:1}),m(r,null,{default:f((()=>[Y])),_:1}),"首页"!==this.$route.matched[0].meta.title?(d(),_(r,{key:0},{default:f((()=>[h(p(this.$route.matched[0].meta.title),1)])),_:1})):L("",!0)])),_:1})]),c("div",Z,[m(b,{direction:"bottom",popWidth:"150"},{user:f((()=>[ee])),popSlotContet:f((()=>[le])),_:1})])])}]]),tables:G},setup(e,l){}},[["render",function(e,l,t,o,a,n){const r=i("navs"),s=i("bread"),p=i("router-view");return d(),u("div",te,[c("div",oe,[m(r)]),c("div",{class:"content",style:V({height:e.$store.state.screenHeight-17+"px"})},[m(s),c("div",ae,[m(p)])],4)])}]]);const re=s({props:{form:{type:Object},titleList:{type:Array},labelWidth:{type:String}},setup:e=>(O(),{btnClick:function(e,l){this.$emit("btnclick",e,l)},getVal:function(e){}})}),se={class:"grid-content bg-purple"},ie={key:6,style:{display:"flex"}};var de=A(re,[["render",function(e,l,t,o,a,n){const r=i("el-input"),s=i("el-switch"),b=i("el-date-picker"),g=i("el-cascader"),V=i("el-option"),w=i("el-select"),C=i("el-button"),k=i("el-form-item"),x=i("el-col"),L=i("el-form"),O=i("el-row");return d(),u("div",null,[m(O,{gutter:20},{default:f((()=>[m(L,{ref:"form",model:e.form,"label-width":e.labelWidth},{default:f((()=>[(d(!0),u(y,null,v(e.titleList,((l,t)=>(d(),_(x,{key:t,xs:24,span:l.span},{default:f((()=>[c("div",se,[m(k,{label:l.name},{default:f((()=>[1==l.isNum?(d(),_(r,{key:0,size:"small",modelValue:e.form[l.fields],"onUpdate:modelValue":t=>e.form[l.fields]=t,modelModifiers:{number:!0},placeholder:"请输入"+l.name,clearable:""},null,8,["modelValue","onUpdate:modelValue","placeholder"])):1==l.isSwitch?(d(),_(s,{key:1,modelValue:e.form[l.fields],"onUpdate:modelValue":t=>e.form[l.fields]=t,"active-color":"#13ce66","inactive-color":"#ff4949"},null,8,["modelValue","onUpdate:modelValue"])):1==l.isDate?(d(),_(b,{key:2,modelValue:e.form[l.fields],"onUpdate:modelValue":t=>e.form[l.fields]=t,type:l.type,size:"small","value-format":l.format,style:{width:"100% !important"},placeholder:"请输入"+l.name,clearable:""},null,8,["modelValue","onUpdate:modelValue","type","value-format","placeholder"])):1==l.isCascader?(d(),_(g,{key:3,options:l.options,size:"small",style:{width:"100% !important"},modelValue:e.form[l.fields],"onUpdate:modelValue":t=>e.form[l.fields]=t,disabled:l.dis,placeholder:"请输入"+l.name,props:l.props,onChange:t=>e.getVal(e.form[l.fields]),clearable:""},null,8,["options","modelValue","onUpdate:modelValue","disabled","placeholder","props","onChange"])):1==l.textarea?(d(),_(r,{key:4,type:"textarea",rows:2,placeholder:"请输入"+l.name,modelValue:e.form[l.fields],"onUpdate:modelValue":t=>e.form[l.fields]=t},null,8,["placeholder","modelValue","onUpdate:modelValue"])):1==l.isSelect?(d(),_(w,{key:5,size:"small",style:{width:"100% !important"},modelValue:e.form[l.fields],"onUpdate:modelValue":t=>e.form[l.fields]=t,placeholder:"请输入"+l.name,filterable:"",disabled:l.disabled,clearable:""},{default:f((()=>[(d(!0),u(y,null,v(l.selectList,(e=>(d(),_(V,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:2},1032,["modelValue","onUpdate:modelValue","placeholder","disabled"])):1==l.isBtn?(d(),u("div",ie,[(d(!0),u(y,null,v(l.btnList,((l,t)=>(d(),_(C,{icon:l.icon,size:"mini",onClick:o=>e.btnClick(l,t),type:l.type,key:t},{default:f((()=>[h(p(l.name),1)])),_:2},1032,["icon","onClick","type"])))),128))])):(d(),_(r,{key:7,disabled:l.disabled,clearable:"",size:"small",modelValue:e.form[l.fields],"onUpdate:modelValue":t=>e.form[l.fields]=t,placeholder:"请输入"+l.name},null,8,["disabled","modelValue","onUpdate:modelValue","placeholder"]))])),_:2},1032,["label"])])])),_:2},1032,["span"])))),128))])),_:1},8,["model","label-width"])])),_:1})])}]]);const ue=[{name:"index",path:"/",meta:{title:"首页"},component:ne,redirect:"/index",children:[{name:"index",path:"/index",meta:{title:"欢迎体验Vue3全栈课程"},component:()=>j((()=>import("./index.c8f313ed.js")),["/assets/index.c8f313ed.js","/assets/index.15b907b7.css","/assets/vendor.31faceb1.js"])}]},{name:"tableDemo",path:"/",meta:{title:"表格示例"},component:ne,redirect:"/tableDemo",children:[{name:"tableDemo",path:"/tableDemo",meta:{title:"欢迎体验Vue3全栈课程"},component:()=>j((()=>import("./index.0c0205fe.js")),["/assets/index.0c0205fe.js","/assets/vendor.31faceb1.js"])}]},{name:"HelloWorld",path:"/HelloWorld",meta:{title:"mixins示例"},component:ne,redirect:"/HelloWorld",children:[{name:"HelloWorld",path:"/HelloWorld",meta:{title:"欢迎体验Vue3全栈课程"},component:()=>j((()=>import("./HelloWorld.c7700329.js")),["/assets/HelloWorld.c7700329.js","/assets/vendor.31faceb1.js"])}]},{name:"formDemo",path:"/formDemo",meta:{title:"form表单示例"},component:ne,redirect:"/formDemo",children:[{name:"formDemo",path:"/formDemo",meta:{title:"form表单"},component:()=>j((()=>import("./index.9b93a5d0.js")),["/assets/index.9b93a5d0.js","/assets/vendor.31faceb1.js"])}]}],ce=D({history:H(),routes:ue});var pe=A({name:"App",setup(e){const l=n(0),{proxy:t}=O();return U((()=>{var e=document.documentElement.clientHeight||document.body.clientHeight;console.log(e,"hhh"),l.value=e-32,t.$store.state.screenHeight=l})),{screenHeight:l}}},[["render",function(e,l,t,o,a,n){const r=i("router-view");return d(),u("div",null,[m(r)])}]]),me=z({state:{count:1,screenHeight:0},mutations:{inc(e){e.count++}},actions:{},modules:{}});E(pe).use(ce).use(me).use(W).mount("#app");export{A as _,de as f,N as g,G as t};
