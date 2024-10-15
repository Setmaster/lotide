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


assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual("Lighthouse Labs", "Lighthouse Labs");
assertEqual(1, 1);
assertEqual(1, 2);
assertEqual([1, 2, 3], [1, 2, 3]);
assertEqual([1, 2, 3], [3, 2, 1]);
assertEqual([1, 2, 3], [1, 2, 3, 4]);
assertEqual([1, 2, 3], [1, 2]);