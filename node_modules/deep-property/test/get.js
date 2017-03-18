
var test = require('tap').test
  , prop = require('../index.js');


test('invalid input', function (t) {
  var a = undefined
    , b = { };
  t.equal(prop.get(a, 'sample'), undefined);
  t.equal(prop.get(b, undefined), undefined);
  t.equal(prop.get(b, ''), undefined);
  t.equal(prop.get(b, '...'), undefined);
  t.end();
});


test('shallow properties', function (t) {
  var fn = function () { };
  var a = {
    sample:  'string',
    example: fn,
    unknown: undefined
  };
  t.equal(prop.get(a, 'example'), fn);
  t.equal(prop.get(a, 'sample'), 'string');
  t.equal(prop.get(a, 'unknown'), undefined);
  t.equal(prop.get(a, 'invalid'), undefined);
  t.end();
});


test('deep properties', function (t) {
  var a = {
    b: { example:{ type:'vegetable' }},
    c: { example:{ type:'mineral' }},
  };
  t.equal(prop.get(a, 'b.example.type'), 'vegetable');
  t.equal(prop.get(a, 'c.example.type'), 'mineral');
  t.equal(prop.get(a, 'c.gorky.type'), undefined);
  t.end();
});


test('properties on non-objects', function (t) {
  var fn  = function () { }
    , str = 'An example string'
    , num = 42;

  fn.path = { to: { property:'string' }};
  str.path = { to: { property:'string' }};
  num.path = { to: { property:'string' }};
  
  t.equal(prop.get(fn, 'path.to.property'), 'string');
  t.equal(prop.get(str, 'path.to.property'), undefined);
  t.equal(prop.get(num, 'path.to.property'), undefined);
  t.end();
});
