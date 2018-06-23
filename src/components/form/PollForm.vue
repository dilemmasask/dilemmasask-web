<template>
<b-card>
  <poll-input ref="pollInput" v-model="pollRequest"></poll-input>
  <b-btn @click="onPollSave" block variant="success">Post</b-btn>
</b-card>
</template>

<script>
import PollInput from '../input/PollInput';
import Poll from '../../model/poll.js';
import Post from '../../model/post.js';
import PostRequest, { PollRequest } from '../../request/postRequest';
import { POST_CREATE } from '../../store/actions.type.js';

export default {
  name: 'PollForm',
  components: {
    PollInput
  },
  data () {
    return {
      pollRequest: new PollRequest('', [], [])
    };
  },
  methods: {
    onPollSave: function () {
      if (this.$refs.pollInput.validate()) {
        const postRequest = new PostRequest(this.pollRequest);
        this.$store.dispatch(POST_CREATE, postRequest);
      } else {
        console.log('validation error');
      }
    }
  }
};
</script>
<style>
</style>
