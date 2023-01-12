__d(
  'setupNotificationsLiveQuery',
  ['WebPixelRatio', 'gkx', 'requireDeferred'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = c('requireDeferred')('CometNotificationsReceiveLiveQuery').__setRef(
      'setupNotificationsLiveQuery',
    );
    function i(a) {
      var b = {
        count: 15,
        environment: 'MAIN_SURFACE',
        filter_tokens: [],
        menuUseEntryPoint: c('gkx')('146'),
        refresh_num: 0,
        scale: d('WebPixelRatio').get(),
      };
      (a == null ? void 0 : a.count) != null && (b.count = a.count);
      (a == null ? void 0 : a.receivedNotifications) != null &&
        (b.notif_cache_ids = Array.from(
          a == null ? void 0 : a.receivedNotifications,
        ));
      (a == null ? void 0 : a.filterTokens) != null &&
        (b.filter_tokens = a == null ? void 0 : a.filterTokens);
      return b;
    }
    var j = 0,
      k = null;
    function a(a, b) {
      j++;
      function c(c) {
        c = c.subscribeToNotificationUpdates;
        var d = i(b);
        k == null ? (k = c(a, d)) : b != null && k.updateVariables(d);
      }
      h.onReady(c);
      var d = !1;
      function e() {
        if (d) return;
        d = !0;
        j--;
        j === 0 && k != null && (k.dispose(), (k = null));
      }
      return { dispose: e };
    }
    g['default'] = a;
  },
  98,
);
