const Stack = require('../stack');

class BrowserHistory extends Stack {
  constructor() {
    super();
  }
  goBack() {
    return super.pop();
  }
  push(value) {
    return super.push(value);
  }
}

const addresses = ['www.google.com', 'www.facebook.com', 'www.instagram.com'];

const browser = new BrowserHistory();

for (const address of addresses) {
  browser.push(address);
}

console.log(browser.print());

console.log(browser.goBack());

console.log(browser.tail);

console.log(browser.print());
