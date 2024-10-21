const eqArrays = require("./eqArrays");

const isObject = function (variable) {
    return variable !== null && typeof variable === 'object' && !Array.isArray(variable);
}

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function (object1, object2) {
    const obj1Keys = Object.keys(object1);
    const obj2Keys = Object.keys(object2);

    if (obj1Keys.length !== obj2Keys.length) {
        return false;
    }

    for (const key of obj1Keys) {
        if (isObject(object1[key]) && !eqObjects(object1[key], object2[key])) {
            return false;
        }

        if (Array.isArray(object1[key]) && eqArrays(object1[key], object2[key]) === false) {
            return false;
        }
        if (!Array.isArray(object1[key]) && !isObject(object1[key]) && object1[key] !== object2[key]) {
            return false;
        }
    }
    return true;
};

module.exports = eqObjects;