NS('Ib');

Ib.application = function(data) {
  // use default sandbox
  var core = new scaleApp.Core();

  // core plugins init
  Ib.scaleapp(core);
  core.boot();

  // Handlebars helpers init
  Commons.handlebarsHelpers.initialize();
  Ib.handlebarsHelpers.initialize();

  // services init
  Ib.services(core);

  // global configurations init
  Ib.globalConfigurations.initialize(core, data);

  // settings traslations
  I18n.locale = data.locale;

  // modules init
  Ib.modules(core);

  // router init
  Ib.router.initialize(core);

  // events init
  Ib.events(core);
};
