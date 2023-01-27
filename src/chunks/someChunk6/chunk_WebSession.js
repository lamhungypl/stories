__d(
  'WebSession',
  ['FBLogger', 'Random', 'WebSessionDefaultTimeoutMs', 'WebStorage'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = 36,
      i = 6,
      j = Math.pow(h, i);
    function k(a) {
      return a == null || Number.isFinite(a) === !1 || a <= 0 ? null : a;
    }
    function l(a) {
      if (a == null) return null;
      var b = parseInt(a, 10);
      if ('' + b !== a) {
        c('FBLogger')('web_session').warn(
          'Expected the web session expiry time to parse as an integer. Found `%s`.',
          String(a),
        );
        return null;
      }
      return k(b);
    }
    function m(a) {
      if (a == null) return null;
      if (a.length !== i) {
        c('FBLogger')('web_session').warn(
          'Expected the web session id to be a %d character string. It was %d character(s). Received `%s`.',
          i,
          a.length,
          a,
        );
        return null;
      }
      if (/^[a-z0-9]+$/.test(a) === !1) {
        c('FBLogger')('web_session').warn(
          'Expected the web session ID to be a base-%d encoded string. Received `%s`.',
          h,
          a,
        );
        return null;
      }
      return a;
    }
    function n(a) {
      if (a == null) return null;
      if (typeof a !== 'string' && a instanceof String === !1) {
        c('FBLogger')('web_session').warn(
          "A non-string value was passed to `coerceSession`. This should be impossible according to this method's Flow type. The value was `%s`.",
          a,
        );
        return null;
      }
      a = a.split(':');
      var b = a[0];
      a = a[1];
      a = l(a);
      b = m(b);
      return a == null || b == null ? null : { expiryTime: a, id: b };
    }
    function o() {
      var a = Math.floor(d('Random').random() * j);
      a = a.toString(h);
      return '0'.repeat(i - a.length) + a;
    }
    var p = null;
    function q() {
      p == null && (p = o());
      return p;
    }
    function r(a) {
      a === void 0 && (a = Date.now());
      var b = c('WebStorage').getLocalStorageForRead();
      if (b == null) return null;
      try {
        b = n(b.getItem('Session'));
        return b && a < b.expiryTime ? b : null;
      } catch (a) {
        return null;
      }
    }
    function s() {
      var a = c('WebStorage').getSessionStorageForRead();
      if (a == null) return null;
      a = m(a.getItem('TabId'));
      if (a == null) {
        var b = c('WebStorage').getSessionStorage();
        if (b == null) return null;
        var d = o();
        c('WebStorage').setItemGuarded(b, 'TabId', d);
        return d;
      }
      return a;
    }
    function a(a) {
      if (a !== void 0 && k(a) == null) {
        c('FBLogger')('web_session').warn(
          '`WebSession.extend()` was passed an invalid target expiry time `%s`.',
          a,
        );
        return;
      }
      var b = Date.now();
      a = (a = a) != null ? a : b + c('WebSessionDefaultTimeoutMs');
      var d = r(b);
      if ((d && d.expiryTime >= a) || a <= b) return;
      b = c('WebStorage').getLocalStorage();
      if (b != null) {
        d = d == null ? o() : d.id;
        c('WebStorage').setItemGuarded(b, 'Session', d + ':' + a);
      }
    }
    function t() {
      var a;
      return (a = r()) == null ? void 0 : a.id;
    }
    function b() {
      var a,
        b,
        c = q();
      a = (a = t()) != null ? a : '';
      b = (b = s()) != null ? b : '';
      return a + ':' + b + ':' + c;
    }
    function e() {
      return q();
    }
    g.extend = a;
    g.getSessionId = t;
    g.getId = b;
    g.getPageId_DO_NOT_USE = e;
  },
  98,
);
