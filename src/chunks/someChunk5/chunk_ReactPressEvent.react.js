__d(
  'ReactPressEvent.react',
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
      i = b.useRef,
      j = { passive: !0 };
    function k(a, b, c, d, e) {
      var f = {
        altKey: d.altKey,
        buttons: b,
        clientX: d.clientX,
        clientY: d.clientY,
        ctrlKey: d.ctrlKey,
        defaultPrevented: d.defaultPrevented,
        metaKey: d.metaKey,
        pageX: d.pageX,
        pageY: d.pageY,
        pointerType: c,
        screenX: d.screenX,
        screenY: d.screenY,
        shiftKey: d.shiftKey,
        target: e,
        timeStamp: d.timeStamp,
        type: a,
        x: d.clientX,
        y: d.clientY,
        preventDefault: function () {
          (f.defaultPrevented = !0), d.preventDefault();
        },
        stopPropagation: function () {
          d.stopPropagation();
        },
      };
      return f;
    }
    function a(a, b) {
      var e = b.disabled,
        f = b.onPressStart,
        g = b.onPressMove,
        l = b.onPressEnd,
        m = b.onPressChange,
        n = i({
          isPressed: !1,
          isPressActive: !1,
          pointerId: null,
          bounds: null,
          pointerType: '',
          buttons: 0,
          activationEvent: null,
        }),
        o = c('ReactUseEvent.react')('pointerdown'),
        p = c('ReactUseEvent.react')('pointermove', j),
        q = c('ReactUseEvent.react')('pointerup', j),
        r = c('ReactUseEvent.react')('pointercancel', j),
        s = c('ReactUseEvent.react')('mousedown'),
        t = c('ReactUseEvent.react')('mouseup', j),
        u = c('ReactUseEvent.react')('mousemove', j),
        v = c('ReactUseEvent.react')('dragstart', j),
        w = c('ReactUseEvent.react')('focusout', j);
      h(
        function () {
          var b = a.current,
            c = n.current;
          if (b !== null) {
            var h = document,
              i = function (a) {
                if (e === !0) {
                  y(a);
                  return;
                }
                if (
                  d('ReactEventHookPropagation').hasEventHookPropagationStopped(
                    a,
                    'usePress',
                  )
                )
                  return;
                d('ReactEventHookPropagation').stopEventHookPropagation(
                  a,
                  'usePress',
                );
                if (
                  a.buttons === 2 ||
                  a.buttons > 4 ||
                  (d('ReactEventHelpers').isMac &&
                    a.pointerType === 'mouse' &&
                    a.ctrlKey)
                )
                  return;
                c.buttons = a.buttons;
                a.button === 1 && (c.buttons = 4);
                j(a);
              },
              j = function (a) {
                if (!c.isPressed) {
                  var e = a,
                    g = e.pointerId;
                  e = e.pointerType || 'mouse';
                  c.isPressed = !0;
                  c.isPressActive = !0;
                  c.pointerId = g !== void 0 ? g : null;
                  c.pointerType = e;
                  c.activationEvent = a;
                  e !== 'mouse' && (c.bounds = b.getBoundingClientRect());
                  f && f(k('pressstart', c.buttons, e, a, b));
                  m && m(!0);
                  d('ReactEventHelpers').hasPointerEvents
                    ? (q.setListener(h, y),
                      p.setListener(h, z),
                      r.setListener(h, y))
                    : (u.setListener(h, z),
                      t.setListener(h, y),
                      v.setListener(h, y));
                }
              },
              x = function (a) {
                c.isPressed &&
                  ((c.isPressed = !1),
                  l && l(k('pressend', c.buttons, c.pointerType, a, b)),
                  m && m(!1));
              },
              y = function (a) {
                (c.isPressActive = !1),
                  (c.bounds = null),
                  (c.activationEvent = null),
                  x(a),
                  d('ReactEventHelpers').hasPointerEvents
                    ? (q.setListener(h, null),
                      p.setListener(h, null),
                      r.setListener(h, null))
                    : (u.setListener(h, null),
                      t.setListener(h, null),
                      v.setListener(h, null));
              },
              z = function (a) {
                if (e === !0) {
                  y(a);
                  return;
                }
                if (!c.isPressActive) return;
                var d = c.pointerType,
                  f = c.isPressed,
                  h = !1;
                if (d === 'mouse') {
                  var i = a.target;
                  h = b.contains(i);
                } else {
                  i = a;
                  i = i.pointerId;
                  var l = c.bounds;
                  if (i !== c.pointerId || l === null) return;
                  i = a.clientX;
                  var m = a.clientY,
                    n = l.top,
                    o = l.left,
                    p = l.right;
                  l = l.bottom;
                  i >= o && i <= p && m >= n && m <= l && (h = !0);
                }
                h
                  ? f
                    ? g && g(k('pressmove', c.buttons, d, a, b))
                    : j(a)
                  : f && x(a);
              };
            d('ReactEventHelpers').hasPointerEvents
              ? o.setListener(b, i)
              : s.setListener(b, i);
            w.setListener(b, function (a) {
              var d = c.activationEvent;
              a.target === b && d !== null && y(d);
            });
            c.isPressActive &&
              (d('ReactEventHelpers').hasPointerEvents
                ? (q.setListener(h, y),
                  p.setListener(h, z),
                  r.setListener(h, y))
                : (u.setListener(h, z),
                  t.setListener(h, y),
                  v.setListener(h, y)));
            return function () {
              var b = c.activationEvent;
              a.current === null && b !== null && y(b);
            };
          }
        },
        [e, v, w, s, u, t, m, l, g, f, r, o, p, q, a],
      );
    }
    g.usePress = a;
  },
  98,
);
