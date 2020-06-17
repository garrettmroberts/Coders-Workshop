// PascalCase to snake_case

// Complete the function/method so that it takes CamelCase string and returns the string in snake_case notation. Lowercase characters can be numbers. If method gets number, it should return string.

// For Example:
// input`"TestController"` should return `test_controller`
// input`"MoviesAndBooks"` should return `movies_and_books`

const assert = require("assert");

const toSnakeyboi = str => {
  let split = str.match(/[A-Z][a-z]*/g) ;
  return split.map(substr => {
    return substr.toLowerCase();
  })
  .join("_");
}

// Or a one liner
const oneLiner = str => str.replace(/[A-Z][a-z]*/g, "_$&").toLowerCase().slice(1);



assert.deepEqual(toSnakeyboi("TestController"), "test_controller");
assert.deepEqual(toSnakeyboi("OnePlusTwo"), "one_plus_two");
console.log("All tests passed!");