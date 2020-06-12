<template>
  <div id="app">
    <router-link to="/users">Goto Users</router-link> 
    <router-link to="/goods">Goto Goods</router-link> 
    <div>访问的页面是: </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  beforeCreate() {
    console.log('App.vue beforeCreate');
  },

  created() {
    console.log('App.vue created');
  },

  beforeMount() {
    console.log('App.vue beforeMount');
  },

  mounted() {
    console.log('App.vue mounted');
  }
}
</script>

