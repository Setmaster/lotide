const middle = function(array) {
  if (array.length < 3) {
    return [];
  }
  if (array.length % 2 !== 0) {
    return [array[Math.ceil((array.length / 2)) - 1]];
  }
  return [array[Math.ceil((array.length / 2)) - 1], array[(Math.ceil((array.length / 2)))]];
};

module.exports = middle;