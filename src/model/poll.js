export default class Poll {
  constructor (question, answers) {
    this.question = question;
    this.answers = answers;
  };

  get allVotes () {
    return this.answers.reduce((a1, a2) => a1.votes + a2.votes);
  }
}
