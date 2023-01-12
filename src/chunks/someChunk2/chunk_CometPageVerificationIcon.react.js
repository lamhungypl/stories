__d(
  'CometPageVerificationIcon.react',
  [
    'fbt',
    'ix',
    'CometImage.react',
    'TetraIcon.react',
    'fbicon',
    'react',
    'useCurrentDisplayMode',
  ],
  function (a, b, c, d, e, f, g, h, i) {
    'use strict';
    var j = d('react');
    function a(a) {
      var b = a.isInverted,
        e = a.size;
      a = a.verificationBadge;
      var f = c('useCurrentDisplayMode')();
      f = f === 'dark';
      var g = null,
        k = d('fbicon')._(i('498144'), 12),
        l = 12;
      e === 'large' && ((l = 16), (k = d('fbicon')._(i('498145'), 16)));
      if (b === !0)
        g = j.jsx(c('TetraIcon.react'), {
          alt: h._('__JHASH__h4jHLzIOW6F__JHASH__'),
          color: 'white',
          icon: k,
          size: l,
        });
      else
        switch (a) {
          case 'BLUE_VERIFIED':
            e === 'large'
              ? (b = f ? i('1510597') : i('1510599'))
              : (b = f ? i('1510593') : i('1510595'));
            g = j.jsx(c('CometImage.react'), {
              alt: h._('__JHASH__h4jHLzIOW6F__JHASH__'),
              height: l,
              src: b,
              width: l,
            });
            break;
          case 'GRAY_VERIFIED':
            g = j.jsx(c('TetraIcon.react'), {
              alt: h._('__JHASH__h4jHLzIOW6F__JHASH__'),
              color: 'secondary',
              icon: k,
              size: l,
            });
            break;
        }
      return g != null
        ? j.jsx('span', { className: 'x3nfvp2 x11njtxf', children: g })
        : null;
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
