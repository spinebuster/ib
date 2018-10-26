NS('Ib.modules.facts');

Ib.modules.facts.Module = function() {
  return Commons.base.Module(
    Ib.modules.facts.Model,
    Ib.modules.facts.View,
    Ib.modules.facts.Controller
  );
};
