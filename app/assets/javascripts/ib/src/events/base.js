NS('Ib.events');

Ib.events.base = function(core) {
  var _baseRouter = Commons.router(core);

  var initializeModule = function(module) {
    var el = Ib.globalConfigurations.getMainElement();

    return _baseRouter.initialize(el).then(function() {
      return _baseRouter.reload(
        module, {
          el: '#central'
        }
      );
    });
  };

  var initialize = function() {
    return;
  };

  return {
    initialize: initialize,
    initializeModule: initializeModule
  };
};
