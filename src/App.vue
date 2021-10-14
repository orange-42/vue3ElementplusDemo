<template>
  <div>
     <router-view></router-view>
  </div>
</template>

<script>
import { ref, getCurrentInstance,onBeforeMount } from 'vue'
export default {
  name: 'App',
  setup(props) {
    const screenHeight = ref(0)
  const { proxy } = getCurrentInstance();
  onBeforeMount(() => {
      var h = document.documentElement.clientHeight || document.body.clientHeight;
      console.log(h,'hhh')
      screenHeight.value = h - 32
      proxy.$store.state.screenHeight =  screenHeight;
    })
    return {
      screenHeight
    }
  }
}
</script>
