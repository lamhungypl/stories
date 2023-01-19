__d(
  'CometProfilePhotoLastActiveTimeBadge.react',
  ['CometRelativeTimestamp.react', 'MWChatActivePill.react', 'react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    function a(a) {
      var b = a.border;
      b = b === void 0 ? 'card-background' : b;
      var d = a.pressed;
      a = a.time;
      return h.jsx(c('MWChatActivePill.react'), {
        border: b,
        pressed: d,
        children: h.jsx(c('CometRelativeTimestamp.react'), {
          date: new Date(a * 1e3),
          format: 'minimized',
        }),
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
