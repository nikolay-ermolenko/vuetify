import { getters } from './store/modules/profile/getters';
import Vue from 'vue';
import Vuex,  { StoreOptions } from 'vuex';
import { profile } from './store/modules/profile';
import { RootState } from './store/types';

Vue.use(Vuex);


const store: StoreOptions< RootState> = {
  // state: {
  //   version: '1.0.0',
  // },
  // getters: {
  //   getVersion({version}) {
  //     return version;
  //   },
  // },
  // modules: {
  //   profile,
  // },
};
export default new Vuex.Store< RootState>(store);

// export default new Vuex.Store({
//   state: {
//     count: 0,
//     darkTheme: true,
//     mainColor: 'primary',
//   },
//   getters: {
//     getCount({count}) {
//       return count;
//     },
//     getDarkTheme({darkTheme}) {
//       return darkTheme;
//     },
//     getMainColor({mainColor}) {
//       return mainColor;
//     },
//   },
//   mutations: {
//     incrementCount(state) {
//       state.count++;
//     },
//     setDarkTheme(state, isDarkTheme) {
//       state.darkTheme = isDarkTheme;
//     },
//     updateMainColor(state, color) {
//       state.mainColor = color;
//     },
//   },
//   actions: {
//     incrementCount({commit}) {
//       commit('incrementCount');
//     },
//     setDarkTheme({commit}, value) {
//       commit('setDarkTheme', value);
//     },
//     updateMainColor({commit}, value) {
//       commit('updateMainColor', value);
//     },
//   },
// });
