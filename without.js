const without = function(source, itemsToRemove) {
  let result = [];
  for (let i = 0; i < source.length; i++) {
    if (!itemsToRemove.includes(source[i])) { // if the current element is not in the unwanted list
      result.push(source[i]); // we add it to output
    }
  }
  return result;
};

module.exports = without;