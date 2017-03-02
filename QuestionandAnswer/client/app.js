// console.log('hi from app.js');

var app = angular.module('app', ['ngRoute', 'angular.filter']);

app.config(function($routeProvider){
    $routeProvider
    .when('/',{
        templateUrl: 'partials/logReg.html'
    })
    .when('/dashboard',{
        templateUrl: 'partials/dashboard.html'
    })   
    .when('/addquestion',{
         templateUrl: 'partials/addquestion.html'
    })   
    .when('/addanswer/:id',{
         templateUrl: 'partials/addanswer.html'
    })
    .when('/showquestion/:id',{
        templateUrl: 'partials/showquestion.html'
    })
    .otherwise({
        redirectTo: '/'
    })
})