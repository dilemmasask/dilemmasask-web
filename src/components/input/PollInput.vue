<template>
  <b-form-group label="question:">
    <b-form-input v-model="value.question"></b-form-input>
    <answers-input v-model="value.answers"></answers-input>
  </b-form-group>
</template>

<script>
import AnswersInput from './AnswersInput';

export default {
  name: 'PollInput',

  components: {
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
