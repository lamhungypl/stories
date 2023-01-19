__d(
  'BasePopoverTrigger.react',
  [
    'BaseButtonPopoverContext',
    'BaseContextualLayer.react',
    'BasePopoverLayerVisibility.react',
    'BaseScrollableAreaContext',
    'CometErrorBoundary.react',
    'CometEventTimings',
    'CometHeroInteractionContextPassthrough.react',
    'CometHeroInteractionWithDiv.react',
    'CometHeroLogging',
    'CometHideLayerOnEscape.react',
    'CometMenuContext',
    'CometPlaceholder.react',
    'cr:1791018',
    'cr:1802022',
    'cr:1802023',
    'react',
    'useCometPrerenderer',
    'useLayoutEffect_SAFE_FOR_SSR',
    'useMergeRefs',
    'useOnOutsideClick',
    'useVisibilityObserver',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    e = d('react');
    var i = e.useCallback,
      j = e.useContext,
      k = e.useImperativeHandle,
      l = e.useLayoutEffect,
      m = e.useMemo,
      n = e.useRef,
      o = e.useState;
    function p(a) {
      var b = a.content;
      a = a.fallback;
      return h.jsx(c('CometPlaceholder.react'), {
        fallback: (a = a) != null ? a : null,
        children: b,
      });
    }
    p.displayName = p.name + ' [from ' + f.id + ']';
    function q(a) {
      var b = a.contextualLayerRef;
      l(
        function () {
          var a = b.current;
          a && a.reposition({ autoflip: !0 });
        },
        [b],
      );
      return null;
    }
    function a(a) {
      var e = a.children,
        f = a.doNotCloseOnOutsideClick,
        g = f === void 0 ? !1 : f,
        l = a.fallback;
      f = a.imperativeRef;
      var r = a.interactionTracker,
        s = a.onHighIntentPreload,
        t = a.onLayerDetached,
        u = a.onVisibilityChange,
        v = a.popover,
        w = a.popoverRenderer,
        x = w === void 0 ? p : w,
        y = a.popoverPreloadResource,
        z = a.popoverProps;
      w = a.popoverType;
      var A = w === void 0 ? 'dialog' : w;
      w = a.preloadTrigger;
      a.tracePolicy;
      var B = a.visibleOnLoad,
        C = B === void 0 ? !1 : B,
        D = a.triggerOutsideClickOnDrag,
        E = babelHelpers.objectWithoutPropertiesLoose(a, [
          'children',
          'doNotCloseOnOutsideClick',
          'fallback',
          'imperativeRef',
          'interactionTracker',
          'onHighIntentPreload',
          'onLayerDetached',
          'onVisibilityChange',
          'popover',
          'popoverRenderer',
          'popoverPreloadResource',
          'popoverProps',
          'popoverType',
          'preloadTrigger',
          'tracePolicy',
          'visibleOnLoad',
          'triggerOutsideClickOnDrag',
        ]),
        F = n(!1);
      B = o(!1);
      var G = B[0],
        H = B[1];
      a = o(null);
      var I = a[0],
        J = a[1],
        K = n(null),
        L = i(
          function (a) {
            H(a), u && u(a);
          },
          [u],
        ),
        M = i(
          function () {
            L(!1), J(null);
          },
          [L],
        ),
        N = i(
          function (a) {
            if (!G)
              if (r == null) L(!0);
              else {
                a = d('CometEventTimings').getCurrentQueueTime(
                  a == null ? void 0 : a.timeStamp,
                );
                var b = a[0];
                a = a[1];
                r(
                  function (a) {
                    L(!0),
                      J(
                        c(
                          'CometHeroLogging',
                        ).genHeroInteractionUUIDAndMarkStart(a.getTraceId()),
                      );
                  },
                  b,
                  a,
                );
              }
          },
          [G, r, L],
        );
      k(
        f,
        function () {
          return {
            hide: function () {
              M();
            },
            show: function () {
              N();
            },
          };
        },
        [N, M],
      );
      B = i(
        function (a) {
          b('cr:1791018') &&
            a != null &&
            I != null &&
            b('cr:1791018').addMutationRootForTraceId(I, a);
        },
        [I],
      );
      var O = n(null);
      a = c('useCometPrerenderer')(w, G, y, s);
      f = a[0];
      w = a[1];
      s = a[2];
      var P = a[3];
      a = a[4];
      c('useLayoutEffect_SAFE_FOR_SSR')(
        function () {
          C === !0 && F.current === !1 && ((F.current = !0), N());
        },
        [N, C],
      );
      var Q = j(c('BaseScrollableAreaContext')),
        R = c('useVisibilityObserver')({
          onHidden: i(
            function (a) {
              a = a.hiddenReason;
              if (a === 'COMPONENT_UNMOUNTED') return;
              a = Q[Q.length - 1];
              a != null && M();
            },
            [M, Q],
          ),
        }),
        S = m(
          function () {
            switch (A) {
              case 'menu':
                return { expanded: G, haspopup: 'menu' };
              case 'dialog':
              default:
                return null;
            }
          },
          [G, A],
        ),
        T = i(
          function (a) {
            (K.current = a != null ? a : null), R(a);
          },
          [R],
        ),
        U = i(
          function () {
            g || M();
          },
          [g, M],
        );
      U = c('useOnOutsideClick')(
        G ? U : null,
        m(
          function () {
            return {
              isTargetEligible: function (a) {
                var b = K.current;
                return b != null ? !b.contains(a) : !0;
              },
              triggerOutsideClickOnDrag: D,
            };
          },
          [D],
        ),
      );
      var V = i(
          function (a) {
            G ? M() : N(a);
          },
          [G, M, N],
        ),
        W = c('useMergeRefs')(U, B),
        X = m(
          function () {
            return { onClose: M };
          },
          [M],
        ),
        Y = A === 'menu';
      return h.jsxs(h.Fragment, {
        children: [
          h.jsx(c('BaseButtonPopoverContext').Provider, {
            value: S,
            children: e(T, V, M, w, s, P, a, G),
          }),
          h.jsx(c('CometErrorBoundary.react'), {
            children: h.jsx(b('cr:1802022'), {
              prerenderingProps: f,
              children: function (a) {
                return h.createElement(
                  c('BaseContextualLayer.react'),
                  babelHelpers['extends']({}, a, E, {
                    containFocus: !0,
                    contextRef: K,
                    customContainer: b('cr:1802023'),
                    imperativeRef: O,
                    key: 'popover',
                    onEscapeFocusRegion: Y ? M : void 0,
                    ref: W,
                  }),
                  h.jsx(c('CometHideLayerOnEscape.react'), {
                    onHide: M,
                    children: h.jsx(c('CometMenuContext').Provider, {
                      value: X,
                      children: h.jsx(
                        c('CometHeroInteractionContextPassthrough.react'),
                        {
                          clear: !0,
                          children: h.jsx(
                            c('CometHeroInteractionWithDiv.react'),
                            {
                              interactionDesc:
                                'popover_' +
                                (y != null ? y.getModuleId() : 'Unknown'),
                              interactionUUID: I,
                              children: h.jsx(
                                c('BasePopoverLayerVisibility.react'),
                                {
                                  onLayerDetached: t,
                                  children: x({
                                    content: h.jsxs(h.Fragment, {
                                      children: [
                                        h.jsx(q, { contextualLayerRef: O }),
                                        h.jsx(
                                          v,
                                          babelHelpers['extends']({}, z, {
                                            onClose: M,
                                          }),
                                        ),
                                      ],
                                    }),
                                    fallback: h.jsxs(h.Fragment, {
                                      children: [
                                        h.jsx(q, { contextualLayerRef: O }),
                                        l,
                                      ],
                                    }),
                                  }),
                                },
                              ),
                            },
                          ),
                        },
                      ),
                    }),
                  }),
                );
              },
            }),
          }),
        ],
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
