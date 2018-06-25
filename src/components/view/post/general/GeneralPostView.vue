<template>
<b-card>
  <b-row class="justify-content-between" slot="header">
      <b-col cols="auto">{{post.author.name}}</b-col>
      <b-col cols="auto">{{getDateTimeString}}</b-col>
  </b-row>
  <b-row>
    <general-poll-view :poll="post.poll" :postId="post.id"></general-poll-view>
  </b-row>
</b-card>
</template>

<script>
import GeneralPollView from './GeneralPollView';
import moment from 'moment';

export default {
  name: 'GeneralPostView',
  components: {
    GeneralPollView
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

<style>
</style>
