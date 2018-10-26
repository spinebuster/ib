NS('Commons.scaleapp');

Commons.scaleapp.pluginUtils = function(core) {
  // define a method that gets called when a plugin starts
  var onPluginInit = function(instanceSandbox, options, done){
    done();
  };

  // define a method that gets called when a plugin stops
  var onPluginDestroy = function(done) {
    done();
  };

  // Extend core
  _.extend(core, {
    utils: {
      string: Commons.utils.string
    }
  }, this);

  // Extend sandbox
  _.extend(core.Sandbox.prototype, {
    utils: {
      string: Commons.utils.string
    }
  }, this);

  return {
    init: onPluginInit,
    destroy: onPluginDestroy
  };
};
