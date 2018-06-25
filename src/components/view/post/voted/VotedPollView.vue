<template>
 <b-container>
    <question-view :question="poll.question"></question-view>
    <b-list-group>
      <voted-answer-view v-for="answer in poll.answers" :key="answer.id" :answer="answer" :allVotes="allVotes" :voted="answer.id === poll.votedAnswerId"></voted-answer-view>
    </b-list-group>
  </b-container>
</template>

<script>
import QuestionView from '../QuestionView';
import VotedAnswerView from './VotedAnswerView';

export default {
  name: 'VotedPollView',
  components: {
    QuestionView,
    VotedAnswerView
  },
  props: {
    poll: { type: Object, required: true }
  },
  computed: {
    allVotes () {
      let sum = 0;
      this.poll.answers.map(a => { sum += a.votes; });
      return sum;
    }
  }
};
</script>

<style>
</style>
