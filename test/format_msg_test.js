/**
 * Test case for formatMsg.
 * Runs with nodeunit.
 */

var formatMsg = require('../lib/msg/format_msg.js');

exports['Format msg'] = function (test) {
    test.equal(formatMsg('Hey, my name is %s, I am %d years old.', 'John', 34, 'Hoo!'), "Hey, my name is John, I am 34 years old. Hoo!");
    test.equal(formatMsg(''), '');
    test.equal(formatMsg(), '');
    test.equal(formatMsg('foo%f', 0.4), 'foo0.4');
    test.equal(formatMsg('foo%j', 0.4), 'foo%j 0.4');
    test.done();
};

exports['Format msg with object'] = function (test) {
    var msg = formatMsg({foo: 'bar'}, null);
    test.ok(msg);
    test.done();
};

