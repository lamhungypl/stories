__d(
  'relay-runtime/util/getRefetchMetadata',
  ['invariant'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function a(a, b) {
      var c;
      ((c = a.metadata) == null ? void 0 : c.plural) !== !0 ||
        g(0, 14163, a.name, b, a.name, b);
      c = (c = a.metadata) == null ? void 0 : c.refetch;
      c != null || g(0, 14164, b, a.name);
      a = c.operation['default'] ? c.operation['default'] : c.operation;
      var d = c.fragmentPathInResult;
      typeof a !== 'string' || g(0, 14165, b);
      b = c.identifierField;
      b == null || typeof b === 'string' || g(0, 21796);
      return {
        fragmentRefPathInResponse: d,
        identifierField: b,
        refetchableRequest: a,
        refetchMetadata: c,
      };
    }
    e.exports = a;
  },
  null,
);
