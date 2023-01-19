__d(
  'getRelayAPIRequestHandler',
  ['cr:696703'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function a(a) {
      var c = a;
      if (b('cr:696703')) {
        var d =
          b(
            'cr:696703',
          ).getUserBlockingRunAtCurrentPriCallbackScheduler_DO_NOT_USE();
        c = function () {
          for (var b = arguments.length, c = new Array(b), e = 0; e < b; e++)
            c[e] = arguments[e];
          d(function () {
            return a.apply(void 0, c);
          });
        };
        c.parseStreaming = a.parseStreaming;
      }
      return c;
    }
    g['default'] = a;
  },
  98,
);
