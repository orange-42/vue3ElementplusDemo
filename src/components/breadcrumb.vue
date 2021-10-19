<template>
  <div class="nav-top">
    <div>
      <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
      <el-breadcrumb-item><a href="/">首页</a></el-breadcrumb-item>
      <el-breadcrumb-item v-if="this.$route.meta.title!=='首页'">{{this.$route.meta.title}}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="user-options">
      <popOver direction="bottom" popWidth="150"> 
        <template v-slot:user>
          <label class="strong">用户名称: <span>Marco</span></label>
        </template>
        <template v-slot:popSlotContet>
            <div class="slot-content">
              <ul>
                <li>个人信息</li>
                <li>退出登录</li>
              </ul>
            </div>
        </template>
    </popOver>
      
    </div>
    
  </div>
</template>
<script>
import { defineComponent } from 'vue'
import popOver from './popOver.vue'
// import popovers from '../components/popOver.vue'
export default defineComponent({
  components:{
    popOver
  },
  setup(props) {
    console.log(props)
  }
})
</script>
<style lang="scss">
.nav-top {
  display: flex;
  justify-content: space-between;
  .user-options {
    color: var(--el-text-color-regular);
    cursor: pointer;
    line-height: 14px;
    font-size: 14px;
    img {
      width: 16px;
      height: 16px;
      position: relative;
      top: 3px;
      right: 2px;
    }
    .strong {
      font-weight: 700;
      span {
        font-weight: 500;
      }
    }
    
  }
}
.slot-content {
  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    text-align: center;
    li {
      height: 45px;
      line-height: 45px;
      cursor: pointer;
    }
    li:hover {
      background:#f4f4f5;
      opacity: 0.9;
    }
  }
}
</style>