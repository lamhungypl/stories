__d(
  'relay-runtime/query/GraphQLTag',
  ['invariant', 'relay-runtime/util/RelayConcreteNode', 'warning'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function a(a) {
      g(0, 28205);
    }
    function h(a) {
      a = a;
      typeof a === 'function'
        ? ((a = a()),
          b('warning')(
            !1,
            'RelayGraphQLTag: node `%s` unexpectedly wrapped in a function.',
            a.kind === 'Fragment' ? a.name : a.operation.name,
          ))
        : a['default'] && (a = a['default']);
      return a;
    }
    function i(a) {
      a = h(a);
      return (
        typeof a === 'object' &&
        a !== null &&
        a.kind === b('relay-runtime/util/RelayConcreteNode').FRAGMENT
      );
    }
    function j(a) {
      a = h(a);
      return (
        typeof a === 'object' &&
        a !== null &&
        a.kind === b('relay-runtime/util/RelayConcreteNode').REQUEST
      );
    }
    function k(a) {
      a = h(a);
      return (
        typeof a === 'object' &&
        a !== null &&
        a.kind === b('relay-runtime/util/RelayConcreteNode').UPDATABLE_QUERY
      );
    }
    function l(a) {
      a = h(a);
      return (
        typeof a === 'object' &&
        a !== null &&
        a.kind ===
          b('relay-runtime/util/RelayConcreteNode').INLINE_DATA_FRAGMENT
      );
    }
    function m(a) {
      a = h(a);
      i(a) || g(0, 20130, JSON.stringify(a));
      return a;
    }
    function c(a) {
      var b;
      a = m(a);
      b = (b = a.metadata) == null ? void 0 : b.refetch;
      var c = b == null ? void 0 : b.connection;
      return b === null ||
        typeof b !== 'object' ||
        c === null ||
        typeof c !== 'object'
        ? null
        : a;
    }
    function d(a) {
      var b;
      a = m(a);
      b = (b = a.metadata) == null ? void 0 : b.refetch;
      return b === null || typeof b !== 'object' ? null : a;
    }
    function f(a) {
      a = h(a);
      j(a) || g(0, 20129, JSON.stringify(a));
      return a;
    }
    function n(a) {
      a = h(a);
      k(a) || g(0, 20129, JSON.stringify(a));
      return a;
    }
    function o(a) {
      a = h(a);
      l(a) || g(0, 20131, JSON.stringify(a));
      return a;
    }
    e.exports = {
      getFragment: m,
      getNode: h,
      getPaginationFragment: c,
      getRefetchableFragment: d,
      getRequest: f,
      getUpdatableQuery: n,
      getInlineDataFragment: o,
      graphql: a,
      isFragment: i,
      isRequest: j,
      isUpdatableQuery: k,
      isInlineDataFragment: l,
    };
  },
  null,
);
