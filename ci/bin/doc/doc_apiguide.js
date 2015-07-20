#!/usr/bin/env node

var apiguide = require('apiguide'),
    path = require('path');

var basedir = path.resolve(__dirname, '../../..');
process.chdir(basedir);

apiguide([
    'lib/**/*.js',
    'README.md'
], {
    destination: "docs/apiguide",
    verbose: true,
    templates: {
        color: '#c1ab00',
        systemName: 'colorprint',
        favicon: 'docs/favicon.png',
        copyright: "okunishitaka.com Copyright © 2015"
    }
}, function (err) {
    if (err) {
        console.error(err);
    }
});