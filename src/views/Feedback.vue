<template>
  <div class="feedback">
    <el-page-header @back="goBack" content="">
    </el-page-header>
    <div class="info">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-ruleForm">
        <el-form-item label="投诉意见" prop="desc">
          <el-input rows="5" type="textarea" v-model="ruleForm.desc"></el-input>
        </el-form-item>
        <el-form-item class="bt">
          <el-button type="primary" @click="submitForm('ruleForm')">提 交</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import {API_URL} from '@/config.js'

  export default {
    data() {
      return {
        ruleForm: {
          desc: ''
        },
        rules: {
          desc: [
            {required: true, message: '请填写您的', trigger: 'blur'}
          ]
        }
      };
    },
    created() {

    },
    mounted() {
    },
    methods: {

      feedbackForm(content) {
        let that = this;
        let productGuid = this.$route.query.productGuid;
        axios({
          url: API_URL + '/verifyRecord/complaint',
          method: 'post',
          data: {},
          transformRequest: [function () {
            let oMyForm = new FormData();
            oMyForm.append("productGuid", productGuid);
            oMyForm.append("content", content);
            return oMyForm;
          }],
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        })
          .then(function (response) {
            //console.log(response.data);
            if (response.data.success) {
              that.$message({message: '非常感谢您的宝贵意见，我们收到会尽快采纳！', type: 'success'});
              that.ruleForm.desc = '';
            } else {
              that.$message({message: '获取数据失败，请检查网络后重试！', type: 'erroy'});
            }
          })
          .catch(function (error) {
            that.$message({message: '获取数据失败，请检查网络后重试！', type: 'erroy'});
            console.log(error);
          });
      },

      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.feedbackForm(this.ruleForm.desc);
          } else {
            return false;
          }
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

  .feedback {
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
      margin: 2rem 1rem 0;
      min-height: 36rem;
      .bt {
        text-align: center;
      }
    }
  }

</style>
