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
  <!-- <el-input
  placeholder="请输入内容"
  prefix-icon="el-icon-search"
  v-model="input2">
  </el-input> -->
  <el-menu-item index="dashborder">
      <i class="el-icon-menu"></i>
      <span slot="title">{{$t( "menu.dashborder" )}}</span>
  </el-menu-item>
  <el-submenu index="tool">
    <template slot="title">
      <i class="el-icon-location"></i>
      <span slot="title">{{$t('menu.tool')}}</span>
    </template>
      <el-menu-item index="/main/name">选项1</el-menu-item>
  </el-submenu>
  <el-submenu index="edit">
    <template slot="title">
      <i class="el-icon-edit"></i>
      <span slot="title">{{$t('menu.edit')}}</span>
    </template>
      <el-menu-item index="/main/edit">选项1</el-menu-item>
  </el-submenu>
  <el-submenu index="多级菜单">
    <template slot="title">
      <i class="el-icon-monitor"></i>
      <span slot="title">多级菜单</span>
    </template>
    <el-submenu index="二级菜单">
      <template slot="title">
        <!-- <i class="el-icon-location"></i> -->
        <span slot="title">二级菜单</span>
      </template>
      <el-menu-item index="/main/third">三级</el-menu-item>
    </el-submenu>
      <!--  -->
  </el-submenu>
  <el-submenu index="setting">
    <template slot="title">
      <i class="el-icon-setting"></i>
      <span slot="title">{{$t('menu.setting')}}</span>
    </template>
      <el-menu-item index="/main/setting">个人信息设置</el-menu-item>
  </el-submenu>
  <el-submenu index="items">
    <template slot="title">
      <i class="el-icon-s-claim"></i>
      <span slot="title">{{$t('menu.items')}}</span>
    </template>
      <el-menu-item index="/main/showItems">全部商品</el-menu-item>
        <el-menu-item index="/main/showStores">全部商店</el-menu-item>
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
      input2: ''
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
        this.$store.commit('setMenu',JSON.stringify(keyPath))
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
