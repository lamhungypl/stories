__d(
  'CometChromeDome',
  ['JSScheduler', 'requireDeferred'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = c('requireDeferred')('Chromedome').__setRef('CometChromeDome');
    function a() {
      h.onReady(function (a) {
        d('JSScheduler').scheduleLoggingPriCallback(function () {
          a.start({});
        });
      });
    }
    g.init = a;
  },
  98,
);
