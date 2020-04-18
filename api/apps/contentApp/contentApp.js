//CRE8.CONTENT.ALPHA
var App = {

	'CONNECTION+Q': require('q'),
	'CONNECTION+CRYPTO': require('crypto'),

	'CONNECTION+SELF': {
        model: {type: 'string', defaultsTo: 'CONTENT'},
        title: {type: 'string', allowNull: true},
        content: {type: 'string'},
        associatedModels: {type: 'json'},
        context: {type: 'string'},
        type: {type: 'string', defaultsTo: 'POST'},
        location: {type: 'json'},
        //CREATOR
        //ITEM vs CONTENT
        user: {model: 'user', required: true},
        creator: {type: 'string'},
        owner: {model: 'user'}, 
        data: {type: 'json'},
    },

    //SHIM.. BUILD DATA FROM PROVIDERS :) :P 
    //UTIL FXN 
	//global['appApp']['GET+GLOBAL']();
	//'GET+GLOBAL': function(model){return global[model]}
	//'CONNECTION+SELF+MODEL': function(){return global['Content']},
	
	'DB': function(){return global['Content']},

    //HASH OF ATTRIBUTES ???
    //db: await orbitdb.docs('CRE8.CONTENT'),
    'INIT': async function(){
    //	await ContentApp.db.load();
    },

	//TODO: MULTI CONTEXT WRT DATA STORE
	'GET': async function(input) {
		var deferred = App['CONNECTION+Q'].defer();
		var limit = parseInt(input.query.limit) || 1;
		var skip = parseInt(input.query.skip) || 0;
		var sort = input.query.sort || 'createdAt DESC';
		var id = input.query.id;
		if(input.query.id){
			var models = await App['DB']().find({id:id}).limit(limit).skip(skip).sort(sort).populate('user')
    		//ATTENTION???
    		//PRIMITIVE MACHINE ATTENTION
    		//MACHINE REPPUTATION
    			//APP-PROTOCOL-CONNECTION LOGIC WRT MACHINE REP && RATE LIMITS ETC
    		//THIS IS MACHINENE ATTENTION VS 'ATTENTION TIMER' DUP
    		//THERE IS AN ARTECTICTURE DESIGN PATTERN THAT DOES THIS
    		//GET EVENT . . . 
			//eventApp['CREATE'](itemModel);
			//WOULD LIKE TO MOVE FORWARD WITH PACKET ROUTING MACHINE ATT &&
			App['DB']().subscribe(input, [models[0].id]);
			return associationApp['GET'](models[0]);
		}
		else if (input.query.contentModel){
			var contentModel = input.query.contentModel;
			return App['DB']().find({contentModel:contentModel}).limit(limit).skip(skip).sort(sort).populate('user');
			//Content.subscribe(input, models.map((obj)=>obj.id));
			//var promises = [];
			//for (x in models){promises.push(getAssociations(models[x]));}
			//Q.all(promises).then((populatedModels)=>{
			//	for (x in models){models[x] = populatedModels[x];}
			//s});
		}
		else if(input.query.project){
			var project = input.query.project;
			return App['DB']().find({project:project}).limit(limit).skip(skip).sort(sort).populate('user');
		}
		else if (input.query.tag){
			var tag = input.query.tag;
			App['DB']().find({tags:{contains: tag}}).limit(limit).skip(skip).sort(sort).populate('user');
			App['DB']().subscribe(input, models.map(function(obj){return obj.id}));
			var promises = [];
			for (x in models){promises.push(associationApp['GET'](models[x]));}
			var populatedModels = await Q.all(promises);
			for (x in models){models[x] = populatedModels[x];}
			return models;
		}
		else if(input.query.user){
			var user = input.query.user;
			var models = await App['DB']().find({user:user}).limit(limit).skip(skip).sort(sort).populate('user');
			App['DB']().subscribe(input, models.map(function(obj){return obj.id}));
			var promises = [];
			for (x in models){promises.push(associationApp['GET'](models[x]));}
			var populatedModels = await  App['CONNECTION+Q'].all(promises);
			for (x in models){models[x] = populatedModels[x];}
			return models;
		}
		else{
			var models = await App['DB']().find({}).limit(limit).skip(skip).sort(sort).populate('user');
			var numRecords = App['DB']().count();
			App['DB']().subscribe(input, models.map(function(obj){return obj.id}));
			var promises = [];
			for (x in models){promises.push(associationApp['GET'](models[x]));}
			var populatedModels = await App['CONNECTION+Q'].all(promises);
			for (x in models){models[x] = populatedModels[x];}
			var returnObj = {data:models, info:{count:numRecords}};
			return returnObj;
		}
	},
	'CREATE': async function (input) {

		//language of connections to recurse to bits 
			//the highleve abstract to opcodes to binary seems a chore | gotta be better 
		//var Content = appApp.find(); . . . 
			//--> EventApp.find({type:'APP'}); 
					//--> appApp.find({type:'EVENT'})
						// --> ; -->; [];  
							//. . . 'STRING' 
								//CONJECTURE: A STRING IS THE MOST PRIMITIVE TYPE OF ___DATA___ || OR SERIES OF NUMBERS ( NUMBERS ARE A STRING ) ;
									//VIBRATION . . . STATE CHANGE - MOVEMENT IS (PATTERNS)
								//~~ (BINARY?) () WE REDUCE TO THE PHYSICAL COMPONENTS   
									//. . . BITS  COMPLETE THE CIRCLE 

		//THE BLOAT OF N ABSTRACTION LAYERS FEELS.. MESSY
			//THINK ABOUT YOUR AVERAGE NETWORKING PROTOCOL FLOW DIAGRAM 
		//i need to learn chinese  
		//var User = appApp.find(appApp.id); // something something 

		//App['CONNECTION+USER']()['DB']()
	

		var userModels = await User.find({id:input.param('user')});
		var model = {
			model: 'CONTENT', type: 'CONTENT', //appApp.id --> :)
			title: input.param('title'),
			type: input.param('type'),
			content: input.param('content'),
			user: userModels[0].id,
			creator: userModels[0].id,		
			data:{apps:{reactions:{plus:0, minus:0}, attention:{general:0}}}
		};
		model.hash = App['CONNECTION+CRYPTO'].createHmac('sha256', 'CRE8').update(JSON.stringify(model)).digest('hex');
		var newContent = await App['DB']().create(model);
		newContent.associatedModels = input.param('associatedModels');
		App['DB']().subscribe(input, [newContent.id]);
		App['DB']().publish(model.id, {verb: 'create', data: model});

		eventApp['CREATE'](newContent);

		App['TOKENS+CREATE'](newContent);

		//SHOULD BE REVERED TOP DOWN BY CONNECTION (ABSTRACT & DISCRETE VALIDATION TYPES)
		validationApp.createLegacy(newContent);

		return App['DB']().find({hash:model.hash});

	},

	'TOKENS+GET': function(model){
		//TODO: FACTOR			
		//for you to see the progress 
		//change model to app / type (APP = [  = protocol ] | think token and market ~ WHAT IS THE MOST PRIMITIVE TYPE A BIT BOI)
			//8 BYTE WORD
											//patterns of bools (0,1 ~~> QUANTUM GIVES SMOOTH) ?? OR OR third stat which is an and 
														//GRADIENT IS TRUTH
																//2^3 , 0,1,0+1
											//SOOO. . . IT'S A STRING

		//[yes] --> NATURAL RECURSION 
		//off rails kinda
		//CAN CONNECTION BE MOST PRIMITIVE TYPE OR STRING --> CONVERT OR BONRAY (I MEAN WERE DEALING WITH LAYERS OF ABSTRACTION) 
		var protocolTokens = [
			'CRE8', 
			'CRE8+'+model.model, 
			'CRE8+'+model.model+'+'+model.id,
		];
		if (model.model == 'ACTION'){}
		if (model.model == 'APP'){}
		if (model.model == 'ASSOCIATION'){
			//TODO: TOKEN GRAMMER
			//TODO: LINK ASSOCIATIONS
			//TODO: ' , ' grammer
			var string ='CRE8+ASSOCIATION+'
			console.log(model);
			for (x in model.associatedModels){
				string = string + '+' + model.associatedModels[x].type + '+' + model.associatedModels[x].id;
				model.associatedModels[x].type
			}
		}		
		//TYPES OF STRING SERILIZATION
		//DATA MODEL OBJ TO STRING
		for (x in Object.keys(model)){
			var dataType = Object.keys(model)[x].toUpperCase();
			var data = model[Object.keys(model)[x]];
			var prefix = 'CRE8+'+model.model;
			var string = prefix+'+'+dataType+'+'+data;
			protocolTokens.push(string);
		};
		//SHA256 HASH DIGEST OF DATA SIGNED WITH CRE8
		for (x in Object.keys(model)){
			var data = model[Object.keys(model)[x]];
			var hash = crypto.createHmac('sha256', 'CRE8').update(JSON.stringify(data)).digest('hex');
			var prefix = 'CRE8+'+model.model;
			var string = prefix+'+'+hash;
			protocolTokens.push(string);
		};
		//SHA256 HASH DIGEST OF AGGREGATE DATA SIGNED WITH CRE8
		var hash = crypto.createHmac('sha256', 'CRE8').update(JSON.stringify(model)).digest('hex');
		var prefix = 'CRE8+'+model.model;
		var string = prefix+'+'+hash;
		protocolTokens.push(string);
		return protocolTokens;
	},
	'TOKENS+CREATE':function(model){
		var tokens = App['TOKENS+GET'](model);
	},

	//SUPERSET --> BUILD IE GRUNT :) 
	//TODO: BUILDER CONFIG MAPPING ::: ::::
	//THINK ABOUT SERVING 
	views:{
		'content':{
			controller:function(init){
				var init = angular;
				angular.module( 'conexus.content', [])
				.config(['$stateProvider', function config( $stateProvider ) {
				    $stateProvider.state( 'content', {
				        url: '/content/:id',
				        views: {
				            "main": {controller: 'ContentController',templateUrl: 'content/index.tpl.html'}
				        },
				        resolve: {
				            content: ['$stateParams', 'ContentModel', function($stateParams, ContentModel){return ContentModel.get({id:$stateParams.id, limit:1, skip:0, sort:'createdAt DESC'});}],
				            contentList: ['content', 'ContentModel', function(content, ContentModel) {return ContentModel.get({contentModel:content.id, limit:100, skip:0, sort:'createdAt DESC'});}],
				        }
				    });
				}])
				.controller( 'ContentController', ['$location', '$mdSidenav', '$rootScope', '$sailsSocket', '$scope', 'AssociationModel', 'content', 'contentList', 'ContentModel', 'titleService', function ContentController( $location, $mdSidenav, $rootScope, $sailsSocket, $scope, AssociationModel, content, contentList, ContentModel, titleService ) {
				    $scope.content = content;
				    $scope.content.children = contentList;
				    if(!$scope.content){$location.path('/')}
				    if ($scope.content.title){titleService.setTitle($scope.content.title + ' | Content | CRE8.XYZ')}
				    else{titleService.setTitle('Content | CRE8.XYZ')}
				    console.log($scope.content, $scope.content.associationModels);
				    $scope.selectedTab = 'CONTENT';
				    $scope.tokenChart = {
				        chart: {zoomType: 'x'},
				        series: [{
				            id: 'Attention',
				            type: 'column',
				            name: 'Attention',
				            data: []
				        }],
				        title: {text: ''},
				        xAxis: {
				            crosshair: true,
				            gridLineWidth: 0.5,
				            gridLineColor: 'grey',
				            title: {text: null},
				            categories: [],
				        },
				        legend: {enabled: false},
				        yAxis: {title: {text: null}},
				        credits:{enabled:false},
				    };
				}]);
			},
			template:''
		},
		'contentList':{
			controller:function(){},
			template:''
		},
		'createContent':{
			controller:function(){},
			template:''
		},
		'nav':{
			'createContent':{
				controller:function(){},
				template:''
			}
		}
	}

};
module.exports = App;