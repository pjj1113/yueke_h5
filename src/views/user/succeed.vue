<template>
  <div class="apply-succeed">
    <div class="nav-bar">
      <van-icon @click="onClickLeft" size="20px" class="nav-go" name="arrow-left" />
      <span class="nav-title">提交成功 </span>
    </div>
    <div class="main">
      <img src="../../assets/img/gongxi_icon.png"/>
      <!-- <h3>提交成功</h3> -->
      <p>中奖结果等待管理员联系！</p>

    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      userInfo: ''
    }
  },
  mounted(){
   
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
  }
}
</script>
<style lang="scss" scoped>
.apply-succeed{
  position: fixed;
  left: 0;
  top: 0;
  background: #FBFFFE;
  width: 100%;
  height: 100%;
  .nav-bar{
    position: absolute;
    left: 0;
    top: 0;
    text-align: center;
    width: 100%;
    height: 46px;
    overflow: hidden;
    z-index: 1000;
    align-items: center;
    padding: 0 10px;
    background: #ffffff;
    .nav-title{
      line-height: 46px;
      font-size: 18px;
      font-weight: 700;
      color:#000000;
    }
    .nav-go{
      position: absolute;
      left: 10px;
      line-height: 46px;
      color:#000000;
    }
  }
  .main{
    margin-top: 100px;
    background: #FBFFFE;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img{
      width: 137px;
      height: 94px;
    }
    h3{
      margin-top: 35px;
      font-size: 18px;
      color: #000000;
      font-weight: 700;
    }
    p{
      margin-top: 10px;
      font-size: 14px;
    }
    .btn-sub{
      width: 100%;
      padding: 26px 35px;
    }
  }
  .main_top{
    margin-top: 60px;
  }
}
</style>