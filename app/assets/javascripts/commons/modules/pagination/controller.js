NS('Commons.modules.pagination');

Commons.modules.pagination.Controller = function(sb, model) {
  return function() {
    var _initModelDefaults = function() {
      model.set('totalCount', sb.options.totalCount);
      model.set('startPage', sb.options.page);
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
