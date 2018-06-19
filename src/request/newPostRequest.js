export class Tag {
  constructor (name) {
    this.name = name;
  }
}

export class Answer {
  constructor (answer) {
    this.answer = answer;
  }
}

export class Poll {
  constructor (question, answers, tags) {
    this.question = question;
    this.answers = answers;
    this.tags = tags;
  }
}

export default class NewPostRequest {
  constructor (pollRequest) {
    this.poll = pollRequest;
  }
}

export class NewPostRequestBuilder {
  constructor () {
    this.question = '';
    this.answers = [];
    this.tags = [];
  }

  setQuestion (questionText) {
    this.question = questionText;
    return this;
  }

  addAnswer (answerText) {
    this.answers.push(answerText);
    return this;
  }

  addTag (tagText) {
    this.tags.push(tagText);
    return this;
  }

  build () {
    return new NewPostRequest(new Poll(
      this.question,
      this.answers.map(a => new Answer(a)),
      this.tags.map(t => new Tag(t))
    ));
  }
}
