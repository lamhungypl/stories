__d(
  'ReactHoverEvent.react',
  [
    'ReactEventHelpers',
    'ReactEventHookPropagation',
    'ReactUseEvent.react',
    'react',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    b = d('react');
    var h = b.useEffect,
      i = b.useRef;
    function j(a, b, c) {
      return {
        clientX: b.clientX,
        clientY: b.clientY,
        pageX: b.pageX,
        pageY: b.pageY,
        screenX: b.screenX,
        screenY: b.screenY,
        target: c,
        timeStamp: b.timeStamp,
        type: a,
        x: b.clientX,
        y: b.clientY,
      };
    }
    var k = { passive: !0 };
    function l(a, b) {
      b = b;
      while (b != null) {
        if (b === a) return !0;
        if (b._hoverEventTarget) return !1;
        b = b.parentNode;
      }
      return !1;
    }
    function a(a, b) {
      var e = b.disabled,
        f = b.onHoverStart,
        g = b.onHoverMove,
        m = b.onHoverEnd,
        n = b.onHoverChange,
        o = c('ReactUseEvent.react')('touchstart', k),
        p = c('ReactUseEvent.react')('mouseover', k),
        q = c('ReactUseEvent.react')('mouseout', k),
        r = c('ReactUseEvent.react')('mousemove', k),
        s = c('ReactUseEvent.react')('pointerover', k),
        t = c('ReactUseEvent.react')('pointerout', k),
        u = c('ReactUseEvent.react')('pointermove', k),
        v = c('ReactUseEvent.react')('pointercancel', k),
        w = i({ isHovered: !1, isTouched: !1 });
      h(
        function () {
          var b = a.current,
            c = w.current;
          if (b !== null && c !== null) {
            b._hoverEventTarget = !0;
            var h = document,
              i = function (a) {
                if (e === !0) {
                  y(a);
                  return;
                }
                if (
                  d('ReactEventHookPropagation').hasEventHookPropagationStopped(
                    a,
                    'useHover',
                  )
                )
                  return;
                d('ReactEventHookPropagation').stopEventHookPropagation(
                  a,
                  'useHover',
                );
                !c.isHovered &&
                  !l(b, a.relatedTarget) &&
                  ((c.isHovered = !0),
                  f && f(j('hoverstart', a, b)),
                  n && n(!0),
                  d('ReactEventHelpers').hasPointerEvents
                    ? (u.setListener(h, x),
                      v.setListener(h, y),
                      t.setListener(h, k))
                    : q.setListener(h, k));
              },
              k = function (a) {
                c.isHovered &&
                  !l(b, a.relatedTarget) &&
                  ((c.isHovered = !1),
                  m && m(j('hoverend', a, b)),
                  n && n(!1),
                  y(a));
              },
              x = function (a) {
                c.isTouched = !1;
                if (e === !0) {
                  y(a);
                  return;
                }
                c.isHovered && g && g(j('hovermove', a, b));
              },
              y = function (a) {
                (c.isTouched = !1),
                  d('ReactEventHelpers').hasPointerEvents
                    ? (u.setListener(h, null),
                      v.setListener(h, null),
                      t.setListener(h, null))
                    : q.setListener(h, null),
                  k(a);
              };
            d('ReactEventHelpers').hasPointerEvents
              ? s.setListener(b, function (a) {
                  a.pointerType !== 'touch' && i(a);
                })
              : (p.setListener(b, function (a) {
                  c.isTouched || i(a);
                }),
                o.setListener(b, function () {
                  c.isTouched = !0;
                }),
                r.setListener(h, x));
            c.isHovered &&
              (d('ReactEventHelpers').hasPointerEvents
                ? (u.setListener(h, x),
                  v.setListener(h, y),
                  t.setListener(h, k))
                : q.setListener(h, k));
          }
        },
        [e, n, m, g, f, v, u, t, s, r, q, p, a, o],
      );
    }
    g.useHover = a;
  },
  98,
);
