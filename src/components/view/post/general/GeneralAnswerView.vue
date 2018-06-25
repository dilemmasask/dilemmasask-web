<template>
  <b-list-group-item class="answer-view" button variant="primary" @click="vote">
    {{answer.text}}
  </b-list-group-item>
</template>

<script>
import { ANSWER_VOTE } from '../../../../store/actions.type';

export default {
  name: 'GeneralAnswerView',
  props: {
    answer: { type: Object, required: true },
    postId: { type: Number, required: true }
  },
  methods: {
    vote () {
      this.$store.dispatch(ANSWER_VOTE, { postId: this.postId, answerId: this.answer.id });
    }
  }
};
</script>

<style>
</style>
