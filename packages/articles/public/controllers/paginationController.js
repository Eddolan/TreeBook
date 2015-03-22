'use strict';

angular.module('mean.articles')

/**
 * Handles Pagination on list page
 */
.controller('PaginationDemoCtrl', ['$scope', 'Trees',
  function($scope, Trees) {
    // For some reason the number of pages will be totalItems / 8 so we intialize to 1 page
    $scope.totalItems = 8;
    var itemsPerPage = 25;
    $scope.currentPage = 1;
    // $scope.trees is an array of arrays. Each subarray is one page which contains tree objects
    $scope.treees = [];

    /**
     * Helper method to call Trees factory to get all trees
     */
    $scope.find = function() {
      console.log('find has been called.');
      Trees.query(function(trees) {
        // See comment above about totalItems / 8
        $scope.totalItems = trees.length / itemsPerPage * 8;
        for (var i = 0; i < $scope.totalItems; i = i + 1){
          // Slicing the full array into portions and pusing to $scope.trees
          $scope.treees.push(trees.slice(i * itemsPerPage, (i + 1) * itemsPerPage));
        }
        $scope.trees = trees;
      });
    };

    /**
     * function to handle the page setting
     */
    $scope.setPage = function (pageNo) {
      $scope.currentPage = pageNo;
    };

    // Search for the tree location based on the address typed in
    $scope.searchTrees = function(){
      var searchString = $scope.searchString;
      console.log(searchString);
      //location or the other
      var location = Search.getLocation(searchString);
      var lat = location.lat;
      var lng = location.lng;
      if(lat <= -122.368107024455 && lat >= -122.511257155794 && lng <=  37.8103949467147 && lng >=  37.5090039879895) {
        //Search by location
      } else {
        //search by name
      }
    };
  }
]);
