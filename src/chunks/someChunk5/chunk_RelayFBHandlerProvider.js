__d(
  'RelayFBHandlerProvider',
  [
    'BizKitNotificationsThinClientConnectionHandler',
    'UFI2CommentsConnectionHandler',
    'relay-runtime',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function a(a) {
      switch (a) {
        case 'connection':
          return d('relay-runtime').ConnectionHandler;
        case 'ufi2_comments':
          return d('UFI2CommentsConnectionHandler');
        case 'bizkit_notifications_thin_client':
          return d('BizKitNotificationsThinClientConnectionHandler');
        case 'deleteRecord':
          return d('relay-runtime').MutationHandlers.DeleteRecordHandler;
        case 'deleteEdge':
          return d('relay-runtime').MutationHandlers.DeleteEdgeHandler;
        case 'appendEdge':
          return d('relay-runtime').MutationHandlers.AppendEdgeHandler;
        case 'prependEdge':
          return d('relay-runtime').MutationHandlers.PrependEdgeHandler;
        case 'appendNode':
          return d('relay-runtime').MutationHandlers.AppendNodeHandler;
        case 'prependNode':
          return d('relay-runtime').MutationHandlers.PrependNodeHandler;
      }
      throw new Error(
        'RelayFBHandlerProvider: No handler defined for `' + a + '`.',
      );
    }
    g['default'] = a;
  },
  98,
);
