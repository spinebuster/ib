NS('Ib.events');

Ib.events.base = function(core) {
  var _baseRouter = Commons.router(core);

  var initialize = function(module) {
    var el = Ib.globalConfigurations.getMainElement();

    return _baseRouter.initialize(el).then(function() {
      return _baseRouter.reload(
        module, {
          el: '#central'
        }
      );
    });
  };

  return {
    initialize: initialize
  };
};
