__d(
  'CometLeftRailBreadcrumbLink.react',
  ['CometLink.react', 'TetraText.react', 'react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    function a(a) {
      var b = a.isCurrentPage;
      b = b === void 0 ? !1 : b;
      a = a.linkInfo;
      var d = 'secondary',
        e = a.url != null || a.onPress != null,
        f = a.replace != null ? a.replace : !1;
      e = e
        ? h.jsx(c('CometLink.react'), {
            'aria-current': b ? 'page' : void 0,
            color: d,
            href: a.url,
            onClick: a.onPress,
            replace: f,
            target: f === !0 ? '_self' : void 0,
            weight: 'normal',
            children: a.label,
          })
        : a.label;
      return h.jsx(c('TetraText.react'), {
        color: d,
        type: 'meta3',
        children: e,
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
