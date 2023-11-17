import assert from 'assert/strict';

/**
 * deepEqual tests for deep equality between the actual and
 * expected parameters.
 * 
 * Comparison Details
 * - Primitive values are compared using Object.is.
 * - Type tags of objects should be the same.
 * - [[Prototype]] of objects are compared using the === operator.
 * - Only enumerable "own" properties are considered.
 * - Error names and messages are always compared, even if these are not enumerable properties.
 * - Enumerable own Symbol properties are compared as well.
 * - Object wrappers are compared both as objects and unwrapped values.
 * - Object properties are compared unordered.
 * - Map keys and Set items are compared unordered.
 * - Recursion stops when both sides differ or both sides encounter a circular reference.
 * - WeakMap and WeakSet comparison does not rely on their values.
 * - RegExp lastIndex, flags, and source are always compared, even if these are not enumerable properties.
 */

assert.throws(() => assert.deepEqual({ a: 1 }, { a: '1' }));

const object = {};
const fakeDate = {};
const date = new Date();
Object.setPrototypeOf(fakeDate, date);

// Different [[Prototype]]:
assert.throws(() => assert.deepEqual(object, fakeDate));

// Different type tags:
assert.throws(() => assert.deepStrictEqual(date, fakeDate));

assert.doesNotThrow(() => assert.deepStrictEqual(NaN, NaN));

// Different unwrapped numbers
assert.throws(() => assert.deepStrictEqual(new Number(1), new Number(3)));

// OK because the object and the string are identical when unwrapped.
assert.doesNotThrow(() => assert.deepStrictEqual(new String('foo'), new Object('foo')));

assert.doesNotThrow(() => assert.deepStrictEqual(-0, -0));

// Different zeros
assert.throws(() => assert.deepStrictEqual(-0, 0));