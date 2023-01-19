__d(
  'relay-runtime/store/experimental-live-resolvers/getOutputTypeRecordIDs',
  [
    'invariant',
    'relay-runtime/store/RelayModernRecord',
    'relay-runtime/store/RelayStoreUtils',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h,
      i = b(
        'relay-runtime/store/RelayStoreUtils',
      ).RELAY_RESOLVER_OUTPUT_TYPE_RECORD_IDS;
    function a(a) {
      a = (h || (h = b('relay-runtime/store/RelayModernRecord'))).getValue(
        a,
        i,
      );
      if (a == null) return null;
      a instanceof Set || g(0, 65243, i, typeof a);
      a = new Set(a);
      return a;
    }
    e.exports = a;
  },
  null,
);
