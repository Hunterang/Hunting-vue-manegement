// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './style/transiton.css'
import i18n from './lang'
Vue.config.productionTip = false

Vue.use(Element,{
  size: 'medium',
  i18n: (key,value) => i18n.t(key, value)
})
/* eslint-disable no-new */
var vm = new Vue({
  el: '#app',
  router,
  store,
  i18n,
  components: { App },
  template: '<App/>'
})
