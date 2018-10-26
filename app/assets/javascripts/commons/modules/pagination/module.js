NS('Commons.modules.pagination');

Commons.modules.pagination.Module = function() {
  return Commons.base.Module(
    Commons.modules.pagination.Model,
    Commons.modules.pagination.View,
    Commons.modules.pagination.Controller
  );
};
