const DoublyLinkedList = require('../doubleList');
const SinglyLinkedList = require('../linkedList');
const colors = require('../utils/consoleColors');

console.log('Start test');

const createRandomNumber = () => Math.floor(Math.random() * 1e5);
// array testing results
const startArray = new Date().getTime();

const arrayAdding = [];

while (arrayAdding.length < 1e5) {
  arrayAdding.unshift(createRandomNumber());
}

while (arrayAdding.length) {
  arrayAdding.shift();
}

const endArray = new Date().getTime();
console.log(colors.FgMagenta, endArray - startArray, 'Array');
// end of the array testing results

// singly linked list testing results

const startList = new Date().getTime();

const list = new SinglyLinkedList();

while (list.length < 1e7) {
  list.unshift(createRandomNumber());
}

while (list.length) {
  list.shift();
}

const endList = new Date().getTime();
console.log(colors.FgBlue, endList - startList, 'Linked list');
// end of the singly linked list testing results

// doubly linked list testing results

const startDouble = new Date().getTime();

const doubleList = new DoublyLinkedList();

while (doubleList.length < 1e7) {
  doubleList.unshift(createRandomNumber());
}

while (doubleList.length) {
  doubleList.shift();
}

const endDouble = new Date().getTime();
console.log(colors.FgBlue, endDouble - startDouble, 'Doubly linked list');
// end of the doubly linked list testing results

console.log('End test');
