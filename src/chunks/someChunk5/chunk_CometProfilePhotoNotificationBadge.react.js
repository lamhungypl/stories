__d(
  'CometProfilePhotoNotificationBadge.react',
  ['CometBadge.react', 'TetraText.react', 'react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    function a(a) {
      a = a.number;
      return h.jsx(c('CometBadge.react'), {
        color: 'red',
        isProfileBadge: !0,
        size: 18,
        wide: a > 9 ? 'wide' : 'normal',
        children: h.jsx('div', {
          className: 'x6s0dn4 x78zum5 x5yr21d xl56j7k xuxw1ft xh8yej3',
          children: h.jsx(c('TetraText.react'), {
            color: 'primaryOnMedia',
            type: 'body4',
            children: a > 9 ? '9+' : a,
          }),
        }),
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
