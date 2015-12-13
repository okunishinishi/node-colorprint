/**
 * Test case for lib.
 * Runs with mocha.
 */
"use strict";

const lib = require('../lib'),
    assert = require('assert');

describe('lib', () => {
    it('Lib', (done) => {
        assert.ok(lib.create({}));
        assert.ok(new lib.Colorprint({}));
        lib.colors.red('foo');
        lib.notice('This is notice');
        lib.info('This is info');
        lib.debug('This is debug');
        lib.trace('This is trace');
        lib.error('This is error');
        lib.warn('This is warn');
        lib.fatal('This is fatal');

        lib.INFO('This is INFO');
        lib.DEBUG('This is DEBUG');
        lib.TRACE('This is TRACE');
        lib.ERROR('This is WARN');
        lib.WARN('This is ERROR');
        lib.FATAL('This is FATAL');
        done();
    });
});

