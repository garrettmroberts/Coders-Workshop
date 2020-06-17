// Get Length

// Get the length of an array using recursion without accessing its length property.
const assert = require("assert");

const getLength = (arr, count = 0) => {
  
  // Base case returns count
  if (!arr[0]) {
    return count;
  }

  // Increment count, shorten arr
  count++;
  arr.pop();

  // Recursion, baby!
  return getLength(arr, count);
};


assert.equal(getLength(["a", "l", "a", "m", "o"]), 5);
assert.equal(getLength([1,2,3,4,5,6,7,8,9]), 9);
assert.equal(getLength(["e", "S", "k", "!", "m", "0"]), 6);
console.log("All tests passed!");