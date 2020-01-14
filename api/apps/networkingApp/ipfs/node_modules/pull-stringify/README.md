# pull-stringify

JSON.stringify as pull stream

## example

``` js
var pull = require('pull-stream')
var stringify = require('pull-stringify')
var toPull = require('stream-to-pull-stream')

pull(
  pull.values([A, B, C]),
  stringify(),
  toPull(process.stdout)
)
```

## usage

### `stringify = require('pull-stringify')`

``` js
pull(
  pull.values([A, B, C]),
  stringify.lines(),
  toPull(process.stdout)
)
```

### `stringify(options)`

`options` is an object with the following optional keys:

- `open`: string to be prepended to first output string
- `prefix`: string to be prepended to every non-first output string
- `suffix`: string to be appended to every output string
- `close`: string to be appended after stream is complete
- `indent`: passed as third argument to `JSON.stringify`
- `stringify`: custom function to use instead of `JSON.stringify`

`stringify(options)` returns a through [`pull-stream`](https://pull-stream.github.io).

defaults options are for [double newline delimited json](https://github.com/dominictarr/pull-json-doubleline/blob/master/index.js). double newline delimiting means you can use indented json as the stream format, which is more human readable.

```js
{
  open: '',
  prefix: '',
  suffix: '\n\n',
  close: '',
  indent: 2,
  stringify: JSON.stringify
}
```

### `stringify.ldjson(stringify)`

### `stringify.lines(stringify)`

for single newline delimited json use `stringify.ldjson()` or `stringify.lines()`:

```js
{
  suffix: '\n',
  indent: 0
}
```

you can pass a custom stringify as an argument.

```js
// compatible with JSON but supports buffers.
var JSONB = require('json-buffer')

// use defaults
stringify({ stringify: JSONB.stringify })

// or
stringify.lines(JSONB.stringify)
```


### `stringify.array(stringify)`

for a single json array use `stringify.array()`

```js
{
  open: '[',
  separator: ',\n',
  close: ']\n',
  indent: 2
}
```

## License

MIT



