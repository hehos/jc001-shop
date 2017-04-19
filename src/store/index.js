/**
 * Created by hehui on 2017/3/10.
 */

import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    headerTitle: '001商铺',
    headerLeftText: '',
    headerRightIcon: '',
    headerRightText: '',
    isFixed: false
  },
  mutations: {
    setHeadInfo (state, obj) {
      window.Object.assign(state, obj);
    }
  }
})