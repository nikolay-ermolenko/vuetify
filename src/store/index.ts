import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { profile } from '@/store/modules/profile';
import { RootState } from './types';
import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';

Vue.use(Vuex);

export default new Vuex.Store<RootState>({
  state: {
    darkTheme: false,
    mainColor: 'primary',
    availableColors: [
      'primary',
      'blue-grey',
      'light-green',
      'red',
    ],
    version: '1.0.0',
  },
  getters,
  actions,
  mutations,
  modules: {
    profile,
  },
});
