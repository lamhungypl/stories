__d(
  'react-relay/assertFragmentMap',
  ['invariant'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function a(a, b) {
      (b && typeof b === 'object') || g(0, 5879, a, b);
      for (var c in b)
        if (Object.prototype.hasOwnProperty.call(b, c)) {
          var d = b[c];
          (d && (typeof d === 'object' || typeof d === 'function')) ||
            g(0, 5880, a, c, d);
        }
    }
    e.exports = a;
  },
  null,
);
