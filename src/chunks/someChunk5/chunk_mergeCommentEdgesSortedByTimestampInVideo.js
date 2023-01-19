__d(
  'mergeCommentEdgesSortedByTimestampInVideo',
  ['expectationViolation'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = function (a) {
      a =
        a == null
          ? void 0
          : (a = a.getLinkedRecord('node')) == null
          ? void 0
          : a.getValue('timestamp_in_video');
      return typeof a !== 'number' ? null : a;
    };
    function a(a, b) {
      var d = 0,
        e = 0,
        f = new Set(),
        g = [],
        i = function (a) {
          var b;
          b =
            a == null
              ? void 0
              : (b = a.getLinkedRecord('node')) == null
              ? void 0
              : b.getValue('id');
          if (b == null) {
            c('expectationViolation')('Node should have id');
            return;
          }
          if (f.has(b)) return;
          f.add(b);
          g.push(a);
        };
      while (d < a.length && e < b.length) {
        var j = h(a[d]),
          k = h(b[e]);
        if (j == null) {
          d++;
          continue;
        }
        if (k == null) {
          e++;
          continue;
        }
        if (j < k) {
          i(a[d]);
          d++;
          continue;
        }
        if (j > k) {
          i(b[e]);
          e++;
          continue;
        }
        i(a[d]);
        i(b[e]);
        d++;
        e++;
      }
      for (j = d; j < a.length; j++) i(a[j]);
      for (k = e; k < b.length; k++) i(b[k]);
      return g;
    }
    g['default'] = a;
  },
  98,
);
