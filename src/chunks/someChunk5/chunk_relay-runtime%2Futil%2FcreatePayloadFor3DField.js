__d(
  'relay-runtime/util/createPayloadFor3DField',
  ['relay-runtime/store/RelayStoreUtils'],
  function (a, b, c, d, e, f) {
    'use strict';
    var g = b('relay-runtime/store/RelayStoreUtils').getModuleComponentKey,
      h = b('relay-runtime/store/RelayStoreUtils').getModuleOperationKey;
    function a(a, b, c, d) {
      d = babelHelpers['extends']({}, d);
      d[g(a)] = c;
      d[h(a)] = b;
      return d;
    }
    e.exports = a;
  },
  null,
);