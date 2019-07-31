import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: (resolve) => require(['@/page/Home'], resolve)
    },
    {
      path: '/User',
      name: 'User',
      component: (resolve) => require(['@/page/User'], resolve)
    }
  ]
})
