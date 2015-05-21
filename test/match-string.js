var test    = require('tape'),
    pattern = require('..'),
    match   = pattern.match

test('match string', function (t) {
    t.notOk(pattern({test:match.string}).matches({ _: {cid:1} }), 'does not match undefined')
    t.ok(pattern({test:match.string}).matches({ _: {cid:1}, test: 'does match' }), 'does match string')
    t.notOk(pattern({test:match.string}).matches({ _: {cid:1}, test: false }), 'does not match false')
    t.notOk(pattern({test:match.string}).matches({ _: {cid:1}, test: true }), 'does not match true')
    t.notOk(pattern({test:match.string}).matches({ _: {cid:1}, test: true }), 'does not match number')

    t.end()
})
