const {test} = require('tap')
const cbor = require('../')
const CID = require('cids')

const defaults = cbor()

test('empty', t => {
  t.plan(1)
  let buffer = defaults.serialize({})
  t.same(defaults.deserialize(buffer), {})
})

test('links', t => {
  t.plan(2)
  let obj = {
    testobj: new CID('zdpuAkv7jA671owT26AnJiFXG9usHmCAW6MTzpwFJw46X1PLG'),
    testarray: [
      new CID('zdpuAkv7jA671owT26AnJiFXG9usHmCAW6MTzpwFJw46X1PLG')
    ]
  }
  let buffer = defaults.serialize(obj)
  let output = defaults.deserialize(buffer)
  t.ok(CID.isCID(output.testobj))
  t.ok(CID.isCID(output.testarray[0]))
})
