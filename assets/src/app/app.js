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
    //$mdThemingProvider.theme('default').primaryPalette('blue-grey').accentPalette('blue')
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

    //titleService.setTitle('CRE8.XYZ')
    //seoService.setDescription('LET\'s CRE8');
    //seoService.setKeywords('CRE8,love,unification,universal,income,eglatarian');
    
    //TODO: LOCAL STORAGE

    //TODO: BETTER
    $rootScope.currentUser = window.currentUser;
    if ($rootScope.currentUser){
        UserModel.get({id:$rootScope.currentUser.id}).then(function(member){
            $rootScope.currentUser = member;
            if($rootScope.currentUser.dateOfBirth){$rootScope.currentUser.dateOfBirth = new Date($rootScope.currentUser.dateOfBirth)}
            $rootScope.balance = member.balance;
            $rootScope.reputation = member.reputation;
            //force update 
            //reload on -- watch patch possible 
        });
    }

    $rootScope.$on('$stateChangeStart',function(){
        $rootScope.stateIsLoading = true;
    });

    $rootScope.$on('$stateChangeSuccess',function(){
        $rootScope.stateIsLoading = false;
        
        //if ($state.current.url.split('/').length > 1){
        //    $rootScope.associatedModels = [{model:$state.current.url.split('/')[0].toUpperCase(), id:$state.current.url.split('/')[1]}];
        //}

        window.scrollTo(0, 0);
        //titleService | seoService
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

    $rootScope.goToState = function(state, params){
        $location.path($state.href(state, params));
    };
    

    $rootScope.associatedModels = [];
    
    //INITALIZE ROOT VARIABLES
    $rootScope.notificationCount = 0;

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

.directive('errSrc', function() {
    return {
        link: function(scope, element, attrs) {
            element.bind('error', function() {
                if (attrs.src != attrs.errSrc) {
                    attrs.$set('src', attrs.errSrc);
                }
            });
        }
    }
})