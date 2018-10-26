NS('Commons.modules.spinner');

Commons.modules.spinner.Module = function() {
  return Commons.base.Module(
    Commons.modules.spinner.Model,
    Commons.modules.spinner.View,
    Commons.modules.spinner.Controller
  );
};
