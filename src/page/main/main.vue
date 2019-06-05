<template lang="html">
  <div class="me_main">
    <div class="main_left">
      <elmenu>
      </elmenu>
    </div>
    <div class="main_right">
      <div class="main_right_top">
        <top>
        </top>
      </div>
      <div class="main_right_btm">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
  import elmenu from './components/menu'
  import top from './components/header'
  export default {
    name: 'mains',
    components: {
      elmenu,
      top
     }
  }
</script>

<style rel="stylesheet/scss" lang="scss">
  .me_main {
    position: relative;
    height: 100vh;
    display: flex;
    .main_left {
      height: inherit;
      overflow-y: auto;
    }
    .main_right {
      flex: 1;
      height: inherit;
      .main_right_btm {
        height: calc(100% - 100px);
        overflow-y: auto;
      }
    }
  }
  @media screen and (max-width: 450px) {
    .main_left {
      width: 0;
    }
  }
</style>
