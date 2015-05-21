var assert = require('assert'),
    pattern = require('..')

var result = pattern({ hello: 'world', 'message.count': pattern.match.number }).matches({
    hello: 'world',
    message: {
        count: 42
    }
})

assert(result)
