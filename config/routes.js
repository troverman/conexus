/**
 * Route Mappings
 * (sails.config.routes)
 *
 */

module.exports.routes = {

  'get /': 'HomeController.index',
  'get /home': 'HomeController.index',
  'get /about': 'HomeController.index',
  'get /account': 'HomeController.index',
  'get /connect': 'HomeController.index',
  'get /member': 'HomeController.index',
  'get /member/:id': 'HomeController.index',
  'get /member/:slug': 'HomeController.index',
  'get /post': 'HomeController.index',
  'get /projects': 'HomeController.index',
  'get /project/:path': 'HomeController.index',
  'get /project/:path/edit': 'HomeController.index',
  'get /project/:path/channels': 'HomeController.index',//??
  'get /project/:path/finance': 'HomeController.index',
  'get /project/:path/members': 'HomeController.index',
  'get /project/:path/tasks': 'HomeController.index',
  'get /project/:path/streams': 'HomeController.index',
  'get /search': 'HomeController.index',
  'get /search/:searchQuery': 'HomeController.index',
  'get /stream/:id': 'HomeController.index',
  'get /transparency': 'HomeController.index',

  'get /login': 'HomeController.index',
  'get /register': 'HomeController.index',
  'get /logout': 'AuthController.logout',

  'post /auth/local': 'AuthController.callback',
  'post /auth/local/:action': 'AuthController.callback',

  'get /auth/:provider': 'AuthController.provider',
  'get /auth/:provider/callback': 'AuthController.callback',
  'get /auth/:provider/:action': 'AuthController.callback',

  /**
   * Follower routes
   *
   */
  'get /api/follower': 'FollowerController.getAll',
  'get /api/follower/:id': 'FollowerController.getOne',
  'get /api/follower/followers/:id': 'FollowerController.getFollowers',
  'get /api/follower/following/:id': 'FollowerController.getFollowing',
  'post /api/follower': 'FollowerController.create',
  'delete /api/follower/:id': 'FollowerController.destroy',

  /**
   * Message routes
   *
   */
  'get /api/message': 'MessageController.getAll',
  'get /api/message/:id': 'MessageController.getOne',
  'get /api/message/project/:id': 'MessageController.getByProject',

  //'get /api/message/channel/:id': 'MessageController.getByChannel',

  'get /api/message/user/:id': 'MessageController.getByUser',
  'post /api/message': 'MessageController.create',
  'delete /api/message/:id': 'MessageController.destroy',

  /**
   * Post routes
   *
   */
  'get /api/post': 'PostController.getAll',
  'get /api/post/:id': 'PostController.getOne',
  'post /api/post': 'PostController.create',
  'delete /api/post/:id': 'PostController.destroy',

  /**
   * PostVote routes
   *
   */
  'get /api/postvote': 'PostVoteController.getAll',
  'get /api/postvote/:id': 'PostVoteController.getOne',
  'get /api/postvote/post/:id': 'PostVoteController.getByPost',
  'post /api/postvote': 'PostVoteController.create',
  'delete /api/postvote/:id': 'PostVoteController.destroy',

  /**
   * Project routes
   *
   */
  'get /api/project': 'ProjectController.getAll',
  'get /api/project/:id': 'ProjectController.getOne',

  'get /api/project/url/:path': 'ProjectController.getByUrl',
  'post /api/project': 'ProjectController.create',
  'delete /api/project/:id': 'ProjectController.destroy',

   /**
   * ProjectMember routes
   *
   */
  'get /api/project/:id/member': 'ProjectMemberController.getByProject',
  'post /api/project/member': 'ProjectMemberController.create',
  'delete /api/project/member/:id': 'ProjectMemberController.destroy',

  /**
   * Search routes
   */
  'get /api/search/:searchQuery': 'SearchController.search',
  'get /api/search': 'SearchController.searchAll',

  /**
   * Task routes
   *
   */
  'get /api/task': 'TaskController.getAll',
  'get /api/task/:id': 'TaskController.getOne',
  'get /api/task/project/:id': 'TaskController.getByProject',
  'post /api/task': 'TaskController.create',
  'delete /api/task/:id': 'TaskController.destroy',

  /**
   * User routes
   */
  'get /api/user': 'UserController.getAll',
  'get /api/user/:id': 'UserController.getOne',
  'get /api/user/username/:path': 'UserController.getByUsername',
  'get /api/user/subscribe': 'UserController.subscribe',
  'post /api/user': 'UserController.create',
  'post /api/user/upload': 'UserController.upload',
  'post /api/user/:id': 'UserController.update',

  '/.well-known/acme-challenge/cV2kFOb-PA_snEp6iR9udCIa1XFiJ8tm3JZkYOouqmw': 'HomeController.ssl',


  //'get /*' : 'HomeController.index'

  // If a request to a URL doesn't match any of the custom routes above, it is matched 
  // against Sails route blueprints.  See `config/blueprints.js` for configuration options
  // and examples.

};
