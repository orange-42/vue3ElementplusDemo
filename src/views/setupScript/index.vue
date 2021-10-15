<script setup>
// script setup是一种编译时语法糖，用于在单文件组件 (SFC) 中使用Composition API。如果您同时使用 SFC 和 Composition API，则这是推荐的语法。
// 与普通 script 语法相比，它提供了许多优点：
// 更简洁的代码，更少的样板
// 能够使用纯 TypeScript 声明道具和发出的事件
// 更好的运行时性能（模板编译成同作用域的render函数，没有中间代理）
// 更好的 IDE 类型推断性能（语言服务器从代码中提取类型的工作更少）
// #
import { ref,reactive } from 'vue';
import tables from '../../components/table.vue'
const count = ref(0);
const theme = {
  color:'green'
}
const msg = 'Hello!'
const tableList = reactive([{
      label:'角色名称',
      fields:'name'
    },{
      label:'角色类型',
      fields:'type'
    },{
      label:'组别',
      fields:'group'
    },{
      label:'职位',
      fields:'job'
    },{
      label:'是否开启',
      fields:'isFiring'
    }])
const tableData = reactive([{
  name:'教师',
  type:'教职工',
  group:'中学组',
  job:'中学语文老师',
  isFiring:true
},{
  name:'教师',
  type:'教职工',
  group:'高中组',
  job:'高中语文老师',
  isFiring:false
},{
  name:'教务处',
  type:'教职工',
  group:'大学组',
  job:'心理辅导师',
  isFiring:false
}
])
    const btnList = reactive([
      {
        label:'操作',
        width:'',
        options:[
          {
            type:'primary',
            size:'small',
            loading:false,
            icon:'el-icon-edit',
            property:'circle',
            label:''
          },
          {
            type:'danger',
            size:'small',
            loading:false,
            icon:'el-icon-delete',
            property:'circle',
            label:''
          },
          {
            type:'text',
            size:'small',
            loading:false,
            icon:'',
            property:'',
            label:'详情'
          },
        ]
      }
    ])
function log () {
  console.log(msg);
}
</script>
<template>
  <div @click="log">{{msg}}</div>
  <button @click="count++">{{count}}</button>
  <tables :tableList="tableList" :tableData="tableData" :btnList="btnList">
    <template v-slot:isFiring="obj">
      <el-switch v-model="obj.scope.isFiring" active-color="#13ce66" inactive-color="#ff4949" />
    </template>
  </tables>
  <div class="text">hello</div>
</template>

<style>
.text {
  color: v-bind('theme.color');
}
</style>


