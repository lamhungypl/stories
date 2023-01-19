__d(
  'CometLexicalEntityTextNode',
  ['Lexical', 'unrecoverableViolation'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = (function (b) {
      babelHelpers.inheritsLoose(a, b);
      function a() {
        return b.apply(this, arguments) || this;
      }
      var d = a.prototype;
      d.getEntity = function () {
        throw c('unrecoverableViolation')(
          'CometLexicalEntityTextNode does not implement getEntity',
          'ufi2',
        );
      };
      return a;
    })(d('Lexical').TextNode);
    function a(a) {
      return a instanceof h;
    }
    g.CometLexicalEntityTextNode = h;
    g.isCometLexicalEntityTextNode = a;
  },
  98,
);
