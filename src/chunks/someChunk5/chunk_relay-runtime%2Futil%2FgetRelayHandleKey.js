__d(
  'relay-runtime/util/getRelayHandleKey',
  ['invariant', 'relay-runtime/util/RelayDefaultHandleKey'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = b('relay-runtime/util/RelayDefaultHandleKey').DEFAULT_HANDLE_KEY;
    function a(a, b, c) {
      if (b && b !== h) return '__' + b + '_' + a;
      c != null || g(0, 3311);
      return '__' + c + '_' + a;
    }
    e.exports = a;
  },
  null,
);
