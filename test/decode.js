var test    = require('tape'),
    pattern = require('..')

test('encode', function (t) {
    var rules = {
        'pie.flavor': 'blueberry',
        cake: pattern.match.string,
        orders: /\d+/
    }
    var p = pattern(rules)
    var decoded = pattern.decode(p.encode())
    t.deepEqual(decoded, p, 'decode restores pattern')
    // t.ok(typeof encoded.orders === 'string', 'regexp is converted to string')
    // t.deepEqual(encoded.cake, pattern.match.string, 'other objects preserved')

    t.end()
})
