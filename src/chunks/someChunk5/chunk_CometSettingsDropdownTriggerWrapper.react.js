__d(
  'CometSettingsDropdownTriggerWrapper.react',
  [
    'fbt',
    'CometPlaceholder.react',
    'CometSettingsBadge.react',
    'CometSettingsDropdownPopoverTrigger.react',
    'CometSettingsDropdownTrigger.react',
    'CometTooltip.react',
    'gkx',
    'react',
  ],
  function (a, b, c, d, e, f, g, h) {
    'use strict';
    var i = d('react'),
      j = c('gkx')('1663500'),
      k = h._('__JHASH__mp7QcW6dSyw__JHASH__');
    function a(a) {
      var b = a.dropdownPosition,
        d = b === void 0 ? 'below' : b,
        e = a.profilePictureUri;
      b = j ? 'small' : 'large';
      return i.jsx(c('CometSettingsDropdownPopoverTrigger.react'), {
        dropdownPosition: d,
        iconSize: b,
        tracePolicy: 'comet.jewel.settings',
        children: function (a, b, f, g, h, j, m, n) {
          return i.jsx(c('CometTooltip.react'), {
            position: d,
            tooltip: k,
            children: i.jsxs('div', {
              className:
                'x78zum5 x1n2onr6' + (d === 'end' ? ' x1ye3gou xn6708d' : ''),
              ref: a,
              children: [
                i.jsx(c('CometSettingsDropdownTrigger.react'), {
                  onHoverIn: g,
                  onHoverOut: h,
                  onPress: b,
                  onPressIn: j,
                  profilePictureUri: e,
                  size: 40,
                  testid: void 0,
                  type: n ? 'deemphasized-overlay' : 'normal',
                }),
                i.jsx(l, { isVisible: n }),
              ],
            }),
          });
        },
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    function l(a) {
      a = a.isVisible;
      return i.jsx('div', {
        className: 'xds687c x10l6tqk x13vifvy',
        children: i.jsx(c('CometPlaceholder.react'), {
          fallback: null,
          children: i.jsx(c('CometSettingsBadge.react'), { isActive: a }),
        }),
      });
    }
    l.displayName = l.name + ' [from ' + f.id + ']';
    b = i.memo(a);
    g['default'] = b;
  },
  98,
);
