import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const createRouter = function  (mode = 'history') {
  return new Router({
    mode,
    routes: [{
      name: 'users',
      path: '/users',
      component: () => import('../views/users/list.vue') 
    },
    {
      // 通过noFetchData来配置客户端在beforeMount中数据预取
      // 具体见entry-client.js
      name: 'userInfo',
      path: '/user/:id',
      component: () => import('../views/users/info.vue'),
      meta: {
        noFetchData: true // 客户数据预取走beforeMount
      }
    },
    {
      name: 'goods',
      path: '/goods',
      component: () => import('../views/goods/list.vue')
    }]
  })
}

export default createRouter;