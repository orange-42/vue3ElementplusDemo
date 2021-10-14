<template>
  <div>
    <h1>第三个mixins 使用vue3 Hooks 年龄为:{{age}}</h1>
  <el-button @click="ageAdd" type="primary">年龄+1</el-button>
  </div>
</template>

<script>
import { defineComponent, onMounted } from 'vue'
import myHooks1 from '../mixins/hooksMixins/hooks1'
export default defineComponent({
  name:'getHooks1',
  setup(){
    const { age } = myHooks1();
    onMounted(()=>{
      console.log('index mounted!!')
    })
    function ageAdd() {
      console.log(age,'age')
      age.value++
    }
    return {
      age,
      ageAdd
    }
  }
})
</script>

<style>

</style>