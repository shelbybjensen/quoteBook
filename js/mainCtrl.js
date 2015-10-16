var app = angular.module("quoteBook");

app.controller("mainCtrl", function($scope, dataService) {
	$scope.getData = dataService.getData();

	$scope.addQuote = function() {
		var stuff = {
			text: $scope.addedQuote,
			author: 
		}
		dataService.addData(stuff);
	}

	$scope.removeQuote = function() {
		dataService.removeData($scope.removedQuote);
	}

	$scope.filterQuote = function() {
		dataService.getData($scope.getData);
	}
}); // end