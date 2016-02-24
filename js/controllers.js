var artistControllers = angular.module('artistControllers', ['ngAnimate']);

// using the http service to read a JSON file
artistControllers.controller('ListController', ['$scope', '$http', function ($scope, $http){

	$http.get('js/data.json').success(function (data){
    $scope.artists = data;
    // initialize order that data is displayed
    $scope.artistOrder = 'name';

  });

}]);

artistControllers.controller('DetailsController', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams){

  $http.get('js/data.json').success(function (data){
    $scope.artists = data;
    // initialize order that data is displayed
    $scope.whichItem = $routeParams.artistId;


    if ($routeParams.artistId > 0) {
      $scope.prevItem = Number($routeParams.artistId) - 1;
    } else {
      $scope.prevItem = $scope.artists.length-1;
    };

    if($routeParams.artistId < $scope.artists.length-1) {
      $scope.nextItem = Number($routeParams.artistId)+1;
    } else {
      $scope.nextItem = 0;
    };

  });

}]);