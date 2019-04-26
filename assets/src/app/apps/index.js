angular.module( 'conexus.apps', [
])

.config(['$stateProvider', function config( $stateProvider ) {
    $stateProvider.state( 'apps', {
        url: '/apps',
        views: {
            "main": {
                controller: 'AppsController',
                templateUrl: 'apps/index.tpl.html'
            }
        }
    });
}])

.controller( 'AppsController', ['$mdSidenav', '$rootScope', '$sailsSocket', '$sce', '$scope', 'ReactionModel', function AppsController( $mdSidenav, $rootScope, $sailsSocket, $sce, $scope, ReactionModel, transaction ) {
    
    $scope.apps = [
        {title:'CRE8 CORE', description:'CRE8.XYZ CORE PROTOCOLS; ALL MODELS', manifold:'CRE8+', tags:'CRE8,CORE'},
        //{title:'CRE8 CORE MAPPING', description:'CREATE CORE PROTOCOLS; ALL MODELS', protocols:[]},
        //{title:'CRE8 CORE ASSOCIATION', description:'CREATE CORE PROTOCOLS; ALL MODELS', protocols:''},
        //{title:'CRE8 CORE CONTENT', description:'CREATE CORE PROTOCOLS; ALL MODELS', protocols:''},
        //{title:'CRE8 CORE ITEM', description:'CREATE CORE PROTOCOLS; ALL MODELS', protocols:''},
        //{title:'CRE8 CORE FOLLOWER', description:'CREATE CORE PROTOCOLS; ALL MODELS', protocols:''},
        //{title:'CRE8 CORE MEMBER', description:'CREATE CORE PROTOCOLS; ALL MODELS', protocols:''},
        //{title:'CRE8 CORE NOTIFICATION', description:'CREATE CORE PROTOCOLS; ALL MODELS', protocols:''},
        //{title:'CRE8 CORE ORDER', description:'CREATE CORE PROTOCOLS; ALL MODELS', protocols:''},
        //{title:'CRE8 CORE PASSPORT', description:'CREATE CORE PROTOCOLS; ALL MODELS', protocols:''},
        //{title:'CRE8 CORE PROJECT', description:'CREATE CORE PROTOCOLS; ALL MODELS', protocols:''},
        //{title:'CRE8 CORE PROJECT PROTOCOL', description:'CREATE CORE PROTOCOLS; ALL MODELS', protocols:''},
        //{title:'CRE8 CORE REACTION  ', description:'CREATE CORE PROTOCOLS; ALL MODELS', protocols:''},
        //{title:'CRE8 CORE TIME', description:'CREATE CORE PROTOCOLS; ALL MODELS', protocols:''},
        //{title:'CRE8 CORE TRANSACTION', description:'CREATE CORE PROTOCOLS; ALL MODELS', protocols:''},
        //{title:'CRE8 CORE VALIDATION', description:'CREATE CORE PROTOCOLS; ALL MODELS', protocols:''},
        //ITEM APPS UTILITIZE THE ACTION MODEL.. HAVE MANIFOLDS SUCH AS WEAR, USE, CONSUME --> WATER AS ITEM :) YAY :)) +
        {title:'UNIVERSAL TOKEN', description:'Universal Token, an eglatarian initalization for value map creation', manifold:'UNIVERSALTOKEN+', tags:'CRE8,UNIVERSALTOKEN'},
        {title:'Machine Learning Tokenization', description:'', tags:'Machine,ai,container,intellligence,pattern'},
        {title:'Location Tokenization', description:'Location Tokenization; A Space Time Mapping', tags:'USD,bank,finance,fiat,authentication'},
        {title:'Consumption', description:'Comsumption Tracking Tokenization', manifold:'CRE8+CONSUMPTION+', tags:'CRE8,consumption'},
        {title:'Fitbit Activity Tokenization', description:'Fitbit Activity Tokenization, authentication and app integration', manifold:'APP+FITBIT+', tags:'fitbit,data,exercise,health,authentication'},
        {title:'CRE8 Capital', description:'Smart Investment though Synthetic Intellligence; requires permissions to access balances.', tags:'CRE8,capital,investment,financialmanagement,ai,artificialintelligence'},
        {title:'Voetr', description:'Consensus Building on Legislation & Political Representation', manifold:'APP+VOETR+', tags:'voetr,voting,politics,legislation,representation'},
        {title:'Inspiro', description:'Tokenization of Inspiration https://www.inspiro.care', manifold:'APP+INSPIRO+', tags:'medicine,medical,hardware,device'},
        {title:'CRE8.NYC', description:'CRE8 Partnership with New York City .NYC', tags:'CRE8,capital,investment,financialmanagement,ai,artificialintelligence'},
        {title:'CRE8.CITY', description:'CRE8 Partnership with CITY', tags:'CRE8,capital,investment,financialmanagement,ai,artificialintelligence'},
        {title:'Delivery', description:'2nd Stage Delivery Protocol', tags:'CRE8,capital,investment,financialmanagement,ai,artificialintelligence'},
        {title:'USD Tokenization', description:'USD Tokenization, manages custodial relationships with affiliate banks and institutions.', manifold:'USD', tags:'USD,bank,finance,fiat,authentication'},
        {title:'ETH Tokenization', description:'ETH Activity Tokenization, manages custodial relationships', manifold:'ETH', tags:'ETH,crypto,finance'},
        {title:'ETH20 Tokenization', description:'ETH ERC 20 Tokenization, manages custodial relationships', manifold:'ETH20', tags:'ETH,crypto,finance,token,ERC20'},
        {title:'ETH721 Tokenization', description:'ETH ERC 721 Tokenization, manages custodial relationships', manifold:'ETH721', tags:'ETH,crypto,finance,token,ERC721,NFT'},
        {title:'BTC Tokenization', description:'BTC Tokenization, manages custodial relationships', manifold:'BTC', tags:'BTC,crypto,finance'},
        {title:'LTC Tokenization', description:'LTC Tokenization, manages custodial relationships', manifold:'LTC', tags:'LTC,crypto,finance'},
        {title:'XRP Tokenization', description:'LTC Tokenization, manages custodial relationships', manifold:'XRP', tags:'XRP,crypto,finance'},
        {title:'TRON Tokenization', description:'TRON Tokenization, manages custodial relationships', manifold:'TRON', tags:'TRON,crypto,finance'},
        {title:'STEEM Activity Tokenization', description:'STEEM Activity Tokenization, authentication and app integration', manifold:'DATA+STEEM+', tags:'STEEM,activity,app,authentication'},
    ];

    //TODO: BETTER | TAG STORAGE
    $scope.loadTags = function(){
        $scope.tags = $scope.apps.map(function(obj){
            if(obj.tags){obj.tags = obj.tags.split(',')}
            return obj.tags;
        });
        $scope.tags = [].concat.apply([], $scope.tags);
        $scope.tags = $scope.tags.filter(function(e){return e});
        function countInArray(array, value) {return array.reduce(function(n, x){ return n + (x === value)}, 0);}
        $scope.sortedTagArray = [];
        for (x in $scope.tags){
            var amount = countInArray($scope.tags, $scope.tags[x]);
            if ($scope.sortedTagArray.map(function(obj){return obj.element}).indexOf($scope.tags[x]) == -1){
                $scope.sortedTagArray.push({amount:amount, element:$scope.tags[x]})
            }
        }
        $scope.sortedTagArray.sort(function(a,b) {return (a.amount < b.amount) ? 1 : ((b.amount < a.amount) ? -1 : 0);}); 
    }
    $scope.loadTags();

    $scope.filterSet = {tags: $scope.sortedTagArray};

    //TODO: SEARCH
    //TODO: COMPLEX QUERY

}]);
