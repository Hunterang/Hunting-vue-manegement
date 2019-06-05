import Vue from 'vue'
import Vuex from 'vuex'
import self from './module/self'
// import getters from './getters'
Vue.use(Vuex)


var store = new Vuex.Store({
  modules: {
    self
  }
})
export default store
