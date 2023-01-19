__d(
  'ClientIDs',
  ['randomInt'],
  function (a, b, c, d, e, f, g) {
    var h = new Set();
    function a() {
      var a = Date.now();
      a = a + ':' + (c('randomInt')(0, 4294967295) + 1);
      h.add(a);
      return a;
    }
    function b(a) {
      return h.has(a);
    }
    g.getNewClientID = a;
    g.isExistingClientID = b;
  },
  98,
);
