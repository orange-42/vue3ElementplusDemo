import{_ as e,f as a}from"./index.f904da96.js";import{m as s,a as l,b as t,c as n,f as i}from"./vendor.31faceb1.js";const r={class:"formList"};var m=e({components:{forms:a},setup(){const e=s([{fields:"enterpriseName",name:"企业名称",span:6},{fields:"unitResponsible",name:"单位负责人",span:6},{fields:"contactAddress",name:"通讯地址",span:6},{fields:"fullSummary",name:"是否填写完全汇总",isSwitch:!0,span:6},{fields:"number",name:"数字输入框",isNum:!0,span:6},{fields:"dwxz",name:"单位性质",span:6,isSelect:!0,selectList:[{value:"1",label:"1 | 经营性单位"},{value:"2",label:"2 | 费用性单位"},{value:"3",label:"3 | 待出售项目公司"},{value:"4",label:"4 | 其他"}]},{fields:"jjlx",name:"经济类型",span:6,isCascader:!0,options:[{value:"10",label:"国有及国有控股",children:[{value:"11",label:"国有独资"},{value:"6",label:"国有控股"},{value:"13",label:"国有实际控制"}]},{value:"30",label:"其他城镇集体"}],props:{checkStrictly:!0}},{fields:"createTime",name:"创建时间",span:6,isDate:!0,type:"datetime",format:"yyyy-MM-dd HH:mm:ss"},{btnList:[{type:"primary",name:"搜索",icon:"el-icon-search"},{type:"default",name:"重置",icon:"el-icon-refresh"}],span:4,isBtn:!0}]);let a=s({contactAddress:"",enterpriseName:"",unitResponsible:"",dwxz:"",jjlx:"",number:"",createTime:"",fullSummary:!1});function l(){alert("搜索")}function t(){Object.assign(a,{contactAddress:"",enterpriseName:"",unitResponsible:"",dwxz:"",jjlx:"",number:"",createTime:"",fullSummary:!1}),alert("重置")}return{titleList:e,form:a,btnClick:function(e,a){0==a?l():t()},handleQuery:l,resetQuery:t}}},[["render",function(e,a,s,m,c,o){const u=l("forms");return t(),n("div",r,[i(u,{onBtnclick:m.btnClick,labelWidth:"205px",titleList:m.titleList,form:m.form},null,8,["onBtnclick","titleList","form"])])}]]);export{m as default};
