var test    = require('tape'),
    pattern = require('..'),
    match   = pattern.match

test('match bool', function (t) {
    t.notOk(pattern({test:match.bool}).matches({ _: {cid:1} }), 'does not match undefined')
    t.notOk(pattern({test:match.bool}).matches({ _: {cid:1}, test: 'does not match' }), 'does not match string')
    t.ok(pattern({test:match.bool}).matches({ _: {cid:1}, test: false }), 'matches false')
    t.ok(pattern({test:match.bool}).matches({ _: {cid:1}, test: true }), 'matches true')

    t.end()
})
