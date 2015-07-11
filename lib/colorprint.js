/**
 * Colorpint context.
 * @memberof module:colorprint/lib
 * @inner
 * @constructor Colorprint
 * @param {object} config - Context configuration.
 */

"use strict";

var ext = require('./ext'),
    formatMsg = require('./format_msg'),
    decorateMsg = require('./decorate_msg'),
    extend = ext.extend;

/** @lends module:colorprint/lib~Colorprint */
function Colorprint() {
    var s = this;
    s.init.apply(s, arguments);
}

Colorprint.prototype = {
    _format: function () {
        var s = this;
        var msg = formatMsg.apply(formatMsg, arguments);
        return [s.prefix, msg, s.suffix].join('');
    },
    _printLog: function (msg, color) {
        console.log(decorateMsg(msg, color));
    },
    _printError: function (msg, color) {
        console.error(decorateMsg(msg, color));
    },
    /** Color for info print. */
    INFO_COLOR: 'green',
    /** Color for debug print. */
    DEBUG_COLOR: 'black',
    /** Color for trace print. */
    TRACE_COLOR: 'white',
    /** Color for error print. */
    ERROR_COLOR: 'red',
    /** Color for fatal print. */
    FATAL_COLOR: 'bgRed',
    /** @constructs module:colorprint/lib~Colorprint */
    init: function (config) {
        var s = this;
        extend(s, config);
    },
    /** Message prefix */
    prefix: '',
    /** Message suffix */
    suffix: '',
    /**
     * Print info message.
     * @param {...string} msg - Message to print.
     */
    info: function (msg) {
        var s = this;
        s._printLog(s._format.apply(s, arguments), s.INFO_COLOR);
    },
    /**
     * Print debug message.
     * @param {...string} msg - Message to print.
     */
    debug: function (msg) {
        var s = this;
        s._printLog(s._format.apply(s, arguments), s.DEBUG_COLOR);
    },
    /**
     * Print trace message.
     * @param {...string} msg - Message to print.
     */
    trace: function (msg) {
        var s = this;
        s._printLog(s._format.apply(s, arguments), s.TRACE_COLOR);
    },
    /**
     * Print error message.
     * @param {...string} msg - Message to print.
     */
    error: function (msg) {
        var s = this;
        s._printError(s._format.apply(s, arguments), s.ERROR_COLOR);
    },
    /**
     * Print fatal message.
     * @param {...string} msg - Message to print.
     */
    fatal: function (msg) {
        var s = this;
        s._printError(s._format.apply(s, arguments), s.FATAL_COLOR);
    }
};


module.exports = Colorprint;
