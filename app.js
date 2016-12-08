var app = angular.module('portfolio', ['ngRoute']);

// Router
app.config(function($routeProvider){
  $routeProvider

  .when('/', {
    templateUrl: 'pages/home.html',
    controller: 'HomeCTRL'
  })
  
  .when('/portfolio', {
    templateUrl: 'pages/portfolio.html',
    controller: 'PortfolioCTRL'
  })
  
  .when('/about', {
    templateUrl: 'pages/about.html',
    controller: 'AboutCTRL'
  })

  .when('/contact', {
    templateUrl: 'pages/contact.html',
    controller: 'ContactCTRL'
  })

  .otherwise({redirectTo: '/'});  
});

// Controllers

app.controller('HomeCTRL', function($scope){
  $scope.message = 'Hello From Home Controller';
});

app.controller('PortfolioCTRL', function($scope){
  $scope.message = 'Hello From Portfolio Controller';
});

app.controller('AboutCTRL', function($scope){
  $scope.message = 'Hello From About Controller';
});
app.controller('ContactCTRL', function($scope){
  $scope.message = 'Hello From Contact Controller';
});