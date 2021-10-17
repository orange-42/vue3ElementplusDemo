<template>
  <div class="welcome">
    <div class="content">
      <div class="sub-title">欢迎体验</div>
      <div class="title">Vue3.0通用后台管理系统</div>
      <div class="desc">
        - Vue3.0+ElementPlus+Sass+Vue-router4.0+Vuex4.0打造通用后台管理系统
      </div>
    </div>
    <div class="img"></div>
  </div>
</template>

<script>
export default {
  name: "welcome",
};
</script>

<style lang="scss">
.welcome {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: #fff;
  .content {
    flex: 5;
    position: relative;
    bottom: 40px;
    .sub-title {
      font-size: 30px;
      line-height: 42px;
      color: #333;
    }
    .title {
      font-size: 40px;
      line-height: 62px;
      color: #409eff;
    }
    .desc {
      // text-align: right;
      font-size: 14px;
      color: #999;
    }
  }
  .img {
    // margin-left: 105px;
    flex: 5;
    background-image: url("../../assets/images/welcome.png");
    background-repeat: no-repeat;
    width: 371px;
    height: 438px;
  }
}
</style>