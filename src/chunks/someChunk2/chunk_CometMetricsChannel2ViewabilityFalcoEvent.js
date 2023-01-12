__d(
  'CometMetricsChannel2ViewabilityFalcoEvent',
  ['FalcoLoggerInternal', 'getFalcoLogPolicy_DO_NOT_USE'],
  function (a, b, c, d, e, f) {
    'use strict';
    a = b('getFalcoLogPolicy_DO_NOT_USE')('1960868');
    c = b('FalcoLoggerInternal').create(
      'comet_metrics_channel2_viewability',
      a,
    );
    e.exports = c;
  },
  null,
);
