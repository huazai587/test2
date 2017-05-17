var app = angular.module('myApp',[]);
app.controller( "PlayerController",{
});
app.controller( "ChildCtroller",function($scope){
	$scope.sayHello = function (){
		$scope.person.greeted=true;
	}
});