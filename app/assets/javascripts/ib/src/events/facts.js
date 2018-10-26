NS('Ib.events');

Ib.events.facts = function(core) {
  var _baseRouter = Commons.router(core);

  var _results = function(data) {
    return _baseRouter.pagination('FactsResults', {
      el: '#facts_results',
      facts: data.facts
    });
  };

  var initialize = function() {
    core.on('facts.facts_results', _results);
  };

  return {
    initialize: initialize
  };
};
