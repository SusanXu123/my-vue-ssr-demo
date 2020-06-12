import {createApp} from './app.js'

const { app, router, store } = createApp()

if (window.__INITIAL_STATE__) {
  console.log('window.__INITIAL_STATE__--', window.__INITIAL_STATE__)
  store.replaceState(window.__INITIAL_STATE__)
}
// 这里假定 App.vue 模板中根元素具有 `id="app"`
router.onReady(() => {
  console.log('6666')
  router.beforeResolve((to, from, next) => {
    console.log('to--', to)
    if (to.meta && to.meta.noFetchData) {
      return next()
    }
    const matched = router.getMatchedComponents(to)
    const prevMatched = router.getMatchedComponents(from)
    // 我们只关心非预渲染的组件
    // 所以我们对比它们，找出两个匹配列表的差异组件
    let diffed = false
    console.log('matched--', {
      matched,
      prevMatched
    })
    const activated = matched.filter((c, i) => {
      return diffed || (diffed = (prevMatched[i] !== c))
    })

    if (!activated.length) {
      return next()
    }

    // 这里如果有加载指示器 (loading indicator)，就触发

    Promise.all(activated.map(c => {
      if (c.asyncData) {
        return c.asyncData({ store, route: to })
      }
    })).then(() => {

      // 停止加载指示器(loading indicator)

      next()
    }).catch(next)
  })
  app.$mount('#app')
})