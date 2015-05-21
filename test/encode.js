var test    = require('tape'),
    pattern = require('..')

test('encode', function (t) {
    var rules = {
        'pie.flavor': 'blueberry',
        cake: pattern.match.string,
        orders: /\d+/
    }
    var encoded = pattern(rules).encode()
    t.ok(typeof encoded.orders === 'string', 'regexp is converted to string')
    t.deepEqual(encoded.cake, pattern.match.string, 'other objects preserved')

    t.end()
})
