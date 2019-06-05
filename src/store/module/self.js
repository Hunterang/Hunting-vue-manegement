import { cookie } from '@/uilt/index.js'

const self = {
  state: {
    languge: cookie.getCookie('languge')||'en',
    token:cookie.getCookie('token') ||'',
    isFold: false
  },
  mutations: {
    setLanguge(state,str) {
      state.langguge = str
      cookie.setCookie('languge',str,1)
    },
    storeToken(state,str) {
      state.token = str
      cookie.setCookie('token',str)
    },
    setIsFold(state,str) {
      state.isFold = str
    }
  },
  actions: {
    setToken({commit},str) {
      commit('storeToken',str)
    },
    disIsFold({commit},str) {
      commit('setIsFold',str)
    }
  },
  getters: {
    getLanguge: state => state.languge,
    token: state => state.token,
    isFold: state => state.isFold
  }
}

export default self
