const assertArraysEqual = require("./assertArraysEqual");


const middle = function(array) {
  if (array.length < 3) {
    return [];
  }
  if (array.length % 2 !== 0) {
    return [array[Math.ceil((array.length / 2)) - 1]];
  }
  return [array[Math.ceil((array.length / 2)) - 1], array[(Math.ceil((array.length / 2)))]];
};

assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);