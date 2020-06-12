import Vue from 'vue'
import App from './App.vue'
import createRouter from './router/index.js'
import createStore from './store/index.js'

const router = createRouter('hash')
const store = createStore()

new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App)
})