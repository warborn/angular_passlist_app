'use strict';

angular.module('passlistApp')
.service('Group', ['$http', function($http) {
  var domain = 'https://unam-passlist.herokuapp.com/';

  this.getGroups = function() {
    return $http.get(domain + 'groups');
  }

}]);
