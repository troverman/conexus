angular.module( 'conexus.developers', [
])

.config(['$stateProvider', 'hljsServiceProvider', function config( $stateProvider, hljsServiceProvider) {
    $stateProvider.state( 'developers', {
        url: '/developers',
        views: {
            "main": {
                controller: 'DevelopersController',
                templateUrl: 'developers/index.tpl.html'
            }
        }
    });
    hljsServiceProvider.setOptions({
        //tabReplace: '    '
    });
}])

.controller( 'DevelopersController', ['$mdSidenav', '$rootScope', '$sailsSocket', '$sce', '$scope', 'config', 'ContentModel', 'lodash', 'OrderModel', 'ReactionModel', 'titleService', 'TransactionModel', 'ValidationModel', function DevelopersController( $mdSidenav, $rootScope, $sailsSocket, $sce, $scope, config, ContentModel, lodash, OrderModel, ReactionModel, titleService, TransactionModel, ValidationModel ) {
    titleService.setTitle('Developers | CRE8.XYZ');
    $scope.results = '[{}]';
    $scope.newQuery = {};

    $scope.apiCall = function(query){
        if (query.model == 'CONTENT'){
            ContentModel.getSome('', '', 1, 0, 'createdAt DESC').then(function(models){
                $scope.results = JSON.stringify(models, null, 2);
            });
        }
        if (query.model == 'ORDER'){
            //TODO..
            OrderModel.getSome('', '', '', 1, 0, 'createdAt DESC').then(function(models){
                $scope.results = JSON.stringify(models, null, 2);
            });
        }
        if (query.model == 'TRANSACTION'){
            TransactionModel.getSome('', '', 1, 0, 'createdAt DESC').then(function(models){
                $scope.results = JSON.stringify(models, null, 2);
            });
        }
        if (query.model == 'VALIDATION'){
            ValidationModel.getSome('', '', 1, 0, 'createdAt DESC').then(function(models){
                $scope.results = JSON.stringify(models, null, 2);
            });
        }
    };
    //$scope.apiCall();

    //VALIDATION GRAPH
    $scope.graphOptions = {
        chart: {
            type: 'forceDirectedGraph',
            height: 450,
            margin:{top: 0, right: 0, bottom: 0, left: 0},
            color: function(d){
                return  d3.scale.category20()(d.group)
            },
            tooltip: {
                contentGenerator: function(d){return "";}
            },
            nodeExtras: function(node) {
                node && node
                  .append("text")
                  .attr("dx", 8)
                  .attr("dy", ".35em")
                  .text(function(d) { return d.name })
                  .style('font-size', '10px');
            }
        }
    };
 
    //ASSOCIATION MAP
    $scope.graphData = {
        nodes:[

            //MEMBER
            {name:'CONTENT'},
            {name:'MEMBER'},
            {name:'ORDER'},
            {name:'ITEM'},
            {name:'PROJECT'},
            {name:'TASK'},
            {name:'TIME'},
            {name:'TRANSACTION'},
            {name:'VALIDATION'},

            //PROJECT
            {name:'CONTENT'},
            {name:'MEMBER'},
            {name:'ORDER'},
            {name:'ITEM'},
            {name:'PROJECT'},
            {name:'TASK'},
            {name:'TRANSACTION'},

            //PROJECT TASK TIME
            {name:'PROJECT'},
            {name:'TASK'},
            {name:'TIME'},

            //VALIDATION VALIDATION
            {name:'VALIDATION'},
            {name:'VALIDATION'},

        ],
        links:[

            //MEMBER
            {value:1, source:1, target:0},
            {value:1, source:1, target:2},
            {value:1, source:1, target:3},
            {value:1, source:1, target:4},
            {value:1, source:1, target:5},
            {value:1, source:1, target:6},
            {value:1, source:1, target:7},
            {value:1, source:1, target:8},

            //PROJECT
            {value:1, source:13, target:9},
            {value:1, source:13, target:10},
            {value:1, source:13, target:11},
            {value:1, source:13, target:12},
            {value:1, source:13, target:14},
            {value:1, source:13, target:15},

            //PROJECT TASK TIME
            {value:1, source:18, target:16},
            {value:1, source:18, target:17},

            //VALIDATION VALIDATION
            {value:1, source:19, target:20},

        ]
    };

    $scope.graphData1 = {
        nodes:[

            //MEMBER
            {name:'VALIDATION 1'},
            {name:'VALIDATION 1a'},
            {name:'VALIDATION 1aa'},
            {name:'VALIDATION 1aaa'},
            {name:'VALIDATION 1ab'},
            {name:'VALIDATION 1b'},
            {name:'VALIDATION 1c'},
            {name:'VALIDATION 2'},


        ],
        links:[

            //MEMBER
            {value:1, source:1, target:0},
            {value:1, source:1, target:2},
            {value:1, source:1, target:3},


        ]
    };

    //for (x in $scope.item.associatedModels){
    //    var length = $scope.graphData.nodes.length;
    //    $scope.graphData.nodes.push({name:$scope.item.associatedModels[x].type})
    //    $scope.graphData.links.push({value:1, source:0, target:length});
    //}



    //DATA MODELS

    $scope.humanReadableValidationNFTModel = 'var humanReadableValidationNFTModel = '+JSON.stringify({ 
        string: 'MODEL+ADDRESS',
        information:{
            inCirculation:1,
            markets:0,
        },
        protocols:[
            'BASE',
        ],
        logic:{
            transferrable:true, 
            mint:'ONCREATEVALIDATION'
        }
    }, null, 4);


    $scope.newOrderModel = 'var newOrderModel = '+JSON.stringify([{
            setAlpha:{UNIVERSALTOKEN:1},
            setBeta:{'CRE8+TIME+VOLUNTEER+ONMINT+SPONSOR+ADDRESS':1}, 
            type:'ONBOOK', 
            status:'CONTINUAL'
        },{
            setAlpha:{UNIVERSALTOKEN:20},
            setBeta:{'CRE8+TIME+REST+ONMINT+SPONSOR+ADDRESS':0.1}, 
            type:'ONBOOK', 
            status:'CONTINUAL'
        },{
            setAlpha:{UNIVERSALTOKEN:15},
            setBeta:{
                'CRE8+TIME+CHILL+ONMINT+SPONSOR+ADDRESS':2, 
                'CRE8+TIME+VOLUNTEER+ONMINT+SPONSOR+ADDRESS':1
            }, 
            type:'ONBOOK', 
            status:'CONTINUAL'
        },
    ], null, 4);

    $scope.orderBookTensor = 'var orderBookTensor = '+JSON.stringify({
        CRE8:{
            BTC:{orderBook:[]},
            ETH:{orderBook:[]},
            LTC:{orderBook:[]},
            XRP:{orderBook:[]},
        },
        BTC:{
            CRE8:{orderBook:[]},
            ETH:{orderBook:[]},
            LTC:{orderBook:[]},
            XRP:{orderBook:[]},
        },
    }, null, 4);




    //MODELS..
    //HEADERS IN HTML.. GENERATE TOKEN.. PASSPORT.. 

    $scope.metaModel = 'var filter = '+JSON.stringify({
        filter:[{
            'obj': 'param'
        }],
        limit: 10,
        skip: 10,
        sort: 'param DESC || ASC'
    }, null, 4);

    $scope.actionModel = 'var actionModel = '+JSON.stringify({
        address: {type: 'string'},
        information: {type: 'json'},
        createdAt: {type: 'datetime'},
        action: {type: 'string'},
        associatedModels: {type: 'json'},
        location: {type: 'json'},
        tags: {type: 'json'},
        creator: {type: 'string'},
    }, null, 4);

    $scope.appModel = 'var appModel = '+JSON.stringify({
        address: {type: 'string'},
        protocols: {},
    }, null, 4);

    $scope.associationModel = 'var associationModel = '+JSON.stringify({
        associatedModels: [
            {type:"MODELTYPE", address:"ADDRESS"},
            {type:"MODELTYPE", address:"ADDRESS"}
        ],
        context: {
            "dimension":"weight",
        }
    }, null, 4);

    $scope.blockModel = 'var blockModel = '+JSON.stringify({
        txCount: {type: 'string'},
        height: {type: 'string'},
        minedBy: {type: 'string'},
        timeStamp: {type: 'string'},
        merkleRoot: {type: 'string'},
        previousBlock: {type: 'string'},
        nextBlock: {type: 'string'},
        size: {type: 'string'},
    }, null, 4);

    $scope.contentModel = 'var contentModel = '+JSON.stringify({
        id: {type: 'string'},
        title: {type: 'string'},
        content: {type: 'string'},
        tags: {type: 'string'}, 
        type: {type: 'string'},
        location: {type: 'json'},
        associatedModels: {type: 'json'},
        reactions: {type: 'json'},
        user: {model: 'user'},
        createdAt: {type: 'datetime'},
    }, null, 4);

    $scope.contentQuery = 'var query = '+JSON.stringify({
        filter:[{
            id: {'equals': ''},
            title: {'contains': ''},
            tags: {'contains': ''},
            type: {'equals' : ''},
            location: ['lat','lng','distance'],
            associatedModels: {'contains': {}},
            reactions: {'contains': {}},
            createdAt: {'lessThan': 'today'},
        }],
        limit: 1,
        skip:0,
        sort:'createdAt DESC',
    }, null, 4);

    $scope.followerModel = 'var followerModel = '+JSON.stringify({
        id: {type: 'string'},
        followed: {
            model: 'user',
        },
        follower: {
            model: 'user',
        }
    }, null, 4);

    $scope.itemModel = 'var itemModel = '+JSON.stringify({
        id: {type: 'string'},
        title: {type: 'string'},
        content: {type: 'string'},
        tags: {type: 'string'},
        associatedModels: {type: 'json'},
        reactions: {type: 'json'},
        location: {type: 'json'},
        info: {type: 'json'},
        user: {model: 'user'},
        owner: {type: 'json'}
    }, null, 4);

    $scope.memberModel = 'var memberModel = '+JSON.stringify({
        id: {type: 'string'},
        avatarUrl: {type: 'string',},
        coverUrl: {type: 'string'},
        email: {type: 'email',},
        username: {type: 'string',},
        firstName: {type: 'string'},
        lastName: {type: 'string'},
        dateOfBirth: {type: 'string'},
        address: {type: 'string'},
        loggedIn: {type: 'boolean'},
        isWorking: {type: 'boolean'},
        isLive: {type: 'boolean'},
        status: {type: 'string'},
        followingCount: {type: 'integer'},
        followerCount: {type: 'integer'},
        notificationCount: {type: 'integer'},
        projectCount: {type: 'integer'},
        totalWork: {type: 'integer'},
        reputation: {type: 'json'},
        balance: {type: 'json'},
        locationTime: {type: 'json'},
        passports: { collection: 'Passport', via: 'user' }
    }, null, 4);

    $scope.notificationModel = 'var notificationModel = '+JSON.stringify({
        id: {type: 'string'},
        user: {model: 'user'},
        type: {type: 'string'},
        content: {type: 'string'},
        priority: { type: 'string'},
        isRead: { type: 'boolean'}
    }, null, 4);

    $scope.orderModel = 'var orderModel = '+JSON.stringify({
        id: {type: 'string'},
        creator: {type: 'string'},
        status: {type: 'string'},
        type: {type: 'string'},
        setAlpha: {type:'json'},
        setBeta: {type:'json'},
        createdAt: {type: 'string'},
    }, null, 4);

     $scope.orderQuery = 'var query = '+JSON.stringify({
        limit: 10,
        skip:0,
        sort:'createdAt DESC',
    }, null, 4);

    $scope.passportModel = 'var passportModel = '+JSON.stringify({
        id: {type: 'string'},
        protocol: { type: 'alphanumeric'},
        password: { type: 'string', minLength: 8 },
        provider: { type: 'alphanumericdashed' },
        identifier: { type: 'string' },
        tokens: { type: 'json' },
        user: { model: 'User',}
    }, null, 4);

     $scope.projectModel = 'var projectModel = '+JSON.stringify({
        id: {type: 'string'},
        title: {type: 'string'},
        description: {type: 'string'},
        avatarUrl: {type: 'string'},
        urlTitle: {type: 'string'},
        stringManifold: {type: 'string'},
        tags: {type: 'string'},
        location: {type: 'json'},
        associatedModels: {type: 'json'},
        user: {model: 'user'},
        info: {type: 'json'},
    }, null, 4);

    $scope.projectCharterModel = 'var projectCharterModel = '+JSON.stringify({
        id: {type: 'string'},
        project: {type: 'string'},
        info: {type: 'json'},
    }, null, 4);

    $scope.reactionModel = 'var reactionModel = '+JSON.stringify({
        id: {type: 'string'},
        amount: {type: 'string'},
        type: {type: 'string'},
        user: {model: 'user'},
        associatedModels: {type: 'json'},
        reactions: {type: 'json'}
    }, null, 4);

    $scope.searchModel = 'var searchModel = '+JSON.stringify({
        filter:[{
            obj: 'param',
            model: 'CONTENT'
        }],
        limit: 10,
        skip: 0,
        sort: 'createdAt DESC'
    }, null, 4);

    $scope.taskModel = 'var taskModel = '+JSON.stringify({
        id: {type: 'string'},
        title: {type: 'string'},
        content: {type: 'string'},
        location: {type: 'json'},
        tags: {type: 'string'},
        user: {model: 'user'},
        associatedModels: {type: 'json'},
        reactions: {type: 'json'}
    }, null, 4);

    $scope.timeModel = 'var timeModel = '+JSON.stringify({
        id: {type: 'string'},
        amount: {type: 'string'},
        content: {type: 'string'},
        startTime: {type: 'string'},
        tags: {type: 'string'},
        user: {model: 'user'},
        associatedModels: {type: 'json'},
        location: {type: 'json'},
        reactions: {type: 'json'}
    }, null, 4);

    $scope.tokenModel = 'var tokenModel = '+JSON.stringify({
        string: {type: 'string'},
        protocols:{type:'json'},
        logic:{type:'json'},
        information:{type:'json'}
    }, null, 4);

    $scope.transactionModel = 'var transactionModel = '+JSON.stringify({
        id: 'string',
        to: 'address',
        from: 'address',
        amountSet: {"ASSETSTRING": 10, "CRE8":1},
        tags: 'comma,seperated,tag,string',
        content: 'transation content'
    }, null, 4);

    $scope.transactionQuery = 'var query = '+JSON.stringify({
        limit: 10,
        skip:0,
        sort:'createdAt DESC',
    }, null, 4);

    $scope.txModel = 'var txModel = '+JSON.stringify({
        addressFrom: {type: 'string'},
        addressTo: {type: 'string'},
        data: {type: 'string'}
    }, null, 4);

    $scope.validationModel = 'var validationModel = '+JSON.stringify({
        id: {type: 'string'},
        associatedModels: {type: 'json'},
        content: {type: 'string'},
        createdAt: {type: 'string'},
        reputation: {type: 'json'},
        type: {type: 'json'},
        user: {model: 'user'},
        validation: {type: 'json'},
        validationModels: {type: 'json'},
    }, null, 4);

    $scope.validationQuery = 'var query = '+JSON.stringify({
        limit: 10,
        skip:0,
        sort:'createdAt DESC',
    }, null, 4);

}]);
