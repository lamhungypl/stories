__d(
  'useResizeObserver',
  [
    'FBLogger',
    'ReactDOMComet',
    'gkx',
    'react',
    'resize-observer-polyfill',
    'uniqueID',
    'useLayoutEffect_SAFE_FOR_SSR',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    b = d('react');
    var h = b.useCallback,
      i = b.useRef;
    function a(a) {
      var b = i(null),
        d = i(a);
      c('useLayoutEffect_SAFE_FOR_SSR')(
        function () {
          d.current = a;
        },
        [a],
      );
      return h(function (c) {
        var a = function (a, b, c) {
          d.current && d.current(a, b, c);
        };
        c = c == null ? null : n(c, a);
        b.current && b.current();
        b.current = c;
      }, []);
    }
    var j = null,
      k = new Map();
    function l() {
      j == null && (j = new (c('resize-observer-polyfill'))(m));
      return j;
    }
    function m(a) {
      var b = new Map(),
        e = new Map(
          a.map(function (a) {
            var d = a.contentRect;
            if (c('gkx')('1470120')) {
              var e = b.get(a.target);
              if (e == null) {
                var f = v(a.target);
                b.set(a.target, f);
                d = f;
              } else d = e;
            }
            return [a.target, d];
          }),
        ),
        f = new Set(k.keys());
      d('ReactDOMComet').unstable_batchedUpdates(function () {
        for (
          var a = e,
            b = Array.isArray(a),
            d = 0,
            a = b
              ? a
              : a[
                  typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'
                ]();
          ;

        ) {
          var g;
          if (b) {
            if (d >= a.length) break;
            g = a[d++];
          } else {
            d = a.next();
            if (d.done) break;
            g = d.value;
          }
          g = g;
          var h = g[0];
          g = g[1];
          var i = k.get(h);
          if (i != null)
            for (
              var i = i,
                j = Array.isArray(i),
                l = 0,
                i = j
                  ? i
                  : i[
                      typeof Symbol === 'function'
                        ? Symbol.iterator
                        : '@@iterator'
                    ]();
              ;

            ) {
              var m;
              if (j) {
                if (l >= i.length) break;
                m = i[l++];
              } else {
                l = i.next();
                if (l.done) break;
                m = l.value;
              }
              m = m;
              m = m[1];
              try {
                m(g, h, e);
              } catch (a) {
                c('FBLogger')('useResizeObserver').catching(a);
              }
            }
          else
            f.has(h) ||
              c('FBLogger')('useResizeObserver').mustfix(
                'ResizeObserver observed resizing of an element that it should not be observing',
              );
        }
      });
    }
    function n(a, b) {
      var d,
        e = c('uniqueID')();
      d = (d = k.get(a)) != null ? d : new Map();
      d.set(e, b);
      k.set(a, d);
      l().observe(a);
      return o(a, e);
    }
    function o(a, b) {
      return function () {
        var c = k.get(a);
        if (c == null) return;
        c['delete'](b);
        c.size === 0 && (l().unobserve(a), k['delete'](a));
      };
    }
    function p(a) {
      return parseFloat(a) || 0;
    }
    function q(a) {
      return (a =
        a == null
          ? void 0
          : (a = a.ownerDocument) == null
          ? void 0
          : a.defaultView) != null
        ? a
        : window;
    }
    function r(a, b, c, d) {
      return { x: a, y: b, width: c, height: d };
    }
    var s = r(0, 0, 0, 0);
    function t(a) {
      var b = ['top', 'right', 'bottom', 'left'],
        c = {};
      for (var d = 0; d < b.length; d++) {
        var e = b[d],
          f = a['padding-' + e];
        c[e] = p(f);
      }
      return c;
    }
    function u(a) {
      for (
        var b = arguments.length, c = new Array(b > 1 ? b - 1 : 0), d = 1;
        d < b;
        d++
      )
        c[d - 1] = arguments[d];
      return c.reduce(function (b, c) {
        c = a['border-' + c + '-width'];
        return b + p(c);
      }, 0);
    }
    function v(a) {
      var b = a.clientWidth,
        c = a.clientHeight;
      if (!b && !c) return s;
      a = q(a).getComputedStyle(a);
      var d = t(a),
        e = d.left + d.right,
        f = d.top + d.bottom,
        g = p(a.width),
        h = p(a.height);
      a.boxSizing === 'border-box' &&
        (Math.round(g + e) !== b && (g -= u(a, 'left', 'right') + e),
        Math.round(h + f) !== c && (h -= u(a, 'top', 'bottom') + f));
      return r(d.left, d.top, g, h);
    }
    f.exports = a;
  },
  34,
);
