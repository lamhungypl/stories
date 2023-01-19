__d(
  'CometTopNavTargetedTabWrapper.react',
  [
    'CometRelay',
    'CometTopNavTabComponentShared.react',
    'react',
    'useHideNotificationsToasts',
    'useToasterStateManager',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    b = d('react');
    var i = b.useEffect,
      j = b.useMemo;
    function a(a) {
      var b = a.actorID,
        e = a.badgeComponent,
        f = a.badgeSubscriptionCallback,
        g = a.badgeTestID,
        l = babelHelpers.objectWithoutPropertiesLoose(a, [
          'actorID',
          'badgeComponent',
          'badgeSubscriptionCallback',
          'badgeTestID',
        ]),
        m = d('CometRelay').useRelayEnvironment(),
        n = c('useToasterStateManager')(),
        o = c('useHideNotificationsToasts')();
      i(
        function () {
          if (f) return f(b, m, n, o);
        },
        [b, f, m, o, n],
      );
      a = j(
        function () {
          return k(e, l.badgeCount, g);
        },
        [e, l.badgeCount, g],
      );
      return h.jsx(
        c('CometTopNavTabComponentShared.react'),
        babelHelpers['extends']({ badgeRenderer: a }, l),
      );
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    function k(a, b, c) {
      return function (c) {
        var d = c.isBadgeHidden,
          e = c.isTab;
        c = c.overflow;
        return a == null
          ? null
          : h.jsx(a, {
              isBadgeHidden: d,
              isTab: e,
              overflow: c,
              testid: void 0,
              value: (d = b) != null ? d : 0,
            });
      };
    }
    g['default'] = a;
  },
  98,
);
