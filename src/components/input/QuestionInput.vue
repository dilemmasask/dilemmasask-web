<template>
  <b-form-group  :state="state" :invalid-feedback="invalidFeedback">
    <b-input-group append="?">
      <b-form-input id="question-input" placeholder="Enter your question ..." v-model="question" @input="onInput"></b-form-input>
    </b-input-group>
  </b-form-group>
</template>

<script>
export default {
  name: 'QuestionInput',
  props: ['value'],
  data () {
    return {
      question: '',
      state: null,
      invalidFeedback: null
    };
  },
  created () {
    this.question = this.value;
  },
  methods: {
    onInput () {
      this.state = null;
      this.$emit('input', this.question);
    },
    validate () {
      if (this.question.length > 2) {
        this.state = true;
        return true;
      } else {
        this.invalidFeedback = 'Please enter longer question.';
        this.state = false;
        return false;
      }
    }
  }
};
</script>
<style>
</style>
