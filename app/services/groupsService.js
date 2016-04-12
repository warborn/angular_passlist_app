'use strict';

angular.module('passlistApp')
.service('Group', ['$http', function($http) {
  var domain = 'https://unam-passlist.herokuapp.com/';

  this.getGroups = function() {
    return $http.get(domain + 'groups');
  };

  this.getGroup = function(groupId) {
    return $http.get(domain + 'groups/' + groupId);
  };

  this.newGroup = function(group) {
    return $http.post(domain + 'groups', group);
  }

}]);
