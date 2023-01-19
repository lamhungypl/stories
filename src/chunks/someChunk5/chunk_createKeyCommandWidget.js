__d(
  'createKeyCommandWidget',
  ['createKeyCommandWrapper', 'react', 'recoverableViolation'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    b = d('react');
    var i = b.useContext,
      j = b.useEffect;
    function a(a) {
      a === void 0 && (a = !0);
      var b = h.createContext();
      a = c('createKeyCommandWrapper')(a, b);
      function d(a, d) {
        d === void 0 && (d = !1);
        var e = i(b);
        j(
          function () {
            if (!e) {
              d ||
                c('recoverableViolation')(
                  "Attempting to register a key command outside of its widget scope. Calls to useKeyCommand must be within its widget's wrapper.",
                  'comet_ax',
                );
              return;
            }
            if (a) return e.addCommands(a);
          },
          [e, a, d],
        );
      }
      return { Context: b, Wrapper: a, useKeyCommands: d };
    }
    g['default'] = a;
  },
  98,
);
