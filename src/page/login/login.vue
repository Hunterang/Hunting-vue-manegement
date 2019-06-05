<template lang="html">
  <div class="login_page">
    <div class="login">
      <div class="head" >
        <div class="child"  @click='handleLanguge'>
            <i class="el-input__icon el-icon-s-marketing"></i>
        </div>
        <span>{{$t('login.head')}}</span>
      </div>
      <!-- <div style="margin: 20px;"></div> -->
      <el-form :label-position="labelPosition"  :model="formLabelAlign">
        <el-form-item >
          <el-input
          prefix-icon='el-icon-user-solid'
          v-model="formLabelAlign.username"></el-input>
        </el-form-item>
        <el-form-item >
          <el-input
          prefix-icon='el-icon-lock'
          show-password
          v-model="formLabelAlign.password"></el-input>
        </el-form-item>
        <el-button type='primary' @click = 'handlelogin'>{{$t('login.login')}}</el-button>
      </el-form>
    </div>

  </div>
</template>

<script>
  import { apiLogin } from '@/api/login'
  import { cookie } from '@/uilt/index.js'
  export default {
    data() {
      return {
        labelPosition: 'left',
        formLabelAlign: {
          username: 'admin',
          password: '111111',
          type: ''
        }
      };
    },
    methods: {
      handleLanguge() {
        this.$i18n.locale = this.$i18n.locale == 'zh'? 'en' : 'zh';
        cookie.setCookie('languge',this.$i18n.locale)
        this.$message({
          message: 'Switch Language Success',
          type: 'success'
        })
      },
       handlelogin() {
        let { username,password } = this.formLabelAlign
        let formData = {
          username,password
        }
        apiLogin(formData)
        .then(v => {
          let { data } = v
          if (data.code === 200) {
            cookie.setCookie('token',data.token,1)
            this.$router.push({path:'/main'})
          }
        })

      }
    }
  }
</script>
<style>
  .el-button {
    width: 100%;
    height: 48px;
  }
  .el-input__icon {
    color: #fff;
    font-size: 20px;
  }
  .el-input__inner {
    color: #fff;
    text-indent: 10px;
    background: #111222;
    border-color: #232255;
    height: 48px !important;
    line-height: 48px !important;
  }
</style>

<style rel="stylesheet/scss"  lang="scss" scoped>
  $dark-bule: #232332;
  .login_page {
    box-sizing: border-box;
    background: $dark-bule;
    width: 100vw;
    height: 100vh;
    color: #fff;
    padding: 30vh 30vw;
    .login {
      width: 500px;
      .head {
        text-align: center;
        height: 30px;
        line-height: 30px;
        margin-bottom: 20px;
        position: relative;
        .child {
          position: absolute;
          right: 0;
          font-size: 12px;
          top: 0;
          height: 100%;
        }
        span {
          font-size: 20px;
        }
      }
    }

  }
</style>
