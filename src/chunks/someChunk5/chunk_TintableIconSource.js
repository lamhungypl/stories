__d(
  'TintableIconSource',
  ['IconSource'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        var b, c;
        for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++)
          e[f] = arguments[f];
        return (
          ((b = c = a.call.apply(a, [this].concat(e)) || this),
          (c.$$typeof = 'fb.tintableiconsource'),
          b) || babelHelpers.assertThisInitialized(c)
        );
      }
      return b;
    })(c('IconSource'));
    g['default'] = a;
  },
  98,
);
