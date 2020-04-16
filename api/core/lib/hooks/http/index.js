var path = require('path');
var util = require('util');
var _ = require('@sailshq/lodash');
var flaverr = require('flaverr');
var toStartServer = require('./start');
var toInitializeHttpHook = require('./initialize');
module.exports = function(sails) {
  /**
   * Expose `http` hook definition
   */
  return {
    defaults: {
      // Self-awareness: the host the server *thinks it is*
      // (this is necessary for some production environments-- only set it if you _absolutely_ need it)
      explicitHost: undefined,
      // Port to run this app on
      port: 1337,
      // SSL cert settings end up here
      ssl: {},
      // Path static files will be served from
      // Uses `path.resolve()` to accept either:
      //  • an absolute path
      //  • a relative path from the app root (sails.config.appPath)
      paths: {public: '.tmp/public'},

      // New http-only middleware config
      // (provides default middleware)
      http: {
        middleware: {
          order: [
            'cookieParser',
            'session',
            'bodyParser',
            'compress',
            'poweredBy',
            'router',
            'www',
            'favicon',
          ],
          // Built-in HTTP middleware functions are injected after the express
          // app instance has been created (i.e. `app`). See `./initialize.js`
          // and `./get-configured-http-middleware-fns.js` in this hook for details.
        },
        // HTTP cache configuration
        //
        // > Implicit default in production is 365.25 days (in dev: 1 milisecond).
        // FUTURE: remove implicit production default, and if this is production
        // and no cache was set, log a warning (in `configure`)
        cache: process.env.NODE_ENV !== 'production' ? 1 : 31557600000,
        // Extra options to pass directly into the Express server
        // when it is instantiated
        //      (or false to disable)
        //
        // This is the options object for the `createServer` method, as discussed here:
        // • http://nodejs.org/docs/v4.0.0/api/https.html#https_class_https_server
        // • http://nodejs.org/docs/v6.0.0/api/https.html#https_class_https_server
        // • http://nodejs.org/docs/v7.0.0/api/https.html#https_class_https_server
        serverOptions: undefined,
        // Custom express middleware function to use.
        // (FUTURE: add deprecation message if this is attempted-- instead recommend using an arbitrary middleware)
        customMiddleware: undefined,
        // Should be left false unless behind a proxy.
        // (this is passed in to Express as the "trust proxy" setting)
        trustProxy: false,
      }//< .http>
    },//< / defaults >
    configure: function() {
      // If one piece of the ssl config is specified, ensure the other required piece is there
      if (sails.config.ssl && (
        sails.config.ssl.cert && !sails.config.ssl.key
      ) || (!sails.config.ssl.cert && sails.config.ssl.key)) {
        throw flaverr({ name: 'userError', code: 'E_INVALID_SSL_CONFIG' }, new Error('Invalid SSL configuration in `sails.config.ssl`!  Must include `cert` and `key` properties!'));
      }
      // Deprecate `customMiddlware` option.
      if (sails.config.http.customMiddleware) {
        sails.log.debug('Warning: use of `customMiddleware` is deprecated in Sails 1.0.');
        sails.log.debug('Instead, use an Express 4-compatible middleware (res, res, next) function.');
        sails.log.debug('See http://sailsjs.com/docs/upgrading/to-v-1-0#?express-4 for more info.');
        sails.log.debug();
      }
      // Path static files will be served from
      //
      // Uses `path.resolve()` to accept either:
      //  • an absolute path
      //  • a relative path from the app root (sails.config.appPath)
      sails.config.paths.public = path.resolve(sails.config.appPath, sails.config.paths.public);
      // If no _explicit_ middleware order is specified, make sure the implicit default order
      // will be used. This allows overriding built-in middleware functions (like `www`)
      // without having to explicitly configure the `sails.config.http.middleware.order` array.
  
      //  ┬  ┬┌─┐┬─┐┬┌─┐┬ ┬  ┌┬┐┬┌┬┐┌┬┐┬  ┌─┐┬ ┬┌─┐┬─┐┌─┐
      //  └┐┌┘├┤ ├┬┘│├┤ └┬┘  ││││ ││ │││  ├┤ │││├─┤├┬┘├┤
      //   └┘ └─┘┴└─┴└   ┴   ┴ ┴┴─┴┘─┴┘┴─┘└─┘└┴┘┴ ┴┴└─└─┘
      //   Make sure that middleware in the order exists, and that every
      //   custom middleware is present in the order.
      // Loop through all of the middleware in `sails.config.http.middleware`, and verify that it's
      // in the order (skipping the `order` key itself).
      _.each(_.without(_.keys(sails.config.http.middleware), 'order'), function (middlewareName) {

        // If the custom middleware isn't in the middleware order, bail.
        // Make an exception for 404, 500 and startRequest timer, which we'll handle more
        // gently when initializing the hook.
        if (!_.contains(sails.config.http.middleware.order.concat(['404', '500', 'startRequestTimer']), middlewareName)) {
          throw flaverr({ name: 'userError', code: 'E_INVALID_HTTP_CONFIG' }, new Error(
            '\n-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-\n'+
            'Detected a custom middleware `' + middlewareName + '` that does not appear in the\n'+
            'middleware order.  Please add `' + middlewareName + '` to `sails.config.http.middleware.order`.\n'+
            'See http://sailsjs.com/docs/concepts/middleware for more info.\n'+
            '-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-\n'
          ));
        }
      });
      // Now loop through all of the middleware names in `sails.config.http.middleware.order` (ignoring
      // the built-in ones) and verify that there's a matching custom middleware.
      // Make an exception for the middleware that was removed from the order in Sails 1.0, which we'll
      // handle more gently when initializing the hook.
      _.each(_.difference(sails.config.http.middleware.order, sails.hooks.http.defaults.http.middleware.order.concat(['404', '500', 'startRequestTimer', 'handleBodyParserError', 'methodOverride', '$custom'])), function(middlewareName) {
        if (!_.isFunction(sails.config.http.middleware[middlewareName])) {
          throw flaverr({ name: 'userError', code: 'E_INVALID_HTTP_CONFIG' }, new Error(
            '\n-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-\n'+
            'Detected an entry for `' + middlewareName + '` in `sails.config.http.middleware.order`,\n'+
            'but `sails.config.http.middleware[\'' + middlewareName + '\']` is undefined or not a function.\n'+
            'Please provide a custom `req, res, next` middleware function for `' + middlewareName + '`,\n'+
            'or remove it from the order. See http://sailsjs.com/docs/concepts/middleware for more info.\n'+
            '-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-\n'
          ));
        }
      });
    },
    /**
     * Initialize is fired first thing when the hook is loaded
     * but after waiting for user config (if applicable).
     */
    initialize: toInitializeHttpHook(sails),
    /**
     * `handleLift` is fired when sails is ready for HTTP requests to
     * start coming in.
     *
     * @param  {Function} done
     */
    handleLift: function(done){
      // In order for `sails.config` to be correct, this needs to happen in here.
      var startServer = toStartServer(sails);
      // Now that Sails is ready, start listening for requests on
      // the express server.
      startServer(done);
    }
  };
};
