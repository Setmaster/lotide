const findKeyByValue = function(obj, val) {
  for (const objKey of Object.keys(obj)) {
    if (obj[objKey] === val) {
      return objKey;
    }
  }
};

module.exports = findKeyByValue;