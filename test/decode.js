var test    = require('tape'),
    pattern = require('..')

test('encode', function (t) {
    var rules = {
        'pie.flavor': 'blueberry',
        cake        : pattern.match.string,
        orders      : /\d+/
    }
    var p = pattern(rules)
    var decoded = pattern.decode(p.encode())
    t.deepEqual(decoded, p, 'decode restores pattern')
    t.ok(decoded.matches, 'decoded object has a matches function')
    t.ok(decoded.encode, 'decoded object has an encode function')

    t.end()
})
