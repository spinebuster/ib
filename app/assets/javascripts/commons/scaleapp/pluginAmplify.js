NS('Commons.scaleapp');

Commons.scaleapp.pluginAmplify = function(core) {
  var decoder = function(data, status, xhr, success, error) {
    if (xhr.status === 401){
      window.location.href = '/users/sign_in';
    } else if (!_.isNull(data) && data.success) {
      success(data, data.success);
    } else {
      error(xhr.responseText, data.success);
    }
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
    amplify: {
      decoder: decoder
    }
  }, this);

  return {
    init: onPluginInit,
    destroy: onPluginDestroy
  };
};
