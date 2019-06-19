<template>
  <div id="app">
    <el-row class="home">
      <el-col :span="24" class="img">
        <el-image :src="src"></el-image>
      </el-col>
      <el-col :span="24" class="title">
        <p class="tc">{{product.checkComment==='通过' ? '该商品已被验证，请谨防假冒！':''}}</p>
        <h3>商品名称: {{product.goodsName}}</h3>
        <h5>商家: {{product.businessName}}</h5>
      </el-col>
      <el-col :span="24" class="info">
        <ul>
          <li @click="toUrl('about')">
            <i class="ico el-icon-office-building"></i>
            <span>企业信息</span>
            <i class="el-icon-arrow-right"></i>
          </li>
          <li @click="toUrl('traceability')">
            <i class="ico el-icon-set-up"></i>
            <span>溯源信息</span>
            <i class="el-icon-arrow-right"></i>
          </li>
          <li @click="toUrl('verification')">
            <i class="ico el-icon-date"></i>
            <span>验证记录</span>
            <i class="el-icon-arrow-right"></i>
          </li>
          <li @click="toUrl('feedback')">
            <i class="ico el-icon-message"></i>
            <span>意见反馈</span>
            <i class="el-icon-arrow-right"></i>
          </li>
        </ul>
      </el-col>
      <el-col :span="24" class="bottom">
        <el-divider>产品信息</el-divider>
        <ul>
          <li v-for="item in scanInfo.productAttr"><span>{{item.name}}:</span>{{item.value}}</li>
        </ul>
        <el-divider>产品详情</el-divider>
        <div class="demo-image__lazy">
          <el-image v-for="url in urls" :key="url.imgUrl" :src="url.imgUrl" lazy></el-image>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'app',
    data() {
      return {
        scanInfo: {},
        product:'',
        src: '',
        urls: []
      }
    },
    created() {
      this.getScan('wDCHbXHrGT4N5KwTfZazwnuMK7G');
    },
    mounted() {
    },
    methods: {

      getScan(result) {
        let that = this;
        axios({
          url: 'http://192.168.1.37:8013/verifyRecord/scan',
          method: 'post',
          data: {},
          transformRequest: [function () {
            let oMyForm = new FormData();
            oMyForm.append("guid", "335670566191104");
            oMyForm.append("result", result);
            return oMyForm;
          }],
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        })
          .then(function (response) {
            console.log(response.data.data);
            if (response.data.success) {
              that.scanInfo = response.data.data;
              that.product = that.scanInfo.product;
              that.src = that.scanInfo.productImages[0].imageUrl;
              that.urls = that.scanInfo.product.productInfo;

            } else {
              that.$message({message: '获取数据失败，请检查网络后重试！', type: 'erroy'});
            }
          })
          .catch(function (error) {
            that.$message({message: '获取数据失败，请检查网络后重试！', type: 'erroy'});
            console.log(error);
          });
      },

      /**
       * 连接跳转
       * @param name
       * @param params
       */
      toUrl(name, params) {
        let newQuery = {hash: params};
        this.$router.push({
          name: name,
          query: newQuery
        })
      },
    }
  }
</script>

<style lang="less">
  @import "./../assets/css/base.less";

  .home {
    background-color: #EDECF1;
    .img {
      min-height: 13rem;
    }
    .title {
      height: auto;
      p {
        background-color: #F53155;
        color: #FFFFFF;
        font-size: 0.8rem;
        height: 3rem;
        line-height: 3rem;
        margin-top: 2rem;
      }
      h3, h5 {
        text-align: left;
        margin: 1rem 0 0 1rem;
        padding: 0;
      }
      h3 {
        line-height: 2rem;
        font-size: 1.4rem;
        color: #363636;
      }
      h5 {
        line-height: 1.5rem;
        color: #c1c1c1;
        font-size: 0.8rem;
        margin-bottom: 1rem;
      }
    }
    .info {
      ul {
        li {
          height: 4rem;
          line-height: 4rem;
          background-color: #FFFFFF;
          margin: 0.5rem 0 0 0;
          font-size: 1.4rem;
          color: #363636;
          cursor: pointer;
          .ico {
            margin: 0 1.5rem 0 1.5rem;
          }
          .el-icon-arrow-right {
            float: right;
            line-height: 4rem;
            margin: 0 1rem 0 0;
          }
        }
      }
    }
    .bottom {
      width: auto;
      background-color: #FFFFFF;
      margin: 0.5rem 0.5rem 0 0.5rem;
      border-radius: 0.5rem;
      ul {
        li {
          line-height: 2rem;
          padding: 0 0 0 0.5rem;
          color: #bbbbbb;
          font-size: 0.8rem;
          span {
            color: #5c5c5c;
            width: 6rem;
            display: block;
            float: left;
          }
        }
      }
    }
  }
</style>
s
