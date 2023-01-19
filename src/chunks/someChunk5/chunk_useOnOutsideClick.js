__d(
  'useOnOutsideClick',
  [
    'HiddenSubtreePassiveContext',
    'pointerEventDistance',
    'react',
    'setTimeout',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    b = d('react');
    var h = b.useContext,
      i = b.useEffect,
      j = b.useRef;
    function a(a, b) {
      var e = j(null),
        f = h(c('HiddenSubtreePassiveContext')),
        g = j(null);
      i(
        function () {
          var h = e.current;
          if (a === null || h == null) return;
          var i = b || {},
            j = i.isTargetEligible;
          i = i.triggerOutsideClickOnDrag;
          var k = i === void 0 ? !1 : i;
          function l(a) {
            return a instanceof Node && !h.contains(a) && (j == null || j(a));
          }
          function m(a) {
            if (a.isPrimary) {
              var b = l(a.target);
              b && (g.current = a);
            }
          }
          function n(b) {
            var c = l(b.target);
            if (g.current != null && c && b.isPrimary) {
              c = d('pointerEventDistance').isWithinThreshold(g.current, b);
              (c || k) && a(b);
            }
            g.current = null;
          }
          function o(b) {
            l(b.target) && a(b);
          }
          var p = 'PointerEvent' in window,
            q = !1;
          function r() {
            q ||
              (p
                ? (document.addEventListener('pointerup', n),
                  document.addEventListener('pointerdown', m))
                : document.addEventListener('click', o)),
              (q = !0);
          }
          function s() {
            q &&
              (p
                ? (document.removeEventListener('pointerup', n),
                  document.removeEventListener('pointerdown', m))
                : document.removeEventListener('click', o)),
              (q = !1);
          }
          i = f.getCurrentState();
          i.hiddenOrBackgrounded || r();
          var t = f.subscribeToChanges(function (a) {
            a.hiddenOrBackgrounded
              ? c('setTimeout')(function () {
                  s();
                }, 0)
              : r();
          });
          return function () {
            t.remove(), s();
          };
        },
        [a, f, b],
      );
      return e;
    }
    g['default'] = a;
  },
  98,
);
