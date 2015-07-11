/**
 * Colorpint context.
 * @memberof module:colorprint/lib
 * @inner
 * @constructor Colorprint
 * @param {object} config - Context configuration.
 */

"use strict";

var ext = require('./ext'),
    formatMsg = require('./format_msg'),
    extend = ext.extend;

/** @lends Colorprint */
function Colorprint() {
    var s = this;
    s.init.apply(s, arguments);
}

Colorprint.prototype = {
    /** @constructs Colorprint */
    init: function (config) {
        var s = this;
        extend(s, config);
    },
    /** Message prefix */
    prefix: '',
    /** Message suffix */
    suffix: ''
};


module.exports = Colorprint;
