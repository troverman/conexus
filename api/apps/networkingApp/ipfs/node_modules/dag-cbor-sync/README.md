# Synchronous seralization/deserialization for dag-cbor nodes

Usage:

```javascript
let cbor = require('dag-cbor-sync')()
let buffer = cbor.serialize({test: 1234})
let obj = cbor.deserialize(buffer)
```

With links

```javascript
let buffer = cbor.serialize(
  /* Object with single '/' property of a base encoded CID represents
     a link
  */
  {test: {'/': 'zdpuAkv7jA671owT26AnJiFXG9usHmCAW6MTzpwFJw46X1PLG'}}
)
let obj = cbor.deserialize(buffer)
Buffer.isBuffer(obj.test['/']) // true
```

## require('dag-cbor-sync')([maxsize])

Optionally set the maximum size of the cbor node. Node's larger
will throw an exception.

## serialize(object)

Returns a buffer of the binary representation of the object.

## deserialize(buffer)

Returns the native representation.

Note the link CID's will already be converted to buffers.
