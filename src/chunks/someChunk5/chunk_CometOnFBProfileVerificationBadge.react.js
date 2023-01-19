__d(
  'CometOnFBProfileVerificationBadge.react',
  [
    'fbt',
    'CometHovercardTrigger.react',
    'CometPageVerificationIcon.react',
    'CometPressable.react',
    'CometProfileVerificationBadgePopover.entrypoint',
    'react',
  ],
  function (a, b, c, d, e, f, g, h) {
    'use strict';
    var i = d('react');
    function a(a) {
      var b = a.isInverted,
        d = a.profileID,
        e = a.size;
      return i.jsx(c('CometHovercardTrigger.react'), {
        align: 'start',
        display: 'inline',
        popoverEntryPoint: c('CometProfileVerificationBadgePopover.entrypoint'),
        popoverProps: { profileID: d },
        position: 'above',
        children: function (a) {
          return i.jsx(c('CometPressable.react'), {
            'aria-label': h._('__JHASH__IDQ1xIDTFLO__JHASH__'),
            cursorDisabled: !0,
            overlayRadius: '50%',
            ref: a,
            children: i.jsx(c('CometPageVerificationIcon.react'), {
              isInverted: b,
              size: e,
              verificationBadge: 'BLUE_VERIFIED',
            }),
          });
        },
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
