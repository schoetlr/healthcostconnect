var app = angular.module('app', ['ui.router', 'restangular', 'Devise']);

app.config([
  "$httpProvider",
  function($httpProvider) {
    var token = $('meta[name=csrf-token]').attr('content');
    $httpProvider.defaults.headers.common['X-CSRF-Token'] = token;
    $httpProvider.defaults.headers.common['Cache-Control'] = 'no-cache';
  }
]);

app.config([
  'RestangularProvider',
  function(RestangularProvider) {

    
    RestangularProvider.setRequestSuffix('.json');
    RestangularProvider.setDefaultHttpFields({"content-type": "application/json"});
  }
]);


app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise("/");

  $stateProvider
    .state("home", {
      url: "/",
      templateUrl: '/templates/home/index.html',
      controller: "HomeCtrl"
    })

    .state("providers", {
      url: "/providers",
      abstract: true,
      template: '<div ui-view></div>'
    })

    .state("providers.show", {
      url: "/:id",
      templateUrl: '/templates/providers/show.html',
      controller: "ProviderShowCtrl"
      
    })

    .state("procedures", {
      url: "/procedures",
      abstract: true,
      template: '<div ui-view></div>'
    })

    .state("procedures.show", {
      url: "/:id",
      templateUrl: '/templates/procedures/show.html',
      controller: "ProcedureShowCtrl"
      
    });

}]);

app.factory("_", ['$window', function($window){
  return $window._;
}]);