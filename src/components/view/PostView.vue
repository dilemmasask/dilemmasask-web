<template>
<b-card>
  <b-row class="justify-content-between" slot="header">
      <b-col cols="auto">{{post.author.name}}</b-col>
      <b-col cols="auto">{{dateText}}</b-col>
  </b-row>
  <b-row>
    <poll-view :poll="post.poll"></poll-view>
  </b-row>
</b-card>
</template>

<script>
import PollView from './PollView';

export default {
  name: 'PostView',
  components: {
    PollView
  },
  props: {
    post: { type: Object, required: true }
  },
  computed: {
    dateText () {
      const date = this.post.dateTime;
      return `${date.getFullYear()}-${date.getMonth()}-${date.getDay()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    }
  }
};
</script>

<style>
.card {
  margin-top: 3%;
}
</style>
