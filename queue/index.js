const SinglyLinkedList = require('../linkedList');

class Queue extends SinglyLinkedList {
  constructor() {
    super();
  }

  enqueue(value) {
    return super.push(value);
  }
  dequeue() {
    return super.shift();
  }
  peek() {
    return this.head;
  }
}

module.exports = Queue;
