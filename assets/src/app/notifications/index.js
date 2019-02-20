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
                return NotificationModel.getSome('user', config.currentUser.id, 100, 0, 'createdAt DESC');
            }],
        }
    });
}])

.controller( 'NotificationsController', ['$location', '$sailsSocket', '$sce', '$scope', 'config', 'notifications', 'titleService', function NotificationsController( $location, $sailsSocket, $sce, $scope, config, notifications, titleService) {
    titleService.setTitle('Notifications | CRE8.XYZ');
    $scope.currentUser = config.currentUser;
    $scope.notifications = notifications;

    //TODO: NOTIFICATIONS
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

}]);
