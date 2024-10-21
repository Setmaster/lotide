const assertArraysEqual = require("./assertArraysEqual");


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