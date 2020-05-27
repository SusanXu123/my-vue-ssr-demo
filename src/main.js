import Vue from 'vue'
import App from './App.vue'
import createRouter from './router/index.js'

const router = createRouter('hash')

new Vue({
  router,
  el: '#app',
  render: h => h(App)
})