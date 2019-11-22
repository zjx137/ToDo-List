import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('@/components/Login')
    },
    {
      path: '/index',
      name: 'index',
      component: () => import('@/components/index')
    }
  ]
})
