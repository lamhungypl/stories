__d(
  'lengthInUTF8Bytes',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    function g(a) {
      var b = new TextEncoder();
      return b.encode(a).length;
    }
    function h(a) {
      var b = encodeURIComponent(a).match(/%[89ABab]/g);
      return a.length + (b ? b.length : 0);
    }
    a = (function () {
      if (typeof TextEncoder === 'undefined') return h;
      else return g;
    })();
    f['default'] = a;
  },
  66,
); /*FB_PKG_DELIM*/
