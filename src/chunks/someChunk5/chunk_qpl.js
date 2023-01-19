__d(
  'qpl',
  ['QPLHasteSupportDataStorage', 'recoverableViolation'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = {};
    a = {
      _: function (a, b) {
        var d = h[b];
        if (d == null) {
          var e = c('QPLHasteSupportDataStorage').get(b);
          e == null
            ? (c('recoverableViolation')(
                'Failed to find a Haste-supplied config for the QPL event ' +
                  ('identified by token `' + b + '`.'),
                'staticresources',
              ),
              (d = { i: a }))
            : (d = babelHelpers['extends']({ i: a }, e));
          h[b] = d;
        }
        return d;
      },
    };
    b = a;
    g['default'] = b;
  },
  98,
);
