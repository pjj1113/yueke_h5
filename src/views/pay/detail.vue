<template>
  <div class="pay-add">
    <van-nav-bar title="标题" left-text="返回" right-text="添加" left-arrow @click-left="onClickLeft" @click-right="onClickRight"/>
    <div class="main">
      <ul>
        <li>
          <div class="list-left">
            <img src="@/assets/img/home.jpg"/>
          </div>
          <div class="list-right">
            <p><span>名称：这是一个测试的案例</span></p>
            <p><span>日期:2021-12-10 10:12:23</span></p>
            <p> <span>数量：12</span></p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list:[]
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