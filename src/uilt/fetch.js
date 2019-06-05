import axios from 'axios'
import { cookie } from '@/uilt/index.js'
import store from '@/store'
import { message } from 'element-ui'

// axios.defaults.headers.sessionId = cookie.getCookie('token') || '123'
var fetch = axios.create({
  baseURL: 'http://localhost:8001',
  timeout: 5000
})

fetch.interceptors.request.use(
  //请求之前要做的事情
  config => {
    // if ( store.getters.token) {
    //   config.headers['X-Token'] = cookie.getCookie('token') || '123'
    // }
    // config.headers['Authorize'] = cookie.getCookie('token') || '123'
    // console.log(config);
    return config
  },
  error => {
    console.log(error);
    Promise.reject(error)
  }
)

fetch.interceptors.response.use(

  response => response,
  err => {
    console.log(err);

    Promise.reject(error)
  }
)
export default fetch
