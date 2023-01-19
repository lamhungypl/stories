__d(
  'CometTooltipDeferredImpl.react',
  [
    'BaseContextualLayer.react',
    'CometHeroInteractionContextPassthrough.react',
    'CometPlaceholder.react',
    'CometProgressRingIndeterminate.react',
    'TetraTextPairing.react',
    'react',
    'stylex',
    'useCometDisplayTimingTrackerForInteraction',
    'useCometTheme',
    'useFadeEffect',
    'useTooltipDelayedContent',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    b = d('react');
    var i = b.useLayoutEffect,
      j = b.useRef,
      k = {
        container: {
          backgroundColor: 'x1h0vfkc',
          borderTopStartRadius: 'x1lq5wgf',
          borderTopEndRadius: 'xgqcy7u',
          borderBottomEndRadius: 'x30kzoy',
          borderBottomStartRadius: 'x9jhf4c',
          boxShadow: 'x152obne',
          display: 'x1lliihq',
          marginBottom: 'xjpr12u',
          marginTop: 'xr9ek0c',
          maxWidth: 'x86nfjv',
          opacity: 'xg01cxk',
          paddingTop: 'xz9dl7a',
          paddingEnd: 'xn6708d',
          paddingBottom: 'xsag5q8',
          paddingStart: 'x1ye3gou',
          position: 'x1n2onr6',
          transitionDuration: 'x1ebt8du',
          transitionProperty: 'x19991ni',
          transitionTimingFunction: 'x1dhq9h',
          $$css: !0,
        },
        containerVisible: {
          opacity: 'x1hc1fzr',
          transitionDuration: 'xhb22t3',
          transitionTimingFunction: 'xls3em1',
          $$css: !0,
        },
        contextualLayer: { pointerEvents: 'x47corl', $$css: !0 },
        loadingState: {
          display: 'x78zum5',
          justifyContent: 'xl56j7k',
          $$css: !0,
        },
      };
    function l(a) {
      var b = a.contextualLayerRef;
      i(
        function () {
          var a = b.current;
          a && a.reposition({ autoflip: !0 });
        },
        [b],
      );
      return null;
    }
    function a(a) {
      var b = a.contentKey,
        d = a.delayContentMs;
      d = d === void 0 ? 0 : d;
      var e = a.headline,
        f = a.id,
        g = a.isVisible,
        i = a.tooltip,
        m = a.tooltipTheme;
      m = m === void 0 ? 'invert' : m;
      a = babelHelpers.objectWithoutPropertiesLoose(a, [
        'contentKey',
        'delayContentMs',
        'headline',
        'id',
        'isVisible',
        'tooltip',
        'tooltipTheme',
      ]);
      var n = j(null),
        o = c('useFadeEffect')(g),
        p = o[0],
        q = o[1];
      o = o[2];
      var r = c('useCometDisplayTimingTrackerForInteraction')('ToolTip');
      d = c('useTooltipDelayedContent')({ delayContentMs: d, isVisible: g });
      g = d.isPending;
      d = c('useCometTheme')(m);
      m = d[0];
      d = d[1];
      if (i == null || !p) return null;
      p = h.jsx('div', {
        className: 'x78zum5 xl56j7k',
        children: h.jsx(c('CometProgressRingIndeterminate.react'), {
          color: 'dark',
          size: 20,
        }),
      });
      return h.jsx(c('CometHeroInteractionContextPassthrough.react'), {
        clear: !0,
        children: h.jsx(
          c('BaseContextualLayer.react'),
          babelHelpers['extends']({ align: 'middle' }, a, {
            imperativeRef: n,
            ref: r,
            xstyle: k.contextualLayer,
            children: h.jsx(m, {
              children: h.jsx('span', {
                className: c('stylex')(d, k.container, q && k.containerVisible),
                'data-testid': void 0,
                id: f,
                ref: o,
                role: 'tooltip',
                children: h.jsx(c('TetraTextPairing.react'), {
                  body: g
                    ? p
                    : h.jsxs(
                        c('CometPlaceholder.react'),
                        {
                          fallback: p,
                          children: [h.jsx(l, { contextualLayerRef: n }), i],
                        },
                        b,
                      ),
                  bodyColor: 'primary',
                  headline: e,
                  headlineColor: 'primary',
                  level: 4,
                }),
              }),
            }),
          }),
        ),
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
