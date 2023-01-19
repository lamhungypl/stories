__d(
  'stylex-runtime',
  ['stylex-inject'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    e = !0;
    var h = e ? new WeakMap() : null;
    function a() {
      var a = [],
        b = '',
        c = h;
      for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++)
        e[f] = arguments[f];
      while (e.length) {
        var g = e.pop();
        if (Array.isArray(g)) {
          for (var i = 0; i < g.length; i++) e.push(g[i]);
          continue;
        }
        var j = g;
        if (j != null && typeof j === 'object') {
          var k = '';
          if (c != null && c.has(j)) {
            var l = c.get(j);
            l != null &&
              ((k = l.classNameChunk),
              a.push.apply(a, l.definedPropertiesChunk),
              (c = l.next));
          } else {
            var m = [];
            for (var n in j) {
              var o = j[n];
              typeof o === 'string' &&
                (a.includes(n) ||
                  (a.push(n), m.push(n), (k += k ? ' ' + o : o)));
            }
            if (c != null) {
              var p = new WeakMap();
              c.set(j, {
                classNameChunk: k,
                definedPropertiesChunk: m,
                next: p,
              });
              c = p;
            }
          }
          k && (b = b ? k + ' ' + b : k);
        }
      }
      return b;
    }
    function b(a) {
      throw new Error(
        'stylex.create should never be called. It should be compiled away.',
      );
    }
    function d(a) {
      throw new Error(
        'stylex.extends should never be called. It should be compiled away.',
      );
    }
    a.create = b;
    a.include = d;
    a.keyframes = function (a) {
      throw new Error('stylex.keyframes should never be called');
    };
    a.firstThatWorks = function () {
      throw new Error('stylex.firstThatWorks should never be called.');
    };
    a.inject = c('stylex-inject');
    a.UNSUPPORTED_PROPERTY = function (a) {
      throw new Error(
        'stylex.UNSUPPORTED_PROPERTY should never be called. It should be compiled away.',
      );
    };
    f = a;
    g['default'] = f;
  },
  98,
);
