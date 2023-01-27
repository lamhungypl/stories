__d(
  'bootstrapWebSession',
  ['WebSession', 'WebSessionDefaultTimeoutMs', 'performanceNavigationStart'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function h(a) {
      a = c('performanceNavigationStart')() || a;
      return Number.isInteger(a) ? a : null;
    }
    var i = !1;
    function a(a) {
      if (i === !0) return;
      i = !0;
      a = h(a);
      a != null &&
        a > 0 &&
        d('WebSession').extend(a + c('WebSessionDefaultTimeoutMs'));
    }
    g['default'] = a;
  },
  98,
);
