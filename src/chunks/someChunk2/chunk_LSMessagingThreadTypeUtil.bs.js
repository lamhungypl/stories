__d(
  'LSMessagingThreadTypeUtil.bs',
  [
    'LSThreadBitOffset.bs',
    'LSThreadCapabilityBitOffset.bs',
    'LsSystemFolder.bs',
    'MWCMIsAnyCMThread',
    'MessagingThreadType.bs',
    'bs_caml',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function a(a) {
      if (
        c('bs_caml').i64_eq(a, d('MessagingThreadType.bs').group) ||
        c('bs_caml').i64_eq(
          a,
          d('MessagingThreadType.bs').tincanGroupDisappearing,
        ) ||
        c('bs_caml').i64_eq(
          a,
          d('MessagingThreadType.bs').secureMessageOverWaGroup,
        ) ||
        c('bs_caml').i64_eq(a, d('MessagingThreadType.bs').marketplace) ||
        c('MWCMIsAnyCMThread')(a) ||
        c('bs_caml').i64_eq(a, d('MessagingThreadType.bs').room) ||
        c('bs_caml').i64_eq(
          a,
          d('MessagingThreadType.bs').discoverablePublicChat,
        ) ||
        c('bs_caml').i64_eq(
          a,
          d('MessagingThreadType.bs').discoverablePublicChatUnjoined,
        )
      )
        return !0;
      else return !1;
    }
    function b(a) {
      if (
        c('bs_caml').i64_eq(a, d('MessagingThreadType.bs').oneToOne) ||
        c('bs_caml').i64_eq(a, d('MessagingThreadType.bs').tincanOneToOne) ||
        c('bs_caml').i64_eq(
          a,
          d('MessagingThreadType.bs').carrierMessagingOneToOne,
        ) ||
        c('bs_caml').i64_eq(
          a,
          d('MessagingThreadType.bs').tincanOneToOneDisappearing,
        ) ||
        c('bs_caml').i64_eq(
          a,
          d('MessagingThreadType.bs').secureMessageOverWaOneToOne,
        )
      )
        return !0;
      else return !1;
    }
    function e(a) {
      if (
        c('bs_caml').i64_eq(
          a,
          d('MessagingThreadType.bs').secureMessageOverWaOneToOne,
        ) ||
        c('bs_caml').i64_eq(
          a,
          d('MessagingThreadType.bs').secureMessageOverWaGroup,
        )
      )
        return !0;
      else return !1;
    }
    function f(a) {
      a = a.NAME;
      if (a === 'Group') return d('MessagingThreadType.bs').group;
      else if (a === 'User' || a === 'Page')
        return d('MessagingThreadType.bs').oneToOne;
      else return d('MessagingThreadType.bs').tincanOneToOne;
    }
    function h(a) {
      if (
        c('bs_caml').i64_eq(
          a,
          d('MessagingThreadType.bs').secureMessageOverWaOneToOne,
        ) ||
        c('bs_caml').i64_eq(
          a,
          d('MessagingThreadType.bs').secureMessageOverWaGroup,
        ) ||
        c('bs_caml').i64_eq(a, d('MessagingThreadType.bs').oneToOne) ||
        c('bs_caml').i64_eq(a, d('MessagingThreadType.bs').group)
      )
        return !0;
      else return !1;
    }
    function i(a) {
      if (a === 'e2ee_cutover') return !0;
      else return a === 'inbox';
    }
    function j(a) {
      return d('LSThreadBitOffset.bs').has(
        d('LSThreadCapabilityBitOffset.bs').messageRequestComposerBanner,
        a,
      );
    }
    function k(a) {
      return c('bs_caml').i64_eq(
        a.parentThreadKey,
        d('LsSystemFolder.bs').spam,
      );
    }
    function l(a) {
      return c('bs_caml').i64_eq(
        a.parentThreadKey,
        d('LsSystemFolder.bs').businessSupport,
      );
    }
    a = a;
    b = b;
    e = e;
    f = f;
    h = h;
    i = i;
    j = j;
    k = k;
    l = l;
    g.isGroup = a;
    g.isOneToOne = b;
    g.isSecure = e;
    g.ofThreadId = f;
    g.isRecentsSectionAllowedTypes = h;
    g.isMessengerOrE2EEInbox = i;
    g.isMessageRequest = j;
    g.isHiddenRequest = k;
    g.isBusinessSupportThread = l;
  },
  98,
);
