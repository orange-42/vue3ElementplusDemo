/**
 * @params vuex4状态管理
 */

import { createStore } from 'vuex';

export default createStore({
  state:{
    count: 1,
    screenHeight: 0
  },
  mutations: {
    inc (state) {
      state.count ++
    }
  },
  actions: {

  },
  modules: {
    
  }
})