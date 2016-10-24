(function(){
 'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);


LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope){

	$scope.msg = "";
	$scope.dishes = "";
	$scope.checkIfTooMuch = function(){
    var listOfdishes =  $scope.dishes.split(',');
     if(listOfdishes.length<=3){
        $scope.msg = "Enjoy!";
     }else if(listOfdishes.length>3){
     	$scope.msg = "Too much!";
     }

	}
}


})()