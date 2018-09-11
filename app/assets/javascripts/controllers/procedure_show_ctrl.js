app.controller("ProcedureShowCtrl", ['$scope', '_', 'Auth', 'Restangular', 'procedureService', '$stateParams', function($scope, _, Auth, Restangular, procedureService, $stateParams){

  
  procedureService.getProviderProcedures($stateParams.id).then(function(procedure){
    $scope.procedure = procedure;
    $scope.providerProcedures = procedure.provider_procedures;
  }, function(){
    console.log("couldn't get procedure");
  });


}]);