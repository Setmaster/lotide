# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @se7dev/lotide`

**Require it:**

`const _ = require('@se7dev/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

- `head(array)`: Returns first element of an array
- `tail(array)`: Returns elements after the first element of an array 
- `middle(array)`: Returns the element(s) in the middle of an array
- `countLetters(string)`: Returns an object with the count of each letter
- `countOnly(array, object)`: Returns an object with the count of the desired elements based on the passed object
- `findKey(object, callback)`: Returns the first key for which the callback returns true
- `findKeyByValue(object, value)`: Returns the first key that matches the value
- `flatten(array)`: Returns the flattened array
- `letterPositions(string)`: Returns an object with the indexes in which each letter occurs
- `map(array, callback)`: Returns an array with each element transformed by the callback
- `takeUntil(array, callback)`: Returns the array up until the element matched the callback
- `without(array, array)`: Returns the array without the elements of the second being present
- `assertArraysEqual(array, array)`: Logs to the console whether the arrays match
- `assertEqual(value, value)`: Logs to the console whether the values match (doesn't support objects)
- `assertObjectsEqual(object, object)`: Logs to the console whether an object matches another
- `eqArrays(array, array)`: Returns true or false depending on whether the arrays match
- `eqObjects(object, object)`: Returns true or false depending on whether the objects match
