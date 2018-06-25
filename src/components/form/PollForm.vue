<template>
<b-container class="poll-form">
  <poll-input ref="pollInput" v-model="pollRequest"></poll-input>
  <b-btn @click="onPollSave" block variant="success">Post</b-btn>
</b-container>
</template>

<script>
import PollInput from '../input/PollInput';
import { PollRequest, AnswerRequest } from '../../request/postRequest';
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
        this.$store.dispatch(POST_CREATE, this.pollRequest);
        this.pollRequest = new PollRequest('', [new AnswerRequest(''), new AnswerRequest('')], []);
      } else {
        console.log('validation error');
      }
    }
  }
};
</script>
<style scoped>
.container {
  margin-bottom: 10px;
}
</style>
