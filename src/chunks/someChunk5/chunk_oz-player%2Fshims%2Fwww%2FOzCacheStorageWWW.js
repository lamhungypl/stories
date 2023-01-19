__d(
  'oz-player/shims/www/OzCacheStorageWWW',
  ['WebStorage'],
  function (a, b, c, d, e, f, g) {
    var h = '_oz_',
      i = '_@_',
      j = c('WebStorage').getLocalStorage();
    a = {
      get: function (a) {
        if (j == null) return null;
        a = j.getItem(h + a);
        typeof a === 'string' && a.startsWith(i) && (a = a.substring(i.length));
        return a;
      },
      set: function (a, b) {
        j != null && j.setItem(h + a, b);
      },
    };
    b = a;
    g['default'] = b;
  },
  98,
);
