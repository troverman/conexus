const test = require('tape')
const pull = require('pull-stream')
const Pushable = require('pull-pushable')
const stringify = require('./')
const split = require('pull-split')

const values = [
  { name: 'air' },
  { name: 'box' },
  { name: 'cat' }
]

test('stringify as default', function (t) {
  const expected = `{
  "name": "air"
}

{
  "name": "box"
}

{
  "name": "cat"
}

`

  testValues(t, stringify(), expected)
})

test('stringify as array', function (t) {
  const expected = `[{
  "name": "air"
},
{
  "name": "box"
},
{
  "name": "cat"
}]
`

  testValues(t, stringify.array(), expected)
})

test('stringify as ldjson', function (t) {
  const expected = `{"name":"air"}
{"name":"box"}
{"name":"cat"}
`

  testValues(t, stringify.ldjson(), expected)
})

test('stringify delimits after value', function (t) {
  const pushable = Pushable()

  var i = 0
  pull(
    pushable,
    stringify(),
    split('\n\n', function (value) {
      return value ? JSON.parse(value) : null
    }),
    pull.drain(function (actual) {
      const expected = values[i++]
      t.deepEqual(actual, expected)

      if (i === values.length) {
        pushable.end()
        t.end()
      }
    })
  )

  Object.keys(values).forEach(function (index) {
    pushable.push(values[index])
  })
})

function testValues (t, through, expected) {
  pull(
    pull.values(values.slice()),
    through,
    pull.concat(function (err, actual) {
      if (err) { return t.end(err) }
      t.equal(actual, expected)
      t.end()
    })
  )
}
