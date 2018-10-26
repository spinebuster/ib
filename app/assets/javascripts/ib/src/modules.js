NS('Ib');

Ib.modules = function(core) {
  core.register('Layout', Commons.modules.layout.Module());
  core.register('Pagination', Commons.modules.pagination.Module());
  core.register('Spinner', Commons.modules.spinner.Module());

  core.register('Facts', Ib.modules.facts.Module());
};
