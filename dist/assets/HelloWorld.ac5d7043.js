var e=Object.defineProperty,n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,l=(n,o,s)=>o in n?e(n,o,{enumerable:!0,configurable:!0,writable:!0,value:s}):n[o]=s,t=(e,t)=>{for(var a in t||(t={}))o.call(t,a)&&l(e,a,t[a]);if(n)for(var a of n(t))s.call(t,a)&&l(e,a,t[a]);return e};import{_ as a,g as i}from"./index.9592b0ce.js";import{a as r,b as c,c as u,e as g,t as d,f as m,w as x,g as h,p,y as f,s as v,J as A,K as b,r as y,j as E,L as w}from"./vendor.52eeb014.js";const _={components:{},data:()=>({age:18}),created(){console.log("xx from mixins mixinsmixinsmixinsmixinsmixins"),this.getAge2()},mounted(){},computed:{},methods:{getAge1(){console.log("age1 from mixins22222 =",this.age)},getAge2(){console.log("age2 from mixins22222 =",this.age)}}},k={name:"mixinsModule1",mixins:[{components:{},data:()=>({age:18}),created(){console.log("xx from mixins  1111111111111111111111"),this.getAge2()},mounted(){},computed:{},methods:{getAge1(){console.log("age1 from mixins1111111111 =",this.age)},getAge2(){console.log("age2 from mixins1111111111 =",this.age)}}}],data:()=>({}),created(){},mounted(){},methods:{ageAdd(){this.age++}}},S=h("年龄+1");var j=a(k,[["render",function(e,n,o,s,l,t){const a=r("el-button");return c(),u("div",null,[g("h1",null,"第二个mixins 年龄为:"+d(e.age),1),m(a,{onClick:t.ageAdd,type:"warning"},{default:x((()=>[S])),_:1},8,["onClick"])])}]]);const C={setup(e,n){console.log(e,n,"a,b");const o=p({sexEn1:"femeal",sexEn2:"meal",age:23,info:{name:"mike",age:24,height:177}});return t({},f(o))},name:"AgeAndSex"},$=e=>(A("data-v-1d7eb090"),e=e(),b(),e),O={class:"hello"},H=$((()=>g("h1",null,"子组件",-1))),I=$((()=>g("h1",null,"↓↓↓以下是默认插槽内容↓↓↓",-1))),V=$((()=>g("h1",null,"↑↑↑以上是插槽内容↑↑↑",-1))),B=$((()=>g("br",null,null,-1))),P=$((()=>g("h1",null,"↓↓↓以下是具名插槽↓↓↓",-1))),D=$((()=>g("h1",null,"↑↑↑以上是具名插槽 sex的内容↑↑↑",-1))),W=$((()=>g("br",null,null,-1))),J=$((()=>g("h1",null,"↓↓↓以下是具名插槽↓↓↓",-1))),K=$((()=>g("h1",null,"↑↑↑以上是具名插槽 sex的内容↑↑↑",-1)));var L=a(C,[["render",function(e,n,o,s,l,t){return c(),u("div",O,[H,I,v(e.$slots,"default",{scope:e.sexEn1},void 0,!0),V,B,P,v(e.$slots,"sex",{scope:e.sexEn2},void 0,!0),D,W,J,v(e.$slots,"info",{scope:e.info},void 0,!0),K])}],["__scopeId","data-v-1d7eb090"]]);const M={setup(e,n){console.log(e,n,"a,b");const o=p({sexEn1:"femeal",sexEn2:"meal",age:23,info:{name:"Tony",age:25,height:168}});return t({},f(o))},name:"AgeAndSex"},T=e=>(A("data-v-04f37164"),e=e(),b(),e),q={class:"hello"},z=T((()=>g("h1",null,"子组件",-1))),F=T((()=>g("h1",null,"↓↓↓以下是默认插槽内容↓↓↓",-1))),G=T((()=>g("h1",null,"↑↑↑以上是插槽内容↑↑↑",-1))),N=T((()=>g("br",null,null,-1))),Q=T((()=>g("h1",null,"↓↓↓以下是具名插槽↓↓↓",-1))),R=T((()=>g("h1",null,"↑↑↑以上是具名插槽 sex的内容↑↑↑",-1))),U=T((()=>g("br",null,null,-1))),X=T((()=>g("h1",null,"↓↓↓以下是具名插槽↓↓↓",-1))),Y=T((()=>g("h1",null,"↑↑↑以上是具名插槽 sex的内容↑↑↑",-1)));const Z={setup(){let e=y("AgeAndSex");return{filter:e=>{switch(e){case"meal":return"男";case"femeal":return"女";default:return"保密"}},currenView:e,changeView:function(){switch(e.value){case"slotBox1":return e.value="AgeAndSex";case"AgeAndSex":return e.value="slotBox1"}}}},components:{AgeAndSex:L,slotBox1:a(M,[["render",function(e,n,o,s,l,t){return c(),u("div",q,[z,F,v(e.$slots,"default",{scope:e.sexEn1},void 0,!0),G,N,Q,v(e.$slots,"sex",{scope:e.sexEn2},void 0,!0),R,U,X,v(e.$slots,"info",{scope:e.info},void 0,!0),Y])}],["__scopeId","data-v-04f37164"]])}},ee={class:"about"},ne={class:"slot"},oe={class:"slot"},se={class:"info slot"},le=h("切换插槽");const te={name:"HelloWorld",mixins:[_],props:{msg:String},components:{mixins1:j,getHooks1:i,slotDemo:a(Z,[["render",function(e,n,o,s,l,t){const a=r("el-button");return c(),u("div",ee,[(c(),E(w(s.currenView),null,{default:x((e=>[g("div",ne,"父组件使用插槽反显sexEn1："+d(e.scope)+"为"+d(s.filter(e.scope)),1)])),sex:x((e=>[g("div",oe,"父组件使用插槽反显sexEn2："+d(e.scope)+"为"+d(s.filter(e.scope)),1)])),info:x((e=>[g("div",null,[g("ul",se,[g("li",null,"姓名: "+d(e.scope.name),1),g("li",null,"年龄: "+d(e.scope.age),1),g("li",null,"身高: "+d(e.scope.height),1)])])])),_:1})),m(a,{onClick:s.changeView},{default:x((()=>[le])),_:1},8,["onClick"])])}],["__scopeId","data-v-b952589c"]])},data:()=>({count:0}),created(){console.log(this.$store,"xx from template"),this.age++,this.getAge1(),this.getAge3()},mounted(){},methods:{ageAdd(){this.age++},getAge(){console.log(this.age)},getAge1(){console.log("age1 form template =",this.age)},getAge3(){console.log("age3 from template =",this.age)}}},ae={class:"exp"},ie=g("p",null,[h("Edit "),g("code",null,"components/HelloWorld.vue"),h(" to test hot module replacement.")],-1),re=h("年龄+1");var ce=a(te,[["render",function(e,n,o,s,l,t){const a=r("el-button"),i=r("mixins1"),h=r("getHooks1"),p=r("slotDemo");return c(),u("div",ae,[g("h1",null,d(o.msg),1),g("button",{onClick:n[0]||(n[0]=e=>l.count++)},"count is: "+d(l.count),1),ie,g("h1",null,"第一个mixins 年龄为:"+d(e.age),1),m(a,{onClick:t.ageAdd,type:"primary"},{default:x((()=>[re])),_:1},8,["onClick"]),m(i),m(h),m(p)])}]]);export{ce as default};
