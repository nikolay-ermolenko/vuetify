import { ActionTree } from 'vuex';
import { RootState } from '@/store/types';

export const actions: ActionTree<RootState, RootState> = {
  setDarkTheme({ commit }, value: boolean): void {
    commit('setDarkTheme', value);
  },
  updateMainColor({ commit }, value: string): void {
    commit('updateMainColor', value);
  },
};
