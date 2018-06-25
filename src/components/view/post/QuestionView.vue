<template>
  <b-row class="question">{{question}}</b-row>
</template>

<script>
export default {
  name: 'QuestionView',
  props: {
    question: { type: String, required: true }
  }
};
</script>

<style>
.question {
  padding: 0;
  margin: 0;
}
</style>
