__d(
  'FocusRegion.react',
  [
    'ActiveFocusRegionUtilsContext',
    'FocusManager',
    'FocusRegionType',
    'ReactEventHookPropagation',
    'ReactFocusEvent.react',
    'ReactKeyboardEvent.react',
    'react',
    'setElementCanTab',
    'useLayoutEffect_SAFE_FOR_SSR',
    'useUnsafeRef_DEPRECATED',
  ],
  function (a, b, c, d, e, f, g) {
    var h = d('react');
    e = d('react');
    var i = e.useCallback,
      j = e.useContext,
      k = e.useEffect,
      l = e.useMemo,
      m = e.useRef;
    function n(a, b, c) {
      var e = document.activeElement;
      window.requestAnimationFrame(function () {
        document.activeElement === e &&
          d('FocusManager').focusElement(a, {
            preventScroll: b,
            focusWithoutUserIntent: c,
          });
      });
    }
    function o(a) {
      return a.offsetWidth === 0 && a.offsetHeight === 0;
    }
    var p = h.unstable_Scope,
      q = new Map();
    function a(a) {
      var b = a.autoRestoreFocus,
        e = a.autoFocusQuery,
        f = a.children,
        g = a.containFocusQuery,
        r = a.forwardRef,
        s = a.id,
        t = a.onEscapeFocusRegion,
        u = a.recoverFocusStrategy,
        v =
          u === void 0 ? d('FocusRegionType').RecoverFocusStrategy.Nearest : u,
        w = a.recoverFocusQuery,
        x = m(null),
        y = m(null),
        z = j(c('ActiveFocusRegionUtilsContext'));
      u = z === null && (b === !0 || t != null) ? document.activeElement : null;
      var A = c('useUnsafeRef_DEPRECATED')(u),
        B = (a = A.current) != null ? a : u,
        C = l(function () {
          return {
            lastFocused: null,
            scope: null,
            restorationFocusRegionItem: null,
            triggeredFocusRegionItems: new Set(),
          };
        }, []),
        D = i(
          function () {
            if (z != null) {
              var a = z.getActiveFocusRegion();
              if (a !== C) {
                if (C.restorationFocusRegionItem !== a) {
                  var b;
                  if (
                    (a == null ? void 0 : a.lastFocused) != null &&
                    !((b = x.current) == null
                      ? void 0
                      : b.containsNode(a.lastFocused))
                  )
                    a != null && a.triggeredFocusRegionItems.add(C),
                      (C.restorationFocusRegionItem = a);
                  else if (C.restorationFocusRegionItem == null) {
                    b = a == null ? void 0 : a.restorationFocusRegionItem;
                    C.restorationFocusRegionItem = b;
                    a != null &&
                      (b == null
                        ? void 0
                        : b.triggeredFocusRegionItems['delete'](a));
                    b == null ? void 0 : b.triggeredFocusRegionItems.add(C);
                    z.setActiveFocusRegion(C);
                    return;
                  }
                }
                (a === null ||
                  (a != null &&
                    C != null &&
                    a.lastFocused !== C.lastFocused)) &&
                  z.setActiveFocusRegion(C);
              }
            }
          },
          [z, C],
        ),
        E = m(null);
      a = i(
        function (a) {
          x.current = a;
          C.scope = a;
          var b = E.current;
          r && (r.current = a);
          b !== null && b !== s && q.get(b) === null && q['delete'](b);
          s != null &&
            (a !== null
              ? ((E.current = s), q.set(s, a))
              : q.get(s) === null && q['delete'](s));
        },
        [r, s, C],
      );
      a = d('ReactFocusEvent.react').useFocusWithin(
        a,
        l(
          function () {
            return {
              onBeforeBlurWithin: function (a) {
                var b = x.current;
                if (b !== null && w !== void 0) {
                  a.stopPropagation();
                  if (w === null) return;
                  a = a.target;
                  b = d('FocusManager').getAllNodesFromOneOrManyQueries(w, b);
                  if (b === null) return;
                  var c = b.indexOf(a);
                  a = a._tabIndexState;
                  y.current = {
                    detachedCanTab: a != null && a.canTab,
                    recoveryIndex: c,
                    recovery: b,
                  };
                }
              },
              onAfterBlurWithin: function () {
                var a = x.current,
                  b = y.current;
                y.current = null;
                var c = document.activeElement;
                if (
                  a !== null &&
                  w != null &&
                  b !== null &&
                  (c == null || c === document.body || !a.containsNode(c))
                ) {
                  c = !0;
                  var e = !0,
                    f = b.recovery,
                    g = b.recoveryIndex,
                    h = d('FocusManager').getAllNodesFromOneOrManyQueries(w, a);
                  if (h !== null && f !== null) {
                    var i = new Set(h),
                      j = new Set(f);
                    for (var k = g - 1; k >= 0; k--) {
                      var l = f[k];
                      if (i.has(l)) {
                        var m = h.indexOf(l);
                        m = m + 1;
                        if (m < h.length) {
                          m = h[m];
                          if (!j.has(m)) {
                            b.detachedCanTab &&
                              d('setElementCanTab').setElementCanTab(m, !0);
                            n(m, c, e);
                            return;
                          }
                        }
                        b.detachedCanTab &&
                          d('setElementCanTab').setElementCanTab(l, !0);
                        n(l, c, e);
                        return;
                      }
                    }
                    if (v === d('FocusRegionType').RecoverFocusStrategy.Nearest)
                      for (m = g + 1; m < f.length; m++) {
                        l = f[m];
                        if (i.has(l)) {
                          j = h.indexOf(l);
                          k = j - 1;
                          if (k >= 0) {
                            g = h[k];
                            b.detachedCanTab &&
                              d('setElementCanTab').setElementCanTab(g, !0);
                            n(g, c, e);
                            return;
                          }
                        }
                      }
                    l = d('FocusManager').getFirstNodeFromOneOrManyQueries(
                      w,
                      a,
                    );
                    l &&
                      (b.detachedCanTab &&
                        d('setElementCanTab').setElementCanTab(l, !0),
                      n(l, c, e));
                  }
                }
              },
              onFocusWithin: function (a) {
                d('ReactEventHookPropagation').stopEventHookPropagation(
                  a,
                  'useFocusWithin',
                ),
                  (C.lastFocused = a.target),
                  D();
              },
            };
          },
          [w, v, D, C],
        ),
      );
      u = i(
        function () {
          var a = x.current,
            b = document.activeElement;
          if (e != null && a !== null && (!b || !a.containsNode(b))) {
            b = C.lastFocused;
            b != null && a.containsNode(b) && !o(b)
              ? d('FocusManager').focusElement(b, {
                  focusWithAutoFocus: !0,
                  focusWithoutUserIntent: !0,
                  preventScroll: !0,
                })
              : d('FocusManager').focusFirst(e, a, {
                  focusWithAutoFocus: !0,
                  focusWithoutUserIntent: !0,
                  preventScroll: !0,
                });
          }
        },
        [e, C],
      );
      c('useLayoutEffect_SAFE_FOR_SSR')(u, [u]);
      k(u, [u]);
      var F = i(
          function (a, c) {
            c === void 0 && (c = !1);
            var e = x.current,
              f = document.activeElement,
              g = A.current;
            A.current = null;
            var h = a == null ? void 0 : a.triggeredFocusRegionItems,
              i = a == null ? void 0 : a.restorationFocusRegionItem;
            (h == null ? void 0 : h.size) &&
              h.forEach(function (a) {
                return (a.restorationFocusRegionItem = i);
              });
            a != null &&
              i != null &&
              (i.triggeredFocusRegionItems['delete'](a),
              (h == null ? void 0 : h.size) &&
                h.forEach(function (a) {
                  i.triggeredFocusRegionItems.add(a);
                }));
            C.lastFocused = null;
            h = z == null ? void 0 : z.getActiveFocusRegion();
            var j =
              h != null ? h.restorationFocusRegionItem : { lastFocused: g };
            h === a && (z == null ? void 0 : z.setActiveFocusRegion(i));
            g =
              (e !== null && f !== null && e.containsNode(f)) ||
              f == null ||
              f === document.body;
            if ((b === !0 || t != null) && g) {
              var k = function (a) {
                a === void 0 && (a = !1);
                if ((j == null ? void 0 : j.lastFocused) != null) {
                  var b = !0,
                    c = !0,
                    e = document.activeElement;
                  (a || e === null || e === document.body) &&
                    d('FocusManager').focusElement(j.lastFocused, {
                      preventScroll: b,
                      focusWithoutUserIntent: c,
                    });
                }
              };
              c
                ? k(c)
                : window.requestAnimationFrame(function () {
                    return k();
                  });
            }
          },
          [z, b, t, C],
        ),
        G = i(
          function () {
            F(C, !0), t && t();
          },
          [F, t, C],
        );
      d('ReactKeyboardEvent.react').useKeyboard(
        x,
        l(
          function () {
            return {
              onKeyDown: function (a) {
                if (g == null || a.key !== 'Tab' || a.isDefaultPrevented())
                  return;
                var b = x.current;
                b !== null &&
                  (a.shiftKey
                    ? d('FocusManager').focusPreviousContained(
                        g,
                        b,
                        a,
                        !0,
                        t != null ? G : void 0,
                      )
                    : d('FocusManager').focusNextContained(
                        g,
                        b,
                        a,
                        !0,
                        t != null ? G : void 0,
                      ));
              },
            };
          },
          [g, G, t],
        ),
      );
      c('useLayoutEffect_SAFE_FOR_SSR')(
        function () {
          A.current = B;
          var a = C;
          return function () {
            F(a);
          };
        },
        [z, b, F, C, B],
      );
      return h.jsx(p, { ref: a, id: s, children: f });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    function b(a, b, c) {
      a = q.get(a);
      if (a) {
        a = a.DO_NOT_USE_queryFirstNode(b);
        if (a !== null) {
          d('FocusManager').focusElement(a, { preventScroll: c });
          return a;
        }
      }
      return null;
    }
    g.FocusRegion = a;
    g.focusRegionById = b;
  },
  98,
);
