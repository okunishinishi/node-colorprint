/**
 * Colorpint context.
 * @memberof module:colorprint/lib
 * @inner
 * @constructor Colorprint
 * @param {object} config - Context configuration.
 */

'use strict'

const formatMsg = require('./msg/format_msg')
const decorateMsg = require('./msg/decorate_msg')
const indentMsg = require('./msg/indent_msg')

/** @lends module:colorprint/lib~Colorprint */
function Colorprint () {
  this.init.apply(this, arguments)
}

Colorprint.prototype = {
  disabled: false,
  prepareMsg () {
    const msg = formatMsg.apply(formatMsg, arguments)
    return [this.PREFIX, indentMsg(msg, this.indent), this.SUFFIX].join('')
  },
  writeToStdout (msg, color) {
    if (this.disabled) {
      return
    }
    console.log(decorateMsg(msg, color))
  },
  writeToStderr (msg, color) {
    console.error(decorateMsg(msg, color))
  },
  /** Color for point print. */
  POINT_COLOR: 'blue',
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
  /** Color for error_detail print. */
  ERROR_DETAIL_COLOR: '',
  /** Color for fatal print. */
  FATAL_COLOR: 'bgRed',
  /** Alias for module:colorprint/lib~Colorprint#point. */
  POINT () {
    this.point.apply(this, arguments)
  },
  /** Alias for module:colorprint/lib~Colorprint#notice. */
  NOTICE () {
    this.notice.apply(this, arguments)
  },
  /** Alias for module:colorprint/lib~Colorprint#info. */
  INFO () {
    this.info.apply(this, arguments)
  },
  /** Alias for module:colorprint/lib~Colorprint#debug. */
  DEBUG () {
    this.debug.apply(this, arguments)
  },
  /** Alias for module:colorprint/lib~Colorprint#trace. */
  TRACE () {
    this.trace.apply(this, arguments)
  },
  /** Alias for module:colorprint/lib~Colorprint#warn. */
  WARN () {
    this.warn.apply(this, arguments)
  },
  /** Alias for module:colorprint/lib~Colorprint#error. */
  ERROR () {
    this.error.apply(this, arguments)
  },
  /** Alias for module:colorprint/lib~Colorprint#error_detail. */
  ERROR_DETAIL () {
    this.error_detail.apply(this, arguments)
  },
  /** Alias for module:colorprint/lib~Colorprint#fatal. */
  FATAL () {
    this.fatal.apply(this, arguments)
  },
  /** @constructs module:colorprint/lib~Colorprint */
  init (config = {}) {
    Object.assign(this, config)
    this.PREFIX = config.prefix || this.PREFIX
    this.SUFFIX = config.suffix || this.SUFFIX
  },
  /** Number of indent */
  indent: 0,
  /** Message prefix */
  PREFIX: '',
  /** Message suffix */
  SUFFIX: '',
  /**
   * Print point message.
   * @param {...string} msg - Message to print.
   */
  point (msg) {
    this.writeToStdout(this.prepareMsg.apply(this, arguments), this.POINT_COLOR)
  },
  /**
   * Print notice message.
   * @param {...string} msg - Message to print.
   */
  notice (msg) {
    this.writeToStdout(this.prepareMsg.apply(this, arguments), this.NOTICE_COLOR)
  },
  /**
   * Print info message.
   * @param {...string} msg - Message to print.
   */
  info (msg) {
    this.writeToStdout(this.prepareMsg.apply(this, arguments), this.INFO_COLOR)
  },
  /**
   * Print debug message.
   * @param {...string} msg - Message to print.
   */
  debug (msg) {
    this.writeToStdout(this.prepareMsg.apply(this, arguments), this.DEBUG_COLOR)
  },
  /**
   * Print trace message.
   * @param {...string} msg - Message to print.
   */
  trace (msg) {
    this.writeToStdout(this.prepareMsg.apply(this, arguments), this.TRACE_COLOR)
  },
  /**
   * Print warn message.
   * @param {...string} msg - Message to print.
   */
  warn (msg) {
    this.writeToStdout(this.prepareMsg.apply(this, arguments), this.WARN_COLOR)
  },
  /**
   * Print error message.
   * @param {...string} msg - Message to print.
   */
  error (msg) {
    this.writeToStderr(this.prepareMsg.apply(this, arguments), this.ERROR_COLOR)
  },
  /**
   * Print error_detail message.
   * @param {...string} msg - Message to print.
   */
  errorDetail (msg) {
    this.writeToStderr(this.prepareMsg.apply(this, arguments), this.ERROR_DETAIL_COLOR)
  },
  /**
   * Print fatal message.
   * @param {...string} msg - Message to print.
   */
  fatal (msg) {
    this.writeToStderr(this.prepareMsg.apply(this, arguments), this.FATAL_COLOR)
  }
}

module.exports = Colorprint
