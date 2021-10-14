<template>
  <div class="child">
    <span>子组件</span>
    <slot name="top" text='子插槽向父组件传的数据'>后备内容</slot><!-- 【1】通过在插槽里放一个自定义属性text='待传递的数据'向父组件传数据 -->
    <hr/>
    <slot name="bottom">后备内容2</slot>
  </div>
</template>

<script>

  export default{
    name:'child',
    data(){
      return{}
    },

  }
</script>

<style>
</style>