import AuthService from '../../service/auth.service';
import { SIGN_IN, SIGN_OUT } from '../actions.type';

const state = {
  isAuthenticated: AuthService.isAuthenticated()
};

const getters = {
  isAuthenticated (state) {
    return state.isAuthenticated;
  },
  loggedUser (state) {
    return AuthService.getLoggedUser();
  }
};

const mutations = {
  authenticate (state) {
    state.isAuthenticated = true;
  },
  unAuthenticate (state) {
    state.isAuthenticated = false;
  }
};

const actions = {
  [ SIGN_IN ] ({ commit }) {
    return AuthService.signIn().then(res => commit('authenticate'));
  },
  [ SIGN_OUT ] ({ commit }) {
    return AuthService.signOut().then(res => commit('unAuthenticate'));
  }
};

export default {
  state,
  mutations,
  getters,
  actions
};
