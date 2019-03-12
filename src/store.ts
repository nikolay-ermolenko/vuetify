import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0,
    darkTheme: true,
    mainColor: 'primary',
  },
  getters: {
    getCount({count}) {
      return count;
    },
    getDarkTheme({darkTheme}) {
      return darkTheme;
    },
    getMainColor({mainColor}) {
      return mainColor;
    },
  },
  mutations: {
    incrementCount(state) {
      state.count++;
    },
    setDarkTheme(state, isDarkTheme) {
      state.darkTheme = isDarkTheme;
    },
    updateMainColor(state, color) {
      state.mainColor = color;
    },
  },
  actions: {
    incrementCount({commit}) {
      commit('incrementCount');
    },
    setDarkTheme({commit}, value) {
      commit('setDarkTheme', value);
    },
    updateMainColor({commit}, value) {
      commit('updateMainColor', value);
    },
  },
});
