__d(
  'relay-runtime/network/RelayNetwork',
  [
    'invariant',
    'relay-runtime/network/ConvertToExecuteFunction',
    'relay-runtime/util/withProvidedVariables',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = b('relay-runtime/network/ConvertToExecuteFunction').convertFetch;
    function a(a, c) {
      var d = h(a);
      function e(a, e, f, h, i) {
        e = b('relay-runtime/util/withProvidedVariables')(
          e,
          a.providedVariables,
        );
        if (a.operationKind === 'subscription') {
          c || g(0, 5158);
          h && g(0, 5159);
          return c(a, e, f);
        }
        var j = f.poll;
        if (j != null) {
          h && g(0, 5160);
          return d(a, e, { force: !0 }).poll(j);
        }
        return d(a, e, f, h, i);
      }
      return { execute: e };
    }
    e.exports = { create: a };
  },
  null,
);
