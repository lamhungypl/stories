__d(
  'WebStorage',
  ['CookieConsent', 'FBLogger', 'err', 'isQuotaExceededError'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = {},
      i = {},
      j = 'localStorage',
      k = 'sessionStorage',
      l = !1;
    function m(a, b, d) {
      if (!c('CookieConsent').isLocalStorageAllowed()) {
        l ||
          (c('FBLogger')('web_storage').warn(
            'Failed to get %s because of missing cookie consent',
            d.toString(),
          ),
          (l = !0));
        return null;
      }
      Object.prototype.hasOwnProperty.call(a, d) || (a[d] = b(d));
      return a[d];
    }
    function n(a) {
      try {
        return window[a];
      } catch (a) {
        c('FBLogger')('web_storage').warn(
          'Failed to get storage for read %s',
          a.message,
        );
      }
      return null;
    }
    function o(a) {
      var b = null;
      try {
        b = window[a];
        if (
          b != null &&
          typeof b.setItem === 'function' &&
          typeof b.removeItem === 'function'
        ) {
          var e = '__test__' + Date.now();
          b.setItem(e, '');
          b.removeItem(e);
        } else return null;
      } catch (e) {
        if (
          d('isQuotaExceededError').isStorageQuotaExceededError(b, e) === !1
        ) {
          c('FBLogger')('web_storage')
            .catching(e)
            .warn('Failed to get WebStorage of type `%s`', a);
          return null;
        }
      }
      return b;
    }
    function p(a) {
      var b = null;
      try {
        b = window[a];
        if (
          b != null &&
          typeof b.setItem === 'function' &&
          typeof b.removeItem === 'function'
        ) {
          a = '__test__' + Date.now();
          b.setItem(a, '');
          b.removeItem(a);
        }
      } catch (a) {
        if (d('isQuotaExceededError').isStorageQuotaExceededError(b, a) === !0)
          return !0;
      }
      return !1;
    }
    function q(a) {
      var b = [];
      for (var c = 0; c < a.length; c++) b.push(a.key(c) || '');
      return b;
    }
    function r(a, b, d) {
      if (a == null) return new Error('storage cannot be null');
      var e = null;
      try {
        a.setItem(b, d);
      } catch (g) {
        var f = q(a).map(function (b) {
          var c = (a.getItem(b) || '').length;
          return b + '(' + c + ')';
        });
        e = c('err')(
          '%sStorage quota exceeded while setting %s(%s). Items(length) follows: %s',
          g.name ? g.name + ': ' : '',
          b,
          d.length,
          f.join(),
        );
      }
      return e;
    }
    a = {
      getLocalStorage: function () {
        return m(h, o, j);
      },
      getAllowlistedKeyFromLocalStorage: function (a) {
        var b;
        return (b = m(i, n, j)) == null ? void 0 : b.getItem(a);
      },
      getSessionStorage: function () {
        return m(h, o, k);
      },
      getAllowlistedKeyFromSessionStorage: function (a) {
        var b;
        return (b = m(i, n, k)) == null ? void 0 : b.getItem(a);
      },
      getLocalStorageForRead: function () {
        return m(i, n, j);
      },
      getSessionStorageForRead: function () {
        return m(i, n, k);
      },
      isLocalStorageQuotaExceeded: function () {
        return p(j);
      },
      isSessionStorageQuotaExceeded: function () {
        return p(k);
      },
      setItemGuarded: r,
      setAllowlistedKeyToLocalStorage: function (a, b, c) {
        return r(a, b, c);
      },
      clearCaches: function () {
        (h = {}), (i = {});
      },
    };
    b = a;
    g['default'] = b;
  },
  98,
);
