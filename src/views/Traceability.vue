<template>
  <div class="traceability">
    <el-page-header @back="goBack" content="">
    </el-page-header>
    <div class="info">
      <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
        <el-tab-pane label="原料信息" name="first">用户管理</el-tab-pane>
        <el-tab-pane label="流程信息" name="second">配置管理</el-tab-pane>
        <el-tab-pane label="修正信息" name="third">角色管理</el-tab-pane>
        <el-tab-pane label="流转信息" name="fourth">定时任务补偿</el-tab-pane>
      </el-tabs>
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
