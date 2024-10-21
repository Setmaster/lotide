const letterPositions = function(sentence) {
  const results = {};
  sentence.split('').forEach((letter, index)=>{
    if (!results.hasOwnProperty(letter)) {
      results[letter] = [index];
    } else {
      results[letter].push(index);
    }
  });
  return results;
};

module.exports = letterPositions;