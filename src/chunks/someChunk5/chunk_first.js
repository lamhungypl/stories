__d(
  'first',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    function a(a) {
      for (
        var a = a,
          b = Array.isArray(a),
          c = 0,
          a = b
            ? a
            : a[
                typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'
              ]();
        ;

      ) {
        var d;
        if (b) {
          if (c >= a.length) break;
          d = a[c++];
        } else {
          c = a.next();
          if (c.done) break;
          d = c.value;
        }
        d = d;
        return d;
      }
      return null;
    }
    f['default'] = a;
  },
  66,
);
