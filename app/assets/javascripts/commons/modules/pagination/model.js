NS('Commons.modules.pagination');

Commons.modules.pagination.Model = function(sb) {
  var start = function() {
    return this.trigger('model-loaded');
  };

  var destroy = function() {
    return;
  };

  return sb.backbone.Model.extend({
    defaults: {
      totalCount: 0,
      startPage: 1
    },
    start: start,
    destroy: destroy
  });
};
