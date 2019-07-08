import { debounce } from '@/uilt/index'
const  resize = {
  mounted() {
    this.menu = document.querySelector('.main_left')
    this.fn = () => {
      debounce(()=> {
        if (this.chart) {
          this.chart.resize()
        }
      },300)
    }
    window.addEventListener('resize',this.fn)
    this.menu.addEventListener('transitionend',this.fn)
  },
  beforeDestroy() {
    window.removeEventListener('resize',this.fn)
    this.menu.removeEventListener('transitionend',this.fn)
  }
}

export default resize
