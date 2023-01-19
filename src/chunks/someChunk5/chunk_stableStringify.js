__d(
  'stableStringify',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    function g(a) {
      return (
        a !== null && Object.prototype.toString.call(a) === '[object Object]'
      );
    }
    function h(a, b) {
      b === void 0 && (b = !1);
      var c = Array.isArray(a),
        d = g(a);
      if (c || d) {
        var e = Object.keys(a);
        if (e.length) {
          e = e.sort();
          var f = [];
          for (var i = 0; i < e.length; i++) {
            var j = e[i],
              k = a[j];
            if (b && k == null && d) continue;
            var l;
            g(k) || Array.isArray(k) ? (l = h(k, b)) : (l = JSON.stringify(k));
            f.push(j + ':' + l);
          }
          if (c) return '[' + f.join(',') + ']';
          else return '{' + f.join(',') + '}';
        }
      }
      return JSON.stringify(a);
    }
    f['default'] = h;
  },
  66,
);
