<template>
  <b-form-group label="Question:">
    <b-input-group append="?">
      <b-form-input id="question-input" placeholder="Enter your question ..." v-model="question"></b-form-input>
    </b-input-group>
  </b-form-group>
</template>

<script>
export default {
  name: 'QuestionInput',
  props: ['value', 'questionError'],
  data () {
    return {
      question: ''
    };
  },
  created () {
    this.question = this.value;
  },
  methods: {
    onChange () {
      this.$emit('input', this.question);
    }
  }
};
</script>
<style>
</style>
