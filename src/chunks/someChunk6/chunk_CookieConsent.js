__d(
  'CookieConsent',
  ['CookieConsentIFrameConfig', 'InitialCookieConsent'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = new Set(c('InitialCookieConsent').initialConsent),
      i = c('InitialCookieConsent').shouldShowCookieBanner,
      j = {
        setConsented: function () {
          h.add(1), (i = !1);
        },
        hasConsent: function (a) {
          return h.has(a);
        },
        isCookiesBlocked: function () {
          return c('InitialCookieConsent').noCookies;
        },
        shouldShowCookieBanner: function () {
          return i;
        },
        isThirdPartyIframeAllowed: function (a) {
          if (j.isCookiesBlocked() || !j.hasConsent(1)) return !1;
          return c('CookieConsentIFrameConfig').allowlisted_iframes.includes(
            a.id,
          )
            ? !0
            : j.hasConsent(2);
        },
        isLocalStorageAllowed: function () {
          return !j.isCookiesBlocked() && j.hasConsent(1);
        },
      };
    a = j;
    g['default'] = a;
  },
  98,
);
