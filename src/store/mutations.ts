import { MutationTree } from 'vuex';
import { RootState } from './types';

export const mutations: MutationTree<RootState> = {
  setDarkTheme(state, isDarkTheme: boolean): void {
    state.darkTheme = isDarkTheme;
  },
  updateMainColor(state, color: string): void {
    state.mainColor = color;
  },
};
