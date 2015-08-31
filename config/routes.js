/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes map URLs to views and controllers.
 *
 * If Sails receives a URL that doesn't match any of the routes below,
 * it will check for matching files (images, scripts, stylesheets, etc.)
 * in your assets directory.  e.g. `http://localhost:1337/images/foo.jpg`
 * might match an image file: `/assets/images/foo.jpg`
 *
 * Finally, if those don't match either, the default 404 handler is triggered.
 * See `api/responses/notFound.js` to adjust your app's 404 logic.
 *
 * Note: Sails doesn't ACTUALLY serve stuff from `assets`-- the default Gruntfile in Sails copies
 * flat files from `assets` to `.tmp/public`.  This allows you to do things like compile LESS or
 * CoffeeScript for the front-end.
 *
 * For more information on configuring custom routes, check out:
 * http://sailsjs.org/#/documentation/concepts/Routes/RouteTargetSyntax.html
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Custom routes here...                                                    *
  *                                                                          *
  *  If a request to a URL doesn't match any of the custom routes above, it  *
  * is matched against Sails route blueprints. See `config/blueprints.js`    *
  * for configuration options and examples.                                  *
  *                                                                          *
  ***************************************************************************/

  'get /': {
    controller: 'HomeController',
    action: 'index'
  },

  'get /login': 'AuthController.login',
  'get /logout': 'AuthController.logout',
  'get /register': 'AuthController.register',

  'get /test': 'TestController.index',

  'post /auth/local': 'AuthController.callback',
  'post /auth/local/:action': 'AuthController.callback',

  /**
   * User routes
   */
  'get /api/user': 'UserController.getAll',
  'get /api/user/:id': 'UserController.getOne',

  //'get /api/user/:slug': 'UserController.profile',
  'post /api/user': 'UserController.create',


  /**
   * Message routes
   *
   */
  'get /api/message': 'MessageController.getAll',
  'get /api/message/:id': 'MessageController.getOne',
  'post /api/message': 'MessageController.create',
  'delete /api/message/:id': 'MessageController.destroy',

  'get /api/post': 'PostController.getAll',
  'get /api/post/:id': 'PostController.getOne',
  'post /api/post': 'PostController.create',
  'delete /api/post/:id': 'PostController.destroy',

  'get /api/views/:id': 'TestController.getOne',

  'get /api/votes/:id': 'TestController.getOne',
  'post /api/vote/:id': 'TestController.vote',
  'delete /api/vote/:id': 'TestController.destroy',


  'get /home': 'HomeController.index',
  'get /about': 'HomeController.index',
  'get /messages': 'HomeController.index',
  'get /post': 'HomeController.index',
  'get /search': 'HomeController.index',
  'get /member': 'HomeController.index',
  'get /member/:id': 'HomeController.index',
  'get /member/:slug': 'HomeController.index'

  // If a request to a URL doesn't match any of the custom routes above, it is matched 
  // against Sails route blueprints.  See `config/blueprints.js` for configuration options
  // and examples.

};
