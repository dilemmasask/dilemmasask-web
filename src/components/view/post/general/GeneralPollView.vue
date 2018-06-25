<template>
<b-container>
  <question-view :question="poll.question"></question-view>
  <general-answer-view v-for="answer in poll.answers" :key="answer.id" :answer="answer" :postId="postId"></general-answer-view>
</b-container>
</template>

<script>
import QuestionView from '../QuestionView';
import GeneralAnswerView from './GeneralAnswerView';

export default {
  name: 'GeneralPollView',
  components: {
    QuestionView,
    GeneralAnswerView
  },
  props: {
    poll: { type: Object, required: true },
    postId: { type: Number, required: true }
  },
  data () {
    return {
      areAnswersShowed: false,
      selectedAnswer: null
    };
  },
  computed: {
    allVotes () {
      let votes = 0;
      for (let answer of this.poll.answers) {
        votes += answer.votes;
      }
      return votes;
    }
  },
  methods: {
    selectAnswer (answer) {
      if (!this.$store.getters.isAuthenticated || this.areAnswersShowed) return;
      this.selectedAnswer = answer;
      this.showAnswers();
    },
    showAnswers () {
      if (!this.$store.getters.isAuthenticated) return;
      this.areAnswersShowed = true;
    }
  }
};
</script>

<style>
</style>
