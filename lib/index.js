/**
 * Print ansi-colored message to stdout/stderr.
 * @version 6.0.3
 * @module colorprint
 * @author {@link http://okunishitaka.com|Taka Okunishi
 * @see https://github.com/okunishinishi/node-colorprint#readme
 * @requires {@link https://www.npmjs.org/package/cli-color|cli-color@^1.1.0
 * @requires {@link https://www.npmjs.org/package/supports-color|supports-color@^7.0.0
 */

'use strict'

const Colorprint = require('./colorprint')
const cliColor = require('cli-color')
const define = require('./define')
const create = require('./create')

let colorprint = create()
Object.assign(colorprint, {
 create,
 define,
 Colorprint,
 colors: cliColor
})

module.exports = colorprint
