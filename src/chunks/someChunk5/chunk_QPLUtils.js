__d(
  'QPLUtils',
  ['crc32'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function h(a) {
      return c('crc32')(a) >>> 0;
    }
    function a(a) {
      return a != null ? h(a) : 0;
    }
    g.unsignedCrc32 = h;
    g.deriveInstanceKey = a;
  },
  98,
);
