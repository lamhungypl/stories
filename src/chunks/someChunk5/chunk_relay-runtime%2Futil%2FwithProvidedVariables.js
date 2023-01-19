__d(
  'relay-runtime/util/withProvidedVariables',
  ['areEqual', 'warning'],
  function (a, b, c, d, e, f) {
    'use strict';
    var g;
    b = typeof WeakMap === 'function';
    var h = b ? new WeakMap() : new Map();
    function a(a, b) {
      if (b != null) {
        var c = {};
        Object.assign(c, a);
        Object.keys(b).forEach(function (a) {
          var d = b[a].get,
            e = d();
          if (!h.has(d)) h.set(d, e), (c[a] = e);
          else {
            e = h.get(d);
            c[a] = e;
          }
        });
        return c;
      } else return a;
    }
    a.tests_only_resetDebugCache = void 0;
    e.exports = a;
  },
  null,
);
