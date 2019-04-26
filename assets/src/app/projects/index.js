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
                return ProjectModel.getSome({limit:100, skip:0, sort:'createdAt DESC'});
            }]
        }
	});
}])

.controller( 'ProjectsCtrl', ['$rootScope', '$mdSidenav', '$sailsSocket', '$sce', '$scope', 'lodash', 'MemberModel', 'ProjectModel', 'projects', 'SearchModel', function ProjectsController( $rootScope, $mdSidenav, $sailsSocket, $sce, $scope, lodash, MemberModel, ProjectModel, projects, SearchModel ) {

    $scope.projects = projects.map(function(obj){obj.model = 'PROJECT'; return obj;});

    $rootScope.associatedModels = [];

    //TODO: BETTER | ROOTSCOPE
    if ($rootScope.currentUser){
        MemberModel.getSome({user:$rootScope.currentUser.id, limit:100, skip:0, sort:'createdAt DESC'}).then(function(memberProjects){
            $scope.memberProjects = memberProjects.map(function(obj){
                obj.project.model = 'PROJECT';
                return obj.project
            });
        });
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

    //TODO: NAV?
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
                ProjectModel.getSome({location:[lng,lat], limit:1000, skip:0, sort:'createdAt DESC'}).then(function(projects){
                    $scope.projects = projects.map(function(obj){
                        obj.model = 'PROJECT';
                        return obj;
                    });
                    $scope.markers = [];
                    $scope.populateMap();
                    $scope.init();
                 });

                $scope.$apply();

            });
        }
    };

    //TODO:
    $scope.getMyProjects = function(){
        if ($rootScope.currentUser){
            $rootScope.stateIsLoading = true;
            MemberModel.getSome({user:$rootScope.currentUser.id, limit:100, skip:0, sort:'createdAt DESC'}).then(function(memberProjects){
                $rootScope.stateIsLoading = false;
                $scope.projects = memberProjects.map(function(obj){
                    obj.project.model = 'PROJECT';
                    return obj.project
                });
                $scope.populateMap();
            });
        }
    };






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







    //TODO: COMPLEX QUERY :)
    var query = [
        {
            filter:[
                {
                    model:'PROJECT',
                    association:{
                        population:true,
                        depth:1,
                    },
                    params:{
                        limit:100,
                        skip:0,
                        sort:'createdAt DESC',
                    },
                    chain:'OR',
                },
                {
                    model:'PROJECT',
                    modelParam:'tags',
                    query:'TAG QUERY',
                    association:{
                        population:true,
                        depth:1,
                    },
                    params:{
                        limit:100,
                        skip:0,
                        sort:'createdAt DESC',
                    }
                }
            ],
            params:{
                limit:100,
                skip:0,
                sort:'createdAt DESC',
            },
            chain:'OR'
        },{
            filter:[
                {
                    model:'TASK',
                    modelParam:'associatedModels',
                    query:'{"type":"PROJECT"}',
                    association:{
                        population:true,
                        depth:1,
                    },
                    params:{
                        limit:100,
                        skip:0,
                        sort:'createdAt DESC',
                    },
                    chain:'OR',
                },
                {
                    model:'TASK',
                    modelParam:'tag',
                    query:'create',
                    association:{
                        population:true,
                        depth:1,
                    },
                    params:{
                        limit:100,
                        skip:0,
                        sort:'createdAt DESC',
                    },
                }
            ],
            params:{
                limit:100,
                skip:0,
                sort:'createdAt DESC',
            }
        }
    ];

    SearchModel.getSome(query).then(function(searchResults){
        console.log(searchResults)
    }); 









    //TODO: FILTER!
    $scope.loadMore = function() {
        $scope.skip = $scope.skip + 100;
        $rootScope.stateIsLoading = true;
        ProjectModel.getSome({ProjectModellimit:100, skip:$scope.skip, sort:$scope.selectedSort}).then(function(projects) {
            $rootScope.stateIsLoading = false;
            Array.prototype.push.apply($scope.projects, projects.map(function(obj){obj.model='PROJECT';return obj}));
        });
    };
    $scope.search = function(){
        $rootScope.stateIsLoading = true;
        console.log($scope.searchQuery)
        ProjectModel.getSome({search:$scope.searchQuery, limit:20, skip:0, sort:'createdAt DESC'}).then(function(projects){
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
        ProjectModel.getSome({search:$scope.searchQuery, limit:20, skip:$scope.skip, sort:$scope.selectedSort}).then(function(projects){
            $rootScope.stateIsLoading = false;
            $scope.projects = projects.map(function(obj){
                obj.model = 'PROJECT';
                return obj;
            });
        });
    };

    //TODO: FILTER!
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
            ProjectModel.getSome({search:$scope.searchModel[0].query, limit:100, skip:0, sort:'createdAt DESC'}).then(function(models){
                $rootScope.stateIsLoading = false;
                $scope.projects = models;
                $scope.init();
            });
        }
    }, true);
    //TODO: FILTER!





    //TODO: WEBSOCKET
    $sailsSocket.subscribe('project', function (envelope) {
        switch(envelope.verb) {
            case 'created':
                $scope.projects.unshift(envelope.data);
                break;
        }
    });

}]);