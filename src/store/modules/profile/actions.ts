import { ActionTree } from 'vuex';
import { RootState } from '@/store/types';
import { ProfileState, User } from './types';

export const actions: ActionTree< ProfileState, RootState> = {
  fetchData({ commit }): any {
    const payload: User = {
      firstName: 'Ivan',
      lastName: 'Petrov',
      email: 'ivan@mail.ru',
    };
    commit('profileLoaded', payload);
  },
  incrementCount({ commit }): void {
    commit('incrementCount');
  },
};
