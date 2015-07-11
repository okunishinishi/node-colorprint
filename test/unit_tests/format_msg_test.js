/**
 * Test case for formatMsg.
 * Runs with nodeunit.
 */

var formatMsg = require('../../lib/format_msg.js');

exports['Format msg'] = function (test) {
    var msg = formatMsg('Hey, my name is %s, I am %d years old.', 'John', 34, 'Hoo!');
    test.equal(msg, "Hey, my name is John, I am 34 years old. Hoo!");
    test.done();
};

