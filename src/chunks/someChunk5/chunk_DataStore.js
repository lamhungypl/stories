__d(
  'DataStore',
  ['DataStoreConfig', 'gkx', 'isEmpty'],
  function (a, b, c, d, e, f) {
    'use strict';
    var g,
      h = b('DataStoreConfig').expandoKey,
      i = b('DataStoreConfig').useExpando,
      j = b('gkx')('1073500') && window.WeakMap ? new window.WeakMap() : null,
      k = {},
      l = 1;
    function m(a) {
      if (typeof a === 'string') return 'str_' + a;
      else {
        var b;
        return (
          'elem_' + ((b = a.__FB_TOKEN) != null ? b : (a.__FB_TOKEN = [l++]))[0]
        );
      }
    }
    function n(a) {
      if (j != null && typeof a === 'object') {
        j.get(a) === void 0 && j.set(a, {});
        return j.get(a);
      } else if (i && typeof a === 'object') return a[h] || (a[h] = {});
      a = m(a);
      return k[a] || (k[a] = {});
    }
    var o = {
      set: function (a, b, c) {
        if (!a)
          throw new TypeError(
            'DataStore.set: namespace is required, got ' + typeof a,
          );
        var d = n(a);
        d[b] = c;
        return a;
      },
      get: function (a, b, c) {
        if (!a)
          throw new TypeError(
            'DataStore.get: namespace is required, got ' + typeof a,
          );
        var d = n(a),
          e = d[b];
        if (e === void 0 && a.getAttribute != null)
          if (a.hasAttribute != null && !a.hasAttribute('data-' + b))
            e = void 0;
          else {
            a = a.getAttribute('data-' + b);
            e = a === null ? void 0 : a;
          }
        c !== void 0 && e === void 0 && (e = d[b] = c);
        return e;
      },
      remove: function (a, c) {
        if (!a)
          throw new TypeError(
            'DataStore.remove: namespace is required, got ' + typeof a,
          );
        var d = n(a),
          e = d[c];
        delete d[c];
        (g || (g = b('isEmpty')))(d) && o.purge(a);
        return e;
      },
      purge: function (a) {
        if (j != null && typeof a === 'object') return j['delete'](a);
        else i && typeof a === 'object' ? delete a[h] : delete k[m(a)];
      },
      _storage: k,
    };
    e.exports = o;
  },
  null,
);