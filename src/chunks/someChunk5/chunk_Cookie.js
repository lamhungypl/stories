__d(
  'Cookie',
  ['Bootloader', 'CookieConsent', 'CookieCore'],
  function (a, b, c, d, e, f, g) {
    function h(a) {
      if (!c('CookieConsent').hasConsent(1)) {
        c('Bootloader').loadModules(
          ['ODS'],
          function (b) {
            b.bumpEntityKey(2966, 'defer_cookies', 'set.' + a);
          },
          'Cookie',
        );
        return !1;
      }
      return !0;
    }
    function i() {
      return !c('CookieConsent').isCookiesBlocked();
    }
    function a(a, b) {
      if (!i() || !h(a)) return;
      d('CookieCore').set(a, b);
    }
    function b(a, b) {
      if (!i()) return;
      d('CookieCore').set(a, b);
    }
    function e(a, b, c, e, f) {
      if (!i() || !h(a)) return;
      d('CookieCore').setWithoutChecks(a, b, c, e, f);
    }
    f = babelHelpers['extends']({}, d('CookieCore'), {
      set: a,
      setWithoutChecks: e,
      setWithoutCheckingUserConsent_DANGEROUS: b,
    });
    g['default'] = f;
  },
  98,
);
