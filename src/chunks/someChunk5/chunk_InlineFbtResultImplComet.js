__d(
  'InlineFbtResultImplComet',
  [
    'FbtHooks',
    'FbtReactUtil',
    'FbtResultBase',
    'react',
    'recoverableViolation',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    function i(a) {
      var b = a.content,
        d = a.hash,
        e = a.inlineMode;
      a = a.translation;
      d == null &&
        c('recoverableViolation')(
          'Fbt string hash should not be null for translated string "' +
            a +
            '" ' +
            ('[inlineMode=' + e + ']'),
          'internationalization',
        );
      return h.jsx('span', {
        'data-intl-hash': d,
        'data-intl-translation': a,
        'data-intl-trid': '',
        children: b,
      });
    }
    i.displayName = i.name + ' [from ' + f.id + ']';
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b(b, e, f, g) {
        var h;
        h =
          a.call(
            this,
            b,
            c('FbtHooks').getErrorListener({ hash: g, translation: f }),
          ) || this;
        h.$$typeof = d('FbtReactUtil').REACT_ELEMENT_TYPE;
        h.key = null;
        h.ref = null;
        h.type = i;
        h.props = { content: b, hash: g, inlineMode: e, translation: f };
        return h;
      }
      return b;
    })(c('FbtResultBase'));
    g['default'] = a;
  },
  98,
);
