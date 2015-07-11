/**
 * External modules, installed via {@link https://www.npmjs.com|npm}.
 * @module coz/lib/ext
 */

"use strict";

module.exports = {
    /**
     * This is an alias for {@link https://www.npmjs.org/package/cli-color|cli-color@^1.0.0} module.
     */
    get cliColor() { return require('cli-color'); },
    /**
     * This is an alias for {@link https://www.npmjs.org/package/extend|extend@^3.0.0} module.
     */
    get extend() { return require('extend'); }
};