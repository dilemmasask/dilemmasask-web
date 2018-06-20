export default class Post {
  constructor ({id, dateTime = Date.now(), author, poll = null, comments = []}) {
    this.id = id;
    this.dateTime = dateTime;
    this.author = author;
    this.poll = poll;
    this.comments = comments;
  }
}
