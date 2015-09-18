/**
 * Test case for indentMsg.
 * Runs with nodeunit.
 */

var indentMsg = require('../lib/msg/indent_msg.js');

exports.setUp = function (done) {
    done();
};

exports.tearDown = function (done) {
    done();
};

exports['Indent msg'] = function (test) {
    test.equal(indentMsg('foo', 2).trim(), 'foo');
    test.done();
};

