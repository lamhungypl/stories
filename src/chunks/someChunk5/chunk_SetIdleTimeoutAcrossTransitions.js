__d(
  'SetIdleTimeoutAcrossTransitions',
  [
    'NavigationMetrics',
    'cancelIdleCallback',
    'clearTimeout',
    'nullthrows',
    'requestIdleCallbackAcrossTransitions',
    'setTimeoutAcrossTransitions',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = !1,
      i = new Map();
    function b(a, b) {
      if (h) {
        var d = c('setTimeoutAcrossTransitions')(function () {
          var b = c('requestIdleCallbackAcrossTransitions')(function () {
            a(), i['delete'](b);
          });
          i.set(d, b);
        }, b);
        return d;
      } else return c('setTimeoutAcrossTransitions')(a, b);
    }
    function d(a) {
      c('clearTimeout')(a),
        i.has(a) &&
          (c('cancelIdleCallback')(c('nullthrows')(i.get(a))), i['delete'](a));
    }
    c('NavigationMetrics').addRetroactiveListener(
      c('NavigationMetrics').Events.EVENT_OCCURRED,
      function (b, c) {
        c.event === 'all_pagelets_loaded' && (h = !!a.requestIdleCallback);
      },
    );
    g.start = b;
    g.clear = d;
  },
  98,
);
