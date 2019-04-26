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

    //TODO
    hljsServiceProvider.setOptions({});
}])

.controller( 'DevelopersController', ['$mdSidenav', '$rootScope', '$sailsSocket', '$sce', '$scope', 'ContentModel', 'OrderModel', 'ReactionModel', 'TransactionModel', 'ValidationModel', function DevelopersController( $mdSidenav, $rootScope, $sailsSocket, $sce, $scope, ContentModel, OrderModel, ReactionModel, TransactionModel, ValidationModel ) {

    $scope.results = {
        action:'[{}]',
        app:'[{}]',
        association:'[{}]',
        block:'[{}]',
        content:'[{}]',
        //data:'[{}]',
        //event:'[{}]',
        follower:'[{}]',
        item:'[{}]',
        location:'[{}]',
        member:'[{}]',
        market:'[{}]',
        motion:'[{}]',
        notification:'[{}]',
        order:'[{}]',
        passport:'[{}]',
        project:'[{}]',
        projectCharter:'[{}]',
        projectMember:'[{}]',
        protocol:'[{}]',
        reaction:'[{}]',
        search:'[{}]',
        task:'[{}]',
        token:'[{}]',
        time:'[{}]',
        transaction:'[{}]',
        tx:'[{}]',
        validation:'[{}]',
    };
    $scope.newQuery = {};
  
    //FACTOR IN GLOBAL SERCH MODEL FOR API CALLS :P
    $scope.apiCall = function(query){
        //if (query.model == 'ACTION'){}
        //if (query.model == 'APP'){}
        //if (query.model == 'ASSOCIATION'){}
        //if (query.model == 'BLOCK'){}
        if (query.model == 'CONTENT'){
            ContentModel.getSome('', '', 1, 0, 'createdAt DESC').then(function(models){
                $scope.results.content = JSON.stringify(models, null, 2);
            });
        }
        //if (query.model == 'DATA'){}
        //if (query.model == 'EVENT'){}
        //if (query.model == 'FOLLOWER'){}
        //if (query.model == 'ITEM'){}
        //if (query.model == 'LOCATION'){}
        //if (query.model == 'MEMBER'){}
        //if (query.model == 'MARKET'){}
        //if (query.model == 'MOTION'){}
        //if (query.model == 'NOTIFICATION'){}
        if (query.model == 'ORDER'){
            OrderModel.getSome('', '', '', 1, 0, 'createdAt DESC').then(function(models){
                $scope.results.order = JSON.stringify(models, null, 2);
            });
        }
        //if (query.model == 'PROJECT'){}
        //if (query.model == 'PROJECTCHARTER'){}
        //if (query.model == 'PROJECTMEMBER'){}
        //if (query.model == 'PROTOCOL'){}
        //if (query.model == 'REACTION'){}


        //EVERY API REQUEST COULD GO THOUGH SEARCH.. LOL SHOUD IT ?
        if (query.model == 'SEARCH'){
            TransactionModel.getSome('', '', 1, 0, 'createdAt DESC').then(function(models){
                $scope.results.search = JSON.stringify(models, null, 2);
            });
        }


        //if (query.model == 'TASK'){}
        //if (query.model == 'TOKEN'){}
        //if (query.model == 'TIME'){}
        if (query.model == 'TRANSACTION'){
            TransactionModel.getSome('', '', 1, 0, 'createdAt DESC').then(function(models){
                $scope.results.transaction = JSON.stringify(models, null, 2);
            });
        }
        //if (query.model == 'TX'){}
        if (query.model == 'VALIDATION'){
            ValidationModel.getSome('', '', 1, 0, 'createdAt DESC').then(function(models){
                $scope.results.validation = JSON.stringify(models, null, 2);
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

    $scope.graphExploreData = {
        nodes:[
            {name:'VALIDATION 1'},
            {name:'VALIDATION 1a'},
            {name:'VALIDATION 1b'},
        ],
        links:[
            {value:1, source:1, target:0},
            {value:1, source:1, target:2},
        ]
    };

    $scope.graphExploreData = {
        nodes:[], 
        links:[]
    };

    $scope.explore = function(){
        //POWER SET
        function getAllSubsets(theArray) {
          return theArray.reduce(function (subsets, value) {
            return subsets.concat(subsets.map(function (set) {
              return [value].concat(set);
            }));
          }, [[]]);
        };        
        var powerSet = getAllSubsets(['A','B','C','D']);
        powerSet.shift();
        powerSet.pop();

        for (x in powerSet){
        $scope.graphExploreData.nodes.push({name:powerSet[x]})
           for (y in powerSet){
                $scope.graphExploreData.links.push({value:1, source:parseInt(x), target:parseInt(y)});
            }
        }
    };
    $scope.explore();

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
    }, null, 2);

    $scope.protocolStructureModel = JSON.stringify({
        create: "function(){return true}",
        getSome: "function(){return true}"
    }, null, 2);

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
    ], null, 2);

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
    }, null, 2);




    //MODELS..
    //HEADERS IN HTML.. GENERATE TOKEN.. PASSPORT.. 

    $scope.actionTokenization = JSON.stringify({
        create:'function(newFollow){}',
        getSome:'function(newQuery){}'
    }, null, 2);

    console.log($scope.actionTokenization)

    $scope.metaModel = 'var filter = '+JSON.stringify({
        filter:[{
            'obj': 'param'
        }],
        limit: 10,
        skip: 10,
        sort: 'param DESC || ASC'
    }, null, 2);


    //is this it?
    //recursive? 
    //close

    $scope.queryModel = [{
        filter:[
            {
                association:'association',
                limit:'limit',
                skip:'skip',
                sort:'sort',
                chain:'OR',
            },
            {
                id:'id',
                chain:'OR',
            },
            {
                location:{coordinates:['long', 'lat'], distance:'distance'},
                limit:'limit',
                skip:'skip',
                sort:'sort',
                chain:'OR',
            },
            {
                query:'query',
                limit:'limit',
                skip:'skip',
                sort:'sort',
                chain:'OR',
            },
            {
                tag:'tag',
                limit:'limit',
                skip:'skip',
                sort:'sort',
                chain:'OR',
            },
            {
                urlTitle:'urlTitle',
                chain:'OR',
            }
        ],
        limit:'limit',
        skip:'skip',
        sort:'sort',
        chain:'OR'
    }];

    $scope.queryModel = 'var queryModel = '+JSON.stringify([{
        filter:[{
            model:'Association, Task, Project',//Association, Task, Project ..
            modelParam:'association, id, location, query, tag, ...',//'association, id, location, query, tag, urlTitle',
            query:'query',
            association:{
                population:'boolean',
                depth:'integer',
            },
            params:{
                limit:'integer',
                skip:'integer',
                sort:'modelParam sortParam',
            },
            chain:'logic [\'AND\',\'OR\']',
        }],
        params:{
            limit:'integer',
            skip:'integer',
            sort:'modelParam sortParam',
        },
        chain:'logic [\'AND\',\'OR\']'
    }], null, 2);

    $scope.actionModel = 'var actionModel = '+JSON.stringify({
        address: {type: 'string'},
        information: {type: 'json'},
        createdAt: {type: 'datetime'},
        action: {type: 'string'},
        associatedModels: {type: 'json'},
        location: {type: 'json'},
        tags: {type: 'json'},
        creator: {type: 'string'},
    }, null, 2);

    $scope.appModel = 'var appModel = '+JSON.stringify({
        address: {type: 'string'},
        protocols: {},
    }, null, 2);

    $scope.associationModel = 'var associationModel = '+JSON.stringify({
        associatedModels: [
            {type:"MODELTYPE", address:"ADDRESS"},
            {type:"MODELTYPE", address:"ADDRESS"}
        ],
        context: {
            "dimension":"weight",
        }
    }, null, 2);

    $scope.blockModel = 'var blockModel = '+JSON.stringify({
        txCount: {type: 'string'},
        height: {type: 'string'},
        minedBy: {type: 'string'},
        timeStamp: {type: 'string'},
        merkleRoot: {type: 'string'},
        previousBlock: {type: 'string'},
        nextBlock: {type: 'string'},
        size: {type: 'string'},
    }, null, 2);

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
    }, null, 2);

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
    }, null, 2);

    $scope.followerModel = 'var followerModel = '+JSON.stringify({
        id: {type: 'string'},
        followed: {
            model: 'user',
        },
        follower: {
            model: 'user',
        }
    }, null, 2);

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
    }, null, 2);

    $scope.locationModel = 'var locationModel = '+JSON.stringify({
        creator: {type: 'string'},
        location: {type: 'json'},
    }, null, 2);

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
    }, null, 2);

    $scope.notificationModel = 'var notificationModel = '+JSON.stringify({
        id: {type: 'string'},
        user: {model: 'user'},
        type: {type: 'string'},
        content: {type: 'string'},
        priority: { type: 'string'},
        isRead: { type: 'boolean'}
    }, null, 2);

    $scope.orderModel = 'var orderModel = '+JSON.stringify({
        id: {type: 'string'},
        creator: {type: 'string'},
        status: {type: 'string'},
        type: {type: 'string'},
        setAlpha: {type:'json'},
        setBeta: {type:'json'},
        createdAt: {type: 'string'},
    }, null, 2);

     $scope.orderQuery = 'var query = '+JSON.stringify({
        limit: 10,
        skip:0,
        sort:'createdAt DESC',
    }, null, 2);

    $scope.passportModel = 'var passportModel = '+JSON.stringify({
        id: {type: 'string'},
        protocol: { type: 'alphanumeric'},
        password: { type: 'string', minLength: 8 },
        provider: { type: 'alphanumericdashed' },
        identifier: { type: 'string' },
        tokens: { type: 'json' },
        user: { model: 'User',}
    }, null, 2);

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
    }, null, 2);

    $scope.projectCharterModel = 'var projectCharterModel = '+JSON.stringify({
        id: {type: 'string'},
        project: {type: 'string'},
        info: {type: 'json'},
    }, null, 2);

    $scope.projectMemberModel = 'var projectMemberModel = '+JSON.stringify({
        id: {type: 'string'},
        project: {model: 'project'},
        user: {model: 'user'},
    }, null, 2);

    $scope.protocolModel = 'var protocolModel = '+JSON.stringify({"protocol":"function(){}"}, null, 2);

    $scope.reactionModel = 'var reactionModel = '+JSON.stringify({
        id: {type: 'string'},
        amount: {type: 'string'},
        type: {type: 'string'},
        user: {model: 'user'},
        associatedModels: {type: 'json'},
        reactions: {type: 'json'}
    }, null, 2);

    $scope.searchModel = 'var searchModel = '+JSON.stringify({
        filter:[{
            obj: 'param',
            model: 'CONTENT'
        }],
        limit: 10,
        skip: 0,
        sort: 'createdAt DESC'
    }, null, 2);

    $scope.taskModel = 'var taskModel = '+JSON.stringify({
        id: {type: 'string'},
        title: {type: 'string'},
        content: {type: 'string'},
        location: {type: 'json'},
        tags: {type: 'string'},
        user: {model: 'user'},
        associatedModels: {type: 'json'},
        reactions: {type: 'json'}
    }, null, 2);

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
    }, null, 2);

    $scope.tokenModel = 'var tokenModel = '+JSON.stringify({
        string: {type: 'string'},
        protocols:{type:'json'},
        logic:{type:'json'},
        information:{type:'json'}
    }, null, 2);

    $scope.transactionModel = 'var transactionModel = '+JSON.stringify({
        id: 'string',
        to: 'address',
        from: 'address',
        amountSet: {"ASSETSTRING": 10, "CRE8":1},
        tags: 'comma,seperated,tag,string',
        content: 'transation content'
    }, null, 2);

    $scope.transactionQuery = 'var query = '+JSON.stringify({
        limit: 10,
        skip:0,
        sort:'createdAt DESC',
    }, null, 2);

    $scope.txModel = 'var txModel = '+JSON.stringify({
        addressFrom: {type: 'string'},
        addressTo: {type: 'string'},
        data: {type: 'string'}
    }, null, 2);

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
    }, null, 2);

    $scope.validationQuery = 'var query = '+JSON.stringify({
        limit: 10,
        skip:0,
        sort:'createdAt DESC',
    }, null, 2);



}]);
