<template>
  <div class='grand-child-view'>
    {{textName}}
    <p>孙子组件</p>
    通过$attrs 拿到祖父组件的数据：<span style="color:red">&nbsp;请点击上方传递</span>{{row}}
    <p>传给孙子组件的数据：{{row.name}} {{row.name !== undefined? '学习' : ''}} {{row.study}}</p>
    <el-button type="primary" @click="tograp">传给祖父</el-button>
  </div>
</template>

<script>
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
  mounted(){
    this.$attrs.onTest1() // vue3废除了 $listeners 去监听拿到祖父组件事件
    // 通过 $attrs 向组件传递属性和监听器 格式给 on 方法首字母大写
    // 如 test1 -> onTest1
    console.log(this.$attrs,'attrs')
  },
  methods:{
    tograp(){
      this.$attrs.onGraps(666)
      this.$attrs.onGetForm('grandChild 这边传递过来的事件')
      // this.$emit('graps',666)
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