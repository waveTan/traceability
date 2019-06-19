<template>
  <div id="app">
    <el-row class="home">
      <el-col :span="24" class="img">
        <el-image :src="src"></el-image>
      </el-col>
      <el-col :span="24" class="title">
        <p class="tc">该商品已被验证，请谨防假冒！</p>
        <h3>商品名称: 赖征恒久</h3>
        <h5>商家: 贵州***************</h5>
      </el-col>
      <el-col :span="24" class="info">
        <ul>
          <li @click="toUrl('about')"><i class="ico el-icon-office-building"></i><span>企业信息</span><i class="el-icon-arrow-right"></i></li>
          <li @click="toUrl('traceability')"><i class="ico el-icon-set-up"></i><span>溯源信息</span><i class="el-icon-arrow-right"></i></li>
          <li @click="toUrl('verification')"><i class="ico el-icon-date"></i><span>验证记录</span><i class="el-icon-arrow-right"></i></li>
          <li @click="toUrl('feedback')"><i class="ico el-icon-message"></i><span>意见反馈</span><i class="el-icon-arrow-right"></i></li>
        </ul>
      </el-col>
      <el-col :span="24" class="bottom">
        <el-divider>产品信息</el-divider>
        <ul>
          <li><span>食品名称:</span>赖征恒久</li>
          <li><span>香型:</span>赖征恒久</li>
          <li><span>配料:</span>赖征恒久</li>
          <li><span>酒精浓度:</span>赖征恒久</li>
        </ul>
        <el-divider>产品详情</el-divider>
        <div class="demo-image__lazy">
          <el-image v-for="url in urls" :key="url" :src="url" lazy></el-image>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {
        src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
        urls: [
          'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
          'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
          'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
          'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
          'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',
          'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',
          'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg'
        ]
      }
    },
    created() {
     this.getScan();
    },
    mounted() {},
    methods: {

      getScan(){
        this.$post('/', {guid:335670566191104,result:'wDCHbXHrGT4N5KwTfZazwnuMK7G'})
          .then((response) => {
            console.log(response)
          })
          .catch((err)=>{
            console.log(err)
          })
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
  .home{
    background-color: #EDECF1;
    .img{}
    .title{
      height: auto;
      p{
        background-color: #F53155;
        color: #FFFFFF;
        font-size: 0.8rem;
        height: 3rem;
        line-height: 3rem;
        margin-top: 2rem;
      }
      h3,h5{
        text-align: left;
        margin: 1rem 0 0 1rem;
        padding: 0;
      }
      h3{
        line-height: 2rem;
        font-size: 1.4rem;
        color: #363636;
      }
      h5{
        line-height: 1.5rem;
        color: #c1c1c1;
        font-size: 0.8rem;
        margin-bottom: 1rem;
      }
    }
    .info{
      ul{
        li{
          height: 4rem;
          line-height: 4rem;
          background-color: #FFFFFF;
          margin: 0.5rem 0 0 0;
          font-size: 1.4rem;
          color: #363636;
          cursor: pointer;
          .ico{
            margin: 0 1.5rem 0 1.5rem;
          }
          .el-icon-arrow-right{
            float: right;
            line-height: 4rem;
            margin: 0 1rem 0 0 ;
          }
        }
      }
    }
    .bottom{
      width: auto;
      background-color: #FFFFFF;
      margin: 0.5rem 0.5rem 0 0.5rem;
      border-radius: 0.5rem;
      ul{
        li{
          line-height: 2rem;
          padding: 0 0 0 0.5rem;
          color: #bbbbbb;
          font-size: 0.8rem;
          span{
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
