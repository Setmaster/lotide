const assert = require('chai').assert;
const letterPositions = require('../letterPositions');

describe("#letterPositions", () => {
  it("returns correct positions for 'hello'", () => {
    const expectedResult = { h: [0], e: [1], l: [2, 3], o: [4] };
    const result = letterPositions("hello");

    assert.deepEqual(result.h, expectedResult.h);
    assert.deepEqual(result.e, expectedResult.e);
    assert.deepEqual(result.l, expectedResult.l);
    assert.deepEqual(result.o, expectedResult.o);
  });
});
