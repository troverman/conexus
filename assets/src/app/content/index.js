angular.module( 'conexus.content', [
])

.config(['$stateProvider', function config( $stateProvider ) {
    $stateProvider.state( 'content', {
        url: '/content/:id',
        views: {
            "main": {
                controller: 'ContentController',
                templateUrl: 'content/index.tpl.html'
            }
        },
        resolve: {
            content: ['$stateParams', 'ContentModel', function($stateParams, ContentModel){
                return ContentModel.get({id:$stateParams.id, limit:1, skip:0, sort:'createdAt DESC'});
            }],
            contentList:['content', 'ContentModel', function(content, ContentModel) {
                return ContentModel.get({contentModel:content.id, limit:100, skip:0, sort:'createdAt DESC'});
            }],
        }
    });
}])

.controller( 'ContentController', ['$location', '$mdSidenav', '$rootScope', '$sailsSocket', '$sce', '$scope', 'content', 'contentList', 'ContentModel', 'ReactionModel', 'titleService', 'UserModel', function ContentController( $location, $mdSidenav, $rootScope, $sailsSocket, $sce, $scope, content, contentList, ContentModel, ReactionModel, titleService, UserModel ) {
    
    $scope.content = content;
    $scope.content.children = contentList;

    if(!$scope.content){$location.path('/')}
    if ($scope.content.title){titleService.setTitle($scope.content.title + ' | Content | CRE8.XYZ')}
    else{titleService.setTitle('Content | CRE8.XYZ')}

    console.log($scope.content, $scope.content.associationModels);

    $scope.tokenChart = {
        chart: {zoomType: 'x'},
        series: [{
            id: 'Attention',
            type: 'column',
            name: 'Attention',
            data: []
        }],
        title: {text: ''},
        xAxis: {
            crosshair: true,
            gridLineWidth: 0.5,
            gridLineColor: 'grey',
            title: {text: null},
            categories: [],
        },
        legend: {enabled: false},
        yAxis: {title: {text: null}},
        credits:{enabled:false},
    };
    var sortable = [];
    for (x in Object.keys($scope.content.data.apps.tokens)){sortable.push([Object.keys($scope.content.data.apps.tokens)[x], $scope.content.data.apps.tokens[Object.keys($scope.content.data.apps.tokens)[x]]])}
    sortable.sort(function(a, b) {return b[1] - a[1]});
    for (x in sortable){
        if (x < 100){
            $scope.tokenChart.xAxis.categories.push(sortable[x][0]);
            $scope.tokenChart.series[0].data.push(sortable[x][1]);
        }
    }

    $scope.content.context = [];
    if ($scope.content.associationModels){
        for (x in $scope.content.associationModels){
            for (y in Object.keys($scope.content.associationModels[x].context)){
                var context = Object.keys($scope.content.associationModels[x].context)[y];
                $scope.content.context.push(context);
            }
        }
    }

    $scope.marketOutput = [];
    $scope.newContent = {};
    $scope.newReaction = {};
    $scope.selectedTab = 'CONTENT';
    $scope.selectTab = function(model){$scope.selectedTab = model;};

    //TODO: FINALIZE..
    //TODO: ASSOCIATED TYPE.. CHILD.. DETAILS.. 
    function populateChildren(contentList, depth, limit){
        contentList.forEach(function(content) {
            ContentModel.get({contentModel:content.id, limit:100, skip:0, sort:'createdAt DESC'}).then(function(contentList){
                if (contentList.length > 0){
                    depth++ 
                    content.children = contentList;
                    $scope.content.children.push(content);
                    if (depth < limit){populateChildren(contentList, depth, limit)}
                }
            });
        });
    }
    populateChildren(contentList, 0, 5);

    function searchObject(object, matchCallback, currentPath, result, searched) {
        currentPath = currentPath || '';
        result = result || [];
        searched = searched || [];
        if (searched.indexOf(object) !== -1 && object === Object(object)) {return;}
        searched.push(object);
        if (matchCallback(object)) {result.push({path: currentPath, value: object});}
        try {
            if (object === Object(object)) {
                for (var property in object) {
                    if (property.indexOf("$") !== 0) {
                        searchObject(object[property], matchCallback, currentPath + "." + property, result, searched);
                    }
                }
            }
        }
        catch (e) {throw e;}
        return result;
    }

    //ERROR: Cannot read property 'children' of undefined
    function updateObject(object, newValue, path){
        var stack = path.split('.');
        while(stack.length>1){object = object[stack.shift()];}
        object[stack.shift()] = newValue;
    }

    //TODO: DEPRECIATE
    //$scope.createContent = function(content) {
    //    if($rootScope.currentUser){
    //        $scope.newContent.contentModel = content.id;
    //        $scope.newContent.user = $rootScope.currentUser.id;
    //        ContentModel.create($scope.newContent).then(function(model) {$scope.newContent = {}});
    //    }
    //    else{$mdSidenav('login').toggle()}
    //};

    //TODO: DEPRECIATE.. ? IN GLOBAL
    //$scope.createReaction = function(item, type){
    //    if($rootScope.currentUser){
    //        var location = searchObject($scope.content, function (value) { return value != null && value != undefined && value.id == item.id; });
    //        location[0].value.data.apps.reactions[type]++;
    //    }
    //    else{$mdSidenav('login').toggle()}
    //};
 
    //TODO: GLOBAL..
    //$scope.reply = function(content){
    //    var location = searchObject($scope.content, function (value) { return value != null && value != undefined && value.id == content.id; });
    //    location[0].value.showReply = !location[0].value.showReply;
    //    updateObject($scope.content, location[0].value, location[0].path);
    //};

    $scope.toggleThread = function(content){
        var location = searchObject($scope.content, function (value) { return value != null && value != undefined && value.id == content.id; });
        location[0].value.showThread = !location[0].value.showThread;
        updateObject($scope.content, location[0].value, location[0].path);
    };

    $sailsSocket.subscribe('content', function (envelope) {
        console.log(envelope)
        if (envelope.verb == 'update'){
            if ($scope.content.id == envelope.data.id){
                $scope.content.data.apps = envelope.data.data.apps
            }
        }
    });

}]);
