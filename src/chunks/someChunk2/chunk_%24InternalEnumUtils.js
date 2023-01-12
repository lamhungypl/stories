__d(
  '$InternalEnumUtils',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    var g = Object.prototype.hasOwnProperty;
    function a(a) {
      return function (b) {
        return b == null || !g.call(a, b) ? null : a[b];
      };
    }
    var h = typeof WeakMap === 'function' ? new WeakMap() : new Map();
    function b(a) {
      return function (b) {
        if (b == null) return null;
        var c = h.get(a);
        c == null &&
          ((c = new Map(
            Object.getOwnPropertyNames(a).map(function (b) {
              return [a[b], b];
            }),
          )),
          h.set(a, c));
        return (c = c.get(b)) != null ? c : null;
      };
    }
    f.createToJSEnum = a;
    f.createFromJSEnum = b;
  },
  66,
);
