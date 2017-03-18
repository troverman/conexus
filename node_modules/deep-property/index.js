
/* 
 * Fetches the value of a deeply nested property.
 * 
 * Arguments:
 * 
 *     obj     Object to fetch property from.
 * 
 *     path    [string] Dot-separated path specifier to nested
 *             property to fetch.  Array indexes are not supported.
 *             Example: "contact.name.first".
 * 
 * Returns:    [mixed] Value of nested property if it exists,
 *             `undefined` otherwise.
 */
module.exports.get = function (obj, path) {
  var tokens = parse(path);
  if (tokens.length == 0) {
    return undefined;
  }
  for (var i = 0, len = tokens.length; i < len; i++) {
    if (! obj || ! obj.hasOwnProperty(tokens[i])) {
      return undefined;
    } else {
      obj = obj[tokens[i]];
    }
  }
  return obj;
};


/* 
 * Sets the value of a deeply nested property.
 * 
 * If an intermediate property of the specified path doesn't exist,
 * it will be created as an object.
 * 
 * Arguments:
 * 
 *     obj     Object to set property on.
 * 
 *     path    [string] Dot-separated path specifier to nested
 *             property to set.  Array indexes are not supported.
 *             Example: "contact.name.first".
 * 
 *     value   [mixed] Value to set on the object's nested property.
 * 
 * Returns:    undefined
 */
module.exports.set = function (obj, path, value) {
  if (typeof obj === 'undefined' || typeof path === 'undefined') {
    return;
  }
  var tokens = parse(path);
  for (var i = 0, len = tokens.length; i < len; i++) {
    if (! obj || ! obj.hasOwnProperty(tokens[i])) {
      obj[tokens[i]] = { };
    }
    if (i == (len - 1)) {
      obj[tokens[i]] = value;
    } else {
      obj = obj[tokens[i]];
    }
  }
};


/* 
 * Removes a deeply nested property.
 * 
 * If an intermediate property of the specified path doesn't exist,
 * we bail early.
 * 
 * Arguments:
 * 
 *     obj     Object to remove property from.
 * 
 *     path    [string] Dot-separated path specifier to nested
 *             property to remove.  Array indexes are not supported.
 *             Example: "contact.name.first".
 *
 * Returns:    [boolean] TRUE if property was removed, otherwise FALSE.
 */
module.exports.remove = function (obj, path) {
  if (typeof obj === 'undefined' || typeof path === 'undefined') {
    return false;
  }
  var tokens = parse(path);
  for (var i = 0, len = tokens.length; i < len; i++) {
    if (! obj || ! obj.hasOwnProperty(tokens[i])) {
      return false;
    }
    if (i == (len - 1)) {
      delete obj[tokens[i]];
      return true;
    } else {
      obj = obj[tokens[i]];
    }
  }

  return false
};


/* 
 * Detects whether a given object has a specified nested property.
 * 
 * Normal checks for deeply nested properties will throw an
 * exception if an intermediate property doesn't exist.  This
 * function will do the same without but without the exception.
 * 
 * Arguments:
 * 
 *     obj      Object to check properties for.
 * 
 *     path     [string] Dot-separated path specifier to nested
 *              property.  Array indexes are not supported.
 *              Example: "contact.name.first"
 * 
 * Returns:     [boolean] TRUE if property is defined at the
 *              given path, otherwise FALSE.  If a non-string
 *              is passed as `path`, FALSE is returned.
 */
module.exports.has = function (obj, path) {
  return (typeof module.exports.get(obj, path) !== 'undefined');
};


function parse (path) {
  if (typeof path !== 'string') {
    path = '';
  }
  var tokens = path.split('.');
  for (var i = 0, len = tokens.length; i < len; i++) {
    if (tokens[i] === '') {
      return [ ];
    }
  }
  return tokens;
}
