__d(
  'CometProfileVerificationBadge.react',
  ['cr:1899533', 'react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    function a(a) {
      var c = a.isInverted,
        d = a.profileID;
      a = a.size;
      a = a === void 0 ? 'large' : a;
      return h.jsx(b('cr:1899533'), { isInverted: c, profileID: d, size: a });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
