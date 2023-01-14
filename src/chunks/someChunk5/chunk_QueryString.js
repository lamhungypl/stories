__d(
  'QueryString',
  [],
  function (a, b, c, d, e, f) {
    function g(a) {
      var b = [];
      Object.keys(a)
        .sort()
        .forEach(function (c) {
          var d = a[c];
          if (d === void 0) return;
          if (d === null) {
            b.push(c);
            return;
          }
          b.push(encodeURIComponent(c) + '=' + encodeURIComponent(String(d)));
        });
      return b.join('&');
    }
    function a(a, b) {
      b === void 0 && (b = !1);
      var c = {};
      if (a === '') return c;
      a = a.split('&');
      for (var d = 0; d < a.length; d++) {
        var e = a[d].split('=', 2),
          f = decodeURIComponent(e[0]);
        if (b && Object.prototype.hasOwnProperty.call(c, f))
          throw new URIError('Duplicate key: ' + f);
        c[f] = e.length === 2 ? decodeURIComponent(e[1]) : null;
      }
      return c;
    }
    function b(a, b) {
      return (
        a +
        (a.indexOf('?') !== -1 ? '&' : '?') +
        (typeof b === 'string' ? b : g(b))
      );
    }
    c = { encode: g, decode: a, appendToUrl: b };
    f['default'] = c;
  },
  66,
);
