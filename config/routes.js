/**
 * Route Mappings
 */

module.exports.routes = {

  'get /': 'HomeController.index',
  'get /home': 'HomeController.index',
  'get /about': 'HomeController.index',
  'get /account': 'HomeController.index',
  //'get /association/:id': 'HomeController.index',
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
  'get /member/:path/about': 'HomeController.index',
  'get /member/:path/actions': 'HomeController.index',
  'get /member/:path/assets': 'HomeController.index',
  'get /member/:path/content': 'HomeController.index',
  'get /member/:path/followers': 'HomeController.index',
  'get /member/:path/following': 'HomeController.index',
  'get /member/:path/items': 'HomeController.index',
  'get /member/:path/ledger': 'HomeController.index',
  'get /member/:path/projects': 'HomeController.index',
  'get /member/:path/positions': 'HomeController.index',
  'get /member/:path/tasks': 'HomeController.index',
  'get /member/:path/time': 'HomeController.index',
  'get /members': 'HomeController.index',
  'get /notifications': 'HomeController.index',
  'get /order/:id': 'HomeController.index',
  'get /projects': 'HomeController.index',
  'get /project/:path': 'HomeController.index',
  'get /project/:path/about': 'HomeController.index',
  'get /project/:path/assets': 'HomeController.index',
  'get /project/:path/edit': 'HomeController.index',
  'get /project/:path/channels': 'HomeController.index',
  'get /project/:path/content': 'HomeController.index',
  'get /project/:path/charter': 'HomeController.index',
  'get /project/:path/items': 'HomeController.index',
  'get /project/:path/ledger': 'HomeController.index',
  'get /project/:path/members': 'HomeController.index',
  'get /project/:path/positions': 'HomeController.index',
  'get /project/:path/projects': 'HomeController.index',
  'get /project/:path/settings': 'HomeController.index',
  'get /project/:path/tasks': 'HomeController.index',
  'get /project/:path/time': 'HomeController.index',
  'get /reaction/:id': 'HomeController.index',
  'get /search': 'HomeController.index',
  'get /search/:searchQuery': 'HomeController.index',
  'get /tasks': 'HomeController.index',
  'get /task/:id': 'HomeController.index',
  'get /token/:id': 'HomeController.index',
  'get /time/:id': 'HomeController.index',
  'get /transaction/:id': 'HomeController.index',
  'get /transparency': 'HomeController.index',
  'get /validation/:id': 'HomeController.index',

  'get /login': 'HomeController.index',
  'get /register': 'HomeController.index',
  'get /logout': 'AuthController.logout',

  'post /auth/local': 'AuthController.callback',
  'post /auth/local/:action': 'AuthController.callback',

  'get /auth/:provider': 'AuthController.provider',
  'get /auth/:provider/callback': 'AuthController.callback',
  'get /auth/:provider/:action': 'AuthController.callback',

  /**
   * Content routes
   */
  'get /api/content': 'ContentController.getSome',
  'get /api/content/:id': 'ContentController.getOne',
  'post /api/content': 'ContentController.create',
  'post /api/content/:id': 'ContentController.update',
  'delete /api/content/:id': 'ContentController.destroy',

  /**
   * Follower routes | MB RELATIONSHIP
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
   * Notification routes
   */
  'get /api/notification': 'NotificationController.getSome',

  /**
   * Order routes
   */
  'get /api/order': 'OrderController.getSome',
  'get /api/order/:id': 'OrderController.getOne',
  'post /api/order': 'OrderController.create',
  'delete /api/post/:id': 'OrderController.destroy',

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
  'post /api/project/:id': 'ProjectController.update',
  'delete /api/project/:id': 'ProjectController.destroy',

   /**
   * ProjectMember routes
   */
  'get /api/projectmember': 'ProjectMemberController.getSome',
  'post /api/projectmember': 'ProjectMemberController.create',
  'delete /api/projectmember/:id': 'ProjectMemberController.destroy',

  /**
   * Search routes
   */
  'get /api/search': 'SearchController.search',

  /**
   * Task routes
   */
  'get /api/task': 'TaskController.getSome',
  'get /api/task/:id': 'TaskController.getOne',
  'post /api/task/:id': 'TaskController.update',
  'post /api/task': 'TaskController.create',
  'delete /api/task/:id': 'TaskController.destroy',

  /**
   * Time routes
   */
  'get /api/time': 'TimeController.getSome',
  'get /api/time/:id': 'TimeController.getOne',
  'post /api/time': 'TimeController.create',

  /**
   * Token routes
   */
  'get /api/token': 'TokenController.getSome',

  /**
   * Transaction routes
   */
  'get /api/transaction': 'TransactionController.getSome',
  'post /api/transaction': 'TransactionController.create',
  'delete /api/transaction/:id': 'TransactionController.destroy',

  /**
   * User routes
   */
  'get /api/user': 'UserController.getSome',
  'get /api/user/:id': 'UserController.getOne',
  'get /api/user/username/:path': 'UserController.getByUsername',
  'post /api/user': 'UserController.create',
  'post /api/user/upload': 'UserController.upload',
  'post /api/user/:id': 'UserController.update',

  /**
   * Validation routes
   */
  'get /api/validation': 'ValidationController.getSome',
  'post /api/validation': 'ValidationController.create',

  //'get /*' : 'HomeController.index'

};
