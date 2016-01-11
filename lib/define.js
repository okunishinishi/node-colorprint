/**
 * Define a logger.
 * @memberof module:colorprint/lib
 * @function define
 * @param {object} properties - Logger prototype properties.
 * @returns {function} - A logger constructor.
 */

"use strict";

const create = require('./create');

/** @lends define */
function define(properties){
    function Logger(config){
        let s = this;
        Object.assign(s, config);
    }
    Logger.prototype = create(properties);
    return Logger;
}

module.exports = define;
