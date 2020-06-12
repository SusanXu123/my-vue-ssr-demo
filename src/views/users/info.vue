<template>
  <div>
    <h1>个人详情页</h1>
    <h3>{{user.name}}</h3>
    <div>年龄： {{user.age}}</div>
    <div>性别： {{user.gender}}</div>
  </div>
</template>
<script>
export default {
  asyncData ({store, route}) {
    const id = route.params.id
    return store.dispatch('fetchUserInfo', id)
  },
  computed: {
    user () {
      return this.$store.state.userInfo
    }
  },
  beforeMount () {
    let that = this
    if (this.$options.asyncData) {
      this.$options.asyncData({
        store: this.$store,
        route: this.$route
      })
    }
  }
}
</script>
