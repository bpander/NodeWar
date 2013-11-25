define(function (require) {
    'use strict';

    var Util = {};


    Util.noop = function () {};


    Util.hasParent = function (element, parent) {
        var test = element;
        var isMatch = false;
        while ((test = test.parentNode) && test !== document) {
            if (test === parent) {
                isMatch = true;
                break;
            }
        }
        return isMatch
    };


    return Util;
});