__d(
  'CometScrollView.react',
  ['BaseScrollableArea.react', 'react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    b = d('react').forwardRef;
    var i = {
      root: { position: 'x1n2onr6', willChange: 'xq1qtft', $$css: !0 },
    };
    function a(a, b) {
      var d = a.children,
        e = a['data-testid'];
      e = a.hideScrollbar;
      e = e === void 0 ? !1 : e;
      var f = a.onScroll,
        g = a.onScrollBottom,
        j = a.onScrollTop,
        k = a.showsHorizontalScrollIndicator;
      k = k === void 0 ? !0 : k;
      var l = a.showsVerticalScrollIndicator;
      l = l === void 0 ? !0 : l;
      a = a.xstyle;
      a = a === void 0 ? null : a;
      return h.jsx(c('BaseScrollableArea.react'), {
        expanding: !0,
        hideScrollbar: e,
        horizontal: k,
        onScroll: f,
        onScrollBottom: g,
        onScrollTop: j,
        ref: b,
        testid: void 0,
        vertical: l,
        xstyle: [i.root, a],
        children: d,
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    e = b(a);
    g['default'] = e;
  },
  98,
);
