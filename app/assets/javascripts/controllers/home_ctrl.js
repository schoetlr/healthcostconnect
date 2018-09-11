app.controller("HomeCtrl", ['$scope', '_', 'Auth', 'Restangular', 'procedureService', 'providerService', '$state', function($scope, _, Auth, Restangular, procedureService, providerService, $state){

  
  $scope.showProcedures = true;
  $scope.showProviders = false;

  procedureService.getProcedures().then(function(procedures){

    $scope.procedures = procedures;
  }, function(){
    console.log("couldn't get procedures");
  });

  providerService.getProviders().then(function(providers){
    $scope.providers = providers;
  }, function(){
    console.log("couldn't get providers");
  });

  $scope.toggleView = function(){
    $scope.showProcedures = !$scope.showProcedures;
    $scope.showProviders = !$scope.showProviders;
  };

  $scope.showProvider = function(id){
    console.log("running state go");
    $state.go("provider.show", {id: id});
  };

  $scope.showProcedure = function(id){
    console.log("running state go");
    $state.go("procedure.show", {id: id});
  };


}]);