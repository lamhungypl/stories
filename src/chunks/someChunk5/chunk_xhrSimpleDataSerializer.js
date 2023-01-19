__d(
  'xhrSimpleDataSerializer',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    function a(a) {
      var b = [];
      for (var c in a)
        b.push(encodeURIComponent(c) + '=' + encodeURIComponent(a[c]));
      return b.join('&');
    }
    f['default'] = a;
  },
  66,
);
