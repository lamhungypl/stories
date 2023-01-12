__d(
  'nullIntersectionObserverEntryLogger',
  ['FBLogger', 'Random'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function a(a, b) {
      a == null &&
        d('Random').coinflip(100) &&
        c('FBLogger')('comet_infra').warn(b);
    }
    g['default'] = a;
  },
  98,
);
