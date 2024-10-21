const assertEqual = require("./assertEqual");

const findKeyByValue = function(obj, val) {
  for (const objKey of Object.keys(obj)) {
    if (obj[objKey] === val) {
      return objKey;
    }
  }
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);