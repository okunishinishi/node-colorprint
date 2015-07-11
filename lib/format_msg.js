/**
 * Format message.
 * @memberof module:colorprint/lib
 * @function formatMsg
 * @param {string...} msg - Messages to format.
 * @returns {string}  - Formatted message.
 */

"use strict";

/** @lends formatMsg */
function formatMsg(msg) {
    var s = this;
    msg = Array.prototype.slice.call(arguments, 0);
    if (!msg.length) {
        return '';
    }
    var formatted = msg.shift().replace(/%([sdf])/g, function ($0, $1) {
        var component = msg.shift();
        switch ($1) {
            case 's':
                return String(component);
            case 'd':
                return parseInt(component);
            case 'f':
                return parseFloat(component);
            default:
                return component;
        }
    });
    return [formatted].concat(msg).join(' ');
}

module.exports = formatMsg;

