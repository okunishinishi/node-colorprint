/**
 * Print ansi-colored message to stdout/stderr.
 * @version 2.0.4
 * @module colorprint
 * @author {@link http://okunishitaka.com|Taka Okunishi
 * @see https://github.com/okunishinishi/node-colorprint#readme
 * @requires {@link https://www.npmjs.org/package/cli-color|cli-color@^1.0.0
 * @requires {@link https://www.npmjs.org/package/commander|commander@^2.8.1
 * @requires {@link https://www.npmjs.org/package/extend|extend@^3.0.0
 */

"use strict";

var Colorprint = require('./colorprint'),
    pkg = require('../package.json'),
    define = require('./define'),
    create = require('./create');

var colorprint = create();
colorprint.create = create;
colorprint.define = define;
colorprint.Colorprint = Colorprint;
colorprint.version = pkg.version;


module.exports = colorprint;