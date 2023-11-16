import assert from 'node:assert';

/**
 * deepEqual tests for deep equality between the actual and
 * expected parameters.
 * 
 * Comparison Details
 * - Primitives values are compared with ==, with the exception of Nan.
 * - Type tags of objects should be the same.
 * - Only enumerable "own" properties are considered.
 * - Error names and messages are always compared, even if these are not enumerable properties.
 * - Object wrappers are compared both as objects and unwrapped values.
 * - Object properties are compared unordered.
 * - Map keys and Set items are compared unordered.
 * - Recursion stops when both sides differ or both sides encounter a circular reference.
 * - Implementation does not test the [[Prototype]] of objects.
 * - Symbol properties are not compared.
 * - WeakMap e WeakSet comparison does not rely on their values.
 * - RegExp lastIndex, flags, and source are always compared, even if these are not enumerable properties.
 */

assert.doesNotThrow(() => assert.deepEqual('0', false));

const person1 = {
  name: 'Maria',
  city: {
    number: 60,
  },
};

const person2 = {
  name: 'Maria',
  city: {
    number: 30,
  },
};

const person3 = {
  name: 'Maria',
  city: {
    number: 60,
  },
};

/**
 * prototypes are ignored
 */
const person4 = { __proto__: person1 };

assert.doesNotThrow(() => assert.deepEqual(person1, person1));
assert.throws(() => assert.deepEqual(person1, person2));
assert.doesNotThrow(() => assert.deepEqual(person1, person3));
assert.throws(() => assert.deepEqual(person1, person4));