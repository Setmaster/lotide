const eqArrays = function (array1, array2) {
    if (array1.length !== array2.length) {
        return false;
    }
    for (let i = 0; i < array1.length; i++) {
        if (array1[i] !== array2[i]) {
            return false;
        }
    }
    return true;
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function (object1, object2) {
    const obj1Keys = Object.keys(object1);
    const obj2Keys = Object.keys(object2);

    if (obj1Keys.length !== obj2Keys.length) {
        return false;
    }

    for (const key of obj1Keys) {
        if (Array.isArray(object1[key]) && eqArrays(object1[key], object2[key]) === false) {
            return false;
        }
        if (!Array.isArray(object1[key]) && object1[key] !== object2[key]) {
            return false;
        }
    }
    return true;
};

const assertObjectsEqual = function (actual, expected) {
    const inspect = require("util").inspect;
    
    if (eqObjects(actual, expected)) {
        console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
    } else {
        console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
    }
};

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