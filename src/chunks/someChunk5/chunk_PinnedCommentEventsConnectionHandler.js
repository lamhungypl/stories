__d(
  'PinnedCommentEventsConnectionHandler',
  ['expectationViolation', 'relay-runtime'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function a(a, b) {
      a = a.get(b.dataID);
      if (!a) return;
      var c = a.getLinkedRecords(b.fieldKey);
      if (!c) {
        a.setValue(null, b.handleKey);
        return;
      }
      var d = a.getLinkedRecords(b.handleKey);
      if (!d) {
        a.setLinkedRecords(c, b.handleKey);
        return;
      }
      var e;
      d == null ? (e = c) : c == null ? (e = d) : (e = h(d, c));
      a.setLinkedRecords((d = e) != null ? d : [], b.handleKey);
    }
    function h(a, b) {
      var d = 0,
        e = 0,
        f = new Set(),
        g = [],
        h = function (a) {
          var b = a == null ? void 0 : a.getValue('id');
          if (b == null) {
            c('expectationViolation')('Pinned Comment Event should have id');
            return;
          }
          if (f.has(b)) return;
          f.add(b);
          g.push(a);
        };
      while (d < a.length && e < b.length) {
        var i, j;
        i = (i = a[d]) == null ? void 0 : i.getValue('vod_time_offset');
        j = (j = b[e]) == null ? void 0 : j.getValue('vod_time_offset');
        if (typeof i != 'number') {
          d++;
          continue;
        }
        if (typeof j != 'number') {
          e++;
          continue;
        }
        if (i > j) {
          h(a[d]);
          d++;
          continue;
        }
        if (i < j) {
          h(b[e]);
          e++;
          continue;
        }
        h(a[d]);
        h(b[e]);
        d++;
        e++;
      }
      for (i = d; i < a.length; i++) h(a[i]);
      for (j = e; j < b.length; j++) h(b[j]);
      return g;
    }
    function i(a) {
      return d('relay-runtime').getRelayHandleKey(
        'pinned_comment_events',
        a,
        null,
      );
    }
    function j(a, b, c) {
      return (a = a.getLinkedRecords(i(b), c)) != null ? a : [];
    }
    function b(a, b, c, d) {
      a.setLinkedRecords(
        j(a, b, d).filter(function (a) {
          return (a == null ? void 0 : a.getValue('id')) !== c;
        }),
        i(b),
      );
      return;
    }
    g.update = a;
    g.getEvents = j;
    g.deleteEvent = b;
  },
  98,
);
