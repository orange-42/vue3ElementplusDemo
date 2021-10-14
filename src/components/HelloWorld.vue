<template>
  <div class="exp">
  <h1>{{ msg }}</h1>
  <button @click="count++">count is: {{ count }}</button>
  <p>Edit <code>components/HelloWorld.vue</code> to test hot module replacement.</p>
  <h1>第一个mixins 年龄为:{{age}}</h1>
  <el-button @click="ageAdd" type="primary">年龄+1</el-button>
  <mixins1 />
    <getHooks1 />
    <slotDemo />
  </div>
</template>

<script>
// import { myMixins1 } from "../mixins/myMixins1"
import { myMixins } from "../mixins/myMixins"
import mixins1 from './mixinsModule1.vue'
import getHooks1 from './getHooks1.vue'
import slotDemo from './slotDemo.vue'

export default {
  name: 'HelloWorld',
  mixins:[myMixins],
  props: {
    msg: String
  },
  components:{
       mixins1,
    getHooks1,
    slotDemo
  },
  data() {
    return {
      count: 0,
      // age: 18
    }
  },
  created() {
    console.log(this.$store,'xx from template')
    this.age++
    this.getAge1()
    this.getAge3()
  },
  mounted() {
  },
  methods: {
    ageAdd() {
      this.age++
    },
    getAge(){
      console.log(this.age);
    },
    getAge1() {
      console.log("age1 form template =", this.age)
    },
    getAge3() {
      console.log('age3 from template =', this.age)
    }
  },
}
</script>
<style lang="scss" scoped>
</style>