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

        //TODO: DEPRECIATE RESOLVE
		resolve: {
            projects: ['ProjectModel', function(ProjectModel) {
                return ProjectModel.get({limit:100, skip:0, sort:'createdAt DESC', filter:[]});
            }]
        }
	});
}])

.controller( 'ProjectsCtrl', ['$location', '$rootScope', '$mdSidenav', '$sailsSocket', '$sce', '$scope', 'MemberModel', 'ProjectModel', 'projects', 'SearchModel', function ProjectsController( $location, $rootScope, $mdSidenav, $sailsSocket, $sce, $scope, MemberModel, ProjectModel, projects, SearchModel ) {

    $scope.projects = projects.data.map(function(obj){obj.model = 'PROJECT'; return obj;});
    $scope.projectCount = projects.info.count;

    $rootScope.associatedModels = [];

    $rootScope.locationFilter = false;
    $scope.filter = {
        location:{
            radius:5000
        }
    };

    //TODO: BETTER | ROOTSCOPE
    if ($rootScope.currentUser){
        MemberModel.get({user:$rootScope.currentUser.id, limit:100, skip:0, sort:'createdAt DESC'}).then(function(memberProjects){
            $scope.memberProjects = memberProjects.map(function(obj){
                obj.project.model = 'PROJECT';
                return obj.project
            });
        });
    }

    $scope.map = {
        center: {latitude: 35.902023, longitude: -84.1507067 },
        zoom: 9
    };
    $scope.markers = [];
    $scope.options = {scrollwheel: false};
    
    $scope.selectedSort = 'createdAt DESC';
    $scope.searchQuery = [];
    $scope.skip = 0;
    $scope.sortText = {'trendingScore DESC':'Trending','createdAt DESC':'Date Created','memberCount DESC': 'Member Count'}


    //TODO
    $scope.populateMap = function(){
        for (x in $scope.projects){
            if ($scope.projects[x].location){
                $scope.markers.push({
                    id:$scope.projects[x].id,
                    content:$scope.projects[x].title,
                    url:$scope.projects[x].urlTitle,
                    coords:{
                        latitude:$scope.projects[x].location.lat,
                        longitude:$scope.projects[x].location.lng
                    }
                });
            }
        }
    };
    $scope.populateMap();

    $scope.getLatLng = function() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                $rootScope.locationFilter = true;
                $rootScope.location = {
                    lat:position.coords.latitude, 
                    lng:position.coords.longitude
                };
                var projectQuery = {
                    location:[
                        $rootScope.location.lng,
                        $rootScope.location.lat
                    ], 
                    limit:1000, 
                    skip:0
                };
                ProjectModel.get(projectQuery).then(function(projects){
                    $scope.projects = projects.map(function(obj){obj.model = 'PROJECT';return obj;});
                    $scope.map = {center: {latitude:$rootScope.location.lat, longitude:$rootScope.location.lng},zoom: 12};
                    $scope.markers = [];
                    $scope.populateMap();
                    $scope.init();
                });
                $scope.$apply();
            });
        }
    };
    //$scope.getLatLng();


    //TODO: IMPROVE :)
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
    $scope.init = function(){
        $scope.loadAssociations();
        $scope.loadLocations();
        $scope.loadTags();
        $scope.filterSet = {associations:$scope.sortedAssociationArray, tags:$scope.sortedTagArray, locations:$scope.sortedLocationArray}
    };
    $scope.init();
    //TODO: IMPROVE :)

    //COMPLEX FILTER..
    $scope.filterContent = function(filter) {
        $scope.searchQuery.push({text:filter})
        $rootScope.stateIsLoading = true;
        $location.search('tags', filter);
        ProjectModel.get({tag:filter, limit:20, skip:0, sort:'createdAt DESC'}).then(function(tasks){
            $rootScope.stateIsLoading = false;
            $scope.selectedTag = filter;
            $scope.tasks = tasks.data.map(function(obj){
                if (obj.tags){obj.tags = obj.tags.split(',')}
                obj.model = 'TASK';
                return obj;
            });
            $scope.taskCount = tasks.info.count;
            $scope.init();
        });
    };

    console.log($location.search());
    
    if ($location.search().tags){
        $scope.filterContent($location.search().tags);
    }

    //TODO: FILTER!
    $scope.loadMore = function() {
        $scope.skip = $scope.skip + 100;
        $rootScope.stateIsLoading = true;
        ProjectModel.get({ProjectModellimit:100, skip:$scope.skip, sort:$scope.selectedSort}).then(function(projects) {
            $rootScope.stateIsLoading = false;
            Array.prototype.push.apply($scope.projects, projects.map(function(obj){obj.model='PROJECT';return obj}));
        });
    };

    $scope.search = function(){
        $rootScope.stateIsLoading = true;
        console.log($scope.searchQuery)
        ProjectModel.get({search:$scope.searchQuery, limit:20, skip:0, sort:'createdAt DESC'}).then(function(projects){
            $rootScope.stateIsLoading = false;
            $scope.projects = projects.map(function(obj){
                obj.model = 'PROJECT';
                return obj;
            });
        });
    };

    $scope.selectSort = function(sort){
        $scope.selectedSort = sort;
        $rootScope.stateIsLoading = true;
        ProjectModel.get({search:$scope.searchQuery, limit:20, skip:$scope.skip, sort:$scope.selectedSort}).then(function(projects){
            $rootScope.stateIsLoading = false;
            $scope.projects = projects.map(function(obj){
                obj.model = 'PROJECT';
                return obj;
            });
        });
    };

    //TODO: FILTER!
    $rootScope.$watch('searchQueryNav', function(newValue, oldValue){
        if (newValue !== oldValue) {
            console.log(newValue);
            $scope.searchQuery = $rootScope.searchQueryNav.tags.map(function(obj){
                return obj.query
            });
        }
    }, true);

    $scope.$watch('searchQuery', function(newValue, oldValue){
        if (newValue !== oldValue) {
            $scope.searchModel = [];

            $rootScope.stateIsLoading = true;

            var searchQueryTemp = $scope.searchQuery.map(function(obj){
                return obj.text
            });

            for (x in searchQueryTemp){
                $scope.searchModel.push(
                    {
                        filter:[
                            {
                                model:'PROJECT',
                                modelParam:'tags',
                                query: searchQueryTemp[x],
                                queryParam:'contains',
                            },{
                                model:'PROJECT',
                                modelParam:'title',
                                query: searchQueryTemp[x],
                                queryParam:'contains',
                            },{
                                model:'PROJECT',
                                modelParam:'description',
                                query: searchQueryTemp[x],
                                queryParam:'contains',
                            }
                        ],
                        params:{
                            limit:100,
                            skip:0,
                            sort:'createdAt DESC',
                        },
                        chain:'OR'
                    }
                );
            }

            //TODO:
            SearchModel.get($scope.searchModel).then(function(projects){
                console.log(projects);
                $rootScope.stateIsLoading = false;
                $scope.projects = projects.map(function(obj){obj.model = 'PROJECT'; return obj;});
            });

        }
    }, true);

    //TODO: WEBSOCKET
    $sailsSocket.subscribe('project', function (envelope) {
        console.log(envelope)
        if (envelope.verb == 'create'){$scope.projects.unshift(envelope.data);}
    });

}]);