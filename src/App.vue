<template>
  <div id="app">
    <nav-bar/>
    <router-view/>
    <poll-form></poll-form>
    <post-view :post="post"></post-view>
  </div>
</template>

<script>
import Vue from 'vue';
import NavBar from './components/nav/NavBar.vue';
import PollForm from './components/form/PollForm';
import Post from './model/post';
import Poll from './model/poll';
import Answer from './model/answer';
import Tag from './model/tag';
import Comment from './model/comment';
import User from './model/user';
import PostView from './components/view/PollView';
export const EventBus = new Vue();

export default {
  name: 'App',
  components: {
    NavBar,
    PollForm,
    PostView
  },
  data () {
    return {
      post: new Post(1, Date.now(), new User('Anon Anonek', 'aaek@example.com'),
        new Poll('Jak to możliwe?',
          [new Answer(50, 'To skomplikowane', 54), new Answer(51, 'Bo tak', '123')], 51,
          [new Tag('#example'), new Tag('#nic')]),
        [new Comment(15, Date.now(), new User('anon', 'anon@123.com'), 'hmmmm'),
          new Comment(16, Date.now(), new User('anon2', 'anon2@123.com'), 'hmmmm2')])
    };
  }

};
</script>

<style>
</style>
