const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: [${actual}] !== [${expected}]`);
  }
};


const tail = function(array) {
  return array.slice(1);
};

// Test cases
const result1 = tail([5,6,7]);
assertEqual(result1.length, 2);
assertEqual(result1[0], 6);
assertEqual(result1[1], 7);
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!