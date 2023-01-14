__d(
  'CookieCore',
  ['CookieCoreConfig', 'CookieDomain', 'CookieStore'],
  function (a, b, c, d, e, f, g) {
    var h = /_js_(.*)/,
      i;
    function j() {
      i || (i = d('CookieStore').newCookieStore());
      return i;
    }
    function k() {
      return '.' + c('CookieDomain').domain;
    }
    function l(a) {
      return window.self != window.top ? !1 : !0;
    }
    function m(a, b) {
      if (!r(a)) return;
      n(a, b, t(a), u(a), s(a), v(a));
    }
    function n(a, b, c, d, e, f) {
      var g = Date.now();
      if (c != null)
        if (c > g) c -= g;
        else if (c == 1) {
          o(a, d);
          return;
        }
      j().setCookie(g, a, b, d, k(), c, e, f);
    }
    function a(a, b) {
      if (!l(a)) return;
      m(a, b);
    }
    function b(a, b, c, d, e) {
      if (!l(a)) return;
      n(a, b, c, d, e);
    }
    function o(a, b) {
      b === void 0 && (b = '/'), (b = b || '/'), j().clearCookie(a, b, k());
    }
    function e(a) {
      return !r(a) ? null : j().getCookie(a);
    }
    function p(a) {
      return {
        insecure: a.i || !1,
        path: a.p || '/',
        ttlSeconds: a.t || 0,
        sameSite: a.s || 'None',
      };
    }
    function q(a) {
      if (c('CookieCoreConfig')[a] !== void 0)
        return p(c('CookieCoreConfig')[a]);
      a = a.match(h);
      return a && a.length > 1 ? q(a[1]) : null;
    }
    function r(a) {
      return q(a) !== null;
    }
    function s(a) {
      a = q(a);
      return a == null ? !0 : !a.insecure;
    }
    function t(a) {
      a = q(a);
      return a == null ? null : a.ttlSeconds * 1e3;
    }
    function u(a) {
      a = q(a);
      return a == null ? '/' : a.path;
    }
    function v(a) {
      a = q(a);
      return a == null || a.sameSite == null ? null : a.sameSite;
    }
    g.set = m;
    g.setWithoutChecks = n;
    g.setIfFirstPartyContext = a;
    g.setWithoutChecksIfFirstPartyContext = b;
    g.clear = o;
    g.get = e;
  },
  98,
);
