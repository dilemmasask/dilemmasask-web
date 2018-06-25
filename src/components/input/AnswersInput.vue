<template>
  <b-form-group :state="state" :invalid-feedback="invalidFeedback">
    <answer-input ref="answerInputs" v-for="index in value.length" :key="index" v-model="value[index - 1]" :no="index"></answer-input>
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
  data () {
    return {
      state: null,
      invalidFeedback: ''
    };
  },
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
    },
    validate () {
      const answersLength = this.$refs.answerInputs
        .map(i => i.validate())
        .filter(i => i)
        .length;

      if (answersLength > 1) {
        this.state = true;
        return true;
      }

      this.state = false;
      this.invalidFeedback = 'Minimum number of answers is 2';
      return false;
    }
  },
  watch: {
    value: {
      handler () {
        this.state = null;
      },
      deep: true
    }
  },
  created () {
    while (this.value.length < 2) {
      this.value.push(new AnswerRequest(''));
    }
  }
};
</script>
<style>
</style>
