/**
 * Look up the URL of this app's first explicit route with the given route target.
 * Note that this function _only searches explicit routes_ which have been configured
 * manually (e.g. in `config/routes.js`).  For more info, see:
 */
module.exports = function getUrlFor(routeQuery){
  // Get reference to sails app instance.
  var sails = this;
  // Now attempt to look up the first route that matches the specified argument
  // and if it works, then return its URL.
  return sails.getRouteFor(routeQuery).url;
};
