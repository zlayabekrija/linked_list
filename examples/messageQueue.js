const Queue = require('../queue');
const Stack = require('../stack');
const {FgBlue, FgCyan} = require('../utils/consoleColors');

class MessageQueue extends Queue {
  constructor() {
    super();
  }
  enqueue(value) {
    return super.enqueue(value);
  }
  dequeue() {
    return super.dequeue();
  }
}

const messages = ['Hi', 'How are you', 'Are you coming here', 'We already left'];

const messagesQueue = new MessageQueue();

for (const message of messages) {
  messagesQueue.enqueue(message);
}

let allMessages = '';
while (messagesQueue.length) {
  allMessages += messagesQueue.dequeue().value + '\n';
}
console.log(FgBlue, 'Stack array-like push/pop \n', allMessages);

class MessagesStack extends Stack {
  constructor() {
    super();
  }
  push(value) {
    return super.push(value);
  }
  pop() {
    return super.pop();
  }
}

const messageStack = new MessagesStack();

for (const message of messages) {
  messageStack.push(message);
}
let allMessagesStack = '';
while (messageStack.length) {
  allMessagesStack += messageStack.pop().value + '\n';
}
console.log(FgCyan, 'Queue enqueue/dequeue \n', allMessagesStack);
