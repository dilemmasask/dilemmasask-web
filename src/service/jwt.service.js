import Cookies from 'js-cookie';
const TOKEN_KEY = 'auth_token_id';

export default {
  getToken () {
    return Cookies.get(TOKEN_KEY);
  },

  saveToken (token) {
    Cookies.set(TOKEN_KEY, token, {
      expires: 1
    });
  },

  destroyToken () {
    Cookies.remove(TOKEN_KEY);
  }
};
