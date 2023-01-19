__d(
  'CometDASHPrefetchCacheManager',
  ['CometDASHPrefetchCache', 'RunComet', 'oz-player/configs/OzGlobalConfig'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = (function () {
      function a() {
        var a = this;
        this.$1 = new Map();
        c('oz-player/configs/OzGlobalConfig').getBool(
          'clear_prefetch_on_unload',
          !1,
        ) &&
          d('RunComet').onUnload(function () {
            a.$1.forEach(function (a) {
              a.clear();
            });
          });
      }
      var b = a.prototype;
      b.fetch = function (a, b) {
        var d = this.$1.get(a),
          e = c('oz-player/configs/OzGlobalConfig').getBool(
            'allow_subsequent_prefetch',
            !1,
          );
        d ||
          ((d = new (c('CometDASHPrefetchCache'))()),
          this.$1.set(a, d),
          e || d.fetch(b));
        e && d.fetch(b);
      };
      b.get = function (a) {
        return this.$1.get(a);
      };
      return a;
    })();
    b = new a();
    e = b;
    g['default'] = e;
  },
  98,
);
