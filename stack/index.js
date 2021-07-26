const SinglyLinkedList = require('../linkedList');

class Stack extends SinglyLinkedList {
  constructor() {
    super();
  }
  push(value) {
    return super.push(value);
  }

  pop() {
    return super.pop();
  }
  peek() {
    return this.tail;
  }
}

module.exports = Stack;
