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
            controller: 'myController',
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

app.controller('myController', function($scope) {
    $scope.test = "New value";
    var d=2;
    $scope.users = [{value: "name 1"},{value: "name 2"},{value: "name 3"},{value: "name 4"},{value: "name 5"}, {value: "ll"}, {value: "kjhb"}, {value: "aaaaa"}, {value: "zzzzzzzzz"}, {value: "jjjjj"}];
});