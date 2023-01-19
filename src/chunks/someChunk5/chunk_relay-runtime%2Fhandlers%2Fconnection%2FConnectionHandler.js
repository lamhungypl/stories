__d(
  'relay-runtime/handlers/connection/ConnectionHandler',
  [
    'invariant',
    'relay-runtime/handlers/connection/ConnectionInterface',
    'relay-runtime/store/ClientID',
    'relay-runtime/store/RelayStoreUtils',
    'relay-runtime/util/getRelayHandleKey',
    'warning',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = b('relay-runtime/store/ClientID').generateClientID,
      i = b('relay-runtime/store/RelayStoreUtils').getStableStorageKey,
      j = 'connection',
      k = '__connection_next_edge_index';
    function a(a, c) {
      var d,
        e = a.get(c.dataID);
      if (!e) return;
      var f = b('relay-runtime/handlers/connection/ConnectionInterface').get(),
        g = f.EDGES,
        i = f.END_CURSOR,
        j = f.HAS_NEXT_PAGE,
        l = f.HAS_PREV_PAGE,
        m = f.PAGE_INFO,
        n = f.PAGE_INFO_TYPE;
      f = f.START_CURSOR;
      var q = e.getLinkedRecord(c.fieldKey),
        r = q && q.getLinkedRecord(m);
      if (!q) {
        e.setValue(null, c.handleKey);
        return;
      }
      var s = h(e.getDataID(), c.handleKey),
        t = e.getLinkedRecord(c.handleKey);
      d = (d = t) != null ? d : a.get(s);
      var u = d && d.getLinkedRecord(m);
      if (!d) {
        var v = a.create(s, q.getType());
        v.setValue(0, k);
        v.copyFieldsFrom(q);
        s = q.getLinkedRecords(g);
        s &&
          ((s = s.map(function (b) {
            return o(a, v, b);
          })),
          v.setLinkedRecords(s, g));
        e.setLinkedRecord(v, c.handleKey);
        u = a.create(h(v.getDataID(), m), n);
        u.setValue(!1, j);
        u.setValue(!1, l);
        u.setValue(null, i);
        u.setValue(null, f);
        r && u.copyFieldsFrom(r);
        v.setLinkedRecord(u, m);
      } else {
        t == null && e.setLinkedRecord(d, c.handleKey);
        var w = d;
        s = q.getLinkedRecords(g);
        s &&
          (s = s.map(function (b) {
            return o(a, w, b);
          }));
        n = w.getLinkedRecords(g);
        t = w.getLinkedRecord(m);
        w.copyFieldsFrom(q);
        n && w.setLinkedRecords(n, g);
        t && w.setLinkedRecord(t, m);
        e = [];
        d = c.args;
        if (n && s)
          if (d.after != null)
            if (u && d.after === u.getValue(i)) {
              q = new Set();
              p(n, e, q);
              p(s, e, q);
            } else {
              b('warning')(
                !1,
                'Relay: Unexpected after cursor `%s`, edges must be fetched from the end of the list (`%s`).',
                d.after,
                u && u.getValue(i),
              );
              return;
            }
          else if (d.before != null)
            if (u && d.before === u.getValue(f)) {
              t = new Set();
              p(s, e, t);
              p(n, e, t);
            } else {
              b('warning')(
                !1,
                'Relay: Unexpected before cursor `%s`, edges must be fetched from the beginning of the list (`%s`).',
                d.before,
                u && u.getValue(f),
              );
              return;
            }
          else e = s;
        else s ? (e = s) : (e = n);
        e != null && e !== n && w.setLinkedRecords(e, g);
        if (u && r)
          if (d.after == null && d.before == null) u.copyFieldsFrom(r);
          else if (d.before != null || (d.after == null && d.last)) {
            u.setValue(!!r.getValue(l), l);
            m = r.getValue(f);
            typeof m === 'string' && u.setValue(m, f);
          } else if (d.after != null || (d.before == null && d.first)) {
            u.setValue(!!r.getValue(j), j);
            c = r.getValue(i);
            typeof c === 'string' && u.setValue(c, i);
          }
      }
    }
    function c(a, c, d) {
      c = b('relay-runtime/util/getRelayHandleKey')(j, c, null);
      return a.getLinkedRecord(c, d);
    }
    function d(a, c, d) {
      c = b('relay-runtime/util/getRelayHandleKey')(j, c, null);
      c = i(c, d);
      return h(a, c);
    }
    function f(a, c, d) {
      var e = b('relay-runtime/handlers/connection/ConnectionInterface').get(),
        f = e.CURSOR;
      e = e.EDGES;
      var g = a.getLinkedRecords(e);
      if (!g) {
        a.setLinkedRecords([c], e);
        return;
      }
      var h;
      if (d == null) h = g.concat(c);
      else {
        h = [];
        var i = !1;
        for (var j = 0; j < g.length; j++) {
          var k = g[j];
          h.push(k);
          if (k == null) continue;
          k = k.getValue(f);
          d === k && (h.push(c), (i = !0));
        }
        i || h.push(c);
      }
      a.setLinkedRecords(h, e);
    }
    function l(a, c, d, e) {
      var f = b('relay-runtime/handlers/connection/ConnectionInterface').get();
      f = f.NODE;
      c = h(c.getDataID(), d.getDataID());
      var g = a.get(c);
      g || (g = a.create(c, e));
      g.setLinkedRecord(d, f);
      g.getValue('cursor') == null && g.setValue(null, 'cursor');
      return g;
    }
    function m(a, c, d) {
      var e = b('relay-runtime/handlers/connection/ConnectionInterface').get(),
        f = e.CURSOR;
      e = e.EDGES;
      var g = a.getLinkedRecords(e);
      if (!g) {
        a.setLinkedRecords([c], e);
        return;
      }
      var h;
      if (d == null) h = [c].concat(g);
      else {
        h = [];
        var i = !1;
        for (var j = 0; j < g.length; j++) {
          var k = g[j];
          if (k != null) {
            var l = k.getValue(f);
            d === l && (h.push(c), (i = !0));
          }
          h.push(k);
        }
        i || h.unshift(c);
      }
      a.setLinkedRecords(h, e);
    }
    function n(a, c) {
      var d = b('relay-runtime/handlers/connection/ConnectionInterface').get(),
        e = d.EDGES;
      d = d.NODE;
      var f = a.getLinkedRecords(e);
      if (!f) return;
      var g;
      for (var h = 0; h < f.length; h++) {
        var i = f[h],
          j = i && i.getLinkedRecord(d);
        j != null && j.getDataID() === c
          ? g === void 0 && (g = f.slice(0, h))
          : g !== void 0 && g.push(i);
      }
      g !== void 0 && a.setLinkedRecords(g, e);
    }
    function o(a, c, d) {
      if (d == null) return d;
      var e = b('relay-runtime/handlers/connection/ConnectionInterface').get();
      e = e.EDGES;
      var f = c.getValue(k);
      typeof f === 'number' || g(0, 20561, k, f);
      e = h(c.getDataID(), e, f);
      a = a.create(e, d.getType());
      a.copyFieldsFrom(d);
      a.getValue('cursor') == null && a.setValue(null, 'cursor');
      c.setValue(f + 1, k);
      return a;
    }
    function p(a, c, d) {
      var e = b('relay-runtime/handlers/connection/ConnectionInterface').get();
      e = e.NODE;
      for (var f = 0; f < a.length; f++) {
        var g = a[f];
        if (!g) continue;
        var h = g.getLinkedRecord(e);
        h = h && h.getDataID();
        if (h) {
          if (d.has(h)) continue;
          d.add(h);
        }
        c.push(g);
      }
    }
    e.exports = {
      buildConnectionEdge: o,
      createEdge: l,
      deleteNode: n,
      getConnection: c,
      getConnectionID: d,
      insertEdgeAfter: f,
      insertEdgeBefore: m,
      update: a,
    };
  },
  null,
);
