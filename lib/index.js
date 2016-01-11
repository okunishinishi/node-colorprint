/**
 * Print ansi-colored message to stdout/stderr.
 * @version 3.0.2
 * @module colorprint
 * @author {@link http://okunishitaka.com|Taka Okunishi
 * @see https://github.com/okunishinishi/node-colorprint#readme
 * @requires {@link https://www.npmjs.org/package/cli-color|cli-color@^1.1.0
 * @requires {@link https://www.npmjs.org/package/commander|commander@^2.9.0
 */

"use strict";

const Colorprint = require('./colorprint'),
    pkg = require('../package.json'),
    cliColor = require('cli-color'),
    define = require('./define'),
    create = require('./create');

let colorprint = create();
colorprint.create = create;
colorprint.define = define;
colorprint.colors = cliColor;
colorprint.Colorprint = Colorprint;
colorprint.version = pkg.version;


module.exports = colorprint;