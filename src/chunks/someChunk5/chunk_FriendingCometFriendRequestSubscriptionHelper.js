__d(
  'FriendingCometFriendRequestSubscriptionHelper',
  ['gkx', 'requireDeferred'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = c('requireDeferred')(
        'FriendingCometFriendRequestConfirmSubscription',
      ).__setRef('FriendingCometFriendRequestSubscriptionHelper'),
      i = c('requireDeferred')(
        'FriendingCometFriendRequestReceiveSubscription',
      ).__setRef('FriendingCometFriendRequestSubscriptionHelper');
    function a(a, b, d, e) {
      var f, g;
      function j(c) {
        c = c.subscribe;
        f = c(a, b, d, e);
      }
      function k(c) {
        c = c.subscribe;
        g = c(a, b, d, e);
      }
      var l = c('gkx')('3868') ? h.onReadyImmediately(j) : h.onReady(j),
        m = c('gkx')('3868') ? i.onReadyImmediately(k) : i.onReady(k);
      return function () {
        var a;
        c('gkx')('3868') && (l.remove(), m.remove());
        (a = g) == null ? void 0 : a.dispose();
        (a = f) == null ? void 0 : a.dispose();
      };
    }
    g.setupFriendingSubscription = a;
  },
  98,
);
