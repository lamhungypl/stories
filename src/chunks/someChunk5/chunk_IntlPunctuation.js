__d(
  'IntlPunctuation',
  ['FbtHooks', 'IntlPhonologicalRewrites', 'IntlRedundantStops'],
  function (a, b, c, d, e, f, g) {
    d = '[.!?\u3002\uff01\uff1f\u0964\u2026\u0eaf\u1801\u0e2f\uff0e]';
    var h = {};
    function i(a) {
      var b;
      b = (b = a) != null ? b : '';
      var c = h[b];
      c == null && (c = h[b] = j(a));
      return c;
    }
    function j(a) {
      var b = [];
      a = c('IntlPhonologicalRewrites').get(a);
      for (var d in a.patterns) {
        var e = a.patterns[d];
        for (var f in a.meta) {
          var g = new RegExp(f.slice(1, -1), 'g'),
            h = a.meta[f];
          d = d.replace(g, h);
          e = e.replace(g, h);
        }
        e === 'javascript' &&
          (e = function (a) {
            return a.slice(1).toLowerCase();
          });
        b.push([new RegExp(d.slice(1, -1), 'g'), e]);
      }
      return b;
    }
    function a(a) {
      var b = i(c('FbtHooks').getViewerContext().locale);
      a = a;
      for (var d = 0; d < b.length; d++) {
        var e = b[d],
          f = e[0];
        e = e[1];
        a = a.replace(f, e);
      }
      return a.replace(/\x01/g, '');
    }
    var k = new Map();
    for (e in c('IntlRedundantStops').equivalencies)
      for (
        var f = [e].concat(c('IntlRedundantStops').equivalencies[e]),
          l = Array.isArray(f),
          m = 0,
          f = l
            ? f
            : f[
                typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'
              ]();
        ;

      ) {
        var n;
        if (l) {
          if (m >= f.length) break;
          n = f[m++];
        } else {
          m = f.next();
          if (m.done) break;
          n = m.value;
        }
        n = n;
        k.set(n, e);
      }
    var o = new Map();
    for (n in c('IntlRedundantStops').redundancies)
      o.set(n, new Set(c('IntlRedundantStops').redundancies[n]));
    function p(a, b) {
      a = k.get(a);
      b = k.get(b);
      return ((a = o.get(a)) == null ? void 0 : a.has(b)) === !0;
    }
    function b(a, b) {
      return p(a[a.length - 1], b) ? '' : b;
    }
    g.PUNCT_CHAR_CLASS = d;
    g.applyPhonologicalRules = a;
    g.dedupeStops = b;
  },
  98,
);
