import bufferStream from './'
import test from 'ava'

test.cb('Should emit bytes', (t) => {
  const expected = 100
  const buffers = []

  const stream = bufferStream(expected)
  stream.on('data', (buf) => {
    buffers.push(buf)
  })
  stream.on('end', () => {
    t.is(buffers.length, 1)
    t.is(buffers[0].length, expected)
    t.end()
  })
})

test.cb('Should emit a number of buffers', (t) => {
  const expected = 100
  const chunkSize = 10
  const buffers = []

  const stream = bufferStream(expected, {
    chunkSize
  })
  stream.on('data', (buf) => {
    buffers.push(buf)
  })
  stream.on('end', () => {
    t.is(buffers.length, 10)
    t.is(buffers[0].length, expected / chunkSize)

    const total = buffers.reduce((acc, cur) => acc + cur.length, 0)

    t.is(expected, total)
    t.end()
  })
})

test.cb('Should allow generation of buffers', (t) => {
  const expected = 100
  let emitted = Buffer.alloc(0)
  const buffers = []

  const stream = bufferStream(expected, {
    generator: (size, callback) => {
      const output = Buffer.alloc(size, 1)
      emitted = Buffer.concat([emitted, output])

      callback(null, output)
    }
  })
  stream.on('data', (buf) => {
    buffers.push(buf)
  })
  stream.on('end', () => {
    t.deepEqual(emitted, buffers[0])
    t.end()
  })
})

test.cb('Should proagate byte generation errors', (t) => {
  const expected = 100
  const generationError = new Error('Urk!')

  const stream = bufferStream(expected, {
    generator: (size, callback) => {
      callback(generationError)
    }
  })
  stream.on('data', () => {
    throw new Error('No error was thrown')
  })
  stream.on('error', (err) => {
    t.is(err, generationError)
    t.end()
  })
})
