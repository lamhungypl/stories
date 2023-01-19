__d(
  'relay-runtime/util/recycleNodesInto',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    var g = typeof WeakSet !== 'undefined',
      h = typeof WeakMap !== 'undefined';
    function i(a, b) {
      if (
        a === b ||
        typeof a !== 'object' ||
        a instanceof Set ||
        a instanceof Map ||
        (g && a instanceof WeakSet) ||
        (h && a instanceof WeakMap) ||
        !a ||
        typeof b !== 'object' ||
        b instanceof Set ||
        b instanceof Map ||
        (g && b instanceof WeakSet) ||
        (h && b instanceof WeakMap) ||
        !b
      )
        return b;
      var c = !1,
        d = Array.isArray(a) ? a : null,
        e = Array.isArray(b) ? b : null;
      if (d && e)
        c =
          e.reduce(function (a, b, c) {
            var f = d[c];
            f = i(f, b);
            f !== e[c] && (e[c] = f);
            return a && f === d[c];
          }, !0) && d.length === e.length;
      else if (!d && !e) {
        var f = a,
          j = b,
          k = Object.keys(f),
          l = Object.keys(j);
        c =
          l.reduce(function (a, b) {
            var c = f[b];
            c = i(c, j[b]);
            c !== j[b] && (j[b] = c);
            return a && c === f[b];
          }, !0) && k.length === l.length;
      }
      return c ? a : b;
    }
    e.exports = i;
  },
  null,
);
