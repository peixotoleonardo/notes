/**
 * The assert module export a default function, 
 * that is used for test if a value is truthy.
 * 
 * This function has an alias, which is ok.
 */
import assert from 'node:assert';

/**
 * Attention: don't use it in production, because
 * when this function generates a message that will 
 * be displayed, it use synchronous code.
 * 
 * https://github.com/nodejs/node/blob/eb46e09570c9262ccf97e3b11c2ad52de29a3a37/lib/assert.js#L342
 */
assert.doesNotThrow(() => assert(true));
assert.doesNotThrow(() => assert.ok(true));

assert.doesNotThrow(() => assert(1));
assert.doesNotThrow(() => assert.ok(1));

assert.throws(() => assert.ok());
assert.throws(() => assert.ok(0));
assert.throws(() => assert.ok(false));
