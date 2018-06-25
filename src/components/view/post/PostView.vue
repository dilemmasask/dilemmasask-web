<template>
  <general-post-view class="post-view" v-if="!post.poll.votedAnswerId" :post="post"></general-post-view>
  <voted-post-view class="post-view" v-else :post="post"></voted-post-view>
</template>

<script>
import GeneralPostView from './general/GeneralPostView';
import VotedPostView from './voted/VotedPostView';
export default {
  name: 'PostView',
  components: {
    GeneralPostView,
    VotedPostView
  },
  props: {
    post: { type: Object, required: true }
  }
};
</script>

<style>
.post-view {
  margin-bottom: 10px;
}
</style>
