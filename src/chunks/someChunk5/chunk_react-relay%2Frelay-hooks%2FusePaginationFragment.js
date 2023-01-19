__d(
  'react-relay/relay-hooks/usePaginationFragment',
  [
    'react',
    'react-relay/relay-hooks/HooksImplementation',
    'react-relay/relay-hooks/useLoadMoreFunction',
    'react-relay/relay-hooks/useRefetchableFragmentNode',
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
    function m(a, c) {
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
      c = b('react-relay/relay-hooks/useRefetchableFragmentNode')(a, c, d);
      var m = c.fragmentData,
        o = c.fragmentRef,
        p = c.refetch;
      c = k(a, o);
      var q = n({
          componentDisplayName: d,
          connectionPathInFragmentData: f,
          direction: 'backward',
          fragmentData: m,
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
      q = n({
        componentDisplayName: d,
        connectionPathInFragmentData: f,
        direction: 'forward',
        fragmentData: m,
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
        data: m,
        loadNext: d,
        loadPrevious: r,
        hasNext: f,
        hasPrevious: s,
        isLoadingNext: c,
        isLoadingPrevious: t,
        refetch: a,
      };
    }
    function n(a) {
      var c = i(!1),
        d = c[0],
        e = c[1];
      c = {
        start: function () {
          return e(!0);
        },
        complete: function () {
          return e(!1);
        },
        error: function () {
          return e(!1);
        },
      };
      var f = function () {
        return e(!1);
      };
      a = b('react-relay/relay-hooks/useLoadMoreFunction')(
        babelHelpers['extends']({}, a, { observer: c, onReset: f }),
      );
      c = a[0];
      f = a[1];
      a = a[2];
      return [c, f, d, a];
    }
    function a(a, c) {
      var d = b('react-relay/relay-hooks/HooksImplementation').get();
      if (d) return d.usePaginationFragment(a, c);
      else return m(a, c);
    }
    e.exports = a;
  },
  null,
);
