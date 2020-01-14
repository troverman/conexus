var schema = require('../index');

var personSchema;
var result;

//define the person schema
personSchema = schema({
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

//define a function that uses the person schema to normalize input configurations
function personData(person) {
    var config = personSchema.normalize(person);
    return 'Name: ' + config.name + ', Age: ' + config.age;
}

//call personData with a configuration
result = personData({ name: 'Bob', age: 12.5 });     // Name: Bob, Age: 13
console.log(result);

//call personData with a configuration
result = personData({ name: 'Bob' });                // Name: Bob, Age: 0
console.log(result);

//call personData with an invalid configuration
try {
    personData({});
} catch (e) {
    console.log(e.message);                         // Missing required configuration property: name. This must be a non-empty string.
}

//call personData with an invalid configuration
try {
    personData({ name: 'Bob', age: -5 });
} catch (e) {
    console.log(e.message);                         // Invalid configuration value for property: age. This must be a non-negative number. Received: -5
}
