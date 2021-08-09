<template>
  <div class="layout">
    <div class="main">
      <router-view></router-view>
    </div>
    <van-tabbar v-model="active">
      <van-tabbar-item url="/home/list" name="list" icon="home-o">列表</van-tabbar-item>
      <van-tabbar-item url="/home/me" name="me" icon="friends-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 'list'
    }
  }
}
</script>

<style lang="scss" scoped>
.layout {
  display: flex;
  height: 100%;
  width: 100%;
  .main {
    width: 100%;
    margin-bottom: 56px;
    height: calc(100vh-50px);
  }
}
</style>