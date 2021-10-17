export const myMixins = {
  components: {},
  data () {
    return {
      age:18
    }
  },
  created () {
    console.log('xx from mixins mixinsmixinsmixinsmixinsmixins')
    // this.getAge1()
    this.getAge2()
  },
  mounted() {
    
  },
  computed: {},
  methods: {
    getAge1 () {
      console.log("age1 from mixins22222 =", this.age);
    },
    getAge2 () {
      console.log("age2 from mixins22222 =", this.age);
    }
  },
}