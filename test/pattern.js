var test    = require('tape'),
    pattern = require('..'),
    match   = require('../match')

test('pattern', function (t) {

    t.ok(pattern.match === match, 'exposes matchers')
    t.ok(typeof pattern === 'function', 'is a function')

    var p = pattern({})
    t.ok(typeof p.matches === 'function', 'creates objects with matches fucntion')
    t.ok(typeof p.encode === 'function', 'creates objects with encode fucntion')

    t.throws(pattern, 'requires a match ruleset')
    t.end()
})
