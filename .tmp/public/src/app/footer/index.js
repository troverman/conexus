angular.module( 'conexus.footer', [
])

.controller( 'FooterCtrl', function FooterCtrl( $scope ) {
   	$scope.date = new Date();
})