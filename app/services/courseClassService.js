'use strict';

angular.module('passlistApp')
.service('CourseClass', ['$http', function($http) {
  var domain = 'https://unam-passlist.herokuapp.com/';

  this.getStudents = function(courseClassId) {
    return $http.get(domain + 'classes/' + courseClassId);
  };

}]);
