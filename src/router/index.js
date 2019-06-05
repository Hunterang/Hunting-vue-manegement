import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/page/login/login'
import Mains from '@/page/main/main'
import Dashborder from '@/page/dashborder/dashborder'
import { cookie } from '@/uilt/index'
Vue.use(Router)

 const router = new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/main',
      name: 'mains',
      component: Mains,
      redirect: '/main/dashborder',
      meta: {
        auth: true,
        name: 'main'
      },
      children: [
        {
          path: 'dashborder',
          name: 'dashborder',
          component: Dashborder,
          meta: {
            auth: true
          }
        },{
          path: 'name',
          name: 'name',
          component: null,
          meta: { auth: true }
        }
      ]
    },
    {
      path: '*',
      name: 'error',
      component: Mains
    }
  ]
})

router.beforeEach((to,from,next) => {
  if (to.meta.auth) {
    let isLogin =  cookie.getCookie('token')|| ''
    // console.log(isLogin);
    if (isLogin!='') {
      next();
    }else {
      next('/')
    }
  }else {
    next();
  }

})






export default router
