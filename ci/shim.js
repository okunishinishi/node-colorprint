#!/usr/bin/env node

/**
 * Compile to shim source
 */

'use strict'

process.chdir(`${__dirname}/..`)

const { runTasks } = require('ape-tasking')
const ababel = require('ababel')

runTasks('shims', [
  () => ababel('**/*.js', {
    cwd: 'lib',
    out: 'shim/browser'
  })
], true)
