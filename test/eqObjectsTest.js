const assert = require('chai').assert;
const eqObjects = require('../eqObjects');

describe("#eqObjects", () => {
  it("returns true for identical objects with primitive values", () => {
    const shirtObject = { color: "red", size: "medium" };
    const anotherShirtObject = { size: "medium", color: "red" };
    assert.isTrue(eqObjects(shirtObject, anotherShirtObject));
  });

  it("returns false for objects with different number of keys", () => {
    const shirtObject = { color: "red", size: "medium" };
    const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
    assert.isFalse(eqObjects(shirtObject, longSleeveShirtObject));
  });

  it("returns true for identical objects with array values", () => {
    const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
    const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
    assert.isTrue(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject));
  });

  it("returns false for objects with different nested structures", () => {
    const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
    const longSleeveMultiColorShirtObject = {
      size: "medium",
      colors: ["red", "blue"],
      sleeveLength: "long",
    };
    assert.isFalse(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject));
  });

  it("returns true for objects with identical nested objects", () => {
    assert.isTrue(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }));
  });

  it("returns false for objects with different nested objects", () => {
    assert.isFalse(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }));
    assert.isFalse(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }));
  });
});
