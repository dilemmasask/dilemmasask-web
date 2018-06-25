export default class Post {
  constructor (id, dateTime, author, poll, comments) {
    this.id = id;
    this.dateTime = dateTime;
    this.author = author;
    this.poll = poll;
    this.comments = comments;
  }
}
