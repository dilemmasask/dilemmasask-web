import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import HomeView from '../components/view/HomeView.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    component: HomeView
  },
  {
    path: '/home',
    component: HomeView
  },
  {
    path: '/helloworld',
    name: 'HelloWorld',
    component: HelloWorld
  }
  ]
});
