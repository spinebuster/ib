NS('Ib');

Ib.scaleapp = function(core) {
  core.use(Commons.scaleapp.pluginAmplify);
  core.use(Commons.scaleapp.pluginBackbone);
  core.use(Commons.scaleapp.pluginPromises);
  core.use(Commons.scaleapp.pluginUtils);
};
