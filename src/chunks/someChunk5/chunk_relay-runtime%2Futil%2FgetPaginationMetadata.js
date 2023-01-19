__d(
  'relay-runtime/util/getPaginationMetadata',
  ['invariant', 'relay-runtime/util/getRefetchMetadata'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function a(a, c) {
      var d,
        e = b('relay-runtime/util/getRefetchMetadata')(a, c),
        f = e.refetchableRequest;
      e = e.refetchMetadata;
      var h = e.connection;
      h != null || g(0, 14162, c, a.name);
      var i = h.path;
      d = (
        (d = (d = a.metadata) == null ? void 0 : d.connection) != null ? d : []
      )[0];
      d != null || g(0, 14162, c, a.name);
      c = e.identifierField;
      c == null || typeof c === 'string' || g(0, 21796);
      return {
        connectionPathInFragmentData: i,
        identifierField: c,
        paginationRequest: f,
        paginationMetadata: h,
        stream: d.stream === !0,
      };
    }
    e.exports = a;
  },
  null,
);
