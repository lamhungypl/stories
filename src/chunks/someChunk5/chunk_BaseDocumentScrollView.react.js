__d(
  'BaseDocumentScrollView.react',
  [
    'BaseView.react',
    'DocumentScrollViewPageOffsetsContext',
    'HiddenSubtreeContext',
    'HiddenSubtreeContextProvider.react',
    'react',
    'useLayoutEffect_SAFE_FOR_SSR',
    'usePrevious',
    'useStable',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    e = d('react');
    var i = e.useCallback,
      j = e.useContext,
      k = e.useRef,
      l = e.useState,
      m = {
        detached: {
          MsOverflowStyle: 'x1pq812k',
          height: 'x5yr21d',
          overflowX: 'xw2csxc',
          overflowY: 'x1odjw0f',
          position: 'xixxii4',
          scrollbarWidth: 'x1rohswg',
          start: 'x17qophe',
          top: 'x13vifvy',
          width: 'xh8yej3',
          '::-webkit-scrollbar_display': 'xfk6m8',
          '::-webkit-scrollbar_height': 'x1yqm8si',
          '::-webkit-scrollbar_width': 'xjx87ck',
          $$css: !0,
        },
      },
      n = new Map(),
      o = new Set(),
      p = null;
    function q(a, b) {
      return !!(
        a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING
      );
    }
    function r() {
      var a = null;
      n.forEach(function (b, c) {
        a == null
          ? (a = c)
          : a != null && c != null && q(a, c) && !o.has(c) && (a = c);
      });
      return a;
    }
    function s(a) {
      return p == null || q(p, a);
    }
    function b(b) {
      var d = b.contextKey,
        e = d === void 0 ? null : d;
      d = b.detached;
      d = d === void 0 ? !1 : d;
      var f = b.detachedDefaultValue;
      f = f === void 0 ? !1 : f;
      b.detachedPageOffsets;
      var g = b.disableNavigationScrollReset,
        q = g === void 0 ? !1 : g;
      g = b.hiddenWhenDetached;
      g = g === void 0 ? !1 : g;
      var t = b.maintainScrollForContext,
        u = t === void 0 ? !1 : t,
        v = b.onInitialScroll;
      t = b.resetScrollOnMount;
      var w = t === void 0 ? !0 : t;
      t = babelHelpers.objectWithoutPropertiesLoose(b, [
        'contextKey',
        'detached',
        'detachedDefaultValue',
        'detachedPageOffsets',
        'disableNavigationScrollReset',
        'hiddenWhenDetached',
        'maintainScrollForContext',
        'onInitialScroll',
        'resetScrollOnMount',
      ]);
      var x = k(),
        y = k({ x: 0, y: 0 }),
        z = c('useStable')(function () {
          return {};
        }),
        A = c('usePrevious')(e);
      b = l(f);
      var B = b[0],
        C = b[1];
      f = l({ x: 0, y: 0 });
      var D = f[0],
        E = f[1],
        F = c('usePrevious')(B);
      b = j(c('HiddenSubtreeContext'));
      var G = b.hidden;
      c('useLayoutEffect_SAFE_FOR_SSR')(function () {
        var a = x.current;
        if (a != null) {
          if (s(a)) {
            if (p != null) {
              var b = n.get(p);
              b && b(!1);
            }
            p = a;
          } else C(!0);
          n.set(a, function (a) {
            a || E(babelHelpers['extends']({}, y.current)), C(!a);
          });
          return function () {
            n['delete'](a);
            if (p === a) {
              p = r();
              if (p != null) {
                var b = n.get(p);
                b && b(!0);
              }
            }
          };
        }
      }, []);
      var H = i(
        function (b, c) {
          a.scrollTo && a.scrollTo(b, c), typeof v === 'function' && v(b, c);
        },
        [v],
      );
      c('useLayoutEffect_SAFE_FOR_SSR')(
        function () {
          (w || F != null) && !B && B !== F && H(D.x, D.y);
        },
        [B, D, F, H, w],
      );
      c('useLayoutEffect_SAFE_FOR_SSR')(
        function () {
          if ((w || A != null) && e !== A) {
            var a = u && e != null && e in z ? z[e] : { x: 0, y: 0 };
            B ? E(a) : q !== !0 && H(a.x, a.y);
          }
        },
        [e, z, B, u, A, H, w, q],
      );
      c('useLayoutEffect_SAFE_FOR_SSR')(
        function () {
          if (!B) {
            var b = function () {
              var b = a.pageXOffset,
                c = a.pageYOffset;
              y.current = { x: b, y: c };
              e != null && (z[e] = { x: b, y: c });
            };
            window.addEventListener('scroll', b, { passive: !0 });
            return function () {
              return window.removeEventListener('scroll', b, { passive: !0 });
            };
          }
        },
        [B, e, z],
      );
      c('useLayoutEffect_SAFE_FOR_SSR')(
        function () {
          var a = x.current;
          if (a != null)
            if (G) {
              o.add(a);
              if (!B) {
                C(!0);
                p = r();
                if (p != null) {
                  var b = n.get(p);
                  b && b(!0);
                }
              }
              return function () {
                o['delete'](a);
              };
            } else if (B && a !== p && a === r()) {
              if (p != null) {
                b = n.get(p);
                b && b(!1);
              }
              p = a;
              b = n.get(p);
              b && b(!0);
            }
        },
        [B, G],
      );
      f = d || B;
      b = g;
      var I = B && !g;
      c('useLayoutEffect_SAFE_FOR_SSR')(
        function () {
          var a = x.current;
          I && a != null && (a.scrollTop = D.y);
        },
        [D.y, I],
      );
      return h.jsx(c('DocumentScrollViewPageOffsetsContext').Provider, {
        value: y,
        children: h.jsx(c('HiddenSubtreeContextProvider.react'), {
          ignoreParent: !0,
          isBackgrounded: f,
          isHidden: b,
          children: h.jsx(
            c('BaseView.react'),
            babelHelpers['extends'](
              {},
              t,
              { hidden: b },
              I && {
                'aria-hidden': !0,
                id: 'scrollview',
                style: { left: -D.x },
                xstyle: m.detached,
              },
              { ref: x },
            ),
          ),
        }),
      });
    }
    b.displayName = b.name + ' [from ' + f.id + ']';
    g['default'] = b;
  },
  98,
);
