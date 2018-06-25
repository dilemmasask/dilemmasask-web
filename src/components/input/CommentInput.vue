<template>
  <b-form-group :state="state" :invalid-feedback="invalidFeedback">
    <b-input-group>
      <b-form-input placeholder="Enter your comment ..." v-model="value.text" @keyup.enter="$emit('submit')"></b-form-input>
    </b-input-group>
  </b-form-group>
</template>

<script>
export default {
  name: 'CommentInput',
  props: ['value'],
  data () {
    return {
      state: null,
      invalidFeedback: null
    };
  },
  methods: {
    onInput () {
      this.state = null;
    },
    validate () {
      if (this.value.text.length > 2) {
        this.state = true;
        return true;
      } else {
        this.invalidFeedback = 'Please enter longer comment.';
        this.state = false;
        return false;
      }
    }
  }
};
</script>
<style>
</style>
