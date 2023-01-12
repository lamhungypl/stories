__d(
  'BaseStickyHeader.react',
  [
    'BaseScrollableAreaContext',
    'BaseView.react',
    'BaseViewportMarginsContext',
    'HiddenSubtreePassiveContext',
    'intersectionObserverEntryIsIntersecting',
    'react',
    'useIntersectionObserver',
    'useMergeRefs',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    b = d('react');
    var i = b.useCallback,
      j = b.useContext,
      k = b.useMemo,
      l = b.useRef,
      m = {
        root: { overflowAnchor: 'x1xzczws', position: 'x7wzq59', $$css: !0 },
      };
    function a(a, b) {
      var d = a.children,
        e = a.onStickyActive,
        f = a.onStickyChange,
        g = a.onStickyInactive,
        n = a.style,
        o = a.topOffset;
      o = o === void 0 ? 0 : o;
      var p = a.xstyle,
        q = a.zIndexNoOverride;
      a = babelHelpers.objectWithoutPropertiesLoose(a, [
        'children',
        'onStickyActive',
        'onStickyChange',
        'onStickyInactive',
        'style',
        'topOffset',
        'xstyle',
        'zIndexNoOverride',
      ]);
      var r = l(null),
        s = l(!1),
        t = j(c('BaseScrollableAreaContext')),
        u = j(c('BaseViewportMarginsContext')),
        v = t[t.length - 1],
        w = j(c('HiddenSubtreePassiveContext')),
        x = o + (v != null ? 0 : u.top);
      t = c('useIntersectionObserver')(
        i(
          function (a) {
            var b = w.getCurrentState();
            b = b.hiddenOrBackgrounded;
            if (b) return;
            b = !c('intersectionObserverEntryIsIntersecting')(a);
            if (b !== s.current) {
              f && f(b);
              b ? e && e() : g && g();
              s.current = b;
              a = r.current;
              a != null && !q && (a.style.zIndex = b ? '1' : 'auto');
            }
          },
          [w, e, f, g, q],
        ),
        k(
          function () {
            return {
              root: function () {
                return v != null ? v.getDOMNode() : null;
              },
              rootMargin: { bottom: 0, left: 0, right: 0, top: -x },
              threshold: 0,
            };
          },
          [v, x],
        ),
      );
      o = c('useMergeRefs')(r, b);
      return h.jsxs(h.Fragment, {
        children: [
          h.jsx(c('BaseView.react'), { ref: t }),
          h.jsx(
            c('BaseView.react'),
            babelHelpers['extends']({}, a, {
              ref: o,
              style: q
                ? babelHelpers['extends']({}, n, { top: x })
                : babelHelpers['extends']({}, n, {
                    top: x,
                    zIndex: s.current ? '1' : 'auto',
                  }),
              xstyle: [m.root, p],
              children: d,
            }),
          ),
        ],
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    e = h.forwardRef(a);
    g['default'] = e;
  },
  98,
);
