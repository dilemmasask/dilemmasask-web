<template>
<div>
  <post-view v-for="post in posts" :key="post.id" :post="post"></post-view>
</div>
</template>

<script>
import { mapGetters } from 'vuex';
import PostView from './PostView';

export default {
  name: 'PostListView',
  components: {
    PostView
  },
  data () {
    return {
      newPoll: { question: '', answers: [] }
    };
  },
  computed: {
    ...mapGetters({
      posts: 'posts'
    })
  },
  methods: {
  },
  mounted () {
    this.$store.dispatch('fetchPosts', [1, 10]);
  }
};
</script>
