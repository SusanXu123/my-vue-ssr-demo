import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const createRouter = function  (mode = 'histpry') {
  return new Router({
    mode,
    routes: [
      { path: '/foo', component: () => import('../views/Foo.vue') },
      { path: '/bar', component: () => import('../views/Bar.vue') }
    ]
  })
}

export default createRouter;