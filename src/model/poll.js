export default class Poll {
  constructor (question, answers, votedAnswerId, tags) {
    this.question = question;
    this.answers = answers;
    this.votedAnswerId = votedAnswerId;
    this.tags = tags;
  }

  addTag (tag) {
    this.tags.push(tag);
  }

  addAnswer (answer) {
    this.answers.push(answer);
  }

  vote (answerId) {
    if (this.answers.find(answer => answer.id === answerId) && !this.votedAnswerId) {
      this.votedAnswerId = answerId;
    } else {
      throw new Error('This poll is alreadu voted');
    }
  }
}
