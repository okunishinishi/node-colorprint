/**
 * Add indent.
 * @function indentMsg
 * @param {string} msg - Message format.
 * @param {number} depth - Depth to indent.
 * @returns {string} - Indented message.
 */

"use strict";

var os = require('os');

var EOL = os.EOL,
    TAB = '\t';

/** @lends indentMsg */
function indentMsg(msg, depth) {
    var indent = '';
    for (var i = 0; i < depth; i++) {
        indent += TAB;
    }
    return indent + msg.replace(new RegExp(EOL, 'g'), EOL + indent);
}

module.exports = indentMsg;
