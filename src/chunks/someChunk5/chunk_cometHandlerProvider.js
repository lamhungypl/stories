__d(
  'cometHandlerProvider',
  [
    'BizKitNotificationsThinClientConnectionHandler',
    'CometNewsFeedConnectionHandler',
    'CometNotificationsThinClientConnectionHandler',
    'PinnedCommentEventsConnectionHandler',
    'UFI2CommentsConnectionHandler',
    'VideoTimestampedCommentsConnectionHandler',
    'relay-runtime',
    'unrecoverableViolation',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function a(a) {
      switch (a) {
        case 'connection':
          return d('relay-runtime').ConnectionHandler;
        case 'video_timestamped_comments':
          return d('VideoTimestampedCommentsConnectionHandler');
        case 'pinned_comment_events':
          return d('PinnedCommentEventsConnectionHandler');
        case 'ufi2_comments':
          return d('UFI2CommentsConnectionHandler');
        case 'comet_news_feed':
          return d('CometNewsFeedConnectionHandler');
        case 'comet_notifications_thin_client':
          return d('CometNotificationsThinClientConnectionHandler');
        case 'bizkit_notifications_thin_client':
          return d('BizKitNotificationsThinClientConnectionHandler');
        case 'deleteRecord':
          return d('relay-runtime').MutationHandlers.DeleteRecordHandler;
        case 'appendEdge':
          return d('relay-runtime').MutationHandlers.AppendEdgeHandler;
        case 'prependEdge':
          return d('relay-runtime').MutationHandlers.PrependEdgeHandler;
        case 'deleteEdge':
          return d('relay-runtime').MutationHandlers.DeleteEdgeHandler;
        case 'appendNode':
          return d('relay-runtime').MutationHandlers.AppendNodeHandler;
        case 'prependNode':
          return d('relay-runtime').MutationHandlers.PrependNodeHandler;
      }
      throw c('unrecoverableViolation')(
        'RelayCometEnvironment: No handler defined for `' + a + '`.',
        'comet_ui',
      );
    }
    g['default'] = a;
  },
  98,
);
