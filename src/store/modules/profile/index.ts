import { Module } from 'vuex';
import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';
import * as profileTypes from './types';
import { RootState } from '@/store/types';

export const state: profileTypes.ProfileState = {
  user: undefined,
  error: false,
  count: 0,
};

// https://johnpapa.net/vue-typescript/
const namespaced: boolean = true;

export const profile: Module<profileTypes.ProfileState, RootState> = {
  namespaced,
  state,
  getters,
  actions,
  mutations,
};
