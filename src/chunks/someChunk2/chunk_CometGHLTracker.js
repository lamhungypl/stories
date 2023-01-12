__d(
  'CometGHLTracker',
  ['DebugOwl', 'GHLBox'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = new Set();
    function a(a) {
      c('DebugOwl').swoop(a),
        h.add(a),
        h.size > d('GHLBox').MinimumHiddenAdsToUpdateLocalStorage &&
          d('GHLBox').s(Date.now());
    }
    function b(a) {
      return h.has(a);
    }
    function e(a) {
      return h['delete'](a);
    }
    function f() {
      return h.size > 0;
    }
    g.m = a;
    g.c = b;
    g.d = e;
    g.b = f;
  },
  98,
);
