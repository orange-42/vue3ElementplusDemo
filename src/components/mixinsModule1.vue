<template>
  <div>
   <h1>第二个mixins 年龄为:{{age}}</h1>
  <el-button @click="ageAdd" type="warning">年龄+1</el-button>
  </div>
</template>

<script>
import { myMixins1 } from "../mixins/myMixins1"
export default {
  name: 'mixinsModule1',
  mixins:[myMixins1],
  data() {
    return {
    }
  },
  created() {
    // this.age++
  },
  mounted() {
  },
  methods: {
    ageAdd() {
      this.age++
    }
  },
}
</script>
