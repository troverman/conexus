/**
 * Route Mappings
 */

module.exports.routes = {

  'get /': 'HomeController.index',
  'get /home': 'HomeController.index',
  'get /about': 'HomeController.index',
  'get /account': 'HomeController.index',
  'get /content': 'HomeController.index',
  'get /content/:id': 'HomeController.index',
  'get /discover': 'HomeController.index',
  'get /item/:id': 'HomeController.index',
  'get /market': 'HomeController.index',
  'get /marketplace': 'HomeController.index',
  'get /market/:id': 'HomeController.index',
  'get /market/:id/:id1': 'HomeController.index',
  'get /member': 'HomeController.index',
  'get /member/:path': 'HomeController.index',
  'get /member/:path/assets': 'HomeController.index',
  'get /member/:path/content': 'HomeController.index',
  'get /member/:path/followers': 'HomeController.index',
  'get /member/:path/following': 'HomeController.index',
  'get /member/:path/ledger': 'HomeController.index',
  'get /member/:path/positions': 'HomeController.index',
  'get /member/:path/tasks': 'HomeController.index',
  'get /member/:path/time': 'HomeController.index',
  'get /members': 'HomeController.index',
  'get /order/:id': 'HomeController.index',
  'get /projects': 'HomeController.index',
  'get /project/:path': 'HomeController.index',
  'get /project/:path/assets': 'HomeController.index',
  'get /project/:path/edit': 'HomeController.index',
  'get /project/:path/channels': 'HomeController.index',//??
  'get /project/:path/content': 'HomeController.index',
  'get /project/:path/charter': 'HomeController.index',//??
  'get /project/:path/ledger': 'HomeController.index',
  'get /project/:path/marketplace': 'HomeController.index',
  'get /project/:path/members': 'HomeController.index',
  'get /project/:path/positions': 'HomeController.index',
  'get /project/:path/projects': 'HomeController.index',
  'get /project/:path/tasks': 'HomeController.index',
  'get /project/:path/time': 'HomeController.index',
  'get /reaction/:id': 'HomeController.index',
  'get /search': 'HomeController.index',
  'get /search/:searchQuery': 'HomeController.index',
  'get /tasks': 'HomeController.index',
  'get /task/:id': 'HomeController.index',
  'get /transaction/:id': 'HomeController.index',
  'get /transparency': 'HomeController.index',
  'get /validation/:id': 'HomeController.index',
  'get /work/:id': 'HomeController.index',

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
   */
  'get /api/follower': 'FollowerController.getSome',
  'get /api/follower/followers/:id': 'FollowerController.getFollowers',
  'get /api/follower/following/:id': 'FollowerController.getFollowing',
  'post /api/follower': 'FollowerController.create',
  'delete /api/follower/:id': 'FollowerController.destroy',

  /**
   * Item routes
   */
  'get /api/item': 'ItemController.getSome',
  'get /api/item/:id': 'ItemController.getOne',
  'post /api/item': 'ItemController.create',
  'delete /api/item/:id': 'ItemController.destroy',

  /**
   * Order routes
   */
  'get /api/order': 'OrderController.getSome',
  'get /api/order/:id': 'OrderController.getOne',
  'post /api/order': 'OrderController.create',
  'delete /api/post/:id': 'OrderController.destroy',

  /**
   * Post routes
   */
  'get /api/post': 'PostController.getSome',
  'get /api/post/:id': 'PostController.getOne',
  'post /api/post': 'PostController.create',
  'post /api/post/:id': 'PostController.update',
  'delete /api/post/:id': 'PostController.destroy',

  /**
   * Reaction routes
   */
  'get /api/reaction': 'ReactionController.getSome',
  'get /api/reaction/:id': 'ReactionController.getOne',
  'post /api/reaction': 'ReactionController.create',
  'delete /api/reaction/:id': 'ReactionController.destroy',

  /**
   * Project routes
   */
  'get /api/project': 'ProjectController.getSome',
  'get /api/project/:id': 'ProjectController.getOne',
  'get /api/project/children/:id': 'ProjectController.getChildren',
  'get /api/project/url/:path': 'ProjectController.getByUrl',
  'post /api/project': 'ProjectController.create',
  'post /api/stream/:id': 'ProjectController.update',
  'delete /api/project/:id': 'ProjectController.destroy',

   /**
   * ProjectMember routes
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
   */
  'get /api/task': 'TaskController.getSome',
  'get /api/task/:id': 'TaskController.getOne',
  'post /api/task/:id': 'TaskController.update',
  'post /api/task': 'TaskController.create',
  'delete /api/task/:id': 'TaskController.destroy',

  /**
   * Transaction routes
   */
  'get /api/transaction': 'TransactionController.getSome',
  'get /api/transaction/:id': 'TransactionController.getOne',
  'post /api/transaction': 'TransactionController.create',
  'delete /api/transaction/:id': 'TransactionController.destroy',


  /**
   * User routes
   */
  'get /api/user': 'UserController.getSome',
  'get /api/user/:id': 'UserController.getOne',
  'get /api/user/username/:path': 'UserController.getByUsername',
  //'get /api/user/subscribe': 'UserController.subscribe',
  'post /api/user': 'UserController.create',
  'post /api/user/upload': 'UserController.upload',
  'post /api/user/:id': 'UserController.update',

  /**
   * Work routes
   */
  'get /api/work': 'WorkController.getSome',
  'get /api/work/:id': 'WorkController.getOne',
  'post /api/work': 'WorkController.create',

  //'get /*' : 'HomeController.index'

};
