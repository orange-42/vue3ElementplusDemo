<template>  
  <div class="box">
    <div class="navgitor">
      <navs></navs>
    </div>
    <div class="content" :style="{height:$store.state.screenHeight -17 + 'px'}">
        <bread></bread>
        <div class="content-view">
          <div class="router-view">
          <router-view></router-view>
          </div>
        </div>
        <!-- <tables></tables> -->
    </div>
  </div>
</template>

<script>
import navs from '../../components/nav.vue'
import tables from '../../components/table.vue'
import bread from '../../components/breadcrumb.vue'
export default({
  name:'index',
  components:{ navs,bread,tables },
  setup(props,ctx) {
  }
})
</script>

<style lang="scss">
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.box {
  display: flex;
  .navgitor {
  }
  .content {
    flex:8;
    margin: 8px 20px;
    overflow-y: scroll;
    .content-view {
      margin-top: 20px;
    }
  }
}
</style>