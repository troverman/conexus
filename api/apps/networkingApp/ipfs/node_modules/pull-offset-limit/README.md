# pull-offset-limit
[![npm version][2]][3] [![build status][4]][5] [![test coverage][6]][7]
[![downloads][8]][9] [![js-standard-style][10]][11]

 A pull-stream that filters until X elements, and stops streaming after Y elements. Useful for pagination purposes.

## Usage
```js
const pull = require('pull-stream')
const split = require('pull-split')
const offsetLimit = require('pull-offset-limit')
 
pull(
  textStream, // some text stream
  split(), // split on new lines
  offsetLimit(5, 20), // after 5 lines, take 20
  output
)

```

## API
### 

### `offsetLimit = require('pull-offset-limit')(offset, limit, onLimit)`
Create a new offsetLimit through stream.
- __offset:__ if set, filters stream until offset is reached
- __limit:__ if set, stops stream when limit is reached
- __onLimit:__ if set, runs when limit is reached

## Installation
```sh
$ npm install pull-offset-limit
```

## License
[MIT](https://tldrlegal.com/license/mit-license)

[1]: https://nodejs.org/api/documentation.html#documentation_stability_index
[2]: https://img.shields.io/npm/v/pull-offset-limit.svg?style=flat-square
[3]: https://npmjs.org/package/pull-offset-limit
[4]: https://img.shields.io/travis/JDvorak/pull-offset-limit/master.svg?style=flat-square
[5]: https://travis-ci.org/JDvorak/pull-offset-limit
[6]: https://img.shields.io/codecov/c/github/JDvorak/pull-offset-limit/master.svg?style=flat-square
[7]: https://codecov.io/github/JDvorak/pull-offset-limit
[8]: http://img.shields.io/npm/dm/pull-offset-limit.svg?style=flat-square
[9]: https://npmjs.org/package/pull-offset-limit
[10]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[11]: https://github.com/feross/standard
