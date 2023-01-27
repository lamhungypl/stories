__d(
  'PHPStrictQuerySerializer',
  ['PHPQuerySerializer', 'flattenPHPQueryData'],
  function (a, b, c, d, e, f, g) {
    function a(a) {
      var b = [];
      a = c('flattenPHPQueryData')(a);
      for (var d in a)
        if (Object.prototype.hasOwnProperty.call(a, d)) {
          var e = h(d);
          a[d] === void 0 ? b.push(e) : b.push(e + '=' + h(String(a[d])));
        }
      return b.join('&');
    }
    function h(a) {
      return encodeURIComponent(a);
    }
    g.serialize = a;
    g.encodeComponent = h;
    g.deserialize = d('PHPQuerySerializer').deserialize;
    g.decodeComponent = d('PHPQuerySerializer').decodeComponent;
  },
  98,
);
