__d(
  'BaseDOMContainer.react',
  ['react', 'useLayoutEffect_SAFE_FOR_SSR', 'useMergeRefs'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react'),
      i = d('react').useRef;
    function a(a, b) {
      var d = a.node,
        e = i(null);
      c('useLayoutEffect_SAFE_FOR_SSR')(
        function () {
          var a = e.current;
          if (d != null && a != null) {
            a.appendChild(d);
            return function () {
              a.removeChild(d);
            };
          }
        },
        [d],
      );
      a = c('useMergeRefs')(b, e);
      return h.jsx('div', { ref: a });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    b = h.memo(h.forwardRef(a));
    g['default'] = b;
  },
  98,
);
