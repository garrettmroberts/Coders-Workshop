// Rotate to Smallest String

// You are given a string.The string can be manipulated by taking the first letter and moving it to the end.

// Write a program to determine the lexicographically smallest string that can be created after an unlimited number of moves.

// For example, suppose we are given the string`daily`.The best we can create in this case is`ailyd`.
const assert = require("assert");


function rotatoArray(str) {
  // Drop to all lowercase
  str = str.toLowerCase();
  // Init solution array
  let solArr = [];
  let rotated = str;
  // Pushes rotated str to solution array, updates rotated var
  for (let i = 0; i < str.length; i++) {
    rotated = rotato(rotated);
    solArr.push(rotated);
  };
  // Sort the solutions
  const sorted = solArr.sort();
  // Return shortest
  return sorted[0];
};

function rotato(str) {
  // Splits word into array
  let chars = str.split("");
  // Rotates one char to the left
  const shift = chars.shift();
  chars.push(shift);
  // Rejoins and returns string
  return chars.join('');
};

assert.equal(rotatoArray("daily"), "ailyd");
assert.equal(rotatoArray("alabaster"), "abasteral");
assert.equal(rotato("edge"), "dgee");
console.log("All tests passing!")