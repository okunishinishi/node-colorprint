colorprint
=====

Print ansi-colored message to stdout/stderr.

<!-- Badge start -->

[![Build Status][my_travis_badge_url]][my_travis_url]
[![Code Climate][my_codeclimate_badge_url]][my_codeclimate_url]
[![Code Coverage][my_codeclimate_coverage_badge_url]][my_codeclimate_url]
[![dependencies][my_gemnasium_badge_url]][my_gemnasium_url]
[![npm version][my_npm_budge_url]][my_npm_url]
[![Gratipay][my_gratipay_budge_url]][my_gratipay_url]

<!-- Badge end -->

<img src="assets/images/screenshot.png"/>

<!-- Table start -->

Table of Contents
-----
- [How to](#01-howto)
    - [Usage](#01-howto--usage)
    - [Install](#01-howto--install)
- [Using via cli](#02-cli)
    - [CLI Usage](#02-cli--c-l-i--usage)
    - [Install global for CLI usage.](#02-cli--install-global-for--c-l-i-usage-)
- [Customizing](#03-customizing)
    - [Customize the whole module.](#03-customizing--customize-the-whole-module-)
    - [Create new context to customize.](#03-customizing--create-new-context-to-customize-)
- [Links](#09-links)
    - [Website](#09-links--website)
    - [Documents](#09-links--documents)
    - [Reports](#09-links--reports)
- [License](#10-license)
- [About this project](#11-project)
    - [Author](#11-project--author)
    - [Donation](#11-project--donation)

<!-- Table end -->


<!-- Sections start -->

<a name="01-howto"></a>
How to
-------

<a name="01-howto--usage"></a>
### Usage

```javascript
var colorpint = require('colorpint');
colorpint.info('This is INFO'); //Pipe to stdout with green color.
colorpint.debug('This is DEBUG'); //Pipe to stdout with  color.
colorpint.trace('This is TRACE'); //Pipe to stdout with white color.
colorpint.error('This is ERROR'); //Pipe to stderr with red color.
colorpint.fatal('This is FATAL'); //Pipe to stderr with bgRed color.

```

Fore more detail, see [API Guide of colorpint functions][my_lib_apiguide_url].

<a name="01-howto--install"></a>
### Install

```
$ npm install colorprint --save
```

<a name="02-cli"></a>
Using via cli
-------

<a name="02-cli--c-l-i--usage"></a>
### CLI Usage

```bash
#!/bin/bash

colorpint info "This is INFO from CLI" # Pipe to stdout with green color.
colorpint debug "This is DEBUG from CLI" # Pipe to stdout with  color.
colorpint trace "This is TRACE from CLI" # Pipe to stdout with white color.
colorpint error "This is ERROR from CLI" # Pipe to stderr with red color.
colorpint fatal "This is FATAL from CLI" # Pipe to stderr with bgRed color.

```

Fore more detail, see [API Guide of colorpint functions][my_lib_apiguide_url].



<a name="02-cli--install-global-for--c-l-i-usage-"></a>
### Install global for CLI usage.

```
$ npm install colorprint --g
```

<a name="03-customizing"></a>
Customizing
--------

<a name="03-customizing--customize-the-whole-module-"></a>
### Customize the whole module.

```javascript
var colorprint = require('colorprint');
colorprint.PREFIX='Yeah!';
colorprint.INFO_COLOR='blue';
colorprint.info('This will be blue with prefix.');

```

<a name="03-customizing--create-new-context-to-customize-"></a>
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

<a name="09-links"></a>
Links
------

<a name="09-links--website"></a>
### Website

+ [colorprint](https://github.com/okunishinishi/colorprint#readme)
+ [colorprint @npm][my_npm_url]
+ [colorprint @github][my_repo_url]


<a name="09-links--documents"></a>
### Documents

+ [API Guide][my_apiguide_url]

<a name="09-links--reports"></a>
### Reports

+ [Build Status @travis][my_travis_url]
+ [Analysis Result @codeclimate][my_codeclimate_url]
+ [Issues @github](https://github.com/okunishinishi/colorprint/issues)
+ [Coverage Report][my_coverage_url]

<a name="10-license"></a>
License
-------
This software is released under the [MIT License][my_license_url].

<a name="11-project"></a>
About this project
--------

[![Bitdeli Badge][my_bitdeli_badge_url]][bitdeli_url]

<a name="11-project--author"></a>
### Author

+ [Taka Okunishi](http://okunishitaka.com)

<a name="11-project--donation"></a>
### Donation

Support this project and [others by okunishinishi][my_gratipay_url] via [gratipay][my_gratipay_url].

[<img src="https://cdn.rawgit.com/gratipay/gratipay-badge/2.3.0/dist/gratipay.svg" alt="Support via Gratipay"/>][my_gratipay_url]


<!-- Sections end -->


<!-- Links start -->

[nodejs_url]: http://nodejs.org/
[npm_url]: https://www.npmjs.com/
[nvm_url]: https://github.com/creationix/nvm
[bitdeli_url]: https://bitdeli.com/free
[my_bitdeli_badge_url]: https://d2weczhvl823v0.cloudfront.net/okunishinishi/node-colorprint/trend.png
[my_repo_url]: https://github.com/okunishinishi/node-colorprint
[my_travis_url]: http://travis-ci.org/okunishinishi/node-colorprint
[my_travis_badge_url]: http://img.shields.io/travis/okunishinishi/node-colorprint.svg?style=flat
[my_license_url]: https://github.com/okunishinishi/node-colorprint/blob/master/LICENSE
[my_codeclimate_url]: http://codeclimate.com/github/okunishinishi/node-colorprint
[my_codeclimate_badge_url]: http://img.shields.io/codeclimate/github/okunishinishi/node-colorprint.svg?style=flat
[my_codeclimate_coverage_badge_url]: http://img.shields.io/codeclimate/coverage/github/okunishinishi/node-colorprint.svg?style=flat
[my_apiguide_url]: http://okunishinishi.github.io/node-colorprint/apiguide
[my_lib_apiguide_url]: http://okunishinishi.github.io/node-colorprint/apiguide/module-colorprint_lib.html
[my_coverage_url]: http://okunishinishi.github.io/node-colorprint/coverage/lcov-report
[my_coverage_report_url]: http://okunishinishi.github.io/node-colorprint/coverage/lcov-report/
[my_gratipay_url]: https://gratipay.com/okunishinishi/
[my_gratipay_budge_url]: http://img.shields.io/gratipay/okunishinishi.svg?style=flat
[my_npm_url]: http://www.npmjs.org/package/colorprint
[my_npm_budge_url]: http://img.shields.io/npm/v/colorprint.svg?style=flat
[my_tag_url]: http://github.com/okunishinishi/node-colorprint/releases/tag/
[my_tag_badge_url]: http://img.shields.io/github/tag/okunishinishi/node-colorprint.svg?style=flat
[my_gemnasium_url]: http://gemnasium.com/okunishinishi/node-colorprint
[my_gemnasium_badge_url]: http://img.shields.io/gemnasium/okunishinishi/node-colorprint.svg?style=flat

<!-- Links end-->

