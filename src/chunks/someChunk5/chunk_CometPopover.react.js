__d(
  'CometPopover.react',
  [
    'BaseContextualLayerOrientationContext',
    'BasePopover.react',
    'cr:1941981',
    'cr:1941982',
    'gkx',
    'isBlueprintStylesEnabled',
    'react',
    'stylex',
    'useCometDisplayTimingTrackerForInteraction',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react'),
      i = d('react').useContext,
      j = {
        card: { boxSizing: 'x9f619', $$css: !0 },
        cardBackground: { backgroundColor: 'x1jx94hy', $$css: !0 },
        cardBorderRadius: {
          borderTopStartRadius: 'x1qpq9i9',
          borderTopEndRadius: 'xdney7k',
          borderBottomEndRadius: 'xu5ydu1',
          borderBottomStartRadius: 'xt3gfkd',
          $$css: !0,
        },
        cardOverflow: {
          overflowX: 'x6ikm8r',
          overflowY: 'x10wlt62',
          $$css: !0,
        },
        cardShadow: { boxShadow: 'x8ii3r7', $$css: !0 },
      },
      k = {
        end: { borderBottomEndRadius: 'x5pf9jr', $$css: !0 },
        middle: { $$css: !0 },
        start: { borderBottomStartRadius: 'xo71vjh', $$css: !0 },
        stretch: { $$css: !0 },
      },
      l = {
        end: { borderTopEndRadius: 'x13lgxp2', $$css: !0 },
        middle: { $$css: !0 },
        start: { borderTopStartRadius: 'x168nmei', $$css: !0 },
        stretch: { $$css: !0 },
      },
      m = {
        end: { borderBottomEndRadius: 'x5pf9jr', $$css: !0 },
        middle: { $$css: !0 },
        start: { borderTopEndRadius: 'x13lgxp2', $$css: !0 },
        stretch: { $$css: !0 },
      },
      n = {
        end: { borderBottomStartRadius: 'xo71vjh', $$css: !0 },
        middle: { $$css: !0 },
        start: { borderTopStartRadius: 'x168nmei', $$css: !0 },
        stretch: { $$css: !0 },
      };
    function o(a, b) {
      switch (a) {
        case 'above':
          return k[b];
        case 'below':
          return l[b];
        case 'end':
          return n[b];
        case 'start':
          return m[b];
      }
    }
    function a(a, d) {
      var e = a.animatedPopover;
      e = e === void 0 ? !1 : e;
      var f = a.children,
        g = a.popoverName,
        k = a.withArrow;
      a = babelHelpers.objectWithoutPropertiesLoose(a, [
        'animatedPopover',
        'children',
        'popoverName',
        'withArrow',
      ]);
      g = c('useCometDisplayTimingTrackerForInteraction')(g);
      var l = i(c('BaseContextualLayerOrientationContext')),
        m = l.align;
      l = l.position;
      return h.jsx(
        c('BasePopover.react'),
        babelHelpers['extends']({}, a, {
          ref: d,
          withArrow: k,
          children:
            e && b('cr:1941981') != null && b('cr:1941982') != null
              ? h.jsx(b('cr:1941982'), {
                  children: h.jsx(b('cr:1941981'), {
                    backgroundColorXStyle: j.cardBackground,
                    borderRadius: c('isBlueprintStylesEnabled')() ? 16 : 8,
                    boxShadowXStyle: j.cardShadow,
                    ref: g,
                    springConfig: { bounciness: 4, speed: 40 },
                    xstyle: j.card,
                    children: f,
                  }),
                })
              : h.jsx('div', {
                  className: c('stylex')(
                    j.card,
                    j.cardBackground,
                    j.cardShadow,
                    j.cardBorderRadius,
                    j.cardOverflow,
                    k === !0 && c('gkx')('157') && o(l, m),
                  ),
                  ref: g,
                  children: f,
                }),
        }),
      );
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    e = h.forwardRef(a);
    g['default'] = e;
  },
  98,
);
