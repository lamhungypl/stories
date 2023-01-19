__d(
  'stableStringifyPrefetchedRelayVariablesWithActor',
  ['stableStringify'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function a(a, b) {
      return c('stableStringify')(
        babelHelpers['extends']({}, b, { $actorID: String(a) }),
        !0,
      );
    }
    g['default'] = a;
  },
  98,
);
