/**
 * Route Mappings
 */

module.exports.routes = {

  /* View routes */
  'get /': 'HomeController.index',
  'get /about': 'HomeController.index',
  'get /account': 'HomeController.index',
  'get /action/:id': 'HomeController.index',
  'get /app/:id': 'HomeController.index',
  'get /apps': 'HomeController.index',
  'get /association/:id': 'HomeController.index',
  'get /attention/:id': 'HomeController.index',
  'get /block/:id': 'HomeController.index',
  'get /connection/:id': 'HomeController.index',
  'get /content': 'HomeController.index',
  'get /content/:id': 'HomeController.index',
  'get /developers': 'HomeController.index',
  'get /discover': 'HomeController.index',
  'get /item/:id': 'HomeController.index',
  'get /login': 'HomeController.index',
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
  'get /register': 'HomeController.index',
  'get /search': 'HomeController.index',
  'get /search/:searchQuery': 'HomeController.index',
  'get /tasks': 'HomeController.index',
  'get /task/:id': 'HomeController.index',
  'get /token/:id': 'HomeController.index',
  'get /time/:id': 'HomeController.index',
  'get /tx/:id': 'HomeController.index',
  'get /transaction/:id': 'HomeController.index',
  'get /transparency': 'HomeController.index',
  'get /validation/:id': 'HomeController.index',

  /* Auth routes */
  'get /logout': 'AuthController.logout',

  'post /auth/local': 'AuthController.callback',
  'post /auth/local/:action': 'AuthController.callback',

  'get /auth/:provider': 'AuthController.provider',
  'get /auth/:provider/callback': 'AuthController.callback',
  'get /auth/:provider/:action': 'AuthController.callback',

  /* Action routes */
  'get /api/action': 'ActionController.get',
  'post /api/action': 'ActionController.create',

  /* App routes */
  'get /api/app': 'AppController.get',
  'post /api/app': 'AppController.create',

  /* Attention routes */
  'get /api/attention': 'AttentionController.get',
  'post /api/attention': 'AttentionController.create',

  /* Action routes */
  'get /api/action': 'ActionController.get',

  /* Association routes */
  'get /api/association': 'AssociationController.get',

  /* Connection routes */
  'get /api/connection': 'ConnectionController.get',
  'post /api/connection': 'ConnectionController.create',

  /* Content routes */
  'get /api/content': 'ContentController.get',
  'post /api/content': 'ContentController.create',
  'post /api/content/:id': 'ContentController.update',
  'delete /api/content/:id': 'ContentController.destroy',

   /* Follower routes DEPRECIATE */
   //TODO: MEMBER-MEMBER ASSOCIATION
  'get /api/follower': 'FollowerController.get',
  'get /api/follower/followers/:id': 'FollowerController.getFollowers',
  'get /api/follower/following/:id': 'FollowerController.getFollowing',
  'post /api/follower': 'FollowerController.create',
  'delete /api/follower/:id': 'FollowerController.destroy',

  /* Item routes */
  'get /api/item': 'ItemController.get',
  'post /api/item': 'ItemController.create',
  'delete /api/item/:id': 'ItemController.destroy',

  /* Location routes */
  'get /api/location': 'LocationController.get',
  'post /api/location': 'LocationController.create',

  /* Notification routes */
  'get /api/notification': 'NotificationController.get',
  'post /api/notification/:id': 'NotificationController.update',

  /* Order routes */
  'get /api/order': 'OrderController.get',
  'post /api/order': 'OrderController.create',
  'delete /api/post/:id': 'OrderController.destroy',

  /* Reaction routes */
  'get /api/reaction': 'ReactionController.get',
  'post /api/reaction': 'ReactionController.create',
  'delete /api/reaction/:id': 'ReactionController.destroy',

  /* Peer routes */
  'get /api/peer': 'PeerController.get',
  'post /api/peer': 'PeerController.create',

  /* Project routes */
  'get /api/project': 'ProjectController.get',
  //HMM
  'get /api/project/children/:id': 'ProjectController.getChildren',

  'post /api/project': 'ProjectController.create',
  'post /api/project/:id': 'ProjectController.update',
  'delete /api/project/:id': 'ProjectController.destroy',

  /* Project Member routes DEPRECIATE*/
  'get /api/projectmember': 'ProjectMemberController.get',
  'post /api/projectmember': 'ProjectMemberController.create',
  'delete /api/projectmember/:id': 'ProjectMemberController.destroy',

  /* Search routes */
  'get /api/search': 'SearchController.search',
  'get /api/search/feed': 'SearchController.getFeed',

  /* Task routes */
  'get /api/task': 'TaskController.get',
  'post /api/task/:id': 'TaskController.update',
  'post /api/task': 'TaskController.create',
  'delete /api/task/:id': 'TaskController.destroy',

  /* Time routes */
  'get /api/time': 'TimeController.get',
  'post /api/time': 'TimeController.create',

  /* Token routes */
  'get /api/token': 'TokenController.get',

  /* Transaction routes */
  'get /api/transaction': 'TransactionController.get',
  'post /api/transaction': 'TransactionController.create',
  'delete /api/transaction/:id': 'TransactionController.destroy',

  /* User (MEMBER) routes */
  'get /api/user': 'UserController.get',
  'post /api/user': 'UserController.create',
  //HMM
  'post /api/user/upload': 'UserController.upload',
  'post /api/user/:id': 'UserController.update',

  /* Validation routes */
  'get /api/validation': 'ValidationController.get',
  'post /api/validation': 'ValidationController.create',

  /* Wildcard routes */
  //'get /*' : 'HomeController.index'

};
