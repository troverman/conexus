const cbor = require('borc')
const CID = require('cids')
const Block = require('ipfs-block')
const isCircular = require('is-circular')
const multihashes = require('multihashing-async')
const promisify = require('util').promisify
const phash = promisify(multihashes)

const CID_CBOR_TAG = 42

/* start copy from exisisting dag-cbor */
function tagCID (cid) {
  if (typeof cid === 'string') {
    cid = new CID(cid).buffer
  } else if (CID.isCID(cid)) {
    cid = cid.buffer
  }

  return new cbor.Tagged(CID_CBOR_TAG, Buffer.concat([
    Buffer.from('00', 'hex'), // thanks jdag
    cid
  ]))
}

function replaceCIDbyTAG (dagNode) {
  let circular
  try {
    circular = isCircular(dagNode)
  } catch (e) {
    circular = false
  }
  if (circular) {
    throw new Error('The object passed has circular references')
  }

  function transform (obj) {
    if (!obj || Buffer.isBuffer(obj) || typeof obj === 'string') {
      return obj
    }

    if (Array.isArray(obj)) {
      return obj.map(transform)
    }

    if (CID.isCID(obj)) {
      return tagCID(obj)
    }

    const keys = Object.keys(obj)

    if (keys.length === 1 && keys[0] === '/') {
      // Multiaddr encoding
      // if (typeof link === 'string' && isMultiaddr(link)) {
      //  link = new Multiaddr(link).buffer
      // }

      return tagCID(obj['/'])
    } else if (keys.length > 0) {
      // Recursive transform
      const out = {}
      keys.forEach((key) => {
        if (typeof obj[key] === 'object') {
          out[key] = transform(obj[key])
        } else {
          out[key] = obj[key]
        }
      })
      return out
    } else {
      return obj
    }
  }

  return transform(dagNode)
}
/* end copy from existing dag-cbor */

module.exports = (maxsize) => {
  let _decoder = new cbor.Decoder({
    tags: {
      [CID_CBOR_TAG]: (val) => {
        // remove that 0
        val = val.slice(1)
        return new CID(val)
      }
    },
    /* Defaults to the borc default. */
    size: maxsize
  })

  const deserialize = (buffer) => {
    return _decoder.decodeFirst(buffer)
  }
  const serialize = (dagNode) => {
    let dagNodeTagged = replaceCIDbyTAG(dagNode)
    return cbor.encode(dagNodeTagged)
  }

  const mkblock = async (obj, algo = 'sha2-256') => {
    let buff = serialize(obj)
    let multihash = await phash(buff, algo)
    let cid = new CID(1, 'dag-cbor', multihash)
    return new Block(buff, cid)
  }

  return {
    serialize, deserialize, mkblock
  }
}
