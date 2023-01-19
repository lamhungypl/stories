__d(
  'relay-runtime/handlers/RelayDefaultHandlerProvider',
  [
    'invariant',
    'relay-runtime/handlers/connection/ConnectionHandler',
    'relay-runtime/handlers/connection/MutationHandlers',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function a(a) {
      switch (a) {
        case 'connection':
          return b('relay-runtime/handlers/connection/ConnectionHandler');
        case 'deleteRecord':
          return b('relay-runtime/handlers/connection/MutationHandlers')
            .DeleteRecordHandler;
        case 'deleteEdge':
          return b('relay-runtime/handlers/connection/MutationHandlers')
            .DeleteEdgeHandler;
        case 'appendEdge':
          return b('relay-runtime/handlers/connection/MutationHandlers')
            .AppendEdgeHandler;
        case 'prependEdge':
          return b('relay-runtime/handlers/connection/MutationHandlers')
            .PrependEdgeHandler;
        case 'appendNode':
          return b('relay-runtime/handlers/connection/MutationHandlers')
            .AppendNodeHandler;
        case 'prependNode':
          return b('relay-runtime/handlers/connection/MutationHandlers')
            .PrependNodeHandler;
      }
      g(0, 4515, a);
    }
    e.exports = a;
  },
  null,
);
