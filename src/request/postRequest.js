export class TagRequest {
  constructor (name) {
    this.name = name;
  }
}

export class AnswerRequest {
  constructor (answer) {
    this.answer = answer;
  }
}

export class PollRequest {
  constructor (question, answers, tags) {
    this.question = question;
    this.answers = answers;
    this.tags = tags;
  }
}

export default class PostRequest {
  constructor (pollRequest) {
    this.poll = pollRequest;
  }
}

export class PostRequestBuilder {
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
    return new PostRequest(new PollRequest(
      this.question,
      this.answers.map(a => new AnswerRequest(a)),
      this.tags.map(t => new TagRequest(t))
    ));
  }
}
