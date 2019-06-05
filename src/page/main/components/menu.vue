<template lang="html">
  <el-menu
  :default-active="path"
  class="el-menu-vertical-demo"
  @open="handleOpen"
  @close="handleClose"
  :collapse="isCollapse"
  background-color="#545c64"
  text-color="#fff"
  :router = 'router'
  active-text-color="#ffd04b">
  <el-menu-item index="/main/dashborder">
      <i class="el-icon-menu"></i>
      <span slot="title">{{$t( "menu.dashborder" )}}</span>
  </el-menu-item>
  <el-submenu index="mian">
    <template slot="title">
      <i class="el-icon-location"></i>
      <span slot="title">{{$t('menu.tool')}}</span>
    </template>
      <el-menu-item index="/main/name">选项1</el-menu-item>
  </el-submenu>
</el-menu>
</template>

<script>
export default {
  name: 'elmenu',
  data() {
    return {
      path: this.$route.path,
      router: true,

    }
  },
  computed: {
    isCollapse() {
      return this.$store.getters.isFold
    }
  },
  mounted() {
    let timer =null
    let fn = function () {
      clearTimeout(timer)
       timer = setTimeout(() => {
        if (window.innerWidth < 750) {

          this.$store.dispatch('disIsFold',true)
        }else {
          this.$store.dispatch('disIsFold',false)
          // this.isCollapse = false
        }
      },400)

    }
    window.addEventListener('resize',fn.bind(this))
  },
  methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
}
</script>

<style rel='stylesheet/scss' lang='scss' scoped>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
     width: 200px;
   }
   .el-menu {
     border: none;
     height:100vh;
   }
</style>
