/**
 * @file index.js
 * @author ienix(enix@foxmail.com)
 *
 * @since 2017/11/9
 */
/* global module, require*/

const REM = require('rem-core');
const LOADER_UTILS = require('loader-utils');

module.exports = function loader(content) {
    const CONFIG = LOADER_UTILS.getOptions(this);

    return REM(content, null, CONFIG);
};
