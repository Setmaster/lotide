const findKey = function(obj, callback) {
  for (const objKey of Object.keys(obj)) {
    if (callback(obj[objKey])) {
      return objKey;
    }
  }
};

module.exports = findKey;