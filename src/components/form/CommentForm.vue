<template>
<b-row fluid>
  <b-col cols="8">
    <comment-input ref="commentInput" v-model="commentRequest" @submit="onCommentSave"></comment-input>
  </b-col>
  <b-col cols="4">
    <b-btn @click="onCommentSave" block variant="success">Comment</b-btn>
  </b-col>
</b-row>
</template>

<script>
import CommentInput from '../input/CommentInput';
import CommentRequest from '../../request/commentRequest.js';
import { COMMENT_CREATE } from '../../store/actions.type.js';

export default {
  name: 'CommentForm',
  components: {
    CommentInput
  },
  props: {
    postId: { type: Number, required: true }
  },
  data () {
    return {
      commentRequest: new CommentRequest('')
    };
  },
  methods: {
    onCommentSave: function () {
      if (this.$refs.commentInput.validate()) {
        this.$store.dispatch(COMMENT_CREATE, { postId: this.postId, commentRequest: this.commentRequest });
        this.commentRequest = new CommentRequest('');
      } else {
        console.log('validation error');
      }
    }
  }
};
</script>
<style>
</style>
