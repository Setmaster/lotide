const assert = require('chai').assert;
const head   = require('../head');

describe("#head", () => {
    it("returns 1 for [1, 2, 3]", () => {
        assert.strictEqual(head([1, 2, 3]), 1);
    });

    it("returns Hello for [Hello, Lighthouse, Labs]", () => {
        assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
    });

    it("returns 123 for [123]", () => {
        assert.strictEqual(head([123]), 123);
    });

    it("returns undefined for []", () => {
        assert.strictEqual(head([]), undefined);
    });
});