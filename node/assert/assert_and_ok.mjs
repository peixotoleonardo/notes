/**
 * The assert module export a default function, 
 * that is used for test if a value is truthy.
 * 
 * This function has an alias, which is ok.
 */
import assert from 'node:assert';

assert.doesNotThrow(() => assert(true));
assert.doesNotThrow(() => assert.ok(true));

assert.doesNotThrow(() => assert(1));
assert.doesNotThrow(() => assert.ok(1));

assert.throws(() => assert.ok());
assert.throws(() => assert.ok(0));
assert.throws(() => assert.ok(false));