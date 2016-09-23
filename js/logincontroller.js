app.controller("loginCtrl", ['$scope','$http', function($scope,$http){
	$scope.login = {};	//{id:'psuresh246@gmail.com',pwd:'',rememberMe=false};
	
	$scope.signin = function(){
		console.log("loginId:"+$scope.login);
		
		
	};
	
	$scope.reset = function(){
		$scope.login ={};
	}
	
	$scope.reset();
}]);