// # All Unique Characters

// Write a function that takes a string and returns`true` if all characters in the string are unique.Otherwise, it returns`false`.This function should complete in one pass through the string, i.e.it should run in O(n) time.

// For example, the input`'whistle'` should return `true`, while `'painting'` should return `false`.

const assert = require('assert');

const allUnique = str => {
  // Initializes result boolean
  let result = true;
  str.split("").forEach((char, idx) => {
    // creates string with every char excpet current index
    let currentString = str.slice(0, idx) + str.slice(idx + 1, str.length);
    // Changes result if repeating character
    if (currentString.includes(char)) {
      result = false;
    };
  }); 
  // Returns result b0olean
  return result;
};

assert.strictEqual(allUnique('whistle'), true);
assert.strictEqual(allUnique('painting'), false);