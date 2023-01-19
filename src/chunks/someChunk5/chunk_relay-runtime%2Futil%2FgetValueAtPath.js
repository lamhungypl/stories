__d(
  'relay-runtime/util/getValueAtPath',
  ['invariant'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function a(a, b) {
      a = a;
      for (
        var b = b,
          c = Array.isArray(b),
          d = 0,
          b = c
            ? b
            : b[
                typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'
              ]();
        ;

      ) {
        var e;
        if (c) {
          if (d >= b.length) break;
          e = b[d++];
        } else {
          d = b.next();
          if (d.done) break;
          e = d.value;
        }
        e = e;
        if (a == null) return null;
        typeof e === 'number'
          ? (Array.isArray(a) || g(0, 14107), (a = a[e]))
          : ((typeof a === 'object' && !Array.isArray(a)) || g(0, 14106),
            (a = a[e]));
      }
      return a;
    }
    e.exports = a;
  },
  null,
);
