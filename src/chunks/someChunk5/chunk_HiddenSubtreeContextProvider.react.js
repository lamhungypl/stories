__d(
  'HiddenSubtreeContextProvider.react',
  [
    'HiddenSubtreeContext',
    'HiddenSubtreePassiveContext',
    'react',
    'removeFromArray',
    'useLayoutEffect_SAFE_FOR_SSR',
    'useUnsafeRef_DEPRECATED',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    b = d('react');
    var i = b.useCallback,
      j = b.useContext,
      k = b.useEffect,
      l = b.useMemo,
      m = b.useRef;
    function n(a, b) {
      return a.backgrounded === b.backgrounded && a.hidden === b.hidden;
    }
    function o(a, b) {
      var c = a.backgrounded || b.backgrounded;
      a = a.hidden || b.hidden;
      return {
        backgrounded: c,
        hidden: a,
        hiddenOrBackgrounded: c || a,
        hiddenOrBackgrounded_FIXME: c || a,
      };
    }
    function a(a) {
      var b = a.children,
        d = a.ignoreParent,
        e = a.isBackgrounded,
        f = e === void 0 ? !1 : e,
        g = a.isHidden;
      e = j(c('HiddenSubtreeContext'));
      var p = j(c('HiddenSubtreePassiveContext')),
        q = l(
          function () {
            return {
              backgrounded: f,
              hidden: g,
              hiddenOrBackgrounded: f || g,
              hiddenOrBackgrounded_FIXME: f || g,
            };
          },
          [f, g],
        ),
        r = c('useUnsafeRef_DEPRECATED')(q),
        s = m(null),
        t = m([]),
        u = i(
          function () {
            var a = d === !0 ? r.current : o(r.current, p.getCurrentState());
            if (s.current == null || !n(a, s.current)) {
              s.current = a;
              var b = Array.from(t.current);
              b.forEach(function (b) {
                b(a);
              });
            }
          },
          [d, p],
        );
      c('useLayoutEffect_SAFE_FOR_SSR')(
        function () {
          (r.current = q), u();
        },
        [q, u],
      );
      k(
        function () {
          if (d !== !0) {
            var a = p.subscribeToChanges(u);
            return function () {
              return a.remove();
            };
          }
        },
        [d, u, p],
      );
      a = l(
        function () {
          return {
            getCurrentState: function () {
              return d === !0 ? r.current : o(r.current, p.getCurrentState());
            },
            subscribeToChanges: function (a) {
              var b = t.current;
              b.push(a);
              return {
                remove: function () {
                  c('removeFromArray')(b, a);
                },
              };
            },
          };
        },
        [p, d],
      );
      var v = d === !0 ? q : o(q, e);
      e = l(
        function () {
          return {
            backgrounded: v.backgrounded,
            hidden: v.hidden,
            hiddenOrBackgrounded: v.backgrounded || v.hidden,
            hiddenOrBackgrounded_FIXME: v.backgrounded || v.hidden,
          };
        },
        [v.backgrounded, v.hidden],
      );
      return h.jsx(c('HiddenSubtreeContext').Provider, {
        value: e,
        children: h.jsx(c('HiddenSubtreePassiveContext').Provider, {
          value: a,
          children: b,
        }),
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
