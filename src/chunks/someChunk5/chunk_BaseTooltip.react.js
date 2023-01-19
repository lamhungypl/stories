__d(
  'BaseTooltip.react',
  [
    'BaseTooltipGroup.react',
    'BaseTooltipTargetWrapper.react',
    'react',
    'useCometUniqueID',
    'useDelayedState',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    b = d('react');
    var i = b.useCallback,
      j = b.useContext,
      k = b.useRef,
      l = 50,
      m = 300;
    function n(a) {
      var b = a.children,
        d = a.delayTooltipMs,
        e = d === void 0 ? m : d;
      d = a.disabled;
      var f = d === void 0 ? !1 : d;
      d = a.forceInlineDisplay;
      var g = a.tooltipImpl,
        j = a.onVisibilityChange;
      a = babelHelpers.objectWithoutPropertiesLoose(a, [
        'children',
        'delayTooltipMs',
        'disabled',
        'forceInlineDisplay',
        'tooltipImpl',
        'onVisibilityChange',
      ]);
      var l = c('useDelayedState')(!1),
        n = l[0],
        o = l[1];
      l = k(null);
      var p = c('useCometUniqueID')(),
        q = i(
          function () {
            if (f) return;
            o(!0, e, j);
          },
          [e, f, j, o],
        ),
        r = i(
          function () {
            o(!1, 0, j);
          },
          [j, o],
        );
      return h.jsxs(h.Fragment, {
        children: [
          h.jsx(c('BaseTooltipTargetWrapper.react'), {
            forceInlineDisplay: d,
            onHide: r,
            onShow: q,
            ref: l,
            tooltipIdentifier: n ? p : void 0,
            children: b,
          }),
          h.jsx(
            g,
            babelHelpers['extends']({}, a, {
              contentKey: null,
              contextRef: l,
              id: n ? p : void 0,
              isVisible: n,
            }),
          ),
        ],
      });
    }
    n.displayName = n.name + ' [from ' + f.id + ']';
    function a(a) {
      var b = j(d('BaseTooltipGroup.react').Context);
      if (b != null) {
        b = a.delayTooltipMs;
        b = b === void 0 ? m : b;
        a.tooltipImpl;
        var c = babelHelpers.objectWithoutPropertiesLoose(a, [
          'delayTooltipMs',
          'tooltipImpl',
        ]);
        return h.jsx(
          d('BaseTooltipGroup.react').Child,
          babelHelpers['extends']({}, c, { hideDelayMs: l, showDelayMs: b }),
        );
      }
      return h.jsx(n, babelHelpers['extends']({}, a));
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
