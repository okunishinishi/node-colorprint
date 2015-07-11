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