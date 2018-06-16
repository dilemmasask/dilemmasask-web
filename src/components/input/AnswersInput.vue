<template>
  <b-form-group label="answers:">
    <b-form-input v-for="index in value.length" :key="index" v-model="value[index - 1].text"></b-form-input>
    <b-btn v-if="isMoreAnswersAllowed" @click="addAnswer">Add answer</b-btn>
  </b-form-group>
</template>

<script>
import Answer from '../../model/answer.js';

export default {
  name: 'AnswersInput',

  props: ['value'],

  computed: {
    isMoreAnswersAllowed () {
      return this.value.length < 10;
    }
  },

  methods: {
    addAnswer () {
      if (!this.isMoreAnswersAllowed) return;
      this.value.push(new Answer(null, ''));
    }
  },

  created () {
    this.value.push(new Answer(null, ''));
  }
};
</script>
<style>
</style>
