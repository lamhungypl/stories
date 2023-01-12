__d(
  'MWCMThreadTypes.bs',
  [
    'LSCommunityBitOffset.bs',
    'LSCommunityCapabilityBitOffset.bs',
    'MessagingThreadType.bs',
    'bs_belt_Option',
    'bs_caml',
    'gkx',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function a(a) {
      if (
        c('bs_caml').i64_eq(a, d('MessagingThreadType.bs').communityGroup) ||
        c('bs_caml').i64_eq(
          a,
          d('MessagingThreadType.bs').communityBroadcastJoinedThread,
        )
      )
        return !0;
      else
        return c('bs_caml').i64_eq(
          a,
          d('MessagingThreadType.bs').communityPrivateHiddenJoinedThread,
        );
    }
    function b(a) {
      if (
        c('bs_caml').i64_eq(
          a,
          d('MessagingThreadType.bs').communityGroupUnjoined,
        ) ||
        c('bs_caml').i64_eq(
          a,
          d('MessagingThreadType.bs').communityBroadcastUnjoinedThread,
        )
      )
        return !0;
      else
        return c('bs_caml').i64_eq(
          a,
          d('MessagingThreadType.bs').communityPrivateHiddenUnjoinedThread,
        );
    }
    function h(a) {
      if (c('bs_caml').i64_eq(a, d('MessagingThreadType.bs').communityGroup))
        return !0;
      else
        return c('bs_caml').i64_eq(
          a,
          d('MessagingThreadType.bs').communityGroupUnjoined,
        );
    }
    function i(a) {
      if (
        c('bs_caml').i64_eq(
          a,
          d('MessagingThreadType.bs').communityBroadcastJoinedThread,
        )
      )
        return !0;
      else
        return c('bs_caml').i64_eq(
          a,
          d('MessagingThreadType.bs').communityBroadcastUnjoinedThread,
        );
    }
    function j(a) {
      if (
        c('bs_caml').i64_eq(
          a,
          d('MessagingThreadType.bs').communityPrivateHiddenJoinedThread,
        )
      )
        return !0;
      else
        return c('bs_caml').i64_eq(
          a,
          d('MessagingThreadType.bs').communityPrivateHiddenUnjoinedThread,
        );
    }
    function e(a, b) {
      b = d('LSCommunityBitOffset.bs').has(
        d('LSCommunityCapabilityBitOffset.bs').manageMember,
        b,
      );
      if (h(a.threadType)) return !0;
      else if (i(a.threadType)) return c('gkx')('6159');
      else if (j(a.threadType) && c('gkx')('6314'))
        if (
          b ||
          c('bs_caml').i64_eq(
            a.threadType,
            d('MessagingThreadType.bs').communityPrivateHiddenJoinedThread,
          )
        )
          return !0;
        else
          return c('bs_belt_Option').getWithDefault(a.hasPendingInvitation, !1);
      else return !1;
    }
    f = a;
    a = b;
    b = h;
    var k = i,
      l = j;
    e = e;
    g.isJoinedCMThread = f;
    g.isUnjoinedCMThread = a;
    g.isStandardThread = b;
    g.isBroadcastThread = k;
    g.isPrivateThread = l;
    g.isThreadEnabled = e;
  },
  98,
);
