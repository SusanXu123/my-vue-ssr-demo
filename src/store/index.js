import Vue from 'vue'
import Vuex from 'vuex'
import UserApi from '../apis/users.js'
import GoodApi from '../apis/goods.js'

const {fetchUsers, fetchUserInfo} = UserApi
const {fetchGoods} = GoodApi

Vue.use(Vuex)

export default function creatStore () {
  return new Vuex.Store({
    state: {
      users: [],
      userInfo: {},
      goods: []
    },
    mutations: {
      setUsers (state, users) {
        state.users = users
      },
      setUserInfo (state, userInfo) {
        state.userInfo = userInfo
      },
      setGoods (state, goods) {
        state.goods = goods
      }
    },
    actions: {
      fetchUsers ({commit}) {
        return fetchUsers().then((users) => {
          commit('setUsers', users)
        })
      },
      fetchUserInfo ({commit}, id) {
        return fetchUserInfo(id).then((userInfo) => {
          commit('setUserInfo', userInfo)
        })
      },
      fetchGoods ({commit}) {
        return fetchGoods().then((goods) => {
          commit('setGoods', goods)
        })
      },
    }
  })
} 