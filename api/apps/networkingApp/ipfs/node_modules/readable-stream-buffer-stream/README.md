# readable-stream-buffer-stream

[![Build status](https://travis-ci.org/achingbrain/readable-stream-buffer-stream.svg?branch=master)](https://travis-ci.org/achingbrain/readable-stream-buffer-stream?branch=master) [![Coverage Status](https://coveralls.io/repos/github/achingbrain/readable-stream-buffer-stream/badge.svg?branch=master)](https://coveralls.io/github/achingbrain/readable-stream-buffer-stream?branch=master) [![Dependencies Status](https://david-dm.org/achingbrain/readable-stream-buffer-stream/status.svg)](https://david-dm.org/achingbrain/readable-stream-buffer-stream)

> An async iterator that emits buffers containing bytes up to a certain length

## Install

```sh
$ npm install --save readable-stream-buffer-stream
```

## Usage

```javascript
const totalLength = //... a big number

// all options are optional, defaults are shown
const options = {
  chunkSize: 4096, // how many bytes will be in each buffer
  generator: (size, callback) => {
    // call the passed callback with a Buffer object `size` bytes long.
    //
    // if omitted, `Promise.resolve(crypto.randomBytes(size))` will be used
  }
}

let buffers = []

const stream = bufferStream(totalLength, options)
stream.on('data', (buf) => {
  buffers.push(buf)
})
stream.on('end', (buf) => {
  if (buf) {
    buffers.push(buf)
  }

  // `buffers` is an array of Buffers the combined length of which === totalLength
})
```
