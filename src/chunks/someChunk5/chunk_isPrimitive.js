__d(
  'isPrimitive',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    function a(a) {
      switch (Object.prototype.toString.call(a)) {
        case '[object String]':
        case '[object Number]':
        case '[object Boolean]':
        case '[object Null]':
        case '[object Undefined]':
          return !0;
      }
      return !1;
    }
    f['default'] = a;
  },
  66,
);
