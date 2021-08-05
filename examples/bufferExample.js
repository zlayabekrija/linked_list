const Queue = require('../queue');
const Stack = require('../stack');
const data = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36,
  37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70,
  71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99,
];
const queue = new Queue();
const stack = new Stack();
const BUFFER_SIZE = 20;
let i = 0;
// while (i <= data.length) {
//   if (stack.length % BUFFER_SIZE === 0 && stack.length) emptyStack();
//   stack.push(data[i]);
//   i++;
// }
// function emptyStack() {
//   while (stack.length) {
//     console.log(stack.pop().value);
//   }
// }
let j = 0;
while (j <= data.length) {
  if (queue.length % BUFFER_SIZE === 0 && queue.length) emptyQueue();
  queue.enqueue(data[j]);
  j++;
}
function emptyQueue() {
  while (queue.length) {
    console.log(queue.dequeue().value);
  }
}
