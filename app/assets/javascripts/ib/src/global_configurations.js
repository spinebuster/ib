NS('Ib');

Ib.globalConfigurations = function() {
  var locales = null;

  var getMainElement = function() {
    return mainElement;
  };

  var getLocales = function() {
    return locales;
  };

  var initialize = function(core, data) {
    mainElement = data.el;
    locales = JSON.parse(data.locales);
  };

  return {
    initialize: initialize,
    getMainElement: getMainElement,
    getLocales: getLocales
  };
}();
