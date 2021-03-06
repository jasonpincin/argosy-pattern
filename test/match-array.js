var test    = require('tape'),
    pattern = require('..'),
    match   = pattern.match

test('match array', function (t) {
    t.notOk(pattern({test:match.array}).matches({ _: {cid:1} }), 'does not match undefined')
    t.notOk(pattern({test:match.array}).matches({ _: {cid:1}, test: 'does not match' }), 'does not match string')
    t.notOk(pattern({test:match.array}).matches({ _: {cid:1}, test: false }), 'does not match false')
    t.notOk(pattern({test:match.array}).matches({ _: {cid:1}, test: true }), 'does not match true')
    t.notOk(pattern({test:match.array}).matches({ _: {cid:1}, test: 123 }), 'does not match number')
    t.ok(pattern({test:match.array}).matches({ _: {cid:1}, test: [1,2] }), 'does match array')

    t.end()
})
