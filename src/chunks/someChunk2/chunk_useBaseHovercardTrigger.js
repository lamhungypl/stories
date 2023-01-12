__d(
  'useBaseHovercardTrigger',
  [
    'BaseContextualLayer.react',
    'BaseHovercardTriggerWrapper.react',
    'CometErrorBoundary.react',
    'CometHeroInteractionContextPassthrough.react',
    'CometPlaceholder.react',
    'FocusInertRegion.react',
    'FocusWithinHandler.react',
    'HiddenSubtreeContextProvider.react',
    'focusScopeQueries',
    'react',
    'useCometDisplayTimingTrackerForInteraction',
    'useCometPrerenderer',
    'useDelayedState',
    'useFadeEffect',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    b = d('react');
    var i = b.useCallback,
      j = b.useEffect,
      k = b.useRef,
      l = b.useState,
      m = 300,
      n = 50,
      o = {
        disablePointerEvents: { pointerEvents: 'x47corl', $$css: !0 },
        hovercard: {
          opacity: 'xg01cxk',
          transitionDuration: 'x1ebt8du',
          transitionProperty: 'x19991ni',
          transitionTimingFunction: 'x1dhq9h',
          $$css: !0,
        },
        hovercardVisible: {
          opacity: 'x1hc1fzr',
          transitionDuration: 'xhb22t3',
          transitionTimingFunction: 'xls3em1',
          $$css: !0,
        },
      };
    function a(a) {
      var b = a.children,
        e = a.display,
        f = a.fallback,
        g = a.onLoadEntryPoint,
        p = a.onVisibilityChange,
        q = babelHelpers.objectWithoutPropertiesLoose(a, [
          'children',
          'display',
          'fallback',
          'onLoadEntryPoint',
          'onVisibilityChange',
        ]);
      a = c('useDelayedState')(!1);
      var r = a[0],
        s = a[1];
      a = l(!1);
      var t = a[0],
        u = a[1];
      a = l(!1);
      var v = a[0],
        w = a[1];
      a = l(!1);
      var x = a[0],
        y = a[1];
      a = l(!1);
      var z = a[0],
        A = a[1],
        B = x && z && !v,
        C = k(null),
        D = k(null),
        E = c('useCometDisplayTimingTrackerForInteraction')('HoverCard'),
        F = i(
          function () {
            s(!1), u(!1), w(!0);
          },
          [s],
        ),
        G = i(
          function (a) {
            a.key === 'Escape' && F();
          },
          [F],
        ),
        H = r || t || B,
        I = k(H);
      j(
        function () {
          I.current !== H && p && p(H), (I.current = H);
        },
        [H, p],
      );
      a = c('useFadeEffect')(H);
      var J = a[0],
        K = a[1],
        L = a[2];
      x = c('useCometPrerenderer')('tooltip', H);
      z = x[0].shouldPrerender;
      var M = z === void 0 ? !1 : z,
        N = x[1],
        O = x[2],
        P = i(
          function () {
            g && g();
          },
          [g],
        ),
        Q = function (a) {
          r || (s(!0, m), P()), !B && !t && N(a);
        },
        R = function () {
          s(!1, n), O();
        },
        S = function () {
          u(!1);
        },
        T = function () {
          u(!1);
        },
        U = function () {
          t || (u(!0), P());
        },
        V = function () {
          w(!1), P();
        };
      v = function (a) {
        return h.jsxs(c('BaseHovercardTriggerWrapper.react'), {
          display: e,
          onKeyDown: G,
          onMouseEnter: Q,
          onMouseLeave: R,
          onTouchCancel: S,
          onTouchEnd: T,
          onTouchStart: U,
          children: [
            h.jsx(c('FocusWithinHandler.react'), {
              onFocusChange: y,
              onFocusVisibleChange: A,
              onFocusWithin: V,
              children: b(C),
            }),
            (B || t || M || J) &&
              h.jsx(c('CometHeroInteractionContextPassthrough.react'), {
                clear: !0,
                children: h.jsx(c('CometErrorBoundary.react'), {
                  children: h.jsx(c('CometPlaceholder.react'), {
                    fallback: null,
                    children: h.jsx(
                      c('BaseContextualLayer.react'),
                      babelHelpers['extends'](
                        {
                          align: 'middle',
                          contextRef: C,
                          hidden: !H && M,
                          imperativeRef: D,
                          ref: E,
                          xstyle: !H && J ? o.disablePointerEvents : void 0,
                        },
                        q,
                        {
                          children: h.jsx(
                            c('HiddenSubtreeContextProvider.react'),
                            {
                              isHidden: !H && M,
                              children: h.jsx('div', {
                                className:
                                  'x19991ni' +
                                  (K
                                    ? ' x1hc1fzr xhb22t3 xls3em1'
                                    : ' xg01cxk x1ebt8du x1dhq9h'),
                                ref: L,
                                children: h.jsx(c('FocusInertRegion.react'), {
                                  focusQuery:
                                    d('focusScopeQueries').tabbableScopeQuery,
                                  children:
                                    f != null
                                      ? h.jsx(c('CometPlaceholder.react'), {
                                          fallback: f,
                                          children: a,
                                        })
                                      : a,
                                }),
                              }),
                            },
                          ),
                        },
                      ),
                    ),
                  }),
                }),
              }),
          ],
        });
      };
      return [v, F];
    }
    g['default'] = a;
  },
  98,
);
