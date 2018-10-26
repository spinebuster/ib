NS('Ib');

Ib.events = function(core) {
  Commons.events.spinner(core).initialize();
  Ib.events.facts(core).initialize();
};
