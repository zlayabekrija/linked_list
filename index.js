const colors = require('./consoleColors');
const DoublyLinkedList = require('./doubleList');
const SinglyLinkedList = require('./linkedList');
const startArray = new Date().getTime();
i = 0;
const arrayAdding = [];
while (i < 1e5) {
  arrayAdding.unshift(i);
  i++;
}
console.log(arrayAdding.length);

while (arrayAdding.length) {
  arrayAdding.shift();
}
const endArray = new Date().getTime();
console.log(colors.FgMagenta, endArray - startArray, 'Array');

const startList = new Date().getTime();

const list = new SinglyLinkedList();
let j = 0;
while (j < 1e5) {
  list.push(j);
  j++;
}
console.log(list.length);
while (list.length) {
  list.shift();
}

const endList = new Date().getTime();
console.log(colors.FgBlue, endList - startList, 'Linked list');

// console.log(list.print());

// const b = parseListIterative(list);
// const startListDouble = new Date().getTime();

// const doubleList = new DoublyLinkedList();
// let n = 0;
// while (n < 1e5) {
//   doubleList.push(n);
//   n++;
// }
// doubleList.getNode(doubleList.length - 7);

// const endListDouble = new Date().getTime();
// console.log(colors.FgBlue, endListDouble - startListDouble, 'Double Linked list');
