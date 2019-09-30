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
                return ProjectModel.get({limit:100, skip:0, sort:'createdAt DESC', filter:[]});
            }]
        }
	});
}])

.controller( 'ProjectsCtrl', ['$location', '$rootScope', '$mdSidenav', '$sailsSocket', '$sce', '$scope', 'ProjectModel', 'projects', 'SearchModel', function ProjectsController( $location, $rootScope, $mdSidenav, $sailsSocket, $sce, $scope, ProjectModel, projects, SearchModel ) {

    $scope.projects = projects.data.map(function(obj){obj.model = 'PROJECT'; return obj;});
    $scope.projectCount = projects.info.count;

    $rootScope.associatedModels = [];

    $rootScope.locationFilter = false;
    $scope.filter = {
        location:{
            radius:5000
        }
    };

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


    $scope.loadAssociations = function(list){
        var asociationList = [];
        for (x in list){
            for (y in list[x].associationModels){
                for (z in list[x].associationModels[y].associatedModels){
                    if (list[x].associationModels[y].associatedModels[z].data){
                        //NON SELF
                        if (list[x].id != list[x].associationModels[y].associatedModels[z].id){
                            asociationList.push(list[x].associationModels[y].associatedModels[z].data);
                        }
                    }
                }
            }
        }
        function countInArray(array, value) {return array.reduce(function(n, x){ return n + (x === value)}, 0);}
        //TODO SORT BY OCCURANCE OF ASSOCIATION
        //get value of number of times id map appears, return [obj, number]
        console.log(asociationList);
        $scope.asociationList = asociationList;
    };
    $scope.loadContext = function(list){
        var model = {context:{}};
        for (x in list){
            console.log(list[x])
            if (list[x].context){
                for (y in Object.keys(list[x].context)){
                    var context = Object.keys(list[x].context)[y].toString();
                    if(!model.context[context]){model.context[context] = list[x].context[context];}
                    else{model.context[context] = model.context[context] + list[x].context[context];}
                }
            }
        }
        $scope.sortedContext = [];
        for (x in Object.keys(model.context)){$scope.sortedContext.push([Object.keys(model.context)[x], model.context[Object.keys(model.context)[x]]])}
        $scope.sortedContext.sort(function(a, b) {return b[1] - a[1]});
        console.log($scope.sortedContext)
    };
    $scope.loadLocations = function(list){};
    $scope.init = function(){
        $scope.loadAssociations($scope.projects);
        $scope.loadContext($scope.projects);
        $scope.loadLocations($scope.projects);
        $scope.filterSet = {
            context:$scope.sortedContext, 
            associations:$scope.asociationList, 
            location:$scope.sortedLocationArray
        };
    };
    $scope.init();

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
    
    if ($location.search().tags){$scope.filterContent($location.search().tags);}

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

    $sailsSocket.subscribe('project', function (envelope) {
        console.log(envelope)
        if (envelope.verb == 'create'){$scope.projects.unshift(envelope.data);$scope.projectCount++;}//LIMIT TO LIMIT
    });

}]);