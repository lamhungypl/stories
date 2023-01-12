__d(
  'CometLeftRailComponent.react',
  [
    'BaseHeadingContext',
    'CometBase.react',
    'CometLeftRailListItemSeparator.react',
    'CometLeftRailPrimaryContext',
    'CometLeftRailShadow.react',
    'CometRouteRenderType',
    'CometScrollView.react',
    'gkx',
    'react',
    'stylex',
    'useIsLoggedOut',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    b = d('react');
    var i = b.useCallback,
      j = b.useContext,
      k = b.useState,
      l = c('gkx')('708253'),
      m = c('gkx')('1217157'),
      n = c('gkx')('1745416'),
      o = {
        headerOnGemini: { marginTop: 'xvkph5b', $$css: !0 },
        leftRailContainer: {
          backgroundColor: 'x2bj2ny',
          boxSizing: 'x1afcbsf',
          display: 'x78zum5',
          flexDirection: 'xdt5ytf',
          minHeight: 'x1t2pt76',
          position: 'x1n2onr6',
          top: 'x13vifvy',
          width: 'x1cvmir6',
          '@media (max-width: 899px)_height': 'x1p0ryx0',
          '@media (max-width: 899px)_position': 'xojf56a',
          '@media (min-width: 900px)_maxHeight': 'xcoz2nd',
          '@media (min-width: 900px)_position': 'x1r98mxo',
          $$css: !0,
        },
        leftRailContainerInBizWeb: {
          backgroundColor: 'x2bj2ny',
          boxSizing: 'x1afcbsf',
          display: 'x78zum5',
          flexDirection: 'xdt5ytf',
          minHeight: 'x1t2pt76',
          position: 'x1n2onr6',
          top: 'x13vifvy',
          width: 'x1cvmir6',
          $$css: !0,
        },
        leftRailContainerInDialog: {
          top: 'x13vifvy',
          '@media (max-width: 899px)_minHeight': 'x1p5gv8h',
          '@media (max-width: 899px)_position': 'xoa9owu',
          '@media (min-width: 900px)_minHeight': 'xgfcpv',
          '@media (min-width: 900px)_position': 'x1es02x0',
          $$css: !0,
        },
        leftRailContainerPermalink: {
          top: 'xxzkxad',
          '@media (max-width: 899px)_height': 'xh78kpn',
          '@media (max-width: 899px)_position': 'xojf56a',
          '@media (min-width: 900px)_position': 'x1r98mxo',
          $$css: !0,
        },
        leftRailContainerPermalinkBlue: {
          top: 'x1si2f76',
          '@media (max-width: 899px)_position': 'xojf56a',
          '@media (min-width: 900px)_position': 'x1r98mxo',
          $$css: !0,
        },
        leftRailContainerPermalinkBlueLoggedOut: {
          top: 'x13vifvy',
          '@media (max-width: 899px)_minHeight': 'x1p5gv8h',
          '@media (max-width: 899px)_position': 'xoa9owu',
          '@media (min-width: 900px)_minHeight': 'xgfcpv',
          '@media (min-width: 900px)_position': 'x1es02x0',
          $$css: !0,
        },
        leftRailContainerPushViewHeader: {
          boxShadow: 'x133r36p',
          flexShrink: 'x2lah0s',
          height: 'x1s65kcs',
          $$css: !0,
        },
        leftRailPrimaryContainer: {
          '@media (max-width: 899px)_height': 'xiylbte',
          '@media (max-width: 899px)_position': 'xoa9owu',
          '@media (max-width: 899px)_top': 'x19d5s1r',
          '@media (max-width: 899px)_width': 'xwn1f64',
          $$css: !0,
        },
        primaryNav: { marginTop: 'x1xmf6yo', $$css: !0 },
        primaryNavExpanding: {
          display: 'x78zum5',
          flexDirection: 'xdt5ytf',
          flexGrow: 'x1iyjqo2',
          $$css: !0,
        },
        primaryNavWithSearch: {
          marginBottom: 'x1e56ztr',
          marginTop: 'x1gslohp',
          $$css: !0,
        },
        scrollDropShadow: {
          borderBottom: 'xdppsyt',
          marginStart: 'x1d52u69',
          marginEnd: 'xktsk01',
          $$css: !0,
        },
        search: { marginBottom: 'xod5an3', marginTop: 'x1gslohp', $$css: !0 },
        stickyNavWithoutHeader: { marginTop: 'x1xmf6yo', $$css: !0 },
        stickyNavWithoutSearch: { marginBottom: 'xod5an3', $$css: !0 },
      };
    function a(a, b) {
      var e = a.footer,
        f = a.header,
        g = a.isCometLeftRailInDialog;
      g = g === void 0 ? !1 : g;
      var p = a.isNonCometLeftRailWithoutTopSpacing;
      p = p === void 0 ? !1 : p;
      var q = a.onLeftRailScroll,
        r = a.primaryNav,
        s = a.primaryNavExpanding;
      s = s === void 0 ? !1 : s;
      var t = a.search,
        u = a.secondaryNav,
        v = a.shouldHidePushViewHeader;
      v = v === void 0 ? !1 : v;
      var w = a.stickyNav,
        x = a.testid;
      x = a.xstyle;
      a = c('useIsLoggedOut')();
      var y = j(c('BaseHeadingContext')),
        z = d('CometRouteRenderType').useIsPushView(),
        A = j(c('CometLeftRailPrimaryContext')),
        B = k(!1),
        C = B[0],
        D = B[1];
      B = i(
        function (a) {
          q && q(a), D(!0);
        },
        [q],
      );
      var E = i(function () {
        D(!1);
      }, []);
      return h.jsxs('div', {
        className: c('stylex')(
          n ? o.leftRailContainerInBizWeb : o.leftRailContainer,
          !z && l && o.leftRailContainerPermalink,
          !z && !l && !p && !n && o.leftRailContainerPermalinkBlue,
          !z && !l && a && o.leftRailContainerPermalinkBlueLoggedOut,
          A === !0 && o.leftRailPrimaryContainer,
          g === !0 && o.leftRailContainerInDialog,
          x,
        ),
        'data-testid': void 0,
        ref: b,
        children: [
          z && !v && h.jsx('div', { className: 'x133r36p x2lah0s x1s65kcs' }),
          m
            ? h.jsx(c('CometBase.react'), {
                xstyle: o.headerOnGemini,
                children: f,
              })
            : f,
          w != null &&
            h.jsx(c('CometBase.react'), {
              xstyle: [
                f == null && o.stickyNavWithoutHeader,
                t == null && o.stickyNavWithoutSearch,
              ],
              children: w,
            }),
          t != null &&
            h.jsx(c('CometBase.react'), { xstyle: o.search, children: t }),
          (f != null || t != null || w != null) &&
            C &&
            h.jsx('div', { className: 'xdppsyt x1d52u69 xktsk01' }),
          h.jsx(c('CometScrollView.react'), {
            onScroll: B,
            onScrollTop: E,
            showsHorizontalScrollIndicator: !1,
            children: h.jsxs(c('BaseHeadingContext').Provider, {
              value: y + 1,
              children: [
                r != null &&
                  h.jsx('div', {
                    className:
                      '' +
                      ((f != null && t != null
                        ? ' x1gslohp x1e56ztr'
                        : '' + (f != null && t == null ? ' x1xmf6yo' : '')) +
                        (s
                          ? ' x78zum5 xdt5ytf x1iyjqo2'
                          : '' +
                            (f != null && t != null
                              ? ''
                              : '' + (f != null && t == null ? '' : '')))),
                    children: r,
                  }),
                r != null && u != null
                  ? h.jsx(c('CometLeftRailListItemSeparator.react'), {})
                  : null,
                u,
              ],
            }),
          }),
          e,
          h.jsx(c('CometLeftRailShadow.react'), { isLeftRailPrimary: A }),
        ],
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    e = h.forwardRef(a);
    g['default'] = e;
  },
  98,
);
