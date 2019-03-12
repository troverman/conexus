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

.controller( 'AppsController', ['$mdSidenav', '$rootScope', '$sailsSocket', '$sce', '$scope', 'config', 'lodash', 'ReactionModel', 'titleService', function AppsController( $mdSidenav, $rootScope, $sailsSocket, $sce, $scope, config, lodash, ReactionModel, titleService, transaction ) {
    titleService.setTitle('Apps | CRE8.XYZ');
    
    $scope.apps = [

        {title:'CRE8 CORE', description:'CREATE CORE PROTOCOLS; ALL MODELS', protocols:[]},
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

        {title:'Fitbit', description:'Fitbit Activity Tokenization, namespace: DATA+FITBIT+', protocols:''},

        {title:'USD', description:'USD Tokenization, manages custodial relationships. namespace: USD', protocols:''},

        {title:'ETH', description:'ETH Activity Tokenization, manages custodial relationships. namespace: ETH', protocols:''},
        {title:'ETH20', description:'ETH ERC 20 Tokenization, manages custodial relationships.', protocols:''},
        {title:'ETH721', description:'ETH ERC 721 Tokenization, manages custodial relationships.', protocols:''},

        {title:'BTC', description:'BTC Tokenization, manages custodial relationships.', protocols:''},
        {title:'LTC', description:'LTC Tokenization, manages custodial relationships.', protocols:''},
        {title:'STEEM', description:'STEEM Activity Tokenization, namespace: DATA+STEEM+', protocols:''},
        {title:'TRON', description:'TRON Activity Tokenization, namespace: DATA+STEEM+', protocols:''},

    ];

}]);
