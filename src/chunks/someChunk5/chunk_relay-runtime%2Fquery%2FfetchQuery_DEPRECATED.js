__d(
  'relay-runtime/query/fetchQuery_DEPRECATED',
  [
    'relay-runtime/query/GraphQLTag',
    'relay-runtime/store/RelayModernOperationDescriptor',
  ],
  function (a, b, c, d, e, f) {
    'use strict';
    var g = b(
        'relay-runtime/store/RelayModernOperationDescriptor',
      ).createOperationDescriptor,
      h = b('relay-runtime/query/GraphQLTag').getRequest;
    function a(a, b, c, d) {
      b = h(b);
      if (b.params.operationKind !== 'query')
        throw new Error('fetchQuery: Expected query operation');
      var e = g(b, c, d);
      return a
        .execute({ operation: e })
        .map(function () {
          return a.lookup(e.fragment).data;
        })
        .toPromise();
    }
    e.exports = a;
  },
  null,
);
