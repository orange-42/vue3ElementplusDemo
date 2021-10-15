<template>
<div>
  <button @click="showToast" class="btn">打开 toast</button>
  <!-- to 属性就是目标位置 -->
  <teleport to="#teleport-target">
    <div v-if="visible" class="toast-wrap">
      <div class="toast-msg">我是一个 Toast 文案</div>
    </div>
  </teleport>
  </div>
</template>

<script>
import { ref } from 'vue';
export default {
  setup() {
    // toast 的封装
    const visible = ref(false);
    // let timer;
    const showToast = () => {
      visible.value = true;
      // clearTimeout(timer);
      // timer = setTimeout(() => {
      //   visible.value = false;
      // }, 2000);
    }
    return {
      visible,
      showToast
    }
  }
}
</script>

<style>

</style>