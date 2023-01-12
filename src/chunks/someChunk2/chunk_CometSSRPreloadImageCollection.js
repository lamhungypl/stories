__d(
  'CometSSRPreloadImageCollection',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    var g = new Set(),
      h = new Set();
    function a(a) {
      g.add(a);
    }
    function b() {
      g.clear();
    }
    function c() {
      if (!g || g.size === 0) return '';
      var a = [];
      g == null
        ? void 0
        : g.forEach(function (b) {
            h.has(b) ||
              (a.push('<link rel="preload" as="image" href="' + b + '" />'),
              h.add(b));
          });
      return a.join('\n');
    }
    f.addImage = a;
    f.clearImageCollection = b;
    f.imagesToHTMLLinkString = c;
  },
  66,
);
