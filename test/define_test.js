/**
 * Test case for define.
 * Runs with nodeunit.
 */

var define = require('../lib/define.js');

exports.setUp = function(done) {
    done();
};

exports.tearDown = function(done) {
    done();
};

exports['Define'] = function(test){
    var Logger = define({
        verbose:false
    });
    var logger = new Logger({});
    logger.INFO('This is custom INFO');
    logger.DEBUG('This is custom DEBUG');
    logger.TRACE('This is custom TRACE');
    logger.ERROR('This is custom ERROR');
    logger.FATAL('This is custom FATAL');
    test.done();
};

