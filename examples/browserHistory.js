const {BACK_BUTTON_DISABLED, FORWARD_BUTTON_DISABLED} = require('../errors');
const Stack = require('../stack');

class BrowserHistory extends Stack {
  constructor() {
    super();
    this.position = 0;
  }
  goBack() {
    if (this.position - 1 === 0) return BACK_BUTTON_DISABLED;
    this.position--;
    return super.getNodeAtIndex(this.position - 1);
  }

  goForward() {
    if (this.position === this.length) return FORWARD_BUTTON_DISABLED;
    this.position++;
    return super.getNodeAtIndex(this.position - 1);
  }

  push(value) {
    this.position++;
    return super.push(value);
  }
}

const addresses = ['www.google.com', 'www.facebook.com', 'www.instagram.com'];

const browser = new BrowserHistory();

for (const address of addresses) {
  browser.push(address);
}

// console.log(browser.print());
// browser.goBack();

browser.goBack();
browser.goBack();
browser.goBack();
browser.goBack();

browser.goForward();
browser.goForward();

console.log(browser.goForward());

// console.log(browser.tail);

// console.log(browser.print());
