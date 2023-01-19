__d(
  'BaseTooltipTargetWrapper.react',
  ['FocusWithinHandler.react', 'react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    b = d('react');
    var i = b.useCallback,
      j = b.useEffect,
      k = b.useRef,
      l = b.useState;
    function a(a, b) {
      var d = a.children,
        e = a.forceInlineDisplay,
        f = a.onHide,
        g = a.onShow,
        m = a.tooltipIdentifier;
      a = l(!1);
      var n = a[0];
      a = a[1];
      var o = l(!1),
        p = o[0];
      o = o[1];
      var q = n && p,
        r = k(q);
      j(
        function () {
          r.current !== q && (q ? g() : f()), (r.current = q);
        },
        [f, g, q],
      );
      n = i(
        function (a) {
          var b = a.key;
          b === 'Escape' && m != null && (f(), a.stopPropagation());
        },
        [f, m],
      );
      return h.jsx('span', {
        'aria-describedby': m,
        className:
          'x4k7w5x x1h91t0o x1h9r5lt xv2umb2 x1beo9mf xaigb6o x12ejxvf x3igimt xarpa2k xedcshv x1lytzrv x1t2pt76 x7ja8zs x1qrby5j' +
          (e === !0 ? ' x3nfvp2' : ' x1jfb8zj'),
        'data-testid': void 0,
        onKeyDown: n,
        onPointerEnter: g,
        onPointerLeave: f,
        onPointerUp: f,
        ref: b,
        children: h.jsx(c('FocusWithinHandler.react'), {
          onFocusChange: a,
          onFocusVisibleChange: o,
          children: d,
        }),
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    e = h.forwardRef(a);
    g['default'] = e;
  },
  98,
);
