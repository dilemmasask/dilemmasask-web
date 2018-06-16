<template>
<b-container>
  <b-row>
    {{poll.question}}
  </b-row>

  <b-list-group>
    <b-list-group-item
      button
      variant="primary"
      v-for="answer in poll.answers" :key="answer.id"
      :class="{active: selectedAnswer != null && selectedAnswer.id === answer.id}"
      @click="selectAnswer(answer)">

      <b-row>
        {{answer.text}}
      </b-row>

      <b-row fluid v-if="areAnswersShowed && $store.getters.isAuthenticated">
        <b-col cols="10">
          <b-progress :value="answer.votes" :max="allVotes"></b-progress>
        </b-col>
        <b-col cols="2">
          <b-badge variant="primary" pill>{{answer.votes}}</b-badge>
        </b-col>
      </b-row>
    </b-list-group-item>
    <b-list-group-item v-if="!areAnswersShowed && $store.getters.isAuthenticated">
      <b-btn block @click="showAnswers">Show answers</b-btn>
    </b-list-group-item>
  </b-list-group>
</b-container>
</template>

<script>
export default {
  name: 'PollView',
  props: {
    poll: { type: Object, required: true }
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
