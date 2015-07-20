/**
 * Test case for colorprint bin.
 * Runs with nodeunit.
 */

var bin = require.resolve('../../bin/colorprint'),
    childProcess = require('child_process');

function _spawn(command, args) {
    var spawned = childProcess.spawn(command, args);
    spawned.stdout.pipe(process.stdout);
    spawned.stderr.pipe(process.stderr);
}

exports['Print.'] = function (test) {
    _spawn(bin, ['notice', 'This is notice', 'from cli.']);
    _spawn(bin, ['info', 'This is info', 'from cli.']);
    _spawn(bin, ['debug', 'This is debug', 'from cli.']);
    _spawn(bin, ['trace', 'This is trace', 'from cli.']);
    _spawn(bin, ['error', 'This is error', 'from cli.']);
    _spawn(bin, ['fatal', 'This is fatal', 'from cli.']);
    test.done();
};