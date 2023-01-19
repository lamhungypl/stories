__d(
  'CometSettingsBadge.react',
  [
    'CometBadge.react',
    'CometRelay',
    'CometSettingsBadgeQuery.graphql',
    'react',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h,
      i = d('react'),
      j = d('react').useState;
    function a(a) {
      a = a.isActive;
      var e = d('CometRelay').useLazyLoadQuery(
          h !== void 0 ? h : (h = b('CometSettingsBadgeQuery.graphql')),
          {},
        ),
        f = j(!1),
        g = f[0];
      f = f[1];
      a && !g && f(!0);
      if (g) return null;
      f = Boolean(
        e == null
          ? void 0
          : (a = e.viewer) == null
          ? void 0
          : a.device_switchable_account_has_notification,
      );
      return f === !1
        ? null
        : i.jsx(c('CometBadge.react'), {
            border: 'white',
            color: 'red',
            isProfileBadge: !0,
            size: 10,
          });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
