<template>
  <div class="traceability">
    <el-page-header @back="goBack" content="">
    </el-page-header>
    <div class="info">
      <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
        <el-tab-pane label="原料信息" name="first">
          <div class="tc" style="min-height: 20rem;line-height: 5rem;font-size: 0.8rem">暂无信息</div>
        </el-tab-pane>
        <el-tab-pane label="流程信息" name="second">
          <div class="tc" style="min-height: 20rem;line-height: 5rem;font-size: 0.8rem">暂无信息</div>
        </el-tab-pane>
        <el-tab-pane label="修正信息" name="third">
          <div class="tc" style="min-height: 20rem;line-height: 5rem;font-size: 0.8rem">暂无信息</div>
        </el-tab-pane>
        <el-tab-pane label="流转信息" name="fourth">
          <div class="tc" style="min-height: 20rem;line-height: 5rem;font-size: 0.8rem">暂无信息</div>
        </el-tab-pane>
      </el-tabs>
    </div>

  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    data() {
      return {
        activeName: 'first'
      }
    },
    created() {
      this.getTraceInfo('420953354584195072','407482127261630464');
    },
    mounted() {
    },
    methods: {
      getTraceInfo(productGuid, thingcodeDetailGuid) {
        let that = this;
        axios({
          url: 'http://192.168.1.37:8013/verifyRecord/getTraceInfo',
          method: 'post',
          data: {},
          transformRequest: [function () {
            let oMyForm = new FormData();
            oMyForm.append("guid", "335670566191104");
            oMyForm.append("productGuid", productGuid);
            oMyForm.append("thingcodeDetailGuid", thingcodeDetailGuid);
            return oMyForm;
          }],
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        })
          .then(function (response) {
            console.log(response.data.data);
            if (response.data.success) {
              let vshowmenu = JSON.parse(response.data.data.vshowmenu);
              console.log(vshowmenu);
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

  .traceability {
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
      margin: 0.5rem 0 0 0;
      min-height: 36rem;
      .el-tabs {
        .el-tabs__header {
          border: 0;
          margin: 0.5rem 0;
          .el-tabs__nav {
            border: 0;
            .el-tabs__item {
              padding: 0 0.5rem;
              border: 0;
              line-height: 2rem;
              height: 2rem;
              margin: 0.5rem 0.4rem 0 0.4rem;
            }
            .is-active{
              background-color: #F53155;
              border-radius: 1rem;
              color: #FFFFFF;
            }
          }
        }
        .el-tabs__content {
          background-color: #EDECF1;
        }
      }
    }
  }

</style>
