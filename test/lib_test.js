/**
 * Test case for lib.
 * Runs with nodeunit.
 */

var lib = require('../lib');

exports['Lib'] = function (test) {
    test.ok(lib.create({}));
    test.ok(new lib.Colorprint({}));
    lib.notice('This is notice');
    lib.info('This is info');
    lib.debug('This is debug');
    lib.trace('This is trace');
    lib.error('This is error');
    lib.fatal('This is fatal');

    lib.INFO('This is INFO');
    lib.DEBUG('This is DEBUG');
    lib.TRACE('This is TRACE');
    lib.ERROR('This is ERROR');
    lib.FATAL('This is FATAL');
    test.done();
};

