<template>
  <b-input-group :prepend="no + ''">
    <b-form-input v-model="value.text"></b-form-input>
  </b-input-group>
</template>

<script>
export default {
  name: 'AnswerInput',
  props: ['value', 'no']
};
</script>
<style>
</style>
