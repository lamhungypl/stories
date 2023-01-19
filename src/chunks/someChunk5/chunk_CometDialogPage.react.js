__d(
  'CometDialogPage.react',
  [
    'BaseHeadingContextWrapper.react',
    'BaseScrollableArea.react',
    'FocusInertRegion.react',
    'focusScopeQueries',
    'react',
    'stylex',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react'),
      i = {
        container: {
          display: 'x78zum5',
          flexDirection: 'xdt5ytf',
          flexGrow: 'x1iyjqo2',
          minHeight: 'x7ywyr2',
          $$css: !0,
        },
        inert: { pointerEvents: 'x47corl', userSelect: 'x87ps6o', $$css: !0 },
        root: {
          display: 'x78zum5',
          flexDirection: 'xdt5ytf',
          flexGrow: 'x1iyjqo2',
          maxHeight: 'x1yr2tfi',
          position: 'x1n2onr6',
          '@media (max-width: 679px)_maxHeight': 'x1jxyteu',
          $$css: !0,
        },
        rootFullHeight: { minHeight: 'xw36ugu', $$css: !0 },
        rootMinHeight: {
          '@media (max-width: 679px)_minHeight': 'x1mfppf3',
          $$css: !0,
        },
        scrollableArea: {
          flexGrow: 'x1iyjqo2',
          overscrollBehaviorY: 'xy5w88m',
          $$css: !0,
        },
      };
    function a(a) {
      var b = a.children,
        e = a.footer,
        f = a.header,
        g = a.isContentInert;
      g = g === void 0 ? !1 : g;
      var j = a.isFullHeightByDefault;
      j = j === void 0 ? !1 : j;
      var k = a.mobileFullHeight;
      k = k === void 0 ? !0 : k;
      var l = a.pageXStyle;
      a = a.scrollAreaRef;
      return h.jsxs('div', {
        className: c('stylex')([
          i.root,
          j && i.rootFullHeight,
          k && b != null && i.rootMinHeight,
          l,
        ]),
        children: [
          f,
          b != null &&
            h.jsx(c('BaseHeadingContextWrapper.react'), {
              children: h.jsx(c('BaseScrollableArea.react'), {
                horizontal: !1,
                ref: a,
                vertical: !0,
                withBottomShadow: e != null,
                withTopShadow: f != null,
                xstyle: [i.scrollableArea, g && i.inert],
                children: h.jsx(c('FocusInertRegion.react'), {
                  disabled: !g,
                  focusQuery: d('focusScopeQueries').tabbableScopeQuery,
                  children: h.jsx('div', {
                    className: 'x78zum5 xdt5ytf x1iyjqo2 x7ywyr2',
                    children: b,
                  }),
                }),
              }),
            }),
          e,
        ],
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
