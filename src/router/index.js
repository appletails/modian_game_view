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
      path: '/UserInfo',
      name: 'UserInfo',
      component: (resolve) => require(['@/page/UserInfo'], resolve)
    },
    {
      path: '/UserIdol',
      name: 'UserIdol',
      component: (resolve) => require(['@/page/UserIdol'], resolve)
    }
  ]
})
