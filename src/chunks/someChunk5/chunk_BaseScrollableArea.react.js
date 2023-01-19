__d(
  'BaseScrollableArea.react',
  [
    'BaseScrollableAreaContext',
    'CometDebounce',
    'CometVisualCompletionAttributes',
    'Locale',
    'UserAgent',
    'gkx',
    'react',
    'resize-observer-polyfill',
    'stylex',
    'useUnsafeRef_DEPRECATED',
    'useVisibilityObserver',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    b = d('react');
    var i = b.useContext,
      j = b.useEffect,
      k = b.useImperativeHandle,
      l = b.useMemo,
      m = b.useRef,
      n = b.useState,
      o = {
        baseScroller: {
          display: 'x78zum5',
          flexDirection: 'xdt5ytf',
          flexGrow: 'x1iyjqo2',
          position: 'x1n2onr6',
          $$css: !0,
        },
        baseScrollerHorizontal: { flexDirection: 'x1q0g3np', $$css: !0 },
        baseScrollerWithBottomShadow: { marginBottom: 'x129vozr', $$css: !0 },
        baseScrollerWithTopShadow: { marginTop: 'xaci4zi', $$css: !0 },
        default: {
          MsOverflowStyle: 'x2atdfe',
          MsScrollChaining: 'xb57i2i',
          MsScrollRails: 'x1q594ok',
          WebkitOverflowScrolling: 'x5lxg6s',
          display: 'x78zum5',
          flexDirection: 'xdt5ytf',
          overflowX: 'x6ikm8r',
          overflowY: 'x10wlt62',
          position: 'x1n2onr6',
          zIndex: 'x1ja2u2z',
          $$css: !0,
        },
        expanding: {
          flexBasis: 'x1l7klhg',
          flexGrow: 'x1iyjqo2',
          flexShrink: 'xs83m0k',
          minHeight: 'x2lwn1j',
          $$css: !0,
        },
        expandingIE11: {
          flexBasis: 'xdl72j9',
          flexGrow: 'x1iyjqo2',
          flexShrink: 'xs83m0k',
          minHeight: 'x2lwn1j',
          $$css: !0,
        },
        hideScrollbar: {
          MsOverflowStyle: 'x1pq812k',
          scrollbarWidth: 'x1rohswg',
          '::-webkit-scrollbar_display': 'xfk6m8',
          '::-webkit-scrollbar_height': 'x1yqm8si',
          '::-webkit-scrollbar_width': 'xjx87ck',
          $$css: !0,
        },
        horizontalAuto: {
          overflowX: 'xw2csxc',
          overscrollBehaviorX: 'x7p5m3t',
          $$css: !0,
        },
        perspective: {
          perspective: 'xx8ngbg',
          perspectiveOrigin: 'xwo3gff',
          position: 'x1n2onr6',
          transformStyle: 'x1oyok0e',
          $$css: !0,
        },
        perspectiveRTL: { perspectiveOrigin: 'x1glq8lk', $$css: !0 },
        verticalAuto: {
          overflowY: 'x1odjw0f',
          overscrollBehaviorY: 'x1e4zzel',
          $$css: !0,
        },
      },
      p = d('Locale').isRTL(),
      q = c('gkx')('1299319');
    function a(a, b) {
      var d = a.children,
        e = a.contentRef,
        f = a.expanding;
      f = f === void 0 ? !1 : f;
      var g = a.forceBrowserDefault,
        s = g === void 0 ? !1 : g;
      g = a.hideScrollbar;
      var t = g === void 0 ? !1 : g,
        x = a.horizontal;
      g = a.id;
      var y = a.onScroll,
        z = a.onScrollBottom,
        A = a.onScrollTop,
        B = a.scrollTracePolicy,
        C = a.style,
        D = a.tabIndex,
        E = a.testid,
        F = a.vertical;
      E = a.withBottomShadow;
      E = E === void 0 ? !1 : E;
      var G = a.withTopShadow;
      G = G === void 0 ? !1 : G;
      var H = a.xstyle;
      a = babelHelpers.objectWithoutPropertiesLoose(a, [
        'children',
        'contentRef',
        'expanding',
        'forceBrowserDefault',
        'hideScrollbar',
        'horizontal',
        'id',
        'onScroll',
        'onScrollBottom',
        'onScrollTop',
        'scrollTracePolicy',
        'style',
        'tabIndex',
        'testid',
        'vertical',
        'withBottomShadow',
        'withTopShadow',
        'xstyle',
      ]);
      var I = l(
          function () {
            return s || !F || t || x || w();
          },
          [F, t, x, s],
        ),
        J = n(!1),
        K = J[0],
        L = J[1];
      J = n(!1);
      var M = J[0],
        N = J[1];
      J = n(!1);
      var O = J[0],
        P = J[1],
        Q = i(c('BaseScrollableAreaContext')),
        R = m(null),
        S = c('useUnsafeRef_DEPRECATED')(null),
        T = m(null),
        U = m(null),
        V = m(null),
        W = m(0);
      j(
        function () {
          var a;
          if (I) return;
          var b = S.current,
            d = R.current,
            f = (a = e == null ? void 0 : e.current) != null ? a : d,
            g = U.current,
            h = T.current;
          if (d == null || f == null || b == null || h == null || g == null)
            return;
          var i = 0,
            j = 0;
          a = function () {
            g.style.display = 'none';
            h.style.display = 'none';
            var a = b.getBoundingClientRect(),
              c = f.getBoundingClientRect(),
              e = b.scrollHeight,
              k = d.scrollHeight,
              l = f.scrollHeight;
            k = k - l;
            var m = k !== 0;
            k = Math.ceil(a.height - k);
            j = a.top;
            W.current = m ? l : e;
            l = W.current;
            i = Math.pow(k, 2) / l;
            h.style.height = l <= k ? '0px' : i + 'px';
            g.style.height = l + 'px';
            p
              ? ((h.style.left = '0px'), (g.style.left = '0px'))
              : ((h.style.right = '0px'), (g.style.right = '0px'));
            e = b.scrollTop;
            c = c.top - a.top + e;
            a = 0;
            m &&
              ((a = c * -1),
              (g.style.top = c + 'px'),
              (h.style.top = c + 'px'));
            e = (k - i) / (l - k);
            h.style.transform = [
              'matrix3d(\n          1,0,0,0,\n          0,1,0,0,\n          0,' +
                a +
                ',1,0,\n          0,0,0,-1)',
              'scale(' + 1 / e + ')',
              'translateZ(' + (1 - 1 / e) + 'px)',
              'translateZ(-2px)',
            ].join(' ');
            h.style.display = 'block';
            g.style.display = l <= k ? 'none' : 'block';
          };
          var k = function (a) {
              r(a);
              var c = a.clientY;
              a = b.clientHeight;
              var d = b.scrollTop;
              P(!0);
              var e = W.current / a;
              a = d / e;
              if (c < j + a || c > j + a + i) {
                var f = c < j + a ? -20 : 20,
                  h = !0,
                  k = window.setInterval(function () {
                    h && b.scrollTo({ top: b.scrollTop + f });
                  }, 16);
                a = function a(b) {
                  r(b),
                    k && window.clearInterval(k),
                    window.removeEventListener('mouseup', a, !0),
                    g.removeEventListener('mouseenter', l),
                    g.removeEventListener('mouseleave', m);
                };
                var l = function (a) {
                    r(a), (h = !0);
                  },
                  m = function (a) {
                    r(a), (h = !1);
                  };
                window.addEventListener('mouseup', a, !0);
                g.addEventListener('mouseenter', l);
                g.addEventListener('mouseleave', m);
                return;
              }
              var n = function (a) {
                r(a);
                a = a.clientY - c;
                b.scrollTo({ top: d + a * e });
              };
              a = function a(b) {
                r(b),
                  P(!1),
                  window.removeEventListener('mousemove', n, !0),
                  window.removeEventListener('mouseup', a, !0);
              };
              window.addEventListener('mousemove', n, !0);
              window.addEventListener('mouseup', a, !0);
            },
            l = c('CometDebounce')(a, { wait: 100 });
          window.addEventListener('resize', l);
          g.addEventListener('mousedown', k);
          var m = new (c('resize-observer-polyfill'))(l);
          m.observe(d);
          m.observe(b);
          return function () {
            window.removeEventListener('resize', l),
              g.removeEventListener('mousedown', k),
              m.disconnect(),
              l.reset();
          };
        },
        [e, S, I],
      );
      J = function () {
        L(!0);
      };
      var aa = function () {
          return L(!1);
        },
        X = function (a) {
          y && y(a),
            N(!0),
            V.current && window.clearTimeout(V.current),
            (V.current = window.setTimeout(function () {
              N(!1);
            }, 1e3));
        };
      j(function () {
        return function () {
          window.clearTimeout(V.current);
        };
      }, []);
      var Y = l(function () {
        return {
          getDOMNode: function () {
            return S.current;
          },
        };
      }, []);
      k(
        b,
        function () {
          return Y;
        },
        [Y],
      );
      b = l(
        function () {
          return [].concat(Q, [Y]);
        },
        [Y, Q],
      );
      var Z = h.jsx('div', {
          className:
            'x78zum5 xds687c xdt5ytf x2lah0s x10wjd1d x47corl x7wzq59 x17qophe x1vjfegm x19bjbvb x1nhvcw1 xepu288',
          children: h.jsx('div', {
            className:
              'x2lah0s xlup9mm x7wzq59 x7r5tp8 x1s928wv x1a5uphr x1j6awrg x1s71c9q x4eaejv x13vifvy',
          }),
        }),
        $ = h.jsx('div', {
          className:
            'x78zum5 xds687c xdt5ytf x2lah0s x10wjd1d x47corl x7wzq59 x17qophe x1vjfegm x1l3hj4d x1vjtdzu x13a6bvl x1yztbdb',
          children: h.jsx('div', {
            className:
              'x2lah0s xlup9mm x7wzq59 x7r5tp8 x1s928wv x1a5uphr x1j6awrg x1s71c9q x4eaejv x1ey2m1c xtjevij',
          }),
        });
      return I
        ? h.jsx(c('BaseScrollableAreaContext').Provider, {
            value: b,
            children: h.jsxs(
              'div',
              babelHelpers['extends']({}, a, {
                className: c('stylex')(
                  o['default'],
                  f && (q ? o.expandingIE11 : o.expanding),
                  t && o.hideScrollbar,
                  x && o.horizontalAuto,
                  F && o.verticalAuto,
                  H,
                ),
                'data-testid': void 0,
                id: g,
                onScroll: X,
                ref: S,
                style: C,
                tabIndex: D,
                children: [
                  G && Z,
                  h.jsxs('div', {
                    className:
                      'x78zum5 x1iyjqo2 x1n2onr6' +
                      ((x && !F ? ' x1q0g3np' : ' xdt5ytf') +
                        ((E
                          ? ' x129vozr'
                          : '' + (G ? '' : '' + (x && !F ? '' : ''))) +
                          (G ? ' xaci4zi' : ''))),
                    children: [
                      A ? h.jsx(v, { onVisible: A, scrollerRef: S }) : null,
                      d,
                      z ? h.jsx(u, { onVisible: z, scrollerRef: S }) : null,
                    ],
                  }),
                  E && $,
                ],
              }),
            ),
          })
        : h.jsx(c('BaseScrollableAreaContext').Provider, {
            value: b,
            children: h.jsxs(
              'div',
              babelHelpers['extends']({}, a, {
                className: c('stylex')(
                  o['default'],
                  o.hideScrollbar,
                  f && (q ? o.expandingIE11 : o.expanding),
                  o.perspective,
                  p && o.perspectiveRTL,
                  x && o.horizontalAuto,
                  F && o.verticalAuto,
                  H,
                ),
                'data-scrolltracepolicy': B,
                'data-testid': void 0,
                id: g,
                onMouseEnter: J,
                onMouseLeave: aa,
                onScroll: X,
                ref: S,
                style: C,
                tabIndex: D,
                children: [
                  G && Z,
                  h.jsxs('div', {
                    className:
                      'x78zum5 x1iyjqo2 x1n2onr6' +
                      ((x && !F ? ' x1q0g3np' : ' xdt5ytf') +
                        ((E
                          ? ' x129vozr'
                          : '' + (G ? '' : '' + (x && !F ? '' : ''))) +
                          (G ? ' xaci4zi' : ''))),
                    ref: R,
                    children: [
                      A ? h.jsx(v, { onVisible: A, scrollerRef: S }) : null,
                      d,
                      z ? h.jsx(u, { onVisible: z, scrollerRef: S }) : null,
                    ],
                  }),
                  E && $,
                  h.jsx(
                    'div',
                    babelHelpers['extends'](
                      {
                        className:
                          'x14nfmen x1s85apg xds687c x5yr21d xg01cxk x10l6tqk x13vifvy x1wsgiic x19991ni xwji4o3 x1kky2od x1sd63oq',
                      },
                      c('CometVisualCompletionAttributes').IGNORE,
                      { 'data-thumb': 1, ref: U },
                    ),
                  ),
                  h.jsx(
                    'div',
                    babelHelpers['extends'](
                      {
                        className:
                          'x9f619 x1s85apg xds687c xexx8yu x150jy0e x18d9i69 x1e558r4 x47corl x10l6tqk x13vifvy x19991ni xwji4o3 x1kky2od' +
                          ((K || M || O
                            ? ' x1hc1fzr x1p6kkr5'
                            : ' xg01cxk x1d8287x' + (p ? '' : '')) +
                            (p ? ' xyyilfv' : ' x1n4smgl')),
                      },
                      c('CometVisualCompletionAttributes').IGNORE,
                      {
                        'data-thumb': 1,
                        ref: T,
                        children: h.jsx('div', {
                          className:
                            'x1hwfnsy x1lcm9me x1yr5g0i xrt01vj x10y3i5r x5yr21d xh8yej3',
                        }),
                      },
                    ),
                  ),
                ],
              }),
            ),
          });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    var r = function (a) {
        a.preventDefault(), a.stopPropagation(), a.stopImmediatePropagation();
      },
      s = {
        bottom: { bottom: 'x1ey2m1c', $$css: !0 },
        main: {
          height: 'xjm9jq1',
          opacity: 'xg01cxk',
          pointerEvents: 'x47corl',
          position: 'x10l6tqk',
          width: 'x1i1rx1s',
          $$css: !0,
        },
        top: { top: 'x13vifvy', $$css: !0 },
      };
    function t(a) {
      var b = a.onVisible,
        d = a.scrollerRef;
      a = a.xstyle;
      var e = l(
        function () {
          return function () {
            return d.current;
          };
        },
        [d],
      );
      b = c('useVisibilityObserver')({
        onVisible: b,
        options: { root: e, rootMargin: 0 },
      });
      return h.jsx('div', { className: c('stylex')(s.main, a), ref: b });
    }
    t.displayName = t.name + ' [from ' + f.id + ']';
    function u(a) {
      var b = a.onVisible;
      a = a.scrollerRef;
      return h.jsx(t, { onVisible: b, scrollerRef: a, xstyle: s.bottom });
    }
    u.displayName = u.name + ' [from ' + f.id + ']';
    function v(a) {
      var b = a.onVisible;
      a = a.scrollerRef;
      return h.jsx(t, { onVisible: b, scrollerRef: a, xstyle: s.top });
    }
    v.displayName = v.name + ' [from ' + f.id + ']';
    function w() {
      return (
        c('UserAgent').isPlatform('iOS') ||
        c('UserAgent').isPlatform('Android') ||
        c('UserAgent').isBrowser('Edge') ||
        c('UserAgent').isBrowser('IE') ||
        c('UserAgent').isBrowser('Firefox < 64')
      );
    }
    e = h.forwardRef(a);
    g['default'] = e;
  },
  98,
);
