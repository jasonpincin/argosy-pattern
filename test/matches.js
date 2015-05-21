var test    = require('tape'),
    pattern = require('..')

test('match value', function (t) {
    var rules = {
        pie: 'blueberry',
        cake: 'vanilla'
    }
    t.ok(pattern(rules).matches({ _: {cid:1}, pie:'blueberry', cake: 'vanilla', drink: 'milk'}), 'matches appropriate message')
    t.notOk(pattern(rules).matches({ _: {cid:1}, pie:'blueberry', cake: 'chocolate', drink: 'milk'}), 'does not match inappropriate message')

    t.end()
})

test('match nested value', function (t) {
    var rules = {
        'pie.flavor': 'blueberry',
        cake: 'vanilla'
    }
    t.ok(pattern(rules).matches({ _: {cid:1}, pie: {flavor: 'blueberry'}, cake: 'vanilla', drink: 'milk'}), 'matches appropriate message')
    t.notOk(pattern(rules).matches({ _: {cid:1}, pie:'blueberry', cake: 'vanilla', drink: 'milk'}), 'does not match inappropriate message')

    t.end()
})
