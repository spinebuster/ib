NS('Commons.events');

Commons.events.spinner = function(core) {
  var _baseRouter = Commons.router(core);

  var _start = function(data) {
    return _baseRouter.reload('Spinner', {
      el: '#spinner',
      title: data.title
    });
  };

  var _stop = function() {
    return _baseRouter.stop('Spinner');
  };

  var initialize = function() {
    core.on('spinner.start', _start);
    core.on('spinner.stop', _stop);
  };

  return {
    initialize: initialize
  };
};
