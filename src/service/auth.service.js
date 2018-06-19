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
    return Cookies.get(TOKEN_KEY);
  },

  getAccessToken () {
    return this.getDetails().access_token;
  }
};
