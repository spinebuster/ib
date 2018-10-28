NS('Ib.modules.facts');

Ib.modules.facts.View = function(sb, model, controller) {
  var onChangeInput = function(e) {
    e.preventDefault();

    var field = e.currentTarget.dataset.field;
    var value = e.currentTarget.value;
    return controller.updateFilterField(field, value);
  };

  var onClickSearch = function(e) {
    e.preventDefault();

    return controller.searchFacts();
  };

  var template = function() {
    return 'ib/templates/facts';
  };

  var events = function() {
    return {
      'change #factsForm select#selectCategory': 'onChangeInput',
      'click #factsForm button#btnSearch': 'onClickSearch'
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
    close: close,
    onChangeInput: onChangeInput,
    onClickSearch: onClickSearch
  });
};
