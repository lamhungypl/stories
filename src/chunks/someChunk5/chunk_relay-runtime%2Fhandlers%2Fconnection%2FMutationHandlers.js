__d(
  'relay-runtime/handlers/connection/MutationHandlers',
  [
    'invariant',
    'relay-runtime/handlers/connection/ConnectionHandler',
    'relay-runtime/handlers/connection/ConnectionInterface',
    'warning',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h;
    d = {
      update: function (a, b) {
        var c = a.get(b.dataID);
        if (c != null) {
          c = c.getValue(b.fieldKey);
          typeof c === 'string'
            ? a['delete'](c)
            : Array.isArray(c) &&
              c.forEach(function (b) {
                typeof b === 'string' && a['delete'](b);
              });
        }
      },
    };
    f = {
      update: function (a, c) {
        var d = a.get(c.dataID);
        if (d == null) return;
        var e = c.handleArgs.connections;
        e != null || g(0, 23070);
        d = d.getValue(c.fieldKey);
        c = Array.isArray(d) ? d : [d];
        c.forEach(function (c) {
          if (typeof c === 'string')
            for (
              var d = e,
                f = Array.isArray(d),
                g = 0,
                d = f
                  ? d
                  : d[
                      typeof Symbol === 'function'
                        ? Symbol.iterator
                        : '@@iterator'
                    ]();
              ;

            ) {
              var h;
              if (f) {
                if (g >= d.length) break;
                h = d[g++];
              } else {
                g = d.next();
                if (g.done) break;
                h = g.value;
              }
              h = h;
              var i = a.get(h);
              if (i == null) {
                b('warning')(
                  !1,
                  "[Relay][Mutation] The connection with id '" +
                    h +
                    "' doesn't exist.",
                );
                continue;
              }
              b(
                'relay-runtime/handlers/connection/ConnectionHandler',
              ).deleteNode(i, c);
            }
        });
      },
    };
    var i = {
      update: a(
        (h = b('relay-runtime/handlers/connection/ConnectionHandler'))
          .insertEdgeAfter,
      ),
    };
    a = { update: a(h.insertEdgeBefore) };
    var j = { update: c(h.insertEdgeAfter) };
    c = { update: c(h.insertEdgeBefore) };
    function a(a) {
      return function (c, d) {
        var e = c.get(d.dataID);
        if (e == null) return;
        var f = d.handleArgs.connections;
        f != null || g(0, 23070);
        var h, i;
        try {
          h = e.getLinkedRecord(d.fieldKey);
        } catch (a) {}
        if (!h)
          try {
            i = e.getLinkedRecords(d.fieldKey);
          } catch (a) {}
        if (h == null && i == null) {
          b('warning')(
            !1,
            'MutationHandlers: Expected the server edge to be non-null.',
          );
          return;
        }
        e = b('relay-runtime/handlers/connection/ConnectionInterface').get();
        var j = e.NODE,
          k = e.EDGES;
        e = (d = i) != null ? d : [h];
        var l = function () {
          if (n) {
            if (o >= m.length) return 'break';
            d = m[o++];
          } else {
            o = m.next();
            if (o.done) return 'break';
            d = o.value;
          }
          var e = d;
          if (e == null) return 'continue';
          var h = e.getLinkedRecord('node');
          if (!h) return 'continue';
          var i = h.getDataID();
          for (
            var h = f,
              l = Array.isArray(h),
              p = 0,
              h = l
                ? h
                : h[
                    typeof Symbol === 'function'
                      ? Symbol.iterator
                      : '@@iterator'
                  ]();
            ;

          ) {
            var q;
            if (l) {
              if (p >= h.length) break;
              q = h[p++];
            } else {
              p = h.next();
              if (p.done) break;
              q = p.value;
            }
            q = q;
            var r = c.get(q);
            if (r == null) {
              b('warning')(
                !1,
                "[Relay][Mutation] The connection with id '" +
                  q +
                  "' doesn't exist.",
              );
              continue;
            }
            q =
              (q = r.getLinkedRecords(k)) == null
                ? void 0
                : q.some(function (a) {
                    return (
                      (a == null
                        ? void 0
                        : (a = a.getLinkedRecord(j)) == null
                        ? void 0
                        : a.getDataID()) === i
                    );
                  });
            if (q) continue;
            q = b(
              'relay-runtime/handlers/connection/ConnectionHandler',
            ).buildConnectionEdge(c, r, e);
            q != null || g(0, 23071);
            a(r, q);
          }
        };
        _loop: for (
          var m = e,
            n = Array.isArray(m),
            o = 0,
            m = n
              ? m
              : m[
                  typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'
                ]();
          ;

        ) {
          e = l();
          switch (e) {
            case 'break':
              break _loop;
            case 'continue':
              continue;
          }
        }
      };
    }
    function c(a) {
      return function (c, d) {
        var e = c.get(d.dataID);
        if (e == null) return;
        var f = d.handleArgs,
          h = f.connections,
          i = f.edgeTypeName;
        h != null || g(0, 23070);
        i != null || g(0, 26584);
        var j, k;
        try {
          j = e.getLinkedRecord(d.fieldKey);
        } catch (a) {}
        if (!j)
          try {
            k = e.getLinkedRecords(d.fieldKey);
          } catch (a) {}
        if (j == null && k == null) {
          b('warning')(!1, 'MutationHandlers: Expected target node to exist.');
          return;
        }
        f = b('relay-runtime/handlers/connection/ConnectionInterface').get();
        var l = f.NODE,
          m = f.EDGES;
        d = (e = k) != null ? e : [j];
        e = function () {
          if (o) {
            if (p >= n.length) return 'break';
            f = n[p++];
          } else {
            p = n.next();
            if (p.done) return 'break';
            f = p.value;
          }
          var d = f;
          if (d == null) return 'continue';
          var e = d.getDataID();
          for (
            var j = h,
              k = Array.isArray(j),
              q = 0,
              j = k
                ? j
                : j[
                    typeof Symbol === 'function'
                      ? Symbol.iterator
                      : '@@iterator'
                  ]();
            ;

          ) {
            var r;
            if (k) {
              if (q >= j.length) break;
              r = j[q++];
            } else {
              q = j.next();
              if (q.done) break;
              r = q.value;
            }
            r = r;
            var s = c.get(r);
            if (s == null) {
              b('warning')(
                !1,
                "[Relay][Mutation] The connection with id '" +
                  r +
                  "' doesn't exist.",
              );
              continue;
            }
            r =
              (r = s.getLinkedRecords(m)) == null
                ? void 0
                : r.some(function (a) {
                    return (
                      (a == null
                        ? void 0
                        : (a = a.getLinkedRecord(l)) == null
                        ? void 0
                        : a.getDataID()) === e
                    );
                  });
            if (r) continue;
            r = b(
              'relay-runtime/handlers/connection/ConnectionHandler',
            ).createEdge(c, s, d, i);
            r != null || g(0, 23071);
            a(s, r);
          }
        };
        _loop3: for (
          var n = d,
            o = Array.isArray(n),
            p = 0,
            n = o
              ? n
              : n[
                  typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'
                ]();
          ;

        ) {
          d = e();
          switch (d) {
            case 'break':
              break _loop3;
            case 'continue':
              continue;
          }
        }
      };
    }
    e.exports = {
      AppendEdgeHandler: i,
      DeleteRecordHandler: d,
      PrependEdgeHandler: a,
      AppendNodeHandler: j,
      PrependNodeHandler: c,
      DeleteEdgeHandler: f,
    };
  },
  null,
);
