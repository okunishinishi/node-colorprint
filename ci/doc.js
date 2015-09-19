#!/usr/bin/env node

/**
 * Generate doc.
 */

"use strict";

process.chdir(__dirname + '/..');

var apeTasking = require('ape-tasking'),
    coz = require('coz'),
    apiguide = require('apiguide');

var pkg = require('../package.json');

apeTasking.runTasks('doc', [
    function (callback) {
        apiguide([
            'lib/**/*.js',
            'README.md'
        ], {
            destination: "doc/apiguide",
            verbose: true,
            templates: {
                color: '#c1ab00',
                systemName: pkg.name,
                copyright: "okunishitaka.com Copyright © 2015"
            }
        }, callback);
    }
], true);