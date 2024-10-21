const assert = require('chai').assert;
const without = require('../without');

describe("#without", () => {
    it("removes [1] from [1, 2, 3] resulting in [2, 3]", () => {
        assert.deepEqual(without([1, 2, 3], [1]), [2, 3]);
    });

    it("removes ['3'] from ['1', '2', '3'] resulting in ['1', '2']", () => {
        assert.deepEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
    });

    it("removes [1, 2, 3] from [1, 2, 3] resulting in []", () => {
        assert.deepEqual(without([1, 2, 3], [1, 2, 3]), []);
    });

    it("does not alter the original array", () => {
        const words = ["hello", "world", "lighthouse"];
        without(words, ["lighthouse"]);
        assert.deepEqual(words, ["hello", "world", "lighthouse"]);
    });
});
