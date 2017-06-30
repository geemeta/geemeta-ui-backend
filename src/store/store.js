import Vuex from 'vuex'
import Vue from 'vue'
import * as types from './types'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
  },
  mutations: {
    [types.LOGIN]: (state, data) => {
      // localStorage.user = JSON.stringify(data.user)
      state.user = data.user
    },
    [types.LOGOUT]: (state) => {
      state.user = {}
    }
  }
})
