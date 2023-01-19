__d(
  'UFI2CommentsConnectionHandler',
  [
    'ODS',
    'RelayFBConnectionHandler_UNSTABLE',
    'gkx',
    'relay-runtime',
    'warning',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = 'ufi2_comments',
      i = '__connection_next_edge_index',
      j = 'ufi2_connection_generation';
    function a(a, b) {
      var e,
        f = a.get(b.dataID);
      if (!f) return;
      var g = d('relay-runtime').ConnectionInterface.get(),
        h = g.EDGES,
        l = g.END_CURSOR,
        m = g.HAS_NEXT_PAGE,
        n = g.HAS_PREV_PAGE,
        o = g.PAGE_INFO,
        p = g.PAGE_INFO_TYPE;
      g = g.START_CURSOR;
      var q = f.getLinkedRecord(b.fieldKey),
        r = q && q.getLinkedRecord(o);
      if (!q) {
        f.setValue(null, b.handleKey);
        return;
      }
      var s = d('relay-runtime').generateClientID(f.getDataID(), b.handleKey),
        t = f.getLinkedRecord(b.handleKey);
      e = (e = t) != null ? e : a.get(s);
      var u = e && e.getLinkedRecord(o);
      if (!e) {
        var v = a.create(s, q.getType());
        v.setValue(0, j);
        v.setValue(0, i);
        v.copyFieldsFrom(q);
        s = q.getLinkedRecords(h);
        s &&
          ((s = s.map(function (b) {
            return d('relay-runtime').ConnectionHandler.buildConnectionEdge(
              a,
              v,
              b,
            );
          })),
          v.setLinkedRecords(s, h));
        f.setLinkedRecord(v, b.handleKey);
        u = a.create(d('relay-runtime').generateClientID(v.getDataID(), o), p);
        u.setValue(!1, m);
        u.setValue(!1, n);
        u.setValue(null, l);
        u.setValue(null, g);
        r && u.copyFieldsFrom(r);
        v.setLinkedRecord(u, o);
      } else {
        t == null && f.setLinkedRecord(e, b.handleKey);
        var w = e;
        s = q.getLinkedRecords(h);
        s &&
          (s = s.map(function (b) {
            return d('relay-runtime').ConnectionHandler.buildConnectionEdge(
              a,
              w,
              b,
            );
          }));
        p = w.getLinkedRecords(h);
        t = w.getLinkedRecord(o);
        w.copyFieldsFrom(q);
        p && w.setLinkedRecords(p, h);
        t && w.setLinkedRecord(t, o);
        f = [];
        e = b.args;
        if (u != null && e.after == null && e.before == null) {
          q = u.getValue(g);
          t = u.getValue(l);
          o = u.getValue(m);
          b = u.getValue(n);
          d('ODS').bumpFraction(
            2507,
            'ufi_connection_generation_incremented',
            c('gkx')('708253') ? 'comet' : 'blue',
            0,
            1,
          );
          if (q != null || t != null || (o !== !0 && b !== !0)) {
            d('ODS').bumpFraction(
              2507,
              'ufi_connection_generation_incremented',
              c('gkx')('708253') ? 'comet' : 'blue',
              1,
              0,
            );
            t = (q = Number(w.getValue(j))) != null ? q : 0;
            w.setValue(t + 1, j);
          }
        }
        if (p && s)
          if (e.after != null)
            if (u && e.after === u.getValue(l)) {
              o = new Set();
              k(p, f, o);
              k(s, f, o);
            } else {
              c('warning')(
                !1,
                'Relay: Unexpected after cursor `%s`, edges must be fetched from the end of the list (`%s`).',
                e.after,
                u && u.getValue(l),
              );
              return;
            }
          else if (e.before != null)
            if (u && e.before === u.getValue(g)) {
              b = new Set();
              k(s, f, b);
              k(p, f, b);
            } else {
              c('warning')(
                !1,
                'Relay: Unexpected before cursor `%s`, edges must be fetched from the beginning of the list (`%s`).',
                e.before,
                u && u.getValue(g),
              );
              return;
            }
          else f = s;
        else s ? (f = s) : (f = p);
        f != null && f !== p && w.setLinkedRecords(f, h);
        if (u && r)
          if (e.after == null && e.before == null) u.copyFieldsFrom(r);
          else if (e.before != null || (e.after == null && e.last)) {
            u.setValue(!!r.getValue(n), n);
            q = r.getValue(g);
            typeof q === 'string' && u.setValue(q, g);
          } else if (e.after != null || (e.before == null && e.first)) {
            u.setValue(!!r.getValue(m), m);
            t = r.getValue(l);
            typeof t === 'string' && u.setValue(t, l);
          }
      }
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
    function k(a, b, c) {
      var e = d('relay-runtime').ConnectionInterface.get();
      e = e.NODE;
      for (var f = 0; f < a.length; f++) {
        var g = a[f];
        if (!g) continue;
        var h = g.getLinkedRecord(e);
        h = h && h.getDataID();
        if (h != null) {
          if (c.has(h)) continue;
          c.add(h);
        }
        b.push(g);
      }
    }
    g.update = a;
    g.getConnection = b;
    g.unstable_getAllConnectionsWithKey = e;
  },
  98,
);
