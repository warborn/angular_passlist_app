'use strict';

angular.module('passlistApp')
.controller('groupsCtrl', ['$scope', 'Group', function($scope, Group) {
    Group.getGroups()
      .then(function(response) {
        $scope.groups = response.data;
      });
}]);
