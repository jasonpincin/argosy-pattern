var test    = require('tape'),
    pattern = require('..'),
    match   = pattern.match

test('match defined', function (t) {
    t.notOk(pattern({test:match.defined}).matches({ _: {cid:1} }), 'does not match undefined')
    t.ok(pattern({test:match.defined}).matches({ _: {cid:1}, test: 'does match' }), 'does not match string')
    t.ok(pattern({test:match.defined}).matches({ _: {cid:1}, test: false }), 'matches false')
    t.ok(pattern({test:match.defined}).matches({ _: {cid:1}, test: true }), 'matches true')

    t.end()
})
