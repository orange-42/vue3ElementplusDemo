<template>
  <div>
  <el-menu
    :default-active="this.$route.path" 
    router
    :collapse="isCollapse"
    @open="handleOpen"
    @close="handleClose"
    :style="{height:$store.state.screenHeight-9+'px'}"
    class="nav-side"
  >
  <div @click="expand" class="logo">
    <img src="../assets/logo.png" />
    <span>Vue3新系统模版</span>
  </div>
   <el-menu-item class="align-left" v-for="(item,i) in routerList" :key="i" :index="item.name">
        <i class="el-icon-setting"></i>
        <template #title>
        {{ item.meta.title }}
      </template>
    </el-menu-item>
 </el-menu>
  </div>
</template>

<script>
import { useRoute,useRouter } from 'vue-router'
import { defineComponent, ref } from 'vue'
export default defineComponent({
setup(props, ctx) {
    const isCollapse = ref(true)
    const handleOpen = (key, keyPath) => {
      console.log(key, keyPath)
    }
    const handleClose = (key, keyPath) => {
      console.log(key, keyPath)
    }
    function expand(){
      isCollapse.value = !isCollapse.value
    }
    const routes = useRoute();
    const routers = useRouter();
    console.log(routes,routers)
    const routerList = routers.options.routes;
    return {
      isCollapse,
      handleOpen,
      handleClose,
      routerList,
      expand
    }
  }
})
</script>

<style lang="scss">
.nav-side {
  transition: width 1s;
  padding-right: 16px;
  border-bottom: solid 1px var(--el-menu-border-color);
  overflow: hidden;      /*溢出隐藏*/
  white-space: nowrap;	/*规定文本不进行换行*/
  text-overflow: ellipsis;	/*当对象内文本溢出时显示省略标记（...）*/
  min-height: 700px;
}
.align-left {
  text-align: left;
}
.logo {
  display:flex;
  justify-content:left;
  cursor: pointer;
  img {
    margin: 0 16px;
    width: 32px;
    height: 32px;
  }
  span {
    line-height: 32px;
  }
}
</style>