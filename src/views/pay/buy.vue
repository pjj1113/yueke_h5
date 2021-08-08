<template>
  <div class="pay-add">
    <van-nav-bar title="添加订单" left-text="返回" right-text="添加" left-arrow @click-left="onClickLeft" @click-right="addBay"/>
    <div class="main">
      <ul>
        <li v-for="(item, index) in list" :key="index">
          <van-checkbox v-model="item.isSelect"></van-checkbox>
          <div class="list-left">
            <img :src="item.imgList"/>
          </div>
          <div class="list-right">
            <p><span>名称：{{ item.name }}</span></p>
            <p><span>型号:{{ item.model }}</span></p>
            <p><span>价格:{{ item.price }}</span></p>
          </div>
          <input class="input" v-model="item.num"/>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import {  getCommodityTypeList, addPay } from '@/api';
export default {
  data() {
    return {
      list:[],
      checked:false,
      info: this.$route.query.info
    }
  },
  mounted() {
    this.getCommodityTypeList()
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1)
    },
    onClickRight() {
      this.$router.push({ name: 'pay-add', query: { phone: this.phone } })
    },
    getCommodityTypeList() {
      getCommodityTypeList().then(res => {
        this.list = res.list.map(item => {
          this.$set(item, 'isSelect', false)
          this.$set(item, 'num', '')
          return item
        });
      })
    },
    addBay() {
      console.log(this.info)
      const { name, phone, address, remark } = this.info;
      let commodityList = JSON.stringify(this.list.filter(item => item.isSelect || item.num))
      addPay({ name, phone, address, remark,commodityList: commodityList }).then(res => {
        Toast('下单成功')
      })
      //  name = '', phone= '', address, remark, commodityList,price
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
    overflow: auto;
    ul {
      display: flex;
      flex-direction: column;
      overflow: auto;
      list-style: none;
      margin: 0;
      padding: 10px 15px;
      
      li {
        display: flex;
        align-items: center;
        height: 100px;
        background: #fff;
        border-radius: 5px;
        padding: 10px;
        margin-bottom: 10px;
        .list-left {
          width: 100px;
          height: 100px;
          margin-left: 10px;
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
        .input {
          display: inline-block;
          width: 50px;
          height: 30px;
          border:1px solid #eee;
          margin-left: 30px;
        }
      }
    }
  }
}
</style>