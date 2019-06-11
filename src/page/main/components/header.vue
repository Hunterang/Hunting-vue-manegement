<template lang="html">
  <div class="me_header">
      <div class="header_menu">
        <div class="header_left">
          <i class="el-icon-s-fold"
          @click = 'handleFold()'
          :class="[unFold ?'el-icon-s-unfold': '']"></i>
        </div>
        <div class="header_list">
          <transition name='fade' mode='out-in'>
            <el-breadcrumb separator="/">
              <el-breadcrumb-item :to="{ path: '/main/dashborder' }">{{$t("menu.dashborder")}}</el-breadcrumb-item>
              <!-- <el-breadcrumb-item><a href="#">management</a></el-breadcrumb-item> -->
              <!-- <el-breadcrumb-item
              v-for='menu,index in menuArr'
              :key = 'index'
              >{{menu}}</el-breadcrumb-item> -->
              <el-breadcrumb-item >{{this.$route.name}}</el-breadcrumb-item>
              <!-- <div class="" v-for = 'item,index in cake' :key='index'>
                <el-breadcrumb-item >{{item.name}}</el-breadcrumb-item>
                <el-breadcrumb-item v-if='item.child'></el-breadcrumb-item>
              </div> -->
            </el-breadcrumb>
          </transition>
        </div>
        <div class="header_right">
          <div class="header_icon">
            <div class="">
              <i class="el-icon-bell"></i>
            </div>
            <div class="" @click='handleBig()'>
              <i class="el-icon-full-screen"></i>
            </div>
          </div>
          <div class="log_out" @click='handleLogout($event)'>
            <div class="logout_list" v-if='isShow'>
              <p>welcome admin</p>
              <p @click = 'handleBack()'>退出</p>
            </div>
          </div>
        </div>
      </div>
    <div class="header_btm_list">
    </div>
  </div>
</template>

<script>
import { cookie } from '@/uilt/index.js'
export default {
  name: 'top',
  data() {
    return {
      isShow: false
    }
  },
  computed: {
    unFold() {
      return this.$store.getters.isFold
    },
    menuArr() {
      let arr = this.$store.getters.menu || '[]'
      return JSON.parse(arr)
    }
  },
  mounted() {
    window.addEventListener('click',this.handleDispear.bind(this))
  },
  beforedestroy() {
    window.removeEventListener('click',this.handleDispear.bind(this))
  },
  methods: {
    handleFold(){
      let fld = !this.unFold
      this.$store.dispatch('disIsFold',fld)
    },
    handleBig() {
      let isFullscreen=document.fullScreen||document.mozFullScreen||document.webkitIsFullScreen;
      if (!isFullscreen) {
        document.documentElement.requestFullscreen()
      }else {
        document.exitFullscreen()
      }
    },
    handleDispear() {
      this.isShow = false
    },
    handleLogout(e) {
      e.stopPropagation()
      this.isShow = true
    },
    handleBack() {
      cookie.rmCookie('token')
      this.$router.push('/')
    }
  }

}
</script>

<style rel='stylesheet/scss' lang='scss' scoped>
  .me_header {
    height: 80px;
    background: rgb(250,250,250);
    .header_menu {
      box-shadow: 0 1px 5px #caffff;
      height: 60px;
      border-bottom: 1px solid #fff;
      box-sizing: border-box;
      font-size: 24px;
      background: #fff;
      .header_left {
        height: inherit;
        line-height: 60px;
        width: 60px;
        float: left;
        text-align: center;
        i {
          color: #8bc34a;
          cursor: pointer;
          &:hover {
            color: #8bc3df;
          }
        }
      }
      .header_right {
        float: right;
        width: 300px;
        height: 100%;
        // background: #777888;
        display: flex;
        align-items: center;
        .header_icon {
          flex: 1;
          height: inherit;
          & div {
            color: #1166bb;
            font-size: 24px;
            cursor: pointer;
            height: inherit;
            line-height: 60px;
            margin-left: 20px;
            float: left;
          }
        }
        .log_out {
          cursor: pointer;
          height: 50px;
          width: 50px;
          float: right;
          border-radius: 25px;
          background: url('/static/1.png') no-repeat;
          background-size: 100%;
          // filter: contrast(50%);
          background-size: 100% 100%;
          margin-right: 50px;
          position: relative;
          .logout_list {
            font-size: 14px;
            position: absolute;
            width: 120px;
            padding: 10px;
            box-sizing: border-box;
            top: 60px;
            right: 0;
            height: 120px;
            z-index: 100;
            background: #fff;
            box-shadow: 0 0 5px #caffff;
            border: 1px solid #ccc;
            border-radius:4px;
            opacity: .5;
            animation: opst 1s 1;
            animation-fill-mode: forwards;
            &:after {
              position: absolute;
              content: '';
              top: -6px;
              right: 20px;
              width: 10px;
              height: 10px;
              transform: rotateZ(135deg);
              border-left: 1px solid #ccc;
              border-bottom: 1px solid #ccc;
              background: #fff;
            }
            p {
              border-bottom: 1px solid #eee;
              height: 30px;
              line-height: 30px;
              text-align: center;
              animation: up 1s 1;
              animation-fill-mode: forwards;
              &:hover{
                color:#999888;
              }
            }
          }
        }
      }
      .header_list{
        padding-left: 20px;
        height: inherit;
        float: left;
        display:flex;
        align-items: center;
      }
    }
    .header_btm_list {
    }
  }
  @keyframes opst {
    100% {
      opacity: 1;
    }
  }
  @keyframes up {
    0% {
      opacity: 0.5;
      transform: translateY(10px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
</style>
