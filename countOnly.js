const countOnly = function(allItems, itemsToCount) {
  let output = {};

  for (const item of allItems) {
    if (itemsToCount.hasOwnProperty(item) && itemsToCount[item] === true) {
      if (!(output[item] > 0)) {
        output[item] = 1;
      } else {
        output[item] += 1;
      }
    }
  }

  return output;
};

module.exports = countOnly;