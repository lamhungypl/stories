__d(
  'relay-runtime/store/cloneRelayScalarHandleSourceField',
  [
    'invariant',
    'areEqual',
    'relay-runtime/store/RelayStoreUtils',
    'relay-runtime/util/RelayConcreteNode',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h,
      i = b('relay-runtime/util/RelayConcreteNode').SCALAR_FIELD,
      j = b('relay-runtime/store/RelayStoreUtils').getHandleStorageKey;
    function a(a, c, d) {
      c = c.find(function (c) {
        return (
          c.kind === i &&
          c.name === a.name &&
          c.alias === a.alias &&
          (h || (h = b('areEqual')))(c.args, a.args)
        );
      });
      (c && c.kind === i) || g(0, 23146, a.handle);
      d = j(a, d);
      return {
        kind: 'ScalarField',
        alias: c.alias,
        name: d,
        storageKey: d,
        args: null,
      };
    }
    e.exports = a;
  },
  null,
);
