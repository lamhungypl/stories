__d(
  'PHPQuerySerializer',
  ['BaseDeserializePHPQueryData', 'flattenPHPQueryData'],
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
      return encodeURIComponent(a).replace(/%5D/g, ']').replace(/%5B/g, '[');
    }
    function b(a) {
      return d('BaseDeserializePHPQueryData').deserialize(a, i);
    }
    function i(a) {
      try {
        return decodeURIComponent(a.replace(/\+/g, ' '));
      } catch (b) {
        return a;
      }
    }
    e = {
      decodeComponent: i,
      deserialize: b,
      encodeComponent: h,
      serialize: a,
    };
    f.exports = e;
  },
  34,
);
