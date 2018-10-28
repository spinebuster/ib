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

  return {
    reload: reload,
    stop: stop,
    initialize: initialize
  };
};
