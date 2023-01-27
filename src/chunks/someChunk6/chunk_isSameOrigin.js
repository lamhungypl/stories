__d(
  'isSameOrigin',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    function a(a, b) {
      return !a.getProtocol() ||
        !a.getDomain() ||
        !b.getProtocol() ||
        !b.getDomain()
        ? !1
        : a.getOrigin() === b.getOrigin();
    }
    f['default'] = a;
  },
  66,
);
