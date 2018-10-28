NS('Ib.modules.facts');

Ib.modules.facts.Model = function(sb) {
  var start = function() {
    return this.trigger('model-loaded');
  };

  var destroy = function() {
    return;
  };

  return sb.backbone.Model.extend({
    defaults: {
      category: '',
      categories: []
    },
    start: start,
    destroy: destroy
  });
};
