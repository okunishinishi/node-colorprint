/**
 * Test case for colorprint.
 * Runs with nodeunit.
 */

var Colorprint = require('../lib/colorprint.js');

exports['Colorprint'] = function (test) {
    var colorprint = new Colorprint({});
    colorprint.notice('This is notice');
    colorprint.info('This is info');
    colorprint.debug('This is debug');
    colorprint.trace('This is trace');
    colorprint.error('This is error');
    colorprint.fatal('This is fatal');

    colorprint.INFO('This is INFO');
    colorprint.DEBUG('This is DEBUG');
    colorprint.TRACE('This is TRACE');
    colorprint.ERROR('This is ERROR');
    colorprint.FATAL('This is FATAL');
    test.done();
};

exports['Customize color print.'] = function (test) {
    var colorprint = new Colorprint({
        PREFIX: 'Yeah!',
        SUFFIX: 'That\'s it!',
        INFO_COLOR: 'blue'
    });
    colorprint.info('This will be blue with prefix.');
    test.done();
};
