__d(
  'relay-runtime/util/registerEnvironmentWithDevTools',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    function b(b) {
      var c =
        typeof a !== 'undefined'
          ? a
          : typeof window !== 'undefined'
          ? window
          : void 0;
      c = c && c.__RELAY_DEVTOOLS_HOOK__;
      c && c.registerEnvironment(b);
    }
    e.exports = b;
  },
  null,
);
