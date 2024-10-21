const takeUntil = function(array, callback) {
  let output = [];

  for (const element of array) {
    if (callback(element)) {
      break;
    }
    output.push(element);
  }

  return output;
};

module.exports = takeUntil;