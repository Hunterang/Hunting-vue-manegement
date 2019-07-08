import axios from 'axios'
import { cookie } from '@/uilt/index.js'
import store from '@/store'
import { Message} from 'element-ui'
const Base = process.env.NODE_ENV == 'production' ? '/' : 'http://localhost:3001'
// axios.defaults.headers.sessionId = cookie.getCookie('token') || '123'
var fetch = axios.create({
  baseURL: Base,
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
    Message({
      message: '请求失败',
      type: 'failed'
    })
    Promise.reject(error)
  }
)
export default fetch
