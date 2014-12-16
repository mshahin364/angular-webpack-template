var angular = require('../lib/angular');

angular.module('myApp')
  .controller('mainCtrl', function($scope) {
    $scope.firstName = 'John';
    $scope.lastName = 'Doe';
  });
