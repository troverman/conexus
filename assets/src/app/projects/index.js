angular.module( 'conexus.projects', [
])

.config(['$stateProvider', function config( $stateProvider ) {
	$stateProvider.state( 'projects', {
		url: '/projects',
		views: {
			"main": {
				controller: 'ProjectsCtrl',
				templateUrl: 'projects/index.tpl.html'
			}
		},
		resolve: {
            projects: ['ProjectModel', function(ProjectModel) {
                return ProjectModel.getSome('', '', 100, 0, 'createdAt DESC');
            }]
        }
	});
}])

.controller( 'ProjectsCtrl', ['$rootScope', '$mdSidenav', '$sailsSocket', '$sce', '$scope', 'config', 'lodash', 'ProjectModel', 'projects', 'SearchModel', 'titleService', function ProjectsController( $rootScope, $mdSidenav, $sailsSocket, $sce, $scope, config, lodash, ProjectModel, projects, SearchModel, titleService ) {
	titleService.setTitle('Projects | CRE8.XYZ');
    $scope.currentUser = config.currentUser;
    $scope.projects = projects;

    if ($scope.currentUser){
        //get my projects
    }

    $scope.selectedSort = 'createdAt DESC';
    $scope.searchQuery = [];
    $scope.skip = 0;
    $scope.sortText = {'trendingScore DESC':'Trending','createdAt DESC':'Date Created','memberCount DESC': 'Member Count'}

    $scope.map = {
        center: {latitude: 35.902023, longitude: -84.1507067 },
        zoom: 9
    };
    $scope.markers = [];
    $scope.options = {scrollwheel: false};

    $scope.populateMap = function(){
        for (x in projects){
            if (projects[x].location){
                $scope.markers.push({
                    id:projects[x].id,
                    content:projects[x].title,
                    url:projects[x].urlTitle,
                    coords:{
                        latitude:projects[x].location.lat,
                        longitude:projects[x].location.lng
                    }
                });
            }
        }
    };
    $scope.populateMap();

    $scope.getLatLng = function() {
        if (navigator.geolocation) {
            $rootScope.stateIsLoading = true;
            navigator.geolocation.getCurrentPosition(function (position) {
                $rootScope.stateIsLoading = false;
                lat = position.coords.latitude; 
                lng = position.coords.longitude;
                $scope.map = {
                    center: {latitude: lat, longitude: lng},
                    zoom: 12
                };

                //TODO: INCOVERATE WITH NAV
                //TODO: SIMPLY UPDATE QUERY :)
                //$scope.searchQuery = [{text:'Current Location, 1mi | '+lng.toFixed(3)+', '+lat.toFixed(3), type:'LOCATION', query:{coordinates:[lng,lat]}}];

                
                //TODO: DISTANCE
                ProjectModel.getSome('location', [lng,lat], 100, 0, 'createdAt DESC').then(function(projects){
                    $scope.projects = projects;
                    $scope.markers = [];
                    $scope.populateMap();
                    $scope.init();
                 });

                $scope.$apply();

            });
        }
    };

    //IMPROVE :)
    $scope.loadAssociations = function(){        
        function countInArray(array, value) {return array.reduce(function(n, x){ return n + (x === value)}, 0);}
        $scope.sortedAssociationArray = [];
        for (x in $scope.associations){
            var amount = countInArray($scope.associations, $scope.associations[x]);
            if ($scope.sortedAssociationArray.map(function(obj){return obj.element}).indexOf($scope.associations[x]) == -1){
                $scope.sortedAssociationArray.push({amount:amount, element:$scope.associations[x]})
            }
        }
        $scope.sortedAssociationArray.sort(function(a,b) {return (a.amount < b.amount) ? 1 : ((b.amount < a.amount) ? -1 : 0);}); 
    };
    $scope.loadLocations = function(){
        $scope.tags = $scope.projects.map(function(obj){
            return obj.location;
        });
        $scope.tags = [].concat.apply([], $scope.tags);
        $scope.tags = $scope.tags.filter(function(e){return e});
        function countInArray(array, value) {return array.reduce(function(n, x){ return n + (x === value)}, 0);}
        $scope.sortedLocationArray = [];
        for (x in $scope.tags){
            var amount = countInArray($scope.tags, $scope.tags[x]);
            if ($scope.sortedLocationArray.map(function(obj){return obj.element}).indexOf($scope.tags[x]) == -1){
                $scope.sortedLocationArray.push({amount:amount, element:$scope.tags[x]})
            }
        }
        $scope.sortedLocationArray.sort(function(a,b) {return (a.amount < b.amount) ? 1 : ((b.amount < a.amount) ? -1 : 0);}); 
    };
    $scope.loadTags = function(){
        $scope.tags = $scope.projects.map(function(obj){
            var returnObj = {};
            if(obj.tags){obj.tags = obj.tags.split(',')}
            returnObj = obj.tags;
            return returnObj;
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
    };

    //IMPROVE :)
    $scope.init = function(){
        $scope.loadAssociations();
        $scope.loadLocations();
        $scope.loadTags();
        $scope.filterSet = {associations:$scope.sortedAssociationArray, tags:$scope.sortedTagArray, locations:$scope.sortedLocationArray}
    };
    $scope.init();









    //HMM
    $scope.loadMore = function() {
        $scope.skip = $scope.skip + 100;
        $rootScope.stateIsLoading = true;
        ProjectModel.getSome('', '', 100, $scope.skip, $scope.selectedSort).then(function(projects) {
            $rootScope.stateIsLoading = false;
            Array.prototype.push.apply($scope.projects, projects);
        });
    };

    $scope.search = function(){
        $rootScope.stateIsLoading = true;
        console.log($scope.searchQuery)
        ProjectModel.getSome('search', $scope.searchQuery, 20, 0, 'createdAt DESC').then(function(projects){
            $rootScope.stateIsLoading = false;
            $scope.projects = projects;
        });
    };

    $scope.selectSort = function(sort){
        $scope.selectedSort = sort;
        $rootScope.stateIsLoading = true;
        ProjectModel.getSome('search', $scope.searchQuery, 20, $scope.skip, $scope.selectedSort).then(function(projects){
            $rootScope.stateIsLoading = false;
            $scope.projects = projects;
        });
    };


    //TODO FILTER!
    //UNIFY^v .. //compute ^^^ in NAV FROM OBJ --> THEN ROOT

    $rootScope.$watch('searchQueryNav' ,function(){

        for(x in Object.keys($rootScope.searchQueryNav)){

            for (y in Object.keys($rootScope.searchQueryNav[Object.keys($rootScope.searchQueryNav)[x]])){

                if ($scope.searchQuery.map(function(obj){return obj.query}).indexOf($rootScope.searchQueryNav[Object.keys($rootScope.searchQueryNav)[x]][y].query)==-1){

                    $scope.searchQuery.push($rootScope.searchQueryNav[Object.keys($rootScope.searchQueryNav)[x]][y])

                }

            }

        }

        console.log($scope.searchQuery, $rootScope.searchQuery, $rootScope.searchQueryNav);

    }, true);

    $scope.$watch('searchQuery' ,function(newValue, oldValue){
    
        if (newValue !== oldValue) {

            console.log(newValue);

            $rootScope.stateIsLoading = true;
   
            $scope.searchQuery = $scope.searchQuery.map(function(obj){
                if (!obj.query && obj.text){obj.query = obj.text}
                if (!obj.type){obj.type='STRING'}
                return obj.query
            }).join(',');

            $scope.searchModel = [{
                model:'PROJECT',
                limit:100,
                skip:0,
                sort:'createdAt DESC',
                query: $scope.searchQuery, //ARRAY? 
            }];

            //TODO: AGNOSTIC SEARCH
            //SearchModel.search($scope.searchModel[0]).then(function(models){
            //    console.log(models);
            //});

            ProjectModel.getSome('search', $scope.searchModel[0].query, 100, 0, 'createdAt DESC').then(function(models){
                $rootScope.stateIsLoading = false;
                $scope.projects = models;
                $scope.init();
            });

        }

    }, true);

    $sailsSocket.subscribe('project', function (envelope) {
        switch(envelope.verb) {
            case 'created':
                $scope.projects.unshift(envelope.data);
                break;
        }
    });

}]);