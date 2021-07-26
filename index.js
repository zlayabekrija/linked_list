const colors = require('./consoleColors');
const DoublyLinkedList = require('./doubleList');
const SinglyLinkedList = require('./linkedList');
// const startArray = new Date().getTime();
// i = 0;
// const arrayAdding = [];
// while (i < 1e5) {
//   arrayAdding.unshift(i);
//   i++;
// }
// arrayAdding[Math.floor(arrayAdding.length - 2)];
// const endArray = new Date().getTime();
// console.log(colors.FgMagenta, endArray - startArray, 'Array');

const startList = new Date().getTime();

const list = new SinglyLinkedList();
let j = 0;
while (j < 1e1) {
  list.push(j);
  j++;
}
list.getNodeAtIndex(list.length - 7);

const endList = new Date().getTime();
console.log(colors.FgBlue, endList - startList, 'Linked list');

// console.log(list.print());
function parseListRecursive(list, result = []) {
  if (!list.length) return result;
  result.push(list.pop().value);
  return parseListRecursive(list, result);
}

function parseListIterative(list) {
  const result = [];
  while (list.length) {
    result.push(list.pop().value);
  }
  return result;
}

const a = parseListRecursive(list);
// const b = parseListIterative(list);
console.log(a);
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
