/**
 * Test case for colorprint.
 * Runs with nodeunit.
 */

var Colorprint = require('../../lib/colorprint.js');

exports['Colorprint'] = function (test) {
    var colorprint = new Colorprint({});
    colorprint.info('This is info');
    colorprint.debug('This is debug');
    colorprint.trace('This is trace');
    colorprint.error('This is error');
    colorprint.fatal('This is fatal');
    test.done();
};

