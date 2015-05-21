var test    = require('tape'),
    pattern = require('..'),
    match   = pattern.match

test('match undefined', function (t) {
    t.ok(pattern({test:match.undefined}).matches({ _: {cid:1} }), 'does match undefined')
    t.notOk(pattern({test:match.undefined}).matches({ _: {cid:1}, test: 'does not match' }), 'does not match string')
    t.notOk(pattern({test:match.undefined}).matches({ _: {cid:1}, test: false }), 'does not match false')
    t.notOk(pattern({test:match.undefined}).matches({ _: {cid:1}, test: true }), 'does not match true')
    t.notOk(pattern({test:match.undefined}).matches({ _: {cid:1}, test: true }), 'does not match number')

    t.end()
})
