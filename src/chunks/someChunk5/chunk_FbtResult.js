__d(
  'FbtResult',
  ['FbtReactUtil', 'FbtResultBase'],
  function (a, b, c, d, e, f) {
    var g = function (a) {
      return a.content;
    };
    a = (function (a) {
      'use strict';
      babelHelpers.inheritsLoose(c, a);
      function c(c, d) {
        d = a.call(this, c, d) || this;
        d.$$typeof = b('FbtReactUtil').REACT_ELEMENT_TYPE;
        d.key = null;
        d.ref = null;
        d.type = g;
        d.props = { content: c };
        return d;
      }
      c.get = function (a) {
        return new c(a.contents, a.errorListener);
      };
      return c;
    })(b('FbtResultBase'));
    e.exports = a;
  },
  null,
);
