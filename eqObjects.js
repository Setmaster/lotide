const assertEqual = function (actual, expected) {
    if (actual === expected) {
        console.log(`✅✅✅ Assertion Passed: [${actual}] === [${expected}]`);
    } else {
        console.log(`🛑🛑🛑 Assertion Failed: [${actual}] !== [${expected}]`);
    }
};

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

const shirtObject = {color: "red", size: "medium"};
const anotherShirtObject = {size: "medium", color: "red"};
assertEqual(eqObjects(shirtObject, anotherShirtObject), true)

const longSleeveShirtObject = {size: "medium", color: "red", sleeveLength: "long"};
assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false);

const multiColorShirtObject = {colors: ["red", "blue"], size: "medium"};
const anotherMultiColorShirtObject = {size: "medium", colors: ["red", "blue"]};
assertEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), true);

const longSleeveMultiColorShirtObject = {
    size: "medium",
    colors: ["red", "blue"],
    sleeveLength: "long",
};

assertEqual(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject), false);