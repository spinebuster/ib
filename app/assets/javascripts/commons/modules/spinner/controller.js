NS('Commons.modules.spinner');

Commons.modules.spinner.Controller = function(sb, model) {
  return function() {
    var _initModelDefaults = function() {
      model.set('title', sb.options.title);
      return;
    };

    var initialize = function() {
      _initModelDefaults();

      return model.start();
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
