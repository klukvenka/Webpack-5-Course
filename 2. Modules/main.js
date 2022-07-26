const { add: addNumbers, subtract } = require('./functions'); // automatically will trigger index.js

function add() {
  console.log('hello');
}

// addNumbers - alias in case we have a function with the same name
const output = addNumbers(1, 2);
add();
console.log(output);
