'use strict';

angular.module('passlistApp')
.controller('groupsCtrl', ['$scope', 'Group', '$stateParams', function($scope, Group, $stateParams) {
    $scope.count = 0;
    Group.getGroups()
      .then(function(response) {
        $scope.groups = response.data;
      });
    //
    // console.log($stateParams);

    $scope.groupRegistration = function(group) {
      Group.newGroup(group)
        .then(function(response) {
          $scope.groups.push(response.data.groups);
          console.log("Response");
          console.log(response.data.groups)
          console.log("Scope");
          console.log($scope.groups);
        })
        .catch(function(data, status) {
          console.error(data);
        });
    }

    if($stateParams.id) {
      console.log($stateParams);
      Group.getGroup($stateParams.id)
        .then(function(response) {
          $scope.currentGroup = response.data.group;
          $scope.classes = chunk(response.data.classes, 6);
        });
    }

    function chunk(arr, size) {
      var newArr = [];
      for (var i=0; i<arr.length; i+=size) {
        newArr.push(arr.slice(i, i+size));
      }
      return newArr;
    }

}]);
