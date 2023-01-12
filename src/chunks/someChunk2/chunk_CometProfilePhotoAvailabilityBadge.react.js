__d(
  'CometProfilePhotoAvailabilityBadge.react',
  [
    'fbt',
    'CometBadge.react',
    'CometPressableChildrenWithOverlay.react',
    'CometPressableOverlay.react',
    'CometScreenReaderText.react',
    'react',
  ],
  function (a, b, c, d, e, f, g, h) {
    'use strict';
    var i = d('react'),
      j = h._('__JHASH__Pm4800857Zv__JHASH__');
    function a(a) {
      var b = a.pressed;
      a = a.size;
      return i.jsxs('div', {
        className:
          'x14yjl9h xudhj91 x18nykt9 xww2gxu x78zum5 x6ikm8r x10wlt62 x1n2onr6',
        children: [
          i.jsx(c('CometPressableChildrenWithOverlay.react'), {
            overlay: i.jsx(c('CometPressableOverlay.react'), {
              pressed: b,
              radius: '50%',
            }),
            children: i.jsx(c('CometBadge.react'), {
              color: 'green',
              isProfileBadge: !0,
              size: a,
            }),
          }),
          i.jsx(c('CometScreenReaderText.react'), { text: j }),
        ],
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
