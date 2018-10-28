NS('Ib.modules.facts');

Ib.modules.facts.Controller = function(sb, model) {
  return function() {
    var updateFilterField = function(field, value) {
      return model.set(field, value);
    };

    var _promiseIndex = function(data) {
      return sb.promises.request('service_facts', data);
    };

    var searchFacts = function() {
      sb.emit('spinner.start', {
        title: sb.utils.string.I18nize('js.facts.loading')
      });

      var data = {}
      if (!R.isEmpty(model.get('category'))) {
        data = {
          category: model.get('category')
        }
      }

      return _promiseIndex(data).then(function(facts) {
        debugger;

        sb.emit('spinner.stop');
      });
    };

    var _promiseCategories = function() {
      return sb.promises.request('service_factsCategories');
    };

    var initialize = function() {
      return _promiseCategories().then(function(categories) {
      }).catch(function(response) {
        model.set('categories', JSON.parse(response));
        model.start();
      });
    };

    var destroy = function() {
      return;
    };

    return {
      initialize: initialize,
      destroy: destroy,
      updateFilterField: updateFilterField,
      searchFacts: searchFacts
    };
  };
};
