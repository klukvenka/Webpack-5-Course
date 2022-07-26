// ------------------------------ES6 FORMAT------------------------------
import * as $ from './functions'; // $ is an alias here

const output = $.add(1, 2);
console.log(output);

// ------------------------------COMMONJS FORMAT------------------------------
// const { add: addNumbers, subtract } = require('./functions'); // automatically will trigger index.js

// function add() {
//   console.log('hello');
// }

// // addNumbers - alias in case we have a function with the same name, it's just for an example
// const output = addNumbers(1, 2);
// add();
// console.log(output);
