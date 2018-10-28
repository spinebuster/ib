NS('Commons.scaleapp');

Commons.scaleapp.pluginLodash = function(core) {
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
    bind: _.bind
  }, this);

  // Extend sandbox
  _.extend(core.Sandbox.prototype, {
    bind: _.bind
  }, this);

  return {
    init: onPluginInit,
    destroy: onPluginDestroy
  };
};
