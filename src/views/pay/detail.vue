<template>
  <div class="pay-add">
    <van-nav-bar title="我的订单" left-text="返回" right-text="添加" left-arrow @click-left="onClickLeft" @click-right="onClickRight"/>
    <div class="main">
      <ul>
        <li v-for="(item, index) in list" :key="index">
          <div class="list-left">
            <img :src="item.imgList"/>
          </div>
          <div class="list-right">
            <p><span>{{ item.name }}</span></p>
            <p><span>日期:{{ item.create_date }}</span></p>
            <p> <span>数量：{{ item.num }}</span></p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import {  getPayList, getUserDetail } from '@/api';
export default {
  data() {
    return {
      list:[],
      phone: this.$route.query.phone,
      info: null
    }
  },
  mounted() {
    this.getUserDetail()
    this.getPayList()
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1)
    },
    onClickRight() {
      this.$router.push({ name: 'pay-buy', query: { info: this.info } })
    },
    getUserDetail() {
      getUserDetail({ phone: this.phone }).then(res => {
        if(res.data) {
          this.info = res.data;
        } else {
          this.$router.push({ name: 'pay-add', query: { phone: this.phone } })
        }
      })
    },
    getPayList() {
      getPayList({ phone: this.phone }).then(res => {
        this.list = res.list.map(item => JSON.parse(item.commodityList));
        console.log(this.list)
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
    ul {
      display: flex;
      flex-direction: column;
      overflow: auto;
      list-style: none;
      margin: 0;
      padding: 10px 15px;
      
      li {
        display: flex;
        height: 100px;
        background: #fff;
        border-radius: 5px;
        padding: 10px;
        margin-bottom: 10px;
        .list-left {
          width: 100px;
          height: 100px;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .list-right {
          display: flex;
          flex-direction: column;
          justify-content: center;
          // align-content: space-between;
          margin-left: 15px;
          p {
            padding: 0;
            margin: 0;
            span{
              font-size: 12px;
            }
          }
        }
      }
    }
  }
}
</style>