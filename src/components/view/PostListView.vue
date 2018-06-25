<template>
<div>
  <post-view v-for="post in posts" :key="post.id" :post="post"></post-view>
</div>
</template>

<script>
import { mapGetters } from 'vuex';
import PostView from './post/PostView';
import VotedPostView from './post/voted/VotedPostView';
import { POSTS_FETCH } from '../../store/actions.type';

export default {
  name: 'PostListView',
  components: {
    PostView,
    VotedPostView
  },
  computed: {
    ...mapGetters({
      posts: 'posts'
    })
  },
  mounted () {
    this.$store.dispatch(POSTS_FETCH);
  }
};
</script>

<style>
</style>
