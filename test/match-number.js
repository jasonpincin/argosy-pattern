var test    = require('tape'),
    pattern = require('..'),
    match   = pattern.match

test('match number', function (t) {
    t.notOk(pattern({test:match.number}).matches({ _: {cid:1} }), 'does not match undefined')
    t.notOk(pattern({test:match.number}).matches({ _: {cid:1}, test: 'does not match' }), 'does not match string')
    t.notOk(pattern({test:match.number}).matches({ _: {cid:1}, test: false }), 'does not match false')
    t.notOk(pattern({test:match.number}).matches({ _: {cid:1}, test: true }), 'does not match true')
    t.ok(pattern({test:match.number}).matches({ _: {cid:1}, test: 123 }), 'matches number')

    t.end()
})
