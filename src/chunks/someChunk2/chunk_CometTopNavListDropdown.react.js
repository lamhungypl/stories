__d(
  'CometTopNavListDropdown.react',
  [
    'fbt',
    'ix',
    'BaseHeading.react',
    'CometPopover.react',
    'CometRow.react',
    'CometRowItem.react',
    'Locale',
    'TetraCircleButton.react',
    'TetraText.react',
    'fbicon',
    'qex',
    'react',
    'stylex',
  ],
  function (a, b, c, d, e, f, g, h, i) {
    'use strict';
    var j = d('react'),
      k = c('qex')._('999'),
      l = {
        card: {
          display: 'x78zum5',
          flexDirection: 'xdt5ytf',
          maxWidth: 'xvv7f4i',
          minHeight: 'x1t2pt76',
          $$css: !0,
        },
        cardFullHeight: { minHeight: 'xs7fzxq', $$css: !0 },
        cardMaxHeight: { maxHeight: 'x11c7tjg', $$css: !0 },
        cardPanelHeight: { height: 'xtp0wl1', $$css: !0 },
        cardWidth: { width: 'x1cvmir6', $$css: !0 },
        heading: {
          alignItems: 'x6s0dn4',
          display: 'x78zum5',
          flexShrink: 'x2lah0s',
          justifyContent: 'x1qughib',
          minHeight: 'x21xpn4',
          paddingTop: 'xz9dl7a',
          paddingEnd: 'x1pi30zi',
          paddingBottom: 'xjkvuk6',
          paddingStart: 'x1swvt13',
          $$css: !0,
        },
        headingOffsetWithGlobalPanel: { paddingTop: 'x1cnzs8', $$css: !0 },
        root: { marginEnd: 'x1emribx', marginTop: 'x1ok221b', $$css: !0 },
      },
      m = {
        'base-wash': { backgroundColor: 'x1vtvx1t', $$css: !0 },
        'card-flat': { backgroundColor: 'xlhe6ec', $$css: !0 },
        'dark-wash': { backgroundColor: 'xatbrnm', $$css: !0 },
        error: { backgroundColor: 'x1ciooss', $$css: !0 },
        highlight: { backgroundColor: 'xwnonoy', $$css: !0 },
        'light-wash': { backgroundColor: 'x443n21', $$css: !0 },
        transparent: { backgroundColor: 'xjbqb8w', $$css: !0 },
        white: { backgroundColor: 'x2bj2ny', $$css: !0 },
      };
    function a(a) {
      var b = a.children,
        d = a.label;
      a = a.name;
      if (k === !0) return j.jsx(j.Fragment, { children: b });
      else
        return j.jsx('div', {
          className: 'x1emribx x1ok221b',
          children: j.jsx(c('CometPopover.react'), {
            label: d,
            popoverName: a,
            children: b,
          }),
        });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    a.Card = function (a) {
      var b = a.background;
      b = b === void 0 ? 'white' : b;
      var d = a.children,
        e = a.testid;
      e = a.useFullHeight;
      e = e === void 0 ? !1 : e;
      var f = a.useFullWidth;
      f = f === void 0 ? !1 : f;
      var g = a.useGlobalPanelStyles;
      g = g === void 0 ? !1 : g;
      a = a.useMaxHeight;
      return j.jsx('div', {
        className: c('stylex')(
          l.card,
          f === !1 && l.cardWidth,
          a === !0 && l.cardMaxHeight,
          e === !0 && l.cardFullHeight,
          g ? l.cardPanelHeight : a === !0 && l.cardMaxHeight,
          m[b],
        ),
        'data-testid': void 0,
        children: d,
      });
    };
    a.Title = function (a) {
      var b = a.actions;
      b = b === void 0 ? [] : b;
      var e = a.onReturn,
        f = a.testid;
      f = a.title;
      a = a.useGlobalPanelStyles;
      a = a === void 0 ? !1 : a;
      return j.jsxs('header', {
        className: c('stylex')([
          l.heading,
          a && l.headingOffsetWithGlobalPanel,
        ]),
        'data-testid': void 0,
        children: [
          j.jsxs(c('CometRow.react'), {
            paddingHorizontal: 0,
            paddingTop: 0,
            spacingHorizontal: 8,
            children: [
              e != null
                ? j.jsx(c('CometRowItem.react'), {
                    children: j.jsx(c('TetraCircleButton.react'), {
                      icon: d('Locale').isRTL()
                        ? d('fbicon')._(i('514454'), 20)
                        : d('fbicon')._(i('512647'), 20),
                      label: h._('__JHASH__v6nfNn2Wv-y__JHASH__'),
                      onPress: e,
                      size: 32,
                      type: 'deemphasized',
                    }),
                  })
                : null,
              j.jsx(c('CometRowItem.react'), {
                verticalAlign: 'center',
                children: j.jsx(c('BaseHeading.react'), {
                  isPrimaryHeading: !0,
                  children: j.jsx(c('TetraText.react'), {
                    type: 'headlineEmphasized1',
                    children: f,
                  }),
                }),
              }),
            ],
          }),
          j.jsx(c('CometRow.react'), {
            paddingHorizontal: 0,
            paddingTop: 0,
            spacingHorizontal: 8,
            children: b.map(function (a, b) {
              return j.jsx(c('CometRowItem.react'), { children: a }, b);
            }),
          }),
        ],
      });
    };
    a.styles = { cardWidth: l.cardWidth };
    g['default'] = a;
  },
  98,
);
