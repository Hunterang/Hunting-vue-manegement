import { debounce } from '@/uilt/index'
const  resize = {
  mounted() {
    this.fn = () => {
      debounce(()=> {
        if (this.chart) {
          this.chart.resize()
        }
      },300)
    }
    window.addEventListener('resize',this.fn)
  },
  beforeDestroy() {
    window.removeEventListener('resize',this.fn)
  }
}

export default resize
