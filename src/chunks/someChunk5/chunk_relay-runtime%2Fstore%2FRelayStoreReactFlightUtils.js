__d(
  'relay-runtime/store/RelayStoreReactFlightUtils',
  ['invariant', 'relay-runtime/store/RelayModernRecord'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h,
      i = (h || b('relay-runtime/store/RelayModernRecord')).getType;
    d = 'executableDefinitions';
    var j = 'tree',
      k = 'ReactFlightComponent';
    function a(a) {
      return a == null ||
        typeof a !== 'object' ||
        typeof a.status !== 'string' ||
        (!Array.isArray(a.tree) && a.tree !== null) ||
        !Array.isArray(a.queries) ||
        !Array.isArray(a.fragments) ||
        !Array.isArray(a.errors)
        ? null
        : a;
    }
    function c(a) {
      i(a) === k || g(0, 23728, a);
      return a[j];
    }
    e.exports = {
      REACT_FLIGHT_EXECUTABLE_DEFINITIONS_STORAGE_KEY: d,
      REACT_FLIGHT_TREE_STORAGE_KEY: j,
      REACT_FLIGHT_TYPE_NAME: k,
      getReactFlightClientResponse: c,
      refineToReactFlightPayloadData: a,
    };
  },
  null,
);
