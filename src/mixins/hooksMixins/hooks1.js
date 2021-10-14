import { ref, onMounted } from 'vue';

export default function () {
  const age = ref(17);
  function testFn () {
    console.log('testFn1')
  }
  onMounted(() => {
    testFn()
  })
  return {
    age
  }
}