__d(
  'useCometFeedNoRoutingNavigationEventLogger',
  [
    'CometFeedLoggingExtraFieldsContext',
    'CometFeedNoRoutingNavigationEventsLoggerImpl',
    'CometTrackingCodeContext',
    'CometTrackingNodesContext',
    'emptyFunction',
    'react',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react').useContext;
    function a(a) {
      var b = h(c('CometTrackingNodesContext')),
        d = h(c('CometTrackingCodeContext'));
      d = d.encrypted_tracking[0];
      var e = h(c('CometFeedLoggingExtraFieldsContext'));
      return d == null
        ? c('emptyFunction')
        : c('CometFeedNoRoutingNavigationEventsLoggerImpl')(
            (a = a) != null ? a : b,
            d,
            e,
          );
    }
    g['default'] = a;
  },
  98,
);
