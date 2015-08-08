/**
 * @overview Print ansi-colored message to stdout/stderr.
 * @version 1.1.2
 * @module colorprint
 * @author {@link http://okunishitaka.com|Taka Okunishi}
 * @borrows module:colorprint/lib~Colorprint#NOTICE_COLOR as NOTICE_COLOR
 * @borrows module:colorprint/lib~Colorprint#INFO_COLOR as INFO_COLOR
 * @borrows module:colorprint/lib~Colorprint#DEBUG_COLOR as DEBUG_COLOR
 * @borrows module:colorprint/lib~Colorprint#TRACE_COLOR as TRACE_COLOR
 * @borrows module:colorprint/lib~Colorprint#ERROR_COLOR as ERROR_COLOR
 * @borrows module:colorprint/lib~Colorprint#FATAL_COLOR as FATAL_COLOR
 * @borrows module:colorprint/lib~Colorprint#NOTICE as NOTICE
 * @borrows module:colorprint/lib~Colorprint#INFO as INFO
 * @borrows module:colorprint/lib~Colorprint#DEBUG as DEBUG
 * @borrows module:colorprint/lib~Colorprint#TRACE as TRACE
 * @borrows module:colorprint/lib~Colorprint#ERROR as ERROR
 * @borrows module:colorprint/lib~Colorprint#FATAL as FATAL
 * @borrows module:colorprint/lib~Colorprint#init as init
 * @borrows module:colorprint/lib~Colorprint#PREFIX as PREFIX
 * @borrows module:colorprint/lib~Colorprint#SUFFIX as SUFFIX
 * @borrows module:colorprint/lib~Colorprint#notice as notice
 * @borrows module:colorprint/lib~Colorprint#info as info
 * @borrows module:colorprint/lib~Colorprint#debug as debug
 * @borrows module:colorprint/lib~Colorprint#trace as trace
 * @borrows module:colorprint/lib~Colorprint#error as error
 * @borrows module:colorprint/lib~Colorprint#fatal as fatal
 * @see https://github.com/okunishinishi/colorprint#readme
 * @requires {@link https://www.npmjs.org/package/cli-color|cli-color@^1.0.0}
 * @requires {@link https://www.npmjs.org/package/commander|commander@^2.8.1}
 * @requires {@link https://www.npmjs.org/package/extend|extend@^3.0.0}
 */

"use strict";

var Colorprint = require('./colorprint');

var colorprint = new Colorprint();
colorprint.version = '1.1.2';


//---------------------
// Classes
//---------------------
colorprint.Colorprint = Colorprint;

//---------------------
// Sub modules
//---------------------
/**
 * External modules installed via npm.
 * @name {@link module:colorprint/lib/ext|ext}
 * @memberof module:colorprint
 * @see module:colorprint/lib/ext
 */
colorprint.ext = require('./ext');


//---------------------
// Aliases
//---------------------

module.exports = colorprint;