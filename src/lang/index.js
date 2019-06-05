import Vue from 'vue'
import VueI18n from 'vue-i18n'
import en from './en'
import zh from './zh'
import { cookie } from '@/uilt'
Vue.use(VueI18n)

const messages = {
  en: {
    ...en
  },
  zh: {
    ...zh
  }
}

var i18n = new VueI18n({
  locale: cookie.getCookie('languge') || 'en',
  messages
})

export default i18n 
