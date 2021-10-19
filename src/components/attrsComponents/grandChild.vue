<template>
  <div class='grand-child-view'>
    {{textName}}
    这里从祖父组件接收的(reject):{{abc}}
    <p>孙子组件</p>
    通过$attrs 拿到祖父组件的数据：<span style="color:red">&nbsp;请点击上方传递</span>{{row}}
    <p>传给孙子组件的数据：{{row.name}} {{row.name !== undefined? '学习' : ''}} {{row.study}}</p>
    <el-button type="primary" @click="tograp">传给祖父</el-button>
    <el-button type="primary" @click="toaddGrap">给父组件加一条数据</el-button>

  </div>
</template>

<script>
import { getCurrentInstance, onMounted, inject } from 'vue'
export default {
  // 不想继承所有父组件的内容,同时也不在组件根元素dom上显示属性
  inheritAttrs: false,
  // 在本组件中需要接收从父组件传递过来的数据，注意props里的参数名称不能改变，必须和父组件传递过来的是一样的
  props: {
    isShow: {
      type: Boolean,
      default: false
    },
    textName: {
      type:String,
      default: () => { return '' }
    },
    row: {
      type: Object,
      default: () => { }
    }
  },
  setup(props,ctx){
    const { proxy } = getCurrentInstance();
    const abc = inject("abc");
    console.log(abc,'abc')
    console.log(ctx,proxy,'ctx')
    onMounted (() =>{
      ctx.attrs.onTest1() 
      console.log(ctx.attrs,'attrs')
    })
    function tograp(){
      ctx.attrs.onGraps(666)
      ctx.attrs.onGetForm('grandChild 这边传递过来的事件')
    }
    function toaddGrap(){
      ctx.attrs.onAddRow({
        name:'孙子',
        study:' JavaScript'
      })
    }
    return {
      tograp,
      toaddGrap,
      abc
    }
  }
}
</script>

<style lang="scss">
.grand-child-view {
  border: 2px solid green;
  padding: 20px;
  margin: 20px;
}
</style>