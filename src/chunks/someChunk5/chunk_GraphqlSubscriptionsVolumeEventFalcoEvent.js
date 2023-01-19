__d(
  'GraphqlSubscriptionsVolumeEventFalcoEvent',
  ['FalcoLoggerInternal', 'getFalcoLogPolicy_DO_NOT_USE'],
  function (a, b, c, d, e, f) {
    'use strict';
    a = b('getFalcoLogPolicy_DO_NOT_USE')('1802');
    c = b('FalcoLoggerInternal').create(
      'graphql_subscriptions_volume_event',
      a,
    );
    e.exports = c;
  },
  null,
);
