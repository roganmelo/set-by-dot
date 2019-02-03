# Set by dot

🌳 Set a value to an object using dot path.

<a href="https://nodei.co/npm/set-by-dot/">
  <img src="https://nodei.co/npm/set-by-dot.png?downloads=true">
</a>

[![NPM version](https://badge.fury.io/js/set-by-dot.png)](http://badge.fury.io/js/set-by-dot)
[![Build Status](https://travis-ci.org/roganmelo/set-by-dot.svg?branch=master)](https://travis-ci.org/roganmelo/set-by-dot)![Code Coverage 100%](https://img.shields.io/badge/code%20coverage-100%25-green.svg?style=flat-square)[![ISC License](https://img.shields.io/badge/license-ISC-blue.svg?style=flat-square)](https://github.com/roganmelo/set-by-dot/blob/master/LICENSE)[![NodeJS](https://img.shields.io/badge/node-10.15.x-brightgreen.svg?style=flat-square)](https://github.com/roganmelo/fn-spy/blob/master/package.json#L50)

### API
`import setByDot from 'set-by-dot';`

`setByDot({}, 'path', 'value');`


### Usage

```js
  import setByDot from 'set-by-dot';

  const obj = {
    a: { b: 'c' },
    b: [{ c: 'a' }]
  };

  setByDot(obj, 'a.b', 'a') // { a: { b: 'a' }, b: [{ c: 'a' }] }
  setByDot(obj, 'a', 'c');  // { a: 'c', b: [{ c: 'a' }] }
  setByDot(obj, 'a.b.c', 'b');  // { a: { b: 'a', c: 'b' }, b: [{ c: 'a' }] }
  setByDot(obj);  // { a: { b: 'a' }, b: [{ c: 'a' }] }
```
