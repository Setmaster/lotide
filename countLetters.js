const assertEqual = require("./assertEqual");

const countLetters = function(str) {
  let output = {};
  str = str.replace(/ /g, ''); //ignore spaces
  for (const char of str) {
    if (!output.hasOwnProperty(char)) {
      output[char] = 1;
    } else {
      output[char] += 1;
    }
  }
  return output;
};

const result1 = countLetters("p ota to ");

assertEqual(result1.p, 1);
assertEqual(result1.o, 2);
assertEqual(result1.t, 2);
assertEqual(result1.a, 1);
