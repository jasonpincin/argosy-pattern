var test    = require('tape'),
    pattern = require('..')

test('encode', function (t) {
    var rules = {
        'pie.flavor': 'blueberry',
        cake: pattern.match.string,
        orders: /\d+/
    }
    var encoded = pattern(rules).encode()
    t.ok(typeof encoded.orders === 'object' && encoded.orders.$regexp, 'regexp is converted to an object')
    t.deepEqual(encoded.cake, pattern.match.string, 'other objects preserved')

    t.end()
})
