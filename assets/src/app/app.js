angular.module( 'conexus', [
    'ui.router',
    'sails.io',
    'angularMoment',
    'duScroll',
    'chart.js',
    'ui.bootstrap',
    'nemLogging',
    'uiGmapgoogle-maps',
    'templates-app',
    'services',
    'models',
    'nvd3',
    'ngFileUpload',
    'ngMaterial',
    'highcharts-ng',
    'ngTagsInput',
    'angular-fullcalendar',
    'textAngular',
    'toaster',
    'ngAnimate',
    'hljs',
    'ngCytoscape',
    'conexus.about',
    'conexus.account',
    'conexus.action',
    'conexus.app',
    'conexus.apps',
    'conexus.association',
    'conexus.attention',
    'conexus.block',
    'conexus.connection',
    'conexus.content',
    'conexus.contentList',
    'conexus.developers',
    'conexus.discover',
    'conexus.footer',
    'conexus.market',
    'conexus.markets',
    'conexus.marketPair',
    'conexus.marketPlace',
    'conexus.members',
    'conexus.notifications',
    'conexus.nav',
    'conexus.home',
    'conexus.item',
    'conexus.login',
    'conexus.member',
    'conexus.order',
    'conexus.project',
    'conexus.projects',
    'conexus.protocol',
    'conexus.protocols',
    'conexus.reaction',
    'conexus.register',
    'conexus.search',
    'conexus.task',
    'conexus.tasks',
    'conexus.token',
    'conexus.time',
    'conexus.transaction',
    'conexus.transparency',
    'conexus.tx',
    'conexus.validation',
])
.config(['$locationProvider', '$mdThemingProvider', '$stateProvider', '$urlRouterProvider', function myAppConfig ( $locationProvider, $mdThemingProvider, $stateProvider, $urlRouterProvider ) {
    $mdThemingProvider.disableTheming();
    $urlRouterProvider.rule(function($injector, $location) {
        var path = $location.path();
        var hasTrailingSlash = path[path.length-1] === '/';
        if(hasTrailingSlash) {
            var newPath = path.substr(0, path.length - 1); 
            return newPath; 
        } 
    });
    if (window.location.hash && window.location.hash == '#_=_') {window.location.hash = '';}
    $urlRouterProvider.otherwise(function ($injector, $location) {
        if ($location.$$url === '/') {window.location = '/';}
        else {window.location = $location.$$absUrl;}
    });
    $locationProvider.html5Mode(true);

}])
.run(function run(){moment.locale('en')})
.controller( 'AppCtrl', ['$location', '$rootScope', '$scope', '$state', 'seoService', 'titleService', 'UserModel', function AppCtrl ( $location, $rootScope, $scope, $state, seoService, titleService, UserModel ) {

    //TODO: BETTER
    //BETTER THAN RENDERING IN VIEW.. LOL
    $rootScope.currentUser = window.currentUser;
    if ($rootScope.currentUser){
        UserModel.get({id:$rootScope.currentUser.id}).then(function(member){
            $rootScope.currentUser = member;
            if($rootScope.currentUser.dateOfBirth){$rootScope.currentUser.dateOfBirth = new Date($rootScope.currentUser.dateOfBirth)}
            $rootScope.balance = member.balance;
            $rootScope.reputation = member.reputation;

            //TODO!
            //PACKAGE IN LOGIN FXN -- APP PERMS ETC
            //INIT THE LOGIN, THE DATA, THE USER
            //getLatLng()
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function (position) {
                    lat = position.coords.latitude; 
                    lng = position.coords.longitude;
                    $rootScope.currentUser.location = {
                        lat:position.coords.latitude,
                        lng:position.coords.longitude
                    };
                });
            }
            //USER IS LOADED

        });
    }

    $rootScope.$on('$stateChangeStart',function(){
        $rootScope.stateIsLoading = true;
    });

    $rootScope.$on('$stateChangeSuccess',function(){
        $rootScope.stateIsLoading = false;
        window.scrollTo(0, 0);
        if ($state.current.url.substring(1) !== ''){
            titleService.setTitle($state.current.url.substring(1).replace(/(^|\s)\S/g, function(t) { return t.toUpperCase() }) +' | CRE8.XYZ');
            //seoService.setDescription('LET\'s CRE8');
            //seoService.setKeywords('CRE8,love,unification,universal,income,eglatarian');
            $rootScope.projectNavigation = $state.current.url.substring(1);
        }
        else{titleService.setTitle('CRE8.XYZ');}
    });

    $rootScope.$watch(function(){
        MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
        return true;
    });

    $rootScope.goToState = function(state, params){$location.path($state.href(state, params));};

    $rootScope.associatedModels = [];
    $rootScope.consentAgreement = false;

    //ROOTSCOPE..
    $rootScope.directedGraphStyle = [
        {
            "selector": "core",
            "style": {
                "selection-box-color": "#AAD8FF",
                "selection-box-border-color": "#8BB0D0",
                "selection-box-opacity": "0.5"
            }
        }, {
            "selector": "node",
            "style": {
                "width": "25",
                "height": "25",
                "content": "data(name)",
                "font-size": "9px",
                "text-valign": "center",
                "text-halign": "center",
                "background-color": "#77828C",
                "text-outline-color": "#77828C",
                "text-outline-width": "2px",
                "color": "#fff",
                "overlay-padding": "3px",
                "z-index": "10"
            }
        }, {
            "selector": "node[?attr]",
            "style": {
                "shape": "rectangle",
                "background-color": "#aaa",
                "text-outline-color": "#aaa",
                "width": "8px",
                "height": "8px",
                "font-size": "3px",
                "z-index": "1"
            }
        }, {
            "selector": "node[?query]",
            "style": {
                "background-clip": "none",
                "background-fit": "contain"
            }
        }, {
            "selector": "node:selected",
            "style": {
                "border-width": "3px",
                "border-color": "#AAD8FF",
                "border-opacity": "0.5",
                "background-color": "#77828C",
                "text-outline-color": "#77828C"
            }
        }, {
            "selector": "edge",
            "style": {
                "curve-style": "bezier",
                "target-arrow-shape": "triangle",
                "arrow-scale":"0.75",
                "source-arrow-shape": "none",
                "opacity": "0.9",
                "line-color": "#bbb",
                "width": "3",
                "overlay-padding": "3px"
            }
        }, {
            "selector": "node.unhighlighted",
            "style": {
                "opacity": "0.2"
            }
        }, {
            "selector": "edge.unhighlighted",
            "style": {
                "opacity": "0.05"
            }
        }, {
            "selector": ".highlighted",
            "style": {
                "z-index": "999999"
            }
        }, {
            "selector": "node.highlighted",
            "style": {
                "border-width": "3px",
                "border-color": "#AAD8FF",
                "border-opacity": "0.5",
                "background-color": "#394855",
                "text-outline-color": "#394855"
            }
        }, {
            "selector": "edge.filtered",
            "style": {
                "opacity": "0"
            }
        }, {
            "selector": "edge[group=\"coexp\"]",
            "style": {
                "line-color": "#d0b7d5"
            }
        }, {
            "selector": "edge[group=\"coloc\"]",
            "style": {
                "line-color": "#a0b3dc"
            }
        }, {
            "selector": "edge[group=\"gi\"]",
            "style": {
                "line-color": "#90e190"
            }
        }, {
            "selector": "edge[group=\"path\"]",
            "style": {
                "line-color": "#9bd8de"
            }
        }, {
            "selector": "edge[group=\"pi\"]",
            "style": {
                "line-color": "#eaa2a2"
            }
        }, {
            "selector": "edge[group=\"predict\"]",
            "style": {
                "line-color": "#f6c384"
            }
        }, {
            "selector": "edge[group=\"spd\"]",
            "style": {
                "line-color": "#dad4a2"
            }
        }, {
            "selector": "edge[group=\"spd_attr\"]",
            "style": {
                "line-color": "#D0D0D0"
            }
        }, {
            "selector": "edge[group=\"reg\"]",
            "style": {
                "line-color": "#D0D0D0"
            }
        }, {
            "selector": "edge[group=\"reg_attr\"]",
            "style": {
                "line-color": "#D0D0D0"
            }
        }, 
        {
            "selector": "edge[group=\"user\"]",
            "style": {
                "line-color": "#f0ec86"
            }
        }
    ];
    $rootScope.directedGraphOptions = {
        textureOnViewport:true,
        pixelRatio: 'auto',
        motionBlur: false,
        hideEdgesOnViewport:true
    };
    $rootScope.directedGraphLayout = {name: 'cola'};
    
    //INITALIZE ROOT VARIABLES
    $rootScope.notificationCount = 0;


    //TODO: FILTERs

    //TODO:DEPRECIATE
    $rootScope.selectedTags = [];
    $rootScope.selectedAssets = [];
    $rootScope.selectedAssociations = [];
    $rootScope.selectedLocations = [];
    
    //TODO:DEPRECIATE
    $rootScope.searchQueryNav = {
        assetsInput:[],
        assetsOutput:[],
        associations:[],
        context:[],
        model:[],
        locations:[],
        query:[],
        tags:[],
        type:[],
    };

    $rootScope.taskTime = 0;



}])

.directive('errSrc', function() {return {link: function(scope, element, attrs) {element.bind('error', function() {if (attrs.src != attrs.errSrc) {attrs.$set('src', attrs.errSrc);}});}}})