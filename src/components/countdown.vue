<template lang="html">
  <div class="calculate">
    <div class="cal_left">
      <slot name= 'icon'></slot>
    </div>
    <div class="cal_right">
      {{msg}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'contdown',
  data(){
    return {
      msg: 0
    };
  },
  props: {
    start: {
      default: 0
    },
    over: {
      default: 2000
    }
  },
  mounted() {
    let { start } = this
    this.msg = start
    this.count()
  },
  methods: {
    count() {
      window.requestAnimationFrame(this.count)
      let { over,msg } = this
      let rest = over - msg
      if (rest == 0) {
        window.cancelAnimationFrame(this.count)
      }
      this.msg += Math.ceil(rest/10)
    }
  }
}
</script>

<style rel='stylesheet/scss' lang="scss">
  .calculate {
    cursor: pointer;
    float: left;
    width: calc(25% - 10px);
    height: 120px;
    border-radius: 8px;
    position: relative;
    margin-left:10px;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    &>div {
      flex: 1;
      height: inherit;
    }
    .cal_left {
      position: relative;
    }
    .cal_right {
      text-align: center;
      line-height: 120px;
    }
    .cal_right {
      line-height: 120px;
      font-size: 30px;
      text-align: center;
      color: #987321;
    }
    &::before {
      position: absolute;
      content: '';
      height: inherit;
      width: 100%;
      top: 0;
      left: 0;
      z-index: 1;
      box-shadow: -1px -1px 8px #ccc;
      border-radius: 8px;
    }
    &::after {
      border-radius: 8px;
      position: absolute;
      content: '';
      height: inherit;
      width: 100%;
      top: 0;
      right: 0;
      z-index: 1;
      box-shadow: 1px 1px 8px #ccc;
    }
  }
  @media screen and(max-width: 950px) {
    .calculate {
      width: calc(50% - 10px);
    }
  }
  @media screen and(max-width: 550px) {
    .calculate {
      width: calc(100% - 10px);
    }
  }
</style>
