//SELF CONFIG
module.exports = {
	
	bootstrap: function(cb) {
		console.log(initApp.initApp)
		initApp.init();
		cb();
	},

	//TODO: REMOVE
	//TODO: APP SPECIFIC 
	datastores: {
		'default': {
			adapter: 'sails-mongo',
			url: 'mongodb://heroku_vt7lbmkd:757kfop5h6loqicvfph68q41le@ds219648-a0.mlab.com:19648,ds219648-a1.mlab.com:19648/heroku_vt7lbmkd?replicaSet=rs-ds219648'
		}
	},

	globals: {
	   _: require('lodash'),
	   async: require('async'),
	   models: true,
	   services: true,
	   sails: true,
	},

	http: {
		middleware: {
			prerender: require('prerender-node').set('prerenderServiceUrl', 'https://tranquil-reef-73037.herokuapp.com/').set('prerenderToken', 'V8W4l4iLL7BRD4pB8stg'),
			order: [
				'cookieParser',
				'session',
				'bodyParser',
				'prerender',
				'compress',
				'poweredBy',
				'$custom',
				'router',
				'www',
				'favicon',
			],
		}
	},

	i18n: {},
	log: {},

	//REDUCE GLOBAL MODEL DEFINITIONS 
	//APPCECIFIC INHERITANCE 
	//META MODEL APP . . .
	models: {
		fetchRecordsOnUpdate: true,
		fetchRecordsOnCreate: true,
		fetchRecordsOnCreateEach: true,
		migrate: 'safe',
		datastore: 'default',
		attributes: {
			createdAt: { type: 'ref', columnType: 'datetime', autoCreatedAt: true, },
			updatedAt: { type: 'ref', columnType: 'datetime', autoUpdatedAt: true, },
			id: { type: 'string', columnName: '_id' }
		},
		dataEncryptionKeys: {default: 'V7TZVUpF5WLGg2c2eRVaSx0p3/4Ef11ZujTaY4EVdpY='},
	},

	passport: {
	  local: {
	  	strategy: require('passport-local').Strategy
	  },

	    //bearer: {
		   //strategy: require('passport-http-bearer').Strategy
	    //},

		twitter: {
			name: 'Twitter',
			protocol: 'oauth',
			strategy: require('passport-twitter').Strategy,
			options: {
				consumerKey: 'gRpa4CidX3vihKWZ3L1O1matV',
				consumerSecret: 'M7RskQyUx9Uzbc5C4O7ATQ00s3mC8JssPcP57H3EiVKcSFKSKp'
			}
		},
		facebook: {
			name: 'Facebook',
			protocol: 'oauth2',
			strategy: require('passport-facebook').Strategy,
			options: {
				clientID: '1660847900851145',
				clientSecret: '6eecbdb480a617f3e9b4c7e0c3f89665',
				scope: ['email']
			}
		},
		google: {
			name: 'Google',
			protocol: 'oauth2',
			strategy: require('passport-google-oauth').OAuth2Strategy,
			options: {
				clientID: '956713988528-86j1pkii5m9o8c1vfmb8qcbq2eot784d.apps.googleusercontent.com',
				clientSecret: 'TiuwOilqlUC4dtxOXbyhdqu2',
				scope: ['email']
			}
		},
		fitbit: {
			name: 'Fitbit',
			protocol: 'oauth2',
			strategy: require('passport-fitbit-oauth2').FitbitOAuth2Strategy,
			options: {
				clientID: '229VSS',
				clientSecret: 'ad0ea5803c56be0754e186b356abc90b',
				callbackURL: 'https://www.cre8.xyz/auth/fitbit/callback',
				scope: ['activity','heartrate','location','profile', 'sleep']
			}
		},
	},

	policies:{
	  '*': true,
	  '*': [ 'passport' ]
	},

	routes:{

	  //DYNAMIC DEFINED BY PEER :)

	  'get /': 'HomeController.index',
	  'get /about': 'HomeController.index',
	  'get /account': 'HomeController.index',
	  'get /action/:id': 'HomeController.index',
	  'get /app/:id': 'HomeController.index',
	  'get /apps': 'HomeController.index',
	  'get /association/:id': 'HomeController.index',
	  'get /attention/:id': 'HomeController.index',
	  'get /block/:id': 'HomeController.index',
	  'get /connections': 'HomeController.index',
	  'get /connection/:id': 'HomeController.index',
	  'get /content': 'HomeController.index',
	  'get /content/:id': 'HomeController.index',
	  'get /developers': 'HomeController.index',
	  'get /discover': 'HomeController.index',
	  'get /items': 'HomeController.index',
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
	  'get /member/:path/apps': 'HomeController.index',
	   //get /member/:path/:app': 'HomeController.index',
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
	  'get /project/:path/validations': 'HomeController.index',
	  'get /protocol/:id': 'HomeController.index',
	  'get /protocols': 'HomeController.index',
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


	  //TODO: AUTH APP
	  'get /logout': 'AuthController.logout',
	  'post /auth/local': 'AuthController.callback',
	  'post /auth/local/:action': 'AuthController.callback',
	  'get /auth/:provider': 'AuthController.provider',
	  'get /auth/:provider/callback': 'AuthController.callback',
	  'get /auth/:provider/:action': 'AuthController.callback',

	  //NEW WILL BE
	  //ROUTES IN APP // 
	  //get /api/ 

	  //REDUCE :~~)
	  //CALL QUERY PARSE APP TO PASS TO APP d(0.0)b

	  /* Action routes */
	  'get /api/action': 'ActionController.get',
	  'post /api/action': 'ActionController.create',

	  /* App routes */
	  'get /api/app': 'AppController.get',
	  'post /api/app': 'AppController.create',

	  /* Attention routes */
	  'get /api/attention': 'AttentionController.get',
	  'post /api/attention': 'AttentionController.create',

	  /* Association routes */
	  'get /api/association': 'AssociationController.get',

	  /* Block routes */
	  //'get /api/block': 'BlockController.get',
	  //'post /api/block': 'BlockController.create',

	  /* Connection routes */
	  'get /api/connection': 'ConnectionController.get',
	  'post /api/connection': 'ConnectionController.create',

	  /* Content routes */
	  'get /api/content': 'ContentController.get',
	  'post /api/content': 'ContentController.create',
	  'post /api/content/:id': 'ContentController.update',

	  /* Event routes */
	  'get /api/event': 'EventController.get',

	  /* Item routes */
	  'get /api/item': 'ItemController.get',
	  'post /api/item': 'ItemController.create',

	  /* Location routes */
	  'get /api/location': 'LocationController.get',
	  'post /api/location': 'LocationController.create',

	  /* Notification routes */
	  'get /api/notification': 'NotificationController.get',
	  'post /api/notification/:id': 'NotificationController.update',

	  /* Order routes */
	  'get /api/order': 'OrderController.get',
	  'post /api/order': 'OrderController.create',

	  /* Reaction routes */
	  //'get /api/reaction': 'ReactionController.get',
	  'post /api/reaction': 'ReactionController.create',

	  /* Peer routes */
	  'get /api/peer': 'PeerController.get',
	  'post /api/peer': 'PeerController.create',

	  /* Project routes */
	  'get /api/project': 'ProjectController.get',
	  'post /api/project': 'ProjectController.create',

	  /* Search routes */
	  'get /api/search': 'SearchController.search',
	  'get /api/search/feed': 'SearchController.getFeed',

	  /* Task routes */
	  'get /api/task': 'TaskController.get',
	  'post /api/task': 'TaskController.create',

	  /* Time routes */
	  'get /api/time': 'TimeController.get',
	  'post /api/time': 'TimeController.create',

	  /* Token routes */
	  'get /api/token': 'TokenController.get',

	  /* Transaction routes */
	  'get /api/transaction': 'TransactionController.get',
	  'post /api/transaction': 'TransactionController.create',

	  /* User (MEMBER) routes */
	  'get /api/user': 'UserController.get',
	  'post /api/user': 'UserController.create',
	  'post /api/user/:id': 'UserController.update',

	  /* Validation routes */
	  'get /api/validation': 'ValidationController.get',
	  'post /api/validation': 'ValidationController.create',

	  /* Wildcard routes */
	  //'get /*' : 'HomeController.index'

	},

	security:{
		cors:{
			allRoutes: true,
			allowOrigins: '*'
		}
	},

	session:{

	  secret: 'cb5b21a569493ca31834e3827c09b4ed',

	  // cookie: {
	  //   maxAge: 24 * 60 * 60 * 1000
	  // },

	  // adapter: 'redis',
	  // host: 'localhost',
	  // port: 6379,
	  // ttl: <redis session TTL in seconds>,
	  // db: 0,
	  // pass: <redis auth password>,
	  // prefix: 'sess:',

	  // adapter: 'mongo',
	  // host: 'localhost',
	  // port: 27017,
	  // db: 'sails',
	  // collection: 'sessions',

	},

	//TODO:NETWORKING ..
	//TODO: SHARE SOCKETS AMONST PEERS
	sockets:{

	  // adapter: 'memory',
	  // adapter: 'redis',
	  // host: '127.0.0.1',
	  // port: 6379,
	  // db: 'sails',
	  // pass: '<redis auth password>'

	  beforeConnect: function(handshake, cb) {
	    //console.log(session);
	    //User.getSession.then(function(session){})
	    //console.log(sails.session.User)
	    return cb(null, true);
	  },

	  afterDisconnect: function(session, socket, cb) {
	    //console.log(session.user)
	    //if (session.User){
	      //console.log(session.User.id);
	    //}
	    return cb();
	  },

	},

	views:{
	  extension: 'ejs',
	  layout: 'layout',
	  partials: false
	}

}

