/**
 * kickstart-js - Using a Universal Module Definition (UMD) pattern to create a library or module that offers compatibility with the most popular script loaders of the day.
 * @version v1.1.3
 * @link http://cheton.github.io/kickstart.js/
 * @license MIT
 */
(function(root, factory) {
    // Set up Kickstart appropriately for the environment. Start with AMD.
    if (typeof define === "function" && define.amd) {
        define([ "jquery", "exports" ], function($, exports) {
            // Export global even in AMD case in case this script is loaded with
            // others that may still expect a global Kickstart.
            return root.Kickstart = factory(root, exports, $);
        });
    } else if (typeof exports !== "undefined") {
        factory(root, exports);
    } else {
        root.Kickstart = factory(root, {}, root.jQuery || root.Zepto || root.$);
    }
})(this, function(root, Kickstart, $) {
    // Save the previous value of the 'Kickstart' variable, so that it can be restored later on, if 'noConflict' is used.
    var _Kickstart = root.Kickstart;
    // Current version of the library. Keep in sync with 'package.json'.
    Kickstart.VERSION = "1.1.3";
    // Runs in *noConflict* mode, returning the `Kickstart` variable to its previous owner.
    // Returns a reference to this object.
    Kickstart.noConflict = function() {
        root.Kickstart = _Kickstart;
        return this;
    };
    // defaults
    var options = {
        name: "Kickstart"
    };
    var _extend = function(target, source) {
        if (!source || typeof source === "function") {
            return target;
        }
        for (var attr in source) {
            if (source.hasOwnProperty(attr)) {
                target[attr] = source[attr];
            }
        }
        return target;
    };
    var extend = $ ? $.extend : _extend;
    Kickstart.init = function(o, cb) {
        if (typeof o === "function") {
            cb = o;
            o = {};
        }
        o = o || {};
        // override defaults with passed in options
        extend(options, o);
        if (typeof cb === "function") {
            cb(Kickstart);
        }
    };
    Kickstart.toString = function() {
        return JSON.stringify(options);
    };
    return Kickstart;
});