__d(
  'CometBrowserPushRoot.react',
  [
    'Promise',
    'PushNotificationsEventEmitter',
    'PushNotificationsEventEmitterQueue',
    'Visibility',
    'promiseDone',
    'react',
    'requireDeferred',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    e = d('react');
    var i = e.useEffect,
      j = e.useState,
      k = c('requireDeferred')(
        'BrowserPushDirectPromptInstallerComet',
      ).__setRef('CometBrowserPushRoot.react'),
      l = c('requireDeferred')(
        'NotificationPermissionNoticeComet.react',
      ).__setRef('CometBrowserPushRoot.react'),
      m = c('requireDeferred')(
        'NotificationPermissionRequestComet.react',
      ).__setRef('CometBrowserPushRoot.react'),
      n = !1;
    function a(a) {
      a = j({ render: !1 });
      var d = a[0],
        e = a[1];
      a = j({ render: !1 });
      var f = a[0],
        g = a[1];
      i(function () {
        if (n) return;
        c('Visibility').addListener(c('Visibility').VISIBLE, function () {
          navigator && navigator.clearAppBadge && navigator.clearAppBadge();
        });
        c('PushNotificationsEventEmitter').removeAllListeners();
        c('PushNotificationsEventEmitter').once(
          'openInstallPush',
          function (a) {
            var d = a.appID,
              f = a.browserName,
              g = a.hideRequestOverlay,
              h = a.path,
              i = a.workerIsForPushOnly;
            c('promiseDone')(
              b('Promise')
                .all([k.load(), m.load()])
                .then(function (a) {
                  var b = a[0];
                  a = a[1];
                  g !== !0 && (e({ component: a, render: !0 }), (n = !0));
                  b.genEnableNotifications(h, d, f, i);
                }),
            );
          },
        );
        c('PushNotificationsEventEmitter').once(
          'closeInstallPush',
          function () {
            e({ render: !1 });
          },
        );
        c('PushNotificationsEventEmitter').once(
          'openPushBlockedNotice',
          function (a) {
            l.onReady(function (b) {
              g({ browserName: a, component: b, render: !0 });
            });
          },
        );
        if (c('PushNotificationsEventEmitterQueue').length > 0)
          while (c('PushNotificationsEventEmitterQueue')[0] != null) {
            var a = c('PushNotificationsEventEmitterQueue').pop();
            c('PushNotificationsEventEmitter').emit.apply(
              c('PushNotificationsEventEmitter'),
              [a.type].concat(a.args),
            );
          }
        return function () {
          c('PushNotificationsEventEmitter').removeAllListeners();
        };
      }, []);
      if (d.render === !0 && d.component != null) {
        a = d.component;
        return h.jsx(a, {
          onClick: function () {
            e({ render: !1 });
          },
        });
      } else if (f.render && f.component != null) {
        d = f.component;
        return h.jsx(d, {
          browserName: f.browserName,
          onHide: function () {
            g({ render: !1 });
          },
          shortText: !1,
        });
      }
      return null;
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
