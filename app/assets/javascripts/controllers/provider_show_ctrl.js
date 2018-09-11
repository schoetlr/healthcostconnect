app.controller("ProviderShowCtrl", ['$scope', '_', 'Auth', 'Restangular', 'providerService', '$stateParams', function($scope, _, Auth, Restangular, providerService, $stateParams){

  
  providerService.getProviderProcedures($stateParams.id).then(function(provider){
    $scope.provider = provider;
    $scope.providerProcedures = provider.provider_procedures;
  }, function(){
    console.log("couldn't get provider");
  });


}]);