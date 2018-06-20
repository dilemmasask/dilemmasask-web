<template>
<b-form-group>
  <question-input v-model="value.question"></question-input>
  <answers-input v-model="value.answers"></answers-input>
</b-form-group>
</template>

<script>
import QuestionInput from './QuestionInput';
import AnswersInput from './AnswersInput';

export default {
  name: 'PollInput',

  components: {
    QuestionInput,
    AnswersInput
  },

  props: [
    'value'
  ],

  data () {
    return {

    };
  },

  methods: {
  }
};
</script>
<style>
</style>
