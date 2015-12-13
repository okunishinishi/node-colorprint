/**
 * Test case for indentMsg.
 * Runs with mocha.
 */
"use strict";

const indentMsg = require('../lib/msg/indent_msg.js'),
    assert = require('assert');

describe('indent', () => {

    it('Indent msg', (done) => {
        assert.equal(indentMsg('foo', 2).trim(), 'foo');
        done();
    });
});

