const eqArrays = require("./eqArrays");

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅ Assertion Passed: [${array1}] === [${array2}]`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: [${array1}] !== [${array2}]`);
  }
};

module.exports = assertArraysEqual;

// Tests
assertArraysEqual([1, 2, 3], [1, 2, 3]); // should pass
assertArraysEqual([1, 2, 3], [3, 2, 1]); // should fail
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // should pass
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // should fail