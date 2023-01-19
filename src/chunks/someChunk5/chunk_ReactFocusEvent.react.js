__d(
  'ReactFocusEvent.react',
  [
    'ReactEventHelpers',
    'ReactEventHookPropagation',
    'ReactUseEvent.react',
    'checkPassiveEventsSupported',
    'gkx',
    'react',
    'useLayoutEffect_SAFE_FOR_SSR',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    e = d('react');
    var h = e.useCallback,
      i = e.useEffect,
      j = e.useMemo,
      k = e.useRef,
      l = d('ReactEventHelpers').hasPointerEvents
        ? ['keydown', 'pointermove', 'pointerdown', 'pointerup']
        : [
            'keydown',
            'mousedown',
            'mousemove',
            'mouseup',
            'touchmove',
            'touchstart',
            'touchend',
          ],
      m = { passive: !0 },
      n = !0,
      o = !1;
    function p() {
      l.forEach(function (a) {
        window.addEventListener(
          a,
          s,
          c('checkPassiveEventsSupported') ? { capture: !0, passive: !0 } : !0,
        );
      });
    }
    function q(a) {
      var b = a.metaKey,
        c = a.altKey;
      a = a.ctrlKey;
      return !(b || (!d('ReactEventHelpers').isMac && c) || a);
    }
    function r(a) {
      var b = a.key;
      a = a.target;
      if (b === 'Tab' || b === 'Escape') return !1;
      b = a.isContentEditable;
      a = a.tagName;
      return a === 'INPUT' || a === 'TEXTAREA' || b;
    }
    function s(a) {
      if (a.type === 'keydown') q(a) && (n = !0);
      else {
        a = a.target.nodeName;
        if (a === 'HTML') return;
        n = !1;
      }
    }
    function t(a, b) {
      if (a.type === 'keydown') {
        a = a.nativeEvent;
        q(a) && !r(a) && b(!0);
      } else (n = !1), b(!1);
    }
    function u(a, b, c) {
      a.forEach(function (a) {
        a.setListener(b, function (a) {
          return t(a, c);
        });
      });
    }
    function v() {
      var a = c('ReactUseEvent.react')('mousedown', m),
        b = c('ReactUseEvent.react')(
          d('ReactEventHelpers').hasPointerEvents
            ? 'pointerdown'
            : 'touchstart',
          m,
        ),
        e = c('ReactUseEvent.react')('keydown', m);
      return j(
        function () {
          return [a, b, e];
        },
        [e, a, b],
      );
    }
    function w() {
      i(function () {
        o || ((o = !0), p());
      }, []);
    }
    function a(a, b) {
      var e = b.disabled,
        f = b.onBlur,
        g = b.onFocus,
        h = b.onFocusChange,
        j = b.onFocusVisibleChange,
        l = k({ isFocused: !1, isFocusVisible: !1 }),
        o = c('ReactUseEvent.react')('focusin', m),
        p = c('ReactUseEvent.react')('focusout', m),
        q = v();
      c('useLayoutEffect_SAFE_FOR_SSR')(
        function () {
          var b = a.current,
            i = l.current;
          if (b !== null && b.nodeType === 1) {
            u(q, b, function (a) {
              i.isFocused &&
                i.isFocusVisible !== a &&
                ((i.isFocusVisible = a), j && j(a));
            });
            var k = function (a) {
              i.isFocused &&
                ((i.isFocused = !1),
                f && f(a),
                h && h(!1),
                i.isFocusVisible && j && j(!1),
                (i.isFocusVisible = n));
            };
            o.setListener(b, function (a) {
              if (!c('gkx')('5403') && e === !0) return;
              if (
                d('ReactEventHookPropagation').hasEventHookPropagationStopped(
                  a,
                  'useFocus',
                )
              )
                return;
              d('ReactEventHookPropagation').stopEventHookPropagation(
                a,
                'useFocus',
              );
              !i.isFocused &&
                b === a.target &&
                ((i.isFocused = !0),
                (i.isFocusVisible = n),
                g && g(a),
                h && h(!0),
                i.isFocusVisible && j && j(!0));
            });
            p.setListener(b, function (a) {
              if (!c('gkx')('5403') && e === !0) return;
              if (
                d('ReactEventHookPropagation').hasEventHookPropagationStopped(
                  a,
                  'useFocus',
                )
              )
                return;
              d('ReactEventHookPropagation').stopEventHookPropagation(
                a,
                'useFocus',
              );
              k(a);
            });
          }
        },
        [p, e, o, a, q, f, g, h, j],
      );
      i(function () {
        var b = a.current,
          c = l.current;
        return function () {
          if (a.current === null && c.isFocused) {
            c.isFocused = !1;
            var d = new window.FocusEvent('blur');
            Object.defineProperty(d, 'target', { value: b });
            f && f(d);
            h && h(!1);
            c.isFocusVisible && j && j(!1);
            c.isFocusVisible = n;
          }
        };
      });
      w();
    }
    function b(a, b) {
      var e = b.disabled,
        f = b.onAfterBlurWithin,
        g = b.onBeforeBlurWithin,
        i = b.onBlurWithin,
        j = b.onFocusWithin,
        l = b.onFocusWithinChange,
        o = b.onFocusWithinVisibleChange,
        p = k({ isFocused: !1, isFocusVisible: !1 }),
        q = c('ReactUseEvent.react')('focusin', m),
        r = c('ReactUseEvent.react')('focusout', m),
        s = c('ReactUseEvent.react')('afterblur', m),
        t = c('ReactUseEvent.react')('beforeblur', m),
        x = v();
      b = h(
        function (b) {
          typeof a === 'function' ? a(b) : (a.current = b);
          var h = p.current;
          b !== null &&
            h !== null &&
            (u(x, b, function (a) {
              h.isFocused &&
                h.isFocusVisible !== a &&
                ((h.isFocusVisible = a), o && o(a));
            }),
            q.setListener(b, function (a) {
              if (!c('gkx')('5403') && e === !0) return;
              if (
                d('ReactEventHookPropagation').hasEventHookPropagationStopped(
                  a,
                  'useFocusWithin',
                )
              )
                return;
              h.isFocused ||
                ((h.isFocused = !0),
                (h.isFocusVisible = n),
                l && l(!0),
                h.isFocusVisible && o && o(!0));
              !h.isFocusVisible && n && ((h.isFocusVisible = n), o && o(!0));
              j && j(a);
            }),
            r.setListener(b, function (a) {
              if (!c('gkx')('5403') && e === !0) return;
              var f = a.nativeEvent.relatedTarget;
              if (
                d('ReactEventHookPropagation').hasEventHookPropagationStopped(
                  a,
                  'useFocusWithin',
                )
              )
                return;
              h.isFocused && !d('ReactEventHelpers').isRelatedTargetWithin(b, f)
                ? ((h.isFocused = !1),
                  l && l(!1),
                  h.isFocusVisible && o && o(!1),
                  i && i(a))
                : d('ReactEventHookPropagation').stopEventHookPropagation(
                    a,
                    'useFocusWithin',
                  );
            }),
            t.setListener(b, function (a) {
              if (!c('gkx')('5403') && e === !0) return;
              g &&
                (g(a),
                s.setListener(document, function (a) {
                  f && f(a), s.setListener(document, null);
                }));
            }));
        },
        [s, t, r, e, q, x, a, f, g, i, j, l, o],
      );
      w();
      return b;
    }
    g.useFocus = a;
    g.useFocusWithin = b;
  },
  98,
);
