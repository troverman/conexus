# object-schemata

At times we want to pass configuration object as a parameter into a function, but we still want to impose limits on that configuration object. Some of it's properties might be required, or some properties might need to be validated. And how do you go about handling errors when the configuration that was passed in doesn't fit those requirements?

This module seeks to solve those problems.

**Important Note**

A more comprehensive solution, [Fully-Typed](https://www.npmjs.com/package/fully-typed), has been developed that supports:
  
- Everything that this module supports
- Type validation
- Nested object validation
- Plugins

Alternatively this module works fine too.

## Installation

```sh
$ npm install object-schemata
```

## Usage Example
```js
var schema = require('object-schemata');

// define a schema
var personSchema = schema({
    age: {
        defaultValue: 0,
        help: 'This must be a non-negative number.',
        transform: function(value) {
            return Math.round(value);
        },
        validate: function(value, is) {
            return !is.nan(value) && value >= 0;
        }
    },
    name: {
        help: 'This must be a non-empty string.',
        required: true,
        validate: function(value, is) {
            return is.string(value) && value;
        }
    }
});

// this function takes a configuration object as a parameter
function personData(person) {
    var config = personSchema.normalize(person);
    return 'Name: ' + config.name + ', Age: ' + config.age;
}

// each of these lines sends a configuration to the personData function
personData({ name: 'Bob', age: 12.5 });     // Name: Bob, Age: 13
personData({ name: 'Bob' });                // Name: Bob, Age: 0
personData({});                             // Throws Error with message: OSError EREQ : Missing required configuration property: name. This must be a non-empty string.
personData({ name: 'Bob', age: -5 });       // Throws Error with message: OSError EVALID : Invalid configuration value for property: age. This must be a non-negative number. Received: -5
```

## Schema Configuration

The schema configuration consists of a property name and its associated schema configuration. The schema configuration can take multiple properties, none of which are required.

  - **defaultValue** - Set the default value for a property. During normalization, if a property is not specified but it does have a default value then the default value will be assigned to the property. The default value will still pass through the validate and transform functions. (Note: defaultValue and required cannot both be set in the configuraiton because they are mutually exclusive.)
  - **help** - A string or a function that is used to tailor the error message for any properties that fail either pre-validate or validate functions. If a funciton is used then it receives the original value as a parameter and it should return a string.
  - **required** - A boolean that, if set to true, will require that this property be included. (Note: defaultValue and required cannot both be set in the configuraiton because they are mutually exclusive.)
  - **transform** - A function that receives the original property value and should return a transformed value.
  - **validate** - A function that will be called to validate the original value, before transformation. This function will receive as parameters: 1) the original value, 2) [is](https://www.npmjs.com/package/is), a validation library found at [https://www.npmjs.com/package/is](https://www.npmjs.com/package/is), and 3) a function that can be called with a custom error message as its first parameter.

## API

Once you have created a schema you have access to these functions below. Each of these examples are preceeded by this code:

```js
var schema = require('object-schemata');

var personSchema = schema({
    age: {
        defaultValue: 0,
        help: 'This must be a non-negative number.',
        transform: function(value) {
            return Math.round(value);
        },
        validate: function(value, is) {
            return !is.nan(value) && value >= 0;
        }
    },
    name: {
        help: 'This must be a non-empty string.',
        required: true,
        validate: function(value, is) {
            return is.string(value) && value;
        }
    }
});
```

**Object : get ()**

Get a copy of the defined schema. If you ever see the need to modify a schema, you'll want to use this function to get the current schema. Then with this object you can modify it and create a new schema. There isn't a way to modify an existing schema beyond this method due to the dangers of mutable objects.

Returns: An copy object of the current schema.

```js
...

//get a copy of the person schema
var copy = personSchema.get();

/*
Value in copy:
{
    age: {
        defaultValue: 0,
        help: 'This must be a non-negative number.',
        transform: function(value) {
            return Math.round(value);
        },
        validate: function(value, is) {
            return !is.nan(value) && value >= 0;
        }
    },
    name: {
        help: 'This must be a non-empty string.',
        required: true,
        validate: function(value, is) {
            return is.string(value) && value;
        }
    }
}
*/
```

**Object : normalize ( configuration : Object )**

Pass an object into this function and get a normalized copy back. This will run the passed in configuration through validations and transformations. Note: the normalized object will not have properties that are not defined in the schema.

Parameters:

  - configuration - The object to get a normalized copy of.

Returns: A normalized copy of the passed in object.

```js
...

var config = personSchema.normalize({ name: 'Bob', age: 12.5 });
/*
Value in config:
{
    name: 'Bob',
    age: 13
}
*/
```

**Mixed : validate ( [ propertyName : String ], value : Mixed )**

Validate a single value against a property, or validate an entire object. If validation passes *true* will be returned, otherwise an Error object will be returned. If you want to throw the error, make sure that you do so.

Parameters:

  - propertyName - An optional string specifying a property in the schema to validate the value against.
  - value - A value to validate against the property specified. If no property is specified then it must be an object that will be validated against the entire schema.

Returns: *true* if validation was passed successfuly or an Error object if validation failed.

Example 1:

```js
...

var result = personSchema.validate({ age: 12.5 });
/*
Value in result is an Error object with this message:
OSError EREQ : Missing required configuration property: name. This must be a non-empty string.
*/
```

Example 2:

```js
...

var result = personSchema.validate('age', -5);
/*
Value in result is an Error object with this message:
OSError EVALID : Invalid configuration value for property: age. This must be a non-negative number. Received: -5
*/
```