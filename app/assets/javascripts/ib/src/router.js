NS('Ib');

Ib.router = function() {
  var _parseHash = function(newHash, oldHash) {
    return (newHash === '') ? hasher.replaceHash('facts') : router.parse(newHash);
  };

  var initialize = function(core) {
    var _baseEvents = Ib.events.base(core);

    // Facts routes
    var _facts = function() {
      return _baseEvents.initialize('Facts');
    };

    // JS App routes
    router = crossroads.create();
    router.addRoute('facts', _facts);

    // parse initial hash
    hasher.initialized.add(_parseHash);
    // parse hash changes, añade un listener de hash change
    hasher.changed.add(_parseHash);
    if (!hasher.isActive()) {
      // initialize hasher (start listening for history changes)
      hasher.init();
    }
  };

  return {
    initialize: initialize
  };
}();
