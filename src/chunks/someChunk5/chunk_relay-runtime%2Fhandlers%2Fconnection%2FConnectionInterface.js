__d(
  'relay-runtime/handlers/connection/ConnectionInterface',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    var g = {
        after: !0,
        before: !0,
        find: !0,
        first: !0,
        last: !0,
        surrounds: !0,
      },
      h = {
        CURSOR: 'cursor',
        EDGES: 'edges',
        END_CURSOR: 'endCursor',
        HAS_NEXT_PAGE: 'hasNextPage',
        HAS_PREV_PAGE: 'hasPreviousPage',
        NODE: 'node',
        PAGE_INFO_TYPE: 'PageInfo',
        PAGE_INFO: 'pageInfo',
        START_CURSOR: 'startCursor',
      };
    a = {
      inject: function (a) {
        h = a;
      },
      get: function () {
        return h;
      },
      isConnectionCall: function (a) {
        return Object.prototype.hasOwnProperty.call(g, a.name);
      },
    };
    e.exports = a;
  },
  null,
);
