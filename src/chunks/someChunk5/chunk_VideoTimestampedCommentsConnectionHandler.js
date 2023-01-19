__d(
  'VideoTimestampedCommentsConnectionHandler',
  ['mergeCommentEdgesSortedByTimestampInVideo', 'relay-runtime'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function a(a, b) {
      var e = a.get(b.dataID);
      if (!e) return;
      var f = e.getLinkedRecord(b.fieldKey);
      if (!f) {
        e.setValue(null, b.handleKey);
        return;
      }
      var g = e.getLinkedRecord(b.handleKey);
      if (!g) {
        a = a.create(
          d('relay-runtime').generateClientID(e.getDataID(), b.handleKey),
          f.getType(),
        );
        a.copyFieldsFrom(f);
        e.setLinkedRecord(a, b.handleKey);
        return;
      }
      e = f.getLinkedRecords('edges');
      a = g.getLinkedRecords('edges');
      a == null
        ? (b = e)
        : e == null
        ? (b = a)
        : (b = c('mergeCommentEdgesSortedByTimestampInVideo')(a, e));
      g.setLinkedRecords((f = b) != null ? f : [], 'edges');
    }
    function b(a, b, c) {
      b = d('relay-runtime').getRelayHandleKey(
        'video_timestamped_comments',
        b,
        null,
      );
      return a.getLinkedRecord(b, c);
    }
    function e(a, b) {
      var d = a.getLinkedRecords('edges');
      if (!d) {
        a.setLinkedRecords([b], 'edges');
        return;
      }
      d = c('mergeCommentEdgesSortedByTimestampInVideo')(d, [b]);
      a.setLinkedRecords((b = d) != null ? b : [], 'edges');
      return;
    }
    g.update = a;
    g.getConnection = b;
    g.insertEdge = e;
  },
  98,
);
