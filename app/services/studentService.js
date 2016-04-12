'use strict';

angular.module('passlistApp')
.service('Student', ['$http', function($http) {
  var domain = 'https://unam-passlist.herokuapp.com/';

  this.toggleAssist = function(courseClassId, student) {
    return $http.patch(domain + 'classes/' + courseClassId + '/students/' + student.id + '/assist');
  };


}]);
