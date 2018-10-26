NS('Commons');

Commons.router = function(core) {
  var reload = core.promises.moduleReload;

  var stop = core.promises.moduleStop;

  var initialize = function(mainElement) {
    // stop al modules
    core.stop();

    return reload('Layout', {
      el: mainElement
    });
  };

  var pagination = function(module, data, pagination) {
    return reload(module, data).then(function() {
      return reload('Pagination', pagination);
    });
  };

  return {
    reload: reload,
    stop: stop,
    initialize: initialize,
    pagination: pagination
  };
};
