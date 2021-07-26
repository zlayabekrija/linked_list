const Node = require('../node/Node');

class DoubleNode extends Node {
  constructor(value) {
    super(value);
    this.prev = null;
  }
}
class DoublyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }
  push(val) {
    let newNode = new DoubleNode(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.head) return undefined;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length--;
      return this;
    }
    let newTail = this.tail.prev;
    let tailRemove = this.tail;
    newTail.next = null;
    tailRemove.prev = null;
    this.tail = newTail;
    this.length--;
    return tailRemove;
  }
  shift() {
    if (!this.head) return undefined;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length--;
      return this;
    }
    let headToRemove = this.head;
    let newHead = headToRemove.next;
    newHead.prev = null;
    headToRemove.next = null;
    this.head = newHead;
    this.length--;
    return headToRemove;
  }
  unshift(val) {
    let newHead = new DoubleNode(val);
    if (this.length === 0) {
      this.head = newHead;
      this.tail = newHead;
    } else {
      this.head.prev = newHead;
      newHead.next = this.head;
      this.head = newHead;
    }
    this.length++;
    return this;
  }
  getNode(index) {
    if (index < 0 || index >= this.length) return null;
    if (index <= Math.floor(this.length / 2)) {
      let counter = 0;
      let traverse = this.head;
      while (counter < index) {
        traverse = traverse.next;
        counter++;
      }
      return traverse;
    } else {
      let counter = this.length - 1;
      let traverse = this.tail;
      while (counter > index) {
        traverse = traverse.prev;
        counter--;
      }
      return traverse;
    }
  }
  setNode(index, value) {
    let nodeToUpdate = this.getNode(index);
    if (nodeToUpdate) {
      nodeToUpdate.value = value;
      return true;
    }
    return false;
  }
  insert(index, value) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) {
      this.unshift(value);
      return true;
    }
    if (index === this.length) {
      this.push(value);
      return true;
    }
    let newNode = new DoubleNode(value);
    let parentNode = this.getNode(index - 1);
    let childNode = parentNode.next;
    parentNode.next = newNode;
    newNode.prev = parentNode;
    newNode.next = childNode;
    childNode.prev = newNode;
    this.length++;
    return true;
  }
  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    let nodeToRemove = this.getNode(index);
    let parentNode = nodeToRemove.prev;
    let childNode = nodeToRemove.next;
    parentNode.next = childNode;
    childNode.prev = parentNode;
    nodeToRemove.prev = null;
    nodeToRemove.next = null;
    this.length--;
    return nodeToRemove;
  }
  print() {
    return JSON.stringify(this);
  }
}

module.exports = DoublyLinkedList;
