<template lang="html">
  <div class="line_chart" ref='chart'>

  </div>
</template>

<script>
import resize from '@/assets/echartMixin'
import echarts from 'echarts'
export default {
  name: 'linechart',
  mixins: [resize],
  data() {
    return {
      chart: null
    }
  },
  mounted() {
    let that = this
    this.chart = echarts.init(that.$refs.chart)

    this.$nextTick().then(_ => {
      this.initCahrt(this.chart)
    })

  },
  methods: {

    initCahrt(myChart) {

      var colors = ['#5793f3', '#d14a61', '#675bba'];

      let option = {
          color: colors,

          tooltip: {
              trigger: 'axis',
              axisPointer: {
                  type: 'cross'
              }
          },
          grid: {
              right: '20%'
          },
          legend: {
              data:['降水量','平均温度']
          },
          xAxis: [
              {
                  type: 'category',
                  axisTick: {
                      alignWithLabel: true
                  },
                  data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
              }
          ],
          yAxis: [
              {
                  type: 'value',
                  name: '蒸发量',
                  min: 0,
                  max: 250,
                  position: 'right',
                  axisLine: {
                      lineStyle: {
                          color: colors[0]
                      }
                  },
                  axisLabel: {
                      formatter: '{value} ml'
                  }
              },
              {
                  type: 'value',
                  name: '降水量',
                  min: 0,
                  max: 250,
                  position: 'right',
                  offset: 80,
                  axisLine: {
                      lineStyle: {
                          color: colors[1]
                      }
                  },
                  axisLabel: {
                      formatter: '{value} ml'
                  }
              },
              {
                  type: 'value',
                  name: '温度',
                  min: 0,
                  max: 25,
                  position: 'left',
                  axisLine: {
                      lineStyle: {
                          color: colors[2]
                      }
                  },
                  axisLabel: {
                      formatter: '{value} °C'
                  }
              }
          ],
          series: [
              {
                  name:'蒸发量',
                  type:'line',
                  data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
              },
              {
                  name:'降水量',
                  type:'line',
                  yAxisIndex: 1,
                  data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
              },
              {
                  name:'平均温度',
                  type:'line',
                  yAxisIndex: 2,
                  data:[2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
              }
          ]
      };


      myChart.setOption(option)
    }
  }
}
</script>

<style lang="css" scoped>
  .line_chart {
    height: inherit;
  }
</style>
