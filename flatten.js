const flatten = (array) => {
  let output = [];

  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      output = output.concat(array[i]);
    } else {
      output.push(array[i]);
    }
  }
  return output;
};

module.exports = flatten;