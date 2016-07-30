var app = angular.module('myApp', []);

app.controller('myController', function($scope) {
  $scope.users = [
    {name: "kiran", city: "secuderabad"},
    {name: "raghav", city: "secuderabad"},
    {name: "sai", city: "secuderabad"},
    {name: "mani", city: "banglore"},
    {name: "mohan", city: "hyderabad"},
    {name: "bhargav", city: "hyderabad"}
  ];
  $scope.addUser = function() {
    var user = {name: $scope.newuser, city: "hyderabad"};
    $scope.users.push(user);
    $scope.newuser = "";
  }

})