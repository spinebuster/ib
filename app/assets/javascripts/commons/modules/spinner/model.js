NS('Commons.modules.spinner');

Commons.modules.spinner.Model = function(sb) {
  var start = function() {
    return this.trigger('model-loaded');
  };

  var destroy = function() {
    return;
  };

  return sb.backbone.Model.extend({
    defaults: {
      title: '',
      progress: 15
    },
    start: start,
    destroy: destroy
  });
};
