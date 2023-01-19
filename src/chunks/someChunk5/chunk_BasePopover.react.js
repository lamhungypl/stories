__d(
  'BasePopover.react',
  ['cr:2293', 'react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react'),
      i = { root: { position: 'x1n2onr6', $$css: !0 } };
    function a(a, c) {
      var d = a.arrowAlignment;
      d = d === void 0 ? 'center' : d;
      var e = a.children,
        f = a.id,
        g = a.label,
        j = a.onBlur,
        k = a.onFocus,
        l = a.role;
      l = l === void 0 ? 'dialog' : l;
      var m = a.testid;
      m = a.withArrow;
      a = m === void 0 ? !1 : m;
      return h.jsx(b('cr:2293'), {
        'aria-label': g,
        arrowAlignment: d,
        id: f,
        onBlur: j,
        onFocus: k,
        ref: c,
        role: l,
        testid: void 0,
        withArrow: a,
        xstyle: i.root,
        children: e,
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    c = h.forwardRef(a);
    g['default'] = c;
  },
  98,
);
