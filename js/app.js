var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider) {
   $routeProvider
   .when('/',
        {
            controller: 'myController',
            templateUrl: 'templates/home.html'
        }
    )
   .when('/about',
        {
            controller: 'aboutController',
            templateUrl: 'templates/about.html'
        }
    )
   .when('/contact',
        {
            controller: 'myController',
            templateUrl: 'templates/contact.html'
        }
    )
   .when('/404',
        {
            controller: 'myController',
            templateUrl: 'templates/404.html'
        }
    )
   .otherwise({redirectTo: '/404'})
})

app.controller('myController', function($scope, userData) {
  // console.log(userData);
  $scope.newuser = "the user";
  $scope.users = userData.getdata();
  $scope.adduser = function() {
    userData.setdata($scope.newuser);
  }
});
app.controller('aboutController', function($scope, userData, userDataService) {
  console.log(userDataService);
  $scope.theusers = userData.getdata();
});

app.factory('userData', function() {
  var myfactory = {};
  var data = [{value: "user 1"},{value: "user 2"},{value: "user 3"},{value: "user 4"}];
  myfactory.getdata = function() {
    return data;
  }
  myfactory.setdata = function(value) {
    var newuser = {value: value};
    data.push(newuser);
    return '';
  }
  return myfactory;
});

app.service('userDataService', function(){
  this.data = [{value: "serviceuser 1"},{value: "serviceuser 2"},{value: "serviceuser 3"},{value: "serviceuser 4"}];
  this.getdata = function() {
    return this.data;
  }
  this.setdata = function(value) {
    var newuser = {value: value};
    this.data.push(newuser);
    return '';
  }
})