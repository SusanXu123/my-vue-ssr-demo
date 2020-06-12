import Vue from 'vue'
import App from './App.vue'
import createRouter from './router/index.js'
import createStore from './store/index.js'

Vue.mixin({
  beforeRouteUpdate (to, from, next) {
    const { fetchData } = this.$options
    if (fetchData) {
      fetchData({
        store: this.$store,
        route: to
      }).then(next).catch(next)
    } else {
      next()
    }
  }
})
export function createApp () {
  const router = createRouter('history')
  const store = createStore()
  const app = new Vue({
    // 根实例简单的渲染应用程序组件。
    router,
    store,
    render: h => h(App)
  })

  return {app, router, store, App}
}