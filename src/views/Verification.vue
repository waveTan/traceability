<template>
  <div class="verification">
    <el-page-header @back="goBack" content="">
    </el-page-header>
    <div class="info">
      <ul>
        <li>
          <p>验证时间<span>2019-06-19 09:18:48</span></p>
          <p>验证人<span>非首次验证人</span></p>
        </li>
        <li>
          <p>验证时间<span>2019-06-19 09:18:48</span></p>
          <p>验证人<span>非首次验证人</span></p>
        </li>
        <li>
          <p>验证时间<span>2019-06-19 09:18:48</span></p>
          <p>验证人<span>非首次验证人</span></p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        activeName: 'first'
      }
    },
    created() {

    },
    mounted() {
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },
      goBack() {
        this.$router.go(-1);
      }
    }
  }
</script>

<style lang="less">
  @import "./../assets/css/base.less";

  .verification {
    background-color: #EDECF1;
    .el-page-header {
      background-color: #FFFFFF;
      line-height: 2rem;
      padding: 0 0 0 0.5rem;
      .el-page-header__left {
        &:after {
          background-color: transparent;
        }
      }
    }
    .info {
      min-height: 36rem;
      margin: 0.5rem 0.5rem 0 0.5rem;
      border-radius: 0.5rem;
      background-color: #FFFFFF;
      ul{
        li{
          border-bottom: 1px solid #EDECF1;
          padding: 0.5rem 0 ;
          p{
            font-size: 0.7rem;
            padding: 0 1rem;
            line-height: 1.6rem;
            span{
              float: right;
            }
          }
        }
      }
    }
  }

</style>
