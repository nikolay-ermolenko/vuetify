import { GetterTree } from 'vuex';
import { RootState } from '@/store/types';

export const getters: GetterTree<RootState, RootState> = {
  getVersion({ version }) {
    return version;
  },
  getDarkTheme({ darkTheme }): boolean {
    return darkTheme;
  },
  getMainColor({ mainColor }): string {
    return mainColor;
  },
  getAvailableColors({ availableColors }): string[] {
    return availableColors;
  },
};
