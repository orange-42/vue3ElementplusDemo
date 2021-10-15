<template>
  <h1>{{ msg }}</h1>
  <p>{{ body.text }}</p>
  <div id="cont1"></div>
  <div id="cont2"></div>
  <button @click.prevent="hereOrThere = '1'">cont1</button>
  <button @click.prevent="hereOrThere = '2'">cont2</button>
  <teleport :to="`#cont${hereOrThere}`">
    <div class="telecont">
      <p>I am the same node. I am just being moved around</p>
    </div>
  </teleport>

</template>

<script>
import { ref, reactive } from 'vue';
export default {
  setup() {
    const msg = ref('Vue3 Teleport Example');
    const teleported = ref(false);
    const hereOrThere = ref('1');
    const body = reactive({
      text: 'Click to teleport the node to the other container',
    });
    return {
      msg,
      teleported,
      hereOrThere,
      body,
    };
  },
};
</script>

<style scoped>
* {
  margin: 10px;
  box-sizing: border-box;
}
button {
  border: none;
  background: palegreen;
  padding: 20px;
  cursor: pointer;
}
.telecont p {
  color: aliceblue;
}
#cont1 {
  position: absolute;
  bottom: 20px;
  left: 0;
  height: 40vh;
  width: 50vw;
  background: #2c3e50;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
#cont2 {
  position: absolute;
  bottom: 20px;
  right: 0;
  height: 40vh;
  width: 50vw;
  background: orange;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>