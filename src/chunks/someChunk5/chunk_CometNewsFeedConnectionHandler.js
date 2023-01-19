__d(
  'CometNewsFeedConnectionHandler',
  [
    'FBLogger',
    'RelayFBConnectionHandler_UNSTABLE',
    'gkx',
    'relay-runtime',
    'unrecoverableViolation',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = 'comet_news_feed',
      i = '__connection_next_edge_index',
      j = 'received_edges_count';
    function a(a, b) {
      var e,
        f = a.get(b.dataID);
      if (!f) return;
      var g = d('relay-runtime').ConnectionInterface.get();
      g = g.EDGES;
      if (b.args.before != null)
        throw c('unrecoverableViolation')(
          'The newsfeed connection does not support backward pagination by design',
          'comet_feed',
        );
      var h = f.getLinkedRecord(b.fieldKey);
      if (!h) {
        c('FBLogger')('comet_feed').mustfix(
          'Newsfeed connection is null in the store, this means no feed stories will be shown',
        );
        return;
      }
      var m = d('relay-runtime').generateClientID(f.getDataID(), b.handleKey),
        n = f.getLinkedRecord(b.handleKey);
      e = (e = n) != null ? e : a.get(m);
      if (!e) {
        var o = a.create(m, h.getType());
        o.setValue(0, i);
        o.copyFieldsFrom(h);
        m = h.getLinkedRecords(g);
        m &&
          ((m = m.map(function (b) {
            return d('relay-runtime').ConnectionHandler.buildConnectionEdge(
              a,
              o,
              b,
            );
          })),
          o.setLinkedRecords(m, g),
          o.setValue(m.length, j));
        f.setLinkedRecord(o, b.handleKey);
        k(a, m, m, o, h);
        return;
      }
      n == null && f.setLinkedRecord(e, b.handleKey);
      var p = e;
      m = h.getLinkedRecords(g);
      m &&
        ((m = m.map(function (b) {
          return d('relay-runtime').ConnectionHandler.buildConnectionEdge(
            a,
            p,
            b,
          );
        })),
        p.setValue(m.length, j));
      n = p.getLinkedRecords(g);
      p.copyFieldsFrom(h);
      f = [];
      e = new Set();
      if (
        b.args.after != null ||
        ((b = (b = m) == null ? void 0 : b.length) != null ? b : 0) === 0
      ) {
        l((b = n) != null ? b : [], f, e);
      }
      l((n = m) != null ? n : [], f, e);
      p.setLinkedRecords(f, g);
      k(a, m, f, p, h);
    }
    function k(a, b, e, f, g) {
      var h = d('relay-runtime').ConnectionInterface.get(),
        i = h.END_CURSOR,
        j = h.HAS_NEXT_PAGE,
        k = h.HAS_PREV_PAGE,
        l = h.PAGE_INFO;
      h = h.PAGE_INFO_TYPE;
      g = g.getLinkedRecord(l);
      var m = f.getLinkedRecord(l);
      m == null &&
        ((m = a.create(
          d('relay-runtime').generateClientID(f.getDataID(), l),
          h,
        )),
        f.setLinkedRecord(m, l));
      a = g == null ? void 0 : g.getValue(i);
      m.setValue(!1, k);
      if (c('gkx')('1250838')) {
        m.setValue(
          ((h = b == null ? void 0 : b.length) != null ? h : 0) > 0 ||
            (g == null ? void 0 : g.getValue(j)) === !0,
          j,
        );
      } else {
        m.setValue(
          ((f = b == null ? void 0 : b.length) != null ? f : 0) > 0,
          j,
        );
      }
      l = e != null ? e[e.length - 1] : null;
      k = null;
      l != null && (k = l.getValue('cursor'));
      if (k == null && a == null) {
        c('FBLogger')('comet_feed').info(
          "Unable to set end_cursor as neither the server end cursor, or last edge cursor is defined, this can happen on initial load when there are no stories but shouldn't happen otherwise",
          'comet_feed',
        );
        return;
      }
      m.setValue((h = a) != null ? h : k, i);
    }
    function b(a, b, c) {
      b = d('relay-runtime').getRelayHandleKey(h, b, null);
      return a.getLinkedRecord(b, c);
    }
    function e(a, b, c) {
      return d(
        'RelayFBConnectionHandler_UNSTABLE',
      ).unstable_getAllConnectionsWithKey(a, b, c, h);
    }
    function l(a, b, e) {
      var f = d('relay-runtime').ConnectionInterface.get();
      f = f.NODE;
      for (var g = 0; g < a.length; g++) {
        var h = a[g];
        if (!h) continue;
        var i = h.getLinkedRecord(f);
        if (!i) continue;
        i = i && i.getDataID();
        if (i == null) {
          c('FBLogger')('comet_feed').mustfix(
            'Found edge without deduplication nodeID in comet_news_feed, this can lead to duplicate feed stories being rendered',
          );
          b.push(h);
          continue;
        }
        if (e.has(i)) continue;
        e.add(i);
        b.push(h);
      }
    }
    function f(a, b, e, f) {
      if (e == null) return e;
      var g = d('relay-runtime').ConnectionInterface.get();
      g = g.EDGES;
      var h = b.getValue(i);
      if (typeof h !== 'number')
        throw c('unrecoverableViolation')(
          'CometNewsFeedConnectionHandler: Expected edgeIndex to be a number',
          'comet_feed',
        );
      f =
        (f = f) != null
          ? f
          : d('relay-runtime').generateClientID(b.getDataID(), g, h);
      g = a.create(f, e.getType());
      g.copyFieldsFrom(e);
      b.setValue(h + 1, i);
      return g;
    }
    g.update = a;
    g.getConnection = b;
    g.unstable_getAllConnectionsWithKey = e;
    g.buildConnectionEdge = f;
    g.insertEdgeBefore = d('relay-runtime').ConnectionHandler.insertEdgeBefore;
  },
  98,
);
