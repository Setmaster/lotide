const assertObjectsEqual = require("../assertObjectsEqual");

const obj1 = {
    potato: "plant",
    classNumber: 430,
    sizes: [42, 34, 25]
};

const obj2 = {
    potato: "plant",
    classNumber: 430,
    sizes: [42, 34, 25]
};

const obj3 = {
    potato: "plant",
    classNumber: 430
};

const obj4 = {
    classNumber: 430,
    sizes: [42, 34, 25],
    potato: "plant"
};

assertObjectsEqual(obj1, obj2); // should pass
assertObjectsEqual(obj2, obj3); // should fail
assertObjectsEqual(obj1, obj4); // should pass