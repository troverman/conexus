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
            notifications: ['$rootScope', 'NotificationModel', function($rootScope, NotificationModel){
                return NotificationModel.get({user:$rootScope.currentUser.id, limit:100, skip:0, sort:'createdAt DESC'});
            }],
        }
    });
}])

.controller( 'NotificationsController', ['$location', '$mdSidenav', '$rootScope', '$sailsSocket', '$sce', '$scope', 'NotificationModel', 'notifications', 'toaster', function NotificationsController( $location, $mdSidenav, $rootScope, $sailsSocket, $sce, $scope, NotificationModel, notifications, toaster) {
    if(!$rootScope.currentUser){$location.path('/')}

    $scope.notifications = notifications.map(function(obj){
        if (obj.type=='VALIDATION'){
            var associatedModels = [];
            for (x in Object.keys(obj.data.apps)){
                associatedModels.push({
                    type: Object.keys(obj.data.apps)[x].toUpperCase(),
                    id:obj.data.apps[Object.keys(obj.data.apps)[x]].id,
                    text:Object.keys(obj.data.apps)[x].toUpperCase() + ' ' + obj.data.apps[Object.keys(obj.data.apps)[x]].id
                });
            }
            obj.newValidation = obj.newValidation = {
                user: $rootScope.currentUser.id,
                validation:{general:0},
                associatedModels: associatedModels,
                content: 'Validation for '+obj.data.apps.member.username+' in '+obj.data.apps.project.title
            }
        }
        return obj;
    });

    $scope.filterSet = {
        type:['FOLLOW','REACT','CONTENT','VALIDATE','TRANSACTION','STATUS','INVITE'], 
        tags:['troverman','follow'],
        isRead:true,
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

    //TODO: ROOTSCOPE
    //TODO: VALIDATE (MEMBER-MEMBER)
    $scope.follow = function(model){
    };

}]);