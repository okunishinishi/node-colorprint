/**
 * @overview Print ansi-colored message to stdout/stderr.
 * @version 1.0.0
 * @module colorprint
 * @author {@link http://okunishitaka.com|Taka Okunishi}
 * @license {@link MIT|https://github.com/okunishinishi/node-colorprint/blob/master/LICENSE}
 * @borrows module:colorprint~Colorprint#INFO_COLOR as INFO_COLOR
 * @borrows module:colorprint~Colorprint#DEBUG_COLOR as DEBUG_COLOR
 * @borrows module:colorprint~Colorprint#TRACE_COLOR as TRACE_COLOR
 * @borrows module:colorprint~Colorprint#ERROR_COLOR as ERROR_COLOR
 * @borrows module:colorprint~Colorprint#FATAL_COLOR as FATAL_COLOR
 * @borrows module:colorprint~Colorprint#INFO as INFO
 * @borrows module:colorprint~Colorprint#DEBUG as DEBUG
 * @borrows module:colorprint~Colorprint#TRACE as TRACE
 * @borrows module:colorprint~Colorprint#ERROR as ERROR
 * @borrows module:colorprint~Colorprint#FATAL as FATAL
 * @borrows module:colorprint~Colorprint#init as init
 * @borrows module:colorprint~Colorprint#PREFIX as PREFIX
 * @borrows module:colorprint~Colorprint#SUFFIX as SUFFIX
 * @borrows module:colorprint~Colorprint#info as info
 * @borrows module:colorprint~Colorprint#debug as debug
 * @borrows module:colorprint~Colorprint#trace as trace
 * @borrows module:colorprint~Colorprint#error as error
 * @borrows module:colorprint~Colorprint#fatal as fatal
 * @see https://github.com/okunishinishi/colorprint#readme
 * @requires {@link https://www.npmjs.org/package/cli-color|cli-color@^1.0.0}
 * @requires {@link https://www.npmjs.org/package/commander|commander@^2.8.1}
 * @requires {@link https://www.npmjs.org/package/extend|extend@^3.0.0}
 */

"use strict";

var Colorprint = require('./colorprint');

var colorprint = new Colorprint();
colorprint.version = '1.0.0';

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