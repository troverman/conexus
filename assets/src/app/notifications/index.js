angular.module( 'conexus.notifications', [
])

.config(['$stateProvider', function config( $stateProvider ) {
    $stateProvider.state( 'notifications', {
        url: '/notifications',
        views: {
            "main": {
                controller: 'NotificationsController',
                templateUrl: 'notifications/index.tpl.html'
            }
        },
        resolve: {
            notifications: ['config', 'NotificationModel', function(config, NotificationModel){
                return NotificationModel.getSome({user:config.currentUser.id, limit:100, skip:0, sort:'createdAt DESC'});
            }],
        }
    });
}])

.controller( 'NotificationsController', ['$location', '$mdSidenav', '$rootScope', '$sailsSocket', '$sce', '$scope', 'config', 'FollowerModel', 'NotificationModel', 'notifications', 'titleService', 'toaster', function NotificationsController( $location, $mdSidenav, $rootScope, $sailsSocket, $sce, $scope, config, FollowerModel, NotificationModel, notifications, titleService, toaster) {
    titleService.setTitle('Notifications | CRE8.XYZ');
    $scope.currentUser = config.currentUser;
    $scope.notifications = notifications;

    //TODO
    FollowerModel.getFollowing($scope.currentUser).then(function(following){
        $scope.notifications.map(function(obj){
            if (obj.type == 'FOLLOW' && obj.info){
                var index = following.map(function(obj1){return obj1.followed.id}).indexOf(obj.info.id)
                console.log(index);
                if (index != -1){obj.isFollowing = true;}
                else{obj.isFollowing = false;}
            }
            return obj;
        });
    });

    $scope.filterSet = {
        type:['FOLLOW','REACT','CONTENT','VALIDATE','TRANSACTION','STATUS','INVITE'], 
        //tags:['troverman','follow'],
        //isRead:true,
    };

    //VALIDATION IS THE MOTION;; VALIDATION vs MOTION

    //CREATE FOLLOW (ED),
    //CREATE REACT (MY CONTENT),
    //CREATE CONTENT (MY FOLLOWERS, MY CONTENT, MY PROJECT), 
    //CREATE TIME (MY FOLLOWERS), //REQUEST VALIDATION || (( CREATE MOTION )) (CREATE TIME PROJECT MEMBERS)
    //CREATE STATUS CHANGE (LIVE; MY FOLLOWERS)
    //CREATE TRANSACTION (RECIEVE) //CREATE ORDER PROCESS / CREATE TRANSACTION
    //CREATE VALIDATION (RECIEVE)

    //REQUEST TO VALIDATE (ON SUB TIME TO SUBD PROJECTS ((--> TASKS)), 
    //REQUEST TO VALIDATE (JOIN),
    //NEW FOLLOWER(?), 
    //POSTED ON PROFILE / REQUEST TO POST TO PROF, 
    //NEW MESSAGE ?
    //NEW CONTENT IN SUBD PROJECT
    //NEW VALIDATATION ON TIME (MEMBER VALIDATED YOU)
    //ORDER PROCESSED / ACTIVITY
    //TRANSACTION (TO YOU (IF SUBD))
    //NEW ORDER (ITEM PURCHASED)
    //X IS LIVE NOW ( FOLLOWING (SUB) )
    //INVITATION TO JOIN?
    //REQUEST TO VALIDATE (TIME; JOIN REQUEST);

    $scope.notificationsStatic = [
        {title:'Request to Validate Time for Task in Project', description:'Troverman is requesting you validate time 141312 for task 12312 with respect to project 4131'},
        {title:'Request to Join', description:'Troverman is requesting to Join Conexus'},
        {title:'New Follower', description:'Troverman'},
        {title:'New Content on Profile', description:'Content Summary...'},
        {title:'New Message', description:'Message Summary...'},
        {title:'New Content in Project (Subscribed)', description:'Project: Content Summary...'},
        {title:'New Validation on Time', description:'Troverman Validated Time 123412324123sdf1'},
        {title:'Order Processed', description:'Successfully traded 1 TROVERMAN for 10 BTC'},
        {title:'New Transaction', description:'Troverman sent you 3 ETH'},
        {title:'New Order', description:'Troverman is wanting to purchase item 2345113ja213'},
        {title:'Troverman is Live!', description:'link'},
        {title:'Troverman submitted Time!', description:'2hours 11min, Time Summary..'},
        {title:'Troverman submitted Content!', description:'Content Summary...'},
        {title:'Troverman invited you to join project!', description:'Project NOVO'},
    ];

    $scope.markRead = function(model, isRead){
        model.isRead = isRead;
        if (isRead){$rootScope.notificationCount--}
        if (!isRead){$rootScope.notificationCount++}
        NotificationModel.update(model);
    };

    $scope.follow = function(model){
        
        $scope.newFollower = {
            followed:model.info.id,
            follower:$scope.currentUser.id,
        };

        console.log(model, $scope.newFollower);

        //FOLLOW
        if (!model.isFollowing){
            FollowerModel.create($scope.newFollower).then(function(followerModel) {
                $rootScope.confirm = $scope.newFollower;
                $rootScope.confirm.modelType = 'FOLLOW';
                var index = $scope.notifications.map(function(obj){return obj.info.id}).indexOf($scope.newFollower.followed);
                $scope.notifications[index].isFollowing = true;
                toaster.pop({
                    type:'success',
                    title: 'Following',
                    body: 'You are now follwing '+ model.info.username, 
                    onShowCallback: function (toast) { 
                        var audio = new Audio('audio/ping.mp3');
                        audio.play()
                        .then(function(audio){console.log(audio)})
                        .catch(function(err){console.log(err)})
                    }
                });
                $scope.newFollower = {};
                setTimeout(function () {$mdSidenav('confirm').open()}, 500);
                setTimeout(function () {$mdSidenav('confirm').close()}, 5000);
            });
        }

        //UNFOLLOW
        if (model.isFollowing){
            //GET FOLLOWERS
            //FollowerModel.getFollowing($scope.currentUser).then(function(following){
            //DROP BY ID
            //FollowerModel.delete($scope.newFollower).then(function(followerModel){
            //    var index = $scope.notifications.map(function(obj){return obj.info.id}).indexOf(newFollower.followed);
            //    $scope.notifications[index].isFollowing = false;
            //    console.log('FOLLOWER DELETE', index);
            //});
        }

    };



}]);
