__d(
  'ServerTime',
  ['ServerTimeData'],
  function (a, b, c, d, e, f, g) {
    var h,
      i = 0;
    f = 0;
    var j = null;
    h = (h = window.performance) == null ? void 0 : h.timing;
    if (h) {
      var k = h.requestStart;
      h = h.domLoading;
      if (k && h) {
        var l =
          c('ServerTimeData').timeOfResponseStart -
          c('ServerTimeData').timeOfRequestStart;
        k = h - k - l;
        f = k / 2;
        l = h - c('ServerTimeData').timeOfResponseStart - f;
        h = Math.max(50, k * 0.8);
        Math.abs(l) > h && ((i = l), (j = Date.now()));
      }
    } else d(c('ServerTimeData').serverTime);
    function a() {
      return Date.now() - i;
    }
    function b() {
      return i;
    }
    function d(a) {
      a = Date.now() - a;
      Math.abs(i - a) > 6e4 && ((i = a), (j = Date.now()));
    }
    function e() {
      return j === null ? null : Date.now() - j;
    }
    f = a;
    k = b;
    g.getMillis = a;
    g.getOffsetMillis = b;
    g.update = d;
    g.getMillisSinceLastUpdate = e;
    g.get = f;
    g.getSkew = k;
  },
  98,
);
