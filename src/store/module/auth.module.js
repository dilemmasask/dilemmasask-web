import AuthService from '../../service/auth.service';

const state = {
  authenticatedUser: AuthService.getLoggedUser()
};

const getters = {
  isAuthenticated (state) {
    return state.isAuthenticated;
  },
  loggedUser (state) {
    return state.loggedUser;
  }
};

const mutations = {
  setLoggedUser (user) {
    this.loggedUser = user;
  }
};

const actions = {
  signIn ({ commit }) {
    AuthService.signIn().then(user => { commit('setLoggedUser', user); });
  },
  signOut ({ commit }) {
    AuthService.signOut().then(() => commit('setLoggedUser', null));
  }
};

export default {
  state,
  mutations,
  getters,
  actions
};
