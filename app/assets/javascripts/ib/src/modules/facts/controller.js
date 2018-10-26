NS('Ib.modules.facts');

Ib.modules.facts.Controller = function(sb, model) {
  return function() {
    var initialize = function() {
      debugger
      model.start();
    };

    var destroy = function() {
      return;
    };

    return {
      initialize: initialize,
      destroy: destroy
    };
  };
};
