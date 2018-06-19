import Vue from 'vue';
import Vuex from 'vuex';
import home from './module/home.module';
import auth from './module/auth.module';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    home,
    auth
  }
});

export default store;
