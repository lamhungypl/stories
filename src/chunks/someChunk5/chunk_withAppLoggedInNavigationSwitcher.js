__d(
  'withAppLoggedInNavigationSwitcher',
  ['cr:1653853', 'cr:2693', 'react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react'),
      i =
        (e = (c = b('cr:1653853')) != null ? c : b('cr:2693')) != null
          ? e
          : null;
    function a(a) {
      return i !== null
        ? function (b) {
            b = i(b.profileSwitcherConfigQuery);
            return h.jsx(a, { profileSwitcherConfig: b });
          }
        : function () {
            return h.jsx(a, {
              profileSwitcherConfig: {
                hideProfileNavigationLink: !1,
                profilePictureUriForSettings: null,
              },
            });
          };
    }
    g['default'] = a;
  },
  98,
);
