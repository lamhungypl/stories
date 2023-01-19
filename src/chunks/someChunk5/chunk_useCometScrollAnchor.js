__d(
  'useCometScrollAnchor',
  [
    'BaseDOMContainer.react',
    'BaseViewportMarginsContext',
    'CometScrollAnchorContext',
    'ExecutionEnvironment',
    'HiddenSubtreePassiveContext',
    'react',
    'recoverableViolation',
    'scrollTo',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    e = d('react');
    d = e.createContext;
    var i = e.useContext,
      j = e.useEffect,
      k = e.useMemo,
      l = e.useRef,
      m = e.useState,
      n = 16,
      o = d(null);
    function a(a, b, d) {
      d = (d = d) != null ? d : {};
      var e = d.verticalAlign,
        f = e === void 0 ? 'top' : e,
        g = babelHelpers.objectWithoutPropertiesLoose(d, ['verticalAlign']),
        h = l(null),
        p = i(c('CometScrollAnchorContext')),
        q = k(
          function () {
            return (
              b !== null &&
              a === (p == null ? void 0 : p.key) &&
              b === (p == null ? void 0 : p.value)
            );
          },
          [a, p == null ? void 0 : p.key, p == null ? void 0 : p.value, b],
        ),
        r = i(c('HiddenSubtreePassiveContext'));
      e = m(!r.getCurrentState().hiddenOrBackgrounded);
      var s = e[0],
        t = e[1],
        u = i(c('BaseViewportMarginsContext')),
        v = l(null),
        w = i(o),
        x = function () {
          var a = h.current;
          if (a != null) {
            var b = document.documentElement;
            if (b == null) {
              c('recoverableViolation')(
                'There is no documentElement accessible on document',
                'comet_ui',
              );
              return;
            }
            b = b.clientHeight;
            a = a.getBoundingClientRect();
            var d = 0;
            switch (f) {
              case 'top':
                d = a.top - n - u.top;
                break;
              case 'center':
                d = a.top - u.top - (b - u.top - u.bottom) / 2 + a.height / 2;
                break;
              case 'bottom':
                d = a.bottom - b + n + u.bottom;
                break;
            }
            a = window.pageYOffset + d;
            b = document.body;
            d = (d = w) != null ? d : b;
            if (
              (p == null ? void 0 : p.disableScrollFixer) !== !0 &&
              b != null &&
              d != null &&
              b.scrollHeight < a + window.innerHeight
            ) {
              var e = (v.current = document.createElement('div'));
              e.className = 'x1n2onr6 x1i1rx1s x8knxv4';
              e.style.marginTop = '-' + (b.scrollHeight - a) + 'px';
              e.style.height = window.innerHeight + 'px';
              d.appendChild(e);
            }
            c('scrollTo')(babelHelpers['extends']({}, g, { top: a }));
          }
        },
        y = l(x);
      j(function () {
        y.current = x;
      });
      j(
        function () {
          if (q)
            if (s) {
              y.current();
              return function () {
                var a = v.current;
                a != null &&
                  a.parentNode != null &&
                  (a.parentNode.removeChild(a), (v.current = null));
              };
            } else {
              var a = r.subscribeToChanges(function (a) {
                a = a.hiddenOrBackgrounded;
                return t(!a);
              });
              return function () {
                return a.remove();
              };
            }
        },
        [r, q, s],
      );
      return h;
    }
    function b(a) {
      a = a.children;
      var b = k(function () {
        return c('ExecutionEnvironment').canUseDOM
          ? document.createElement('div')
          : null;
      }, []);
      return h.jsxs(h.Fragment, {
        children: [
          h.jsx(o.Provider, { value: b, children: a }),
          h.jsx(c('BaseDOMContainer.react'), { node: b }),
        ],
      });
    }
    b.displayName = b.name + ' [from ' + f.id + ']';
    g.useCometScrollAnchor = a;
    g.CometScrollFixerRoot = b;
  },
  98,
);
