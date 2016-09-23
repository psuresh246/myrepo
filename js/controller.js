app.controller("loginCtrl", ['$scope', function($scope){
$scope.loginId = 'psuresh246@gmail.com';
$scope.pwd='';
$scope.rememberMe = false;
$scope.login = function(){
	console.log("loginId:"+$scope.loginId);
	console.log("password:"+$scope.pwd);
	console.log("rememberMe:"+$scope.rememberMe);
	
};


}]);