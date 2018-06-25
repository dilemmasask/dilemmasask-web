<template>
  <div>
  <b-card class=voted-post>
    <b-row class="justify-content-between" slot="header">
        <b-col cols="auto">{{post.author.name}}</b-col>
      <b-col cols="auto">{{getDateTimeString}}</b-col>
    </b-row>
    <b-row>
      <voted-poll-view :poll="post.poll"></voted-poll-view>
    </b-row>
  </b-card>

  <comment-list-view :comments="post.comments" :postId="post.id"></comment-list-view>
  </div>
</template>

<script>
import VotedPollView from './VotedPollView';
import CommentListView from './CommentListView';
import moment from 'moment';

export default {
  name: 'VotedPostView',
  components: {
    VotedPollView,
    CommentListView
  },
  props: {
    post: { type: Object, required: true }
  },
  computed: {
    getDateTimeString () {
      return moment(this.post.dateTime).format('MMMM Do YYYY, h:mm:ss a');
    }
  }
};
</script>

<style >
</style>
