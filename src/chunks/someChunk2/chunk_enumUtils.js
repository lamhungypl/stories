__d(
  'enumUtils',
  ['nullthrows'],
  function (a, b, c, d, e, f, g) {
    function h(a, b) {
      return Object.values(b).find(function (b) {
        return b === a;
      });
    }
    function a(a, b) {
      return a == null ? null : h(a, b);
    }
    function i(a, b) {
      if (a != null) {
        b = Object.keys(b);
        for (var c = 0; c < b.length; c++) {
          var d = b[c];
          if (d === a) return d;
        }
      }
      return null;
    }
    function j(a, b) {
      return c('nullthrows')(h(a, b));
    }
    function b(a, b) {
      return c('nullthrows')(i(a, b));
    }
    function d(a, b) {
      var c = [];
      for (
        var a = a,
          d = Array.isArray(a),
          e = 0,
          a = d
            ? a
            : a[
                typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'
              ]();
        ;

      ) {
        var f;
        if (d) {
          if (e >= a.length) break;
          f = a[e++];
        } else {
          e = a.next();
          if (e.done) break;
          f = e.value;
        }
        f = f;
        c.push(j(f, b));
      }
      return c;
    }
    function k(a, b) {
      return (b = b[a]) != null ? b : null;
    }
    function l(a, b) {
      return c('nullthrows')(k(a, b));
    }
    function e(a, b) {
      var c = [];
      for (
        var a = a,
          d = Array.isArray(a),
          e = 0,
          a = d
            ? a
            : a[
                typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'
              ]();
        ;

      ) {
        var f;
        if (d) {
          if (e >= a.length) break;
          f = a[e++];
        } else {
          e = a.next();
          if (e.done) break;
          f = e.value;
        }
        f = f;
        c.push(l(f, b));
      }
      return c;
    }
    function m(a, b) {
      var c;
      Object.keys(b).forEach(function (d) {
        b[d] === a && (c = d);
      });
      return c;
    }
    function f(a, b) {
      return c('nullthrows')(m(a, b));
    }
    g.coerce = h;
    g.coerceNullable = a;
    g.coerceKey = i;
    g.assert = j;
    g.assertKey = b;
    g.assertIterable = d;
    g.coerceFromKey = k;
    g.assertFromKey = l;
    g.assertIterableFromKey = e;
    g.enumValueToKey = m;
    g.enumValueToKeyEnforcing = f;
  },
  98,
);
