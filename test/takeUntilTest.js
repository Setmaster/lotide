const assert = require('chai').assert;
const takeUntil = require('../takeUntil');

describe("#takeUntil", () => {
  it("takes elements from an array until a negative number is encountered", () => {
    const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
    const result1 = takeUntil(data1, x => x < 0);
    assert.deepEqual(result1, [1, 2, 5, 7, 2]);
  });

  it("takes elements from an array until a comma is encountered", () => {
    const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
    const result2 = takeUntil(data2, x => x === ',');
    assert.deepEqual(result2, ["I've", "been", "to", "Hollywood"]);
  });
});
