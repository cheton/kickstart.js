/*! kickstart - v1.0.0 - 2014-12-01 */(function(root, factory) {
    if (typeof define === "function" && define.amd) {
        define([ "jquery", "exports" ], function($, exports) {
            root.Kickstart = factory(root, exports, $);
        });
    } else if (typeof exports !== "undefined") {
        factory(root, exports);
    } else {
        root.Kickstart = factory(root, {}, root.jQuery || root.Zepto || root.$);
    }
})(this, function(root, Kickstart, $) {
    var _Kickstart = root.Kickstart;
    Kickstart.VERSION = "1.0.0";
    Kickstart.noConflict = function() {
        root.Kickstart = _Kickstart;
        return this;
    };
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