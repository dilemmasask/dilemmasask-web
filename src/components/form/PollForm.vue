<template>
<b-card>
  <poll-input v-model="poll"></poll-input>
  <b-btn @click="onPollSave" block variant="success">Post</b-btn>
</b-card>
</template>

<script>
import PollInput from '../input/PollInput';
import Poll from '../../model/poll.js';
import Post from '../../model/post.js';

export default {
  name: 'PollForm',
  components: {
    PollInput
  },
  data () {
    return {
      poll: new Poll('', [])
    };
  },

  methods: {
    onPollSave: function () {
      if (!this.poll.question) return;
      const answers = this.poll.answers.filter(a => a.text);
      if (!answers.length) return;
      this.poll.answers = this.poll.answers.filter(a => a.text);
      const post = new Post(null, this.$store.getters.loggedUser, new Date(), this.poll);
      this.$store.dispatch('createPost', post).then(res => this.$store.dispatch('fetchPosts'));
      this.poll = new Poll('', []);
    }
  }
};
</script>
<style>
</style>
