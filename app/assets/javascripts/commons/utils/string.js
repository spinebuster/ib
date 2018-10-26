NS('Commons.utils');

Commons.utils.string = function() {
  var I18nize = function(str) {
    return (I18n != undefined ? I18n.t(str) : str);
  };

  return {
    I18nize: I18nize
  };
}();
