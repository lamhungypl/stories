__d(
  'BaseCometModal.react',
  [
    'BaseContextualLayerAnchorRoot.react',
    'BaseDocumentScrollView.react',
    'BaseHeadingContext',
    'BasePortal.react',
    'BaseThemeProvider.react',
    'CometHeroInteractionContextPassthrough.react',
    'CometHeroInteractionWithDiv.react',
    'CometLayerKeyCommandWrapper.react',
    'FocusRegion.react',
    'HiddenSubtreeContext',
    'cr:1024',
    'cr:1829844',
    'focusScopeQueries',
    'getGeoAndCometModalCompatible',
    'gkx',
    'react',
    'stylex',
    'useCometVisualChangeTracker',
    'useStable',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react'),
      i = d('react').useContext,
      j = c('gkx')('5509'),
      k = {
        content: {
          display: 'x78zum5',
          flexDirection: 'xdt5ytf',
          minHeight: 'xg6iff7',
          position: 'x1n2onr6',
          $$css: !0,
        },
        contentDvh: {
          '@supports (min-height: 100dvh)_minHeight': 'xippug5',
          $$css: !0,
        },
        contentDvhWhenNarrow: {
          '@media (max-width: 679px)_minHeight': 'xwnxf6m',
          $$css: !0,
        },
        hidden: { visibility: 'xlshs6z', $$css: !0 },
        mask: {
          bottom: 'x1ey2m1c',
          end: 'xds687c',
          position: 'xixxii4',
          start: 'x17qophe',
          top: 'x13vifvy',
          $$css: !0,
        },
        maskOverlay: { backgroundColor: 'x1h0vfkc', $$css: !0 },
        root: { position: 'x1n2onr6', $$css: !0 },
        rootStatic: { position: 'x1uhb9sk', $$css: !0 },
      },
      l = {
        'above-everything': { zIndex: 'x1vjfegm', $$css: !0 },
        'above-nav': { zIndex: 'xzkaem6', $$css: !0 },
        normal: { zIndex: 'x1ja2u2z', $$css: !0 },
      };
    function a(a) {
      var e = a.blockKeyCommands;
      e = e === void 0 ? !1 : e;
      var f = a.children,
        g = a.contextKey,
        m = a.hidden;
      m = m === void 0 ? !1 : m;
      var n = a.interactionDesc,
        o = a.interactionUUID,
        p = a.isOverlayTransparent;
      p = p === void 0 ? !1 : p;
      var q = a.noPortal;
      q = q === void 0 ? !1 : q;
      var r = a.shouldUseDvhMinHeight;
      r = r === void 0 ? !1 : r;
      a = a.stackingBehavior;
      a = a === void 0 ? 'auto' : a;
      var s = i(c('HiddenSubtreeContext'));
      s = s.hidden;
      var t = c('useStable')(function () {
          return o !== void 0;
        }),
        u = c('useCometVisualChangeTracker')();
      p = h.jsxs(h.Fragment, {
        children: [
          h.jsx('div', {
            className:
              'x1ey2m1c xds687c xixxii4 x17qophe x13vifvy' +
              (p ? '' : ' x1h0vfkc'),
          }),
          h.jsx(c('BaseContextualLayerAnchorRoot.react'), {
            children: h.jsx(d('FocusRegion.react').FocusRegion, {
              autoFocusQuery:
                d('focusScopeQueries').headerFirstTabbableSecondScopeQuery,
              autoRestoreFocus: !0,
              containFocusQuery: d('focusScopeQueries').tabbableScopeQuery,
              recoverFocusQuery:
                d('focusScopeQueries').headerFirstTabbableSecondScopeQuery,
              children: e
                ? f
                : h.jsx(c('CometLayerKeyCommandWrapper.react'), {
                    debugName: 'modal layer',
                    children: f,
                  }),
            }),
          }),
        ],
      });
      b('cr:1829844') != null &&
        (p = h.jsx(b('cr:1829844'), { name: 'modal', children: p }));
      e = s ? 'normal' : a;
      var v = [
          e === 'auto' ? k.rootStatic : k.root,
          m && k.hidden,
          e !== 'auto' &&
            (b('cr:1024') != null && c('getGeoAndCometModalCompatible')()
              ? b('cr:1024')[e]
              : l[e]),
        ],
        w = h.jsx(c('BaseDocumentScrollView.react'), {
          contextKey: g,
          hiddenWhenDetached: m,
          children: h.jsx(c('BaseHeadingContext').Provider, {
            value: 1,
            children: t
              ? h.jsx(c('CometHeroInteractionContextPassthrough.react'), {
                  clear: !0,
                  children: h.jsx(c('CometHeroInteractionWithDiv.react'), {
                    interactionDesc: n,
                    interactionUUID: o,
                    ref: u,
                    xstyle: [
                      k.content,
                      r && k.contentDvh,
                      j && k.contentDvhWhenNarrow,
                    ],
                    children: p,
                  }),
                })
              : h.jsx('div', {
                  className:
                    'x78zum5 xdt5ytf xg6iff7 x1n2onr6' + (r ? ' xippug5' : ''),
                  ref: u,
                  children: p,
                }),
          }),
        });
      return q
        ? h.jsx(c('BaseThemeProvider.react'), {
            children: function (a, b) {
              return h.jsx('div', {
                className: c('stylex')(a, v),
                style: b,
                children: w,
              });
            },
          })
        : h.jsx(c('BasePortal.react'), { hidden: s, xstyle: v, children: w });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
