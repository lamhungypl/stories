__d(
  'useStoryClickEventLogger',
  [
    'CometFeedClickEventsLoggerContext',
    'CometFeedLoggingExtraFieldsContext',
    'CometTrackingCodeContext',
    'CometTrackingNodesContext',
    'DataUrlUtils',
    'MailLinkUtils',
    'getAbsoluteUrl',
    'react',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    b = d('react');
    var h = b.useCallback,
      i = b.useContext;
    function a() {
      var a = i(c('CometFeedClickEventsLoggerContext')),
        b = i(c('CometTrackingNodesContext')),
        e = i(c('CometTrackingCodeContext')),
        f = e.encrypted_tracking[0],
        g = i(c('CometFeedLoggingExtraFieldsContext'));
      return h(
        function (e, h, i, j) {
          var k = i;
          !d('MailLinkUtils').isMailToLink(i) &&
            !d('DataUrlUtils').isDataUrl(i) &&
            (k = c('getAbsoluteUrl')(i));
          a(e, b, f, h, k, g, j);
        },
        [a, b, f, g],
      );
    }
    g['default'] = a;
  },
  98,
);
