app.factory("providerService", ['Restangular', function(Restangular){

  var service = {};

  service.getProviders = function(){
    
    return Restangular.all("providers").getList();
  };

  service.createList = function(listData){
    return Restangular.all("lists").post(listData);
  };

  service.getProviderProcedures = function(id){
    return Restangular.one("providers", id).get();
  };

  return service;

}])