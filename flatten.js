const assertArraysEqual = require("./assertArraysEqual");


const flatten = (array) => {
  let output = [];

  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      output = output.concat(array[i]);
    } else {
      output.push(array[i]);
    }
  }
  return output;
};

module.exports = flatten;

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1,2,3,4,5,6]);
assertArraysEqual(flatten([[6]]), [6]);
assertArraysEqual(flatten([1, 2, 3, 4, 5, 6]), [1,2,3,4,5,6]);
assertArraysEqual(flatten([[],[]]), []);