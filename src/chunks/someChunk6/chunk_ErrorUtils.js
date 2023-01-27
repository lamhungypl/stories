__d(
  'ErrorUtils',
  [
    'ErrorGuard',
    'ErrorGuardState',
    'ErrorNormalizeUtils',
    'ErrorPubSub',
    'ErrorSerializer',
    'getErrorSafe',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h, i, j;
    h || b('ErrorGuardState');
    b('ErrorNormalizeUtils');
    i || (i = b('ErrorPubSub'));
    b('getErrorSafe');
    j || (j = b('ErrorGuard'));
    b('ErrorSerializer');
    a.getErrorSafe = c('getErrorSafe');
    a.ErrorGuard = c('ErrorGuard');
    a.ErrorSerializer = c('ErrorSerializer');
    d = {
      history: c('ErrorPubSub').history,
      applyWithGuard: function (a, b, d, e, f, g) {
        return c('ErrorGuard').applyWithGuard(a, b, (a = d) != null ? a : [], {
          name: f,
          onNormalizedError: e,
          deferredSource: g == null ? void 0 : g.deferredSource,
        });
      },
      guard: function (a, b, d) {
        a = c('ErrorGuard').guard(a, b != null ? { name: b } : null);
        d != null && (a = a.bind(d));
        return a;
      },
      normalizeError: function (a) {
        var b;
        return (b = c('ErrorNormalizeUtils').ifNormalizedError(a)) != null
          ? b
          : c('ErrorNormalizeUtils').normalizeError(c('getErrorSafe')(a));
      },
    };
    a.ErrorUtils = d;
    e = d;
    typeof __t === 'function' &&
      __t.setHandler &&
      __t.setHandler(c('ErrorPubSub').reportError);
    g['default'] = e;
  },
  99,
);
