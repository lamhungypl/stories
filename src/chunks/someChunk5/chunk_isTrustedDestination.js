__d(
  'isTrustedDestination',
  [
    'LinkshimHandlerConfig',
    'isBulletinDotComURI',
    'isEnterpriseURI',
    'isFacebookURI',
    'isInstagramURI',
    'isInternalFBURI',
    'isOculusDotComURI',
    'isRoomsURI',
    'isTrustedCMSContentURI',
    'isWhatsAppURI',
    'isWorkAccountsURI',
    'isWorkplaceDotComURI',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function h() {
      return /(^|\.)oculus\.com$/.test(
        c('LinkshimHandlerConfig').current_domain,
      );
    }
    function i() {
      return /(^|\.)workplace\.com$/.test(
        c('LinkshimHandlerConfig').current_domain,
      );
    }
    function j() {
      return d('isWorkAccountsURI').isWorkAccountsDomain(
        c('LinkshimHandlerConfig').current_domain,
      );
    }
    function k() {
      return /(^|\.)accountscenter\.meta\.com$/.test(
        c('LinkshimHandlerConfig').current_domain,
      );
    }
    function l() {
      return /(^|\.)(facebook|meta)enterprise\.com$/.test(
        c('LinkshimHandlerConfig').current_domain,
      );
    }
    function m() {
      return /(^|\.)bulletin\.com$/.test(
        c('LinkshimHandlerConfig').current_domain,
      );
    }
    function n() {
      return /(^|\.)www\.meta\.com$/.test(
        c('LinkshimHandlerConfig').current_domain,
      );
    }
    function o() {
      return /^store(\..+)?\.facebook\.com$/.test(
        c('LinkshimHandlerConfig').current_domain,
      );
    }
    function p() {
      return /(^|\.)about\.meta\.com$|^about(\..+)?\.facebook\.com$/.test(
        c('LinkshimHandlerConfig').current_domain,
      );
    }
    function q() {
      return /(^|\.)internalfb\.com$/.test(
        c('LinkshimHandlerConfig').current_domain,
      );
    }
    function r() {
      return /(^|\.)instagram\.com$/.test(
        c('LinkshimHandlerConfig').current_domain,
      );
    }
    function s() {
      return /(^|\.)whatsapp\.com$/.test(
        c('LinkshimHandlerConfig').current_domain,
      );
    }
    function t(a) {
      return c('isFacebookURI')(a);
    }
    function u(a) {
      return c('isWorkplaceDotComURI')(a);
    }
    function a(a) {
      if (
        c('isRoomsURI')(a) &&
        c('LinkshimHandlerConfig').is_mobile_device === !0
      )
        return !0;
      if (i()) return u(a);
      if (q()) return c('isInternalFBURI')(a) || t(a);
      if (h()) return c('isOculusDotComURI')(a);
      if (r()) return c('isInstagramURI')(a);
      if (s()) return c('isWhatsAppURI')(a);
      if (j()) return d('isWorkAccountsURI').isWorkAccountsURI(a) || t(a);
      if (k()) return t(a) || c('isInstagramURI')(a);
      if (l()) return c('isEnterpriseURI')(a);
      if (m()) return c('isBulletinDotComURI')(a);
      return o() || n() || p() ? c('isTrustedCMSContentURI')(a) : t(a);
    }
    g['default'] = a;
  },
  98,
);
