__d(
  'relay-runtime/util/StringInterner',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    var g = new Map(),
      h = 1,
      i = a(),
      j = '\t',
      k = '\v';
    function a() {
      var a = new Set();
      for (var b = 0; b < 10; ++b) a.add(b.toString());
      return a;
    }
    function l(a) {
      return (a[0] === j && i.has(a[1])) || a[0] === k ? k + a : a;
    }
    function b(a, b) {
      if (b == null || a.length < b) return l(a);
      b = g.get(a);
      if (b != null) return b;
      b = j + h++;
      g.set(a, b);
      return b;
    }
    e.exports = { intern: b };
  },
  null,
);
