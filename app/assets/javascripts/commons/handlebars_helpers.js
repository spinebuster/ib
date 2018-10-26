NS('Commons');

Commons.handlebarsHelpers = function() {
  var I18nize = function (str, option) {
    str = _.isString(option) ? str + '.' + option : str;
    return Commons.utils.string.I18nize(str);
  };

  var ifCond = function (v1, operator, v2, options) {
    switch (operator) {
      case '==':
        return (v1 == v2) ? options.fn(this) : options.inverse(this);
      case '!=':
        return (v1 != v2) ? options.fn(this) : options.inverse(this);
      case '===':
        return (v1 === v2) ? options.fn(this) : options.inverse(this);
      case '<':
        return (v1 < v2) ? options.fn(this) : options.inverse(this);
      case '<=':
        return (v1 <= v2) ? options.fn(this) : options.inverse(this);
      case '>':
        return (v1 > v2) ? options.fn(this) : options.inverse(this);
      case '>=':
        return (v1 >= v2) ? options.fn(this) : options.inverse(this);
      case '&&':
        return (v1 && v2) ? options.fn(this) : options.inverse(this);
      case '||':
        return (v1 || v2) ? options.fn(this) : options.inverse(this);
      default:
        return options.inverse(this);
    }
  };

  var initialize = function() {
    // Handlebars helpers register
    Handlebars.registerHelper('I18nize', I18nize);
    Handlebars.registerHelper('ifCond', ifCond);
  };

  return {
    initialize: initialize
  };
}();
