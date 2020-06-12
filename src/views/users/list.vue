<template>
  <div>
    <h2>{{title}}</h2>
    <ul>
      <li v-for="user in users" :key="user.id">
       <div class="item">
         <div>{{user.name}}</div>
         <div>{{user.age}}</div>
         <div>{{user.gender}}</div>
         <div>
           <button @click="goUserInfo(user)">进入</button>
         </div>
       </div>
      </li>
    </ul>
  </div>
</template>
<style scoped>
.item {
  display: flex;
  justify-content: space-around;
}
.item div {
  font-size: 16px;
  color: gray;
  line-height: 30px;
}
</style>
<script>
export default {
  asyncData ({store}) {
    const asyncData = store.dispatch('fetchUsers')
    return asyncData
  },
  data () {
    return {
      title: '这里是用户列表'
    }
  },
  computed: {
    users () {
      const users = this.$store.state.users
      console.log('users--', users)
      return users
    }
  },
  methods: {
    goUserInfo (user) {
      this.$router.push({name: 'userInfo', params: {
        id: user.id
      }})
    }
  },
  // mounted () {
  //   this.$store.dispatch('fetchUsers')
  // },
}
</script>