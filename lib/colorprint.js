/**
 * Colorpint context.
 * @memberof module:colorprint/lib
 * @inner
 * @constructor Colorprint
 * @param {object} config - Context configuration.
 */

"use strict";

const formatMsg = require('./msg/format_msg'),
    decorateMsg = require('./msg/decorate_msg'),
    indentMsg = require('./msg/indent_msg');

/** @lends module:colorprint/lib~Colorprint */
function Colorprint() {
    let s = this;
    s.init.apply(s, arguments);
}

Colorprint.prototype = {
    disabled: false,
    prepareMsg: function () {
        let s = this;
        let msg = formatMsg.apply(formatMsg, arguments);
        return [s.PREFIX, indentMsg(msg, s.indent), s.SUFFIX].join('');
    },
    writeToStdout: function (msg, color) {
        let s = this;
        if(s.disabled) {
            return;
        }
        console.log(decorateMsg(msg, color));
    },
    writeToStderr: function (msg, color) {
        console.error(decorateMsg(msg, color));
    },
    /** Color for notice print. */
    NOTICE_COLOR: 'magenta',
    /** Color for info print. */
    INFO_COLOR: 'green',
    /** Color for debug print. */
    DEBUG_COLOR: '',
    /** Color for trace print. */
    TRACE_COLOR: 'white',
    /** Color for warn print. */
    WARN_COLOR: 'yellow',
    /** Color for error print. */
    ERROR_COLOR: 'red',
    /** Color for fatal print. */
    FATAL_COLOR: 'bgRed',
    /** Alias for module:colorprint/lib~Colorprint#notice. */
    NOTICE: function () {
        let s = this;
        s.notice.apply(s, arguments);
    },
    /** Alias for module:colorprint/lib~Colorprint#info. */
    INFO: function () {
        let s = this;
        s.info.apply(s, arguments);
    },
    /** Alias for module:colorprint/lib~Colorprint#debug. */
    DEBUG: function () {
        let s = this;
        s.debug.apply(s, arguments);
    },
    /** Alias for module:colorprint/lib~Colorprint#trace. */
    TRACE: function () {
        let s = this;
        s.trace.apply(s, arguments);
    },
    /** Alias for module:colorprint/lib~Colorprint#warn. */
    WARN: function () {
        let s = this;
        s.warn.apply(s, arguments);
    },
    /** Alias for module:colorprint/lib~Colorprint#error. */
    ERROR: function () {
        let s = this;
        s.error.apply(s, arguments);
    },
    /** Alias for module:colorprint/lib~Colorprint#fatal. */
    FATAL: function () {
        let s = this;
        s.fatal.apply(s, arguments);
    },
    /** @constructs module:colorprint/lib~Colorprint */
    init: function (config) {
        let s = this;
        Object.assign(s, config);
    },
    /** Number of indent */
    indent: 0,
    /** Message prefix */
    PREFIX: '',
    /** Message suffix */
    SUFFIX: '',
    /**
     * Print notice message.
     * @param {...string} msg - Message to print.
     */
    notice: function (msg) {
        let s = this;
        s.writeToStdout(s.prepareMsg.apply(s, arguments), s.NOTICE_COLOR);
    },
    /**
     * Print info message.
     * @param {...string} msg - Message to print.
     */
    info: function (msg) {
        let s = this;
        s.writeToStdout(s.prepareMsg.apply(s, arguments), s.INFO_COLOR);
    },
    /**
     * Print debug message.
     * @param {...string} msg - Message to print.
     */
    debug: function (msg) {
        let s = this;
        s.writeToStdout(s.prepareMsg.apply(s, arguments), s.DEBUG_COLOR);
    },
    /**
     * Print trace message.
     * @param {...string} msg - Message to print.
     */
    trace: function (msg) {
        let s = this;
        s.writeToStdout(s.prepareMsg.apply(s, arguments), s.TRACE_COLOR);
    },
    /**
     * Print warn message.
     * @param {...string} msg - Message to print.
     */
    warn: function (msg) {
        let s = this;
        s.writeToStdout(s.prepareMsg.apply(s, arguments), s.WARN_COLOR);
    },
    /**
     * Print error message.
     * @param {...string} msg - Message to print.
     */
    error: function (msg) {
        let s = this;
        s.writeToStderr(s.prepareMsg.apply(s, arguments), s.ERROR_COLOR);
    },
    /**
     * Print fatal message.
     * @param {...string} msg - Message to print.
     */
    fatal: function (msg) {
        let s = this;
        s.writeToStderr(s.prepareMsg.apply(s, arguments), s.FATAL_COLOR);
    }
};


module.exports = Colorprint;
