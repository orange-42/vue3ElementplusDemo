<template>
  <div class="about">
    <component v-bind:is="currenView">
      <template v-slot="obj">
        <div class="slot">父组件使用插槽反显sexEn1：{{obj.scope}}为{{filter(obj.scope)}}</div>
      </template>
      <template v-slot:sex="obj">
        <div class="slot">父组件使用插槽反显sexEn2：{{obj.scope}}为{{filter(obj.scope)}}</div>
      </template>
       <template v-slot:info="obj">
         <div>
           <ul class="info slot">
             <li>姓名: {{ obj.scope.name }}</li>
             <li>年龄: {{ obj.scope.age }}</li>
             <li>身高: {{ obj.scope.height }} </li>
           </ul>
         </div>
        <!-- <div class="slot">父组件使用插槽反显sexEn2：{{obj.scope}}为{{filter(obj.scope)}}</div> -->
      </template>
    </component>
    <el-button @click="changeView">切换插槽</el-button>
  </div>
</template>
<script>
import { ref } from 'vue';
import AgeAndSex from './slotBox.vue';
import slotBox1 from './slotBox1.vue';

export default {
  setup() {
    let currenView = ref('AgeAndSex')
    let filter = e => {
      switch (e) {
        case 'meal':
          return '男';
        case 'femeal':
          return '女';
        default:
          return '保密';
      }
    };
    function changeView (){
      switch(currenView.value){
        case 'slotBox1':
          return currenView.value = 'AgeAndSex';
        case 'AgeAndSex':
          return currenView.value ='slotBox1'
      }
    }
    return {
      filter,
      currenView,
      changeView
    };
  },
  components: { AgeAndSex,slotBox1 }
};
</script>
<style scoped>
.slot {
  color: red;
}
.info {
  padding: 0;
  list-style: none;
}
</style>