__d(
  'relay-runtime/mutations/readUpdatableQuery',
  [
    'relay-runtime/mutations/createUpdatableProxy',
    'relay-runtime/query/GraphQLTag',
  ],
  function (a, b, c, d, e, f) {
    'use strict';
    var g = b('relay-runtime/query/GraphQLTag').getUpdatableQuery,
      h = b(
        'relay-runtime/mutations/createUpdatableProxy',
      ).createUpdatableProxy;
    function a(a, b, c, d) {
      a = g(a);
      return { updatableData: h(c.getRoot(), b, a.fragment.selections, c, d) };
    }
    e.exports = { readUpdatableQuery: a };
  },
  null,
);
