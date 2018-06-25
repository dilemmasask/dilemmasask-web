<template>
  <b-row fluid>
    <b-col cols="10">
      <b-progress-bar :value="answer.votes" :max="allVotes" :label="answer.text" :variant="voted ? 'success':'info'"></b-progress-bar>
    </b-col>
    <b-col cols="2">
      <b-badge variant="info">{{answer.votes}}</b-badge>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: 'VotedAnswerView',
  props: {
    answer: { type: Object, required: true },
    allVotes: { type: Number, required: true },
    voted: { type: Boolean, default: false }
  }
};
</script>

<style>
.progress-bar {
  text-align: left;
  height: 38px;
  padding: 0px 12px;
  color: #343a40;
}
</style>
