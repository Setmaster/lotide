const assertEqual = function(actual, expected) {
  if (Array.isArray(actual) && Array.isArray(expected)) {
    if (actual.length !== expected.length) {
      console.log(`🛑🛑🛑 Assertion Failed: [${actual}] !== [${expected}]`);
      return;
    }

    for (let i = 0; i < actual.length; i++) {
      if (actual[i] !== expected[i]) {
        console.log(`🛑🛑🛑 Assertion Failed: [${actual}] !== [${expected}]`);
        return;
      }
    }
    console.log(`✅✅✅ Assertion Passed: [${actual}] === [${expected}]`);
    return;
  }

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
assertEqual(tail([5,6,7]), [6,7]);
assertEqual(tail([5,6,7]), [5,6,7]);
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!