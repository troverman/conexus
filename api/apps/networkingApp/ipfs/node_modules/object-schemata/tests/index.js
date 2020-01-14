"use strict";

var Schema      = require('../index');
var test        = require('tape');

var schemaDef = {
    foo: {
        defaultValue: 60,
        help: 'This value must be a number between 45 and 65.',
        transform: function (value) {
            return Math.round(value);
        },
        validate: function (value, is) {
            return !is.nan(value) && is.number(value) && value >= 45 && value <= 65;
        }
    },
    bar: {
        help: 'This must be a string.',
        validate: function (value, is) {
            return is.string(value);
        },
        required: true
    },
    baz: {
        help: 'This must be an object that defines two properties: age as a number and name as a string.',
        transform: function(value) {
            return subSchema.normalize(value);
        },
        validate: function(value, is, error) {
            var result;
            if (is.object(value) && value) {
                result = subSchema.validate(value);
                if (result !== true) return error(result);
                return true;
            } else {
                return false;
            }
        }
    }
};

var subSchema = Schema({
    age: {
        help: 'This must be a non-negative number.',
        transform: function(value) {
            return Math.round(value);
        },
        validate: function(value, is) {
            return !is.nan(value) && is.number(value) && value >= 0;
        }
    },
    name: {
        errHelp: 'This must be a non-empty string.',
        validate: function(value, is) {
            return is.string(value) && value;
        }
    }
});


test('define a schema', function(t) {

    t.doesNotThrow(function() {
        Schema({});
    }, 'initialize configuration schema');

    t.throws(function() {
        Schema({
            foo: {
                defaultValue: 0,
                required: true
            }
        });
    }, 'conflict default value and required');

    t.end();
});

test('get', function(t) {
    var config = Schema(schemaDef);
    var copy1 = config.get();
    var copy2 = config.get();

    t.notEqual(copy1, copy2, 'unique');

    copy1.foo.defaultValue = 55;
    t.notEqual(copy1.foo.defaultValue, copy2.foo.defaultValue, 'independent');

    t.end();
});

test('normalize', function(t) {
    var config = Schema(schemaDef);
    var result;

    result = config.normalize({ bar: 'bar' });
    t.equal(result.foo, 60, 'default value applied');
    t.equal(result.bar, 'bar', 'specified value applied');

    result = config.normalize({ foo: 55.7, bar: 'hello' });
    t.equal(result.foo, 56, 'specified value transformed');

    result = config.normalize({ foo: 55.7, bar: 'hello', jim: 'jim' });
    t.ok(Object.keys(result).length === 2, 'return only defined keys');

    t.throws(function() {
        config.normalize({})
    }, 'missing required');

    t.end();
});

test('validate', function(t) {
    var config = Schema(schemaDef);
    var result;

    result = config.validate({ foo: 65 });
    t.ok(result instanceof Error && result.code === 'EREQ', 'required error');

    result = config.validate({ foo: 65, bar: 'b' });
    t.ok(result === true, 'valid 1');

    result = config.validate({ foo: 'a', bar: 'b' });
    t.ok(result instanceof Error && result.code === 'EVALID', 'invalid error 1');

    result = config.validate({ foo: 65, bar: 5 });
    t.ok(result instanceof Error && result.code === 'EVALID', 'invalid error 2');

    result = config.validate({ foo: 'a' });
    t.ok(result instanceof Error && result.code === 'EMULT', 'multiple errors');

    result = config.validate('foo', 30);
    t.ok(result instanceof Error && result.code === 'EVALID', 'invalid errors 3');

    result = config.validate('foo', 60);
    t.ok(result === true, 'valid 2');

    result = config.validate({ bar: 'bar', baz: void 0 });
    t.ok(result instanceof Error && result.code === 'EVALID', 'invalid errors 4');

    result = config.validate({ bar: 'bar', baz: { age: - 1 } });
    t.ok(result instanceof Error && result.code === 'EVALID', 'invalid errors 5');

    t.end();
});
