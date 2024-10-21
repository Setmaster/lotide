const assertEqual = require("./assertEqual");

const findKey = function(obj, callback) {
  for (const objKey of Object.keys(obj)) {
    if (callback(obj[objKey])) {
      return objKey;
    }
  }
};

const result1 = findKey(
  {
    "Blue Hill": {stars: 1},
    Akaleri: {stars: 3},
    noma: {stars: 2},
    elBulli: {stars: 3},
    Ora: {stars: 2},
    Akelarre: {stars: 3},
  },
  (x) => x.stars === 2
);

assertEqual(result1, "noma");