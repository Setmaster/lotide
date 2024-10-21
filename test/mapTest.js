const assert = require('chai').assert;
const map = require('../map');

describe("#map", () => {
    it("returns the first letter of each word in an array", () => {
        const words = ["ground", "control", "to", "major", "tom"];
        const result = map(words, word => word[0]);
        assert.deepEqual(result, ['g', 'c', 't', 'm', 't']);
    });
});
