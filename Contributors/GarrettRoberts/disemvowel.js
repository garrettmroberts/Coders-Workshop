// Disemvowel

// Create a function that takes a string and returns the string with all vowels removed.

const assert = require("assert");

const disemvowel = str => {
  // Split the string to an array
  let chars = str.toLowerCase().split("");

  //Filter non-vowel chars
  let filtered = chars.filter(char => {
    return /[^aeiou]/.test(char);
  });

  // Join and return
  return filtered.join("");
};

// Or a one liner
const disemvowelRegex = (str) => str.toLowerCase().replace(/[aeiou]/g, "");

assert.equal(disemvowel("Djibouti"), "djbt");
assert.equal(disemvowel("alamo"), "lm");
assert.equal(disemvowel("firetruCK"), "frtrck");
console.log("All tests passing!");