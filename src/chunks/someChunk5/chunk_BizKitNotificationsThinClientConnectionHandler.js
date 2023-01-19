__d(
  'BizKitNotificationsThinClientConnectionHandler',
  ['relay-runtime', 'unrecoverableViolation', 'warning'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = 'bizkit_notifications_thin_client',
      i = 'id',
      j = function (a) {
        return a == null
          ? void 0
          : (a = a.getLinkedRecord('notif')) == null
          ? void 0
          : a.getValue(i);
      },
      k = '__connection_next_edge_index';
    function a(a, b) {
      var e,
        f = a.get(b.dataID);
      if (!f) return;
      var g = d('relay-runtime').ConnectionInterface.get(),
        h = g.EDGES,
        i = g.END_CURSOR,
        j = g.HAS_NEXT_PAGE,
        p = g.HAS_PREV_PAGE,
        q = g.PAGE_INFO,
        r = g.PAGE_INFO_TYPE;
      g = g.START_CURSOR;
      var s = f.getLinkedRecord(b.fieldKey),
        t = s && s.getLinkedRecord(q);
      if (!s) {
        f.setValue(null, b.handleKey);
        return;
      }
      var u = d('relay-runtime').generateClientID(f.getDataID(), b.handleKey),
        v = f.getLinkedRecord(b.handleKey);
      e = (e = v) != null ? e : a.get(u);
      var w = e && e.getLinkedRecord(q);
      if (!e) {
        var x = a.create(u, s.getType());
        x.setValue(0, k);
        x.copyFieldsFrom(s);
        u = s.getLinkedRecords(h);
        if (u) {
          var y = d('relay-runtime').ConnectionInterface.get(),
            z = y.NODE;
          u = u.reduce(function (b, c) {
            if (!c) return b;
            var d = c.getLinkedRecord(z);
            d = d == null ? void 0 : d.getType();
            return d === 'NotifPageCachedNotificationRow'
              ? b
              : b.concat(l(a, x, c));
          }, []);
          x.setLinkedRecords(u, h);
        }
        f.setLinkedRecord(x, b.handleKey);
        w = a.create(d('relay-runtime').generateClientID(x.getDataID(), q), r);
        w.setValue(!1, j);
        w.setValue(!1, p);
        w.setValue(null, i);
        w.setValue(null, g);
        t && w.copyFieldsFrom(t);
        x.setLinkedRecord(w, q);
      } else {
        v == null && f.setLinkedRecord(e, b.handleKey);
        var A = e;
        y = s.getLinkedRecords(h);
        y &&
          (y = y.map(function (b) {
            return l(a, A, b);
          }));
        u = A.getLinkedRecords(h);
        r = A.getLinkedRecord(q);
        A.copyFieldsFrom(s);
        u && A.setLinkedRecords(u, h);
        r && A.setLinkedRecord(r, q);
        v = [];
        f = b.args;
        if (u && y)
          if (f.after != null)
            if (w && f.after === w.getValue(i)) {
              e = new Set();
              m(u, v, e);
              m(y, v, e);
            } else {
              c('warning')(
                !1,
                'Relay: Unexpected after cursor `%s`, edges must be fetched from the end of the list (`%s`).',
                f.after,
                w && w.getValue(i),
              );
              return;
            }
          else if (f.before != null)
            if (w && f.before === w.getValue(g)) {
              s = new Set();
              m(y, v, s);
              m(u, v, s);
            } else {
              c('warning')(
                !1,
                'Relay: Unexpected before cursor `%s`, edges must be fetched from the beginning of the list (`%s`).',
                f.before,
                w && w.getValue(g),
              );
              return;
            }
          else {
            r = n(u);
            q = new Set();
            o(y, v, r, q);
          }
        else y ? (v = y) : (v = u);
        v != null && v !== u && A.setLinkedRecords(v, h);
        if (w && t)
          if (f.after == null && f.before == null) w.copyFieldsFrom(t);
          else if (f.before != null || (f.after == null && f.last)) {
            w.setValue(!!t.getValue(p), p);
            b = t.getValue(g);
            typeof b === 'string' && w.setValue(b, g);
          } else if (f.after != null || (f.before == null && f.first)) {
            w.setValue(!!t.getValue(j), j);
            e = t.getValue(i);
            typeof e === 'string' && w.setValue(e, i);
          }
      }
    }
    function b(a, b, c) {
      b = d('relay-runtime').getRelayHandleKey(h, b, null);
      return a.getLinkedRecord(b, c);
    }
    function l(a, b, e) {
      if (e == null) return e;
      var f = d('relay-runtime').ConnectionInterface.get();
      f = f.EDGES;
      var g = b.getValue(k);
      if (!(typeof g === 'number'))
        throw c('unrecoverableViolation')(
          'CometNotificationsThinClientConnectionHandler: Expected edgeIndex to be a number',
          'Notifications',
        );
      f = d('relay-runtime').generateClientID(b.getDataID(), f, g);
      a = a.create(f, e.getType());
      a.copyFieldsFrom(e);
      b.setValue(g + 1, k);
      return a;
    }
    function m(a, b, c) {
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
    function n(a) {
      var b = {},
        c = d('relay-runtime').ConnectionInterface.get();
      c = c.NODE;
      for (var e = 0; e < a.length; e++) {
        var f = a[e];
        if (!f) continue;
        f = f.getLinkedRecord(c);
        var g = f && f.getType();
        if (g === 'NotifPageNotificationRow') {
          g = j(f);
          typeof g === 'string' && (b[g] = f);
        }
      }
      return b;
    }
    function o(a, b, c, e) {
      var f = d('relay-runtime').ConnectionInterface.get();
      f = f.NODE;
      for (var g = 0; g < a.length; g++) {
        var h = a[g];
        if (!h) continue;
        var i = h.getLinkedRecord(f),
          k = i && i.getDataID();
        if (k != null) {
          if (e.has(k)) continue;
          e.add(k);
        }
        k = i == null ? void 0 : i.getType();
        var l = j(i);
        if (i && k === 'NotifPageCachedNotificationRow') {
          if (typeof l === 'string') {
            k = c[l];
            k && (k.copyFieldsFrom(i), h.setLinkedRecord(k, f), b.push(h));
          }
        } else b.push(h);
      }
    }
    g.update = a;
    g.getConnection = b;
    g.buildConnectionEdge = l;
  },
  98,
);
