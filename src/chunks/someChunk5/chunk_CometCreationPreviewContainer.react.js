__d(
  'CometCreationPreviewContainer.react',
  [
    'fbt',
    'CometCard.react',
    'CometCreationResponsiveToggle.react',
    'CometGlobalPanelGating',
    'CometRouteRenderType',
    'CometScreenReaderText.react',
    'CometUnitHeader.react',
    'react',
  ],
  function (a, b, c, d, e, f, g, h) {
    'use strict';
    var i = d('react');
    b = d('react');
    var j = b.useRef,
      k = b.useState;
    function a(a) {
      var b = a.allowFocus;
      b = b === void 0 ? !1 : b;
      var e = a.children,
        f = a.defaultLayout;
      f = f === void 0 ? 'desktop' : f;
      var g = a.extraHeaderContent,
        l = a.hasResponsiveToggle;
      l = l === void 0 ? !0 : l;
      var m = a.logger,
        n = a.onChangeLayout;
      a = a.showHeadline;
      a = a === void 0 ? !0 : a;
      f = k(f);
      var o = f[0],
        p = f[1];
      f = d('CometRouteRenderType').useIsPushView();
      var q = j(null),
        r = j(null),
        s = function (a) {
          m && m(a + '_view_toggle'), n && n(a), p(a);
        },
        t = function (a) {
          a.key === 'Tab' &&
            !a.shiftKey &&
            r.current != null &&
            r.current.focus(),
            a.stopPropagation();
        },
        u = function (a) {
          a.key === 'Tab' &&
            a.shiftKey &&
            q.current != null &&
            q.current.focus(),
            a.stopPropagation();
        },
        v = function () {
          r.current != null && r.current.focus();
        },
        w = h._('__JHASH__9DT-GKeb6DV__JHASH__'),
        x = null,
        y;
      l
        ? (a &&
            (x =
              o === 'desktop'
                ? h._('__JHASH__Lxm3h66S5k7__JHASH__')
                : h._('__JHASH__7qRiWGSoFH9__JHASH__')),
          (y =
            o === 'desktop'
              ? h._('__JHASH__Fa9U8v3v8N2__JHASH__')
              : h._('__JHASH__84elDPcigJr__JHASH__')))
        : ((y = h._('__JHASH__xPMbXXmZbS___JHASH__')), (x = a ? y : null));
      return i.jsxs('div', {
        'aria-label': y,
        className:
          'x1jx94hy x1lq5wgf xgqcy7u x30kzoy x9jhf4c x10h3on x9f619 x78zum5 xdt5ytf x1iyjqo2 xs83m0k x5yr21d xqmxbcd x1iymm2a xmupa6y xqnzamk x2lwn1j' +
          ((!d('CometGlobalPanelGating').isGlobalPanelVisible() && f
            ? ' x1uw4saw'
            : ' xg87l8a' + (o === 'mobile' ? '' : '')) +
            (o === 'mobile' ? ' xw3w31c' : ' xrwa9c3')),
        role: 'region',
        children: [
          i.jsxs('div', {
            className: 'x6s0dn4 x78zum5 xl56j7k',
            children: [
              x &&
                i.jsx('div', {
                  className: 'x1r8uery x1iyjqo2 xs83m0k',
                  children: i.jsx(c('CometUnitHeader.react'), {
                    headline: x,
                    level: 4,
                  }),
                }),
              g &&
                i.jsx('div', {
                  className: 'xw7yly9' + (x ? '' : ' x1d52u69'),
                  children: g,
                }),
              l &&
                i.jsx('div', {
                  className: 'x1gryazu',
                  children: i.jsx(c('CometCreationResponsiveToggle.react'), {
                    layout: o,
                    onChangeLayout: s,
                  }),
                }),
            ],
          }),
          !b &&
            i.jsxs(i.Fragment, {
              children: [
                i.jsx(c('CometScreenReaderText.react'), { text: w }),
                i.jsx('div', { onKeyDownCapture: t, ref: q, tabIndex: '0' }),
              ],
            }),
          i.jsx('div', {
            className:
              'x1exxf4d x1y71gwh x1nb4dca xu1343h x1lq5wgf xgqcy7u x30kzoy x9jhf4c x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x178xt8z xm81vs4 xso031l xy80clv x78zum5 x1r8uery x1iyjqo2 xw7yly9 xktsk01 x1yztbdb x1d52u69 x10wlt62',
            onFocus: b ? null : v,
            onKeyDownCapture: b ? null : t,
            tabIndex: b ? -1 : 0,
            children: i.jsx(c('CometCard.react'), {
              background: 'light-wash',
              expanding: !0,
              children: i.jsx('div', {
                className: 'x5yr21d x6ikm8r x1odjw0f',
                children: i.jsx('div', {
                  className: 'x5yr21d' + (b ? '' : ' x47corl'),
                  children: e,
                }),
              }),
            }),
          }),
          !b && i.jsx('div', { onKeyDownCapture: u, ref: r, tabIndex: '0' }),
        ],
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
