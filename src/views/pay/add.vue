<template>
  <div class="pay-add">
    <van-nav-bar title="添加联系方式" left-text="返回" left-arrow @click-left="onClickLeft"/>
    <div class="main">
      <van-form>
        <van-field v-model="form.phone" label="手机号" maxlength="11" placeholder="手机号"
          :rules="[{ required: true, message: '请填写手机号' }]"/>
        <van-field v-model="form.name" label="姓名" placeholder="姓名"
          :rules="[{ required: true, message: '请填写姓名' }]" />
        <van-field v-model="form.address" label="地址" placeholder="地址"
          :rules="[{ required: true, message: '请填写地址' }]"/>
          <van-field v-model="form.remark" label="备注" placeholder="备注"
          :rules="[{ required: true, message: '请填写备注' }]"/>
      </van-form>
      <div style="margin: 16px;">
        <van-button round block type="info" @click="addUser">提交</van-button>
      </div>
    </div>
  </div>
</template>

<script>
import { addUser } from '@/api'
export default {
  data() {
    return {
      form: {
        name: '', 
        phone: '',
        address: '', 
        remark: '', 
      },
      phone: this.$route.query.phone,
      list:[]
    }
  },
  mounted() {

  },
  methods: {
    onClickLeft() {
      this.$router.go(-1)
    },
    addUser() {
      addUser({ ...this.form }).then(res => {
        this.$router.push({ name: 'pay-detail',phone: this.phone })
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.pay-add {
  position: relative;
  width: 100%;
  height: 100%;
  background: #f9f9f9;
  .main {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    padding-top: 46px;
    box-sizing: border-box;
    overflow: hidden;
  }
}
</style>