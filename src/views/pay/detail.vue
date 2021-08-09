<template>
  <div class="pay-add">
    <van-nav-bar title="我的订单"  right-text="添加" left-arrow @click-left="onClickLeft" @click-right="onClickRight"/>
    <div class="main">
      <van-tabs v-model="active">
        <van-tab v-for="(val, index1) in tabList" :key="index1" :title="val.title">
          <ul>
            <li v-for="(item, index) in val.list" :key="index">
              <div class="list-left">
                <img :src="item.imgList"/>
              </div>
              <div class="list-right">
                <p><span>{{ item.name }}</span></p>
                <p><span>日期:{{ item.creatr_date }}</span></p>
                <p> <span>数量：{{ item.num }}</span></p>
              </div>
            </li>
          </ul>
        </van-tab>
      </van-tabs>
      
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
      info: null,
      active: '1s',
      tabList:[
        { title: '代发货', list: [], start: '0' },
        { title: '配送中', list: [], start: '1' },
        { title: '已完成', list: [], start: '2' }
      ]
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
          window.localStorage.setItem('user', JSON.stringify( this.info))
        } else {
          this.$router.push({ name: 'pay-add', query: { phone: this.phone } })
        }
      })
    },
    getPayList() {
      getPayList({ phone: this.phone }).then(res => {
        res.list.forEach(item => {
          let list = []
          JSON.parse(item.commodityList).forEach(val => {
            list.push(val)
          })
          switch(item.start) {
            case '0':
              this.tabList[0].list = this.tabList[0].list.concat(list)
              break;
            case '1':
              this.tabList[1].list = this.tabList[1].list.concat(list)
              break;
            case '2':
              this.tabList[2].list = this.tabList[2].list.concat(list)
              break;
          }
        });
        console.log(this.tabList)
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