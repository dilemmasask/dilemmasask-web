import JwtService from '../../service/jwt.service';
import User from '../../model/user';

const state = {
  isAuthenticated: !!JwtService.getToken(),
  loggedUser: new User(null, '', '', '')
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
  setAuth (state, token) {
    state.isAuthenticated = true;
    JwtService.saveToken(token);
  },
  purgeAuth (state) {
    state.isAuthenticated = false;
    state.user = {};
    JwtService.destroyToken();
  }
};

export default {
  state,
  mutations,
  getters
};
