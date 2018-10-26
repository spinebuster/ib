NS('Commons.modules.spinner');

Commons.modules.spinner.View = function(sb, model, controller) {
  var template = function() {
    return 'commons/templates/spinner';
  };

  var events = function() {
    return {
      'show.bs.modal': 'onModalShow'
    };
  };

  var onModalShow = function(e) {
    $(e.currentTarget).find('.modal-body').css({'max-height':'100%'});
  };

  var initialize = function() {
    model.on('model-loaded', render, this);
  };

  var _interval = setInterval(function() {
    var currentProgress = model.get('progress');
    if (currentProgress > 20) {
      currentProgress += Math.round(Math.random() * (4 - 1) + 1);
    } else {
      currentProgress += 5;
    }

    if (currentProgress > 100) {
      currentProgress = 100;
    }
    model.set('progress', currentProgress);

    $(".progress #dynamic")
      .css("width", currentProgress + "%")
      .attr("aria-valuenow", currentProgress)
      .text(currentProgress + "%");

    if (currentProgress >= 100) {
      clearInterval(_interval);
    }
  }, 500);

  var render = function() {
    $(this.el).html(
      JST[this.template()](model.toJSON())
    );

    $(this.el).modal('show');
  };

  var close = function() {
    $(this.el).modal('hide');

    clearInterval(_interval);

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
    onModalShow: onModalShow
  });
};
