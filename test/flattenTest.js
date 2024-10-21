const assert = require('chai').assert;
const flatten = require('../flatten');

describe("#flatten", () => {
  it("flattens [1, 2, [3, 4], 5, [6]] to [1, 2, 3, 4, 5, 6]", () => {
    assert.deepEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
  });

  it("flattens [[6]] to [6]", () => {
    assert.deepEqual(flatten([[6]]), [6]);
  });

  it("flattens [1, 2, 3, 4, 5, 6] to [1, 2, 3, 4, 5, 6]", () => {
    assert.deepEqual(flatten([1, 2, 3, 4, 5, 6]), [1, 2, 3, 4, 5, 6]);
  });

  it("flattens [[], []] to []", () => {
    assert.deepEqual(flatten([[], []]), []);
  });
});
