import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0,
    mainColor: 'primary',
  },
  getters: {
    getCount({count}) {
      return count;
    },
    getMainColor({mainColor}) {
      return mainColor;
    },
  },
  mutations: {
    incrementCount(state) {
      state.count++;
    },
    updateMainColor(state, color) {
      state.mainColor = color;
    },
  },
  actions: {
    incrementCount({commit}) {
      commit('incrementCount');
    },
    updateMainColor({commit}, value) {
      commit('updateMainColor', value);
    },
  },
});
