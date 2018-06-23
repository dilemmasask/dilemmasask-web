<template>
<b-form-group>
  <question-input ref="questionInput" v-model="value.question"></question-input>
  <answers-input ref="answersInput" v-model="value.answers"></answers-input>
  {{value}}
</b-form-group>
</template>

<script>
import QuestionInput from './QuestionInput';
import AnswersInput from './AnswersInput';
import { TagRequest } from '../../request/postRequest';

export default {
  name: 'PollInput',
  components: {
    QuestionInput,
    AnswersInput
  },
  props: [
    'value'
  ],
  computed: {
    question () {
      return this.value.question;
    }
  },
  methods: {
    validate () {
      const results = [];
      results.push(this.$refs.questionInput.validate());
      results.push(this.$refs.answersInput.validate());
      this.extractTags();
      return results.indexOf(false) < 0;
    },
    extractTags () {
      this.value.tags = this.value.question
        .split(/#/)
        .slice(1)
        .map(t => t.split(/\W/)[0])
        .filter(t => t)
        .map(t => new TagRequest(t));
    }
  }
};
</script>
<style>
</style>
