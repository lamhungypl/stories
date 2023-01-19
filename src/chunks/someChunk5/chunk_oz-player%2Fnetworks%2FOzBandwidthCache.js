__d(
  'oz-player/networks/OzBandwidthCache',
  [
    'oz-player/configs/OzGlobalConfig',
    'oz-player/shims/OzCacheStorage',
    'oz-player/shims/OzWindowEvents',
  ],
  function (a, b, c, d, e, f, g) {
    a = (function () {
      function a(a, b, d, e) {
        var f = this;
        this.$1 = a;
        this.$2 = b;
        this.$3 = d;
        this.$4 = e;
        c('oz-player/shims/OzWindowEvents').onUnload(function () {
          f.updateCache();
        });
      }
      var b = a.prototype;
      b.getCachedBandwidth = function () {
        var a = c('oz-player/shims/OzCacheStorage').get(this.$1);
        if (a == null) return null;
        a = Number(a);
        return isNaN(a) ? null : a;
      };
      b.getCachedSamples = function () {
        if (this.$5 != null) return this.$5;
        var b = c('oz-player/shims/OzCacheStorage').get(this.$2);
        if (b == null) return null;
        this.$5 = a.deserialize(b);
        return this.$5;
      };
      b.updateCache = function () {
        c('oz-player/shims/OzCacheStorage').set(this.$1, String(this.$3()));
        var b = c('oz-player/configs/OzGlobalConfig').getNumber(
          'bandwidth_ttfb_samples_to_save',
          5,
        );
        if (b > 0) {
          var d = this.$4(),
            e = d.bandwidth.length,
            f = d.navigationTiming.length;
          e = {
            bandwidth: d.bandwidth.slice(Math.max(0, e - b), e),
            navigationTiming: d.navigationTiming.slice(Math.max(0, f - b), f),
          };
          c('oz-player/shims/OzCacheStorage').set(this.$2, a.serialize(e));
        }
      };
      a.deserialize = function (a) {
        var b = {};
        try {
          b = JSON.parse(a);
        } catch (a) {}
        return typeof b === 'object' && Array.isArray(b.b) && Array.isArray(b.t)
          ? {
              bandwidth: b.b.reduce(function (a, b) {
                typeof b.b === 'number' &&
                  typeof b.t === 'number' &&
                  typeof b.s === 'number' &&
                  a.push({ bytes: b.b, timeInMs: b.t, timestamp: b.s });
                return a;
              }, []),
              navigationTiming: b.t.reduce(function (a, b) {
                typeof b.t === 'number' &&
                  typeof b.s === 'number' &&
                  (typeof b.l === 'number' && typeof b.b === 'number'
                    ? a.push({
                        timeToFirstByteMs: b.t,
                        timeToLastByteMs: b.l,
                        bytes: b.b,
                        timestamp: b.s,
                      })
                    : a.push({
                        timeToFirstByteMs: b.t,
                        timeToLastByteMs: 0,
                        bytes: 0,
                        timestamp: b.s,
                      }));
                return a;
              }, []),
            }
          : null;
      };
      a.serialize = function (a) {
        a = {
          b: a.bandwidth.map(function (a) {
            return { b: a.bytes, s: a.timestamp, t: a.timeInMs };
          }),
          t: a.navigationTiming.map(function (a) {
            return {
              s: a.timestamp,
              t: a.timeToFirstByteMs,
              l: a.timeToLastByteMs,
              b: a.bytes,
            };
          }),
        };
        return JSON.stringify(a);
      };
      return a;
    })();
    g['default'] = a;
  },
  98,
);
