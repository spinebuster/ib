NS('Commons.scaleapp');

Commons.scaleapp.pluginPromises = function(core, options) {
  var _moduleStart = function(module, config) {
    return new Promise(function(resolve, error) {
      core.start(module, {options: config}, resolve);
    });
  };

  var _isModuleRunning = function(instance) {
    return core._running[instance];
  };

  var moduleStop = function(module) {
    return new Promise(function(resolve, error) {
      if (_isModuleRunning(module)) {
        core.stop(module, resolve);
      } else {
        resolve();
      }
    });
  };

  var moduleReload = function(module, options) {
    return moduleStop(module).then(function() {
      return _moduleStart(module, options);
    });
  };

  var request = function(resourceId, data) {
    return new Promise(function(resolve, reject) {
      amplify.request({
        resourceId: resourceId,
        data: data,
        success: resolve,
        error: reject
      });
    });
  };

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
    promises: {
      moduleStop: moduleStop,
      moduleReload: moduleReload,
      request: request
    }
  }, this);

  // Extend sandbox
  _.extend(core.Sandbox.prototype, {
    promises: {
      moduleStop: moduleStop,
      moduleReload: moduleReload,
      request: request
    }
  }, this);

  return {
    init: onPluginInit,
    destroy: onPluginDestroy
  };
};
