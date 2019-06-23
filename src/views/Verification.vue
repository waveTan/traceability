<template>
  <div class="verification">
    <el-page-header @back="goBack" content="">
    </el-page-header>
    <div class="info">
      <p class="tc" style="padding-top: 2rem">暂无记录</p>
      <ul v-show="false">
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
  import axios from 'axios'
  import {API_URL} from '@/config.js'
  export default {
    data() {
      return {
        activeName: 'first'
      }
    },
    created() {
      this.getVerifyInfo(this.$route.query.thingcodeDetailGuid);
    },
    mounted() {
    },
    methods: {
      getVerifyInfo(thingcodeDetailGuid) {
        let that = this;
        axios({
          url:API_URL + '/verifyRecord/getVerifyInfo',
          method: 'post',
          data: {},
          transformRequest: [function () {
            let oMyForm = new FormData();
            oMyForm.append("guid", "335670566191104");
            oMyForm.append("thingcodeDetailGuid", thingcodeDetailGuid);
            return oMyForm;
          }],
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        })
          .then(function (response) {
           /* console.log(response);
            console.log(response.data);*/
            if (response.data.success) {
              /*that.businessInfo = response.data.data[0];
              that.urls = that.businessInfo.infos;*/
            } else {
              that.$message({message: '获取数据失败，请检查网络后重试！', type: 'erroy'});
            }
          })
          .catch(function (error) {
            that.$message({message: '获取数据失败，请检查网络后重试！', type: 'erroy'});
            console.log(error);
          });
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
