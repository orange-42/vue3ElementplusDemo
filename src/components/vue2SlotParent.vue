<template>
  <div class="parent">
    <span>父组件</span>

    <Child>
      <div slot='top' slot-scope='props'> <!-- 【1】首先必须要在对应插槽名字的位置加个属性slot-scope='props'； props可随意写 -->
        <p>{{props.text}}</p> <!-- 【2】用{{props.text}}显示子组件插槽 传过来的数据 -->
      </div>

      <div slot='bottom' >
        <p>插入的数据——下1</p>
        <p>插入的内容——下2</p>
        <p>插入的内容——下3</p>
      </div>
    </Child>

  </div>
</template>

<script>
  import Child from './Child.vue';

  export default{
    name:'parent',
    components:{
      Child,
    },
    data(){
      return{}
    }
  }
</script>