__d(
  'react-relay/relay-hooks/useBlockingPaginationFragment',
  [
    'invariant',
    'Promise',
    'react',
    'react-relay/relay-hooks/useLoadMoreFunction',
    'react-relay/relay-hooks/useRefetchableFragmentNode',
    'react-relay/relay-hooks/useStaticFragmentNodeWarning',
    'relay-runtime',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h;
    c = h || b('react');
    var i = c.useCallback,
      j = c.useEffect,
      k = c.useRef,
      l = c.useState,
      m = b('relay-runtime').getFragment,
      n = b('relay-runtime').getFragmentIdentifier,
      o = b('relay-runtime').getPaginationMetadata;
    function a(a, c, d) {
      d === void 0 && (d = 'useBlockingPaginationFragment()');
      a = m(a);
      b('react-relay/relay-hooks/useStaticFragmentNodeWarning')(
        a,
        'first argument of ' + d,
      );
      var e = o(a, d),
        f = e.connectionPathInFragmentData,
        h = e.identifierField,
        j = e.paginationRequest,
        k = e.paginationMetadata;
      e = e.stream;
      e === !1 || g(0, 18372);
      e = b('react-relay/relay-hooks/useRefetchableFragmentNode')(a, c, d);
      c = e.fragmentData;
      var l = e.fragmentRef,
        q = e.refetch,
        r = e.disableStoreUpdates;
      e = e.enableStoreUpdates;
      var s = n(a, l),
        t = p({
          componentDisplayName: d,
          connectionPathInFragmentData: f,
          direction: 'backward',
          disableStoreUpdates: r,
          enableStoreUpdates: e,
          fragmentData: c,
          fragmentIdentifier: s,
          fragmentNode: a,
          fragmentRef: l,
          identifierField: h,
          paginationMetadata: k,
          paginationRequest: j,
        }),
        u = t[0],
        v = t[1],
        w = t[2];
      t = p({
        componentDisplayName: d,
        connectionPathInFragmentData: f,
        direction: 'forward',
        disableStoreUpdates: r,
        enableStoreUpdates: e,
        fragmentData: c,
        fragmentIdentifier: s,
        fragmentNode: a,
        fragmentRef: l,
        identifierField: h,
        paginationMetadata: k,
        paginationRequest: j,
      });
      d = t[0];
      f = t[1];
      var x = t[2];
      r = i(
        function (a, b) {
          x();
          w();
          return q(
            a,
            babelHelpers['extends']({}, b, { __environment: void 0 }),
          );
        },
        [x, w, q],
      );
      return {
        data: c,
        loadNext: d,
        loadPrevious: u,
        hasNext: f,
        hasPrevious: v,
        refetch: r,
      };
    }
    function p(a) {
      var c = a.disableStoreUpdates,
        d = a.enableStoreUpdates;
      a = babelHelpers.objectWithoutPropertiesLoose(a, [
        'disableStoreUpdates',
        'enableStoreUpdates',
      ]);
      var e = l(null),
        f = e[0],
        g = e[1],
        h = k(null),
        i = k(null),
        m = function () {
          i.current != null && (i.current(), (i.current = null));
        };
      e = function () {
        m();
      };
      var n = {
        complete: m,
        start: function () {
          c();
          var a = new (b('Promise'))(function (a) {
            i.current = function () {
              (h.current = null), a();
            };
          });
          h.current = a;
          g(a);
        },
        next: m,
        error: m,
      };
      a = b('react-relay/relay-hooks/useLoadMoreFunction')(
        babelHelpers['extends']({}, a, { observer: n, onReset: e }),
      );
      n = a[0];
      e = a[1];
      a = a[2];
      if (f != null && f === h.current) throw f;
      j(
        function () {
          f !== h.current && d();
        },
        [f],
      );
      return [n, e, a];
    }
    e.exports = a;
  },
  null,
);
