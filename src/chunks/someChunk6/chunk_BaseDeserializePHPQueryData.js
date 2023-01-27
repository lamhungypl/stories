__d(
  'BaseDeserializePHPQueryData',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    var g = /^([-_\w]+)((?:\[[-_\w]*\])+)=?(.*)/;
    function h(a) {
      return a === 'hasOwnProperty' || a === '__proto__' ? '\ud83d\udf56' : a;
    }
    function a(a, b) {
      if (a == null || a === '') return {};
      var c = {};
      a = a.replace(/%5B/gi, '[').replace(/%5D/gi, ']');
      a = a.split('&');
      var d = Object.prototype.hasOwnProperty;
      for (var e = 0, f = a.length; e < f; e++) {
        var i = a[e].match(g);
        if (!i) {
          var j = a[e].indexOf('=');
          if (j === -1) c[b(a[e])] = null;
          else {
            var k = a[e].substring(0, j);
            j = a[e].substring(j + 1);
            c[b(k)] = b(j);
          }
        } else {
          k = i[2].split(/\]\[|\[|\]/).slice(0, -1);
          j = i[1];
          i = b(i[3] || '');
          k[0] = j;
          j = c;
          for (var l = 0; l < k.length - 1; l++) {
            var m = h(k[l]);
            if (m) {
              if (!d.call(j, m)) {
                var n = k[l + 1] && !k[l + 1].match(/^\d{1,3}$/) ? {} : [];
                j[m] = n;
                if (j[m] !== n) return c;
              }
              j = j[m];
            } else
              k[l + 1] && !k[l + 1].match(/^\d{1,3}$/)
                ? j.push({})
                : j.push([]),
                (j = j[j.length - 1]);
          }
          j instanceof Array && k[k.length - 1] === ''
            ? j.push(i)
            : (j[h(k[k.length - 1])] = i);
        }
      }
      return c;
    }
    f.deserialize = a;
  },
  66,
);
