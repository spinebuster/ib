NS('Commons.services');

Commons.services.base = function(services) {
  var _cache = R.defaultTo(false);

  var initialize = function(core) {
    return R.forEach(function(action){
      return amplify.request.define(
        services[action].service, 'ajax', {
          url: services[action].url,
          type: services[action].method,
          cache: _cache(services[action].cache),
          decoder: core.amplify.decoder
        }
      );
    }, R.keys(services));
  };

  return {
    initialize: initialize
  };
};
