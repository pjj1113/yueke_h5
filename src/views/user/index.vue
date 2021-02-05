<template>
  <div class="user">
    <div class="box">
      <van-cell-group style="paddingLeft:10px">
        <van-field class="rules" label="姓名" v-model="form.user_name" placeholder="请填写真实姓名" />
        <van-field class="rules" label="地址" v-model="form.user_address" placeholder="请填写地址" />
        <van-field class="rules" label="手机号" v-model="form.user_mobile" placeholder="请填写手机号" />
        <van-field class="rules" label="微信号" v-model="form.user_WeChat" placeholder="请填写微信号" />
        <!-- <van-field class="rules" label="姓名" v-model="name" placeholder="请填写真实姓名" /> -->
      </van-cell-group>
    </div>
    <div class="btn-sub">
        <van-button round size="large" color="linear-gradient(to right, #79DABD, #4CD7EC)" type="button" native-type="submit" @click="subInfo">提交</van-button>
      </div>
  </div>
</template>

<script>
import { addUser,getStopUser } from '@/api'
export default {
  data() {
    return {
      form: {
        stop_id: this.$route.query.stop_id,
        user_name: '',
        user_mobile: '',
        user_address: '',
        user_WeChat: '',
      },
      name: '',
    }
  },
  mounted() {
    getStopUser().then(res => {
      console.log(res)
    })
  },
  methods: {
    subInfo() {
      addUser(this.form).then(res=> {
        console.log(res)
      })
    }
  },
}
</script>

<style lang="scss" scoped>
.user {
  width: 100%;
  height: 100%;
  background: url('../../assets/img/shenqingdan_bg.png') no-repeat;
  background-size: 100%;
  background-color: #ffffff;
  padding: 20px;
  box-sizing: border-box;
  .box {
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    padding: 15px 0 6px;
    border-radius: 10px;
    background-color: #ffffff;
    box-shadow: 1px 1px 15px 0px rgba(221, 221, 221, 0.3);
  }
}
::v-deep .van-field__control {
  text-align: right;
}
.btn-sub {
  margin-top: 30px;
  padding: 20px 10px;
  .van-button__text {
    font-size: 18px;
    line-height: 50px;
  }
  .van-button--large {
    line-height: 50px;
  }
}
</style>
