__d(
  'BaseTooltipGroup.react',
  [
    'BaseTooltipTargetWrapper.react',
    'react',
    'recoverableViolation',
    'useCometUniqueID',
    'useDelayedState',
    'useStable',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    e = d('react');
    var i = e.useCallback,
      j = e.useContext,
      k = e.useMemo,
      l = e.useRef,
      m = e.useState,
      n = h.createContext(null);
    function a(a) {
      var b = a.children;
      a = a.tooltipImpl;
      var d = c('useDelayedState')(!1),
        e = d[0],
        f = d[1];
      d = m(null);
      var g = d[0],
        i = d[1],
        j = c('useCometUniqueID')(),
        l = g != null && g.contentKey != null ? g.contentKey : null;
      d = k(
        function () {
          return {
            activeContentKey: l,
            isVisible: e,
            onHide: function (a, b) {
              f(!1, a, b);
            },
            onShow: function (a, b, c) {
              i(a), f(!0, b, c);
            },
            tooltipIdentifier: j,
          };
        },
        [l, e, j, f],
      );
      return h.jsxs(h.Fragment, {
        children: [
          h.jsx(n.Provider, { value: d, children: b }),
          g != null
            ? h.jsx(
                a,
                babelHelpers['extends']({}, g, {
                  id: e ? j : void 0,
                  isVisible: e,
                }),
              )
            : null,
        ],
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    var o = 0;
    function p() {
      return 'tooltip-' + o++;
    }
    function b(a) {
      var b = a.children,
        d = a.disabled,
        e = d === void 0 ? !1 : d;
      d = a.forceInlineDisplay;
      var f = a.hideDelayMs,
        g = a.onVisibilityChange,
        k = a.showDelayMs,
        m = babelHelpers.objectWithoutPropertiesLoose(a, [
          'children',
          'disabled',
          'forceInlineDisplay',
          'hideDelayMs',
          'onVisibilityChange',
          'showDelayMs',
        ]),
        o = c('useStable')(p),
        q = l(null);
      a = j(n);
      var r = a || {},
        s = r.activeContentKey,
        t = r.isVisible;
      t = t === void 0 ? !1 : t;
      var u = r.onHide,
        v = r.onShow;
      r = r.tooltipIdentifier;
      var w = i(
          function () {
            !e &&
              v &&
              v(
                babelHelpers['extends']({ contentKey: o, contextRef: q }, m),
                k,
                g,
              );
          },
          [e, v, o, m, k, g],
        ),
        x = i(
          function () {
            u && u(f, g);
          },
          [f, u, g],
        );
      a == null &&
        c('recoverableViolation')(
          'BaseTooltipGroup: Cannot render a BaseTooltipGroupChild component outside of a BaseTooltipGroup component. ',
          'comet_ui',
        );
      return h.jsx(c('BaseTooltipTargetWrapper.react'), {
        forceInlineDisplay: d,
        onHide: x,
        onShow: w,
        ref: q,
        tooltipIdentifier: t && s === o ? r : void 0,
        children: b,
      });
    }
    b.displayName = b.name + ' [from ' + f.id + ']';
    g.Context = n;
    g.Container = a;
    g.Child = b;
  },
  98,
);
