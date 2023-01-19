__d(
  'relay-runtime/util/getPendingOperationsForFragment',
  ['relay-runtime/query/fetchQueryInternal'],
  function (a, b, c, d, e, f) {
    'use strict';
    var g = b(
      'relay-runtime/query/fetchQueryInternal',
    ).getPromiseForActiveRequest;
    function a(a, b, c) {
      var d = [],
        e = g(a, c);
      if (e != null) d = [c];
      else {
        a = a.getOperationTracker().getPendingOperationsAffectingOwner(c);
        d = (c = a == null ? void 0 : a.pendingOperations) != null ? c : [];
        e = (c = a == null ? void 0 : a.promise) != null ? c : null;
      }
      if (!e) return null;
      a =
        (c =
          (a = d) == null
            ? void 0
            : a
                .map(function (a) {
                  return a.node.params.name;
                })
                .join(',')) != null
          ? c
          : null;
      (a == null || a.length === 0) && (a = 'Unknown pending operation');
      c = b.name;
      b = a === c ? 'Relay(' + a + ')' : 'Relay(' + a + ':' + c + ')';
      e.displayName = b;
      return { promise: e, pendingOperations: d };
    }
    e.exports = a;
  },
  null,
);
