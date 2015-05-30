# argosy-pattern

[![NPM version](https://badge.fury.io/js/argosy-pattern.png)](http://badge.fury.io/js/argosy-pattern)
[![Build Status](https://travis-ci.org/jasonpincin/argosy-pattern.svg?branch=master)](https://travis-ci.org/jasonpincin/argosy-pattern)
[![Coverage Status](https://coveralls.io/repos/jasonpincin/argosy-pattern/badge.png?branch=master)](https://coveralls.io/r/jasonpincin/argosy-pattern?branch=master)
[![Davis Dependency Status](https://david-dm.org/jasonpincin/argosy-pattern.png)](https://david-dm.org/jasonpincin/argosy-pattern)

Test messages against Argosy patterns.

## example

```javascript
var assert        = require('assert'),
    argosyPattern = require('argosy-pattern'),
    match         = require('argosy-pattern/match')

var pattern = argosyPattern({ hello: 'world', 'message.count': match.number })

var result = pattern.matches({
    hello: 'world',
    message: {
        count: 42
    }
})

assert(result)
```

## api

```javascript
var argosyPattern = require('argosy-pattern')
```

### pattern = argosyPattern(object)

Create an Argosy pattern, given an object containing rules. Each key in the object represents a key 
that is to be validated in compared message objects. These keys will be tested to have the same literal 
value, matching regular expression, or to be of a given type using the matching system described below. 
Nested keys may be matched using the dot notation. For example, `{'message.count':1}` equates to 
`{message: {count: 1}}`.

### pattern.matches(object)

Returns true of the given object matches the pattern, or false otherwise. 

### pattern.encode()

Returns an object, representing the pattern, suitable for serialization. This is used internally within 
Argosy.

## matching

```javascript
var match = require('argosy-pattern/match')
```

Argosy patterns support more than literal values. The values of the pattern keys may be any of the following in 
addition to literal values:

* A regular expression - values will be tested against the regular expression to determine a match
* `match.number` - matches any number
* `match.string` - matches any string
* `match.bool` - matches `true` or `false`
* `match.array` - matches any array
* `match.object` - matches any truthy object
* `match.defined` - matches anything other than `undefined`
* `match.undefined` - matches `undefined` or missing key

## testing

`npm test [--dot | --spec] [--grep=pattern]`

Specifying `--dot` or `--spec` will change the output from the default TAP style. 
Specifying `--grep` will only run the test files that match the given pattern.

## coverage

`npm run coverage [--html]`

This will output a textual coverage report. Including `--html` will also open 
an HTML coverage report in the default browser.
