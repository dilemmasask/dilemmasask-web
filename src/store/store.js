import Vue from 'vue';
import Vuex from 'vuex';
import home from './module/home.module';
import post from './module/post.module';
import auth from './module/auth.module';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    home,
    post,
    auth
  }
});

export default store;
