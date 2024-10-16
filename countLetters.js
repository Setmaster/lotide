const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

const countLetters = function(str) {
  let output = {};

  for (const char of str) {
    if (!output.hasOwnProperty(char)) {
      output[char] = 1;
    } else {
      output[char] += 1;
    }
  }
  return output;
};

let result1 = countLetters("potato");

assertEqual(result1.p, 1);
assertEqual(result1.o, 2);
assertEqual(result1.t, 2);
assertEqual(result1.a, 1);
