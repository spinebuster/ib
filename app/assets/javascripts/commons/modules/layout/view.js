NS('Commons.modules.location_modal');

Commons.modules.layout.View = function(sb) {
  var template = function() {
    return 'commons/templates/layout';
  };

  var initialize = function() {
    this.render();
  };

  var render = function() {
    $(this.el).html(
      JST[this.template()]()
    );
  };

  var close = function() {
    $(this.el).html('');
    // removing all backbone events
    this.stopListening();
    // Removes all of the view's delegated events
    this.undelegateEvents();
  };

  return sb.backbone.View.extend({
    el: sb.options.el,
    template: template,
    initialize: initialize,
    render: render,
    close: close
  });
};
