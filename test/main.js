'use strict';

var fs = require('fs');
var test = require('tap').test;
var kickstart = require('../dist/js/kickstart');

test('module initialization', function(t) {
    var options = {
        name: 'A simple test'
    };
    kickstart.init(options, function(kickstart) {
        t.ok(typeof kickstart === 'object');
        t.equal(kickstart.toString(), JSON.stringify(options));
        t.end();
    });
});
