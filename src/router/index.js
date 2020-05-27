import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const createRouter = function  () {
  return new Router({
    mode: 'history',
    routes: [
      { path: '/foo', component: () => import('../views/Foo.vue') },
      { path: '/bar', component: () => import('../views/Bar.vue') }
    ]
  })
}

export default createRouter;