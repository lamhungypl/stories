__d(
  'PHPQuerySerializerNoEncoding',
  ['BaseDeserializePHPQueryData', 'flattenPHPQueryData'],
  function (a, b, c, d, e, f, g) {
    'use strict';
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
      return a;
    }
    function b(a) {
      return d('BaseDeserializePHPQueryData').deserialize(a, i);
    }
    function i(a) {
      return a;
    }
    e = {
      decodeComponent: i,
      deserialize: b,
      encodeComponent: h,
      serialize: a,
    };
    f = e;
    g['default'] = f;
  },
  98,
);
