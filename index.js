var assert = require('assert'),
    equal  = require('deep-equal'),
    get    = require('object-path-get'),
    clone  = require('clone'),
    match  = require('./match')

module.exports = function (rules) {
    assert(rules, 'pattern requires matching rules')

    var pattern = clone(rules)
    Object.defineProperties(pattern, {
        matches: {value: function (message) {
            var patternKeys = Object.keys(pattern)
            return patternKeys.filter(function patternKeyMatch (k) {
                if (pattern[k] instanceof RegExp)
                    return get(message, k) !== undefined && String(get(message, k)).match(pattern[k])
                else if (equal(pattern[k], match.number))
                    return typeof get(message, k) === 'number'
                else if (equal(pattern[k], match.string))
                    return typeof get(message, k) === 'string'
                else if (equal(pattern[k], match.bool))
                    return typeof get(message, k) === 'boolean'
                else if (equal(pattern[k], match.defined))
                    return typeof get(message, k) !== 'undefined'
                else if (equal(pattern[k], match.undefined))
                    return typeof get(message, k) === 'undefined'
                else
                    return equal(get(message, k), pattern[k])
            }).length === patternKeys.length
        }},
        encode: {value: function () {
            function isRegExp (k) {
                return pattern[k] instanceof RegExp
            }
            function isNotRegExp (k) {
                return !isRegExp(k)
            }
            var regExps = Object.keys(pattern).filter(isRegExp)
            var nonRegExps = Object.keys(pattern).filter(isNotRegExp)

            return regExps.map(function regexpProp (k) {
                return {key: k, value: pattern[k].toString()}
            }).concat(nonRegExps.map(function nonRegExpProp (k) {
                return {key: k, value: pattern[k]}
            })).reduce(function combine (result, pattern) {
                result[pattern.key] = pattern.value
                return result
            }, {})
        }}
    })

    return pattern
}
module.exports.match = match
