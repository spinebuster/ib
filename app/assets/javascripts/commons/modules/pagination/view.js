NS('Commons.modules.pagination');

Commons.modules.pagination.View = function(sb, model, controller) {
  var template = function() {
    return 'commons/templates/pagination';
  };

  var initialize = function() {
    model.on('model-loaded', render, this);
  };

  var render = function() {
    $(this.el).html(
      JST[this.template()](model.toJSON())
    );

    var totalCount = model.get('totalCount');
    var startPage = model.get('startPage');

    if (totalCount > 0 ) {
      $('#pagination').twbsPagination({
        totalPages: Math.ceil(totalCount/30),
        startPage: startPage,
        visiblePages: 4,
        first: sb.utils.string.I18nize('js.first'),
        prev: sb.utils.string.I18nize('js.prev'),
        next: sb.utils.string.I18nize('js.next'),
        last: sb.utils.string.I18nize('js.last'),
        initiateStartPageClick: false,
        onPageClick: function (e, page) {
          $('#page-content').text('Page ' + page);
          sb.emit('pagination.update_page', page);
        }
      });
    }
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
