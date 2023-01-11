/*FB_PKG_DELIM*/

__d(
  'ProfileCommunityPresenceMigrationMultiStepDialogQuery_facebookRelayOperation',
  [],
  function (a, b, c, d, e, f) {
    e.exports = '5836896689737518';
  },
  null,
);
__d(
  'ProfileCommunityPresenceMigrationMultiStepDialogQuery$Parameters',
  [
    'ProfileCommunityPresenceMigrationMultiStepDialogQuery_facebookRelayOperation',
  ],
  function (a, b, c, d, e, f) {
    'use strict';
    a = {
      kind: 'PreloadableConcreteRequest',
      params: {
        id: b(
          'ProfileCommunityPresenceMigrationMultiStepDialogQuery_facebookRelayOperation',
        ),
        metadata: {},
        name: 'ProfileCommunityPresenceMigrationMultiStepDialogQuery',
        operationKind: 'query',
        text: null,
      },
    };
    e.exports = a;
  },
  null,
);
__d(
  'CometHeaderContentArea.react',
  [
    'CometEntityHeaderScrollToContext',
    'CometGlobalPanelExpandedContext',
    'CometGlobalPanelExpandedState',
    'CometGlobalPanelGating',
    'CometRouteRenderType',
    'CometRouterFocusRegion.react',
    'CometSection.react',
    'cr:683059',
    'gkx',
    'react',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react'),
      i = d('react'),
      j = i.useCallback,
      k = i.useContext,
      l = i.useMemo,
      m = i.useRef;
    function e(e) {
      var f = e.children,
        g = e.header,
        i = e.scrollKey;
      e = e.useDeprecatedStyles;
      e = e === void 0 ? !1 : e;
      var n = d('CometRouteRenderType').useIsPushView(),
        o = k(c('CometGlobalPanelExpandedContext')),
        p = m(null),
        q = m(null),
        r = j(
          function (e, f) {
            if (
              o !== d('CometGlobalPanelExpandedState').ExpandedState.Collapsed
            )
              return;
            var g = q.current;
            q.current = i;
            if (i != null && i === g) return;
            if (p.current == null) return;
            if (p.current.offsetWidth < 940) return;
            if (
              e.current != null &&
              ((g = p.current) == null ? void 0 : g.contains(e.current))
            ) {
              g = n ? -60 : 0;
              e = e.current;
              while (e != null && p.current.contains(e))
                (g += e.offsetTop), (e = e.offsetParent);
              g += (e = f) != null ? e : 0;
              try {
                a.scrollTo({
                  behavior:
                    d('CometGlobalPanelGating').isGlobalPanelVisible() &&
                    !c('gkx')('3608')
                      ? 'smooth'
                      : 'auto',
                  left: a.pageXOffset,
                  top: g,
                });
              } catch (b) {
                a.scrollTo(a.pageXOffset, g);
              }
              b('cr:683059') && b('cr:683059').setInitialScrollY(g);
            }
          },
          [n, o, i],
        ),
        s = l(
          function () {
            return { scrollToTop: r };
          },
          [r],
        );
      return h.jsxs(c('CometSection.react'), {
        className: 'x78zum5 xdt5ytf x1t2pt76 x1n2onr6',
        ref: p,
        role: 'main',
        testid: void 0,
        children: [
          h.jsx(c('CometEntityHeaderScrollToContext').Provider, {
            value: s,
            children: g,
          }),
          h.jsx('div', {
            className:
              '' +
              (e
                ? ' x6s0dn4 x78zum5 xdt5ytf x193iq5w'
                : ' x78zum5 xdt5ytf  x1iyjqo2'),
            'data-testid': void 0,
            children: h.jsx(c('CometRouterFocusRegion.react'), { children: f }),
          }),
        ],
      });
    }
    e.displayName = e.name + ' [from ' + f.id + ']';
    g['default'] = e;
  },
  98,
);
__d(
  'CometStickyHeaderContentArea.react',
  [
    'BaseStickyHeader.react',
    'BaseViewportMarginsAddonContextProvider.react',
    'CometAppNavigationConstants',
    'CometAppNavigationTabBarContainer.react',
    'CometHeaderContentArea.react',
    'CometRouteRenderType',
    'react',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react'),
      i = { tabBar: { zIndex: 'xhtitgo', $$css: !0 } };
    function a(a) {
      var b = a.headerHeight;
      b = b === void 0 ? 60 : b;
      var e = a.showTabContainerOnPushView;
      e = e === void 0 ? !1 : e;
      a = babelHelpers.objectWithoutPropertiesLoose(a, [
        'headerHeight',
        'showTabContainerOnPushView',
      ]);
      var f = d('CometRouteRenderType').useIsPushView();
      b = h.jsx(
        c('CometHeaderContentArea.react'),
        babelHelpers['extends']({}, a, {
          children: h.jsx(c('BaseViewportMarginsAddonContextProvider.react'), {
            addon: b,
            children: a.children,
          }),
        }),
      );
      return e && f
        ? h.jsxs(h.Fragment, {
            children: [
              h.jsx(c('BaseStickyHeader.react'), {
                xstyle: i.tabBar,
                children: h.jsx(
                  c('CometAppNavigationTabBarContainer.react'),
                  {},
                ),
              }),
              h.jsx(c('BaseViewportMarginsAddonContextProvider.react'), {
                addon: d('CometAppNavigationConstants').HEADER_HEIGHT,
                children: b,
              }),
            ],
          })
        : b;
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
__d(
  'ProfileCommunityPresenceMigrationMultiStepDialog.entrypoint',
  [
    'JSResourceForInteraction',
    'ProfileCommunityPresenceMigrationMultiStepDialogQuery$Parameters',
    'WebPixelRatio',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = {
      getPreloadProps: function (a) {
        var b = a.groupID;
        a = a.userID;
        b = (b = b) != null ? b : a;
        return {
          queries: {
            profileCommunityPresenceMigrationMultiStepDialogQueryRef: {
              parameters: c(
                'ProfileCommunityPresenceMigrationMultiStepDialogQuery$Parameters',
              ),
              variables: {
                entity_id: b,
                id: a,
                scale: d('WebPixelRatio').get(),
              },
            },
          },
        };
      },
      root: c('JSResourceForInteraction')(
        'ProfileCommunityPresenceMigrationMultiStepDialog.react',
      ).__setRef('ProfileCommunityPresenceMigrationMultiStepDialog.entrypoint'),
    };
    b = a;
    g['default'] = b;
  },
  98,
);
__d(
  'useShowTransitionDialog',
  [
    'Actor',
    'CometRouteParams',
    'ProfileCommunityPresenceMigrationMultiStepDialog.entrypoint',
    'react',
    'useCometEntryPointDialog',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    b = d('react');
    var h = b.useEffect,
      i = b.useRef;
    function a() {
      var a = d('Actor').useActor();
      a = a[0];
      var b = d('CometRouteParams').useRouteParams(),
        e = b.idorvanity,
        f = b.show_community_transition;
      b = { groupID: e != null ? String(e) : null, userID: String(a) };
      e = c('useCometEntryPointDialog')(
        c('ProfileCommunityPresenceMigrationMultiStepDialog.entrypoint'),
        b,
      );
      var g = e[0],
        j = i(!1);
      h(
        function () {
          f === !0 &&
            !j.current &&
            (g({}, function () {
              j.current = !1;
            }),
            (j.current = !0));
        },
        [g, f],
      );
    }
    g['default'] = a;
  },
  98,
);
__d(
  'CometDefaultPageSizes',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    a = [1, 2, 2, 2, 4];
    f.DEFAULT_PAGE_SIZES = a;
  },
  66,
);
__d(
  'CometGHLFeedClassContext',
  ['react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = d('react');
    b = !1;
    c = a.createContext(b);
    e = c;
    g['default'] = e;
  },
  98,
);
__d(
  'useCometTailLoadGlimmerTracker',
  [
    'IntersectionObserver',
    'cr:1703077',
    'intersectionObserverEntryIsIntersecting',
    'performanceNow',
    'react',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    e = d('react');
    var h = e.useCallback,
      i = e.useEffect,
      j = e.useRef;
    function a(a, d, e) {
      var f = j(null),
        g = j(-1),
        k = j(-1),
        l = j(0),
        m = j(!1),
        n = j(null),
        o = j(null);
      b('cr:1703077') &&
        a != null &&
        b('cr:1703077').setTailLoadStartTime(a, e);
      i(function () {
        return function () {
          o.current && o.current(), (o.current = null);
        };
      }, []);
      return h(
        function (e) {
          if (
            a != null &&
            b('cr:1703077') &&
            e &&
            (g.current !== d || f.current !== e)
          ) {
            f.current = e;
            o.current && (o.current(), (o.current = null));
            if (m.current) {
              var h = n.current;
              h != null && (l.current += c('performanceNow')() - h);
              n.current = c('performanceNow')();
              m.current = !1;
            }
            g.current !== d &&
              (l.current > 0 &&
                (b('cr:1703077').reportInterruptedConsumption(
                  a,
                  g.current,
                  l.current,
                ),
                (k.current = g.current)),
              (g.current = d),
              (l.current = 0));
            h = function (a) {
              Array.prototype.forEach.call(a, function (a) {
                if (
                  c('intersectionObserverEntryIsIntersecting')(a) &&
                  !m.current
                )
                  (m.current = !0), (n.current = a.time);
                else if (
                  !c('intersectionObserverEntryIsIntersecting')(a) &&
                  m.current
                ) {
                  m.current = !1;
                  var b = n.current;
                  b != null && (l.current += a.time - b);
                }
              });
            };
            var i = new (c('IntersectionObserver'))(h);
            i.observe(e);
            o.current = function () {
              i.disconnect();
            };
          }
        },
        [a, d],
      );
    }
    g['default'] = a;
  },
  98,
);
__d(
  'CometInfiniteScrollSuspenseList.react',
  [
    'CometGHLFeedClassContext',
    'CometPagelet.react',
    'CometPlaceholder.react',
    'CometSuspendWhileWaitingOnDOM.react',
    'CometSuspenseList.react',
    'ExecutionEnvironment',
    'cr:1142206',
    'gkx',
    'mergeRefs',
    'performanceNow',
    'react',
    'stylex',
    'useCometTailLoadGlimmerTracker',
    'useLayoutEffect_SAFE_FOR_SSR',
    'useUnsafeRef_DEPRECATED',
    'useVisibilityObserver',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    e = d('react');
    var i = e.Children,
      j = e.startTransition,
      k = e.useCallback,
      l = e.useContext,
      m = e.useEffect,
      n = e.useMemo,
      o = e.useRef,
      p = e.useState;
    function q(a) {
      var d = a.onLoadMore,
        e = a.rootMargin;
      a = a.triggerXStyle;
      var f = o(!1),
        g = k(
          function () {
            b('cr:1142206') != null &&
              b('cr:1142206').log('[onVisible] fired', {
                alreadyTriggered: f.current,
              });
            if (f.current) return;
            f.current = !0;
            d();
          },
          [d],
        );
      e = c('useVisibilityObserver')({
        onVisible: g,
        options: { rootMargin: (g = e) != null ? g : 0 },
      });
      return h.jsx('div', { className: c('stylex')(a), ref: e });
    }
    q.displayName = q.name + ' [from ' + f.id + ']';
    function a(a) {
      var b = a.children,
        e = a.endGlimmerRef,
        f = a.hasMore,
        g = a.isLoading,
        r = a.listGlimmer,
        s = a.onLoadMore,
        t = a.pageletName,
        u = a.positionLimitForSSR,
        v = a.revealOrder,
        w = a.rootMargin;
      a = a.triggerXStyle;
      var x = p(0),
        y = x[0],
        z = x[1],
        A = l(c('CometGHLFeedClassContext')),
        B = o(!1),
        C = o(null),
        D = c('useUnsafeRef_DEPRECATED')(0),
        E = f;
      x = k(
        function () {
          (D.current = c('performanceNow')()),
            j(function () {
              z(function (a) {
                return a + 1;
              }),
                s(C);
            });
        },
        [s, C],
      );
      c('useLayoutEffect_SAFE_FOR_SSR')(
        function () {
          E || (B.current = !1);
        },
        [E],
      );
      var F = 0,
        G = c('gkx')('7166');
      b = i.map(b, function (a) {
        var b = u != null && F > u;
        return a
          ? t != null
            ? h.jsx(d('CometPagelet.react').Placeholder, {
                className: G && A ? 'x1lliihq' : void 0,
                fallback: r,
                ignoreLateMutation: b,
                name: t,
                position: F++,
                trackTailLoad: !0,
                children:
                  b && !c('ExecutionEnvironment').canUseDOM
                    ? h.jsx(c('CometSuspendWhileWaitingOnDOM.react'), {})
                    : a,
              })
            : h.jsx(c('CometPlaceholder.react'), { fallback: r, children: a })
          : null;
      });
      var H = p(!1),
        I = H[0],
        J = H[1];
      m(function () {
        return J(!0);
      }, []);
      if (f && !g && I) {
        H = h.jsx(
          q,
          { onLoadMore: x, rootMargin: w, triggerXStyle: a },
          'tailTrigger' + y,
        );
        v === 'backwards' ? b.unshift(H) : b.push(H);
      }
      f = F;
      var K = c('useCometTailLoadGlimmerTracker')(t, f, D.current);
      g = n(
        function () {
          return c('mergeRefs')(e, C, K);
        },
        [e, K],
      );
      return h.jsxs(h.Fragment, {
        children: [
          E && v === 'backwards'
            ? h.jsx('div', { ref: g, children: r }, 'glimmerBackwards')
            : null,
          h.jsx(
            c('CometSuspenseList.react'),
            { revealOrder: v || 'forwards', tail: 'hidden', children: b },
            'list',
          ),
          h.jsx('div', { 'data-testid': void 0 }),
          E && v !== 'backwards'
            ? h.jsx(
                'div',
                { className: 'x1xzczws', ref: g, children: r },
                'glimmer',
              )
            : null,
        ],
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
__d(
  'CometInfiniteScrollSuspenseListIncrementalRenderer.react',
  [
    'CometDefaultPageSizes',
    'CometInfiniteScrollSuspenseList.react',
    'react',
    'unrecoverableViolation',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    b = d('react');
    var i = b.Children,
      j = b.useCallback,
      k = b.useMemo,
      l = b.useRef,
      m = b.useState;
    function a(a) {
      var b = a.children,
        e = a.hasMore,
        f = a.isLoading,
        g = a.onLoadMore,
        n = a.revealOrder;
      n = n === void 0 ? 'forwards' : n;
      var o = a.pageSizes,
        p = o === void 0 ? d('CometDefaultPageSizes').DEFAULT_PAGE_SIZES : o;
      o = babelHelpers.objectWithoutPropertiesLoose(a, [
        'children',
        'hasMore',
        'isLoading',
        'onLoadMore',
        'revealOrder',
        'pageSizes',
      ]);
      a = m(p[0]);
      var q = a[0],
        r = a[1],
        s = l(1),
        t = i.count(b);
      a = q < t;
      if (n !== 'forwards')
        throw c('unrecoverableViolation')(
          'CometInfiniteScrollSuspenseListIncrementalRenderer currently only supports revealOrder="forwards"',
          'comet_feed',
        );
      var u = j(
          function (a) {
            s.current = Math.min(s.current, p.length - 1);
            var b = p[s.current],
              c = q < t;
            c
              ? (s.current++, r(q + b))
              : e && !f && (q === t && (s.current++, r(q + b)), g(a));
          },
          [e, f, t, q, g, p],
        ),
        v = k(
          function () {
            return i.toArray(b).slice(0, q);
          },
          [b, q],
        );
      return h.jsx(
        c('CometInfiniteScrollSuspenseList.react'),
        babelHelpers['extends']({}, o, {
          hasMore: e || a,
          isLoading: f && !a,
          onLoadMore: u,
          revealOrder: n,
          children: v,
        }),
      );
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
__d(
  'CometDirectionalDockingView.react',
  ['cr:1619204'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    g['default'] = b('cr:1619204');
  },
  98,
);
__d(
  'CometDirectionalDockingView.sticky.react',
  [
    '$InternalEnum',
    'BaseScrollableAreaContext',
    'BaseViewportMarginsContext',
    'ReactDOMComet',
    'react',
    'stylex',
    'useMergeRefs',
    'useResizeObserver',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    e = d('react');
    var i = e.useCallback,
      j = e.useContext,
      k = e.useEffect,
      l = e.useRef,
      m = e.useState,
      n = { main: { position: 'x7wzq59', $$css: !0 } },
      o = b('$InternalEnum')({ Down: 0, Up: 1 }),
      p = Object.freeze({});
    function a(a) {
      var b = a.bottomStickyAdjustment_DO_NOT_USE,
        e = b === void 0 ? 0 : b;
      b = a.top;
      b = b === void 0 ? 16 : b;
      var f = a.bottom;
      f = f === void 0 ? b : f;
      var g = a.children,
        q = a.tagName;
      q = q === void 0 ? 'div' : q;
      a = a.xstyle;
      var r = j(c('BaseScrollableAreaContext')),
        s = j(c('BaseViewportMarginsContext')),
        t = b + s.top,
        u = f + s.bottom;
      b = m(0);
      f = b[0];
      var v = b[1];
      s = m(p);
      b = s[0];
      var w = s[1],
        x = i(
          function () {
            return r.length > 0 ? r[r.length - 1].getDOMNode() : window;
          },
          [r],
        ),
        y = i(
          function () {
            var a = x();
            if (a == null) return null;
            if (window.HTMLElement != null) {
              return a instanceof HTMLElement
                ? a.getBoundingClientRect().height
                : (a = a.innerHeight) != null
                ? a
                : null;
            }
            return null;
          },
          [x],
        ),
        z = l(null),
        A = l(y());
      s = i(function (a) {
        a = a.height;
        z.current = a;
      }, []);
      s = c('useResizeObserver')(s);
      var B = l(0),
        C = l(null),
        D = l(null),
        E = l(null);
      s = c('useMergeRefs')(s, D);
      var F = i(
          function (a) {
            a = a.top;
            var b = B.current,
              c = C.current;
            b = a > b ? o.Down : o.Up;
            var f = D.current,
              g = E.current;
            if (f == null || g == null) return;
            B.current = a;
            C.current = b;
            if (b === c) return;
            c = (a = A.current) != null ? a : y();
            if (c == null) return;
            a = f.getBoundingClientRect();
            f = g.getBoundingClientRect();
            g = a.height;
            var h = a.top - f.top,
              i;
            if (g < c - t - u) (h = 0), (i = { top: t });
            else
              switch (b) {
                case o.Down:
                  a = Math.round(Math.min(t, c - u - g));
                  i = { top: a };
                  break;
                case o.Up:
                  f = Math.round(Math.min(u, c - t - g));
                  i = { bottom: f + e };
              }
            d('ReactDOMComet').flushSync(function () {
              w(function (a) {
                if (i.top != null && a.top != null && i.top === a.top) return a;
                return i.bottom != null &&
                  a.bottom != null &&
                  i.bottom === a.bottom
                  ? a
                  : (a = i) != null
                  ? a
                  : p;
              }),
                v(h);
            });
          },
          [u, t, y],
        ),
        G = i(
          function () {
            var a = x();
            return a == null
              ? { left: 0, top: 0 }
              : a instanceof HTMLElement
              ? { left: a.scrollLeft, top: a.scrollTop }
              : { left: a.scrollY, top: a.scrollY };
          },
          [x],
        );
      k(
        function () {
          var a = x();
          if (a != null) {
            var b = function () {
              F(G());
            };
            a.addEventListener('scroll', b);
            return function () {
              a.removeEventListener('scroll', b);
            };
          }
        },
        [x, G, F],
      );
      k(
        function () {
          var a = function () {
            A.current = y();
            var a = C.current;
            C.current = null;
            var b = G();
            F({ left: b.left, top: b.top + (a === o.Up ? -1 : 1) });
          };
          window.addEventListener('resize', a);
          return function () {
            window.removeEventListener('resize', a);
          };
        },
        [G, F, y],
      );
      return h.jsxs(h.Fragment, {
        children: [
          h.jsx('div', { ref: E, style: { height: f } }),
          h.jsx(q, {
            className: c('stylex')(n.main, a),
            ref: s,
            style: b,
            children: g,
          }),
        ],
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
__d(
  'useHasDemonstratedScrollIntent',
  ['CometEventListener', 'react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    b = d('react');
    var h = b.useEffect,
      i = b.useState;
    function a() {
      var a = i(!1),
        b = a[0],
        d = a[1];
      h(
        function () {
          if (!b) {
            var a = window.scrollY,
              e = c('CometEventListener').capture(
                window,
                'scroll',
                function (b) {
                  b.target === window.document && window.scrollY !== a && d(!0);
                },
              );
            return function () {
              e.remove();
            };
          }
        },
        [b],
      );
      return b;
    }
    g['default'] = a;
  },
  98,
);
__d(
  'CometFeedInfiniteScrollSuspenseList.react',
  [
    'CometFeedGlimmer.react',
    'CometFeedTailLoadBufferHeight',
    'CometInfiniteScrollSuspenseList.react',
    'CometInfiniteScrollSuspenseListIncrementalRenderer.react',
    'CometInteractionSourceContext',
    'FBLogger',
    'QuickPerformanceLogger',
    'WebConnectionClassServerGuess',
    'gkx',
    'qpl',
    'react',
    'useHasDemonstratedScrollIntent',
    'useVisibilityObserver',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react'),
      i = d('react').useMemo;
    function a(a) {
      var b = a.incrementalRendering;
      b = b === void 0 ? !0 : b;
      var d = a.waitOnScrollIntent,
        e = a.children,
        f = a.hasMore,
        g = a.incrementalRenderingPageSizes,
        j = a.interactionSource,
        k = a.isLoading,
        l = a.onLoadMore,
        m = a.pageletName,
        n = a.positionLimitForSSR,
        o = a.revealOrder;
      c('gkx')('3048') && ((b = !1), (d = !1));
      var p = c('useHasDemonstratedScrollIntent')();
      a = i(
        function () {
          return {
            onVisible: function () {
              c('QuickPerformanceLogger').markEvent(
                c('qpl')._(655653, '17524'),
                'collision_happened',
                7,
                {
                  annotations: {
                    bool: { had_demonstrated_scroll_intent: p },
                    int: { interaction_source: j },
                  },
                },
              );
            },
          };
        },
        [j, p],
      );
      a = c('useVisibilityObserver')(a);
      var q = i(
        function () {
          var a;
          if (d === !0 && !p) return 0;
          var b;
          switch (c('WebConnectionClassServerGuess').connectionClass) {
            case 'UNKNOWN':
            case 'EXCELLENT':
            default:
              b = c('CometFeedTailLoadBufferHeight').EXCELLENT;
              break;
            case 'GOOD':
              b = c('CometFeedTailLoadBufferHeight').GOOD;
              break;
            case 'MODERATE':
              b = c('CometFeedTailLoadBufferHeight').MODERATE;
              break;
            case 'POOR':
              b = c('CometFeedTailLoadBufferHeight').POOR;
              break;
          }
          b == null &&
            (c('FBLogger')('comet_feed').mustfix(
              'Found no tail load buffer height value for the connection class `%s`. Falling back to 2500px.',
              c('WebConnectionClassServerGuess').connectionClass,
            ),
            (b = 2500));
          return (a = {}), (a[o === 'backwards' ? 'top' : 'bottom'] = b), a;
        },
        [o, p, d],
      );
      a = {
        endGlimmerRef: a,
        hasMore: f,
        isLoading: k,
        listGlimmer: h.jsx(c('CometFeedGlimmer.react'), {}),
        onLoadMore: l,
        pageletName: m,
        positionLimitForSSR: n,
        revealOrder: o,
        rootMargin: q,
      };
      if (b && (o == null || o === 'forwards'))
        return h.jsx(c('CometInteractionSourceContext').Provider, {
          value: j,
          children: h.jsx(
            c('CometInfiniteScrollSuspenseListIncrementalRenderer.react'),
            babelHelpers['extends']({ pageSizes: g }, a, { children: e }),
          ),
        });
      else
        return h.jsx(c('CometInteractionSourceContext').Provider, {
          value: j,
          children: h.jsx(
            c('CometInfiniteScrollSuspenseList.react'),
            babelHelpers['extends']({}, a, { children: e }),
          ),
        });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
__d(
  'CometHideableComponentUsingContainInstrinsic.react',
  ['react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    function a(a) {
      a = a.children;
      return h.jsx('div', {
        className:
          'x78zum5 xdt5ytf x9x18qb xb5mbof x7ywyr2 x1nn3v0j xg83lxy x1120s5i x1h0ha7o',
        children: a,
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    b = a;
    g['default'] = b;
  },
  98,
);
__d(
  'CometHideableComponentUsingIntersection.react',
  [
    'BaseView.react',
    'HiddenSubtreeContextProvider.react',
    'HiddenSubtreePassiveContext',
    'gkx',
    'intersectionObserverEntryIsIntersecting',
    'nullIntersectionObserverEntryLogger',
    'react',
    'unrecoverableViolation',
    'useIntersectionObserver',
    'useMergeRefs',
    'usePrevious',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    b = d('react');
    var i = b.useContext,
      j = b.useEffect,
      k = b.useRef,
      l = b.useState,
      m = (function () {
        var a = null;
        return function () {
          if (a === null) {
            var b;
            b = (b = document) == null ? void 0 : b.documentElement;
            if (b == null)
              throw c('unrecoverableViolation')(
                'Scroll anchoring feature detection called in an environment without a documentElement',
                'comet_infra',
              );
            a = b.style.overflowAnchor != null;
          }
          return a;
        };
      })();
    function n() {
      var a = l(null),
        b = a[0],
        c = a[1];
      j(
        function () {
          b === null &&
            c(function () {
              return m();
            });
        },
        [b],
      );
      return (a = b) != null ? a : !1;
    }
    var o = {
        invisible: { display: 'x1s85apg', $$css: !0 },
        resetBlockFormattingContext: {
          display: 'x78zum5',
          flexDirection: 'xdt5ytf',
          $$css: !0,
        },
      },
      p = { bottom: 4e3, top: 4e3 };
    function a(a) {
      var b = arguments,
        d = a.children,
        e = k(null),
        f = k(null),
        g = i(c('HiddenSubtreePassiveContext')),
        m = l(!0),
        q = m[0],
        r = m[1],
        s = l(null),
        t = s[0],
        u = s[1],
        v = c('usePrevious')(q);
      j(
        function () {
          var a = (function () {
            return t == null && !q;
          })();
          f.current != null && a && u(f.current.getBoundingClientRect().height);
        },
        [q, t, v],
      );
      var w = function (a) {
          c('nullIntersectionObserverEntryLogger')(
            a,
            'IntersectionObserverEntry is null. num_arguments=' + b.length,
          );
          var d = g.getCurrentState().hiddenOrBackgrounded_FIXME;
          c('intersectionObserverEntryIsIntersecting')(a)
            ? (u(null), r(!0))
            : d || r(!1);
        },
        x = c('useIntersectionObserver')(w, {
          root: null,
          rootMargin: p,
          threshold: 0,
        }),
        y = c('useMergeRefs')(x, e),
        z = (function () {
          if (!q && t !== null) return { height: t };
        })(),
        A = !q && t !== null,
        B = n(),
        C = B ? y : void 0;
      return c('gkx')('3048')
        ? h.jsx('div', {
            className: 'x78zum5 xdt5ytf',
            children: h.jsx(c('BaseView.react'), { children: d }),
          })
        : h.jsx('div', {
            className: 'x78zum5 xdt5ytf',
            ref: C,
            style: z,
            children: h.jsx(c('BaseView.react'), {
              hidden: A,
              ref: f,
              xstyle: A && o.invisible,
              children: h.jsx(c('HiddenSubtreeContextProvider.react'), {
                isHidden: A,
                children: d,
              }),
            }),
          });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    e = a;
    g['default'] = e;
  },
  98,
);
__d(
  'CometHideableComponent.react',
  [
    'CometHideableComponentUsingContainInstrinsic.react',
    'CometHideableComponentUsingIntersection.react',
    'ContentVisibility',
    'react',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    d('react');
    a = d('ContentVisibility').CONTENT_VISIBILITY_ENABLED
      ? c('CometHideableComponentUsingContainInstrinsic.react')
      : c('CometHideableComponentUsingIntersection.react');
    b = a;
    g['default'] = b;
  },
  98,
);
__d(
  'CometTailLoadDebugger',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    var g = [];
    function a() {
      return g;
    }
    function b() {
      for (var a = arguments.length, b = new Array(a), c = 0; c < a; c++)
        b[c] = arguments[c];
      g.push([new Date().toLocaleString()].concat(b));
    }
    f.dump = a;
    f.log = b;
  },
  66,
);
__d(
  'CometHeroFeedItem.react',
  ['CometHeroInteractionContextPassthrough.react', 'react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    function a(a) {
      var b = a.children;
      a = a.position;
      a = a == null || a <= 1;
      return h.jsx(c('CometHeroInteractionContextPassthrough.react'), {
        clear: !a,
        children: b,
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
__d(
  'LogCometCanvasAppTimeSpentFalcoEvent',
  ['FalcoLoggerInternal', 'getFalcoLogPolicy_DO_NOT_USE'],
  function (a, b, c, d, e, f) {
    'use strict';
    a = b('getFalcoLogPolicy_DO_NOT_USE')('1743833');
    c = b('FalcoLoggerInternal').create('log_comet_canvas_app_time_spent', a);
    e.exports = c;
  },
  null,
);
__d(
  'LiveEventUtils.react',
  ['unrecoverableViolation'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function a(a, b) {
      b === void 0 && (b = 'Got unexpected null or undefined');
      if (a == null) throw c('unrecoverableViolation')(b, 'live_events');
      return a;
    }
    g.nullthrows = a;
  },
  98,
);
