import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {
  position: '北京',
  userName: ''
}

const mutations = {
  setPosition(state, val) {
    //   改变位置  城市
    state.position = val
  },
  setUserName(state, val) {
    state.userName = val
  }
}

const actions = {
  setPosition({
    commit
  }, val) {
    //   异步请求后端后期当前位置数据
    commit('setPosition', val)
  }
}


export default new Vuex.Store({
  state,
  mutations,
  actions
})
