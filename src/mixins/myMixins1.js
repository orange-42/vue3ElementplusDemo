export const myMixins1 = {
  components: {},
  data () {
    return {
      age:18
    }
  },
  created () {
    console.log('xx from mixins  1111111111111111111111')
    // this.getAge1()
    this.getAge2()
  },
  mounted() {
    
  },
  computed: {},
  methods: {
    getAge1 () {
      console.log("age1 from mixins1111111111 =", this.age);
    },
    getAge2 () {
      console.log("age2 from mixins1111111111 =", this.age);
    }
  },
}