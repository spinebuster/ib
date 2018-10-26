NS('Ib.modules.facts');

Ib.modules.facts.View = function(sb, model, controller) {
  var template = function() {
    return 'Ib/templates/facts';
  };

  var events = function() {
    return {
    };
  };

  var initialize = function() {
    model.on('model-loaded', render, this);
  };

  var render = function() {
    $(this.el).html(
      JST[this.template()](model.toJSON())
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
    events: events,
    initialize: initialize,
    render: render,
    close: close
  });
};
