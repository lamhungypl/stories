__d(
  'getDefaultViewForNode',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    function a(a) {
      a = a === document ? document : a.ownerDocument;
      return a.defaultView;
    }
    f['default'] = a;
  },
  66,
);
