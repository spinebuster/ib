NS('Commons.scaleapp');

Commons.scaleapp.pluginBackbone = function(core) {
  // define a method that gets called when a plugin starts
  var onPluginInit = function(instanceSandbox, options, done){
    done();
  };

  // define a method that gets called when a plugin stops
  var onPluginDestroy = function(done) {
    done();
  };

  // Extend core
  _.extend(core.Sandbox.prototype, {
    backbone: Backbone
  }, this);

  return {
    init: onPluginInit,
    destroy: onPluginDestroy
  };
};
