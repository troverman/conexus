
var test = require('tap').test
  , prop = require('../index.js');


test('invalid input', function (t) {
  var a = undefined
    , b = { };
  t.equal(prop.has(a, 'sample'), false, 'Undefined property');
  t.equal(prop.has(b, undefined), false, 'Undefined object');
  t.end();
});


test('shallow properties', function (t) {
  var a = {
    sample:  true,
    example: false,
    unknown: undefined
  };
  t.equal(prop.has(a, 'example'), true);
  t.equal(prop.has(a, 'sample'), true);
  t.equal(prop.has(a, 'unknown'), false);
  t.equal(prop.has(a, 'invalid'), false);
  t.end();
});


test('deep properties', function (t) {
  var a = {
    b: { sample:true, example:{ type:'vegetable' }},
    c: { sample:true, example:{ type:'mineral' }},
  };
  t.equal(prop.has(a, 'b.example.type'), true);
  t.equal(prop.has(a, 'c.example.type'), true);
  t.equal(prop.has(a, 'c.gorky.type'), false);
  t.end();
});


test('properties on non-objects', function (t) {
  var fn  = function () { }
    , str = 'An example string'
    , num = 42;

  fn.path = { to: { property:true }};
  str.path = { to: { property:true }};
  num.path = { to: { property:true }};
  
  t.equal(prop.has(fn, 'path.to.property'), true);
  t.equal(prop.has(str, 'path.to.property'), false);
  t.equal(prop.has(num, 'path.to.property'), false);
  t.end();
});
