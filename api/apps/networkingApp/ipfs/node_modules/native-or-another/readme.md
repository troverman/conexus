[![npm version][npmjs-img]][npmjs-url]
[![mit license][license-img]][license-url]
[![build status][travis-img]][travis-url]
[![coverage status][coveralls-img]][coveralls-url]
[![deps status][daviddm-img]][daviddm-url]

> Export either the native Promise or Bluebird (using native-or-bluebird) as deferred object.


## Install
```bash
$ npm install native-or-another
$ npm test
```


## Usage
> For more use-cases see the [tests](./test.js)

```js
var assert = require('assert');
var Deferred = require('native-or-another');
var defer = new Deferred();

defer.resolve(1);
defer.promise.then(function fulfilled(val) {
  assert.strictEqual(val, 1);
  done();
});

// catching errors
defer.reject(new Error('custom error'));
defer.promise.catch(function rejected(err) {
  assert.ok(err instanceof Error);
  assert.strictEqual(err.message, 'custom error');
  done();
});
```


## Author
**Charlike Mike Reagent**
+ [gratipay/tunnckoCore][author-gratipay]
+ [twitter/tunnckoCore][author-twitter]
+ [github/tunnckoCore][author-github]
+ [npmjs/tunnckoCore][author-npmjs]
+ [more ...][contrib-more]


## License [![MIT license][license-img]][license-url]
Copyright (c) 2014 [Charlike Mike Reagent][contrib-more], [contributors][contrib-graf].  
Released under the [`MIT`][license-url] license.


[npmjs-url]: http://npm.im/native-or-another
[npmjs-img]: https://img.shields.io/npm/v/native-or-another.svg?style=flat&label=native-or-another

[coveralls-url]: https://coveralls.io/r/tunnckoCore/native-or-another?branch=master
[coveralls-img]: https://img.shields.io/coveralls/tunnckoCore/native-or-another.svg?style=flat

[license-url]: https://github.com/tunnckoCore/native-or-another/blob/master/license.md
[license-img]: https://img.shields.io/badge/license-MIT-blue.svg?style=flat

[travis-url]: https://travis-ci.org/tunnckoCore/native-or-another
[travis-img]: https://img.shields.io/travis/tunnckoCore/native-or-another.svg?style=flat

[daviddm-url]: https://david-dm.org/tunnckoCore/native-or-another
[daviddm-img]: https://img.shields.io/david/tunnckoCore/native-or-another.svg?style=flat

[author-gratipay]: https://gratipay.com/tunnckoCore
[author-twitter]: https://twitter.com/tunnckoCore
[author-github]: https://github.com/tunnckoCore
[author-npmjs]: https://npmjs.org/~tunnckocore

[contrib-more]: http://j.mp/1stW47C
[contrib-graf]: https://github.com/tunnckoCore/native-or-another/graphs/contributors

***

_Powered and automated by [readdirp + hogan.js](https://github.com/tunnckoCore), December 21, 2014_