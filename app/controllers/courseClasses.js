'use strict';

angular.module('passlistApp')
.controller('courseClassesCtrl', ['$scope', 'Group', 'Student', 'CourseClass', '$stateParams', function($scope, Group, Student, CourseClass, $stateParams) {
    if($stateParams.id) {
      CourseClass.getStudents($stateParams.id)
        .then(function(response) {
          $scope.currentClass = response.data.classes;
          $scope.students = response.data.students;
        });
    }

    $scope.toggleAssist = function(student) {
      Student.toggleAssist($stateParams.id, student)
        .then(function(response) {
          console.log(response.data);
        });
    }

}]);
