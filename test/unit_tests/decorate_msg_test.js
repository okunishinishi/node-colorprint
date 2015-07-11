/**
 * Test case for decorateMsg.
 * Runs with nodeunit.
 */

var decorateMsg = require('../../lib/decorate_msg.js');

exports['Decorate msg'] = function (test) {
    test.ok(decorateMsg('foo', 'green'));
    test.done();
};


exports['Decorate msg with invalid color.'] = function (test) {
    test.throws(function () {
        decorateMsg('foo', '__not_existing_color');
    });
    test.done();
};

