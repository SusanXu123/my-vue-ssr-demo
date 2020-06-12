<template>
  <div>
    <h2>{{title}}</h2>
    <ul>
      <li v-for="good in goods" :key="good.id">
       <div class="item">
         <div>{{good.name}}</div>
         <div>{{good.price}}</div>
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
    return store.dispatch('fetchGoods')
  },
  data () {
    return {title: '商品详情页'}
  },
  computed: {
    goods () {
      return this.$store.state.goods
    }
  },
}
</script>