<template>
  <b-form-group label="Answers:">
    <answer-input v-for="index in value.length" :key="index" v-model="value[index - 1]" :no="index"></answer-input>
    <b-btn v-if="isMoreAnswersAllowed" @click="addAnswer" block variant="outline-warning">Add answer</b-btn>
  </b-form-group>
</template>

<script>
import AnswerInput from '../input/AnswerInput';
import { AnswerRequest } from '../../request/postRequest.js';

export default {
  name: 'AnswersInput',
  components: {
    AnswerInput
  },

  props: ['value'],

  computed: {
    isMoreAnswersAllowed () {
      return this.value.length < 5;
    }
  },

  methods: {
    addAnswer () {
      if (this.isMoreAnswersAllowed) {
        this.value.push(new AnswerRequest(''));
      }
    }
  },

  created () {
    this.value.push(new AnswerRequest(''));
    this.value.push(new AnswerRequest(''));
  }
};
</script>
<style>
</style>
