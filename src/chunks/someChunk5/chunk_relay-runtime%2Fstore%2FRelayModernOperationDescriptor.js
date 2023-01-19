__d(
  'relay-runtime/store/RelayModernOperationDescriptor',
  [
    'relay-runtime/store/RelayConcreteVariables',
    'relay-runtime/store/RelayModernSelector',
    'relay-runtime/store/RelayStoreUtils',
    'relay-runtime/util/deepFreeze',
    'relay-runtime/util/getRequestIdentifier',
  ],
  function (a, b, c, d, e, f) {
    'use strict';
    var g,
      h = b('relay-runtime/store/RelayConcreteVariables').getOperationVariables,
      i = b(
        'relay-runtime/store/RelayModernSelector',
      ).createNormalizationSelector,
      j = b('relay-runtime/store/RelayModernSelector').createReaderSelector,
      k = b('relay-runtime/store/RelayStoreUtils').ROOT_ID;
    function a(a, b, c, d) {
      d === void 0 && (d = k);
      var e = a.operation;
      b = h(e, a.params.providedVariables, b);
      c = l(a, b, c);
      a = { fragment: j(a.fragment, d, b, c), request: c, root: i(e, d, b) };
      return a;
    }
    function l(a, c, d) {
      a = {
        identifier: b('relay-runtime/util/getRequestIdentifier')(a.params, c),
        node: a,
        variables: c,
        cacheConfig: d,
      };
      return a;
    }
    e.exports = { createOperationDescriptor: a, createRequestDescriptor: l };
  },
  null,
);
