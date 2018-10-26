NS('Commons.base.Module');

Commons.base.Module = function(modelClass, viewClass, controllerClass) {
  return function(sb) {
    var init = function(opts) {
      if (modelClass) {
        var bm  = modelClass(sb);
        this.model = new bm();
      }

      if (controllerClass) {
        var cm = controllerClass(sb, this.model);
        this.controller = new cm();
      }

      if (viewClass) {
        var bv = viewClass(sb, this.model, this.controller);
        this.view = new bv();
      }

      if (this.controller) {
        this.controller.initialize();
      }
    };

    var destroy = function(done) {
      if (this.view) {
        this.view.close();
      }

      if (this.controller) {
        this.controller.destroy();
      }

      if (this.model) {
        this.model.destroy();
      }

      done();
    };

    return {
      init: init,
      destroy: destroy,
      model: null,
      controller: null,
      view: null
    };
  };
};
