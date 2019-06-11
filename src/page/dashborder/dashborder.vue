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
    <div class="dash_chart_container">
      <linechart></linechart>
    </div>
  </div>
</template>

<script>
  import contdown from '@/components/countdown'
  import linechart from '@/components/echartsvue/lineChart'
  export default {
    name: 'dashborder',
    components: { contdown,linechart }
  }
</script>

<style rel="stylesheet/scss" lang="scss">
  .me_dash {
    width: inherit;
    display: block;
    height: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    background: linear-gradient(to bottom,rgba(20,20,30,.1),rgba(250,250,250,0));
    .dash_top_container {
      padding-right: 10px;
      margin-top: 10px;
      overflow: hidden;
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
    .dash_chart_container {
      background: #fff;
      margin:0 auto;
      padding-top: 10px;
      margin-top: 20px;
      width: calc(100% - 20px);
      box-sizing: border-box;
      height: 300px;
      animation: up 1s 1;
      animation-fill-mode: forwards;
      border: 1px solid #ccc;
      border-radius: 8px;
    }
  }
  @keyframes up {
    0% {
      transform: translateY(-10px);
      opacity: 0.5;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }




</style>
