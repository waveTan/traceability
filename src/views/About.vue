<template>
  <div class="about">
    <el-page-header @back="goBack" content="">
    </el-page-header>
    <div class="info">
      <p>{{businessInfo.detail}}</p>
      <el-divider></el-divider>
      <div class="demo-image__lazy">
        <el-image v-for="url in urls" :key="url" :src="url" lazy></el-image>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import {API_URL} from '@/config.js'
  export default {
    data() {
      return {
        businessInfo: {},
        urls: []
      }
    },
    created() {
      this.getBusinessInfos(this.$route.query.productGuid,this.$route.query.businessGuid);
    },
    mounted() {
    },
    methods: {

      getBusinessInfos(productGuid, businessGuid) {
        let that = this;
        axios({
          url: API_URL + '/verifyRecord/getBusinessInfos',
          method: 'post',
          data: {},
          transformRequest: [function () {
            let oMyForm = new FormData();
            oMyForm.append("guid", "335670566191104");
            oMyForm.append("productGuid", productGuid);
            oMyForm.append("businessGuid", businessGuid);
            return oMyForm;
          }],
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        })
          .then(function (response) {
            //console.log(response.data.data);
            if (response.data.success) {
              that.businessInfo = response.data.data[0];
              that.urls = that.businessInfo.infos;
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

  .about {
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
      background-color: #FFFFFF;
      margin: 0.5rem 0.2rem 0.2rem 0.2rem;
      padding: 0.3rem;
      border-radius: 0.5rem;
      min-height: 36rem;
      p {
        font-size: 0.8rem;
        margin-top: 1rem;
        line-height: 1rem;
      }
      .el-divider--horizontal {
        margin: 0.5rem 0 1rem;
      }

    }
  }

</style>
