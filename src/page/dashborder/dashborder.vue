<template lang="html">
  <div class="me_dash">
    <div class="dash_top_container">
      <contdown>
        <div class="slot_icon"  slot='icon'>
          <i class="el-icon-chat-dot-square"></i>
        </div>
      </contdown>
      <contdown over=2355>
        <div class="slot_icon"  slot='icon'>
          <i class="el-icon-message"></i>
        </div>
      </contdown >
      <contdown>
        <div class="slot_icon"  slot='icon'>
          <i class="el-icon-truck"></i>
        </div>
      </contdown>
      <contdown over=2655>
        <div class="slot_icon"  slot='icon'>
          <i class="el-icon-monitor"></i>
        </div>
      </contdown>
    </div>
  </div>
</template>

<script>
  import contdown from '@/components/countdown'
  export default {
    name: 'dashborder',
    components: { contdown }
  }
</script>

<style rel="stylesheet/scss" lang="scss">
  .me_dash {
    width: inherit;
    overflow-y: auto;
    overflow-x: hidden;
    .dash_top_container {
      padding-right: 10px;
      margin-top: 10px;
    }
    .slot_icon {
      position: absolute;
      top: 10%;
      left: 10%;
      z-index: 99;
      width: 80%;
      height: 80%;
      font-size: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #336655;
      border-radius: 8px;
      transition: 0.3s;
      box-sizing: border-box;
      &:hover {
        color: #fff;
        background: #336655;
      }
    }
  }
</style>
