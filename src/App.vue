<template>
  <div id="app">
    <div>访问的url是: </div>
    <router-link to="/bar">Goto Bar</router-link> 
    <router-link to="/foo">Goto Foo</router-link> 
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

