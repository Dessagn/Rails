(function(){
	'use strict';

	var app = angular.module('myFirstModule', []);
	app.controller('MyFirstController', ['$scope', function($scope){
		$scope.name = '';
		var count = 100;
		$scope.characterCounter = function (name){
			if($scope.name===''){ 
				return '__';
			}else{
				return $scope.name.length;
			}
		};
	}]);

})();