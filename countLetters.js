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

module.exports = countLetters;