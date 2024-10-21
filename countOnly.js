const assertEqual = require("./assertEqual");

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

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe",
];

const result1 = countOnly(firstNames, {
  Jason: true,
  Karima: true,
  Fang: true,
  Agouhanna: false,
});

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);