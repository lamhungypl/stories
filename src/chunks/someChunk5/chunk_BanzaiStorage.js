__d(
  'BanzaiStorage',
  [
    'BanzaiConsts',
    'BanzaiUtils',
    'CurrentUser',
    'FBJSON',
    'SetIdleTimeoutAcrossTransitions',
    'WebSession',
    'WebStorage',
    'WebStorageMutex',
    'isInIframe',
    'performanceAbsoluteNow',
  ],
  function (a, b, c, d, e, f) {
    'use strict';
    var g,
      h,
      i,
      j = 'bz:',
      k = b('isInIframe')(),
      l,
      m = !1,
      n = null;
    function o() {
      var a = 'check_quota';
      try {
        var b = p();
        if (!b) return !1;
        b.setItem(a, a);
        b.removeItem(a);
        return !0;
      } catch (a) {
        return !1;
      }
    }
    function p() {
      m || ((m = !0), (l = (g || (g = b('WebStorage'))).getLocalStorage()));
      return l;
    }
    a = {
      flush: function (a) {
        if (k) return;
        var c = p();
        if (c) {
          n == null &&
            (n = parseInt(
              c.getItem((h || (h = b('BanzaiConsts'))).LAST_STORAGE_FLUSH),
              10,
            ));
          var d =
            n &&
            (i || (i = b('performanceAbsoluteNow')))() - n >=
              (h || (h = b('BanzaiConsts'))).STORAGE_FLUSH_INTERVAL;
          d && a();
          (d || !n) &&
            ((n = (i || (i = b('performanceAbsoluteNow')))()),
            (g || (g = b('WebStorage'))).setItemGuarded(
              c,
              (h || (h = b('BanzaiConsts'))).LAST_STORAGE_FLUSH,
              n.toString(),
            ));
        }
      },
      restore: function (a) {
        if (k) return;
        var c = p();
        if (!c) return;
        var d = function (d) {
          var e = [];
          for (var f = 0; f < c.length; f++) {
            var g = c.key(f);
            typeof g === 'string' &&
              g.indexOf(j) === 0 &&
              g.indexOf('bz:__') !== 0 &&
              e.push(g);
          }
          e.forEach(function (d) {
            var e = c.getItem(d);
            c.removeItem(d);
            if (e == null || e === '') return;
            d = b('FBJSON').parse(e);
            d.forEach(function (c) {
              if (!c) return;
              var d = (c.__meta = c.pop()),
                e = b('BanzaiUtils').canSend(c);
              if (!e) return;
              e = b('CurrentUser').getPossiblyNonFacebookUserID();
              (d.userID === e || e === '0') &&
                (b('BanzaiUtils').resetPostStatus(c), a(c));
            });
          });
          d && d.unlock();
        };
        o()
          ? new (b('WebStorageMutex'))('banzai').lock(d)
          : b('SetIdleTimeoutAcrossTransitions').start(d, 0);
      },
      store: function (a) {
        if (k) return;
        var c = p(),
          d = a.filter(function (a) {
            return a.__meta.status !== (h || (h = b('BanzaiConsts'))).POST_SENT;
          });
        if (!c || d.length <= 0) return;
        d = d.map(function (a) {
          return [a[0], a[1], a[2], a[3] || 0, a[4], a.__meta];
        });
        a.splice(0, a.length);
        (g || (g = b('WebStorage'))).setItemGuarded(
          c,
          j +
            b('WebSession').getId() +
            '.' +
            (i || (i = b('performanceAbsoluteNow')))(),
          b('FBJSON').stringify(d),
        );
      },
    };
    e.exports = a;
  },
  null,
);
