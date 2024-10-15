const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅ Assertion Passed: [${array1}] === [${array2}]`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: [${array1}] !== [${array2}]`);
  }
};

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

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1,2,3,4,5,6]);
assertArraysEqual(flatten([[6]]), [6]);
assertArraysEqual(flatten([1, 2, 3, 4, 5, 6]), [1,2,3,4,5,6]);
assertArraysEqual(flatten([[],[]]), []);