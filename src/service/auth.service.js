import Cookies from 'js-cookie';
import Vue from 'vue';

const TOKEN_KEY = 'access_token';

export default {
  async signIn () {
    const googleUser = await new Promise((resolve, reject) => {
      Vue.googleAuth().directAccess();
      Vue.googleAuth().signIn(resolve, reject);
    });
    Cookies.set(TOKEN_KEY, googleUser, {
      expires: 1
    });
    return googleUser;
  },

  async signOut () {
    Cookies.remove(TOKEN_KEY);
    return new Promise((resolve, reject) => {
      Vue.googleAuth().signOut(resolve, reject);
    });
  },

  isAuthenticated () {
    return !!Cookies.get(TOKEN_KEY);
  },

  getLoggedUser () {
    return this.getDetails();
  },

  getDetails () {
    return JSON.parse(Cookies.get(TOKEN_KEY));
  },

  getTokenType () {
    return this.getDetails().Zi.token_type;
  },

  getAccessToken () {
    return this.getDetails().Zi.access_token;
  }
};
