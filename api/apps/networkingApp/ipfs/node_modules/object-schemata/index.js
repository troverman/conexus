"use strict";
var CustomError     = require('custom-error-instance');
var is              = require('is');

var Err = CustomError('OSError');
Err.config = CustomError(Err, { code: 'ECFG', message: 'Configuration is not an object' });        //config is not an object
Err.conflict = CustomError(Err, { code: 'ECONF' });     //default value and required are mutually exclusive
Err.dne = CustomError(Err, { code: 'EDNE' });           //does not exist
Err.invalid = CustomError(Err, { code: 'EVALID' });     //invalid value
Err.multiple = CustomError(Err, { code: 'EMULT' });     //multiple errors
Err.param = CustomError(Err, { code: 'EPARAM' });       //invalid input parameter
Err.required = CustomError(Err, { code: 'EREQ' });      //missing required value


/**
 * Generate a factory that will normalize and validate configuration options against the schema definition.
 * @param {object} schema
 * @returns {object}
 */
module.exports = function(schema) {
    var factory = {};
    var schematic = {};

    //validate input
    if (!schema || !is.object(schema)) throw new Err.param('Invalid object configuration settings.');

    //build schematic object
    Object.keys(schema).forEach(function(key) {
        var help;
        var item = schema[key];
        var result = {};

        //cannot have default value and required
        if (item.hasOwnProperty('defaultValue') && item.required) throw new Err.conflict('Object configuration cannot have a default value and be required for property: ' + key);

        //default value
        if (item.hasOwnProperty('defaultValue')) result.defaultValue = item.defaultValue;

        //help
        if (is.string(item.help)) {
            help = item.help;
            result.help = function(value) {
                return help;
            };
        } else if (is.function(item.help)) {
            result.help = item.help;
        } else {
            result.help = function(value) {
                return '';
            }
        }

        //required
        result.required = !!item.required;

        //transform
        result.transform = is.function(item.transform) ? item.transform : function(value) { return value; };

        //validate
        result.validate = is.function(item.validate) ? item.validate : function(value, is) { return true; };

        //store processed item
        schematic[key] = result;
    });

    Object.defineProperty(factory, 'configuration', {
        enumerable: true,
        configurable: true,
        get: function() {
            return JSON.parse(JSON.stringify(schema));
        }
    });

    /**
     * Get a copy of a defined configuration's schema.
     * @returns {object}
     */
    factory.get = function() {
        var result = {};
        Object.keys(schematic).forEach(function(key) {
            result[key] = Object.assign({}, schematic[key]);
        });
        return result;
    };

    /**
     * Normalize a configuration object.
     * @param {object} configuration The object to get a normalized copy of.
     * @returns {object}
     * @throws {Error} if the configuration fails the defined configuration's validation.
     */
    factory.normalize = function(configuration) {
        var copy = {};
        var error;
        var result;

        // validate input
        if (!configuration || typeof configuration !== 'object') throw Err.config();

        //make a copy of the configuration, injecting default values as needed
        Object.keys(schematic).forEach(function(key) {
            var config = schematic[key];
            if (configuration.hasOwnProperty(key)) {
                copy[key] = configuration[key];
            } else if (config.hasOwnProperty('defaultValue')) {
                copy[key] = config.defaultValue;
            }
        });

        //validate the configuration
        error = factory.validate(copy);
        if (error instanceof Error) throw error;

        //build the normalized result
        result = {};
        Object.keys(copy).forEach(function(key) {
            var config = schematic[key];
            result[key] = config.transform(copy[key]);
        });

        //return the result
        return result;
    };

    /**
     * Validate a single property to value or an entire configuration object.
     * @param {string} [propertyName] The property name to validate the value against.
     * @param {*} value The value to validate. If the property name is specified then the
     * value will be validated against just that property in the schema. If the property name
     * is not specified then the value must be an object that will be tested against the
     * entire schematic.
     * @returns {boolean, Error} true if valid, or an Error object if not valid.
     */
    factory.validate = function(propertyName, value) {
        var result;
        try {
            if (arguments.length === 1) {
                return validateConfiguration(propertyName);
            } else if (arguments.length >= 2) {
                result = processValue(propertyName, value);
                return result.error ? new Err.invalid(result.error) : true;
            }
        } catch (e) {
            return e;
        }
    };



    /**
     * Process and validate a value for a specific schematic property.
     * @param {string} propertyName The name of the property.
     * @param {*} value The value.
     * @returns {object}
     * @throws {Error} if an input parameter is invalid.
     */
    function processValue(propertyName, value) {
        var additionalHelp;
        var config;
        var transformedValue;
        var valid;

        function result(error) {
            var err = null;
            var help;

            if (error) {
                err = 'Invalid configuration value for property: ' + propertyName + '.';

                if (!additionalHelp) {
                    help = config.help(value);
                    if (help) err += ' ' + help;
                    err += ' Received: ' + value;
                } else if (additionalHelp instanceof Error) {
                    err += '\n\t' + additionalHelp.message;
                } else {
                    err += '\n\t' + additionalHelp;
                }
            }

            return {
                error: err,
                value: transformedValue
            }
        }

        //validate input parameters
        if (!is.string(propertyName)) throw new Err.param('The property name to validate must be a string: ' + propertyName);
        if (!schematic.hasOwnProperty(propertyName)) throw new Err.dne('Schema has does not have the property defined: ' + propertyName);

        //get configuration for property
        config = schematic[propertyName];

        //validate
        valid = config.validate(value, is, function(message) { additionalHelp = message; return false; });
        if (!valid) return result(true);

        //transform
        transformedValue = config.transform(value);

        //no errors
        return result(false);
    }

    /**
     * Validate if a configuration meets schematic requirements.
     * @param {object} configuration The configuration to test.
     * @returns {boolean|Error} true if valid, an Error if invalid.
     * @throws {Error} if the input parameter is invalid.
     */
    function validateConfiguration(configuration) {
        var errors = [];
        var errorType = '';

        //validate input parameters
        if (!is.object(configuration) || !configuration) throw new Err.param('Configuration must be a valid object.');

        Object.keys(schematic).forEach(function(key) {
            var config = schematic[key];
            var err;
            var help;
            var result;

            if (configuration.hasOwnProperty(key)) {
                result = processValue(key, configuration[key]);
                if (result.error) {
                    errors.push(result.error);
                    errorType = 'invalid';
                }
            } else if (config.required) {
                err = 'Missing required configuration property: ' + key + '.';
                help = config.help();
                if (help) err += ' ' + help;
                errors.push(err);
                errorType = 'required';
            }
        });
        if (errors.length === 0) return true;
        if (errors.length === 1) return new Err[errorType](errors[0]);
        return new Err.multiple('Configuration has one or more errors:\n\t' + errors.join('\n\t'));
    }

    return factory;
};

Object.defineProperty(module.exports, 'error', {
    enumerable: false,
    configurable: true,
    value: Err,
    writable: false
});