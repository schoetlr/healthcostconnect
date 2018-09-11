app.factory("procedureService", ['Restangular', function(Restangular){

  var service = {};

  service.getProcedures = function(){
    
    return Restangular.all("procedures").getList();
  };

  

  service.getProviderProcedures = function(id){
    return Restangular.one("procedures", id).get();
  };

  

  return service;

}])