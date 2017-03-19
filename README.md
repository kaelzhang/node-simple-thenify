[![Build Status](https://travis-ci.org/kaelzhang/node-simple-thenify.svg?branch=master)](https://travis-ci.org/kaelzhang/node-simple-thenify)
<!-- optional appveyor tst
[![Windows Build Status](https://ci.appveyor.com/api/projects/status/github/kaelzhang/node-simple-thenify?branch=master&svg=true)](https://ci.appveyor.com/project/kaelzhang/node-simple-thenify)
-->
<!-- optional npm version
[![NPM version](https://badge.fury.io/js/simple-thenify.svg)](http://badge.fury.io/js/simple-thenify)
-->
<!-- optional npm downloads
[![npm module downloads per month](http://img.shields.io/npm/dm/simple-thenify.svg)](https://www.npmjs.org/package/simple-thenify)
-->
<!-- optional dependency status
[![Dependency Status](https://david-dm.org/kaelzhang/node-simple-thenify.svg)](https://david-dm.org/kaelzhang/node-simple-thenify)
-->

# simple-thenify

Make sure that a function will return a promise (thenable).

If a function does not return a promise, it will `promise.resolve` the return value.

## Install

```sh
$ npm install simple-thenify --save
```

## Usage

```js
const thenify = require('simple-thenify')
const fn = thenify(x => x + 1)

fn(1).then(console.log) // 2
```

## License

MIT
