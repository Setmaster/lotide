const assert = require('chai').assert;
const countLetters = require('../countLetters');

describe("#countLetters", () => {
  it("counts letters in 'p ota to '", () => {
    const result1 = countLetters("p ota to ");
    assert.strictEqual(result1.p, 1);
    assert.strictEqual(result1.o, 2);
    assert.strictEqual(result1.t, 2);
    assert.strictEqual(result1.a, 1);
  });
});
