colorprint
==========

<!-- Badge Start -->
<a name="badges"></a>

[![Build Status][bd_travis_shield_url]][bd_travis_url]
[![Code Climate][bd_codeclimate_shield_url]][bd_codeclimate_url]
[![Code Coverage][bd_codeclimate_coverage_shield_url]][bd_codeclimate_url]
[![npm Version][bd_npm_shield_url]][bd_npm_url]

[bd_repo_url]: https://github.com/okunishinishi/node-colorprint
[bd_travis_url]: http://travis-ci.org/okunishinishi/node-colorprint
[bd_travis_shield_url]: http://img.shields.io/travis/okunishinishi/node-colorprint.svg?style=flat
[bd_license_url]: https://github.com/okunishinishi/node-colorprint/blob/master/LICENSE
[bd_codeclimate_url]: http://codeclimate.com/github/okunishinishi/node-colorprint
[bd_codeclimate_shield_url]: http://img.shields.io/codeclimate/github/okunishinishi/node-colorprint.svg?style=flat
[bd_codeclimate_coverage_shield_url]: http://img.shields.io/codeclimate/coverage/github/okunishinishi/node-colorprint.svg?style=flat
[bd_gemnasium_url]: https://gemnasium.com/okunishinishi/node-colorprint
[bd_gemnasium_shield_url]: https://gemnasium.com/okunishinishi/node-colorprint.svg
[bd_npm_url]: http://www.npmjs.org/package/colorprint
[bd_npm_shield_url]: http://img.shields.io/npm/v/colorprint.svg?style=flat

<!-- Badge End -->


<!-- Description Start -->
<a name="description"></a>

Print ansi-colored message to stdout/stderr.

<!-- Description End -->


<!-- Overview Start -->
<a name="overview"></a>
<img src="assets/images/screenshot.png"/>

<!-- Overview End -->

<!-- Sections Start -->
<a name="sections"></a>

Installation
-----

```bash
npm install colorprint --save
```

Usage
-------

```javascript
var colorpint = require('colorpint');

colorpint.notice('This is NOTICE'); //Pipe to stdout with magenta color.
colorpint.info('This is INFO'); //Pipe to stdout with green color.
colorpint.debug('This is DEBUG'); //Pipe to stdout with  color.
colorpint.trace('This is TRACE'); //Pipe to stdout with white color.
colorpint.error('This is ERROR'); //Pipe to stderr with red color.
colorpint.fatal('This is FATAL'); //Pipe to stderr with bgRed color.

```

Using via CIL
-------

### CLI Usage

```bash
#!/bin/bash

colorpint notice "This is NOTICE from CLI" # Pipe to stdout with magenta color.
colorpint info "This is INFO from CLI" # Pipe to stdout with green color.
colorpint debug "This is DEBUG from CLI" # Pipe to stdout with  color.
colorpint trace "This is TRACE from CLI" # Pipe to stdout with white color.
colorpint error "This is ERROR from CLI" # Pipe to stderr with red color.
colorpint fatal "This is FATAL from CLI" # Pipe to stderr with bgRed color.


```

Fore more detail, see [API Guide of colorpint functions](http://okunishinishi.github.io/node-colorprint/apiguide/module-colorprint_lib.html).


### Install global for CLI usage.

```
$ npm install colorprint -g
```

Customizing
--------

### Customize the whole module.

```javascript
var colorprint = require('colorprint');
colorprint.PREFIX='Yeah!';
colorprint.INFO_COLOR='blue';
colorprint.info('This will be blue with prefix.');

```

### Create new context to customize.

```javascript
var Colorprint = require('colorprint/lib/colorprint');
var colorprint = new Colorprint({
    PREFIX: '[Foo]',
    INFO_COLOR: 'blue'
});
colorprint.info('This will be blue with prefix.');


```

colorpint is using [cli-color](https://github.com/medikoo/cli-color) for coloring and you can see [available colors here](https://github.com/medikoo/cli-color#colors).


<!-- Sections Start -->


<!-- LICENSE Start -->
<a name="license"></a>

License
-------
This software is released under the [MIT License](https://github.com/okunishinishi/node-colorprint/blob/master/LICENSE).

<!-- LICENSE End -->


