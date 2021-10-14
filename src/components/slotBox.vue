<template>
    <div class="hello">
        <h1>子组件</h1>
        <h1>↓↓↓以下是默认插槽内容↓↓↓</h1>
        <slot :scope="sexEn1"></slot>
        <h1>↑↑↑以上是插槽内容↑↑↑</h1>
        <br />
        <h1>↓↓↓以下是具名插槽↓↓↓</h1>
        <slot name="sex" :scope="sexEn2"></slot>
        <h1>↑↑↑以上是具名插槽 sex的内容↑↑↑</h1>
        <br />
        <h1>↓↓↓以下是具名插槽↓↓↓</h1>
        <slot name="info" :scope="info"></slot>
        <h1>↑↑↑以上是具名插槽 sex的内容↑↑↑</h1>
    </div>
</template>
<script>
import { reactive, toRefs } from 'vue'
export default {
  setup(a,b) {
    console.log(a,b,'a,b')
    const state = reactive({
      sexEn1: 'femeal',
      sexEn2:'meal',
      age:23,
      info:{
        name:'mike',
        age:24,
        height:177
      }
    });
    return {
      ...toRefs(state)
    }
  },
  name: 'AgeAndSex'
}
</script>
<style scoped>
.hello {
  margin: 20px;
  color: green;
  border: 1px solid green;
}
.point {
  cursor: pointer;
}
</style>