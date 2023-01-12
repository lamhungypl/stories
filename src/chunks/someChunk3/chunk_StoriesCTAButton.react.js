__d(
  'StoriesCTAButton.react',
  ['CometPressable.react', 'CometTrackingNodeProvider.react', 'react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    function a(a) {
      var b = a.link,
        d = a.onClick;
      a = a.title;
      a = h.jsx('div', {
        className:
          'x1ru42tm x4afe7t x10e4vud x6s0dn4 x1ofb795 x14ctfv x78zum5 x6prxxf x1s688f x1vqgdyp xvq8zen xlyipyv xuxw1ft',
        children: a,
      });
      return h.jsx(c('CometTrackingNodeProvider.react'), {
        trackingNode: 86,
        children: h.jsx('div', {
          className:
            'x1ru42tm x4afe7t x10e4vud x1w4261f x105w4n0 x1dgrc15 xgawykw xmigq7r x1c66dkd xng0ele xs1r7wz xzxekdx x9f619 x6ikm8r x10wlt62 x14gfdix x14ya1hp x1vjfegm',
          children:
            b != null
              ? h.jsx(c('CometPressable.react'), {
                  hideHoverOverlay: !0,
                  linkProps: { target: '_blank', url: b },
                  onPress: d,
                  children: a,
                })
              : a,
        }),
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
