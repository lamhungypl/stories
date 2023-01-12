__d(
  'react-relay/relay-hooks/react-cache/usePaginationFragment_REACT_CACHE',
  [
    'react',
    'react-relay/relay-hooks/react-cache/useRefetchableFragmentInternal_REACT_CACHE',
    'react-relay/relay-hooks/useLoadMoreFunction',
    'react-relay/relay-hooks/useRelayEnvironment',
    'react-relay/relay-hooks/useStaticFragmentNodeWarning',
    'relay-runtime',
  ],
  function (a, b, c, d, e, f) {
    'use strict';
    var g;
    c = g || b('react');
    var h = c.useCallback;
    d = c.useDebugValue;
    var i = c.useState,
      j = b('relay-runtime').getFragment,
      k = b('relay-runtime').getFragmentIdentifier,
      l = b('relay-runtime').getPaginationMetadata;
    function a(a, c) {
      a = j(a);
      b('react-relay/relay-hooks/useStaticFragmentNodeWarning')(
        a,
        'first argument of usePaginationFragment()',
      );
      var d = 'usePaginationFragment()',
        e = l(a, d),
        f = e.connectionPathInFragmentData,
        g = e.paginationRequest,
        i = e.paginationMetadata;
      e = e.identifierField;
      c = b(
        'react-relay/relay-hooks/react-cache/useRefetchableFragmentInternal_REACT_CACHE',
      )(a, c, d);
      var n = c.fragmentData,
        o = c.fragmentRef,
        p = c.refetch;
      c = k(a, o);
      var q = m({
          componentDisplayName: d,
          connectionPathInFragmentData: f,
          direction: 'backward',
          fragmentData: n,
          fragmentIdentifier: c,
          fragmentNode: a,
          fragmentRef: o,
          identifierField: e,
          paginationMetadata: i,
          paginationRequest: g,
        }),
        r = q[0],
        s = q[1],
        t = q[2],
        u = q[3];
      q = m({
        componentDisplayName: d,
        connectionPathInFragmentData: f,
        direction: 'forward',
        fragmentData: n,
        fragmentIdentifier: c,
        fragmentNode: a,
        fragmentRef: o,
        identifierField: e,
        paginationMetadata: i,
        paginationRequest: g,
      });
      d = q[0];
      f = q[1];
      c = q[2];
      var v = q[3];
      a = h(
        function (a, b) {
          v();
          u();
          return p(
            a,
            babelHelpers['extends']({}, b, { __environment: void 0 }),
          );
        },
        [v, u, p],
      );
      return {
        data: n,
        loadNext: d,
        loadPrevious: r,
        hasNext: f,
        hasPrevious: s,
        isLoadingNext: c,
        isLoadingPrevious: t,
        refetch: a,
      };
    }
    function m(a) {
      var c = b('react-relay/relay-hooks/useRelayEnvironment')(),
        d = i(!1),
        e = d[0],
        f = d[1],
        g = function (a) {
          var b;
          b = (b = c.getScheduler()) == null ? void 0 : b.schedule;
          b
            ? b(function () {
                f(a);
              })
            : f(a);
        };
      d = {
        start: function () {
          return g(!0);
        },
        complete: function () {
          return g(!1);
        },
        error: function () {
          return g(!1);
        },
      };
      var h = function () {
        return g(!1);
      };
      a = b('react-relay/relay-hooks/useLoadMoreFunction')(
        babelHelpers['extends']({}, a, { observer: d, onReset: h }),
      );
      d = a[0];
      h = a[1];
      a = a[2];
      return [d, h, e, a];
    }
    e.exports = a;
  },
  null,
);
