const assertEqual = require("../assertEqual");
const tail = require("../tail");
const result1 = tail([5,6,7]);
assertEqual(result1.length, 2);
assertEqual(result1[0], 6);
assertEqual(result1[1], 7);
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!
const result2 = tail([]);
assertEqual(result2.length, 0);
assertEqual(result2[0], undefined);
const result3 = tail([1]);
assertEqual(result3.length, 0);