<template>
  <div class="login">
    <!-- <van-icon name="arrow-left" size="20" color="#333" style="position: absolute; top: 10px; left: 10px;" @click="close()"/> -->
    <div class="logo">
      <!-- <img src="@/assets/img/login/login_bg_logo.png"> -->
      <!-- <h2>随时随地&nbsp;&nbsp;轻松管理</h2> -->
    </div>
    <div class="yun-01">
      <img  @click="openSet" src="@/assets/img/login/login_bg_yun.png">
    </div>
    <div class="form">
      <!-- <div class="phone cover">
        <van-field
          v-model="form.user_name"
          :left-icon="phoneImg.showImg"
          clearable
          placeholder="请输入姓名"
        />
      </div> -->
      <div class="phone cover">
        <van-field
          v-model="form.user_mobile"
          type="digit"
          :left-icon="phoneImg.showImg"
          clearable
          placeholder="请输入手机号码"
          @blur="phoneBlur"
          @input="phoneInput"
          @focus="phoneFocus"
          maxlength="11"
        />
      </div>
      <div class="number cover">
        <van-field
          :left-icon="authCodeImg.showImg"
          v-model="smCode"
          type="digit"
          placeholder="请输入验证码"
          @input="phoneInput"
          maxlength="6"
        >
          <template #button>
            <span v-if="countCodeFlag" @click="getSmsCode" >{{ codeInfo }}</span>
            <span v-else class="count-code-flag">重新发送{{ countCode }}</span>
          </template>
        </van-field>
      </div>
    </div>
    <div class="yun-02">
      <img src="@/assets/img/login/login_bg_yun_b.png">
      <span v-if="phoneFlag">请输入正确的手机号码</span>
    </div>
    <div class="sub-btn" >
      <van-button @click="submitBtn" round size="large" color="linear-gradient(to right, #79DABD, #4CD7EC)" type="button">登录</van-button>
    </div>
    <!-- <div class="sub-btn" v-else>
      <van-button round size="large" color="linear-gradient(to right, #BBEDE0, #A6EBF5)" type="button">登录</van-button>
    </div> -->
    <div class="footer">
      <img src="@/assets/img/home.jpg"/>
    </div>
    <van-dialog v-model="show" @confirm="updateStopName" title="设置店名" show-cancel-button>
      <van-cell-group>
        <van-field v-model="stop_name" label="店名" placeholder="设置店名" />
      </van-cell-group>
    </van-dialog>
  </div>
</template>
<script>
import { addUser,getStopUser,updateStopName, getSmsCode } from '@/api';
import { Toast } from 'vant' 
export default {
  data() {
    return {
      show: false,
      openPwd: 0,
      stop_name: '',
      account: '',
      smCode: '',
      form: {
        stop_id: this.$route.query.stop_id,
        // user_name: '',
        user_mobile: '',
      },
      phoneFlag: false,
      authCodeFlag: false,
      redirect:'',
      phoneImg:{
        showImg: require('@/assets/img/login/login_input_icon_phone_normal.png'),
        unfinished: require('@/assets/img/login/login_input_icon_phone_normal.png'),
        finished: require('@/assets/img/login/login_input_icon_phone_pressed.png')
      },
      authCodeImg: {
        showImg: require('@/assets/img/login/login_input_icon_verification_normal.png'),
        unfinished: require('@/assets/img/login/login_input_icon_verification_normal.png'),
        finished: require('@/assets/img/login/login_input_icon_verification_pressed.png')
      },
      schoolList: [],
      schoolShow: false,
      countCode:59,
      countCodeFlag: true,
      codeInfo:'获取验证码',
      overlayShow: false,
    }
  },
  mounted() {
    
  },
  methods: {
    openSet() {
      this.openPwd = this.openPwd +1;
      if(this.openPwd == 8) {
        this.show = true;
      }
    },
    updateStopName() {
      updateStopName({ stop_name: this.stop_name }).then(res => {
        Toast('设置成功');
        this.show = false;
      })
    },
    getSmsCode() {
      this.countCodeFlag = false;
      
      let that = this
      function clearTrme() {
        that.countCode = that.countCode - 1;
        if(that.countCode < 1 ) {
          window.clearInterval(trme);
          that.countCodeFlag = true;
          that.countCode = 59;
          that.codeInfo = '重新发送';
        }
      }
      // return
      getSmsCode({ ...this.form }).then(res => {
        let trme = window.setInterval(clearTrme, 1000)
        if(res.code == 400) {
          Toast(res.message)
          this.countCodeFlag = true;
          this.countCode = 0;
          trme = null;
          return
        }
        console.log(res)
      })
    },
    phoneBlur() {

    },
    phoneInput() {

    },
    phoneFocus() {

    },
    submitBtn() {
      addUser({ ...this.form, smCode: this.smCode }).then(res => {
        if(res.code == 400) {
          Toast(res.message)
          return
        }
        console.log(res)
        return
        this.$router.push({ name: 'succeed' })
      })
    },
  }
}
</script>
<style lang="scss" scoped>
.login{
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  .logo{
    // overflow: hidden;
    margin-top: 52px;
    img{
      width: 134px;
      height: 52px;
    }
    h2{
      font-size: 12px;
      margin-top: 5px;
      color: #00DFC9;
      text-align: center;
      letter-spacing: 2px;
    }
  }
  .yun-01{
    // overflow: hidden;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    img{
      height: 30px;
      width: 100px;
    }
  }
  .yun-02{
    position: relative;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    margin-top: 8px;
    img{
      height: 30px;
      width: 100px;
    }
    span{
      position: absolute;
      left: 60px;
      font-size: 12px;
      background: #FFEBEB;
      display: inline-block;
      padding:2px 15px;
      border-radius: 15px;
      color: #F44E4E;
      line-height: 30px;
      letter-spacing: 2px;
    }
  }
  .form{
    display: flex;
    flex-direction: column;
    align-items: center;
    // overflow: hidden;
    .cover{
      width: 305px;
      height: 44px;
      line-height: 24px;
      background-color: #F6F6F6;
      border-radius: 22px;
      box-sizing: border-box;
      margin-top: 20px;
      padding: 10px 30px;
      .van-cell {
        background-color: transparent;
        padding: 0;
        color: #000;
        font-size: 16px;
        ::v-deep .van-cell__value {
          input::-webkit-input-placeholder {
            color: #CCC;
            font-size: 16px;
          }
        }
      }
    }
    .number{
      span{
        float: right;
        border-left: 1px solid #C7CDCB;
        padding-left: 15px;
        color: #00DFC9;
        font-size: 14px;
      }
    }
    .count-code-flag{
      color: #C7CDCB !important;
    }
  }
  .sub-btn{
      width: 90%;
      margin: 20px auto;
      button{
        font-size: 16px;
        font-weight: 500;
      }
    }
  .footer{
    width: 100%;
    // background: url('../../assets/img/login/login_bg.png') no-repeat bottom;
    background-size: 100% 100px;
    img{
      width: 100%;
    }
  }
  .school-popup {
    width: 100%;
    height: 100vh;
    padding-top: 46px;
    ::v-deep .van-cell-group__title {
      padding: 4px 16px;
    }
    .van-cell {
      height: 60px;
      ::v-deep .van-cell__left-icon {
        img {
          width: 40px;
          height: 40px;
          vertical-align: -4px;
        }
      }
      ::v-deep .van-cell__title {
        display: flex;
        flex-direction: column;
        justify-content: center;
        .title {
          color: #333;
          font-size: 14px;
        }
        .sub-title {
          color: #333;
          font-size: 10px;
        }
      }
    }
  }
}
</style>