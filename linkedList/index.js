const {EMPTY_LIST, INVALID_INDEX} = require('../errors');
const Node = require('../node/Node');

class SinglyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }
  push(val) {
    if (!this.head) return this.unshift(val);
    let newNode = new Node(val);
    this.tail.next = newNode;
    this.tail = newNode;

    this.length++;
    return this;
  }
  pop() {
    if (!this.head) throw Error(EMPTY_LIST);
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    this.emptyList();
    return current;
  }
  shift() {
    if (!this.head) throw Error(EMPTY_LIST);
    let toRemove = this.head;
    let newHead = this.head.next;
    this.head = newHead;
    this.length--;
    this.emptyList();
    return toRemove;
  }
  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  getNodeAtIndex(index) {
    this.isValidIndex(index);
    let counter = 0;
    let current = this.head;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }
  updateNodeValue(index, val) {
    let nodeToUpdate = this.getNodeAtIndex(index);
    nodeToUpdate.value = val;
    return nodeToUpdate;
  }
  insert(index, val) {
    this.isValidIndex(index);
    if (index === 0) return this.unshift(val);
    if (index === this.length) return this.push(val);

    let newNode = new Node(val);
    let nodeParent = this.getNodeAtIndex(index - 1);
    let nodeChild = nodeParent.next;
    nodeParent.next = newNode;
    newNode.next = nodeChild;
    this.length++;
    return this;
  }
  removeNode(index) {
    this.isValidIndex(index);
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    let nodeParent = this.getNodeAtIndex(index - 1);
    let nodeToRemove = nodeParent.next;
    let newChild = nodeToRemove.next;
    nodeParent.next = newChild;
    this.length--;
    return nodeToRemove;
  }
  print() {
    return JSON.stringify(this);
  }

  emptyList() {
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
  }
  isValidIndex(index) {
    if (index < 0 || index >= this.length) throw Error(INVALID_INDEX);
  }
}

module.exports = SinglyLinkedList;
