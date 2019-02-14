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
                return ProjectModel.getSome('location', [0,0], 100, 0, 'createdAt DESC');
            }]
        }
	});
}])

.controller( 'ProjectsCtrl', ['$rootScope', '$mdSidenav', '$sailsSocket', '$sce', '$scope', 'config', 'lodash', 'ProjectModel', 'projects', 'SearchModel', 'titleService', function ProjectsController( $rootScope, $mdSidenav, $sailsSocket, $sce, $scope, config, lodash, ProjectModel, projects, SearchModel, titleService ) {
	titleService.setTitle('Projects | CRE8.XYZ');
    $scope.currentUser = config.currentUser;
    $scope.newProject = {};
    $scope.newProjectToggleVar = false;
    $scope.selectedSort = 'createdAt DESC';
    $scope.skip = 0;
    $scope.sortText = {'trendingScore DESC':'Trending','createdAt DESC':'Date Created','memberCount DESC': 'Member Count'}
    $scope.projects = projects;

    $scope.map = {
        center: {latitude: 35.902023, longitude: -84.1507067 },
        zoom: 9
    };
    $scope.markers = [];
    $scope.options = {scrollwheel: false};

    $scope.getLatLng = function() {
        if (navigator.geolocation) {
            $rootScope.stateIsLoading = true;
            console.log(navigator.geolocation)
            navigator.geolocation.getCurrentPosition(function (position) {
                console.log(position)
                $rootScope.stateIsLoading = false;
                lat = position.coords.latitude; 
                lng = position.coords.longitude;
                $scope.map = {
                    center: {latitude: lat, longitude: lng},
                    zoom: 12
                };
                //TODO: DISTANCE
                ProjectModel.getSome('location', [lng,lat], 100, 0, 'createdAt DESC').then(function(projects){
                    $scope.projects = projects;
                    $scope.markers = [];
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
                 });
                $scope.$apply();
            });
        }
    };

    $scope.getLatLng();
    
    //TODO: BETTER | BETTER QUERIES
    for (x in projects){
        if (projects[x].location){
            console.log(projects[x].title, projects[x].location)
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
    $scope.loadAssociations();

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
    $scope.loadLocations();

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
    $scope.loadTags();
    //IMPROVE :)

    $scope.filterSet = {associations:$scope.sortedTransactionAssets, tags:$scope.sortedTagArray, locations:$scope.sortedLocationArray}

    $scope.createProject = function(newProject) {
        if ($scope.currentUser){
            $scope.newProject.user = $scope.currentUser.id;
            ProjectModel.create($scope.newProject).then(function(model) {
                $scope.newProject = {};
            });
        }
        else{$mdSidenav('login').toggle()}
    };

    $scope.loadMore = function() {
        $scope.skip = $scope.skip + 100;
        $rootScope.stateIsLoading = true;
        ProjectModel.getSome(100, $scope.skip, $scope.selectedSort).then(function(projects) {
            $rootScope.stateIsLoading = false;
            Array.prototype.push.apply($scope.projects, projects);
        });
    };

    $scope.newProjectToggle = function () {
        if ($scope.currentUser){
            $scope.newProjectToggleVar = $scope.newProjectToggleVar ? false : true;
        }
        else{$mdSidenav('login').toggle()}
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



    //FIX THIS
    $rootScope.$watch('searchQuery' ,function(){

        $scope.searchQuery = [];
        for(x in Object.keys($rootScope.searchQuery)){
            for (y in Object.keys($rootScope.searchQuery[Object.keys($rootScope.searchQuery)[x]])){
                $scope.searchQuery.push($rootScope.searchQuery[Object.keys($rootScope.searchQuery)[x]][y])
            }
        }

    }, true);

    $scope.$watch('searchQuery' ,function(){

        $scope.searchQuery.map(function(obj){if (!obj.type){obj.type = 'QUERY'} return obj })
        console.log($scope.searchQuery);
        $rootScope.stateIsLoading = true;
        var query = {}
        //query = [{type:'query', value:'searchQuery'},{type:'location', value:{}, distance:10}, type:'tag',value:'cool'}];
        query.search = $scope.searchQuery.map(function(obj){return obj.text}).join(',');
        //ProjectModel.getSome('search', query.search, 100, 0, 'createdAt DESC').then(function(models){
        //    $rootScope.stateIsLoading = false;
        //    $scope.projects = models;
        //    $scope.loadAssociations();
        //    $scope.loadLocations();
        //    $scope.loadTags();
        //});

    }, true);




    $sailsSocket.subscribe('project', function (envelope) {
        switch(envelope.verb) {
            case 'created':
                $scope.projects.unshift(envelope.data);
                break;
            case 'destroyed':
                lodash.remove($scope.projects, {id: envelope.id});
                break;
        }
    });

}]);