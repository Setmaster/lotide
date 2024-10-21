const assertArraysEqual = require("./assertArraysEqual");

const without = function(source, itemsToRemove) {
  let result = [];
  for (let i = 0; i < source.length; i++) {
    if (!itemsToRemove.includes(source[i])) { // if the current element is not in the unwanted list
      result.push(source[i]); // we add it to output
    }
  }
  return result;
};

module.exports = without;

// Test cases
assertArraysEqual(without([1, 2, 3], [1]), [2, 3]); // should pass
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]); // should pass
assertArraysEqual(without([1, 2, 3], [1, 2, 3]), []); // should pass
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);