__d(
  'CSRBitMap',
  ['BitMap'],
  function (a, b, c, d, e, f, g) {
    var h = new (c('BitMap'))();
    function a(a) {
      h.set(a);
    }
    function b() {
      return h.toCompressedString();
    }
    g.add = a;
    g.toCompressedString = b;
  },
  98,
);
