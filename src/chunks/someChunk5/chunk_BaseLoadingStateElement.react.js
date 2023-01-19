__d(
  'BaseLoadingStateElement.react',
  [
    'getLoadingStateAriaProps',
    'react',
    'stylex',
    'useCometLoadingStateTracker',
    'useMergeRefs',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react'),
      i = d('react').useContext,
      j = { hideOutline: { outline: 'x1a2a7pz', $$css: !0 } },
      k = h.createContext(!1);
    function a(a, b) {
      var d = a.children,
        e = a.disableLoadingStateTracker;
      e = e === void 0 ? !1 : e;
      var f = a.isFocusTarget,
        g = a.progress,
        l = a.style,
        m = a.testid;
      m = a.xstyle;
      a = i(k);
      var n = c('useCometLoadingStateTracker')(),
        o = n[0];
      n = n[1];
      n = c('useMergeRefs')(b, n);
      if (a)
        return h.jsx('div', {
          className: c('stylex')(m),
          'data-testid': void 0,
          ref: b,
          style: l,
          children: d,
        });
      a = c('getLoadingStateAriaProps')(g, { max: 100, min: 0 });
      return h.jsx(k.Provider, {
        value: !0,
        children: h.jsx(
          'div',
          babelHelpers['extends']({}, a, e ? {} : o, {
            className: c('stylex')(j.hideOutline, m),
            'data-focus-target': f,
            'data-testid': void 0,
            ref: n,
            style: l,
            children: d,
          }),
        ),
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    b = h.forwardRef(a);
    g['default'] = b;
  },
  98,
);
