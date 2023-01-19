__d(
  'CometNotificationsListLoadingState.react',
  [
    'fbt',
    'CometNotificationsInteractionLogger',
    'CometSettingsListDropdownLoadingState.react',
    'clearTimeout',
    'react',
    'setTimeout',
  ],
  function (a, b, c, d, e, f, g, h) {
    'use strict';
    var i = d('react'),
      j = d('react').useEffect,
      k = 1e4;
    function a() {
      j(function () {
        var a = c('setTimeout')(function () {
          d('CometNotificationsInteractionLogger').timeout();
        }, k);
        return function () {
          c('clearTimeout')(a);
        };
      }, []);
      return i.jsx(c('CometSettingsListDropdownLoadingState.react'), {
        hasActions: !0,
        title: h._('__JHASH__rvC58Q_Gtho__JHASH__'),
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
