__d(
  'FocusWithinHandler.react',
  ['ReactFocusEvent.react', 'react'],
  function (a, b, c, d, e, f, g) {
    var h = d('react');
    b = d('react');
    var i = b.useMemo,
      j = b.useRef,
      k = b.useState,
      l = h.unstable_Scope;
    function a(a) {
      var b,
        c = a.children,
        e = a.onFocusChange,
        f = a.onFocusVisibleChange,
        g = a.onFocusWithin,
        m = a.onBlurWithin;
      a = a.testOnly;
      var n = j(null);
      b = k((b = a && a.focus) != null ? b : !1);
      var o = b[0],
        p = b[1];
      a = k((b = a && a.focusVisible) != null ? b : !1);
      b = a[0];
      var q = a[1];
      a = d('ReactFocusEvent.react').useFocusWithin(
        n,
        i(
          function () {
            return {
              onFocusWithin: function (a) {
                g && !o && g(a);
              },
              onBlurWithin: function (a) {
                m && o && m(a);
              },
              onFocusWithinChange: e
                ? function (a) {
                    p(a), e(a);
                  }
                : p,
              onFocusWithinVisibleChange: f
                ? function (a) {
                    q(a), f(a);
                  }
                : q,
            };
          },
          [o, m, e, f, g],
        ),
      );
      return h.jsx(l, {
        ref: a,
        children: typeof c === 'function' ? c(o, b) : c,
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
