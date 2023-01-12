__d(
  'useShouldShowMessagingEntrypoint',
  ['ProfilePlusMessaging', 'gkx', 'useShouldRenderFullTopNav'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function a(a, b) {
      var d,
        e = c('useShouldRenderFullTopNav')();
      if (!e || a == null) return !1;
      if (!c('gkx')('1673554') || !c('gkx')('1812744')) return !1;
      if (
        b !== 'JEWEL' &&
        c('ProfilePlusMessaging').shouldRedirectMessagesForAP
      )
        return !1;
      e = a.entityKeyConfig;
      e =
        b === 'JEWEL' &&
        (e == null
          ? void 0
          : (d = e.entity_type) == null
          ? void 0
          : d.value) === 'group' &&
        ((d = e.section) == null ? void 0 : d.value) === 'CHATS';
      if (e) return !0;
      return b === 'JEWEL' && a.routeType === 'media_viewer'
        ? !0
        : !Boolean(a.hideChat);
    }
    g['default'] = a;
  },
  98,
);
