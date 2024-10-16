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

const letterPositions = function(sentence) {
  const results = {};
  sentence.split('').forEach((letter, index)=>{
    if (!results.hasOwnProperty(letter)) {
      results[letter] = [index];
    } else {
      results[letter].push(index);
    }
  });
  return results;
};

const testInput1 = "hello";
const expectedResult1 = { h: [ 0 ], e: [ 1 ], l: [ 2, 3 ], o: [ 4 ] };
const result1 = letterPositions(testInput1);
assertArraysEqual(result1.h, expectedResult1.h);
assertArraysEqual(result1.e, expectedResult1.e);
assertArraysEqual(result1.l, expectedResult1.l);
assertArraysEqual(result1.o, expectedResult1.o);